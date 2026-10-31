// Structuring code: dependency injection, lifetimes and design patterns.
// Sources were checked in October 2026.
const SRC = {
  fowlerDi: { title: 'Martin Fowler: Inversion of control containers and the dependency injection pattern', url: 'https://martinfowler.com/articles/injection.html' },
  aspnetDi: { title: 'Microsoft Learn: Dependency injection in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection' },
  msDi: { title: 'Microsoft Learn: .NET dependency injection', url: 'https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection' },
  msLifetimes: { title: 'Microsoft Learn: Service lifetimes', url: 'https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/service-lifetimes' },
  nestScopes: { title: 'NestJS docs: Injection scopes', url: 'https://docs.nestjs.com/fundamentals/injection-scopes' },
  springScopes: { title: 'Spring docs: Bean scopes', url: 'https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html' },
  guruCatalog: { title: 'Refactoring.Guru: Design patterns catalogue', url: 'https://refactoring.guru/design-patterns' },
  metz: { title: 'Sandi Metz: The wrong abstraction', url: 'https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction' },
  guruStrategy: { title: 'Refactoring.Guru: Strategy', url: 'https://refactoring.guru/design-patterns/strategy' },
  guruObserver: { title: 'Refactoring.Guru: Observer', url: 'https://refactoring.guru/design-patterns/observer' },
  guruChain: { title: 'Refactoring.Guru: Chain of responsibility', url: 'https://refactoring.guru/design-patterns/chain-of-responsibility' },
  aspnetMiddleware: { title: 'Microsoft Learn: ASP.NET Core middleware', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/' },
  guruAdapter: { title: 'Refactoring.Guru: Adapter', url: 'https://refactoring.guru/design-patterns/adapter' },
  guruDecorator: { title: 'Refactoring.Guru: Decorator', url: 'https://refactoring.guru/design-patterns/decorator' },
  guruFacade: { title: 'Refactoring.Guru: Facade', url: 'https://refactoring.guru/design-patterns/facade' },
  guruFactory: { title: 'Refactoring.Guru: Factory method', url: 'https://refactoring.guru/design-patterns/factory-method' },
  guruBuilder: { title: 'Refactoring.Guru: Builder', url: 'https://refactoring.guru/design-patterns/builder' },
  fowlerRepository: { title: 'Martin Fowler: Repository', url: 'https://martinfowler.com/eaaCatalog/repository.html' },
  efRepository: { title: 'Microsoft Learn: Designing the infrastructure persistence layer (repositories and EF Core)', url: 'https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design' },
}

export const lessons = [
  {
    id: 'eng-di',
    unit: 'Structuring code',
    title: 'Dependency injection',
    summary: 'Pass a class the things it depends on, instead of letting it create them, so you can swap and test them.',
    ideas: ['Pass dependencies in', 'Why it helps', 'The container in Program.cs'],
    body: `
## Pass dependencies in

A **dependency** is anything your code needs to do its job: a database, an email sender, a clock, a payment client. Compare:

\`\`\`csharp
// Creates its own dependencies: hard-wired
public class OrderService
{
    private readonly AppDbContext _db = new(Config.ConnectionString);
    private readonly SendGridMailer _mailer = new(Config.SendGridKey);
}

// Receives them: dependency injection (C# 12 primary constructor)
public class OrderService(AppDbContext db, IMailer mailer, TimeProvider clock)
{
}
\`\`\`

That's all **dependency injection** (DI) is: the code that **uses** a dependency doesn't **create** it. Something else builds the pieces and hands them in, usually through the constructor. Depending on an **interface** (\`IMailer\`) rather than a concrete class makes swapping easy. It's one form of **inversion of control**.

## Why it helps

- **Testing**: pass a fake \`IMailer\` that records messages, or a \`FakeTimeProvider\` set to 9:00 on a Monday. No real emails, no flaky time-dependent tests.
- **Swapping**: move from SendGrid to another provider by changing one registration, not every class that sends email.
- **Honesty**: the constructor lists what the class needs. A constructor taking nine dependencies is a visible hint that the class does too much.

## The container in Program.cs

ASP.NET Core has a **DI container** built in. You **register** services once, near startup, in \`Program.cs\` (the **composition root**):

\`\`\`csharp
builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(connectionString));
builder.Services.AddScoped<IMailer, SendGridMailer>();
builder.Services.AddSingleton(TimeProvider.System);
builder.Services.AddScoped<OrderService>();
\`\`\`

From then on, the framework builds controllers, minimal API handlers and background services for you, creating each dependency they ask for, and each of *their* dependencies, all the way down. It also decides **how long each object lives**: that's what \`AddScoped\` and \`AddSingleton\` mean, and it's the next lesson.

You can do DI without a container by calling \`new\` yourself in one place. In .NET you rarely need to, because the container is already there.
`,
    takeaways: [
      'Dependency injection: code receives what it needs (ideally as interfaces) instead of creating it.',
      'It makes testing with fakes easy, swapping implementations cheap, and needs visible.',
      'In ASP.NET Core, register services in Program.cs; the built-in container builds everything.',
    ],
    quiz: [
      {
        q: 'Which is dependency injection?',
        options: ['A class calls `new AppDbContext()` in its constructor', 'A class receives an `IMailer` as a constructor parameter', 'A class reads a static global', 'A class calls a static helper'],
        answer: 1,
        why: 'The class uses the dependency but doesn\'t create it.',
      },
      {
        q: 'A test needs "today" to be 29 February. With DI in .NET, how?',
        options: ['Change the system clock', 'Inject TimeProvider and pass a FakeTimeProvider set to that date', 'Wait for a leap year', 'Use DateTime.Now'],
        answer: 1,
        why: 'Injecting the clock makes time controllable.',
      },
      {
        q: 'Where are services usually registered in an ASP.NET Core app?',
        options: ['In each controller', 'In Program.cs, on builder.Services', 'In appsettings.json', 'In the database'],
        answer: 1,
        why: 'Program.cs is the composition root.',
      },
    ],
    practice: 'Find a class in your code that calls `new` on an HttpClient, DbContext or email client, or reads `DateTime.Now` directly. Sketch it with those passed into the constructor instead.',
    cards: [
      { id: 'c-eng-di-1', front: 'What is dependency injection?', back: 'Code receives its dependencies (database, mailer, clock) from outside, usually through the constructor, instead of creating them.' },
      { id: 'c-eng-di-2', front: 'Three benefits of DI?', back: 'Easy testing with fakes, cheap swapping of implementations, and dependencies made visible.' },
      { id: 'c-eng-di-3', front: 'What is the composition root in ASP.NET Core?', back: 'Program.cs, where services are registered on builder.Services and the app is wired together.' },
    ],
    related: ['eng-di-lifetimes', 'eng-testing-behaviour'],
    sources: [SRC.fowlerDi, SRC.aspnetDi, SRC.msDi],
  },
  {
    id: 'eng-di-lifetimes',
    unit: 'Structuring code',
    title: 'DI lifetimes: singleton, scoped, transient',
    summary: 'The container decides how long each object lives. Getting it wrong leaks one user\'s data into another\'s request.',
    ideas: ['Three lifetimes', 'Choosing a lifetime', 'Captive dependencies'],
    body: `
## Three lifetimes

When you register a service, you also tell the container **when to create a new one**:

| Lifetime | Registration | One instance per... |
|---|---|---|
| Singleton | \`AddSingleton\` | Whole app, until shutdown |
| Scoped | \`AddScoped\` | HTTP request (or a scope you create) |
| Transient | \`AddTransient\` | Every time it's injected |

Other frameworks share the idea with different names: NestJS has default (singleton), request and transient; Spring has singleton, request and prototype.

## Choosing a lifetime

- **Singleton** when it holds no per-user state, or must be shared: configuration, caches (\`IMemoryCache\`), \`TimeProvider\`. It's used by **many requests at once on different threads**, so it must be thread-safe, and anything it stores is visible to every user.
- **Scoped** when it holds state for one request: the current user, or a unit of work. EF Core's \`AddDbContext\` registers your \`DbContext\` as **scoped** by default, and a DbContext is not thread-safe.
- **Transient** for cheap, stateless objects where sharing gains nothing.

Prefer a **container singleton** to the classic Singleton pattern (a class with a static \`Instance\`). Microsoft's guidance says the same: let the container manage it, and it can still be replaced by a fake in tests.

## Captive dependencies

The classic lifetime bug: a **singleton depends on a scoped** service.

\`\`\`csharp
builder.Services.AddSingleton<ReportService>();   // created once
builder.Services.AddDbContext<AppDbContext>();    // scoped: one per request

public class ReportService(AppDbContext db) { }   // gets ONE DbContext, forever
\`\`\`

The singleton is built once, so the DbContext injected into it is **captured** and lives forever too. Every request now shares one DbContext across threads, which corrupts its state, and it may have been disposed long ago.

The rule: **a service may only depend on services that live at least as long as it does.** In the Development environment, ASP.NET Core checks this for you (**scope validation**) and throws. When a singleton genuinely needs scoped services, inject \`IServiceScopeFactory\` and create a scope per unit of work:

\`\`\`csharp
using var scope = scopeFactory.CreateScope();
var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
\`\`\`

A \`BackgroundService\` is registered as a singleton, so this is exactly how one should use a DbContext.
`,
    takeaways: [
      'Singleton: one for the app. Scoped: one per request. Transient: new every time.',
      'Singletons are shared across threads, so they must hold no per-user state; DbContext is scoped.',
      'Never let a longer-lived service capture a shorter-lived one; create a scope instead.',
    ],
    quiz: [
      {
        q: 'What lifetime does `AddDbContext` give your DbContext by default?',
        options: ['Singleton', 'Scoped (per request)', 'Transient', 'Static'],
        answer: 1,
        why: 'One DbContext per request, which also keeps it on one request at a time.',
      },
      {
        q: 'A singleton takes a DbContext in its constructor. What goes wrong?',
        options: ['Nothing', 'One DbContext is captured and shared across all requests and threads', 'The app runs faster', 'A new DbContext is created per request'],
        answer: 1,
        why: 'That\'s a captive dependency.',
      },
      {
        q: 'A BackgroundService needs to query the database. How?',
        options: ['Inject AppDbContext directly', 'Inject IServiceScopeFactory and create a scope per unit of work', 'Make the DbContext a singleton', 'Use a static DbContext'],
        answer: 1,
        why: 'Hosted services are singletons, so they create scopes.',
      },
      {
        q: 'Which dependency direction is always safe?',
        options: ['Singleton depends on scoped', 'Scoped depends on singleton', 'Singleton depends on DbContext', 'None'],
        answer: 1,
        why: 'Depending on something that lives longer is fine.',
      },
    ],
    cards: [
      { id: 'c-eng-di-lifetimes-1', front: 'Singleton vs scoped vs transient in ASP.NET Core?', back: 'AddSingleton: one per app. AddScoped: one per request. AddTransient: a new one each time it\'s injected.' },
      { id: 'c-eng-di-lifetimes-2', front: 'What is a captive dependency?', back: 'A shorter-lived service (e.g. a scoped DbContext) injected into a longer-lived one (a singleton), so it\'s effectively kept forever.' },
      { id: 'c-eng-di-lifetimes-3', front: 'How does a singleton safely use scoped services?', back: 'Inject IServiceScopeFactory, create a scope per unit of work, and resolve services from scope.ServiceProvider.' },
      { id: 'c-eng-di-lifetimes-4', front: 'Lifetime rule of thumb?', back: 'Depend only on services that live at least as long as you do.' },
    ],
    related: ['eng-di'],
    sources: [SRC.msLifetimes, SRC.msDi, SRC.nestScopes, SRC.springScopes],
  },
  {
    id: 'eng-patterns-choose',
    unit: 'Structuring code',
    title: 'Choosing a design pattern',
    summary: 'Patterns are named solutions to recurring problems. Start simple, and reach for one when you feel the problem it solves.',
    ideas: ['Patterns are shared names', 'Start without one', 'Match the problem to the pattern'],
    body: `
## Patterns are shared names

A **design pattern** is a reusable shape of solution to a problem that keeps coming up. The 1994 "Gang of Four" book catalogued 23 of them. Their biggest value is **vocabulary**: "wrap the Stripe client in an adapter" says in five words what would otherwise take a paragraph.

.NET is full of them: ASP.NET Core's request pipeline is **middleware** (chain of responsibility), \`IHttpClientFactory\` is a **factory**, C# \`event\`s are **observers**, \`DelegatingHandler\` is a **decorator**, and \`WebApplication.CreateBuilder()\` returns a **builder**. Spotting them makes the framework easier to understand.

## Start without one

Patterns add indirection, and indirection has a cost: more interfaces, more files, more jumps to follow. An \`IThing\` with exactly one implementation "in case" often backfires. Sandi Metz's well-known line: "duplication is far cheaper than the wrong abstraction".

A practical rule: write the simple version. When the **same kind of change** hurts for the second or third time, refactor toward the pattern that removes that pain. The pain tells you which pattern.

## Match the problem to the pattern

| When you notice... | Consider |
|---|---|
| The same \`switch\` on a type or mode, in several places | **Strategy** (or polymorphism) |
| One event must trigger several unrelated reactions | **Observer** / events |
| Steps every request passes through (auth, logging, limits) | **Middleware** (chain of responsibility) |
| A third-party SDK's shape leaking through your code | **Adapter** |
| Adding caching, retries or logging around something without changing it | **Decorator** |
| Callers juggling many services for one task | **Facade** |
| Choosing which class to create based on config or input | **Factory** |
| Constructors with many optional settings | **Builder** (or an object initializer) |
| Query code scattered through business logic | **Repository** (or EF Core used directly) |

The next three lessons walk through these with scenarios. For each, notice also when **not** to use it: usually when there's only one case, and no sign of a second.
`,
    takeaways: [
      'Patterns are named, reusable solutions; their main value is shared vocabulary, and .NET uses many.',
      'Start simple; refactor toward a pattern when the same change hurts repeatedly.',
      'Let the problem pick the pattern: repeated switches → Strategy, leaking third-party SDKs → Adapter, and so on.',
    ],
    quiz: [
      {
        q: 'When is the best time to introduce a pattern?',
        options: ['At the start, in case it\'s needed', 'When the same kind of change has become painful more than once', 'Never', 'When a file passes 100 lines'],
        answer: 1,
        why: 'Real repeated pain tells you which abstraction fits.',
      },
      {
        q: 'The same `switch (paymentMethod)` appears in five classes. Which pattern helps?',
        options: ['Singleton', 'Strategy', 'Facade', 'Builder'],
        answer: 1,
        why: 'Each method becomes a strategy behind one interface.',
      },
      {
        q: 'Which pattern is ASP.NET Core\'s request pipeline built on?',
        options: ['Singleton', 'Middleware (chain of responsibility)', 'Builder', 'Adapter'],
        answer: 1,
        why: 'Each middleware handles the request and passes it on, or stops it.',
      },
    ],
    practice: 'Find one place in code you know where the same switch on a type appears more than once. Which pattern from the table would remove it, and is it worth it yet?',
    cards: [
      { id: 'c-eng-patterns-choose-1', front: 'What is a design pattern?', back: 'A named, reusable solution shape for a recurring design problem; its main value is shared vocabulary.' },
      { id: 'c-eng-patterns-choose-2', front: 'When should you introduce a pattern?', back: 'When the same kind of change has hurt more than once, not "in case".' },
      { id: 'c-eng-patterns-choose-3', front: 'Patterns inside ASP.NET Core?', back: 'Middleware pipeline (chain of responsibility), IHttpClientFactory (factory), DelegatingHandler (decorator), WebApplication.CreateBuilder (builder), C# events (observer).' },
      { id: 'c-eng-patterns-choose-4', front: 'Third-party SDK shape leaking everywhere → which pattern?', back: 'Adapter.' },
    ],
    related: ['eng-patterns-behaviour', 'eng-design-tradeoffs'],
    sources: [SRC.guruCatalog, SRC.metz],
  },
  {
    id: 'eng-patterns-behaviour',
    unit: 'Structuring code',
    title: 'Strategy, Observer and Middleware',
    summary: 'Patterns for varying behaviour: swap an algorithm, notify many listeners, or pass a request through a chain of steps.',
    ideas: ['Strategy: swap the algorithm', 'Observer: announce, don\'t call', 'Middleware: a chain of steps'],
    body: `
## Strategy: swap the algorithm

**Scenario**: shipping cost depends on the method (standard, express), and the \`switch\` is copied wherever cost is needed.

\`\`\`csharp
public interface IShippingStrategy { decimal Cost(Order order); }
public class StandardShipping : IShippingStrategy { public decimal Cost(Order o) => o.WeightKg * 2; }
public class ExpressShipping  : IShippingStrategy { public decimal Cost(Order o) => 15 + o.WeightKg * 4; }

// .NET 8 keyed services: register each under a name, resolve by name
builder.Services.AddKeyedSingleton<IShippingStrategy, StandardShipping>("standard");
builder.Services.AddKeyedSingleton<IShippingStrategy, ExpressShipping>("express");
var cost = services.GetRequiredKeyedService<IShippingStrategy>(order.Method).Cost(order);
\`\`\`

Each strategy has the **same interface**, so callers don't care which runs, and adding "drone" means one new class, not editing five switches. Payment providers, tax rules and export formats are classic strategies. For tiny cases, a \`Dictionary<string, Func<Order, decimal>>\` does the same job.

**Skip it** when there's one algorithm and no sign of a second.

## Observer: announce, don't call

**Scenario**: when an order is placed, you send a receipt, update stock, record analytics and notify the warehouse. Calling all four from \`PlaceOrder\` makes it depend on every one.

With **Observer** (publish/subscribe), \`PlaceOrder\` announces "order placed", and each concern subscribes. In C# that's an \`event\`, or a domain event handled by several \`INotificationHandler<OrderPlaced>\` classes (the MediatR style). Across services, it becomes a message bus such as Azure Service Bus.

**The cost**: flow becomes hidden. Reading \`PlaceOrder\` no longer tells you what happens, and a failing handler can be missed. Use it for genuinely independent side effects, not steps that must succeed together.

## Middleware: a chain of steps

**Scenario**: every API request must be rate-limited and authenticated before the endpoint runs.

This is **chain of responsibility**, and ASP.NET Core is built on it: each middleware handles the request, then calls the next one, or stops:

\`\`\`csharp
app.UseExceptionHandler("/error");
app.UseRateLimiter();
app.UseAuthentication();   // who are you?
app.UseAuthorization();    // may you? Must come after authentication
app.MapControllers();
\`\`\`

**Order matters**: authorization can't work before authentication has identified the user. HttpClient's \`DelegatingHandler\` chain is the same pattern on the way out.
`,
    takeaways: [
      'Strategy: interchangeable algorithms behind one interface; keyed services can choose one.',
      'Observer: publishers announce events and independent handlers react; the trade-off is hidden flow.',
      'Middleware: each step handles the request and passes it on or stops it; order matters.',
    ],
    quiz: [
      {
        q: 'Tax rules differ by country and new countries are added often. Pattern?',
        options: ['Observer', 'Strategy', 'Facade', 'Singleton'],
        answer: 1,
        why: 'One ITaxCalculator per country behind the same interface.',
      },
      {
        q: 'A user signs up; you need a welcome email, a CRM update and an analytics event, each independent. Pattern?',
        options: ['Strategy', 'Observer (events)', 'Builder', 'Adapter'],
        answer: 1,
        why: 'Signup announces the event; each handler reacts.',
      },
      {
        q: 'Why not use events for "charge card, then create order"?',
        options: ['Events are slow', 'Those steps must succeed together in order; events hide flow and failures', 'Events can\'t carry data', 'C# doesn\'t allow it'],
        answer: 1,
        why: 'Use plain calls (or a transaction) for steps that depend on each other.',
      },
      {
        q: 'Why must `UseAuthentication()` come before `UseAuthorization()`?',
        options: ['Alphabetical order', 'Middleware runs in order, and authorization needs to know who the user is', 'It doesn\'t matter', 'Only the last one runs'],
        answer: 1,
        why: 'The pipeline runs top to bottom.',
      },
    ],
    cards: [
      { id: 'c-eng-patterns-behaviour-1', front: 'Strategy pattern in .NET?', back: 'Interchangeable implementations of one interface (e.g. IShippingStrategy), chosen at runtime, for example with keyed services.' },
      { id: 'c-eng-patterns-behaviour-2', front: 'Observer pattern and its cost?', back: 'Publishers raise events; handlers subscribe independently (C# events, domain event handlers). Cost: hidden flow and easily missed failures.' },
      { id: 'c-eng-patterns-behaviour-3', front: 'Middleware (chain of responsibility)?', back: 'A request passes through steps in order (UseAuthentication, UseAuthorization...); each handles it, passes it on, or stops it.' },
    ],
    related: ['eng-patterns-choose', 'eng-patterns-structure', 'web-routing'],
    sources: [SRC.guruStrategy, SRC.guruObserver, SRC.guruChain, SRC.aspnetMiddleware, SRC.msDi],
  },
  {
    id: 'eng-patterns-structure',
    unit: 'Structuring code',
    title: 'Adapter, Decorator and Facade',
    summary: 'Patterns that wrap things: make an outside API fit yours, add behaviour without changing code, or hide complexity behind one call.',
    ideas: ['Adapter: make it fit', 'Decorator: add behaviour around it', 'Facade: one simple door'],
    body: `
All three wrap something. The difference is **why**.

## Adapter: make it fit

**Scenario**: you call Stripe's SDK directly in 30 places. Now you need a second provider in some countries, and tests keep hitting Stripe.

Define the interface **your** app wants, and write an adapter per provider:

\`\`\`csharp
public interface IPaymentGateway
{
    Task<PaymentResult> ChargeAsync(long amountCents, string customerId);
}

public class StripeGateway(PaymentIntentService intents) : IPaymentGateway
{
    public async Task<PaymentResult> ChargeAsync(long amountCents, string customerId)
    {
        var intent = await intents.CreateAsync(new PaymentIntentCreateOptions
        {
            Amount = amountCents, Currency = "usd", Customer = customerId, Confirm = true,
        });
        return new PaymentResult(intent.Id, intent.Status == "succeeded");
    }
}
\`\`\`

The rest of the app depends on \`IPaymentGateway\`. Another provider, or a fake for tests, is one new class and one registration.

## Decorator: add behaviour around it

**Scenario**: an exchange-rate client is slow. You want caching without editing it.

A **decorator** implements the **same interface** as the thing it wraps and adds behaviour before or after:

\`\`\`csharp
public class CachedRates(IRateClient inner, IMemoryCache cache) : IRateClient
{
    public async Task<decimal> GetRateAsync(string pair) =>
        await cache.GetOrCreateAsync(pair, entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(1);
            return inner.GetRateAsync(pair);
        });
}
\`\`\`

Decorators stack, and each concern (caching, retries, logging, timing) stays in one small class. HttpClient's \`DelegatingHandler\`s are decorators, and the Scrutor library adds \`services.Decorate<IRateClient, CachedRates>()\` to register one.

## Facade: one simple door

**Scenario**: checking out means reserving stock, charging the card, creating a shipment and sending a receipt, and three controllers repeat that sequence.

A **facade** offers one simple method over a complex subsystem: \`checkout.PlaceOrderAsync(cart, user)\`. Callers stop needing to know the parts or their order. Keep it thin: it coordinates, while the real logic stays in the parts.

**Telling them apart**: an adapter **changes** an interface to fit; a decorator **keeps** the interface and adds behaviour; a facade **simplifies** many interfaces into one.
`,
    takeaways: [
      'Adapter: convert an outside interface into the one your app wants; great for SDKs and fakes.',
      'Decorator: same interface, extra behaviour (cache, retry, log); they stack.',
      'Facade: one simple entry point over a complex subsystem.',
    ],
    quiz: [
      {
        q: 'You want to log every call to an IOrderRepository without changing it. Pattern?',
        options: ['Adapter', 'Decorator', 'Factory', 'Observer'],
        answer: 1,
        why: 'Same interface, extra behaviour around it.',
      },
      {
        q: 'A legacy SOAP client returns XML, but your code expects simple C# records. Pattern?',
        options: ['Decorator', 'Adapter', 'Strategy', 'Builder'],
        answer: 1,
        why: 'Convert their interface into yours.',
      },
      {
        q: 'Which one keeps exactly the same interface as the object it wraps?',
        options: ['Adapter', 'Facade', 'Decorator', 'All three'],
        answer: 2,
        why: 'Adapters change the interface; facades simplify many.',
      },
    ],
    practice: 'Pick a third-party SDK your project calls in many places. Write the small interface (two or three methods) your app actually needs from it.',
    cards: [
      { id: 'c-eng-patterns-structure-1', front: 'Adapter pattern?', back: 'Wraps something to convert its interface into the one your code expects. Ideal for third-party SDKs and test fakes.' },
      { id: 'c-eng-patterns-structure-2', front: 'Decorator pattern?', back: 'Wraps something with the same interface to add behaviour (caching, retries, logging). Decorators stack; DelegatingHandler is one.' },
      { id: 'c-eng-patterns-structure-3', front: 'Facade pattern?', back: 'A simple entry point (like PlaceOrderAsync) over a complex subsystem.' },
      { id: 'c-eng-patterns-structure-4', front: 'Adapter vs decorator vs facade?', back: 'Adapter changes the interface; decorator keeps it and adds behaviour; facade simplifies many into one.' },
    ],
    related: ['eng-patterns-behaviour', 'eng-patterns-creation', 'fg-circuit-breakers'],
    sources: [SRC.guruAdapter, SRC.guruDecorator, SRC.guruFacade],
  },
  {
    id: 'eng-patterns-creation',
    unit: 'Structuring code',
    title: 'Factory, Builder and Repository',
    summary: 'Patterns for creating objects and reaching data: pick the right class, assemble complex objects, keep queries in one place.',
    ideas: ['Factory: decide what to create', 'Builder: assemble step by step', 'Repository: one home for data access'],
    body: `
## Factory: decide what to create

**Scenario**: files go to local disk in development, Azure Blob Storage in production and memory in tests. The \`if (env == ...)\` check is repeated wherever storage is created.

A **factory** puts the decision in one place. With DI, it's often a factory **registration**:

\`\`\`csharp
builder.Services.AddSingleton<IFileStore>(sp =>
    builder.Configuration["Storage:Kind"] switch
    {
        "blob"   => new BlobFileStore(sp.GetRequiredService<BlobServiceClient>()),
        "memory" => new MemoryFileStore(),
        _        => new DiskFileStore(builder.Configuration["Storage:Dir"]!),
    });
\`\`\`

Classes ask for \`IFileStore\` and get the right one. \`IHttpClientFactory\` is a factory you already use. **Skip it** when there's only ever one class.

## Builder: assemble step by step

**Scenario**: a constructor has grown to nine parameters, most optional: \`new Report("Q3", null, null, true, "pdf", null, "A4")\`. Nobody knows what \`true\` means.

A **builder** sets parts by name, then builds. .NET uses it everywhere: \`WebApplication.CreateBuilder(args)\`, \`StringBuilder\`, \`SqlConnectionStringBuilder\`. The most useful ones you'll write are **test-data builders**:

\`\`\`csharp
var user = new UserBuilder().WithRole("Admin").WithEmail("ana@example.com").Build();
\`\`\`

In C#, **named arguments** and **object initializers** often solve the many-parameters problem with no pattern at all: \`new Report { Title = "Q3", Format = "pdf" }\`, or a record copied with \`with\` for variations.

## Repository: one home for data access

**Scenario**: queries for users are scattered through controllers and services. Changing a column means hunting everywhere.

A **repository** gives a collection-like interface for one kind of object:

\`\`\`csharp
public class UserRepository(AppDbContext db) : IUserRepository
{
    public Task<User?> FindByEmailAsync(string email) =>
        db.Users.SingleOrDefaultAsync(u => u.Email == email);
}
\`\`\`

**Watch out**: Microsoft's own guidance notes that EF Core's \`DbContext\` already implements the Unit of Work and Repository patterns, and calls custom repositories optional. A repository that only forwards every call adds a layer and no value. Many .NET teams use the DbContext directly, and add repositories (or query classes) where data-access logic is real and reused, or to keep business rules testable without a database.
`,
    takeaways: [
      'Factory: one place decides which class to create; in .NET often a DI factory registration.',
      'Builder: build complex objects by named steps; in C#, named arguments and initializers often suffice.',
      'Repository: a collection-like home for data access; DbContext already is one, so avoid empty wrappers.',
    ],
    quiz: [
      {
        q: 'The app picks an SMS, email or push sender from user settings, in several places. Pattern?',
        options: ['Builder', 'Factory', 'Decorator', 'Observer'],
        answer: 1,
        why: 'Centralise the "which one to create" decision.',
      },
      {
        q: 'A constructor takes eight positional parameters, most optional. Simplest C# fix?',
        options: ['Singleton', 'Object initializer or named arguments (or a builder)', 'Observer', 'Inheritance'],
        answer: 1,
        why: 'Named settings make calls readable.',
      },
      {
        q: 'Why are thin repositories over EF Core often unnecessary?',
        options: ['EF Core is slow', 'DbContext already implements Unit of Work and Repository', 'Repositories are deprecated', 'They can\'t be tested'],
        answer: 1,
        why: 'Add one when it holds real logic, not just forwarding.',
      },
    ],
    cards: [
      { id: 'c-eng-patterns-creation-1', front: 'Factory pattern in .NET?', back: 'One place decides which class to create, often a DI registration like AddSingleton<IFileStore>(sp => ...). IHttpClientFactory is one.' },
      { id: 'c-eng-patterns-creation-2', front: 'Builder pattern in .NET?', back: 'Builds a complex object through named steps: WebApplication.CreateBuilder, StringBuilder, test-data builders. Object initializers often suffice.' },
      { id: 'c-eng-patterns-creation-3', front: 'Repository pattern with EF Core?', back: 'A collection-like interface for data access. DbContext already implements it, so add repositories only for real, reused query logic.' },
    ],
    related: ['eng-di', 'eng-patterns-structure', 'eng-db-slow-queries'],
    sources: [SRC.guruFactory, SRC.guruBuilder, SRC.fowlerRepository, SRC.efRepository],
  },
]

export const drills = [
  {
    id: 'eng-st-dr-1',
    kind: 'code',
    prompt: '`builder.Services.AddSingleton<InvoiceService>()`, and InvoiceService takes an `AppDbContext` in its constructor (registered with `AddDbContext`, which is scoped by default). What happens, and how do you fix it?',
    answer: 'A captive dependency: the singleton is created once and keeps the first DbContext forever, sharing it across concurrent requests (DbContext isn\'t thread-safe) and eventually using a disposed context. In Development, scope validation throws when the app builds. Fix: register InvoiceService as scoped, or, if it must be a singleton, inject IServiceScopeFactory and create a scope per unit of work.',
  },
  {
    id: 'eng-st-dr-2',
    kind: 'code',
    prompt: 'This method is hard to test: `public async Task SendRemindersAsync() { using var db = new AppDbContext(); var due = await db.Invoices.Where(i => i.DueAt < DateTime.UtcNow).ToListAsync(); foreach (var i in due) await new SmtpMailer().SendAsync(i); }`. Refactor it for testability.',
    answer: 'Inject the dependencies: `public class ReminderService(AppDbContext db, IMailer mailer, TimeProvider clock)`, then query `i.DueAt < clock.GetUtcNow()` and call `mailer.SendAsync(i)`. Register them in Program.cs (`AddScoped<IMailer, SmtpMailer>()`, `AddSingleton(TimeProvider.System)`). Tests pass a fake IMailer that records calls, a FakeTimeProvider set to a fixed moment, and an in-memory or test database, so you can check "due yesterday gets a reminder, due tomorrow doesn\'t" without real email or real time.',
  },
  {
    id: 'eng-st-dr-3',
    kind: 'design',
    prompt: 'Your app must send notifications by email today, and SMS and push "maybe next year". How should you structure it now?',
    options: ['Build a plugin system with factories and keyed services for every channel now', 'A simple email sender behind a small INotifier interface; add a strategy or factory when a second channel actually arrives', 'Copy-paste email code everywhere', 'A static class with static methods'],
    answer: 1,
    explanation: 'Start simple; refactor toward the pattern when the second case is real. A small interface keeps that cheap.',
  },
  {
    id: 'eng-st-dr-4',
    kind: 'design',
    prompt: 'You want every call to a slow pricing API client (IPricingClient) cached for 60 seconds and retried twice on failure, without changing the client class. Pattern?',
    options: ['Adapter', 'Decorator (or HttpClient DelegatingHandlers/resilience handler for the HTTP part)', 'Observer', 'Builder'],
    answer: 1,
    explanation: 'Decorators keep the same interface and add behaviour around it; they stack (cache around retry around client).',
  },
  {
    id: 'eng-st-dr-5',
    kind: 'design',
    prompt: 'When an invoice is paid, you must mark it paid, email a receipt, notify accounting\'s Teams channel and update analytics. Which parts should be direct calls and which events?',
    options: ['All events', 'Mark it paid directly (in the transaction); receipt, Teams and analytics as event handlers or queued jobs', 'All direct calls in one method', 'All in the frontend'],
    answer: 1,
    explanation: 'Steps that must succeed together stay explicit; independent side effects suit Observer/events, ideally via a queue so failures retry.',
  },
]
