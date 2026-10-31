// Databases in depth: indexes, query plans, slow queries and transactions.
// Sources were checked in October 2026.
const SRC = {
  mssqlIndexGuide: { title: 'Microsoft Learn: SQL Server index architecture and design guide', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-index-design-guide' },
  mssqlClustered: { title: 'Microsoft Learn: Clustered and nonclustered indexes', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described' },
  mssqlKeys: { title: 'Microsoft Learn: Primary and foreign key constraints', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/tables/primary-and-foreign-key-constraints' },
  mssqlOnline: { title: 'Microsoft Learn: Perform index operations online', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/indexes/perform-index-operations-online' },
  mssqlFiltered: { title: 'Microsoft Learn: Create filtered indexes', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/indexes/create-filtered-indexes' },
  mssqlIncluded: { title: 'Microsoft Learn: Create indexes with included columns', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/indexes/create-indexes-with-included-columns' },
  mssqlComputed: { title: 'Microsoft Learn: Indexes on computed columns', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/indexes/indexes-on-computed-columns' },
  lukeConcat: { title: 'Use The Index, Luke: Concatenated indexes', url: 'https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys' },
  mssqlActualPlan: { title: 'Microsoft Learn: Display an actual execution plan', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/performance/display-an-actual-execution-plan' },
  mssqlStatsIo: { title: 'Microsoft Learn: SET STATISTICS IO', url: 'https://learn.microsoft.com/en-us/sql/t-sql/statements/set-statistics-io-transact-sql' },
  mssqlStatistics: { title: 'Microsoft Learn: Statistics', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/statistics/statistics' },
  mssqlQueryStore: { title: 'Microsoft Learn: Monitor performance by using the Query Store', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/performance/monitoring-performance-by-using-the-query-store' },
  efLogging: { title: 'Microsoft Learn: EF Core simple logging', url: 'https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/simple-logging' },
  efEager: { title: 'Microsoft Learn: EF Core eager loading of related data', url: 'https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager' },
  efSplit: { title: 'Microsoft Learn: EF Core single vs split queries', url: 'https://learn.microsoft.com/en-us/ef/core/querying/single-split-queries' },
  efEfficient: { title: 'Microsoft Learn: EF Core efficient querying', url: 'https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying' },
  mssqlIsolation: { title: 'Microsoft Learn: SET TRANSACTION ISOLATION LEVEL', url: 'https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql' },
  mssqlLocking: { title: 'Microsoft Learn: Transaction locking and row versioning guide', url: 'https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide' },
  mssqlHints: { title: 'Microsoft Learn: Table hints (UPDLOCK, ROWLOCK)', url: 'https://learn.microsoft.com/en-us/sql/t-sql/queries/hints-transact-sql-table' },
  efTransactions: { title: 'Microsoft Learn: EF Core transactions', url: 'https://learn.microsoft.com/en-us/ef/core/saving/transactions' },
  efConcurrency: { title: 'Microsoft Learn: EF Core handling concurrency conflicts', url: 'https://learn.microsoft.com/en-us/ef/core/saving/concurrency' },
  efExecuteUpdate: { title: 'Microsoft Learn: EF Core ExecuteUpdate and ExecuteDelete', url: 'https://learn.microsoft.com/en-us/ef/core/saving/execute-insert-update-delete' },
}

export const lessons = [
  {
    id: 'eng-db-indexes',
    unit: 'Databases in depth',
    title: 'How indexes work',
    summary: 'An index is a sorted structure the database keeps beside a table, so it can jump to rows instead of reading them all.',
    ideas: ['A sorted lookup structure', 'Clustered and nonclustered', 'What indexes cost'],
    body: `
## A sorted lookup structure

Without a useful index, \`SELECT * FROM Users WHERE Email = 'ana@example.com'\` makes SQL Server read **every row** and test each one: a **scan**. Fine for 1,000 rows; slow for 50 million.

An **index** keeps the indexed column's values in **sorted** order, like the index at the back of a book: find "Recursion" alphabetically, jump to page 212. SQL Server's indexes are **B-trees**: shallow, wide trees where each page holds hundreds of keys, so even hundreds of millions of rows need only a few levels. Finding one value is a **seek**: a handful of page reads instead of the whole table, O(log n) instead of O(n).

Sorted order helps beyond equality: ranges (\`CreatedAt >= @since\`) and \`ORDER BY CreatedAt DESC\` with \`TOP (20)\` can walk the index in order and stop early.

## Clustered and nonclustered

SQL Server has two kinds of row-store index:

- The **clustered index** *is* the table: all rows, all columns, stored in key order. There's only **one** per table. Declaring a **primary key** creates a clustered index on it by default, which is why tables are usually clustered on \`Id\`.
- A **nonclustered index** is a separate, smaller sorted copy of some columns, each entry pointing back to the row. A table can have many.

\`\`\`sql
CREATE INDEX IX_Users_Email ON Users (Email);
\`\`\`

If a query needs columns the nonclustered index doesn't have, SQL Server does a **key lookup** into the clustered index for each matching row. A few lookups are cheap; thousands are not, and that's when the next lesson's *included columns* help.

**Foreign keys aren't indexed for you.** SQL Server creates an index for primary keys and unique constraints, but not for foreign key columns, so \`Orders.CustomerId\` usually needs one you add (EF Core migrations add them for you by convention).

## What indexes cost

- **Slower writes**: every insert, delete and update of an indexed column must update each index too.
- **Space** on disk and in memory.
- **Building them locks**: by default, creating an index blocks writes to the table. \`WITH (ONLINE = ON)\` keeps it usable during the build, on editions that support it (Enterprise, Azure SQL).

So index the columns your **frequent or slow queries** filter, join and sort on, and remove indexes nothing uses.
`,
    takeaways: [
      'An index is a sorted B-tree that lets SQL Server seek to matching rows instead of scanning.',
      'The clustered index is the table in key order (one per table, the primary key by default); nonclustered indexes are extra sorted copies.',
      'Indexes slow writes and use space; add them for real queries, and index foreign keys yourself.',
    ],
    quiz: [
      {
        q: 'How many clustered indexes can a SQL Server table have?',
        options: ['One', 'Two', 'Up to 999', 'None'],
        answer: 0,
        why: 'The clustered index is the table\'s rows in key order, so there can only be one.',
      },
      {
        q: 'Which does SQL Server index automatically?',
        options: ['Foreign key columns', 'Primary keys and unique constraints', 'Every column', 'Columns used in WHERE'],
        answer: 1,
        why: 'Foreign keys need indexes you add (or that EF Core migrations add).',
      },
      {
        q: 'A query uses a nonclustered index on Email but also selects 10 other columns. What extra work happens?',
        options: ['None', 'A key lookup into the clustered index for each matching row', 'A full table rebuild', 'The index is ignored always'],
        answer: 1,
        why: 'Columns not in the index are fetched from the clustered index.',
      },
      {
        q: 'What is the main cost of adding many indexes?',
        options: ['Slower reads', 'Slower writes and more storage', 'Less security', 'Fewer rows allowed'],
        answer: 1,
        why: 'Each write must update every index.',
      },
    ],
    practice: 'In a database you use, run `EXEC sp_helpindex \'dbo.Orders\'` (or expand the table\'s Indexes folder in SSMS). Which queries does each index serve?',
    cards: [
      { id: 'c-eng-db-indexes-1', front: 'What is a database index?', back: 'A separate sorted structure (a B-tree) mapping column values to rows, so lookups seek instead of scanning the table.' },
      { id: 'c-eng-db-indexes-2', front: 'Clustered vs nonclustered index?', back: 'Clustered: the table itself, stored in key order; one per table, usually the primary key. Nonclustered: an extra sorted copy of some columns pointing to the rows.' },
      { id: 'c-eng-db-indexes-3', front: 'What is a key lookup?', back: 'Fetching columns missing from a nonclustered index from the clustered index, once per matching row.' },
      { id: 'c-eng-db-indexes-4', front: 'Does SQL Server index foreign keys automatically?', back: 'No. Primary keys and unique constraints get indexes; foreign key columns usually need one added.' },
    ],
    related: ['eng-scaling-data', 'eng-db-index-design', 'eng-ds-specialised'],
    sources: [SRC.mssqlIndexGuide, SRC.mssqlClustered, SRC.mssqlKeys, SRC.mssqlOnline],
  },
  {
    id: 'eng-db-index-design',
    unit: 'Databases in depth',
    title: 'Designing indexes for your queries',
    summary: 'Column order in a composite index matters, small changes to a query can stop an index being used, and filtered indexes save space.',
    ideas: ['Column order in composite indexes', 'When an index can\'t be used', 'Filtered and covering indexes'],
    body: `
## Column order in composite indexes

A **composite** (multicolumn) index sorts by the first column, then the second within that, like a phone book sorted by last name, then first name. It's great for "Smith, Jane" and "all Smiths", but no help finding everyone called "Jane".

\`\`\`sql
CREATE INDEX IX_Orders_CustomerId_CreatedAt ON Orders (CustomerId, CreatedAt);
\`\`\`

- \`WHERE CustomerId = 7\` can seek.
- \`WHERE CustomerId = 7 ORDER BY CreatedAt DESC\` seeks and reads already sorted.
- \`WHERE CreatedAt > @since\` alone can't seek; at best it scans the whole index.

Rule of thumb: columns tested with **equality first**, then the one used for a **range or sort**. Microsoft's index design guide gives the same advice.

## When an index can't be used

A condition that can use an index for a seek is called **SARGable**. Common ways to lose that:

- **A function on the column**: \`WHERE YEAR(CreatedAt) = 2026\` scans. Rewrite as a range: \`WHERE CreatedAt >= '2026-01-01' AND CreatedAt < '2027-01-01'\`. If you must filter on an expression, add a **computed column** and index it.
- **A leading wildcard**: \`LIKE 'ana%'\` can seek; \`LIKE '%ana'\` can't. Use full-text search for "contains".
- **Mismatched types**: comparing a \`varchar\` column with an \`nvarchar\` parameter makes SQL Server convert the column on every row (\`CONVERT_IMPLICIT\` in the plan). .NET strings are sent as \`nvarchar\` by default, so tell EF Core the column is \`varchar\` (\`.IsUnicode(false)\`) or use \`nvarchar\` columns.
- **Low selectivity**: if a condition matches a large share of the table, scanning is genuinely faster, so the optimizer rightly ignores the index.

Case-insensitive search usually needs no tricks: SQL Server's default collations are case-insensitive, so \`Email = 'Ana@Example.com'\` already matches \`ana@example.com\`.

## Filtered and covering indexes

- A **filtered index** covers only some rows: \`CREATE INDEX IX_Jobs_Pending ON Jobs (RunAt) WHERE Status = 'Pending'\`. Small, cheap to maintain, and fast when queries include that condition.
- A **covering index** holds every column a query needs. Put searched columns in the key and the rest in \`INCLUDE\`: \`CREATE INDEX IX_Orders_Customer ON Orders (CustomerId) INCLUDE (Total, Status)\`. No key lookups at all.
`,
    takeaways: [
      'Composite indexes work left to right: equality columns first, then the range or sort column.',
      'Keep predicates SARGable: no functions on columns, no leading wildcards, matching types (varchar vs nvarchar).',
      'Filtered indexes cover only the rows you query; INCLUDE columns make an index cover a query.',
    ],
    quiz: [
      {
        q: 'There\'s an index on (Country, City). Which query benefits least?',
        options: ['WHERE Country = \'NZ\'', 'WHERE Country = \'NZ\' AND City = \'Auckland\'', 'WHERE City = \'Auckland\'', 'WHERE Country = \'NZ\' ORDER BY City'],
        answer: 2,
        why: 'The leading column isn\'t constrained, so the index can\'t seek.',
      },
      {
        q: '`WHERE YEAR(OrderDate) = 2026` scans despite an index on OrderDate. Fix?',
        options: ['Add more RAM', 'Rewrite as OrderDate >= \'2026-01-01\' AND OrderDate < \'2027-01-01\'', 'Use LIKE', 'Drop the index'],
        answer: 1,
        why: 'A range on the bare column is SARGable.',
      },
      {
        q: 'A plan shows CONVERT_IMPLICIT on a varchar column compared with a C# string parameter. Why?',
        options: ['A bug in SQL Server', 'The parameter is nvarchar, so every row\'s value is converted and the index can\'t seek', 'The table is too big', 'Statistics are missing'],
        answer: 1,
        why: 'Match the types, e.g. IsUnicode(false) in EF Core.',
      },
      {
        q: 'A table of 10 million jobs has 2,000 pending. Queries always ask for pending jobs. Best index?',
        options: ['On Status alone', 'A filtered index WHERE Status = \'Pending\'', 'On every column', 'None'],
        answer: 1,
        why: 'It indexes only the rows you query, so it stays small.',
      },
    ],
    cards: [
      { id: 'c-eng-db-index-design-1', front: 'How does a composite index on (A, B) work?', back: 'Sorted by A, then B within A. It can seek for A, or A and B; not for B alone.' },
      { id: 'c-eng-db-index-design-2', front: 'What does SARGable mean?', back: 'A predicate that can use an index seek. Functions on the column, leading wildcards and implicit conversions break it.' },
      { id: 'c-eng-db-index-design-3', front: 'Why does varchar vs nvarchar matter in .NET apps?', back: 'C# strings are sent as nvarchar; comparing with a varchar column converts every row (CONVERT_IMPLICIT) and prevents seeks.' },
      { id: 'c-eng-db-index-design-4', front: 'Filtered vs covering index?', back: 'Filtered: only rows matching a WHERE. Covering: key plus INCLUDE columns hold everything a query needs, so no key lookups.' },
    ],
    related: ['eng-db-indexes', 'eng-db-explain'],
    sources: [SRC.mssqlIndexGuide, SRC.mssqlFiltered, SRC.mssqlIncluded, SRC.mssqlComputed, SRC.lukeConcat],
  },
  {
    id: 'eng-db-explain',
    unit: 'Databases in depth',
    title: 'Reading an execution plan',
    summary: 'An execution plan shows how SQL Server runs a query; the actual plan and STATISTICS IO show where the work really went.',
    ideas: ['Estimated vs actual plans', 'What to look for', 'Change one thing, measure again'],
    body: `
You can't fix a slow query by staring at the SQL. Ask the database what it does.

## Estimated vs actual plans

- The **estimated execution plan** shows how SQL Server *intends* to run a query: which indexes, which joins, in what order, with estimated row counts. It doesn't run it.
- The **actual execution plan** runs the query and adds the **real** row counts. In SSMS or Azure Data Studio, turn on "Include Actual Execution Plan" (Ctrl+M) and run.

Pair it with I/O and timing numbers:

\`\`\`sql
SET STATISTICS IO, TIME ON;
SELECT * FROM Orders WHERE CustomerId = 7;

-- Table 'Orders'. Scan count 1, logical reads 18234
-- SQL Server Execution Times: CPU time = 94 ms, elapsed time = 101 ms.
\`\`\`

**Logical reads** (8 KB pages read from memory or disk) are the most useful single number: they don't vary with server load the way time does.

## What to look for

Plans read right to left, top to bottom; the rightmost operators run first.

- **Clustered Index Scan** on a big table to return a few rows, as above: 18,234 pages read for 48 rows. A missing index. After \`CREATE INDEX IX_Orders_CustomerId ON Orders (CustomerId)\` it becomes an **Index Seek** with a handful of logical reads.
- **Key Lookup** run thousands of times: add the missing columns to the index with \`INCLUDE\`.
- **Estimated rows far from actual rows** (say 10 vs 500,000): the optimizer is working from stale **statistics** and may choose badly. \`UPDATE STATISTICS Orders\` refreshes them.
- **Warnings** on operators: yellow triangles for implicit conversions, and for sorts or hashes that **spilled to tempdb** because they didn't fit in memory.

SSMS also shows a green "Missing Index" hint. Treat it as a clue, not an order: it ignores the cost to writes and overlaps with indexes you already have.

## Change one thing, measure again

Treat tuning like debugging: form a guess, change **one** thing (an index, a rewritten condition), run again, and compare logical reads and the plan. Test on data of realistic **size**: a plan on 100 development rows says little about 10 million production rows, because the optimizer chooses differently.
`,
    takeaways: [
      'The estimated plan shows intent; the actual plan and SET STATISTICS IO, TIME show real rows, reads and time.',
      'Look for big scans returning few rows, repeated key lookups, estimate/actual mismatches and spill or conversion warnings.',
      'Change one thing at a time, compare logical reads, and test on realistically sized data.',
    ],
    quiz: [
      {
        q: 'What does the actual execution plan add over the estimated one?',
        options: ['Nicer formatting', 'Real row counts from actually running the query', 'Automatic indexes', 'A syntax check'],
        answer: 1,
        why: 'It runs the query, so it can report what really happened.',
      },
      {
        q: 'A plan shows a Clustered Index Scan reading 5 million rows to return 10. Likely fix?',
        options: ['More CPU', 'A nonclustered index on the filtered column', 'A bigger TOP', 'Nothing'],
        answer: 1,
        why: 'A selective filter on a big table wants an index seek.',
      },
      {
        q: 'Estimated rows: 12. Actual rows: 800,000. What should you suspect?',
        options: ['A bug in SQL', 'Stale statistics; update them', 'Network delay', 'Too many indexes'],
        answer: 1,
        why: 'Bad estimates lead to bad plans.',
      },
    ],
    practice: 'Run the slowest query you know of with "Include Actual Execution Plan" and SET STATISTICS IO ON. Write down the most expensive operator and one change you\'d try.',
    cards: [
      { id: 'c-eng-db-explain-1', front: 'Estimated vs actual execution plan?', back: 'Estimated: the planned steps with estimated rows, without running. Actual: runs the query and shows real row counts.' },
      { id: 'c-eng-db-explain-2', front: 'Why are logical reads a good measure?', back: 'They count pages read and don\'t swing with server load the way elapsed time does.' },
      { id: 'c-eng-db-explain-3', front: 'Warning signs in a SQL Server plan?', back: 'Big scans returning few rows, many key lookups, estimates far from actuals, implicit conversion or tempdb spill warnings.' },
    ],
    related: ['eng-db-index-design', 'eng-db-slow-queries', 'eng-debugging'],
    sources: [SRC.mssqlActualPlan, SRC.mssqlStatsIo, SRC.mssqlStatistics],
  },
  {
    id: 'eng-db-slow-queries',
    unit: 'Databases in depth',
    title: 'Finding slow queries and N+1',
    summary: 'Measure query times in production, rank queries by total time, and watch for pages that run hundreds of small queries.',
    ideas: ['Measure what\'s slow', 'Total time beats single time', 'N+1: death by a thousand queries'],
    body: `
## Measure what's slow

Guessing which query is slow is usually wrong. Let the tools tell you:

- **Query Store** records every query's plans and runtime stats over time. It's on by default for new databases in SQL Server 2022 and Azure SQL. Its "Top Resource Consuming Queries" report in SSMS is the place to start.
- **EF Core logging** shows the SQL your LINQ produces and how long each command took: \`optionsBuilder.LogTo(Console.WriteLine)\` in development, or the \`Microsoft.EntityFrameworkCore.Database.Command\` log category.
- **Traces** (see "Traces" in On the job) show which queries ran during one slow request.

Look at the **95th or 99th percentile**, not just the average: a query averaging 5 ms may take 2 seconds for your biggest customers.

As a sense of scale: an index seek for one row usually takes well under a millisecond inside SQL Server, and each round trip from your app adds network time on top. A query taking hundreds of milliseconds is almost always reading far more rows than it returns.

## Total time beats single time

Rank by **total** time, not the slowest single run. A 3-second report run twice a day matters less than a 4 ms query run 2 million times a day (over two hours of database time). In Query Store's report, choose "Total" rather than "Avg" as the statistic.

## N+1: death by a thousand queries

The most common slow page isn't one slow query; it's hundreds of fast ones:

\`\`\`csharp
var posts = await db.Posts.Take(50).ToListAsync();      // 1 query
foreach (var post in posts)
{
    var author = await db.Users.FindAsync(post.AuthorId);  // +50 queries
}
\`\`\`

That's **N+1** queries: one for the list, then one per item, each a round trip. EF Core's **lazy loading** makes it easy to write by accident, because \`post.Author\` looks like a property.

Fixes: **eager loading** with \`Include\`, which loads the authors in the same query, or a **projection** that selects only what the page shows:

\`\`\`csharp
var posts = await db.Posts.Take(50)
    .Select(p => new { p.Title, AuthorName = p.Author.Name })
    .ToListAsync();                                     // 1 query with a JOIN
\`\`\`

Including several collections at once can multiply rows; \`AsSplitQuery()\` loads them in separate queries instead. Many teams log the **number of queries per request** in development so N+1 shows up before production.
`,
    takeaways: [
      'Find slow queries with Query Store, EF Core command logging and traces; watch p95/p99, not averages.',
      'Rank by total time: frequent small queries often cost more than rare slow ones.',
      'N+1 is one query per item in a loop; fix it with Include or a Select projection.',
    ],
    quiz: [
      {
        q: 'Query A: 2 s, run 10 times a day. Query B: 5 ms, run 1 million times a day. Which costs more database time?',
        options: ['A', 'B', 'The same', 'Can\'t tell'],
        answer: 1,
        why: 'A: 20 seconds a day. B: 5,000 seconds, about 83 minutes.',
      },
      {
        q: 'A page lists 100 orders and runs 101 queries. What is this?',
        options: ['A deadlock', 'An N+1 query problem', 'A cache miss', 'Normal'],
        answer: 1,
        why: 'One query for the list plus one per order.',
      },
      {
        q: 'Best EF Core fix for N+1 loading authors for 50 posts?',
        options: ['Cache each author for 1 second', 'Include(p => p.Author) or a Select projection', 'Add an index on Posts', 'Run the queries in parallel'],
        answer: 1,
        why: 'One query with a join instead of 51.',
      },
      {
        q: 'Why look at p99 query time instead of the average?',
        options: ['Averages are illegal', 'Averages hide the slow cases real users hit', 'p99 is always smaller', 'It\'s easier'],
        answer: 1,
        why: 'Tail latency is what your unluckiest users feel.',
      },
    ],
    cards: [
      { id: 'c-eng-db-slow-queries-1', front: 'Tools for finding slow queries in SQL Server and .NET?', back: 'Query Store (Top Resource Consuming Queries), EF Core command logging (LogTo), and distributed traces.' },
      { id: 'c-eng-db-slow-queries-2', front: 'Why sort queries by total time?', back: 'A fast query run millions of times can cost more than a slow rare one.' },
      { id: 'c-eng-db-slow-queries-3', front: 'What is an N+1 query, and the EF Core fixes?', back: 'One query for a list, then one per item. Fix with Include (eager loading) or a Select projection; AsSplitQuery for several collections.' },
    ],
    inTheWild: [
      'A list page that loads instantly with 5 test rows and takes 4 seconds with 300 real rows is very often N+1.',
    ],
    related: ['eng-db-explain', 'eng-slow-code', 'fg-traces'],
    sources: [SRC.mssqlQueryStore, SRC.efLogging, SRC.efEager, SRC.efSplit, SRC.efEfficient],
  },
  {
    id: 'eng-db-transactions',
    unit: 'Databases in depth',
    title: 'Transactions and race conditions',
    summary: 'Transactions make several changes all-or-nothing; isolation, locks and concurrency tokens stop concurrent requests corrupting data.',
    ideas: ['All or nothing', 'Lost updates', 'Isolation levels and locks'],
    body: `
## All or nothing

A **transaction** groups changes so they either all happen or none do. EF Core wraps each \`SaveChangesAsync()\` in one automatically; for several steps, open one yourself:

\`\`\`csharp
await using var tx = await db.Database.BeginTransactionAsync();
from.Balance -= 100;
to.Balance += 100;
await db.SaveChangesAsync();
await tx.CommitAsync();      // disposing without commit rolls back
\`\`\`

If the server crashes midway, money doesn't vanish. That's the **A** (atomicity) in **ACID**, alongside consistency, isolation and durability.

## Lost updates

Two requests arrive at once to buy the last ticket:

\`\`\`csharp
var ticket = await db.Tickets.FindAsync(9);    // both read Stock = 1
if (ticket!.Stock > 0) { ticket.Stock--; await db.SaveChangesAsync(); }
\`\`\`

Both read 1, both see stock left, both sell. A transaction at the default level doesn't stop this. Fixes, simplest first:

- **One atomic statement**: \`UPDATE Tickets SET Stock = Stock - 1 WHERE Id = 9 AND Stock > 0\`. In EF Core: \`ExecuteUpdateAsync\`, then check that one row changed.
- **Optimistic concurrency**: add a \`[Timestamp] byte[] RowVersion\` property. EF Core then includes it in the \`WHERE\`, and the second save throws \`DbUpdateConcurrencyException\`, so you can reload and retry.
- A **unique index** so the database rejects duplicates (one seat, one booking).
- **Lock the row** while deciding: \`SELECT ... FROM Tickets WITH (UPDLOCK, ROWLOCK) WHERE Id = 9\` inside a transaction makes the second request wait.

## Isolation levels and locks

The **isolation level** decides what concurrent transactions see of each other:

| Level | Notes |
|---|---|
| Read committed | SQL Server's default. With locking, readers can wait for writers; with READ_COMMITTED_SNAPSHOT on (the default in Azure SQL), they read the last committed version instead. |
| Snapshot | The whole transaction sees one consistent version of the data. |
| Serializable | Behaves as if transactions ran one at a time, using range locks. Safest; most blocking. |

Keep transactions **short**: never call a payment API or send email while holding locks, because every request touching those rows waits. Two transactions locking the same rows in opposite orders **deadlock**; SQL Server kills one (error 1205), so retry it, and access tables in a consistent order.
`,
    takeaways: [
      'Transactions make a group of changes all-or-nothing; EF Core wraps each SaveChanges in one.',
      'Read-then-write races lose updates; use atomic updates, rowversion concurrency tokens, unique indexes or UPDLOCK.',
      'Know your isolation level (read committed by default), retry deadlocks, and keep transactions short.',
    ],
    quiz: [
      {
        q: 'Two requests both read Stock = 1 and both sell. Simplest fix?',
        options: ['Add a cache', 'An atomic UPDATE ... WHERE Id = 9 AND Stock > 0 (ExecuteUpdateAsync), checking rows affected', 'Sleep between read and write', 'A bigger server'],
        answer: 1,
        why: 'The database checks and changes it in one step.',
      },
      {
        q: 'What does a [Timestamp] rowversion property do in EF Core?',
        options: ['Records when a row was created', 'Makes a conflicting save throw DbUpdateConcurrencyException instead of silently overwriting', 'Speeds up queries', 'Encrypts the row'],
        answer: 1,
        why: 'That\'s optimistic concurrency.',
      },
      {
        q: 'Why not call a payment provider inside a database transaction?',
        options: ['It\'s not allowed', 'Locks are held while waiting on the network, blocking other requests', 'It makes the payment faster', 'EF Core forbids HTTP calls'],
        answer: 1,
        why: 'Keep transactions short; do slow external work outside them.',
      },
    ],
    cards: [
      { id: 'c-eng-db-transactions-1', front: 'What does a transaction guarantee?', back: 'Its changes commit together or not at all (atomicity), isolated from concurrent transactions.' },
      { id: 'c-eng-db-transactions-2', front: 'Four fixes for a lost-update race in .NET/SQL Server?', back: 'Atomic ExecuteUpdateAsync with a condition, a rowversion concurrency token, a unique index, or UPDLOCK in a transaction.' },
      { id: 'c-eng-db-transactions-3', front: 'SQL Server\'s default isolation level?', back: 'Read committed: with locks on SQL Server by default, or row versions when READ_COMMITTED_SNAPSHOT is on (default in Azure SQL).' },
    ],
    related: ['web-databases', 'fg-idempotency'],
    sources: [SRC.mssqlIsolation, SRC.mssqlLocking, SRC.mssqlHints, SRC.efTransactions, SRC.efConcurrency, SRC.efExecuteUpdate],
  },
]

export const drills = [
  {
    id: 'eng-db-dr-1',
    kind: 'code',
    prompt: '`SELECT TOP (20) * FROM Orders WHERE CustomerId = 42 ORDER BY CreatedAt DESC` takes 900 ms on 30 million rows. The plan shows a Clustered Index Scan. What index would you add, and why that column order?',
    answer: '`CREATE INDEX IX_Orders_CustomerId_CreatedAt ON Orders (CustomerId, CreatedAt DESC) WITH (ONLINE = ON)`. The equality column (CustomerId) comes first, so SQL Server seeks straight to that customer; within it, rows are already sorted by CreatedAt, so it reads the newest 20 entries and stops: no scan, no sort. Because the query selects every column, each of the 20 rows needs a key lookup, which is fine for 20 rows (or INCLUDE the columns the page needs). ONLINE = ON avoids blocking writes where the edition supports it. Re-run with the actual plan and STATISTICS IO to confirm an Index Seek and a few logical reads.',
  },
  {
    id: 'eng-db-dr-2',
    kind: 'code',
    prompt: 'EF Core runs `db.Customers.Where(c => c.Code == code)`. The `Code` column is `varchar(20)` with an index, but the plan shows an Index Scan with a CONVERT_IMPLICIT warning. Why, and how do you fix it?',
    answer: 'C# strings are sent as nvarchar parameters by default. Comparing an nvarchar parameter with a varchar column makes SQL Server convert the column value on every row, so it can\'t seek. Fix: tell EF Core the column\'s real type, `modelBuilder.Entity<Customer>().Property(c => c.Code).IsUnicode(false).HasMaxLength(20)` (or `[Unicode(false)]`), so the parameter is sent as varchar; or make the column nvarchar.',
  },
  {
    id: 'eng-db-dr-3',
    kind: 'code',
    prompt: 'A Razor page lists 200 projects with their owner\'s name and takes 3 seconds. Query Store shows nothing slower than 5 ms. What\'s the likely cause, and how do you confirm and fix it?',
    answer: 'Probably N+1: one query for the projects, then one per project for its owner (201 quick queries, each a round trip), often from lazy loading `project.Owner.Name` in the view. Confirm with EF Core command logging (LogTo) or a trace showing hundreds of commands per request, or Query Store\'s execution counts. Fix with `.Include(p => p.Owner)` or, better, a projection: `.Select(p => new { p.Name, Owner = p.Owner.Name })`, which is one query with a join.',
  },
  {
    id: 'eng-db-dr-4',
    kind: 'design',
    prompt: 'Two users click "Book" on the last seat at the same moment, and both bookings succeed. Which fix is simplest and most reliable?',
    options: ['Check availability in the frontend first', 'Let the database decide atomically: a conditional update (ExecuteUpdateAsync where BookedBy is null) and check rows affected, or a unique index on the seat', 'Add a 1-second delay', 'Cache seat availability'],
    answer: 1,
    explanation: 'Read-then-write in application code races; the database can check and change in one step.',
  },
  {
    id: 'eng-db-dr-5',
    kind: 'design',
    prompt: 'Query Store\'s Top Resource Consuming Queries shows: query A, 12 executions, average 1,800 ms; query B, 4 million executions, average 3 ms. Where do you start?',
    options: ['Query A: it\'s slowest', 'Query B: about 3.3 hours of total duration vs about 22 seconds', 'Neither', 'Add indexes everywhere'],
    answer: 1,
    explanation: 'Rank by total; B costs far more overall (though A may still matter if a user waits on it).',
  },
]
