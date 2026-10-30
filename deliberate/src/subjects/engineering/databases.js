// Databases in depth: indexes, query plans, slow queries and transactions.
// Sources were checked in October 2026.
const SRC = {
  pgIndexes: { title: 'PostgreSQL docs: Indexes, introduction', url: 'https://www.postgresql.org/docs/current/indexes-intro.html' },
  pgIndexTypes: { title: 'PostgreSQL docs: Index types', url: 'https://www.postgresql.org/docs/current/indexes-types.html' },
  pgCreateIndex: { title: 'PostgreSQL docs: CREATE INDEX (including CONCURRENTLY)', url: 'https://www.postgresql.org/docs/current/sql-createindex.html' },
  pgConstraints: { title: 'PostgreSQL docs: Constraints (foreign keys)', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
  pgMulticolumn: { title: 'PostgreSQL docs: Multicolumn indexes', url: 'https://www.postgresql.org/docs/current/indexes-multicolumn.html' },
  pgExpression: { title: 'PostgreSQL docs: Indexes on expressions', url: 'https://www.postgresql.org/docs/current/indexes-expressional.html' },
  pgPartial: { title: 'PostgreSQL docs: Partial indexes', url: 'https://www.postgresql.org/docs/current/indexes-partial.html' },
  pgIndexOnly: { title: 'PostgreSQL docs: Index-only scans and covering indexes', url: 'https://www.postgresql.org/docs/current/indexes-index-only-scans.html' },
  lukeConcat: { title: 'Use The Index, Luke: Concatenated indexes', url: 'https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys' },
  lukeFunctions: { title: 'Use The Index, Luke: Functions in WHERE clauses', url: 'https://use-the-index-luke.com/sql/where-clause/functions/case-insensitive-search' },
  pgExplain: { title: 'PostgreSQL docs: Using EXPLAIN', url: 'https://www.postgresql.org/docs/current/using-explain.html' },
  pgStatStatements: { title: 'PostgreSQL docs: pg_stat_statements', url: 'https://www.postgresql.org/docs/current/pgstatstatements.html' },
  pgLogging: { title: 'PostgreSQL docs: Error reporting and logging (log_min_duration_statement)', url: 'https://www.postgresql.org/docs/current/runtime-config-logging.html' },
  djangoQuerysets: { title: 'Django docs: QuerySet API (select_related, prefetch_related)', url: 'https://docs.djangoproject.com/en/5.2/ref/models/querysets/' },
  railsEager: { title: 'Rails Guides: Active Record query interface (eager loading)', url: 'https://guides.rubyonrails.org/active_record_querying.html' },
  pgIsolation: { title: 'PostgreSQL docs: Transaction isolation', url: 'https://www.postgresql.org/docs/current/transaction-iso.html' },
  pgLocking: { title: 'PostgreSQL docs: Explicit locking', url: 'https://www.postgresql.org/docs/current/explicit-locking.html' },
}

export const lessons = [
  {
    id: 'eng-db-indexes',
    unit: 'Databases in depth',
    title: 'How indexes work',
    summary: 'An index is a sorted structure the database keeps beside a table, so it can jump to rows instead of reading them all.',
    ideas: ['A sorted lookup structure', 'Why lookups get fast', 'What indexes cost'],
    body: `
## A sorted lookup structure

Without an index, \`SELECT * FROM users WHERE email = 'ana@example.com'\` makes the database read **every row** and test each one: a **sequential scan**. Fine for 1,000 rows; slow for 50 million.

An **index** is a separate structure holding the indexed column's values in **sorted** order, each pointing to its row. Like the index at the back of a book: find "Recursion" alphabetically, jump to page 212.

\`\`\`sql
CREATE INDEX users_email_idx ON users (email);
\`\`\`

The usual kind is a **B-tree**: a shallow, wide tree where each page holds hundreds of keys. PostgreSQL also has hash, GIN (for arrays, JSON and full-text search), GiST and BRIN indexes, but B-trees handle equality, ranges (\`<\`, \`BETWEEN\`) and sorting, so they're the default.

## Why lookups get fast

Because each tree page branches hundreds of ways, even hundreds of millions of rows need only a handful of levels. Finding one value means reading a few pages instead of the whole table: O(log n) instead of O(n).

Sorted order helps beyond equality: \`WHERE created_at > now() - interval '1 day'\` and \`ORDER BY created_at DESC LIMIT 20\` can walk the index in order and stop early.

Some indexes appear automatically: **primary keys** and **unique** constraints create them. But PostgreSQL does **not** index foreign key columns for you. \`orders.user_id\` usually needs an index you add yourself, or joins and cascading deletes scan the whole table.

## What indexes cost

Indexes aren't free:

- **Slower writes**: every insert, and every update to an indexed column, must update each index too.
- **Disk and memory**: indexes take space and compete for cache.
- **Building them locks**: a plain \`CREATE INDEX\` blocks writes to the table while it builds. On a live table, PostgreSQL's \`CREATE INDEX CONCURRENTLY\` avoids that, at the cost of a slower build.

So index the columns your **frequent or slow queries** filter, join and sort on, and remove indexes nothing uses.
`,
    takeaways: [
      'An index is a sorted structure (usually a B-tree) that lets the database jump to matching rows.',
      'It turns full scans into a few page reads, and also speeds up ranges and ORDER BY ... LIMIT.',
      'Indexes slow writes and use space; add them for real queries, and index foreign keys yourself.',
    ],
    quiz: [
      {
        q: 'A query filters 20 million rows on an unindexed column. What does the database do?',
        options: ['Uses the primary key', 'Reads every row (a sequential scan)', 'Returns an error', 'Guesses'],
        answer: 1,
        why: 'With no usable index, every row must be checked.',
      },
      {
        q: 'Which does PostgreSQL index automatically?',
        options: ['Foreign key columns', 'Primary keys and unique constraints', 'Every column', 'Columns used in WHERE'],
        answer: 1,
        why: 'Foreign keys need indexes you add yourself.',
      },
      {
        q: 'What is the main cost of adding many indexes?',
        options: ['Slower reads', 'Slower writes and more storage', 'Less security', 'Fewer rows allowed'],
        answer: 1,
        why: 'Each write must update every index.',
      },
      {
        q: 'You must add an index to a busy production table in PostgreSQL. What helps?',
        options: ['DROP TABLE first', 'CREATE INDEX CONCURRENTLY', 'Restart the server', 'Add it during peak traffic'],
        answer: 1,
        why: 'It builds without blocking writes.',
      },
    ],
    practice: 'In a database you use, list the indexes on one important table (in psql: `\\d tablename`). Which queries does each one serve?',
    cards: [
      { id: 'c-eng-db-indexes-1', front: 'What is a database index?', back: 'A separate sorted structure (usually a B-tree) mapping column values to rows, so lookups avoid scanning the table.' },
      { id: 'c-eng-db-indexes-2', front: 'Why are B-tree lookups fast?', back: 'Each page branches hundreds of ways, so even huge tables need only a few levels: O(log n).' },
      { id: 'c-eng-db-indexes-3', front: 'Does PostgreSQL index foreign keys automatically?', back: 'No. Primary keys and unique constraints get indexes; foreign key columns usually need one added.' },
      { id: 'c-eng-db-indexes-4', front: 'Costs of an index?', back: 'Slower inserts and updates, extra storage, and a build that locks writes unless done CONCURRENTLY.' },
    ],
    related: ['eng-scaling-data', 'eng-db-index-design', 'eng-ds-specialised'],
    sources: [SRC.pgIndexes, SRC.pgIndexTypes, SRC.pgCreateIndex, SRC.pgConstraints],
  },
  {
    id: 'eng-db-index-design',
    unit: 'Databases in depth',
    title: 'Designing indexes for your queries',
    summary: 'Column order in a composite index matters, small changes to a query can stop an index being used, and partial indexes save space.',
    ideas: ['Column order in composite indexes', 'When an index can\'t be used', 'Partial and covering indexes'],
    body: `
## Column order in composite indexes

A **composite** (multicolumn) index sorts by the first column, then the second within that, like a phone book sorted by last name, then first name. It's great for "Smith, Jane" and for "all Smiths", but no help finding everyone called "Jane".

\`\`\`sql
CREATE INDEX orders_user_status_idx ON orders (user_id, status);
\`\`\`

- \`WHERE user_id = 7\` uses it.
- \`WHERE user_id = 7 AND status = 'paid'\` uses it fully.
- \`WHERE status = 'paid'\` alone mostly can't. PostgreSQL 18 can sometimes "skip scan", but only when the first column has few distinct values.

Rule of thumb: columns tested with **equality first**, then the one used for a **range or sort**. An index on \`(user_id, created_at)\` serves "this user's orders, newest first" perfectly. The PostgreSQL docs advise using multicolumn indexes sparingly; more than three columns is rarely useful.

## When an index can't be used

Common ways a query silently skips an index:

- **A function on the column**: \`WHERE lower(email) = 'ana@x.com'\` can't use an index on \`email\`. Index the expression instead: \`CREATE INDEX ON users (lower(email))\`.
- **A leading wildcard**: \`LIKE 'ana%'\` can use a B-tree (with the right collation or operator class); \`LIKE '%ana'\` can't. Use full-text or trigram indexes for "contains".
- **Mismatched types**: comparing a text column with a number may force a conversion on every row.
- **Low selectivity**: if a condition matches a large share of the table, reading the table directly is faster, so the planner rightly ignores the index.

## Partial and covering indexes

- A **partial index** covers only some rows: \`CREATE INDEX ON jobs (run_at) WHERE status = 'pending'\`. Small and fast when queries always include that condition.
- A **covering index** includes extra columns (\`INCLUDE (total)\` in PostgreSQL) so the query is answered from the index alone, an **index-only scan**, without visiting the table.
`,
    takeaways: [
      'Composite indexes work left to right: equality columns first, then the range or sort column.',
      'Functions on columns, leading wildcards and type mismatches can stop an index being used.',
      'Partial indexes cover only the rows you query; covering indexes can skip the table entirely.',
    ],
    quiz: [
      {
        q: 'There\'s an index on (country, city). Which query benefits least?',
        options: ['WHERE country = \'NZ\'', 'WHERE country = \'NZ\' AND city = \'Auckland\'', 'WHERE city = \'Auckland\'', 'WHERE country = \'NZ\' ORDER BY city'],
        answer: 2,
        why: 'The leading column isn\'t constrained, so the index mostly can\'t narrow the search.',
      },
      {
        q: '`WHERE lower(email) = $1` is slow despite an index on email. Fix?',
        options: ['Add an index on lower(email)', 'Add more RAM', 'Use LIKE', 'Drop the index'],
        answer: 0,
        why: 'An expression index matches the expression the query uses.',
      },
      {
        q: 'Which pattern can a normal B-tree index not help with?',
        options: ['= \'ana\'', 'LIKE \'ana%\'', 'LIKE \'%ana\'', 'BETWEEN 1 AND 9'],
        answer: 2,
        why: 'A leading wildcard means the start of the value is unknown, so sorted order doesn\'t help.',
      },
      {
        q: 'A table of 10 million jobs has 2,000 pending. Queries always ask for pending jobs. Best index?',
        options: ['On status alone', 'A partial index WHERE status = \'pending\'', 'On every column', 'None'],
        answer: 1,
        why: 'It indexes only the rows you query, so it stays small.',
      },
    ],
    cards: [
      { id: 'c-eng-db-index-design-1', front: 'How does a composite index on (a, b) work?', back: 'Sorted by a, then b within a. It helps queries on a, or a and b; not b alone (except rare skip scans).' },
      { id: 'c-eng-db-index-design-2', front: 'Column order rule for composite indexes?', back: 'Equality columns first, then the column used for a range or ORDER BY.' },
      { id: 'c-eng-db-index-design-3', front: 'Why might a query skip an index?', back: 'A function on the column, a leading wildcard, a type mismatch, or the condition matches too many rows.' },
      { id: 'c-eng-db-index-design-4', front: 'Partial vs covering index?', back: 'Partial: only rows matching a WHERE. Covering: includes extra columns so the query reads only the index.' },
    ],
    related: ['eng-db-indexes', 'eng-db-explain'],
    sources: [SRC.pgMulticolumn, SRC.pgExpression, SRC.pgPartial, SRC.pgIndexOnly, SRC.lukeConcat, SRC.lukeFunctions],
  },
  {
    id: 'eng-db-explain',
    unit: 'Databases in depth',
    title: 'Reading a query plan',
    summary: 'EXPLAIN shows how the database plans to run a query; EXPLAIN ANALYZE runs it and shows where the time really went.',
    ideas: ['EXPLAIN vs EXPLAIN ANALYZE', 'What to look for', 'Change one thing, measure again'],
    body: `
You can't fix a slow query by staring at the SQL. Ask the database what it does.

## EXPLAIN vs EXPLAIN ANALYZE

- \`EXPLAIN\` shows the **plan**: which tables it scans, how, in what order, and its **estimated** cost and rows. It doesn't run the query.
- \`EXPLAIN ANALYZE\` **runs** the query and adds the **actual** time and rows for every step.

\`\`\`text
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 7;

Seq Scan on orders  (cost=0.00..18334.00 rows=52 width=64)
                    (actual time=0.03..92.11 rows=48 loops=1)
  Filter: (user_id = 7)
  Rows Removed by Filter: 999952
Execution Time: 92.20 ms
\`\`\`

Careful: because ANALYZE really runs it, an \`UPDATE\` or \`DELETE\` will change data. Wrap those in \`BEGIN; ... ROLLBACK;\`.

## What to look for

Read plans from the most indented line outwards; that's where work starts.

- **Seq Scan on a big table with a selective filter**, as above: a million rows read, 48 kept. A missing index. After \`CREATE INDEX ON orders (user_id)\` the same query becomes an \`Index Scan\` taking well under a millisecond.
- **Estimated rows far from actual rows** (say 10 vs 500,000): the planner is working from stale statistics and may pick a bad plan. Run \`ANALYZE tablename\` to refresh them.
- A **Nested Loop** with a huge \`loops=\` count: an inner step repeated per outer row; often a missing index on the join column.
- **Sort using disk** ("external merge"): the sort didn't fit in memory; an index matching the \`ORDER BY\`, or a \`LIMIT\`, can avoid it.

\`EXPLAIN (ANALYZE, BUFFERS)\` also shows how many pages came from cache versus disk.

## Change one thing, measure again

Treat tuning like debugging: form a guess, change **one** thing (an index, a rewritten condition), run \`EXPLAIN ANALYZE\` again, and compare. Test on data of realistic **size**: a plan on 100 development rows says little about 10 million production rows, because the planner chooses differently.
`,
    takeaways: [
      'EXPLAIN shows the planned steps and estimates; EXPLAIN ANALYZE runs the query and shows actual times.',
      'Look for big sequential scans with selective filters, estimate/actual mismatches, huge loops and disk sorts.',
      'Change one thing at a time and measure on realistically sized data.',
    ],
    quiz: [
      {
        q: 'What does EXPLAIN ANALYZE do that EXPLAIN doesn\'t?',
        options: ['Formats the SQL', 'Actually runs the query and reports real times and rows', 'Adds indexes', 'Checks syntax only'],
        answer: 1,
        why: 'Which is also why it can change data in a write query.',
      },
      {
        q: 'A plan shows "Seq Scan ... Rows Removed by Filter: 4,999,990" to return 10 rows. Likely fix?',
        options: ['More CPU', 'An index on the filtered column', 'A bigger LIMIT', 'Nothing'],
        answer: 1,
        why: 'A selective filter on a big table wants an index.',
      },
      {
        q: 'Estimated rows: 12. Actual rows: 800,000. What should you suspect?',
        options: ['A bug in SQL', 'Stale table statistics; run ANALYZE', 'Network delay', 'Too many indexes'],
        answer: 1,
        why: 'Bad estimates lead to bad plans.',
      },
    ],
    practice: 'Run EXPLAIN ANALYZE on the slowest query you know of in a project. Write down the step that takes the most time and one change you\'d try.',
    cards: [
      { id: 'c-eng-db-explain-1', front: 'EXPLAIN vs EXPLAIN ANALYZE?', back: 'EXPLAIN: planned steps with estimates, no execution. ANALYZE: runs it and reports actual time and rows per step.' },
      { id: 'c-eng-db-explain-2', front: 'Warning signs in a query plan?', back: 'Seq scan with a selective filter on a big table, estimates far from actuals, huge loop counts, sorts spilling to disk.' },
      { id: 'c-eng-db-explain-3', front: 'Why test query plans on realistic data sizes?', back: 'The planner picks different plans for small and large tables, so tiny dev data can hide the problem.' },
    ],
    related: ['eng-db-index-design', 'eng-db-slow-queries', 'eng-debugging'],
    sources: [SRC.pgExplain],
  },
  {
    id: 'eng-db-slow-queries',
    unit: 'Databases in depth',
    title: 'Finding slow queries and N+1',
    summary: 'Measure query times in production, rank queries by total time, and watch for pages that run hundreds of small queries.',
    ideas: ['Measure what\'s slow', 'Total time beats single time', 'N+1: death by a thousand queries'],
    body: `
## Measure what's slow

Guessing which query is slow is usually wrong. Let the database tell you:

- **Slow query log**: in PostgreSQL, \`log_min_duration_statement = '250ms'\` logs every statement that takes at least that long, with its duration.
- **pg_stat_statements**: an extension that records every distinct query's call count, total time and mean time.
- **Traces** from your app (see "Traces" in On the job) show which queries ran during one slow request.

Look at the **95th or 99th percentile**, not just the average: a query averaging 5 ms may take 2 seconds for your biggest customers.

As a rough sense of scale: an indexed lookup of one row usually runs in well under a millisecond inside the database, while each round trip from your app adds network time on top. A query taking hundreds of milliseconds is almost always scanning or sorting far more rows than it returns.

## Total time beats single time

Sort \`pg_stat_statements\` by **total** time:

\`\`\`sql
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements ORDER BY total_exec_time DESC LIMIT 10;
\`\`\`

A 3-second report run twice a day matters less than a 4 ms query run 2 million times a day (over two hours of database time). Fix what costs the most in total.

## N+1: death by a thousand queries

The most common slow page isn't one slow query; it's hundreds of fast ones:

\`\`\`js
const posts = await db.post.findMany({ take: 50 })         // 1 query
for (const post of posts) {
  post.author = await db.user.findUnique({ where: { id: post.authorId } })  // +50 queries
}
\`\`\`

That's **N+1** queries: one for the list, then one per item. Each costs a round trip, so 51 quick queries can take longer than one larger one. ORMs make it easy to write by accident, because \`post.author\` looks like a property.

Fixes: a **join**, or **eager loading** that fetches all authors in a second query (\`WHERE id IN (...)\`): Django's \`select_related\` and \`prefetch_related\`, Rails' \`includes\`, Prisma's \`include\`. Many teams log the **number of queries per request** in development so N+1 shows up before production.
`,
    takeaways: [
      'Find slow queries with slow query logs, pg_stat_statements and traces; watch p95/p99, not averages.',
      'Rank by total time: frequent small queries often cost more than rare slow ones.',
      'N+1 is one query per item in a loop; fix it with a join or eager loading.',
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
        q: 'Best fix for N+1 loading authors for 50 posts?',
        options: ['Cache each author for 1 second', 'Eager load: fetch all authors in one query, or join', 'Add an index on posts', 'Run the queries in parallel'],
        answer: 1,
        why: 'Two queries (or one join) instead of 51.',
      },
      {
        q: 'Why look at p99 query time instead of the average?',
        options: ['Averages are illegal', 'Averages hide the slow cases that real users hit', 'p99 is always smaller', 'It\'s easier'],
        answer: 1,
        why: 'Tail latency is what your unluckiest users feel.',
      },
    ],
    cards: [
      { id: 'c-eng-db-slow-queries-1', front: 'Two PostgreSQL tools for finding slow queries?', back: 'log_min_duration_statement (logs statements over a threshold) and pg_stat_statements (calls, total and mean time per query).' },
      { id: 'c-eng-db-slow-queries-2', front: 'Why sort queries by total time?', back: 'A fast query run millions of times can cost more than a slow rare one.' },
      { id: 'c-eng-db-slow-queries-3', front: 'What is an N+1 query?', back: 'One query for a list, then one more per item. Fix with a join or eager loading (select_related, prefetch_related, includes).' },
    ],
    inTheWild: [
      'A list page that loads instantly with 5 test rows and takes 4 seconds with 300 real rows is very often N+1.',
    ],
    related: ['eng-db-explain', 'eng-slow-code', 'fg-traces'],
    sources: [SRC.pgStatStatements, SRC.pgLogging, SRC.djangoQuerysets, SRC.railsEager],
  },
  {
    id: 'eng-db-transactions',
    unit: 'Databases in depth',
    title: 'Transactions and race conditions',
    summary: 'Transactions make several changes all-or-nothing; isolation and locks stop concurrent requests corrupting data.',
    ideas: ['All or nothing', 'Lost updates', 'Isolation levels and locks'],
    body: `
## All or nothing

A **transaction** groups statements so they either all happen or none do:

\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- or ROLLBACK if anything failed
\`\`\`

If the server crashes between the two updates, money doesn't vanish. That's the **A** (atomicity) in **ACID**, alongside consistency, isolation and durability.

## Lost updates

Two requests arrive at once to buy the last ticket:

\`\`\`js
const t = await db.query('SELECT stock FROM tickets WHERE id = 9')  // both read 1
if (t.stock > 0) await db.query('UPDATE tickets SET stock = $1 WHERE id = 9', [t.stock - 1])
\`\`\`

Both read 1, both see stock left, both sell. A transaction alone doesn't fix this at PostgreSQL's default level. Fixes, simplest first:

- **Do it in one atomic statement**: \`UPDATE tickets SET stock = stock - 1 WHERE id = 9 AND stock > 0\`, then check that one row was updated.
- **Lock the row** while deciding: \`SELECT ... FOR UPDATE\` inside a transaction makes the second request wait.
- Use a **unique constraint** so the database rejects duplicates (one seat, one booking).

## Isolation levels and locks

The **isolation level** decides what concurrent transactions can see of each other:

| Level | Notes |
|---|---|
| Read committed | PostgreSQL's default. Each statement sees data committed before it began. |
| Repeatable read | The whole transaction sees one snapshot. MySQL InnoDB's default. |
| Serializable | Behaves as if transactions ran one at a time. Safest, but some fail and must be **retried**. |

Stricter isn't free: more waiting, or more retries. Most apps stay on the default and use atomic updates, row locks and constraints where it matters.

Keep transactions **short**: never call a payment API or send email while holding locks, because every other request touching those rows waits. Two transactions locking the same rows in opposite orders can **deadlock**; the database kills one, so retry it, and lock rows in a consistent order.
`,
    takeaways: [
      'Transactions make a group of changes all-or-nothing.',
      'Read-then-write races lose updates; use atomic UPDATEs, SELECT FOR UPDATE or constraints.',
      'Know your isolation level, retry serialization failures and deadlocks, and keep transactions short.',
    ],
    quiz: [
      {
        q: 'Two requests both read stock = 1 and both sell. Simplest fix?',
        options: ['Add a cache', 'UPDATE ... SET stock = stock - 1 WHERE id = 9 AND stock > 0, then check rows affected', 'Sleep between read and write', 'Use a bigger server'],
        answer: 1,
        why: 'The database checks and changes it in one atomic step.',
      },
      {
        q: 'What is PostgreSQL\'s default isolation level?',
        options: ['Read uncommitted', 'Read committed', 'Repeatable read', 'Serializable'],
        answer: 1,
        why: 'Each statement sees data committed before it started.',
      },
      {
        q: 'Why not call a payment provider inside a database transaction?',
        options: ['It\'s not allowed', 'Locks are held while waiting on the network, blocking other requests', 'It makes the payment faster', 'It makes SQL slower to parse'],
        answer: 1,
        why: 'Keep transactions short; do slow external work outside them.',
      },
    ],
    cards: [
      { id: 'c-eng-db-transactions-1', front: 'What does a transaction guarantee?', back: 'Its statements commit together or not at all (atomicity), isolated from concurrent transactions.' },
      { id: 'c-eng-db-transactions-2', front: 'Three fixes for a lost-update race?', back: 'An atomic UPDATE with a condition, SELECT ... FOR UPDATE in a transaction, or a unique constraint.' },
      { id: 'c-eng-db-transactions-3', front: 'Default isolation levels?', back: 'PostgreSQL: read committed. MySQL InnoDB: repeatable read. Serializable is safest but needs retries.' },
    ],
    related: ['web-databases', 'fg-idempotency'],
    sources: [SRC.pgIsolation, SRC.pgLocking],
  },
]

export const drills = [
  {
    id: 'eng-db-dr-1',
    kind: 'code',
    prompt: '`SELECT * FROM orders WHERE customer_id = 42 ORDER BY created_at DESC LIMIT 20` takes 900 ms on 30 million rows. EXPLAIN shows a Seq Scan on orders. What index would you add, and why that column order?',
    answer: '`CREATE INDEX CONCURRENTLY ON orders (customer_id, created_at)`. The equality column (customer_id) comes first, so the index jumps straight to that customer; within it, rows are already sorted by created_at, so the database reads the newest 20 entries backwards and stops: no full scan and no sort. CONCURRENTLY avoids blocking writes while it builds. Re-run EXPLAIN ANALYZE to confirm an Index Scan.',
  },
  {
    id: 'eng-db-dr-2',
    kind: 'code',
    prompt: 'An index exists on `users(email)`, but `WHERE lower(email) = lower($1)` still does a sequential scan. Why, and what are two fixes?',
    answer: 'The index stores email as written, not lower(email), so the database can\'t use it for the expression. Fix 1: an expression index, `CREATE INDEX ON users (lower(email))`. Fix 2: store emails already lower-cased (normalise on write) and query `WHERE email = $1` with a lower-cased input. (PostgreSQL\'s citext type is another option.)',
  },
  {
    id: 'eng-db-dr-3',
    kind: 'code',
    prompt: 'A dashboard lists 200 projects with their owner\'s name and takes 3 seconds. The slow-query log shows nothing over 5 ms. What\'s the likely cause, and how do you confirm and fix it?',
    answer: 'Probably N+1: one query for the projects, then one per project for its owner (201 quick queries, each with a network round trip). Confirm by counting queries per request (ORM logging, APM traces or pg_stat_statements call counts). Fix by eager loading (select_related/prefetch_related, includes, Prisma include) or a join, so it\'s 1-2 queries.',
  },
  {
    id: 'eng-db-dr-4',
    kind: 'design',
    prompt: 'Two users click "Book" on the last seat at the same moment, and both bookings succeed. Which fix is simplest and most reliable?',
    options: ['Check availability in the frontend first', 'A conditional atomic update (`UPDATE seats SET booked_by = $1 WHERE id = $2 AND booked_by IS NULL`) plus checking the row count, or a unique constraint on the seat', 'Add a 1-second sleep', 'Cache seat availability'],
    answer: 1,
    explanation: 'Let the database decide atomically. Read-then-write in application code races.',
  },
  {
    id: 'eng-db-dr-5',
    kind: 'design',
    prompt: 'pg_stat_statements shows: query A, 12 calls, mean 1,800 ms; query B, 4 million calls, mean 3 ms. Where do you start?',
    options: ['Query A: it\'s slowest', 'Query B: it uses about 3.3 hours of database time vs about 22 seconds', 'Neither', 'Add more indexes everywhere'],
    answer: 1,
    explanation: 'Rank by total time; B costs far more overall (though A may still matter if users wait on it).',
  },
]
