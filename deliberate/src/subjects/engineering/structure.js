// Structuring code: dependency injection, lifetimes and design patterns.
// Sources were checked in October 2026.
const SRC = {
  fowlerDi: { title: 'Martin Fowler: Inversion of control containers and the dependency injection pattern', url: 'https://martinfowler.com/articles/injection.html' },
  aspnetDi: { title: 'Microsoft Learn: Dependency injection in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection' },
  msLifetimes: { title: 'Microsoft Learn: Service lifetimes', url: 'https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/service-lifetimes' },
  nestScopes: { title: 'NestJS docs: Injection scopes', url: 'https://docs.nestjs.com/fundamentals/injection-scopes' },
  springScopes: { title: 'Spring docs: Bean scopes', url: 'https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html' },
  guruCatalog: { title: 'Refactoring.Guru: Design patterns catalogue', url: 'https://refactoring.guru/design-patterns' },
  metz: { title: 'Sandi Metz: The wrong abstraction', url: 'https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction' },
  guruStrategy: { title: 'Refactoring.Guru: Strategy', url: 'https://refactoring.guru/design-patterns/strategy' },
  guruObserver: { title: 'Refactoring.Guru: Observer', url: 'https://refactoring.guru/design-patterns/observer' },
  guruChain: { title: 'Refactoring.Guru: Chain of responsibility', url: 'https://refactoring.guru/design-patterns/chain-of-responsibility' },
  expressMiddleware: { title: 'Express: Using middleware', url: 'https://expressjs.com/en/guide/using-middleware.html' },
  guruAdapter: { title: 'Refactoring.Guru: Adapter', url: 'https://refactoring.guru/design-patterns/adapter' },
  guruDecorator: { title: 'Refactoring.Guru: Decorator', url: 'https://refactoring.guru/design-patterns/decorator' },
  guruFacade: { title: 'Refactoring.Guru: Facade', url: 'https://refactoring.guru/design-patterns/facade' },
  guruFactory: { title: 'Refactoring.Guru: Factory method', url: 'https://refactoring.guru/design-patterns/factory-method' },
  guruBuilder: { title: 'Refactoring.Guru: Builder', url: 'https://refactoring.guru/design-patterns/builder' },
  fowlerRepository: { title: 'Martin Fowler: Repository', url: 'https://martinfowler.com/eaaCatalog/repository.html' },
}

export const lessons = [
  {
    id: 'eng-di',
    unit: 'Structuring code',
    title: 'Dependency injection',
    summary: 'Pass a piece of code the things it depends on, instead of letting it create them, so you can swap and test them.',
    ideas: ['Pass dependencies in', 'Why it helps', 'Containers are optional'],
    body: `
## Pass dependencies in

A **dependency** is anything your code needs to do its job: a database, an email sender, a clock, a payment client. Compare:

\`\`\`js
// Creates its own dependencies: hard-wired
class OrderService {
  constructor() {
    this.db = new PostgresDb(process.env.DATABASE_URL)
    this.mailer = new SendGridMailer(process.env.SENDGRID_KEY)
  }
}

// Receives them: dependency injection
class OrderService {
  constructor(db, mailer, clock) {
    this.db = db
    this.mailer = mailer
    this.clock = clock
  }
}
\`\`\`

That's all **dependency injection** (DI) is: the code that **uses** a dependency doesn't **create** it. Someone else builds the pieces and hands them in, usually through the constructor or function parameters. It's one form of **inversion of control**: control over wiring moves out of the class.

## Why it helps

- **Testing**: pass a fake mailer that records messages, an in-memory database, or a clock fixed at 9:00 on a Monday. No real emails, no flaky time-dependent tests.
- **Swapping**: move from SendGrid to another provider by changing one line of wiring, not every class that sends email.
- **Honesty**: the constructor lists what the class needs. A constructor taking nine dependencies is a visible hint that the class does too much.

## Containers are optional

The wiring happens in one place near startup, called the **composition root**:

\`\`\`js
const db = new PostgresDb(config.databaseUrl)
const orders = new OrderService(db, new SendGridMailer(config.sendgridKey), systemClock)
\`\`\`

In small and medium JavaScript apps, doing this by hand is often clearest. Larger frameworks provide a **DI container** that builds objects for you from registrations: ASP.NET Core, Spring, NestJS and Angular all do. You declare "OrderService needs a Mailer", and the container creates and passes it, and also decides **how long each object lives**, which is the next lesson.
`,
    takeaways: [
      'Dependency injection: code receives what it needs instead of creating it.',
      'It makes testing with fakes easy, swapping implementations cheap, and needs visible.',
      'Wire things in one composition root; a DI container is a convenience, not a requirement.',
    ],
    quiz: [
      {
        q: 'Which is dependency injection?',
        options: ['A class calls `new Database()` in its constructor', 'A class receives a database object as a constructor parameter', 'A class reads a global variable', 'A class imports a singleton module'],
        answer: 1,
        why: 'The class uses the dependency but doesn\'t create it.',
      },
      {
        q: 'A test needs "today" to be 29 February. With DI, how?',
        options: ['Change the system clock', 'Pass in a fake clock that returns that date', 'Wait for a leap year', 'Mock the whole runtime'],
        answer: 1,
        why: 'Injecting the clock makes time controllable.',
      },
      {
        q: 'Do you need a DI container to use dependency injection?',
        options: ['Yes, always', 'No; passing dependencies by hand in one place is DI too', 'Only in Java', 'Only for databases'],
        answer: 1,
        why: 'Containers automate wiring; the idea works without them.',
      },
    ],
    practice: 'Find a function or class in your code that creates its own database client, HTTP client or reads the current time directly. Sketch how it would look if those were passed in.',
    cards: [
      { id: 'c-eng-di-1', front: 'What is dependency injection?', back: 'Code receives its dependencies (database, mailer, clock) from outside instead of creating them.' },
      { id: 'c-eng-di-2', front: 'Three benefits of DI?', back: 'Easy testing with fakes, cheap swapping of implementations, and dependencies made visible.' },
      { id: 'c-eng-di-3', front: 'What is a composition root?', back: 'The one place, near startup, where the app\'s objects are created and wired together.' },
    ],
    related: ['eng-di-lifetimes', 'eng-testing-behaviour'],
    sources: [SRC.fowlerDi, SRC.aspnetDi],
  },
  {
    id: 'eng-di-lifetimes',
    unit: 'Structuring code',
    title: 'DI lifetimes: singleton, scoped, transient',
    summary: 'A container decides how long each object lives. Getting it wrong leaks one user\'s data into another\'s request.',
    ideas: ['Three lifetimes', 'Choosing a lifetime', 'Captive dependencies'],
    body: `
## Three lifetimes

When a container creates an object, it also decides **when to create a new one**:

| Lifetime | One instance per... | Typical uses |
|---|---|---|
| Singleton | Whole app, until shutdown | Config, HTTP client pools, caches, stateless services |
| Scoped | Request (or other unit of work) | Database context or unit of work, the current user |
| Transient | Every time it's injected | Small, lightweight, stateless helpers |

The names vary: ASP.NET Core says singleton/scoped/transient; NestJS says default (singleton)/request/transient; Spring says singleton/request/prototype.

## Choosing a lifetime

- **Singleton** when it holds no per-user state, or must be shared: a connection pool, a cache. It's used by **many requests at once**, so it must be safe under concurrency, and anything it stores is visible to every user.
- **Scoped** when it holds state for one request: the logged-in user, a database transaction. Entity Framework Core registers its \`DbContext\` as scoped by default.
- **Transient** for cheap, stateless objects where sharing gains nothing.

NestJS strongly recommends staying with singletons unless something truly must be per request, because creating objects per request costs performance.

Prefer a **container-managed singleton** to the classic Singleton pattern (a class with a static \`getInstance()\`): the container version can still be swapped for a fake in tests.

## Captive dependencies

The classic lifetime bug: a **singleton depends on a scoped** service.

\`\`\`csharp
services.AddSingleton<ReportService>();   // created once
services.AddScoped<CurrentUser>();         // meant to be per request
// ReportService(CurrentUser user) receives the FIRST request's user, forever
\`\`\`

The singleton is built once, so the scoped object injected into it is **captured** and lives forever too. Every later request sees the first user's data, or uses a database context that was disposed long ago.

The rule: **a service may only depend on services that live at least as long as it does.** Frameworks help: ASP.NET Core throws an error for this in development (scope validation); in NestJS a request-scoped dependency makes everything that depends on it request-scoped; Spring injects a prototype into a singleton only once, so you ask for a fresh one through a provider. When a singleton genuinely needs per-request work, create a scope explicitly or pass the value as a method argument.
`,
    takeaways: [
      'Singleton: one for the app. Scoped: one per request. Transient: new every time.',
      'Singletons are shared by concurrent requests, so they must hold no per-user state.',
      'Never let a longer-lived service capture a shorter-lived one.',
    ],
    quiz: [
      {
        q: 'Which lifetime fits a service holding the current request\'s logged-in user?',
        options: ['Singleton', 'Scoped (per request)', 'Static global', 'It doesn\'t matter'],
        answer: 1,
        why: 'Its data belongs to one request only.',
      },
      {
        q: 'A singleton is injected with a scoped database context. What goes wrong?',
        options: ['Nothing', 'The first context is captured and reused across all requests', 'The app runs faster', 'A new context is made each time'],
        answer: 1,
        why: 'That\'s a captive dependency.',
      },
      {
        q: 'Why must singletons be thread-safe or free of per-user state?',
        options: ['They\'re slow', 'Many requests use the same instance at the same time', 'They\'re created per request', 'They\'re garbage-collected often'],
        answer: 1,
        why: 'Shared state leaks between users or gets corrupted.',
      },
      {
        q: 'Which dependency direction is always safe?',
        options: ['Singleton depends on scoped', 'Scoped depends on singleton', 'Singleton depends on transient that holds request state', 'None'],
        answer: 1,
        why: 'Depending on something that lives longer is fine.',
      },
    ],
    cards: [
      { id: 'c-eng-di-lifetimes-1', front: 'Singleton vs scoped vs transient?', back: 'Singleton: one per app. Scoped: one per request. Transient: a new one each time it\'s injected.' },
      { id: 'c-eng-di-lifetimes-2', front: 'What is a captive dependency?', back: 'A shorter-lived service (scoped/transient) injected into a longer-lived one (singleton), so it is effectively kept forever.' },
      { id: 'c-eng-di-lifetimes-3', front: 'Lifetime rule of thumb?', back: 'Depend only on services that live at least as long as you do.' },
      { id: 'c-eng-di-lifetimes-4', front: 'Spring and NestJS names for lifetimes?', back: 'Spring: singleton, request, prototype. NestJS: default (singleton), request, transient.' },
    ],
    related: ['eng-di'],
    sources: [SRC.msLifetimes, SRC.nestScopes, SRC.springScopes],
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

Patterns are described in object-oriented terms, but many shrink in JavaScript or Python: a Strategy is often just a function you pass in; a Decorator is often a function wrapping another.

## Start without one

Patterns add indirection, and indirection has a cost: more files, more names, more jumps to follow. Adding them "in case" usually backfires. Sandi Metz's well-known line: "duplication is far cheaper than the wrong abstraction".

A practical rule: write the simple version. When the **same kind of change** hurts for the second or third time, refactor toward the pattern that removes that pain. The pain tells you which pattern.

## Match the problem to the pattern

| When you notice... | Consider |
|---|---|
| The same \`if/switch\` on a type or mode, in several places | **Strategy** (or polymorphism) |
| One event must trigger several unrelated reactions | **Observer** / events |
| Steps every request passes through (auth, logging, limits) | **Middleware** (chain of responsibility) |
| A third-party API's shape leaking through your code | **Adapter** |
| Adding caching, retries or logging around something without changing it | **Decorator** |
| Callers juggling many subsystems for one task | **Facade** |
| Choosing which class to create based on config or input | **Factory** |
| Constructors with many optional settings | **Builder** (or an options object) |
| Data-access code scattered through business logic | **Repository** |

The next three lessons walk through these with real scenarios. For each, notice also when **not** to use it: usually when there's only one case, and no sign of a second.
`,
    takeaways: [
      'Patterns are named, reusable solutions; their main value is shared vocabulary.',
      'Start simple; refactor toward a pattern when the same change hurts repeatedly.',
      'Let the problem pick the pattern: repeated switches → Strategy, leaking third-party APIs → Adapter, and so on.',
    ],
    quiz: [
      {
        q: 'When is the best time to introduce a pattern?',
        options: ['At the start, in case it\'s needed', 'When the same kind of change has become painful more than once', 'Never', 'When the file is over 100 lines'],
        answer: 1,
        why: 'Real repeated pain tells you which abstraction fits.',
      },
      {
        q: 'The same `switch (paymentMethod)` appears in five files. Which pattern helps?',
        options: ['Singleton', 'Strategy', 'Facade', 'Builder'],
        answer: 1,
        why: 'Each method becomes a strategy with the same interface.',
      },
      {
        q: 'What does "duplication is far cheaper than the wrong abstraction" warn against?',
        options: ['Copying code', 'Abstracting too early, before you understand the variations', 'Using functions', 'Writing tests'],
        answer: 1,
        why: 'A wrong abstraction is harder to undo than duplication.',
      },
    ],
    practice: 'Find one place in code you know where the same if/switch on a type appears more than once. Which pattern from the table would remove it, and is it worth it yet?',
    cards: [
      { id: 'c-eng-patterns-choose-1', front: 'What is a design pattern?', back: 'A named, reusable solution shape for a recurring design problem; its main value is shared vocabulary.' },
      { id: 'c-eng-patterns-choose-2', front: 'When should you introduce a pattern?', back: 'When the same kind of change has hurt more than once, not "in case".' },
      { id: 'c-eng-patterns-choose-3', front: 'Repeated switch on a type → which pattern?', back: 'Strategy (or polymorphism).' },
      { id: 'c-eng-patterns-choose-4', front: 'Third-party API shape leaking everywhere → which pattern?', back: 'Adapter.' },
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

**Scenario**: shipping cost depends on the method (standard, express, pickup), and the \`switch\` is copied wherever cost is needed.

\`\`\`js
const shipping = {
  standard: (order) => order.weightKg * 2,
  express: (order) => 15 + order.weightKg * 4,
  pickup: () => 0,
}
const cost = shipping[order.method](order)
\`\`\`

Each strategy has the **same interface**, so callers don't care which one runs, and adding "drone" means adding one entry, not editing five switches. Payment providers, pricing rules, export formats and sorting are all classic strategies.

**Skip it** when there's one algorithm and no sign of a second.

## Observer: announce, don't call

**Scenario**: when an order is placed, you send a receipt, update stock, record analytics and notify the warehouse. Calling all four from \`placeOrder\` makes it depend on every one of them.

With **Observer** (publish/subscribe), \`placeOrder\` announces "order placed", and each concern subscribes:

\`\`\`js
events.on('order.placed', sendReceipt)
events.on('order.placed', updateStock)
events.emit('order.placed', order)
\`\`\`

Adding a fifth reaction touches nothing else. DOM events (\`addEventListener\`) and Node's \`EventEmitter\` are observers. Across services, the same idea becomes a message queue.

**The cost**: flow becomes hidden. Reading \`placeOrder\` no longer tells you what happens, ordering isn't obvious, and a failing listener can be missed. Use it for genuinely independent side effects, not for steps that must succeed together.

## Middleware: a chain of steps

**Scenario**: every API request must be logged, authenticated and rate-limited before the handler runs.

This is **chain of responsibility**, better known as **middleware**. Each step handles the request, then passes it on, or stops it:

\`\`\`js
app.use(logRequest)
app.use(rateLimit)
app.use(requireLogin)            // may stop here with 401
app.get('/api/orders', listOrders)
\`\`\`

Express, Koa, Django and ASP.NET Core are all built on it. **Order matters**: rate-limit before expensive auth checks, and authenticate before anything reads the user.
`,
    takeaways: [
      'Strategy: interchangeable algorithms behind one interface; replaces repeated switches.',
      'Observer: publishers announce events and independent listeners react; the trade-off is hidden flow.',
      'Middleware: each step handles the request and passes it on or stops it; order matters.',
    ],
    quiz: [
      {
        q: 'Tax rules differ by country and new countries are added often. Pattern?',
        options: ['Observer', 'Strategy', 'Facade', 'Singleton'],
        answer: 1,
        why: 'One interchangeable tax calculation per country.',
      },
      {
        q: 'A user signs up; you need a welcome email, a CRM update and an analytics event, each independent. Pattern?',
        options: ['Strategy', 'Observer (events)', 'Builder', 'Adapter'],
        answer: 1,
        why: 'Signup announces the event; each reaction subscribes.',
      },
      {
        q: 'Why not use events for "charge card, then create order"?',
        options: ['Events are slow', 'Those steps must succeed together in order; events hide flow and failures', 'Events can\'t carry data', 'It\'s illegal'],
        answer: 1,
        why: 'Use plain calls (or a transaction) for steps that depend on each other.',
      },
      {
        q: 'In Express, why does middleware order matter?',
        options: ['It doesn\'t', 'Each step runs in order, so auth must come before handlers that need the user', 'Alphabetical order is required', 'Only the last one runs'],
        answer: 1,
        why: 'The chain runs top to bottom.',
      },
    ],
    cards: [
      { id: 'c-eng-patterns-behaviour-1', front: 'Strategy pattern?', back: 'Interchangeable algorithms behind one interface, chosen at runtime. In JS, often a map of functions.' },
      { id: 'c-eng-patterns-behaviour-2', front: 'Observer pattern and its cost?', back: 'Publishers emit events; listeners subscribe independently. Cost: the flow is hidden and failures are easy to miss.' },
      { id: 'c-eng-patterns-behaviour-3', front: 'Middleware (chain of responsibility)?', back: 'A request passes through steps in order; each handles it, passes it on, or stops it.' },
    ],
    related: ['eng-patterns-choose', 'eng-patterns-structure', 'web-routing'],
    sources: [SRC.guruStrategy, SRC.guruObserver, SRC.guruChain, SRC.expressMiddleware],
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

**Scenario**: you use Stripe's SDK directly in 30 places. Now you need a second provider in some countries, and tests keep hitting Stripe.

Define the interface **your** app wants, and write an adapter per provider:

\`\`\`js
// Your interface: charge(amountCents, customerId) -> { id, ok }
class StripeGateway {
  constructor(stripe) { this.stripe = stripe }
  async charge(amountCents, customerId) {
    const pi = await this.stripe.paymentIntents.create({ amount: amountCents, currency: 'usd', customer: customerId, confirm: true })
    return { id: pi.id, ok: pi.status === 'succeeded' }
  }
}
\`\`\`

The rest of the app calls \`gateway.charge()\`. Adding another provider, or a fake for tests, means one new class. Wrap third-party APIs you depend on heavily, especially ones you might replace.

## Decorator: add behaviour around it

**Scenario**: an exchange-rate API is slow and sometimes fails. You want caching and retries without editing the client.

A **decorator** has the **same interface** as the thing it wraps and adds behaviour before or after:

\`\`\`js
const withRetry = (fn, tries = 3) => async (...args) => {
  for (let i = 1; ; i++) {
    try { return await fn(...args) } catch (e) { if (i === tries) throw e }
  }
}
const getRate = withCache(withRetry(api.getRate))
\`\`\`

Decorators stack, and each concern stays in one small piece. Caching, retries, logging, timing and authorization checks are typical. In Python, \`@decorator\` syntax is this pattern.

## Facade: one simple door

**Scenario**: checking out means reserving stock, charging the card, creating a shipment and sending a receipt, and three different screens repeat that sequence.

A **facade** offers one simple function over a complex subsystem: \`checkout(cart, user)\`. Callers stop needing to know the parts or their order. Keep it thin: it coordinates, while the real logic stays in the parts.

**Telling them apart**: an adapter **changes** an interface to fit; a decorator **keeps** the interface and adds behaviour; a facade **simplifies** many interfaces into one.
`,
    takeaways: [
      'Adapter: convert an outside interface into the one your app wants; great for third-party APIs and fakes.',
      'Decorator: same interface, extra behaviour (cache, retry, log); they stack.',
      'Facade: one simple entry point over a complex subsystem.',
    ],
    quiz: [
      {
        q: 'You want to log every call to a repository without changing it. Pattern?',
        options: ['Adapter', 'Decorator', 'Factory', 'Observer'],
        answer: 1,
        why: 'Same interface, extra behaviour around it.',
      },
      {
        q: 'A legacy SOAP client returns XML, but your code expects simple objects. Pattern?',
        options: ['Decorator', 'Adapter', 'Strategy', 'Builder'],
        answer: 1,
        why: 'Convert their interface into yours.',
      },
      {
        q: 'Which one keeps the exact same interface as the object it wraps?',
        options: ['Adapter', 'Facade', 'Decorator', 'All three'],
        answer: 2,
        why: 'Adapters change the interface; facades simplify many.',
      },
    ],
    practice: 'Pick a third-party library your project calls in many places. Write the three-method interface your app actually needs from it.',
    cards: [
      { id: 'c-eng-patterns-structure-1', front: 'Adapter pattern?', back: 'Wraps something to convert its interface into the one your code expects. Ideal for third-party APIs and test fakes.' },
      { id: 'c-eng-patterns-structure-2', front: 'Decorator pattern?', back: 'Wraps something with the same interface to add behaviour (caching, retries, logging). Decorators stack.' },
      { id: 'c-eng-patterns-structure-3', front: 'Facade pattern?', back: 'A simple entry point (like checkout()) over a complex subsystem.' },
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

**Scenario**: files go to local disk in development, S3 in production and memory in tests. The \`if (env === ...)\` check is repeated wherever storage is created.

A **factory** puts the decision in one place:

\`\`\`js
function createStorage(config) {
  switch (config.storage) {
    case 's3': return new S3Storage(config.bucket)
    case 'memory': return new MemoryStorage()
    default: return new DiskStorage(config.dir)
  }
}
\`\`\`

Callers ask for "storage" and get the right one. Factories pair naturally with DI: the composition root calls them. Parsers chosen by file type and notifications chosen by channel are other common cases. **Skip it** when there's only ever one class: \`new DiskStorage()\` is fine.

## Builder: assemble step by step

**Scenario**: a constructor has grown to nine arguments, most optional: \`new Report(title, null, null, true, 'pdf', null, 'A4')\`. Nobody knows what \`true\` means.

A **builder** sets parts by name, then builds:

\`\`\`js
const query = db.select('id', 'total').from('orders').where('status', 'paid').orderBy('created_at').limit(20)
\`\`\`

SQL query builders and test-data builders (\`aUser().withRole('admin').build()\`) are the most useful real examples. In JavaScript, a plain **options object**, \`new Report({ title, format: 'pdf' })\`, often solves the many-arguments problem with no pattern at all.

## Repository: one home for data access

**Scenario**: SQL for users is scattered through controllers and services. Changing a column means hunting everywhere, and testing business rules needs a real database.

A **repository** gives a collection-like interface for one kind of object:

\`\`\`js
class UserRepository {
  constructor(db) { this.db = db }
  findByEmail(email) { return this.db.query('SELECT * FROM users WHERE email = $1', [email]) }
  save(user) { /* insert or update */ }
}
\`\`\`

Business code calls \`users.findByEmail()\`; tests pass an in-memory version. **Watch out** for wrapping an ORM that already gives you this: a repository that only forwards every call adds a layer and no value. Use one when data-access logic is real, or when you need to keep business rules testable without the database.
`,
    takeaways: [
      'Factory: one place decides which class to create from config or input.',
      'Builder: build complex objects by named steps; in JS an options object often suffices.',
      'Repository: a collection-like home for one entity\'s data access; skip thin wrappers over an ORM.',
    ],
    quiz: [
      {
        q: 'The app picks an SMS, email or push sender based on user settings, in several places. Pattern?',
        options: ['Builder', 'Factory', 'Decorator', 'Observer'],
        answer: 1,
        why: 'Centralise the "which one to create" decision.',
      },
      {
        q: 'A function takes eight positional arguments, most optional. Simplest JavaScript fix?',
        options: ['Singleton', 'An options object (or a builder)', 'Observer', 'Inheritance'],
        answer: 1,
        why: 'Named options make calls readable.',
      },
      {
        q: 'What is a repository\'s main benefit?',
        options: ['Faster SQL', 'Data access lives in one place behind a collection-like interface, easy to fake in tests', 'Automatic caching', 'No database needed'],
        answer: 1,
        why: 'Business logic stops depending on query details.',
      },
    ],
    cards: [
      { id: 'c-eng-patterns-creation-1', front: 'Factory pattern?', back: 'A function or class that decides which concrete class to create, from config or input, in one place.' },
      { id: 'c-eng-patterns-creation-2', front: 'Builder pattern?', back: 'Builds a complex object through named steps (query builders, test-data builders). In JS, options objects often suffice.' },
      { id: 'c-eng-patterns-creation-3', front: 'Repository pattern?', back: 'A collection-like interface (findByEmail, save) for one entity\'s data access; keeps queries in one place and makes faking easy.' },
    ],
    related: ['eng-di', 'eng-patterns-structure', 'eng-db-slow-queries'],
    sources: [SRC.guruFactory, SRC.guruBuilder, SRC.fowlerRepository],
  },
]

export const drills = [
  {
    id: 'eng-st-dr-1',
    kind: 'code',
    prompt: 'In ASP.NET Core, `AddSingleton<InvoiceService>()` takes an `AppDbContext` in its constructor, and `AddDbContext<AppDbContext>()` is registered as scoped (the default). What happens, and how do you fix it?',
    answer: 'A captive dependency: the singleton is created once and keeps the first DbContext forever, sharing it across concurrent requests (not thread-safe) and eventually using a disposed context. In development, scope validation throws on startup. Fix: make InvoiceService scoped, or, if it must be a singleton, inject IServiceScopeFactory and create a scope per unit of work.',
  },
  {
    id: 'eng-st-dr-2',
    kind: 'code',
    prompt: 'This function is hard to test: `async function sendReminders() { const users = await new PgClient(process.env.DB).query(...); for (const u of users) if (Date.now() > u.dueAt) await sendgrid.send(...) }`. Refactor it for testability.',
    answer: 'Inject the dependencies: `async function sendReminders({ users, mailer, now }) { for (const u of await users.findDue(now())) await mailer.send(...) }`. Production wiring passes a repository, a real mailer and `() => Date.now()`; tests pass an in-memory repository, a fake mailer that records calls, and a fixed clock. Now you can test "due yesterday gets a reminder, due tomorrow doesn\'t" without a database, network or real time.',
  },
  {
    id: 'eng-st-dr-3',
    kind: 'design',
    prompt: 'Your app must send notifications by email today, and SMS and push "maybe next year". How should you structure it now?',
    options: ['Build a full plugin system with factories for every channel now', 'Write a simple email sender behind a small interface; add a factory/strategy when the second channel actually arrives', 'Copy-paste email code everywhere', 'Use a singleton class with static methods'],
    answer: 1,
    explanation: 'Start simple; refactor toward the pattern when the second case is real. A small interface keeps that cheap.',
  },
  {
    id: 'eng-st-dr-4',
    kind: 'design',
    prompt: 'You want every call to a slow pricing API to be cached for 60 seconds and retried twice on failure, without changing the client class. Pattern?',
    options: ['Adapter', 'Decorator', 'Observer', 'Builder'],
    answer: 1,
    explanation: 'Decorators keep the same interface and add behaviour around it; they stack (cache around retry around client).',
  },
  {
    id: 'eng-st-dr-5',
    kind: 'design',
    prompt: 'When an invoice is paid, you must mark it paid, email a receipt, notify accounting\'s Slack channel and update analytics. Which parts should be direct calls and which events?',
    options: ['All events', 'Mark it paid as a direct call (in the transaction); receipt, Slack and analytics as event listeners or queued jobs', 'All direct calls in one function', 'All in the frontend'],
    answer: 1,
    explanation: 'Steps that must succeed together stay explicit; independent side effects suit Observer/events, ideally via a queue so failures retry.',
  },
]
