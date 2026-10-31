// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'ch-code-1',
    kind: 'code',
    prompt: 'What is the time complexity of this method, and how would you improve it?',
    code: `bool HasDuplicate(List<int> items)
{
    for (int i = 0; i < items.Count; i++)
        if (items.IndexOf(items[i]) != i) return true;
    return false;
}`,
    answer:
      'O(n²): IndexOf is a linear scan inside a loop. Use a HashSet: `return items.ToHashSet().Count != items.Count` (O(n)), or loop with `if (!seen.Add(item)) return true` to stop at the first repeat.',
  },
  {
    id: 'ch-code-2',
    kind: 'code',
    prompt: 'This endpoint works in testing, but under heavy load the server starts failing with socket errors. Why?',
    code: `app.MapGet("/weather", async () =>
{
    using var client = new HttpClient();
    return await client.GetStringAsync("https://api.weather.example/today");
});`,
    answer:
      'Every request creates and disposes an HttpClient. Disposing it doesn\'t free its connection straight away: sockets linger (in TIME_WAIT), so heavy traffic can exhaust them, and nothing is reused. Reuse connections instead: register `builder.Services.AddHttpClient()` and inject `IHttpClientFactory` or a typed client, or share one long-lived HttpClient with `PooledConnectionLifetime` set so DNS changes are still picked up.',
  },
  {
    id: 'ch-code-3',
    kind: 'code',
    prompt: 'What does this print, and why?',
    code: `var actions = new List<Action>();
for (int i = 0; i < 3; i++)
    actions.Add(() => Console.WriteLine(i));
foreach (var action in actions) action();`,
    answer:
      'It prints 3, 3, 3. A `for` loop has a single variable `i`, shared by every lambda, and it is 3 by the time they run. Copy it inside the loop (`var copy = i;`) and capture the copy, or loop with `foreach (var i in Enumerable.Range(0, 3))`: since C# 5, each `foreach` iteration gets a fresh variable, so it prints 0, 1, 2.',
  },
  {
    id: 'ch-code-4',
    kind: 'code',
    prompt: 'Find the bugs.',
    code: `double Average(List<int> nums)
{
    int total = 0;
    foreach (var n in nums) total += n;
    return total / nums.Count;
}`,
    answer:
      'Two bugs. `total / nums.Count` is integer division, so the average of 1 and 2 is 1, not 1.5; convert first: `(double)total / nums.Count`. And an empty list throws DivideByZeroException. Decide what empty input should mean (return 0, return `double?` null, or throw a clear ArgumentException) and handle it explicitly. (LINQ\'s `nums.Average()` throws InvalidOperationException on an empty list.) For very large inputs, `int total` can also overflow; use `long`.',
  },
  {
    id: 'ch-code-5',
    kind: 'code',
    prompt: 'Two requests run this at the same moment for an account with balance 100. What can go wrong?',
    code: `async Task WithdrawAsync(int accountId, decimal amount)
{
    var account = await db.Accounts.FindAsync(accountId);
    if (account!.Balance < amount) throw new InvalidOperationException("Insufficient funds");
    account.Balance -= amount;
    await db.SaveChangesAsync();
}`,
    answer:
      'A race condition (check-then-act). Both requests read 100, both pass the check, and both save. Two withdrawals of 80 can both succeed, and one update overwrites the other. Fix with an atomic conditional update (`await db.Accounts.Where(a => a.Id == accountId && a.Balance >= amount).ExecuteUpdateAsync(s => s.SetProperty(a => a.Balance, a => a.Balance - amount))`, then check that 1 row changed), or optimistic concurrency: a `[Timestamp]` rowversion property makes the second SaveChanges throw DbUpdateConcurrencyException.',
  },
  {
    id: 'ch-code-6',
    kind: 'code',
    prompt: 'What is wrong with this method?',
    code: `public async void SendWelcomeEmail(User user)
{
    await mailer.SendAsync(user.Email, "Welcome!");
}`,
    answer:
      '`async void` can\'t be awaited, so callers can\'t know when it has finished, and an exception thrown inside it can\'t be caught by the caller: it is raised on the synchronization context and can crash the process. Return a Task instead (`public async Task SendWelcomeEmailAsync(User user)`) and await it. Keep async void for event handlers only.',
  },
  {
    id: 'ch-design-1',
    kind: 'design',
    prompt:
      'Your product page is slow because it calls a pricing service on every request. Prices change a few times a day. What would you do, and what is the trade-off?',
    answer:
      'Cache prices (in memory or Redis) with a TTL of a few minutes, or invalidate on price change events. Trade-off: users may briefly see stale prices. Decide whether that\'s acceptable (perhaps re-check the price at checkout) and how you\'ll invalidate. Also consider what happens when the cache is cold or the pricing service is down.',
  },
  {
    id: 'ch-design-2',
    kind: 'design',
    prompt:
      'Sending a welcome email currently happens inside the signup request, and the email provider is sometimes slow, making signups time out. How would you redesign it?',
    answer:
      'Move email sending to a background job: signup writes a "send welcome email" message to a queue and returns immediately; a worker sends it with retries and backoff. Trade-offs: more moving parts, and the email arrives a few seconds later. Make the job idempotent so retries don\'t send duplicates.',
  },
  {
    id: 'ch-design-3',
    kind: 'design',
    prompt:
      'A teammate proposes splitting your 5-person team\'s monolith into 12 microservices "so it scales." How do you respond?',
    answer:
      'Ask what problem it solves: is there an actual scaling or deployment bottleneck? Microservices add network calls, distributed failures, deployment and observability overhead, which is a lot for 5 people. Alternatives: modularise the monolith with clear boundaries, scale it horizontally, extract only a part with genuinely different needs. Steelman their concern first; it may be about deploy coupling or ownership.',
  },
]
