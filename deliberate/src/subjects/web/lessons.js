// Sources were checked in October 2026. Measurements of this app (sizes, headers) were taken then too.
const SRC = {
  howWeb: { title: 'MDN: How the web works', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works' },
  clientServer: { title: 'MDN: Client-server overview', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview' },
  dns: { title: 'MDN: DNS', url: 'https://developer.mozilla.org/en-US/docs/Glossary/DNS' },
  port: { title: 'MDN: Port', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Port' },
  howBrowsers: { title: 'MDN: Populating the page, how browsers work', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work' },
  httpOverview: { title: 'MDN: Overview of HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview' },
  status: { title: 'MDN: HTTP response status codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status' },
  methods: { title: 'MDN: HTTP request methods', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods' },
  webServer: { title: 'MDN: What is a web server?', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server' },
  ghPages: { title: 'GitHub Docs: About GitHub Pages', url: 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages' },
  cdn: { title: 'MDN: CDN', url: 'https://developer.mozilla.org/en-US/docs/Glossary/CDN' },
  caching: { title: 'MDN: HTTP caching', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching' },
  dom: { title: 'MDN: Introduction to the DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
  insideBrowser: { title: 'Chrome for Developers: Inside look at modern web browser, part 3', url: 'https://developer.chrome.com/blog/inside-browser-part3' },
  execModel: { title: 'MDN: JavaScript execution model', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model' },
  webApis: { title: 'MDN: Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/API' },
  node: { title: 'Node.js: Introduction to Node.js', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
  promises: { title: 'MDN: Using promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises' },
  fetch: { title: 'MDN: Using the Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
  forms: { title: 'MDN: Sending form data', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data' },
  rest: { title: 'MDN: REST', url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST' },
  sse: { title: 'MDN: Using server-sent events', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events' },
  websockets: { title: 'MDN: The WebSocket API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
  sameOrigin: { title: 'MDN: Same-origin policy', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy' },
  cors: { title: 'MDN: Cross-Origin Resource Sharing (CORS)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS' },
  nginx: { title: 'Nginx: ngx_http_proxy_module', url: 'https://nginx.org/en/docs/http/ngx_http_proxy_module.html' },
  proxy: { title: 'MDN: Proxy server', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server' },
  cookies: { title: 'MDN: Using HTTP cookies', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies' },
  localStorage: { title: 'MDN: Web Storage API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
  frameworksIntro: { title: 'MDN: Introduction to client-side frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction' },
  thinkingReact: { title: 'React docs: Thinking in React', url: 'https://react.dev/learn/thinking-in-react' },
  rendering: { title: 'web.dev: Rendering on the web (updated January 2026)', url: 'https://web.dev/articles/rendering-on-the-web' },
  vite: { title: 'Vite: Why Vite', url: 'https://vite.dev/guide/why' },
  tooling: { title: 'MDN: Client-side tooling overview', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Overview' },
  modules: { title: 'MDN: JavaScript modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
  owaspTop10: { title: 'OWASP Top 10:2025', url: 'https://owasp.org/Top10/2025/' },
  sqlCheat: { title: 'OWASP: SQL injection prevention cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
  xssCheat: { title: 'OWASP: Cross-site scripting prevention cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html' },
  authnCheat: { title: 'OWASP: Authentication cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html' },
  authzCheat: { title: 'OWASP: Authorization cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html' },
  pwCheat: { title: 'OWASP: Password storage cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
  nist: { title: 'NIST SP 800-63B-4: Authentication and authenticator management (2025)', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
  passkeys: { title: 'passkeys.dev: Passkeys developer resources', url: 'https://passkeys.dev/' },
  jwtRfc: { title: 'RFC 7519: JSON Web Token (JWT)', url: 'https://datatracker.ietf.org/doc/html/rfc7519' },
  jwtBcp: { title: 'RFC 8725: JSON Web Token best current practices', url: 'https://datatracker.ietf.org/doc/html/rfc8725' },
  jwe: { title: 'RFC 7516: JSON Web Encryption (JWE)', url: 'https://datatracker.ietf.org/doc/html/rfc7516' },
  jwtIntro: { title: 'jwt.io: Introduction to JSON Web Tokens', url: 'https://jwt.io/introduction' },
  sessCheat: { title: 'OWASP: Session management cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html' },
  h5Cheat: { title: 'OWASP: HTML5 security cheat sheet (local storage)', url: 'https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html' },
  csrfCheat: { title: 'OWASP: Cross-site request forgery prevention cheat sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html' },
  setCookie: { title: 'MDN: Set-Cookie', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie' },
  oauthBcp: { title: 'RFC 9700: OAuth 2.0 security best current practice (2025)', url: 'https://datatracker.ietf.org/doc/html/rfc9700' },
  pkce: { title: 'RFC 7636: Proof Key for Code Exchange (PKCE)', url: 'https://datatracker.ietf.org/doc/html/rfc7636' },
  oidc: { title: 'OpenID Connect Core 1.0', url: 'https://openid.net/specs/openid-connect-core-1_0.html' },
  oauthBrowser: { title: 'IETF draft: OAuth 2.0 for browser-based applications', url: 'https://datatracker.ietf.org/doc/draft-ietf-oauth-browser-based-apps/' },
  minimalApis: { title: 'Microsoft Learn: Minimal APIs overview', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis' },
  kestrel: { title: 'Microsoft Learn: Kestrel web server in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel' },
  asyncScenarios: { title: 'Microsoft Learn: Asynchronous programming scenarios in C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios' },
  aspnetRouting: { title: 'Microsoft Learn: Routing in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing' },
  aspnetMiddleware: { title: 'Microsoft Learn: ASP.NET Core middleware', url: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/' },
  forwardedHeaders: { title: 'Microsoft Learn: Configure ASP.NET Core to work with proxy servers and load balancers', url: 'https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer' },
  aspnetCookie: { title: 'Microsoft Learn: Cookie authentication without ASP.NET Core Identity', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authentication/cookie' },
  sqlServer: { title: 'Microsoft Learn: SQL Server technical documentation', url: 'https://learn.microsoft.com/en-us/sql/sql-server/' },
  efOverview: { title: 'Microsoft Learn: Entity Framework Core overview', url: 'https://learn.microsoft.com/en-us/ef/core/' },
  efRawSql: { title: 'Microsoft Learn: EF Core SQL queries (FromSql and SQL injection)', url: 'https://learn.microsoft.com/en-us/ef/core/querying/sql-queries' },
  signalr: { title: 'Microsoft Learn: Overview of ASP.NET Core SignalR', url: 'https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction' },
  blazor: { title: 'Microsoft Learn: ASP.NET Core Blazor', url: 'https://learn.microsoft.com/en-us/aspnet/core/blazor/' },
  aspnetCors: { title: 'Microsoft Learn: Enable CORS in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/cors' },
  aspnetPasswords: { title: 'Microsoft Learn: Hash passwords in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/data-protection/consumer-apis/password-hashing' },
  aspnetJwt: { title: 'Microsoft Learn: Configure JWT bearer authentication in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authentication/configure-jwt-bearer-authentication' },
  aspnetOidc: { title: 'Microsoft Learn: Configure OpenID Connect web authentication in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authentication/configure-oidc-web-authentication' },
  aspnetPolicies: { title: 'Microsoft Learn: Policy-based authorization in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies' },
  aspnetResourceAuthz: { title: 'Microsoft Learn: Resource-based authorization in ASP.NET Core', url: 'https://learn.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased' },
  dotnetDeploy: { title: 'Microsoft Learn: .NET application publishing overview', url: 'https://learn.microsoft.com/en-us/dotnet/core/deploying/' },
  dotnetIntro: { title: 'Microsoft Learn: Introduction to .NET', url: 'https://learn.microsoft.com/en-us/dotnet/core/introduction' },
  letsEncrypt: { title: 'Let\'s Encrypt: How it works', url: 'https://letsencrypt.org/how-it-works/' },
}

export const lessons = [
  {
    id: 'web-big-picture',
    unit: 'How the web works',
    title: 'The web in one picture',
    summary: 'Clients, servers and the network between them, and what people mean by frontend and backend.',
    ideas: ['Clients and servers', 'Frontend, backend and database', 'What\'s in a URL'],
    body: `
## Clients and servers

Almost everything on the web is a conversation between two programs:

- A **client** asks for something. Usually that's your **browser**, but it can be a phone app, a smart TV, or another program.
- A **server** answers. It's a program running on a computer somewhere, waiting for requests.

The client always starts the conversation. The browser sends a **request** ("give me the home page"), and the server sends back a **response** ("here's the HTML"). Every page load, image, button click that saves data, and live chat message is built from this pattern.

## Frontend, backend and database

Developers split a web app into parts by **where the code runs**:

- **Frontend** (client side): code that runs **in the user's browser**. HTML for structure, CSS for appearance, JavaScript for behaviour. It draws the interface and reacts to clicks.
- **Backend** (server side): code that runs **on the server**. It receives requests, applies the rules of the business (who's allowed to do what, how prices are calculated), and talks to the database. Users never see this code.
- **Database**: where data lives long-term, such as users, orders and posts. Usually only the backend talks to it.

In this course, backend examples use **C#** with **ASP.NET Core** and a **SQL Server** database, a common combination at work. Frontend examples use **JavaScript**, because that's the language browsers run.

This app, Deliberate, is unusual: it's **frontend only**. GitHub Pages hands your browser some files, and everything else runs on your device, with progress saved in your browser. There's no backend and no database. That's why your progress doesn't sync between your phone and laptop.

## What's in a URL

\`https://mangoomeh.github.io/deliberate/index.html?ref=share#/learn\`

- \`https\` is the **scheme**: which protocol to use (secure HTTP).
- \`mangoomeh.github.io\` is the **host** (domain): which server to contact.
- \`/deliberate/index.html\` is the **path**: which resource on that server.
- \`?ref=share\` is the **query string**: extra parameters for the server.
- \`#/learn\` is the **fragment**: it's **never sent to the server**. The browser keeps it. Deliberate uses it to decide which screen to show.
`,
    takeaways: [
      'The web is clients (usually browsers) sending requests and servers sending responses.',
      'Frontend code runs in the browser; backend code runs on the server; the database stores data.',
      'A URL has a scheme, host, path, query and fragment; the fragment never reaches the server.',
    ],
    quiz: [
      {
        q: 'Who starts an HTTP conversation?',
        options: ['The server', 'The client, such as a browser', 'The database', 'Either at random'],
        answer: 1,
        why: 'The client always sends the request; the server responds.',
      },
      {
        q: 'Where does frontend code run?',
        options: ['On the server', 'In the user\'s browser', 'In the database', 'At the internet provider'],
        answer: 1,
        why: 'Frontend means client side: HTML, CSS and JavaScript running on the user\'s device.',
      },
      {
        q: 'In `https://shop.example/items?page=2#reviews`, which part is never sent to the server?',
        options: ['`shop.example`', '`/items`', '`?page=2`', '`#reviews`'],
        answer: 3,
        why: 'The fragment stays in the browser.',
      },
    ],
    practice: 'Pick an app you use daily. List one thing that probably happens in the frontend, one in the backend, and one thing stored in its database.',
    cards: [
      { id: 'c-web-big-picture-1', front: 'Client vs server?', back: 'The client (usually a browser) sends requests; the server waits for and answers them.' },
      { id: 'c-web-big-picture-2', front: 'Frontend vs backend?', back: 'Frontend runs in the user\'s browser (HTML, CSS, JS). Backend runs on the server (rules, data access).' },
      { id: 'c-web-big-picture-3', front: 'Five parts of a URL?', back: 'Scheme, host, path, query string, fragment. The fragment isn\'t sent to the server.' },
    ],
    inTheWild: [
      '"Full-stack" developers work on both frontend and backend',
      'Mobile apps are clients too, talking to the same backends',
    ],
    sources: [SRC.howWeb, SRC.clientServer],
  },
  {
    id: 'web-reaching-server',
    unit: 'How the web works',
    title: 'Finding and connecting to a server',
    summary: 'Before any page loads, the browser looks up an address, opens a connection and secures it.',
    ideas: ['DNS turns names into addresses', 'Ports and connections', 'TLS makes it private'],
    body: `
## DNS turns names into addresses

Computers on the internet find each other by **IP address**, like \`185.199.108.153\`. People prefer names. The **Domain Name System (DNS)**, as MDN puts it, maintains a list of domain names and the resources, such as IP addresses, associated with them.

When you type a domain, the browser asks a DNS resolver, usually run by your internet provider or a public service, "what's the IP for \`mangoomeh.github.io\`?" The answer is cached, so the lookup usually happens once per hostname per page load. Big sites return **several addresses**. Looking up Deliberate's domain in October 2026 returned four, all belonging to GitHub.

## Ports and connections

An IP address finds a machine; a **port** finds a program on it. A port is a numbered communication endpoint, and by convention HTTP servers wait on **port 80** and HTTPS servers on **port 443**. When you see \`localhost:3000\` during development, \`3000\` is the port a development server chose.

To talk, client and server open a **connection**. Traditionally that's **TCP**, which starts with a three-step handshake (SYN, SYN-ACK, ACK) and then guarantees bytes arrive in order. **HTTP/3** instead runs over **QUIC**, built on UDP, which combines the connection and encryption setup to save round trips.

## TLS makes it private

The **s** in **https** means the connection is wrapped in **TLS**. During the TLS handshake, the client and server agree on encryption, and the server proves its identity with a **certificate** signed by an authority the browser trusts. After that, nobody in between, such as Wi-Fi operators or internet providers, can read or alter the traffic.

Each handshake costs round trips across the network, which is why the first request to a new site is slower than later ones, and why browsers keep connections open and reuse them.
`,
    takeaways: [
      'DNS maps domain names to IP addresses, and the answer is cached.',
      'A port picks the program on a machine: 80 for HTTP, 443 for HTTPS by default.',
      'TCP (or QUIC for HTTP/3) carries the data; TLS encrypts it and verifies the server with a certificate.',
    ],
    quiz: [
      {
        q: 'What does DNS do?',
        options: ['Encrypts traffic', 'Maps domain names to resources such as IP addresses', 'Stores web pages', 'Runs JavaScript'],
        answer: 1,
        why: 'It\'s the internet\'s naming system.',
      },
      {
        q: 'A server is reachable at `example.com`. What tells the machine which program should get the request?',
        options: ['The path', 'The port', 'The fragment', 'The cookie'],
        answer: 1,
        why: 'The IP finds the machine; the port finds the program, 443 for HTTPS by default.',
      },
      {
        q: 'What does the certificate in a TLS handshake prove?',
        options: ['That the site is safe to use', 'That the server really controls that domain', 'That the page has no bugs', 'That the connection is fast'],
        answer: 1,
        why: 'It proves identity for the domain; it says nothing about whether the site is trustworthy.',
      },
    ],
    practice: 'In a terminal, run `nslookup github.com` (or `dig github.com`). How many addresses come back?',
    cards: [
      { id: 'c-web-reaching-server-1', front: 'What is DNS?', back: 'The system that maps domain names to resources such as IP addresses.' },
      { id: 'c-web-reaching-server-2', front: 'Default ports for HTTP and HTTPS?', back: '80 for HTTP, 443 for HTTPS.' },
      { id: 'c-web-reaching-server-3', front: 'What does TLS provide?', back: 'Encryption, integrity and server identity (via a certificate) for the connection.' },
    ],
    related: ['web-big-picture'],
    sources: [SRC.dns, SRC.port, SRC.howBrowsers],
  },
  {
    id: 'web-http',
    unit: 'How the web works',
    title: 'HTTP: requests and responses',
    summary: 'Every interaction on the web is a short text conversation with a method, a path, headers and a status.',
    ideas: ['A request: method, path, headers, body', 'A response: status, headers, body', 'HTTP forgets you between requests'],
    body: `
## A request: method, path, headers, body

HTTP is a simple, readable protocol. A request looks like this:

\`\`\`
GET /deliberate/ HTTP/2
Host: mangoomeh.github.io
Accept: text/html
Accept-Language: en-GB
\`\`\`

- The **method** says what you want to do. **GET** reads, **POST** creates or submits, **PUT** and **PATCH** update, **DELETE** removes.
- The **path** says which resource.
- **Headers** carry extra information: which formats you accept, your language, cookies, authorisation.
- An optional **body** carries data, such as a submitted form or JSON.

## A response: status, headers, body

\`\`\`
HTTP/2 200
content-type: text/html; charset=utf-8
cache-control: max-age=600
server: GitHub.com

<!doctype html>...
\`\`\`

The **status code** summarises what happened:

- **2xx success**: 200 OK, 201 Created, 204 No Content.
- **3xx redirection**: 301 Moved Permanently, 304 Not Modified (use your cached copy).
- **4xx client error**: 400 Bad Request, 401 Unauthorized (not logged in), 403 Forbidden (logged in, but not allowed), 404 Not Found, 429 Too Many Requests.
- **5xx server error**: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.

Then come headers, and the body: the HTML, image, JSON or file.

**HTTP/2** and **HTTP/3** send the same messages in a more efficient binary form, many at once over one connection. The meaning is unchanged.

## HTTP forgets you between requests

HTTP is **stateless**: each request stands alone, and the server doesn't automatically remember the last one. So how do sites keep you logged in? With **cookies**: the server asks the browser to store a value and send it back with later requests. A later lesson covers this.
`,
    takeaways: [
      'A request has a method (GET, POST, PUT, PATCH, DELETE), path, headers and optional body.',
      'A response has a status code (2xx, 3xx, 4xx, 5xx), headers and a body.',
      'HTTP is stateless; cookies add memory on top.',
    ],
    quiz: [
      {
        q: 'Which method should a request use to read data without changing anything?',
        options: ['POST', 'GET', 'DELETE', 'PATCH'],
        answer: 1,
        why: 'GET is for reading; it shouldn\'t have side effects.',
      },
      {
        q: 'A logged-in user tries to open an admin page they\'re not allowed to see. Which status fits best?',
        options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '500 Internal Server Error'],
        answer: 1,
        why: '401 means not authenticated; 403 means authenticated but not permitted.',
      },
      {
        q: 'What does "HTTP is stateless" mean?',
        options: ['It never uses servers', 'Each request stands alone; the server doesn\'t inherently remember previous ones', 'It can\'t send data', 'It only works offline'],
        answer: 1,
        why: 'Cookies and sessions add memory on top of HTTP.',
      },
    ],
    practice: 'Open your browser\'s developer tools, go to the Network tab and reload any site. Click the first request and find its method, status code and three response headers.',
    cards: [
      { id: 'c-web-http-1', front: 'Five common HTTP methods?', back: 'GET (read), POST (create/submit), PUT and PATCH (update), DELETE (remove).' },
      { id: 'c-web-http-2', front: 'Status code classes?', back: '2xx success, 3xx redirection, 4xx client error, 5xx server error.' },
      { id: 'c-web-http-3', front: '401 vs 403?', back: '401: not authenticated. 403: authenticated but not allowed.' },
    ],
    related: ['web-reaching-server'],
    sources: [SRC.httpOverview, SRC.status],
  },
  {
    id: 'web-serve-static',
    unit: 'Serving a page',
    title: 'How a page is served: static files',
    summary: 'The simplest server just finds a file and sends it back. Many sites, including this one, work exactly like that.',
    ideas: ['A web server answers requests with files', 'One page, many requests', 'Static hosting'],
    body: `
## A web server answers requests with files

A **web server** can mean the computer or the software on it. The software part is an **HTTP server**: a program that understands URLs and HTTP and must answer every request, at least with an error.

For a **static** site, its job is simple. MDN describes the steps: the server checks whether the requested URL matches a file; if so, it sends the file back; if not, it returns an error, most commonly **404 Not Found**. "Static" means the server sends the same file to everyone, as-is.

## One page, many requests

Loading a page is rarely one request. Here's what happens when you open Deliberate:

1. The browser requests \`/deliberate/\` and receives \`index.html\`, a small file of about 2.5 KB.
2. While reading it, the browser finds \`<link>\` and \`<script>\` tags, and requests those files: one CSS file and one JavaScript file, plus fonts from Google and the icon.
3. The JavaScript file holds the whole app, every lesson included: about 1.1 MB, compressed to about 380 KB for the trip (as measured in October 2026).
4. The JavaScript runs in your browser and draws the screen.

Every subsequent screen, like opening a lesson, needs **no new request to the server**. The app already has everything; it just redraws.

Your browser's Network tab shows this list for any page: each line is one request, with its size and timing.

## Static hosting

Because static sites are just files, hosting them is cheap and simple. **GitHub Pages**, which hosts this app, is a static site hosting service that takes HTML, CSS and JavaScript files straight from a repository. There's no backend code involved, which is why Deliberate saves your progress in your browser rather than in an account.

Static hosts include GitHub Pages, Netlify, Cloudflare Pages and Amazon S3. The trade-off: they can't run code per request, so anything personalised or shared between users needs a backend somewhere.
`,
    takeaways: [
      'A static web server looks up the requested file and returns it, or a 404.',
      'One page load triggers many requests: HTML first, then the CSS, JavaScript, fonts and images it references.',
      'Static hosting is cheap and simple but can\'t run code per request.',
    ],
    quiz: [
      {
        q: 'What does a static web server do when it receives a request?',
        options: ['Runs a database query', 'Finds the matching file and sends it as-is, or returns an error', 'Generates HTML from a template', 'Asks the user to log in'],
        answer: 1,
        why: 'Static means same file for everyone.',
      },
      {
        q: 'Why does opening Deliberate trigger several requests?',
        options: ['The server is slow', 'The HTML references CSS, JavaScript, fonts and an icon, which the browser then fetches', 'Each lesson is requested twice', 'Browsers always make five requests'],
        answer: 1,
        why: 'The HTML is a starting point that lists what else to load.',
      },
      {
        q: 'Why can\'t Deliberate sync progress between devices as currently built?',
        options: ['Browsers forbid it', 'It\'s served from a static host with no backend or database to store shared data', 'JavaScript can\'t save data', 'GitHub deletes it'],
        answer: 1,
        why: 'Shared data needs a server-side store.',
      },
    ],
    practice: 'Open the Network tab, reload this app, and count the requests. Which is the largest file, and how long did it take?',
    cards: [
      { id: 'c-web-serve-static-1', front: 'What does a static web server do?', back: 'Finds the file matching the URL and returns it as-is, or a 404 if there isn\'t one.' },
      { id: 'c-web-serve-static-2', front: 'Why does one page make many requests?', back: 'The HTML references other files (CSS, JS, images, fonts), which the browser then fetches.' },
      { id: 'c-web-serve-static-3', front: 'Limitation of static hosting?', back: 'It can\'t run code per request, so personalised or shared data needs a backend.' },
    ],
    inTheWild: [
      'Documentation sites, portfolios and blogs are often static',
      'GitHub Pages, Netlify, Cloudflare Pages, Amazon S3',
    ],
    related: ['web-http'],
    sources: [SRC.webServer, SRC.ghPages],
  },
  {
    id: 'web-serve-dynamic',
    unit: 'Serving a page',
    title: 'Dynamic pages: application servers',
    summary: 'When a page depends on who you are or on live data, a program builds it for each request.',
    ideas: ['Static web server plus an application', 'Templates and data', 'Static files still go the fast way'],
    body: `
## Static web server plus an application

Your bank balance, a search results page and your social feed can't be prepared in advance: they depend on **who's asking** and **what the data is right now**. These are **dynamic** pages.

MDN describes a **dynamic web server** as a static web server **plus** extra software, most commonly an **application server** and a **database**. The application server is the program you write: in Python, JavaScript, Java, Go, Ruby, PHP or C#.

A dynamic request goes like this, following MDN's example of a sports site's "best lineup" page:

1. The browser sends \`GET /best\`.
2. The **web server** recognises it isn't a plain file and forwards it to the **web application**.
3. The application decides what's needed and **queries the database**.
4. It **puts the data into an HTML template**.
5. It returns the finished HTML, via the web server, with status 200.

## Templates and data

A **template** is HTML with placeholders. In ASP.NET Core, templates are **Razor** files, where \`@\` switches to C#:

\`\`\`cshtml
<h1>Hello, @Model.User.Name</h1>
<ul>
  @foreach (var order in Model.Orders) { <li>@order.Total</li> }
</ul>
\`\`\`

The application fills the gaps for each request. Change the template once and every page built from it changes. This style, where the server builds full HTML pages, is how most of the web worked for decades, and it's still common: ASP.NET Core Razor Pages and MVC views, and elsewhere Django, Rails and Laravel.

## Static files still go the fast way

Even on a dynamic site, most files aren't dynamic: CSS, JavaScript, images and fonts are the same for everyone. MDN notes the web server serves these **directly from the file system**, without bothering the application. Often they're served by a separate service or a CDN altogether.

Many modern apps go further and send almost **no** HTML from the application: the backend returns only **data** (usually JSON), and JavaScript in the browser builds the page. Later lessons compare these approaches.
`,
    takeaways: [
      'Dynamic pages are built per request by an application server, usually with a database.',
      'The application fills HTML templates with data.',
      'Static assets on dynamic sites are still served directly, often by a CDN.',
    ],
    quiz: [
      {
        q: 'What makes a page dynamic?',
        options: ['It has animations', 'It\'s generated per request, based on the request and current data', 'It uses CSS', 'It\'s large'],
        answer: 1,
        why: 'Dynamic means built for each request.',
      },
      {
        q: 'In MDN\'s flow, who fetches data from the database?',
        options: ['The browser', 'The web application', 'The DNS server', 'The CDN'],
        answer: 1,
        why: 'The browser never talks to the database directly.',
      },
      {
        q: 'On a dynamic site, how is a logo image usually served?',
        options: ['Generated by the application each time', 'Directly as a static file by the web server or a CDN', 'From the database', 'It isn\'t'],
        answer: 1,
        why: 'Unchanging files skip the application.',
      },
    ],
    cards: [
      { id: 'c-web-serve-dynamic-1', front: 'Static vs dynamic site?', back: 'Static: the same files for everyone. Dynamic: pages generated per request from data.' },
      { id: 'c-web-serve-dynamic-2', front: 'What does an application server do?', back: 'Handles dynamic requests: applies logic, queries the database, builds a response (often from a template).' },
      { id: 'c-web-serve-dynamic-3', front: 'What is a template?', back: 'HTML with placeholders that the application fills with data for each request.' },
    ],
    related: ['web-serve-static', 'web-render-where'],
    sources: [SRC.webServer, SRC.clientServer],
  },
  {
    id: 'web-cdn-cache',
    unit: 'Serving a page',
    title: 'CDNs and caching',
    summary: 'The fastest request is one that travels a short way, or not at all.',
    ideas: ['CDNs put copies near users', 'Caches and Cache-Control', 'Fingerprinted file names'],
    body: `
## CDNs put copies near users

Data takes time to cross the world: a round trip from Singapore to a server in Virginia takes over 200 milliseconds, and loading a page needs many round trips. A **content delivery network (CDN)** is, in MDN's words, a group of servers spread out over many locations that store copies of data, so requests can be answered by whichever server is **closest** to the user.

Deliberate is a real example. GitHub Pages sits behind a CDN (Fastly), whose servers share the same IP addresses worldwide, so the internet's routing sends each visitor to the nearest one (this is called **anycast**). The response header \`x-served-by\` names the server that answered, ending in an airport code: a test request from the US got \`cache-iad-…\`, near Washington, D.C.; a visitor in Singapore would see \`cache-sin-…\`. Either way, it's a cache near the visitor, not the machine holding the repository.

## Caches and Cache-Control

A **cache** stores a copy of a response to reuse later. There's one in your browser (**private**), and others in between, like CDNs (**shared**).

The server controls caching with headers:

- \`Cache-Control: max-age=600\` means the copy is **fresh** for 600 seconds (10 minutes). During that time, it can be reused without asking. That's what GitHub Pages sends.
- After that, the copy is **stale**. The browser **revalidates**: it asks "has this changed?" using the file's **ETag**, a fingerprint, in an \`If-None-Match\` header. If not, the server replies **304 Not Modified** with no body, which is tiny and fast.
- \`no-cache\` means "store it, but always check before reusing". \`no-store\` means "never store it", for sensitive responses.

## Fingerprinted file names

Long caching creates a problem: if a file is cached for a year, how do users get your update? The standard answer is **cache busting**: put a fingerprint of the content **in the file name**. Deliberate's JavaScript is called \`index-HmMyLZn0.js\`. When the code changes, the build tool produces a new name, and \`index.html\` points at it.

Then fingerprinted files can be cached for a year (\`max-age=31536000, immutable\`), while \`index.html\`, which can't be renamed, uses \`no-cache\` and is always checked.
`,
    takeaways: [
      'A CDN answers requests from servers near the user; GitHub Pages runs behind one.',
      'Cache-Control sets how long a copy stays fresh; ETags and 304 Not Modified make rechecking cheap.',
      'Fingerprinted file names let assets be cached for a year while HTML is always rechecked.',
    ],
    quiz: [
      {
        q: 'Why does a CDN make sites faster?',
        options: ['It compresses code', 'It answers from servers close to the user, cutting round-trip time', 'It removes JavaScript', 'It skips DNS'],
        answer: 1,
        why: 'Distance costs time; nearby copies save it.',
      },
      {
        q: 'A cached file is stale and unchanged. What does the server reply when the browser revalidates?',
        options: ['200 with the full file', '304 Not Modified with no body', '404', '500'],
        answer: 1,
        why: 'A tiny 304 says "your copy is still good".',
      },
      {
        q: 'Why do build tools put a hash in file names like `index-HmMyLZn0.js`?',
        options: ['For security', 'So the file can be cached for a long time; any change produces a new name', 'To hide the code', 'Browsers require it'],
        answer: 1,
        why: 'Cache busting: new content, new URL.',
      },
    ],
    practice: 'In the Network tab, reload a site twice. Find a request served from cache, or with status 304. What Cache-Control header did it have?',
    cards: [
      { id: 'c-web-cdn-cache-1', front: 'What is a CDN?', back: 'A network of servers in many locations holding copies of content, answering from the one nearest the user.' },
      { id: 'c-web-cdn-cache-2', front: 'max-age, ETag and 304?', back: 'max-age: how long a copy is fresh. ETag: a fingerprint. 304 Not Modified: "your cached copy is still valid".' },
      { id: 'c-web-cdn-cache-3', front: 'What is cache busting?', back: 'Putting a content hash in file names so changed files get new URLs, allowing very long caching.' },
    ],
    related: ['web-serve-static', 'eng-scaling-app'],
    sources: [SRC.cdn, SRC.caching],
  },
  {
    id: 'web-html-css-dom',
    unit: 'The browser',
    title: 'HTML, CSS and the DOM',
    summary: 'HTML gives structure, CSS gives style, and the browser turns HTML into a live tree that JavaScript can change.',
    ideas: ['HTML for structure, CSS for style', 'The DOM is a live tree'],
    body: `
## HTML for structure, CSS for style

Every web page starts as **HTML**: text with **tags** that say what each part is.

\`\`\`html
<article>
  <h1>Spacing</h1>
  <p>The same study time, <strong>spread out</strong>, beats one long session.</p>
  <button id="start">Start lesson</button>
</article>
\`\`\`

HTML describes **meaning and structure**: this is a heading, this is a paragraph, this is a button. Using the right element matters: a real \`<button>\` works with the keyboard and screen readers automatically; a \`<div>\` styled to look like one doesn't.

**CSS** describes **appearance**: colours, fonts, spacing, layout. Rules select elements and set properties:

\`\`\`css
h1 { font-size: 2rem; color: #141a2a; }
#start { background: #3056d3; color: white; }
\`\`\`

Keeping structure and style separate means you can restyle a whole site without touching its content, and the same HTML can look right on a phone and a large screen.

## The DOM is a live tree

When the browser reads HTML, it builds the **Document Object Model (DOM)**: a tree of objects, one per element, in memory. The \`<article>\` contains the \`<h1>\`, the \`<p>\` and the \`<button>\`; the \`<p>\` contains text and a \`<strong>\`.

The DOM isn't the HTML file. The file is the starting point; the DOM is **live**. JavaScript can read and change it, and the browser updates the screen to match:

\`\`\`js
const button = document.querySelector('#start')
button.textContent = 'Continue lesson'
button.addEventListener('click', () => { /* … */ })
\`\`\`

That's how pages become interactive: JavaScript changes the DOM in response to events like clicks, typing and data arriving. In Deliberate, the HTML file is nearly empty, just \`<div id="root"></div>\`. Every heading, button and quiz you see was added to the DOM by JavaScript.
`,
    takeaways: [
      'HTML describes structure and meaning; use the right element for the job.',
      'CSS describes appearance and layout, separately from content.',
      'The DOM is the live tree the browser builds from HTML; JavaScript changes it to update the page.',
    ],
    quiz: [
      {
        q: 'What\'s HTML\'s job?',
        options: ['Colours and layout', 'Structure and meaning of content', 'Talking to the database', 'Running on the server'],
        answer: 1,
        why: 'CSS handles appearance; HTML says what things are.',
      },
      {
        q: 'What is the DOM?',
        options: ['The HTML file on disk', 'A live tree of objects the browser builds from HTML, which JavaScript can change', 'A database', 'A CSS framework'],
        answer: 1,
        why: 'Changes to the DOM show up on screen.',
      },
      {
        q: 'Why use a real `<button>` instead of a clickable `<div>`?',
        options: ['It\'s shorter', 'Buttons get keyboard and screen-reader support automatically', 'Divs can\'t be styled', 'There\'s no difference'],
        answer: 1,
        why: 'Semantic elements bring accessibility for free.',
      },
    ],
    practice: 'Right-click any page and choose Inspect. Find a heading in the Elements panel, change its text there, and watch the page update. Reload: the change disappears, because you edited the DOM, not the file.',
    cards: [
      { id: 'c-web-html-css-dom-1', front: 'HTML vs CSS?', back: 'HTML: structure and meaning. CSS: appearance and layout.' },
      { id: 'c-web-html-css-dom-2', front: 'What is the DOM?', back: 'The live tree of objects the browser builds from HTML; JavaScript reads and changes it.' },
    ],
    sources: [SRC.dom],
  },
  {
    id: 'web-render',
    unit: 'The browser',
    title: 'From HTML to pixels',
    summary: 'The browser parses, styles, lays out and paints the page, and some files make it wait.',
    ideas: ['Parse, style, layout, paint', 'What blocks rendering', 'Layout is expensive'],
    body: `
## Parse, style, layout, paint

Once HTML starts arriving, the browser works through a pipeline, described in MDN's guide to how browsers work:

1. **Parse** HTML into the **DOM**, starting before the whole file has downloaded. A **preload scanner** looks ahead and starts downloading CSS, scripts and fonts early.
2. Parse CSS into the **CSSOM**, a tree of style rules.
3. **Style**: combine them into a **render tree** of visible elements with their computed styles. Elements with \`display: none\` are left out.
4. **Layout**: work out each element's exact size and position.
5. **Paint**: fill in pixels, such as text, colours, borders and images.
6. **Composite**: draw separate layers in the right order, often on the graphics chip.

## What blocks rendering

Some files make the browser wait:

- **CSS blocks rendering.** The browser won't paint until it has the styles, so you don't see an unstyled flash.
- **Plain scripts block parsing.** When the parser meets a \`<script>\` tag without special attributes, it **pauses** until the script has downloaded and run, because the script might change the document.

The fixes are attributes on the script tag:

- \`defer\`: download in parallel, run after parsing finishes, in order.
- \`async\`: download in parallel, run as soon as it arrives.
- \`type="module"\`: deferred by default. Deliberate's single script uses this.

Putting essential HTML and CSS early, and keeping blocking scripts out of the way, is how pages appear fast.

## Layout is expensive

After the first render, changing the DOM or styles can make the browser redo work. Changing an element's size or position can trigger **reflow**: recalculating layout for it and everything it affects. Changing only colour needs repainting. Animating \`transform\` and \`opacity\` can often skip both, handled by the compositor.

Images without width and height cause a common annoyance: when they arrive, the page reflows and content jumps. Setting dimensions reserves space up front.
`,
    takeaways: [
      'The browser parses HTML and CSS, builds a render tree, lays it out, paints and composites.',
      'CSS blocks rendering; plain scripts block parsing. Use defer, async or modules.',
      'Size and position changes trigger costly reflow; transform and opacity animate cheaply.',
    ],
    quiz: [
      {
        q: 'What happens when the HTML parser meets a plain `<script src="app.js">` tag?',
        options: ['It ignores it', 'It pauses parsing until the script is downloaded and run', 'It runs it on the server', 'It finishes the page first'],
        answer: 1,
        why: 'Scripts can change the document, so the parser waits.',
      },
      {
        q: 'What does the `defer` attribute do?',
        options: ['Never runs the script', 'Downloads in parallel and runs after parsing, in order', 'Runs immediately and blocks', 'Delays the script by 10 seconds'],
        answer: 1,
        why: 'Parsing continues while the script downloads.',
      },
      {
        q: 'Which animation is usually cheapest for the browser?',
        options: ['Changing width every frame', 'Changing `transform` to move an element', 'Changing top and left margins', 'Adding and removing elements'],
        answer: 1,
        why: 'Transform and opacity can be handled by the compositor without layout.',
      },
    ],
    cards: [
      { id: 'c-web-render-1', front: 'Browser rendering pipeline?', back: 'Parse HTML (DOM) and CSS (CSSOM), style (render tree), layout, paint, composite.' },
      { id: 'c-web-render-2', front: 'defer vs async scripts?', back: 'Both download in parallel. defer runs after parsing, in order; async runs as soon as it arrives.' },
      { id: 'c-web-render-3', front: 'What is reflow?', back: 'Recalculating layout after size or position changes; it can be expensive.' },
    ],
    related: ['web-html-css-dom', 'web-event-loop'],
    sources: [SRC.howBrowsers, SRC.insideBrowser],
  },
  {
    id: 'web-runtime',
    unit: 'The browser',
    title: 'The browser is a JavaScript runtime',
    summary: 'JavaScript the language can\'t do much alone. The browser gives it the DOM, the network, storage and timers.',
    ideas: ['Engine vs host', 'Web APIs come from the browser', 'Same language, different hosts'],
    body: `
## Engine vs host

JavaScript as a language is small: variables, functions, objects, arrays, loops, promises. Notice what's missing: no way to show anything on screen, fetch a file, wait a second or save data.

A **JavaScript engine** runs the language. Chrome and Edge use **V8**, Firefox uses SpiderMonkey, Safari uses JavaScriptCore. They compile your code to fast machine code as it runs.

But to do anything useful, the engine needs a **host environment**. As MDN's page on the execution model explains, to interact with the outside world, produce meaningful output or reach external resources, JavaScript needs environment-specific mechanisms **provided by the host**. The browser is one such host.

A **runtime** is engine plus host: the language plus everything it's allowed to use.

## Web APIs come from the browser

The browser provides **Web APIs** to JavaScript. None of these are part of the language itself:

- \`document\`, \`querySelector\`, \`addEventListener\`: the **DOM**.
- \`fetch\`: make HTTP requests.
- \`setTimeout\`, \`setInterval\`, \`requestAnimationFrame\`: **timers** and animation.
- \`localStorage\`, \`IndexedDB\`: **storage**. Deliberate keeps your progress in \`localStorage\`.
- \`navigator.geolocation\`, the camera, notifications, the clipboard: device features, behind permission prompts.

The browser also enforces **security rules** on all of these: a page can't read your files, and can't read other sites' data without permission.

## Same language, different hosts

**Node.js** runs the same V8 engine **outside the browser**. It has no \`document\` or \`window\`, because there's no page. Instead, it offers servers, files and processes: \`node:http\`, \`node:fs\`.

So "JavaScript" in a browser and in Node is the same language with different powers. Code that only uses the language, like a function that sorts lessons, runs in both. Code that touches \`document\` only runs in a browser; code that reads files only runs in Node.

The same split exists for C#: the language is small, the **.NET runtime** runs it, and .NET's libraries supply files, networking and ASP.NET Core's web server. Browsers can't run C# directly; they run JavaScript, plus WebAssembly, which is how Blazor WebAssembly runs .NET code in a page.
`,
    takeaways: [
      'An engine (like V8) runs the language; a host (browser or Node) provides access to the outside world.',
      'DOM, fetch, timers and storage are Web APIs from the browser, not part of JavaScript.',
      'Node.js uses the same engine with server powers (files, HTTP) instead of the DOM.',
    ],
    quiz: [
      {
        q: 'Is `document.querySelector` part of the JavaScript language?',
        options: ['Yes, it\'s built in', 'No, it\'s a Web API provided by the browser', 'Only in Node.js', 'Only in TypeScript'],
        answer: 1,
        why: 'The DOM comes from the host environment.',
      },
      {
        q: 'What is a JavaScript runtime?',
        options: ['A text editor', 'An engine plus the host APIs it can use', 'A type of server', 'A framework'],
        answer: 1,
        why: 'Browser and Node are both runtimes around an engine.',
      },
      {
        q: 'Why does `document.title` fail in a Node.js script?',
        options: ['Node is broken', 'Node has no page, so it doesn\'t provide the DOM', 'Node uses a different language', 'It needs an import'],
        answer: 1,
        why: 'Node provides files and networking, not a document.',
      },
    ],
    practice: 'Open the browser console (developer tools → Console) and type `typeof fetch`, `typeof document` and `typeof setTimeout`. Each is provided by the browser, not by JavaScript itself.',
    cards: [
      { id: 'c-web-runtime-1', front: 'JavaScript engine vs host environment?', back: 'The engine (V8, SpiderMonkey, JavaScriptCore) runs the language; the host (browser, Node) provides APIs to the outside world.' },
      { id: 'c-web-runtime-2', front: 'Name four browser Web APIs.', back: 'The DOM, fetch, timers (setTimeout), storage (localStorage).' },
      { id: 'c-web-runtime-3', front: 'How does Node.js relate to the browser?', back: 'Same V8 engine, different host: no DOM, but files, processes and HTTP servers.' },
    ],
    related: ['web-event-loop', 'web-listen'],
    sources: [SRC.execModel, SRC.webApis, SRC.node, SRC.dotnetIntro],
  },
  {
    id: 'web-event-loop',
    unit: 'The browser',
    title: 'One thread and the event loop',
    summary: 'A page\'s JavaScript runs one thing at a time. Long tasks freeze everything.',
    ideas: ['One main thread', 'The event loop', 'Don\'t block the main thread'],
    body: `
## One main thread

Each browser tab has a **main thread** that does almost everything for the page: running your JavaScript, handling clicks, calculating styles and layout, and painting.

It can only do **one thing at a time**. While your code runs, nothing else on that thread does: no clicks are handled and the screen doesn't update.

## The event loop

So how does a page wait for a network response without freezing? It doesn't wait. The host handles slow operations outside your code and lets you know later:

1. Your code calls \`fetch(url)\` or \`setTimeout(fn, 1000)\`. The browser starts the work in the background and your code **continues immediately**.
2. When the work finishes, the browser puts a **callback**, a function to run, in a **queue**.
3. The **event loop** repeatedly takes the next job from the queue and runs it **to completion**. Each job finishes before the next starts and can't be interrupted.

MDN adds a detail: promise callbacks go into a **microtask** queue, which is emptied before the next ordinary task.

\`\`\`js
console.log('1')
setTimeout(() => console.log('3'), 0)
Promise.resolve().then(() => console.log('2'))
console.log('1b')
// prints 1, 1b, 2, 3
\`\`\`

Even with a delay of 0, the timeout waits for the current code to finish and for the microtasks to run.

## Don't block the main thread

Most screens refresh **60 times a second**, so the browser has about **16.7 milliseconds** per frame. If one piece of JavaScript runs for 500 ms, the page can't respond or animate for half a second: it feels frozen or "janky".

Common causes: processing huge lists, heavy calculations, and large frameworks starting up. Fixes:

- Do less work, or only the work for what's visible.
- Split long tasks into smaller chunks so the browser can handle input in between.
- Move heavy calculation to a **Web Worker**, which runs JavaScript on another thread without DOM access.
`,
    takeaways: [
      'A tab\'s main thread runs JavaScript, handles input and renders, one thing at a time.',
      'Slow operations happen outside your code; their callbacks queue up and the event loop runs them one by one.',
      'At 60 fps there\'s about 16.7 ms per frame; long tasks freeze the page.',
    ],
    quiz: [
      {
        q: 'Your code calls `fetch()`. What happens to the next line?',
        options: ['It waits until the response arrives', 'It runs immediately; the response is handled later by a callback', 'It\'s skipped', 'The page reloads'],
        answer: 1,
        why: 'fetch starts the work and returns a promise; your code continues.',
      },
      {
        q: 'What does this print? `setTimeout(() => log("A"), 0); log("B")`',
        options: ['A then B', 'B then A', 'Only A', 'Only B'],
        answer: 1,
        why: 'The timeout callback waits for the current code to finish.',
      },
      {
        q: 'A button click triggers a 2-second calculation in JavaScript. What does the user experience?',
        options: ['Nothing unusual', 'The page freezes: no clicks, scrolling updates or animation for 2 seconds', 'The calculation runs on the server', 'The browser speeds up'],
        answer: 1,
        why: 'Long tasks block the main thread.',
      },
    ],
    cards: [
      { id: 'c-web-event-loop-1', front: 'What does the main thread do?', back: 'Runs page JavaScript, handles input, styles, lays out and paints, one thing at a time.' },
      { id: 'c-web-event-loop-2', front: 'What is the event loop?', back: 'The mechanism that takes queued callbacks and runs each to completion, one after another.' },
      { id: 'c-web-event-loop-3', front: 'Frame budget at 60 fps?', back: 'About 16.7 ms; longer tasks cause jank.' },
    ],
    related: ['web-runtime', 'web-async'],
    sources: [SRC.execModel, SRC.insideBrowser],
  },
  {
    id: 'web-async',
    unit: 'The browser',
    title: 'Async code: promises and async/await',
    summary: 'How JavaScript code waits for things without blocking, and how to handle failure.',
    ideas: ['Callbacks and promises', 'async and await', 'Handle failures'],
    body: `
## Callbacks and promises

Because slow work finishes later, JavaScript needs a way to say "when that's done, do this".

The original way was a **callback**: pass a function to run later. Chains of callbacks inside callbacks became hard to read and to handle errors in.

A **promise** is an object representing a result that isn't ready yet. It's **pending**, then either **fulfilled** with a value or **rejected** with an error. You attach what to do next:

\`\`\`js
fetch('/api/lessons')
  .then((response) => response.json())
  .then((lessons) => show(lessons))
  .catch((error) => showError(error))
\`\`\`

## async and await

\`async\` and \`await\` let you write the same thing in a top-to-bottom style:

\`\`\`js
async function loadLessons() {
  const response = await fetch('/api/lessons')
  const lessons = await response.json()
  show(lessons)
}
\`\`\`

\`await\` **pauses this function only**, not the whole page. While it waits, the event loop keeps running other work: clicks, animations, other code. When the promise settles, the function resumes where it left off.

A common mistake: awaiting independent things one after another. If two requests don't depend on each other, start both and wait for both:

\`\`\`js
const [user, lessons] = await Promise.all([getUser(), getLessons()])
\`\`\`

## Handle failures

Networks fail, servers return errors, users go offline. Wrap awaited calls in \`try\`/\`catch\`:

\`\`\`js
try {
  const response = await fetch('/api/lessons')
  if (!response.ok) throw new Error(\`Server said \${response.status}\`)
  show(await response.json())
} catch (error) {
  showMessage('Could not load lessons. Check your connection and try again.')
}
\`\`\`

Note the \`response.ok\` check: \`fetch\` only rejects when the request couldn't be made at all. A 404 or 500 response still **fulfils**, so you must check the status yourself.
`,
    takeaways: [
      'A promise represents a future result: pending, then fulfilled or rejected.',
      'await pauses only the current async function; the page keeps running. Use Promise.all for independent work.',
      'Use try/catch, and check response.ok, since fetch doesn\'t reject on 404 or 500.',
    ],
    quiz: [
      {
        q: 'What does `await` pause?',
        options: ['The whole browser tab', 'Only the async function it\'s in', 'The server', 'All JavaScript on the page'],
        answer: 1,
        why: 'Other work continues through the event loop.',
      },
      {
        q: 'A server returns 500 to a `fetch` call. What happens?',
        options: ['The promise rejects automatically', 'The promise fulfils; you must check `response.ok` or the status', 'The page reloads', 'fetch retries forever'],
        answer: 1,
        why: 'fetch rejects only on network failure.',
      },
      {
        q: 'Two requests don\'t depend on each other. What\'s faster?',
        options: ['Await one, then the other', 'Start both and `await Promise.all([...])`', 'Use setTimeout', 'Make them synchronous'],
        answer: 1,
        why: 'Running them in parallel saves the waiting time of one.',
      },
    ],
    practice: 'In the browser console, run `await fetch("https://mangoomeh.github.io/deliberate/").then(r => r.status)`. Then try a URL that doesn\'t exist on the same site. What status do you get, and does it throw?',
    cards: [
      { id: 'c-web-async-1', front: 'Three states of a promise?', back: 'Pending, fulfilled (with a value), rejected (with an error).' },
      { id: 'c-web-async-2', front: 'Does fetch reject on a 404 or 500?', back: 'No. It rejects only on network failure; check response.ok.' },
      { id: 'c-web-async-3', front: 'How to run independent async calls in parallel?', back: 'Start them together and await Promise.all([...]).' },
    ],
    related: ['web-event-loop', 'web-fetch'],
    sources: [SRC.promises, SRC.fetch],
  },
  {
    id: 'web-fetch',
    unit: 'Talking to the backend',
    title: 'Forms and fetch',
    summary: 'The two ways a page sends data to a server: submitting a form, or JavaScript making a request.',
    ideas: ['Forms: the original way', 'fetch: requests from JavaScript', 'JSON is the common format'],
    body: `
## Forms: the original way

Before JavaScript did much, pages sent data with **forms**:

\`\`\`html
<form method="post" action="/login">
  <input name="email" type="email">
  <input name="password" type="password">
  <button>Log in</button>
</form>
\`\`\`

Pressing the button makes the **browser itself** send a request, here \`POST /login\` with the fields in the body, and then **load a whole new page** from the response. After a successful POST, servers usually reply with a redirect (**302** plus a \`Location\` header) so that refreshing doesn't resubmit the form.

Forms still work everywhere, need no JavaScript, and are a solid default for simple sites.

## fetch: requests from JavaScript

Modern apps usually keep the page and send requests from JavaScript with **fetch**, then update only part of the screen:

\`\`\`js
const response = await fetch('/api/lessons/42/complete', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ score: 3 }),
})
const result = await response.json()
\`\`\`

This is what makes apps feel instant: saving a setting, liking a post or loading more results happens without a page reload. The older name for this pattern is **AJAX**.

## JSON is the common format

Requests and responses between frontends and backends are usually **JSON** (JavaScript Object Notation): plain text that looks like JavaScript objects and arrays:

\`\`\`json
{ "id": 42, "title": "Spacing", "completed": true, "tags": ["memory", "study"] }
\`\`\`

It's readable by people, and nearly every language can parse it. \`JSON.stringify\` turns an object into JSON text; \`response.json()\` or \`JSON.parse\` turns it back.

The \`Content-Type\` header tells the other side what format the body is in: \`application/json\` for JSON, \`text/html\` for pages, and so on.
`,
    takeaways: [
      'Forms make the browser send a request and load a new page; redirect after a POST.',
      'fetch sends requests from JavaScript and updates part of the page without reloading.',
      'JSON is the usual data format; Content-Type says what format a body is in.',
    ],
    quiz: [
      {
        q: 'What happens when a normal HTML form is submitted?',
        options: ['JavaScript updates part of the page', 'The browser sends the request and loads a new page from the response', 'Nothing until you reload', 'The data is saved locally'],
        answer: 1,
        why: 'Forms are handled by the browser itself, with a full page load.',
      },
      {
        q: 'Why do servers redirect after a successful form POST?',
        options: ['To save bandwidth', 'So refreshing the page doesn\'t resubmit the form', 'Browsers require it', 'To log the user out'],
        answer: 1,
        why: 'This is the post/redirect/get pattern.',
      },
      {
        q: 'Which header tells the server the request body is JSON?',
        options: ['`Accept: text/html`', '`Content-Type: application/json`', '`Cache-Control: no-cache`', '`Host: api.example`'],
        answer: 1,
        why: 'Content-Type describes the body being sent.',
      },
    ],
    cards: [
      { id: 'c-web-fetch-1', front: 'Form submit vs fetch?', back: 'A form makes the browser send a request and load a new page; fetch sends a request from JavaScript and updates part of the page.' },
      { id: 'c-web-fetch-2', front: 'What is JSON?', back: 'A text format for structured data (objects, arrays, strings, numbers, booleans), used between frontends and backends.' },
    ],
    related: ['web-async', 'web-apis'],
    sources: [SRC.forms, SRC.fetch],
  },
  {
    id: 'web-apis',
    unit: 'Talking to the backend',
    title: 'APIs: how frontends and backends agree',
    summary: 'An API is the contract for what a client can ask a server, and what it gets back.',
    ideas: ['What an API is', 'REST-style APIs', 'Designing for clients'],
    body: `
## What an API is

An **API** (application programming interface) is a defined way for one program to use another. For web apps, it usually means a set of **endpoints**: URLs a client can call, with the methods, inputs and responses agreed in advance.

The same backend API often serves several clients: the website, an iPhone app, an Android app, and sometimes other companies' software. That's one reason to separate a backend's **data** from any one frontend's **pages**.

## REST-style APIs

The most common style for web APIs is **REST**: treat things as **resources** with URLs, and use HTTP methods to act on them.

| Request | Meaning |
| --- | --- |
| \`GET /lessons\` | List lessons |
| \`GET /lessons/42\` | Get lesson 42 |
| \`POST /lessons\` | Create a lesson (data in the body) |
| \`PATCH /lessons/42\` | Change part of lesson 42 |
| \`DELETE /lessons/42\` | Delete lesson 42 |

And use status codes meaningfully: **201 Created** after a POST, **404** for a missing lesson, **400** or **422** for invalid input, **401/403** for authentication and permission problems.

Other styles exist. **GraphQL** lets clients ask for exactly the fields they need from one endpoint. **RPC** styles (like gRPC) call named functions directly. REST is still the default most developers meet first.

## Designing for clients

Good APIs are predictable:

- Consistent naming, such as plural nouns and the same date format everywhere.
- Clear error responses with a message and a code, not just "500".
- **Pagination** for long lists instead of returning everything at once.
- **Versioning** (\`/v1/…\`) or careful additive changes, because old app versions keep calling the API for years.

The Software Engineering subject's "APIs and data in practice" lessons cover pagination and rate limiting in more depth.
`,
    takeaways: [
      'An API is the agreed contract of endpoints, inputs and responses between programs.',
      'REST treats things as resources with URLs and uses HTTP methods and status codes to act on them.',
      'Good APIs are consistent, return clear errors, paginate lists and change carefully.',
    ],
    quiz: [
      {
        q: 'In a REST API, which request updates part of order 7?',
        options: ['`GET /orders/7`', '`PATCH /orders/7`', '`POST /orders/7/get`', '`DELETE /orders`'],
        answer: 1,
        why: 'PATCH changes part of a resource.',
      },
      {
        q: 'Why keep a backend API separate from any one frontend\'s pages?',
        options: ['It\'s faster to write', 'Several clients (web, iOS, Android, partners) can use the same API', 'Browsers require it', 'To hide errors'],
        answer: 1,
        why: 'One API, many clients.',
      },
      {
        q: 'Why are API changes risky?',
        options: ['They aren\'t', 'Old app versions keep calling the API long after you change it', 'Browsers cache APIs forever', 'JSON can\'t change'],
        answer: 1,
        why: 'Plan for versioning or backwards-compatible changes.',
      },
    ],
    practice: 'Open `https://api.github.com/repos/facebook/react` in your browser. What fields come back? Which parts look like REST resources?',
    cards: [
      { id: 'c-web-apis-1', front: 'What is an API?', back: 'A defined contract for how one program can use another: endpoints, inputs and responses.' },
      { id: 'c-web-apis-2', front: 'REST in one line?', back: 'Resources have URLs; HTTP methods (GET, POST, PATCH, DELETE) act on them; status codes report results.' },
    ],
    related: ['web-http', 'fg-pagination'],
    sources: [SRC.rest, SRC.methods],
  },
  {
    id: 'web-realtime',
    unit: 'Talking to the backend',
    title: 'Live updates: polling, SSE and WebSockets',
    summary: 'HTTP is ask-and-answer. When the server needs to tell you something first, there are three main options.',
    ideas: ['Polling', 'Server-sent events', 'WebSockets'],
    body: `
## Polling

In plain HTTP, the client always speaks first; the server can't start a conversation. So how does a chat app show a new message the moment it arrives?

The simplest approach is **polling**: ask regularly. "Any new messages?" every 5 seconds. It's easy and works anywhere, but most requests come back empty, it wastes bandwidth and battery, and updates are delayed by up to the interval. It's fine for things that change slowly, like checking a report's status.

## Server-sent events

**Server-sent events (SSE)** keep one HTTP response **open** and let the server push messages down it as they happen:

\`\`\`js
const events = new EventSource('/api/notifications')
events.onmessage = (e) => showNotification(e.data)
\`\`\`

It's **one-way**, server to client. The client still sends things with normal fetch requests. The browser **reconnects automatically** if the connection drops. The server replies with \`Content-Type: text/event-stream\` and writes each message as a few lines of text.

Good for notifications, live scores, progress bars, and streaming AI responses word by word. One catch from MDN: over old HTTP/1.1, browsers allow only **six** connections per domain, so many tabs with SSE can run out; HTTP/2 raises this to around 100 streams.

## WebSockets

A **WebSocket** starts as an HTTP request asking to **upgrade** the connection, then becomes a **two-way** channel where either side can send messages at any time:

\`\`\`js
const socket = new WebSocket('wss://chat.example/room/7')
socket.onmessage = (e) => addMessage(JSON.parse(e.data))
socket.send(JSON.stringify({ text: 'Hello!' }))
\`\`\`

Best for genuinely interactive, two-way, low-latency apps: chat, multiplayer games, collaborative editing. The costs: the server must hold many open connections, and reconnection and missed messages are your job to handle.

**Rule of thumb:** poll if updates are rare, use SSE for server-to-client streams, and use WebSockets when both sides talk constantly. In ASP.NET Core, **SignalR** handles the details: it uses WebSockets when it can and falls back to other transports.
`,
    takeaways: [
      'Polling asks repeatedly: simple but wasteful and delayed.',
      'SSE keeps an HTTP response open for one-way server-to-client messages, with auto-reconnect.',
      'WebSockets upgrade to a two-way channel for chat, games and collaboration.',
    ],
    quiz: [
      {
        q: 'Why can\'t a server simply send a message to a browser over plain HTTP?',
        options: ['It can, always', 'HTTP is request-response: the client must start each exchange', 'Servers can\'t send data', 'Browsers block servers'],
        answer: 1,
        why: 'That\'s why polling, SSE and WebSockets exist.',
      },
      {
        q: 'A dashboard needs live order counts pushed from the server; users don\'t send anything back. Which fits best?',
        options: ['Polling every 100 ms', 'Server-sent events', 'WebSockets are required', 'Email'],
        answer: 1,
        why: 'SSE is designed for one-way server-to-client streams.',
      },
      {
        q: 'Which app most needs WebSockets?',
        options: ['A blog', 'A multiplayer game where both sides send frequent messages', 'A weekly report page', 'A contact form'],
        answer: 1,
        why: 'Two-way, frequent, low-latency messaging is the WebSocket use case.',
      },
    ],
    cards: [
      { id: 'c-web-realtime-1', front: 'Polling vs SSE vs WebSockets?', back: 'Polling: ask repeatedly. SSE: one-way server push over HTTP. WebSockets: two-way channel after an upgrade.' },
      { id: 'c-web-realtime-2', front: 'What does SSE give you for free?', back: 'Automatic reconnection, over ordinary HTTP, with the EventSource API.' },
    ],
    related: ['web-fetch', 'web-listen'],
    sources: [SRC.sse, SRC.websockets, SRC.signalr],
  },
  {
    id: 'web-cors',
    unit: 'Talking to the backend',
    title: 'Origins, CORS and why fetch fails',
    summary: 'Browsers stop pages reading other sites\' data unless those sites allow it. That\'s the same-origin policy.',
    ideas: ['What an origin is', 'The same-origin policy', 'CORS: the server opts in'],
    body: `
## What an origin is

An **origin** is the combination of **scheme, host and port**:

- \`https://app.example.com\` and \`https://app.example.com/settings\`: **same origin** (only the path differs).
- \`https://app.example.com\` and \`https://api.example.com\`: **different** (different host).
- \`http://localhost:5173\` and \`http://localhost:3000\`: **different** (different port). This is why development setups hit CORS errors so often.

## The same-origin policy

Imagine you're logged in to your bank, then visit a malicious site. If that site's JavaScript could \`fetch('https://yourbank.com/account')\` and **read** the response, it could steal your data, because your browser would attach your bank cookies.

So browsers enforce the **same-origin policy**: scripts can freely request and read resources from **their own origin**, but by default can't **read** responses from other origins. Images, stylesheets and scripts can still be loaded across origins; reading data from scripts is what's restricted.

## CORS: the server opts in

Sometimes cross-origin access is intended, such as when your frontend at \`app.example.com\` calls your API at \`api.example.com\`. **CORS** (Cross-Origin Resource Sharing) lets the **server** say which origins may read its responses:

\`\`\`
Access-Control-Allow-Origin: https://app.example.com
\`\`\`

For requests that might change things, like a \`DELETE\` or JSON \`POST\` with custom headers, the browser first sends a **preflight**: an \`OPTIONS\` request asking "would you accept this?" Only if the server agrees does the real request go out.

Two important consequences:

- **CORS is enforced by the browser.** \`curl\` or a backend calling the same API isn't affected. It protects users, not servers.
- **You fix CORS errors on the server**, by sending the right headers, not in frontend code. And keep the allowed list specific: allowing every origin with credentials is not permitted, for good reason.

In ASP.NET Core, the CORS middleware sends the headers: \`builder.Services.AddCors(o => o.AddPolicy("web", p => p.WithOrigins("https://app.example.com")))\`, then \`app.UseCors("web")\`.
`,
    takeaways: [
      'An origin is scheme + host + port; a different port is a different origin.',
      'The same-origin policy stops scripts reading other origins\' responses, protecting logged-in users.',
      'CORS headers let a server allow specific origins; browsers enforce it, and preflights check risky requests first.',
    ],
    quiz: [
      {
        q: 'Are `http://localhost:3000` and `http://localhost:5173` the same origin?',
        options: ['Yes, same host', 'No, the ports differ', 'Only on Chrome', 'Only with HTTPS'],
        answer: 1,
        why: 'Origin includes the port.',
      },
      {
        q: 'What does the same-origin policy protect against?',
        options: ['Slow pages', 'Malicious sites reading your data from other sites using your logged-in session', 'Large images', 'Typos in URLs'],
        answer: 1,
        why: 'Without it, any site could read your bank or email.',
      },
      {
        q: 'Your frontend gets a CORS error calling your own API on another subdomain. Where\'s the fix?',
        options: ['In the frontend JavaScript', 'On the API server: send the right Access-Control-Allow-Origin headers', 'Disable HTTPS', 'Use a different browser'],
        answer: 1,
        why: 'The server decides who may read its responses.',
      },
    ],
    cards: [
      { id: 'c-web-cors-1', front: 'What is an origin?', back: 'Scheme + host + port. All three must match for the same origin.' },
      { id: 'c-web-cors-2', front: 'What is CORS?', back: 'Headers a server sends to let pages from other origins read its responses; enforced by browsers.' },
      { id: 'c-web-cors-3', front: 'What is a CORS preflight?', back: 'An OPTIONS request the browser sends first to check the server accepts a non-simple cross-origin request.' },
    ],
    related: ['web-session', 'web-security'],
    sources: [SRC.sameOrigin, SRC.cors, SRC.aspnetCors],
  },
  {
    id: 'web-listen',
    unit: 'The backend',
    title: 'How a backend listens for requests',
    summary: 'A backend is a long-running program that claims a port, waits for connections and answers each request.',
    ideas: ['A process listening on a port', 'Handle each request without blocking', 'Development vs production addresses'],
    body: `
## A process listening on a port

A backend isn't a file that gets opened; it's a **program that keeps running**, waiting. When it starts, it asks the operating system to **listen** on a port. From then on, connections that arrive at that machine on that port are handed to it.

Here's a complete ASP.NET Core web server, the whole of \`Program.cs\`:

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// runs once for every request, whatever the path
app.MapGet("/{**path}", (HttpRequest request) =>
    $"You asked for {request.Method} {request.Path}");

app.Run("http://127.0.0.1:5000");
\`\`\`

Start it with \`dotnet run\` and the program doesn't exit: it sits listening. Visit \`http://127.0.0.1:5000/hello\` and the handler runs with \`request.Method\` set to \`GET\` and \`request.Path\` set to \`/hello\`. \`HttpRequest\` holds the request (method, path, headers, body); the string you return becomes the response body, sent with status 200.

Underneath, ASP.NET Core's built-in web server, **Kestrel**, listens on the port, parses HTTP and hands each request to your code. Every backend framework, whether ASP.NET Core, Express, Django, Spring or Go's \`net/http\`, does this: listen on a port, receive a request, call your code, send a response.

## Handle each request without blocking

A busy server handles thousands of requests at once. .NET runs them on a **thread pool**. When your code \`await\`s something slow, like a database query, its thread goes back to the pool to serve other requests until the result arrives. That's why ASP.NET Core code is **async all the way down**: \`await db.SaveChangesAsync()\`, not \`db.SaveChanges()\`.

The opposite hurts: blocking calls such as \`.Result\`, \`.Wait()\` or \`Thread.Sleep\` hold a thread doing nothing. Under load the pool runs dry, a problem called **thread pool starvation**, and every request slows down. Node.js reaches the same goal differently, with one thread and an event loop. Either way: don't make requests wait behind one slow operation.

## Development vs production addresses

- \`127.0.0.1\` or \`localhost\` means **this machine only**: only programs on your computer can connect. Good for development.
- \`0.0.0.0\` means **all network interfaces**: other machines can connect. Servers in production or containers listen this way (ASP.NET Core's container images listen on port 8080).
- Development servers use high ports like 5000, 5173 or 8080. In production, the public sees **443**, usually at a **reverse proxy** in front, as the next lessons explain.
`,
    takeaways: [
      'A backend is a long-running program that listens on a port and runs a handler for each request; in .NET, Kestrel does the listening.',
      'Await slow work so the thread pool can serve other requests; blocking calls cause thread pool starvation.',
      '127.0.0.1 accepts only local connections; 0.0.0.0 accepts connections from the network.',
    ],
    quiz: [
      {
        q: 'What does `app.Run("http://127.0.0.1:5000")` do?',
        options: ['Sends a request to port 5000', 'Starts Kestrel listening for connections on port 5000, then waits for requests', 'Opens a browser', 'Starts a database'],
        answer: 1,
        why: 'The program then keeps running, handling requests.',
      },
      {
        q: 'A server listens on `127.0.0.1:5000`. A colleague on the same Wi-Fi tries to open it from their laptop. What happens?',
        options: ['It works', 'It fails: 127.0.0.1 accepts connections only from the same machine', 'It redirects', 'It asks for a password'],
        answer: 1,
        why: 'Listen on 0.0.0.0 (carefully) to accept network connections.',
      },
      {
        q: 'Endpoints call `httpClient.GetStringAsync(url).Result`. Under heavy load everything slows to a crawl. Why?',
        options: ['.Result is slower to type', 'Each blocked call holds a thread-pool thread, so the pool runs out (thread pool starvation)', 'HttpClient is limited to one request', 'Kestrel only allows 10 requests'],
        answer: 1,
        why: 'Use await so threads return to the pool while waiting.',
      },
    ],
    practice: 'If you have the .NET SDK, run `dotnet new web -o hello`, replace Program.cs with the example, run `dotnet run`, and visit a few paths. Watch the output change with the path.',
    cards: [
      { id: 'c-web-listen-1', front: 'What does it mean for a server to listen on a port?', back: 'It\'s a running program the OS hands connections to when they arrive on that port.' },
      { id: 'c-web-listen-2', front: 'What is Kestrel?', back: 'ASP.NET Core\'s built-in web server: it listens on a port, parses HTTP and passes each request to your code.' },
      { id: 'c-web-listen-3', front: 'Why is ASP.NET Core code async?', back: 'Awaiting slow I/O returns the thread to the pool to serve other requests; blocking (.Result, .Wait()) causes thread pool starvation.' },
      { id: 'c-web-listen-4', front: '127.0.0.1 vs 0.0.0.0?', back: '127.0.0.1: local connections only. 0.0.0.0: all network interfaces.' },
    ],
    related: ['web-runtime', 'web-routing', 'web-reaching-server'],
    sources: [SRC.minimalApis, SRC.kestrel, SRC.asyncScenarios, SRC.port],
  },
  {
    id: 'web-routing',
    unit: 'The backend',
    title: 'Routing and middleware',
    summary: 'Once a request arrives, the backend decides which code handles it, and runs shared steps on the way.',
    ideas: ['Routes map requests to handlers', 'Middleware: steps every request passes through', 'Inside a handler'],
    body: `
## Routes map requests to handlers

A real backend has many endpoints. Instead of one giant \`if\` statement, frameworks use **routing**: matching each request to the code that should handle it. In ASP.NET Core minimal APIs:

\`\`\`csharp
app.MapGet("/lessons", ListLessons);
app.MapGet("/lessons/{lessonId}", GetLesson);
app.MapPost("/lessons/{lessonId}/complete", CompleteLesson);
\`\`\`

The framework matches the **method and path** of each request to a route. \`{lessonId}\` is a **route parameter**: for \`/lessons/42\`, the handler's \`lessonId\` parameter receives \`"42"\`. A constraint such as \`{id:int}\` converts it to a number, and \`/lessons/abc\` simply doesn't match. If nothing matches, the response is **404**. Controllers with \`[HttpGet("lessons/{lessonId}")]\` attributes do the same job.

## Middleware: steps every request passes through

Many things need to happen for lots of routes: logging, handling errors, working out who the user is, checking permissions. **Middleware** are steps that run **before** (and after) the endpoint, in order, each deciding to pass the request on or stop it:

\`\`\`csharp
app.UseExceptionHandler("/error"); // turns crashes into a clean 500
app.UseAuthentication();           // reads the cookie or token: who is this?
app.UseAuthorization();            // checks [Authorize] and policies: may they?

app.Use(async (context, next) =>   // your own middleware
{
    app.Logger.LogInformation("{Method} {Path}", context.Request.Method, context.Request.Path);
    await next(context);           // continue down the pipeline
});
\`\`\`

Think of it as a pipeline: request → error handling → authentication → authorization → endpoint → response. Order matters: authorization can't run before authentication.

## Inside a handler

A typical handler does the same few things:

1. **Read and validate input**: route values, query string, body. Reject bad input with a 400.
2. **Check permissions**: is this user allowed to do this to this item? (403 if not.)
3. **Do the work**: query or update the database, call other services.
4. **Send a response**: a status code and usually JSON.

\`\`\`csharp
app.MapPost("/lessons/{lessonId}/complete",
    async (string lessonId, CompletionRequest body, ClaimsPrincipal user, AppDbContext db) =>
    {
        if (body.Score < 0) return Results.BadRequest(new { error = "Invalid score" });
        var userId = user.FindFirstValue(ClaimTypes.NameIdentifier)!;
        db.Completions.Add(new Completion(userId, lessonId, body.Score));
        await db.SaveChangesAsync();
        return Results.NoContent();   // 204
    }).RequireAuthorization();
\`\`\`

Notice how much the framework does: the route value, the JSON body (as a \`CompletionRequest\` record), the logged-in user and the \`AppDbContext\` from dependency injection all arrive as typed parameters.
`,
    takeaways: [
      'Routing matches a request\'s method and path to a handler; route parameters capture parts of the path.',
      'Middleware runs shared steps (errors, authentication, authorization, logging) in order around the endpoint.',
      'Handlers validate input, check permissions, do the work and send a status plus data.',
    ],
    quiz: [
      {
        q: 'With `app.MapGet("/users/{userId}", (string userId) => ...)`, what does `userId` hold for `/users/17`?',
        options: ['17 as an int', 'The string "17"', 'null', '"/users/17"'],
        answer: 1,
        why: 'Route values bind as strings unless you use a constraint like {userId:int} and an int parameter.',
      },
      {
        q: 'What is middleware?',
        options: ['The database', 'Steps that run in order around every request, such as error handling or authentication', 'The CSS framework', 'A type of cache'],
        answer: 1,
        why: 'Each can pass the request on by calling next, or stop it.',
      },
      {
        q: 'A request has a valid login but asks to delete someone else\'s post. What should the handler return?',
        options: ['200', '401', '403', '404 always'],
        answer: 2,
        why: 'Authenticated, but not permitted.',
      },
    ],
    cards: [
      { id: 'c-web-routing-1', front: 'What does routing do?', back: 'Matches each request\'s method and path to a handler, e.g. app.MapGet("/lessons/{lessonId}", ...).' },
      { id: 'c-web-routing-2', front: 'What is middleware in ASP.NET Core?', back: 'Steps in the request pipeline (UseExceptionHandler, UseAuthentication, UseAuthorization...) that run in order and can pass the request on or stop it.' },
      { id: 'c-web-routing-3', front: 'Four steps inside a typical handler?', back: 'Validate input (400), check permission (403), do the work, send a status and data.' },
    ],
    related: ['web-listen', 'web-apis', 'eng-patterns-behaviour'],
    sources: [SRC.aspnetRouting, SRC.aspnetMiddleware, SRC.minimalApis],
  },
  {
    id: 'web-proxy',
    unit: 'The backend',
    title: 'Reverse proxies and load balancers',
    summary: 'In production, your app rarely faces the internet directly. Something sits in front of it.',
    ideas: ['What a reverse proxy does', 'Load balancing across copies', 'Headers from the proxy'],
    body: `
## What a reverse proxy does

A **reverse proxy** is a server that receives requests from the internet and **forwards** them to your application, then passes the response back. Common ones are **Nginx**, Caddy, HAProxy, IIS, Microsoft's **YARP**, and cloud load balancers such as Azure Application Gateway.

The basic Nginx configuration from its documentation:

\`\`\`nginx
location / {
    proxy_pass       http://localhost:8000;
    proxy_set_header Host      $host;
    proxy_set_header X-Real-IP $remote_addr;
}
\`\`\`

Requests arrive at Nginx on port 443; Nginx passes them to your app listening on port 8000 on the same machine.

Why not expose the app directly? The proxy handles jobs that every app needs and that are easy to get wrong:

- **HTTPS**: it holds the certificate and does the encryption (**TLS termination**), so your app speaks plain HTTP internally.
- **Static files**: serves images, CSS and JavaScript fast, without bothering your app.
- **Protection**: limits request sizes and rates, and filters obviously bad traffic.
- **Compression** and caching.

## Load balancing across copies

One copy of your app on one machine has limits, and it's a single point of failure. So production systems run **several copies**, and a **load balancer** spreads requests across them, skipping any that fail their health checks. To the user it's one site.

This only works if any copy can handle any request. So app servers should be **stateless**: no user data kept only in one process's memory. Sessions and data live in a shared database or cache instead. The Software Engineering subject's system design lessons cover this in more depth.

## Headers from the proxy

Behind a proxy, your app sees every request coming **from the proxy**, not from the user. Proxies add headers to pass on the original details:

- \`X-Forwarded-For\` and \`X-Real-IP\`: the user's IP address.
- \`X-Forwarded-Proto\`: whether the user used HTTPS.
- \`Host\`: which domain they asked for.

Only trust these headers when they come from **your own proxy**: anyone can send fake ones directly. In ASP.NET Core, the \`UseForwardedHeaders()\` middleware applies them, and only trusts the proxies you configure.
`,
    takeaways: [
      'A reverse proxy forwards internet requests to your app and handles HTTPS, static files, limits and compression.',
      'Load balancers spread requests across several app copies; that requires stateless app servers.',
      'Proxies pass the user\'s IP and protocol in X-Forwarded headers; trust them only from your proxy.',
    ],
    quiz: [
      {
        q: 'In the Nginx example, where does the app actually listen?',
        options: ['Port 443 on the internet', 'Port 8000 on the same machine, behind Nginx', 'In the browser', 'On the DNS server'],
        answer: 1,
        why: 'Nginx takes public traffic and forwards it to localhost:8000.',
      },
      {
        q: 'What is TLS termination?',
        options: ['Shutting down a server', 'The proxy handling HTTPS encryption so the app behind it can speak plain HTTP', 'Deleting certificates', 'Blocking all HTTPS'],
        answer: 1,
        why: 'The proxy holds the certificate and decrypts traffic.',
      },
      {
        q: 'Why must app servers behind a load balancer be stateless?',
        options: ['To save memory', 'Any copy might get the next request, so user data can\'t live in one copy\'s memory', 'Load balancers delete state', 'They mustn\'t be'],
        answer: 1,
        why: 'Shared state goes in a database or cache.',
      },
    ],
    cards: [
      { id: 'c-web-proxy-1', front: 'What is a reverse proxy?', back: 'A server in front of your app that receives requests and forwards them, often handling HTTPS, static files and limits.' },
      { id: 'c-web-proxy-2', front: 'What does a load balancer need from app servers?', back: 'Statelessness: any copy can handle any request; shared data lives in a database or cache.' },
      { id: 'c-web-proxy-3', front: 'What is X-Forwarded-For?', back: 'A header a proxy adds with the original client IP; trust it only from your own proxy.' },
    ],
    related: ['eng-scaling-app', 'fg-health-checks', 'web-listen'],
    sources: [SRC.nginx, SRC.proxy, SRC.forwardedHeaders],
  },
  {
    id: 'web-session',
    unit: 'The backend',
    title: 'Remembering users: cookies, sessions and tokens',
    summary: 'HTTP forgets you between requests. Here\'s how logins work anyway, and where browsers store data.',
    ideas: ['Cookies', 'Sessions and tokens', 'Storing data in the browser'],
    body: `
## Cookies

A **cookie** is a small piece of data a server asks the browser to store and send back. The server sets it in a response header:

\`\`\`
Set-Cookie: session=a3fWa9; Secure; HttpOnly; SameSite=Lax; Max-Age=1209600
\`\`\`

From then on, the browser automatically includes \`Cookie: session=a3fWa9\` with every request to that site.

The attributes matter for security, as MDN explains:

- \`HttpOnly\`: JavaScript **can't read** the cookie, so an injected script can't steal it.
- \`Secure\`: only sent over HTTPS.
- \`SameSite\`: limits sending the cookie with requests from other sites, which helps prevent cross-site request forgery. Browsers default to \`Lax\` if it isn't set.

## Sessions and tokens

There are two common ways to remember who's logged in:

- **Server-side sessions**: after login, the server creates a random **session ID**, stores "session a3fWa9 = user 17" in a database or cache, and puts only the ID in a cookie. Each request, it looks the ID up. Logging out deletes it on the server. MDN recommends exactly this kind of opaque identifier rather than storing sensitive data in cookies, which users can read and change.
- **Tokens**: the server gives the client a **signed** token, often a **JWT**, containing the user ID and an expiry. The server checks the signature on each request without a lookup. Common for mobile apps and APIs. The catch: a token is valid until it expires, so revoking one early needs extra machinery.

For browser apps, a session ID in an \`HttpOnly\` cookie is a safe, simple default. ASP.NET Core's **cookie authentication** is a close cousin: by default it puts the user's claims in the cookie itself, encrypted and signed with the Data Protection system so the user can't read or change them.

## Storing data in the browser

For data that should stay on the device, browsers offer:

- \`localStorage\`: simple text key–value storage that persists across visits. Deliberate saves all your progress here, which is why it never reaches a server.
- \`sessionStorage\`: the same, but cleared when the tab closes.
- **IndexedDB**: a larger, structured, asynchronous database in the browser.

Don't use cookies for general storage: they're small (around 4 KB) and sent with every request. And don't keep secrets in localStorage: any script on the page can read it.
`,
    takeaways: [
      'Cookies are set by the server and sent back automatically; use HttpOnly, Secure and SameSite.',
      'Sessions keep a random ID in a cookie and the data on the server; tokens are signed and checked without a lookup.',
      'localStorage, sessionStorage and IndexedDB store data on the device; don\'t put secrets there.',
    ],
    quiz: [
      {
        q: 'What does the `HttpOnly` cookie attribute do?',
        options: ['Sends the cookie only over HTTP', 'Prevents JavaScript from reading the cookie', 'Makes it expire hourly', 'Shares it across sites'],
        answer: 1,
        why: 'It stops injected scripts stealing session cookies.',
      },
      {
        q: 'In server-side sessions, what\'s stored in the cookie?',
        options: ['The user\'s password', 'A random session ID the server looks up', 'The whole user record', 'Nothing'],
        answer: 1,
        why: 'The data stays on the server; the cookie only identifies the session.',
      },
      {
        q: 'Why doesn\'t Deliberate\'s progress follow you to another device?',
        options: ['It\'s encrypted', 'It\'s stored in that browser\'s localStorage, not on a server', 'Cookies expire', 'GitHub blocks it'],
        answer: 1,
        why: 'localStorage is per browser, per device.',
      },
    ],
    cards: [
      { id: 'c-web-session-1', front: 'Three important cookie attributes?', back: 'HttpOnly (no JavaScript access), Secure (HTTPS only), SameSite (limits cross-site sending).' },
      { id: 'c-web-session-2', front: 'Session vs token authentication?', back: 'Session: random ID in a cookie, data looked up on the server. Token: signed data (often a JWT) checked without lookup; harder to revoke early.' },
      { id: 'c-web-session-3', front: 'Three browser storage options?', back: 'localStorage (persists), sessionStorage (per tab), IndexedDB (large, structured).' },
    ],
    related: ['web-http', 'web-cors', 'web-security'],
    sources: [SRC.cookies, SRC.localStorage, SRC.aspnetCookie],
  },
  {
    id: 'web-databases',
    unit: 'The backend',
    title: 'Where data lives: databases',
    summary: 'Why backends use databases instead of files, and the two broad kinds you\'ll meet.',
    ideas: ['Why not just files?', 'Relational databases and SQL', 'Document databases'],
    body: `
## Why not just files?

You could save every user to a JSON file. It breaks down quickly:

- Two requests writing at the same moment can corrupt it.
- Finding "all orders over £100 last week" means reading everything.
- A crash halfway through a write can leave half-saved data.
- Several app copies on different machines can't share one local file.

A **database** is a separate server program built to solve exactly these problems: many simultaneous readers and writers, fast searching with **indexes**, safety against crashes, and **transactions**, which group changes so they all happen or none do. Transferring money must take from one account **and** add to another, never just one.

Your backend connects to the database over the network, much as a browser connects to your backend.

## Relational databases and SQL

**Relational databases**, such as SQL Server, PostgreSQL, MySQL and SQLite, store data in **tables** with fixed columns, like spreadsheets with rules. Rows in one table refer to rows in another by ID:

\`\`\`sql
-- Users(Id, Name)            Completions(UserId, LessonId, Score)
SELECT u.Name, c.Score
FROM Completions AS c
JOIN Users AS u ON u.Id = c.UserId
WHERE c.LessonId = 'web-http';
\`\`\`

**SQL** is the language for asking questions and making changes; SQL Server's dialect is called T-SQL. Relational databases enforce structure (every completion must point to a real user), which catches many bugs. They're the default choice for most applications.

In .NET you usually reach the database through **EF Core**, an object-relational mapper that turns C# LINQ into SQL. This produces the query above:

\`\`\`csharp
var scores = await db.Completions
    .Where(c => c.LessonId == "web-http")
    .Select(c => new { c.User.Name, c.Score })
    .ToListAsync();
\`\`\`

## Document databases

**Document databases**, such as MongoDB and Firestore, store flexible **JSON-like documents**, often grouped in collections:

\`\`\`json
{ "_id": 17, "name": "Ana", "completions": [{ "lesson": "web-http", "score": 3 }] }
\`\`\`

They're convenient when data naturally comes in self-contained chunks or changes shape often. The trade-off is that relationships across documents and strict consistency take more care.

There are also **key–value stores** like Redis, used as fast caches and for sessions, and search engines like Elasticsearch. Many systems use a relational database as the main store plus one of these for speed.
`,
    takeaways: [
      'Databases handle concurrent writes, fast queries, crash safety and transactions, which files can\'t.',
      'Relational databases store tables with relationships, queried with SQL; they\'re the usual default.',
      'Document databases store flexible JSON-like records; key–value stores like Redis are often used as caches.',
    ],
    quiz: [
      {
        q: 'Why do backends use a database rather than writing to a JSON file?',
        options: ['Files can\'t store text', 'Databases handle simultaneous writes, fast queries and crash safety', 'JSON is too slow to type', 'Browsers require databases'],
        answer: 1,
        why: 'Concurrency, querying and durability are what databases are for.',
      },
      {
        q: 'What is a transaction?',
        options: ['A payment', 'A group of changes that all happen or none do', 'A type of index', 'A backup'],
        answer: 1,
        why: 'It keeps data consistent even if something fails midway.',
      },
      {
        q: 'Which is a relational database?',
        options: ['Redis', 'SQL Server', 'MongoDB', 'localStorage'],
        answer: 1,
        why: 'SQL Server stores tables queried with SQL (its dialect is T-SQL).',
      },
    ],
    cards: [
      { id: 'c-web-databases-1', front: 'What does a database give you over files?', back: 'Safe concurrent writes, fast indexed queries, crash safety and transactions.' },
      { id: 'c-web-databases-2', front: 'Relational vs document databases?', back: 'Relational: tables with relationships, SQL, enforced structure. Document: flexible JSON-like documents.' },
      { id: 'c-web-databases-3', front: 'What is EF Core?', back: '.NET\'s object-relational mapper: you write LINQ against C# classes and it generates and runs the SQL.' },
    ],
    related: ['eng-scaling-data', 'web-serve-dynamic'],
    sources: [SRC.sqlServer, SRC.efOverview],
  },
  {
    id: 'web-auth-basics',
    unit: 'Logging in and permissions',
    title: 'Authentication vs authorization',
    summary: 'Proving who someone is and deciding what they may do are two separate checks, and both happen on the server.',
    ideas: ['Who you are vs what you may do', '401 and 403', 'The server checks every request'],
    body: `
Two words that sound alike, and get mixed up constantly:

## Who you are vs what you may do

- **Authentication** (often "authn"): proving **who** you are. Logging in with a password, a passkey or "Sign in with Google" is authentication.
- **Authorization** (often "authz"): deciding **what** you may do. "Can this user edit this document?" is authorization.

Think of an office building. Your badge at the front door authenticates you. Whether that badge opens the server room is authorization. Being inside the building doesn't mean you can go everywhere.

Authentication always comes first, because you can't decide what someone may do until you know who they are. But most serious security bugs are in the **second** step: OWASP ranks **broken access control** as the number one web risk. The app knew exactly who the user was and let them do something they shouldn't.

## 401 and 403

HTTP has a status code for each failure, and the names are confusingly historical:

| Code | Name | Means |
|---|---|---|
| 401 | Unauthorized | Not authenticated: we don't know who you are. Log in. |
| 403 | Forbidden | Authenticated, but not allowed to do this. |

Some APIs return **404** instead of 403 for other people's data, so attackers can't even learn that a record exists.

## The server checks every request

HTTP is stateless: each request arrives on its own. So **every** request that touches protected data must answer both questions again: who sent this (by checking a session cookie or a token), and are they allowed to do this?

Hiding the "Delete" button for non-admins is good design, but it's **not** security. Anyone can send \`DELETE /api/posts/7\` with curl or the browser's dev tools. The check that counts runs on the server.
`,
    takeaways: [
      'Authentication proves who you are; authorization decides what you may do.',
      '401 means "log in"; 403 means "logged in, but not allowed".',
      'Check identity and permission on the server on every request; hidden buttons aren\'t security.',
    ],
    quiz: [
      {
        q: 'A logged-in user requests another customer\'s order and the API returns it. Which step failed?',
        options: ['Authentication', 'Authorization', 'Encryption', 'DNS'],
        answer: 1,
        why: 'The server knew who they were; it didn\'t check they were allowed to see that order.',
      },
      {
        q: 'A request arrives with no session cookie or token for a protected endpoint. Best status code?',
        options: ['200', '401', '403', '500'],
        answer: 1,
        why: '401: the server doesn\'t know who you are.',
      },
      {
        q: 'A logged-in viewer tries an admin-only action. Best status code?',
        options: ['401', '403', '301', '204'],
        answer: 1,
        why: '403: authenticated, but not permitted.',
      },
      {
        q: 'The admin button is hidden for normal users. Is the admin endpoint now safe?',
        options: ['Yes', 'No: anyone can call the endpoint directly, so the server must check', 'Only on mobile', 'Yes, if the button is also disabled'],
        answer: 1,
        why: 'The UI is a convenience; the server is the security boundary.',
      },
    ],
    cards: [
      { id: 'c-web-auth-basics-1', front: 'Authentication vs authorization?', back: 'Authentication: proving who you are. Authorization: deciding what you may do.' },
      { id: 'c-web-auth-basics-2', front: '401 vs 403?', back: '401: not authenticated (log in). 403: authenticated but not allowed.' },
      { id: 'c-web-auth-basics-3', front: 'Is hiding a button security?', back: 'No. Anyone can call the endpoint directly, so the server must check permission on every request.' },
    ],
    inTheWild: [
      'Your bank\'s app logs you in once, but every transfer is checked again on the server against the accounts you own.',
    ],
    related: ['web-session', 'web-security', 'web-permissions'],
    sources: [SRC.authnCheat, SRC.authzCheat, SRC.status],
  },
  {
    id: 'web-passwords',
    unit: 'Logging in and permissions',
    title: 'Storing passwords safely',
    summary: 'Never store passwords, even encrypted. Store a slow, salted hash, and follow modern rules for what users may choose.',
    ideas: ['Hash, don\'t encrypt', 'Slow hashes with a salt', 'Modern password rules'],
    body: `
## Hash, don't encrypt

**Encryption** can be reversed by anyone holding the key. **Hashing** is one-way: you can compute the hash of a password, but you can't turn the hash back into the password.

At login, the server hashes what the user typed and compares it with the stored hash. It never needs the original password, so it shouldn't keep one. If the database leaks, attackers get hashes, not passwords. Encrypted passwords would be one stolen key away from all of them.

## Slow hashes with a salt

Attackers who steal hashes **guess**: they hash billions of common passwords and look for matches. Two defences:

- A **salt**: a random value stored with each hash and mixed in. Two people with the password \`sunshine1\` get different hashes, so one guess can't crack everyone at once.
- A deliberately **slow** algorithm. Fast hashes like SHA-256 are built for speed, which helps attackers. Password hashing algorithms are tuned to be slow and memory-hungry.

OWASP's current advice: use **Argon2id** (at least 19 MiB of memory, 2 iterations, 1 degree of parallelism). For older systems, **bcrypt** with a work factor of 10 or more (it only uses the first 72 bytes), or **PBKDF2** with 600,000 iterations where FIPS compliance is required.

In .NET, **ASP.NET Core Identity** handles this, along with lockout after repeated failures. Its \`PasswordHasher\` uses salted PBKDF2, and Microsoft's docs point new apps to it rather than calling PBKDF2 yourself:

\`\`\`csharp
var hasher = new PasswordHasher<User>();
string hash = hasher.HashPassword(user, password);               // store this
var result = hasher.VerifyHashedPassword(user, hash, attempt);   // at login
// Success, Failed, or SuccessRehashNeeded: save a new hash with today's settings
\`\`\`

## Modern password rules

NIST's 2025 guidelines (SP 800-63B-4) reversed a lot of old habits:

- Minimum **15 characters** if the password is the only factor; **8** if it's part of multi-factor login. Allow at least 64.
- **No** composition rules like "one uppercase, one symbol". They produce \`Password1!\`.
- **No** forced periodic changes; only when there's evidence of compromise.
- **Do** reject passwords on a blocklist of common and breached ones.

Add **rate limiting** on login attempts and offer **multi-factor authentication** or **passkeys**, which replace passwords with a key pair stored on the device.
`,
    takeaways: [
      'Store a one-way hash, never the password and never an encrypted password.',
      'Use a slow, salted password hash: Argon2id, or bcrypt/PBKDF2 for older systems.',
      'Prefer long passwords and a breached-password blocklist over composition rules and forced changes.',
    ],
    quiz: [
      {
        q: 'Why hash passwords instead of encrypting them?',
        options: ['Hashes are shorter', 'Hashing is one-way, so a leaked database and key don\'t reveal passwords', 'Encryption is illegal', 'Hashes are faster to compute'],
        answer: 1,
        why: 'The server only needs to compare hashes; it never needs the original back.',
      },
      {
        q: 'Why is plain SHA-256 a poor choice for passwords?',
        options: ['It\'s broken', 'It\'s fast, so attackers can test billions of guesses', 'It\'s too slow', 'It can\'t handle long passwords'],
        answer: 1,
        why: 'Password hashes should be slow on purpose.',
      },
      {
        q: 'What does a salt prevent?',
        options: ['Slow logins', 'One guess cracking every user with the same password at once', 'Phishing', 'Typos'],
        answer: 1,
        why: 'Each user\'s hash differs, even for identical passwords.',
      },
      {
        q: 'Which rule matches NIST\'s current guidance?',
        options: ['Force a change every 90 days', 'Require a symbol and a number', 'Check new passwords against a list of breached ones', 'Maximum 12 characters'],
        answer: 2,
        why: 'Blocklists, length and rate limits replace composition rules and expiry.',
      },
    ],
    practice: 'Look up which password hashing algorithm your framework or auth library uses by default, and what settings it uses.',
    cards: [
      { id: 'c-web-passwords-1', front: 'Hashing vs encryption for passwords?', back: 'Hashing is one-way: compare hashes at login. Encryption is reversible with a key, so never use it for passwords.' },
      { id: 'c-web-passwords-2', front: 'OWASP\'s recommended password hash?', back: 'Argon2id (min 19 MiB memory, 2 iterations, parallelism 1). Older: bcrypt cost 10+, or PBKDF2 600,000 iterations.' },
      { id: 'c-web-passwords-3', front: 'What is a salt?', back: 'A random value per password, stored with the hash, so identical passwords get different hashes.' },
      { id: 'c-web-passwords-4', front: 'NIST password length rules (2025)?', back: 'At least 15 characters as a single factor, 8 with MFA; allow at least 64. No composition rules or forced rotation.' },
    ],
    related: ['web-auth-basics', 'web-security'],
    sources: [SRC.pwCheat, SRC.nist, SRC.passkeys, SRC.aspnetPasswords],
  },
  {
    id: 'web-jwt',
    unit: 'Logging in and permissions',
    title: 'What\'s inside a JWT',
    summary: 'A JWT is signed JSON anyone can read. The signature proves it\'s genuine; HTTPS keeps it private in transit.',
    ideas: ['Three parts', 'Signed, not encrypted', 'Verifying a token properly'],
    body: `
A **JSON Web Token** (JWT, said "jot") is a compact way to carry claims like "this is user 42, valid until 10:15".

## Three parts

A JWT is three base64url-encoded pieces joined by dots: \`header.payload.signature\`.

\`\`\`json
// header
{ "alg": "HS256", "typ": "JWT" }
// payload: the "claims"
{ "sub": "42", "role": "editor", "iss": "https://api.example", "aud": "web", "exp": 1798000000 }
\`\`\`

Standard claims include \`sub\` (who it's about), \`exp\` (expiry time), \`iss\` (who issued it) and \`aud\` (who it's for). The **signature** is computed over the header and payload with a key. HS256 uses one shared secret to sign and check; RS256 or ES256 sign with a private key and let anyone check with the public key, which suits several services.

## Signed, not encrypted

Base64 is **encoding**, not encryption. Paste any JWT into a decoder and you'll read the payload. The signature only proves the server issued it and nobody changed it.

So how is a JWT sent to the frontend kept secret?

- **HTTPS** encrypts it in transit, like everything else in the request.
- **Put nothing secret in it.** IDs, roles and expiry are fine; emails, addresses or internal data are not.
- **Store it carefully** in the browser (next lesson).

Encrypted tokens do exist: **JWE** (five dot-separated parts). They're only needed when the token itself must carry confidential data past parties you don't trust, which is rare for logins.

## Verifying a token properly

Most JWT bugs come from checking too little. On every request, with a maintained library:

- **Pin the algorithm** you expect. Never let the token's own \`alg\` header decide. Attackers have sent \`"alg": "none"\`, or tricked servers into checking an RS256 token as HS256 using the public key as the secret.
- Check \`exp\`, and \`iss\` and \`aud\`, so a token for another app is rejected.
- Use a long random secret, kept server-side, or better, asymmetric keys.

In ASP.NET Core, the JWT bearer handler does all of this for each request; you supply the expected values:

\`\`\`csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.Authority = "https://login.example.com";  // issuer; its public keys are fetched from here
        o.Audience = "web-api";
        o.TokenValidationParameters.ValidAlgorithms = ["RS256"];
    });
\`\`\`
`,
    takeaways: [
      'A JWT is header.payload.signature; the payload is readable by anyone holding it.',
      'Signing proves who issued it; HTTPS protects it in transit; never put secrets in the payload.',
      'Verify with a pinned algorithm and check exp, iss and aud on every request.',
    ],
    quiz: [
      {
        q: 'Someone copies a JWT from your app. Can they read the payload?',
        options: ['No, it\'s encrypted', 'Yes, it\'s only base64url-encoded', 'Only with the private key', 'Only on the same domain'],
        answer: 1,
        why: 'Standard JWTs are signed, not encrypted.',
      },
      {
        q: 'Can they change "role": "user" to "admin" in it?',
        options: ['Yes, and it works', 'They can edit it, but the signature check will fail', 'Only if HTTPS is off', 'Only in the header'],
        answer: 1,
        why: 'Changing the payload invalidates the signature.',
      },
      {
        q: 'What keeps a JWT private on its way from the server to the browser?',
        options: ['Base64', 'The signature', 'HTTPS', 'The exp claim'],
        answer: 2,
        why: 'TLS encrypts the whole HTTP exchange.',
      },
      {
        q: 'Why must the server pin which algorithms it accepts?',
        options: ['Speed', 'An attacker could set alg to "none" or swap algorithms to forge tokens', 'To save memory', 'Browsers require it'],
        answer: 1,
        why: 'RFC 8725 calls this algorithm verification.',
      },
    ],
    cards: [
      { id: 'c-web-jwt-1', front: 'The three parts of a JWT?', back: 'Header (algorithm), payload (claims such as sub, exp, iss, aud) and signature, base64url-encoded and joined with dots.' },
      { id: 'c-web-jwt-2', front: 'Is a JWT encrypted?', back: 'Normally no: it\'s signed. Anyone can read the payload; HTTPS protects it in transit. JWE is the rare encrypted form.' },
      { id: 'c-web-jwt-3', front: 'What to check when verifying a JWT?', back: 'Signature with a pinned algorithm, plus exp, iss and aud.' },
      { id: 'c-web-jwt-4', front: 'HS256 vs RS256?', back: 'HS256: one shared secret signs and verifies. RS256: private key signs, public key verifies, so other services can check without the secret.' },
    ],
    inTheWild: [
      'Paste a token from your browser\'s dev tools into a JWT decoder (only a test account\'s!) and you\'ll see its claims in plain text.',
    ],
    related: ['web-session', 'web-tokens'],
    sources: [SRC.jwtRfc, SRC.jwtBcp, SRC.jwtIntro, SRC.jwe, SRC.aspnetJwt],
  },
  {
    id: 'web-tokens',
    unit: 'Logging in and permissions',
    title: 'Access tokens, refresh tokens and storage',
    summary: 'Short-lived access tokens, refresh tokens to renew them, and storing them where scripts can\'t steal them.',
    ideas: ['Short access, long refresh', 'Logging out a token', 'Where the browser keeps it'],
    body: `
## Short access, long refresh

A signed token is valid until it expires, even if the user logs out or is banned. So systems usually issue two:

- An **access token**: sent with each API request, short-lived (often 5 to 15 minutes).
- A **refresh token**: long-lived, sent **only** to one endpoint to get a new access token. The server keeps a record of it, so it **can** be revoked.

A stolen access token is useful only briefly. Each refresh is a chance for the server to say no.

## Logging out a token

Ways to end access before expiry:

- **Revoke the refresh token** in the database. Access stops within one access-token lifetime.
- **Rotate** refresh tokens: each use returns a new one and invalidates the old. If an old one is used again, someone copied it, so revoke the whole family.
- Keep a **denylist** of token IDs (the \`jti\` claim) until they expire, for instant revocation.

Notice how far that drifts from "no lookups". If you need instant logout everywhere, a plain **server session** (a random ID in a cookie, data on the server) is simpler, and fine for most single websites. Tokens shine when many services or mobile apps must verify a user without sharing a session store.

## Where the browser keeps it

| Where | Risk |
|---|---|
| localStorage | Any script on the page can read it, so one XSS bug leaks it. OWASP advises against it for session data. |
| Memory (a JS variable) | Also readable by XSS, but gone on reload; pair with a refresh cookie. |
| HttpOnly cookie | JavaScript can't read it at all. Sent automatically, so guard against CSRF. |

The common recommendation for browser apps is an \`HttpOnly; Secure; SameSite=Lax\` (or \`Strict\`) cookie. \`SameSite\` stops most cross-site request forgery; add CSRF tokens for older browsers or risky actions. Current IETF guidance for browser apps goes further: a **backend for frontend** (BFF) holds the tokens on the server, and the browser gets only a session cookie. ASP.NET Core's documentation recommends the same for web apps.
`,
    takeaways: [
      'Use short-lived access tokens and revocable refresh tokens, rotated on each use.',
      'If you need instant logout and have one website, a server session is simpler than JWTs.',
      'Keep tokens out of localStorage; prefer HttpOnly, Secure, SameSite cookies or a backend-for-frontend.',
    ],
    quiz: [
      {
        q: 'Why keep access tokens short-lived?',
        options: ['They\'re cheaper', 'A stolen one only works briefly, since signed tokens can\'t easily be revoked', 'Browsers delete them', 'To make pages faster'],
        answer: 1,
        why: 'Short expiry limits the damage of theft.',
      },
      {
        q: 'An old, already-rotated refresh token is used again. What should the server assume?',
        options: ['A clock bug', 'It was stolen; revoke that token family', 'The user has two tabs; allow it', 'Nothing'],
        answer: 1,
        why: 'Reuse detection is the point of rotation.',
      },
      {
        q: 'Why is localStorage risky for tokens?',
        options: ['It\'s slow', 'Any JavaScript on the page, including injected scripts, can read it', 'It\'s cleared hourly', 'It\'s sent to every site'],
        answer: 1,
        why: 'One XSS bug is enough to steal it.',
      },
      {
        q: 'A token is in an HttpOnly cookie. What new risk must you handle?',
        options: ['XSS reading it', 'Cross-site request forgery, since the browser sends cookies automatically', 'DNS failures', 'CORS preflights'],
        answer: 1,
        why: 'SameSite and CSRF tokens address that.',
      },
    ],
    cards: [
      { id: 'c-web-tokens-1', front: 'Access token vs refresh token?', back: 'Access: short-lived, sent with every request. Refresh: long-lived, recorded on the server, used only to get new access tokens, and revocable.' },
      { id: 'c-web-tokens-2', front: 'What is refresh token rotation?', back: 'Each refresh returns a new refresh token and invalidates the old; reuse of an old one signals theft.' },
      { id: 'c-web-tokens-3', front: 'Best place for auth tokens in a browser app?', back: 'An HttpOnly, Secure, SameSite cookie, or a backend-for-frontend holding tokens server-side. Not localStorage.' },
    ],
    related: ['web-jwt', 'web-session', 'web-security'],
    sources: [SRC.sessCheat, SRC.h5Cheat, SRC.csrfCheat, SRC.oauthBrowser, SRC.aspnetJwt],
  },
  {
    id: 'web-oauth',
    unit: 'Logging in and permissions',
    title: '"Sign in with Google": OAuth and OpenID Connect',
    summary: 'OAuth lets an app act for you without your password; OpenID Connect adds "who is this user" on top.',
    ideas: ['Delegation without passwords', 'The authorization code flow', 'ID tokens vs access tokens'],
    body: `
## Delegation without passwords

Before OAuth, an app that wanted your contacts asked for your email password. Now the app sends you to the provider (Google, GitHub), **you** log in there and approve specific permissions ("scopes"), and the app gets a token limited to those scopes. It never sees your password, and you can revoke it later.

- **OAuth 2.0** is about **authorization**: "this app may read your calendar".
- **OpenID Connect** (OIDC) is a layer on top for **authentication**: "this user is alice@example.com, verified by Google". "Sign in with Google" is OIDC.

## The authorization code flow

The recommended flow for nearly every app:

1. Your app redirects the browser to the provider with its client ID, the scopes it wants, a redirect URL, and a random \`state\` value.
2. The user logs in and consents at the provider.
3. The provider redirects back to your redirect URL with a short-lived **code**.
4. Your **backend** swaps the code for tokens in a direct server-to-server call, using its client secret.

Two protections are now expected (RFC 9700, the OAuth security best practice from 2025):

- **PKCE**: the app makes a random secret, sends a hash of it in step 1 and the original in step 4. A stolen code is useless without it.
- **Exact redirect URL matching**, so codes can't be sent to an attacker's site.

The older **implicit flow**, which returned tokens straight in the URL, is deprecated.

## ID tokens vs access tokens

OIDC returns an **ID token**, a JWT describing the user (\`sub\`, \`email\`, \`iss\`, \`aud\`). Your app verifies it, then creates **its own** session. The **access token** is for calling the provider's APIs, not for logging into your app.

In practice, don't hand-roll these steps. In ASP.NET Core, \`AddOpenIdConnect()\` runs the code flow for you (PKCE included), and Microsoft.Identity.Web does it for Microsoft Entra ID; providers such as Entra ID, Auth0 or Keycloak sit on the other side.
`,
    takeaways: [
      'OAuth delegates limited access without sharing passwords; OIDC adds verified identity on top.',
      'Use the authorization code flow with PKCE and exact redirect URLs; the implicit flow is deprecated.',
      'Verify the ID token, then create your own session; use a library rather than hand-rolling it.',
    ],
    quiz: [
      {
        q: '"Sign in with Google" mainly uses which standard to tell your app who the user is?',
        options: ['OAuth scopes only', 'OpenID Connect', 'CORS', 'SAML cookies'],
        answer: 1,
        why: 'OIDC adds the ID token and identity on top of OAuth.',
      },
      {
        q: 'What does PKCE protect against?',
        options: ['Slow logins', 'A stolen authorization code being exchanged by an attacker', 'XSS', 'SQL injection'],
        answer: 1,
        why: 'Only the app holding the original secret can redeem the code.',
      },
      {
        q: 'Where should the authorization code be exchanged for tokens in a typical web app?',
        options: ['In the browser URL', 'On your backend', 'In localStorage', 'At the DNS server'],
        answer: 1,
        why: 'The backend can keep the client secret and tokens away from the browser.',
      },
    ],
    cards: [
      { id: 'c-web-oauth-1', front: 'OAuth vs OpenID Connect?', back: 'OAuth: delegated authorization (an app may access something for you). OIDC: authentication layer on top, with an ID token saying who the user is.' },
      { id: 'c-web-oauth-2', front: 'Steps of the authorization code flow?', back: 'Redirect to provider, user logs in and consents, provider redirects back with a code, backend exchanges the code (plus PKCE verifier) for tokens.' },
      { id: 'c-web-oauth-3', front: 'ID token vs access token?', back: 'ID token: a JWT about the user, for your app to verify. Access token: for calling the provider\'s API.' },
    ],
    related: ['web-tokens', 'web-auth-basics'],
    sources: [SRC.oauthBcp, SRC.pkce, SRC.oidc, SRC.aspnetOidc],
  },
  {
    id: 'web-permissions',
    unit: 'Logging in and permissions',
    title: 'Checking permissions',
    summary: 'Deny by default, check ownership on every object, and keep the rules in one place you can test.',
    ideas: ['Deny by default', 'Roles and ownership', 'One place for the rules'],
    body: `
Authentication tells you who's asking. Now decide what they may do.

## Deny by default

Every route should be **closed unless a rule opens it**. New endpoints are the risky ones: someone adds \`GET /api/export\` and forgets the check. If the framework rejects requests with no explicit permission, forgetting fails safe. In ASP.NET Core, a **fallback policy** that requires an authenticated user does this: every endpoint needs a login unless marked \`[AllowAnonymous]\`.

## Roles and ownership

Two kinds of rule cover most apps:

- **Roles** (role-based access control, RBAC): admins can delete any post; editors can publish; viewers can read.
- **Ownership and attributes** (attribute-based, ABAC): you can edit **your own** post; a manager can approve expenses **in their team** under 1,000.

Role checks alone miss the most common bug, where an ID in the URL is trusted:

\`\`\`csharp
// Broken: any logged-in user can read any invoice by changing the ID
app.MapGet("/api/invoices/{id:int}", (int id, AppDbContext db) => db.Invoices.FindAsync(id))
    .RequireAuthorization();

// Fixed: the query itself includes the owner
var userId = user.FindFirstValue(ClaimTypes.NameIdentifier);
var invoice = await db.Invoices.SingleOrDefaultAsync(i => i.Id == id && i.OwnerId == userId);
return invoice is null ? Results.NotFound() : Results.Ok(invoice);
\`\`\`

This is called an **insecure direct object reference** (IDOR). Never trust IDs from the client to mean "theirs"; check on the server, for every object.

## One place for the rules

Scattered \`if (user.role === 'admin')\` checks drift apart. Put rules in one place, such as ASP.NET Core **authorization policies** and resource-based handlers (\`await authz.AuthorizeAsync(user, post, "CanEdit")\`), call them from every route, and write **tests** for it: one test per rule that a forbidden user gets 403 or 404. Log denied attempts; a burst of them is often someone probing.

Remember tokens carry roles as of when they were issued. If you demote someone, a token saying \`"role": "admin"\` stays valid until it expires, so either keep tokens short-lived or check important permissions against the database.
`,
    takeaways: [
      'Deny by default so a forgotten check fails safe.',
      'Check ownership of every object; never trust an ID from the client to mean "theirs".',
      'Keep rules in one tested policy module; remember token roles can be out of date.',
    ],
    quiz: [
      {
        q: 'Changing `/orders/100` to `/orders/101` shows someone else\'s order. What is this?',
        options: ['CORS', 'An insecure direct object reference (broken access control)', 'XSS', 'A cache bug'],
        answer: 1,
        why: 'The server didn\'t check the order belonged to the user.',
      },
      {
        q: 'What does "deny by default" achieve?',
        options: ['Faster responses', 'A route with a forgotten check is closed rather than open', 'Fewer logins', 'Better SEO'],
        answer: 1,
        why: 'Mistakes fail safe.',
      },
      {
        q: 'A user is demoted from admin, but their 1-hour JWT says role: admin. What\'s true?',
        options: ['They lose access instantly', 'They keep admin access until the token expires, unless you check the database', 'The token becomes invalid', 'The browser deletes it'],
        answer: 1,
        why: 'Signed claims are a snapshot from when the token was issued.',
      },
    ],
    practice: 'Pick one API endpoint you\'ve written or used that takes an ID. Write down exactly where the code checks that the ID belongs to the caller.',
    cards: [
      { id: 'c-web-permissions-1', front: 'RBAC vs ABAC?', back: 'RBAC: permissions by role (admin, editor). ABAC: rules on attributes such as owner, team or amount.' },
      { id: 'c-web-permissions-2', front: 'What is an IDOR?', back: 'Insecure direct object reference: the server trusts an ID from the client without checking the user may access that object.' },
      { id: 'c-web-permissions-3', front: 'Why centralise permission rules?', back: 'Scattered checks drift and get forgotten; one tested policy module is consistent and deny-by-default.' },
    ],
    related: ['web-auth-basics', 'web-security'],
    sources: [SRC.authzCheat, SRC.owaspTop10, SRC.aspnetPolicies, SRC.aspnetResourceAuthz],
  },
  {
    id: 'web-dom-by-hand',
    unit: 'Why frameworks exist',
    title: 'Updating the page by hand',
    summary: 'Plain JavaScript can do everything, but keeping the screen in sync with your data gets hard fast.',
    ideas: ['Imperative DOM updates', 'State and UI drift apart'],
    body: `
## Imperative DOM updates

Without a framework, you change the page by telling the DOM exactly what to do, step by step. This is called **imperative** code. A to-do list:

\`\`\`js
const todos = []

function addTodo(text) {
  todos.push({ text, done: false })
  const li = document.createElement('li')
  li.textContent = text
  const remove = document.createElement('button')
  remove.textContent = 'Delete'
  remove.addEventListener('click', () => {
    todos.splice(todos.findIndex((t) => t.text === text), 1)
    li.remove()
    updateCount()
  })
  li.append(remove)
  document.querySelector('#list').append(li)
  updateCount()
}

function updateCount() {
  document.querySelector('#count').textContent = \`\${todos.length} tasks\`
}
\`\`\`

It works, and for a small page it's completely fine. MDN's own version of this example notes it already takes almost thirty lines of code **just** for the UI.

## State and UI drift apart

The real problem, in MDN's words: **every time we change our application's state, we need to update the UI to match.**

Your **state** is the data, here the \`todos\` array. The **UI** is what's on screen. With imperative code, you keep them in sync **by hand**, at every place state changes:

- Add "mark as done", and you must update the list item, the count, maybe a "completed" section, and the empty-state message.
- Add filtering, editing, sorting, saving to a server, and the number of places to update multiplies.
- Forget one, and the screen shows something different from the data: a deleted item still visible, a count that's wrong.

Each feature touches many places, and every bug is a mismatch between state and UI. This is the pain that frameworks were built to remove.
`,
    takeaways: [
      'Imperative DOM code says step by step how to change the page.',
      'Every state change must be mirrored in the UI by hand, in every affected place.',
      'As features grow, state and UI drift apart, which causes bugs. Frameworks exist to fix this.',
    ],
    quiz: [
      {
        q: 'What is "state" in a web app?',
        options: ['The HTML file', 'The data the app is currently working with, like a list of to-dos', 'The CSS', 'The server\'s location'],
        answer: 1,
        why: 'State is the data; the UI should reflect it.',
      },
      {
        q: 'What\'s the main problem with hand-written DOM updates as an app grows?',
        options: ['They\'re impossible', 'Every state change must be mirrored in every affected part of the UI, and it\'s easy to miss one', 'Browsers forbid them', 'They need a server'],
        answer: 1,
        why: 'Missed updates show stale or wrong information.',
      },
      {
        q: 'Is plain JavaScript a bad choice for a simple page with one interactive widget?',
        options: ['Yes, always use a framework', 'No: for small interactivity, plain JavaScript is often simplest', 'Only on mobile', 'It depends on the colour scheme'],
        answer: 1,
        why: 'The pain grows with complexity.',
      },
    ],
    cards: [
      { id: 'c-web-dom-by-hand-1', front: 'Imperative vs declarative UI code?', back: 'Imperative: step-by-step DOM changes. Declarative: describe what the UI should look like for the current state.' },
      { id: 'c-web-dom-by-hand-2', front: 'What problem do frameworks solve?', back: 'Keeping the UI in sync with changing state without hand-writing every DOM update.' },
    ],
    related: ['web-html-css-dom', 'web-frameworks'],
    sources: [SRC.frameworksIntro],
  },
  {
    id: 'web-frameworks',
    unit: 'Why frameworks exist',
    title: 'What frameworks do',
    summary: 'Describe what the screen should look like for your data, and let the framework update the DOM.',
    ideas: ['UI as a function of state', 'Components', 'The cost of a framework'],
    body: `
## UI as a function of state

Frameworks like **React**, **Vue**, **Svelte** and **Angular** flip the approach. You don't write the steps to change the screen. You write **what the screen should look like for any given state**, and the framework works out the DOM changes.

The same to-do list in React:

\`\`\`jsx
function TodoList({ todos, onDelete }) {
  return (
    <>
      <p>{todos.length} tasks</p>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text} <button onClick={() => onDelete(t.id)}>Delete</button></li>
        ))}
      </ul>
    </>
  )
}
\`\`\`

When \`todos\` changes, the framework re-runs this description and updates only what's different on the page. The count can't be wrong, because it's always derived from the same data. This is **declarative** UI: you declare the result, not the steps. React compares the new description with the previous one; Svelte and Vue track which data each part depends on. The goal is the same.

MDN sums it up: frameworks don't bring brand-new powers to JavaScript; they make its powers easier to use, providing a better **developer experience**.

## Components

Frameworks also organise the UI into **components**: reusable pieces with their own markup, behaviour and style. Deliberate is built from components such as \`LessonRow\`, \`Quiz\` and \`StudyButton\`. A component is written once and used everywhere, so a fix in one place fixes it across the app.

Frameworks and their ecosystems add more: **routing** between screens without page reloads (client-side routing), state management, testing tools and large libraries of ready-made components. React itself is technically a library for rendering UI, usually combined with others.

## The cost of a framework

MDN is clear that frameworks aren't free:

- They add **JavaScript** that users must download and run, which costs time on slower phones.
- They take **time to learn**, and have quirks.
- For a few mostly static pages, **you might not need one at all**.
- Client-side routing can break accessibility unless handled, such as announcing the new page title to screen readers.

Frameworks amplify whatever you build: good practices and mistakes alike.
`,
    takeaways: [
      'Frameworks let you describe the UI for the current state; they update the DOM to match.',
      'Components package markup, behaviour and style into reusable pieces.',
      'Frameworks cost download size, learning time and care; small sites may not need one.',
    ],
    quiz: [
      {
        q: 'What does "declarative" UI mean?',
        options: ['Writing every DOM change step by step', 'Describing what the UI should look like for the current state, and letting the framework update the DOM', 'Using only CSS', 'Rendering on the server only'],
        answer: 1,
        why: 'You declare the result; the framework finds the steps.',
      },
      {
        q: 'Why can\'t the task count in the React example get out of sync?',
        options: ['React checks it every second', 'It\'s computed from the same `todos` data every time the UI is described', 'It\'s stored separately', 'Browsers cache it'],
        answer: 1,
        why: 'Derived from state, not updated by hand.',
      },
      {
        q: 'According to MDN, what do frameworks add to JavaScript?',
        options: ['Brand-new capabilities the browser lacks', 'Easier access to JavaScript\'s existing powers: a better developer experience', 'Server-side features', 'Nothing useful'],
        answer: 1,
        why: 'Everything a framework does could be written in plain JavaScript.',
      },
    ],
    practice: 'Look at a page you use (a shop, an inbox). Sketch it as a tree of components. Which component appears many times?',
    cards: [
      { id: 'c-web-frameworks-1', front: 'What is a UI component?', back: 'A reusable piece of interface with its own markup, behaviour and style.' },
      { id: 'c-web-frameworks-2', front: 'How do frameworks keep the UI in sync?', back: 'You describe the UI as a function of state; the framework re-renders and updates only what changed.' },
      { id: 'c-web-frameworks-3', front: 'Costs of using a framework?', back: 'More JavaScript to download and run, learning time, and accessibility work for client-side routing.' },
    ],
    related: ['web-dom-by-hand', 'web-render-where'],
    sources: [SRC.frameworksIntro, SRC.thinkingReact],
  },
  {
    id: 'web-render-where',
    unit: 'Why frameworks exist',
    title: 'Where the page is built: CSR, SSR and static',
    summary: 'HTML can be built in the browser, on the server per request, or ahead of time. Each has trade-offs.',
    ideas: ['Client-side rendering', 'Server-side rendering and hydration', 'Static rendering'],
    body: `
## Client-side rendering

In **client-side rendering (CSR)**, the server sends a nearly empty HTML page plus JavaScript, and the JavaScript builds the page **in the browser**. This makes a **single-page application (SPA)**: after the first load, moving between screens just changes the DOM.

Deliberate is a CSR app. Its HTML contains little more than \`<div id="root"></div>\`.

- **Good**: smooth, app-like navigation; can be hosted as static files; works offline once loaded.
- **Costs**: nothing useful appears until the JavaScript downloads and runs. As web.dev notes, the amount of JavaScript tends to grow with the app, which can hurt responsiveness. Search engines and link previews see less without extra work.

## Server-side rendering and hydration

In **server-side rendering (SSR)**, the server runs the components for each request and sends **finished HTML**, so content appears quickly. Then the same JavaScript loads in the browser and **hydrates** the page: it attaches event handlers so buttons work.

web.dev's article on rendering explains the trade-offs:

- **Good**: fast first content; good for search and sharing; works for personalised, live data.
- **Costs**: generating pages takes server time, which can slow the **time to first byte**, and needs running servers. Hydration can make a page **look ready before it can respond to input**, and it ships much of the same work twice.

Frameworks like **Next.js** (React), **Nuxt** (Vue) and **SvelteKit** do SSR and hydration for you, often **streaming** HTML in chunks so the top of the page arrives first. In .NET, **Razor Pages** render on the server, and **Blazor** can render on the server and then add interactivity, either over a live SignalR connection or by running .NET in the browser with WebAssembly.

## Static rendering

**Static rendering**, or static site generation (SSG), builds the HTML **once, at build time**, for every URL. The output is plain files, served from a CDN.

- **Good**: very fast and cheap; the HTML is ready before anyone asks.
- **Costs**: you need a file for every possible URL, so it suits blogs, docs and marketing pages, not a personalised dashboard.

Many real sites **mix** these: static pages for marketing, SSR for product pages, CSR for the interactive app behind the login.
`,
    takeaways: [
      'CSR builds the page in the browser: smooth navigation, but slow first load as JavaScript grows.',
      'SSR sends finished HTML per request, then hydrates it; fast content, but server cost and hydration delays.',
      'Static rendering builds HTML at build time for every URL: fastest, but only for content known in advance.',
    ],
    quiz: [
      {
        q: 'Deliberate\'s HTML is almost empty and JavaScript builds every screen. What rendering approach is this?',
        options: ['Server-side rendering', 'Client-side rendering', 'Static rendering of every lesson', 'Email rendering'],
        answer: 1,
        why: 'It\'s a single-page app built in the browser.',
      },
      {
        q: 'What is hydration?',
        options: ['Compressing images', 'JavaScript attaching interactivity to HTML the server already rendered', 'Clearing the cache', 'Filling a database'],
        answer: 1,
        why: 'Until hydration finishes, server-rendered buttons may not respond.',
      },
      {
        q: 'Which suits static rendering best?',
        options: ['A personalised banking dashboard', 'A documentation site whose pages change only when you publish', 'A live chat', 'A stock ticker'],
        answer: 1,
        why: 'Every page is known in advance.',
      },
    ],
    cards: [
      { id: 'c-web-render-where-1', front: 'CSR vs SSR vs static rendering?', back: 'CSR: built in the browser. SSR: built on the server per request. Static: built once at build time.' },
      { id: 'c-web-render-where-2', front: 'What is hydration?', back: 'Client-side JavaScript making server-rendered HTML interactive.' },
      { id: 'c-web-render-where-3', front: 'What is an SPA?', back: 'A single-page application: one HTML shell; JavaScript changes the DOM to show each screen.' },
    ],
    related: ['web-frameworks', 'web-serve-dynamic'],
    sources: [SRC.rendering, SRC.blazor],
  },
  {
    id: 'web-build',
    unit: 'Why frameworks exist',
    title: 'Why there\'s a build step',
    summary: 'The code you write isn\'t quite the code browsers download. Tools translate, combine and shrink it.',
    ideas: ['Packages and modules', 'What a build does', 'Dev server vs production build'],
    body: `
## Packages and modules

Modern projects reuse code from **packages**, installed with **npm** (Node's package manager) and listed in \`package.json\`. (The .NET equivalents for a backend are **NuGet** packages, listed in the \`.csproj\` file.) Deliberate depends on React, React DOM and React Router; a typical project has hundreds of packages once you count their dependencies.

Code is split into **modules**: files that \`import\` from each other.

\`\`\`js
import { useState } from 'react'
import { lessonPath } from '../catalog'
\`\`\`

Browsers understand \`import\` natively now, but not \`'react'\` with no path, and loading hundreds of small files one by one is slow.

## What a build does

A **build tool** turns your source into files optimised for browsers:

- **Transform** code browsers don't understand: **JSX** (\`<button onClick={…}>\` inside JavaScript), **TypeScript** (JavaScript with type annotations), and newer syntax for older browsers.
- **Bundle**: follow the imports and combine everything into a few files. As Vite's guide notes, shipping unbundled modules is still inefficient because of the extra network round trips from nested imports.
- **Minify**: remove spaces, shorten names, drop unused code ("tree shaking").
- **Fingerprint** file names, like \`index-HmMyLZn0.js\`, for long caching.

Running \`npm run build\` in this project does all of that and writes the output to \`dist/\`: one HTML file, one CSS file and one JavaScript file. That \`dist/\` folder is all GitHub Pages ever sees.

## Dev server vs production build

During development, you want changes to appear **instantly**. Tools like **Vite** run a **dev server** that serves your source files on demand as native modules, transforming each file only when the browser asks for it, and swaps changed modules in without a full reload (**hot module replacement**).

For production, it switches to a full optimised **bundle**. So there are two modes:

- \`npm run dev\`: fast feedback while you work, at \`localhost:5173\`.
- \`npm run build\`: the optimised files you deploy.

Other tools you'll hear about: **webpack** (the long-time standard bundler), **esbuild**, **Rollup**, **Babel** (code transformer), **ESLint** (finds problems) and **Prettier** (formats code).
`,
    takeaways: [
      'Projects reuse npm packages and split code into modules that import each other.',
      'A build transforms (JSX, TypeScript), bundles, minifies and fingerprints code for production.',
      'Dev servers serve source on demand with hot updates; production builds ship optimised bundles.',
    ],
    quiz: [
      {
        q: 'Why can\'t you just ship JSX and TypeScript files to the browser?',
        options: ['They\'re too small', 'Browsers don\'t understand JSX or TypeScript syntax; it must be transformed to JavaScript', 'They\'re secret', 'They need a database'],
        answer: 1,
        why: 'Build tools translate them into plain JavaScript.',
      },
      {
        q: 'Why bundle for production, even though browsers support modules?',
        options: ['Bundling adds features', 'Many nested imports mean many extra network round trips', 'Modules are insecure', 'It\'s required by HTTPS'],
        answer: 1,
        why: 'Fewer, larger files load faster.',
      },
      {
        q: 'What does a dev server like Vite\'s optimise for?',
        options: ['Smallest files', 'Fast feedback: serving source on demand and hot-replacing changed modules', 'Search engines', 'Security'],
        answer: 1,
        why: 'Production builds optimise for users; dev servers for developers.',
      },
    ],
    practice: 'Open any site\'s JavaScript file in the Network tab and look at its contents. Can you tell it was minified? Then look at `deliberate/package.json` and find the dev and build commands.',
    cards: [
      { id: 'c-web-build-1', front: 'Four things a build does?', back: 'Transforms (JSX, TypeScript), bundles, minifies, fingerprints file names.' },
      { id: 'c-web-build-2', front: 'What is npm?', back: 'Node\'s package manager: installs packages listed in package.json.' },
      { id: 'c-web-build-3', front: 'Dev server vs production build?', back: 'Dev server: fast, on-demand, hot updates. Build: optimised bundles for deployment.' },
    ],
    related: ['web-cdn-cache', 'web-frameworks'],
    sources: [SRC.vite, SRC.tooling, SRC.modules],
  },
  {
    id: 'web-security',
    unit: 'Safety and shipping',
    title: 'Never trust the client',
    summary: 'Anything from the browser can be faked. The backend must check everything, and output must be escaped.',
    ideas: ['The client is not under your control', 'Injection: SQL and XSS', 'Broken access control'],
    body: `
## The client is not under your control

Your frontend code runs on **the user's device**. Anyone can open developer tools, change your JavaScript, or skip the website entirely and send requests with \`curl\`. So:

- **Frontend validation is for convenience**: instant feedback for honest users.
- **Backend validation is for security**: check every input on the server, every time.

If a price, a user ID or an "is admin" flag comes from the browser, assume it can be forged.

## Injection: SQL and XSS

Injection happens when **data is treated as code**. The OWASP Top 10, the best-known list of web security risks, ranks **injection** fifth in its 2025 edition, and it includes both of these:

**SQL injection**: building a query by gluing in user input:

\`\`\`csharp
// DANGEROUS: name = "x' OR '1'='1" returns everyone
var sql = "SELECT * FROM Users WHERE Name = '" + name + "'";
var users = db.Users.FromSqlRaw(sql);

// SAFE: parameters keep data as data
var users = db.Users.FromSql($"SELECT * FROM Users WHERE Name = {name}"); // {name} becomes @p0
var users = db.Users.Where(u => u.Name == name);                          // LINQ: always parameterised
\`\`\`

OWASP's primary defence is exactly this: **parameterised queries**. EF Core's LINQ and \`FromSql\` with an interpolated string both send parameters; \`FromSqlRaw\` with a string you glued together does not.

**Cross-site scripting (XSS)**: putting user input into a page so it runs as script. A comment containing \`<script>…</script>\` would run in every visitor's browser and could act as them. Defences:

- **Escape output**: React does this automatically for text in \`{…}\`, and Razor does for \`@value\`.
- Beware **escape hatches** like React's \`dangerouslySetInnerHTML\` (which OWASP's cheat sheet calls out) or Razor's \`Html.Raw\`; sanitise any HTML you must insert.
- Keep session cookies \`HttpOnly\`, and add a **Content Security Policy** as a second layer.

## Broken access control

OWASP ranks **broken access control** first. It's simply forgetting to check **whether this user may do this to this thing**:

\`\`\`
GET /api/invoices/1043   ← logged in as user 17, but invoice 1043 belongs to user 52
\`\`\`

If the server only checks "is someone logged in?" and not "does this invoice belong to them?", anyone can change the number in the URL and read others' invoices. Check ownership and permissions in **every** handler that touches data.
`,
    takeaways: [
      'Anything from the client can be forged; validate on the server, always.',
      'Prevent SQL injection with parameterised queries and XSS by escaping output.',
      'Broken access control (OWASP\'s #1 risk in 2025): check the user may access each specific item.',
    ],
    quiz: [
      {
        q: 'A checkout page validates that quantity is positive in JavaScript. Is that enough?',
        options: ['Yes', 'No: requests can be sent without the page; the server must validate too', 'Only on mobile', 'Yes, if the code is minified'],
        answer: 1,
        why: 'Client-side checks are for convenience, not security.',
      },
      {
        q: 'What is OWASP\'s primary defence against SQL injection?',
        options: ['Hiding error messages', 'Parameterised queries (prepared statements)', 'Using HTTPS', 'Longer passwords'],
        answer: 1,
        why: 'They keep user data separate from the SQL code.',
      },
      {
        q: 'Changing `/orders/101` to `/orders/102` shows another customer\'s order. What\'s the flaw?',
        options: ['XSS', 'Broken access control: the server doesn\'t check ownership', 'CORS', 'Caching'],
        answer: 1,
        why: 'Every request must check permission for that specific resource.',
      },
    ],
    cards: [
      { id: 'c-web-security-1', front: 'Frontend vs backend validation?', back: 'Frontend: convenience for honest users. Backend: security; always required.' },
      { id: 'c-web-security-2', front: 'Defences against SQL injection and XSS?', back: 'SQL injection: parameterised queries. XSS: escape output, sanitise HTML, HttpOnly cookies, CSP.' },
      { id: 'c-web-security-3', front: 'What is broken access control?', back: 'Failing to check that the user may access that specific resource. OWASP\'s #1 risk (2025).' },
    ],
    related: ['web-session', 'web-routing', 'fg-secrets'],
    sources: [SRC.owaspTop10, SRC.sqlCheat, SRC.xssCheat, SRC.efRawSql],
  },
  {
    id: 'web-deploy',
    unit: 'Safety and shipping',
    title: 'Putting it all together: deploying',
    summary: 'How code on your laptop becomes a site anyone can open, traced end to end with this app.',
    ideas: ['Static deploys vs server deploys', 'Domains and certificates', 'One request, end to end'],
    body: `
## Static deploys vs server deploys

**Deploying** means getting your code running where users can reach it. How depends on what you built:

- **Static sites and SPAs**: run the build and upload the output files to a static host or CDN. Deliberate works this way: on every push to \`main\`, a GitHub Actions workflow installs the packages, runs the checks and \`npm run build\`, and publishes \`dist/\` to GitHub Pages.
- **Apps with a backend**: the server program must run somewhere, always on. For .NET, \`dotnet publish -c Release\` produces the files to deploy (or a container image). Options range from **platforms** that run your code for you (Azure App Service, Azure Container Apps, Google Cloud Run, Render) to **containers** on machines you manage. Plus a hosted **database**, such as Azure SQL Database.

Either way, good practice is **automated**: push to the main branch, CI runs tests and builds, and only a passing build deploys. The Software Engineering subject covers safe deployment strategies and rollbacks.

## Domains and certificates

To use your own name, you buy a **domain** from a registrar and add **DNS records** pointing it at your host: an \`A\` record for an IP address, or a \`CNAME\` pointing to another name, such as your hosting provider's.

Then you need a **TLS certificate** for HTTPS. **Let's Encrypt** is a free, automated certificate authority: software on the server proves it controls the domain, for example by placing a file at a known URL, and receives a certificate browsers trust. Most hosts now do this for you automatically.

## One request, end to end

Here's everything in this subject, in the order it happens when you open Deliberate:

1. **DNS**: \`mangoomeh.github.io\` resolves to a GitHub IP address.
2. **Connect**: a TCP connection to port 443, then a **TLS** handshake with GitHub's certificate.
3. **HTTP**: \`GET /deliberate/\`, answered by a **CDN** cache near you with \`index.html\`.
4. **Parse**: the browser builds the **DOM**, finds the CSS and the module script, and requests them; both have **fingerprinted** names and come with cache headers.
5. **Run**: the JavaScript runtime executes React, which reads your progress from **localStorage** and renders the screen: **client-side rendering**.
6. **Interact**: clicks are handled by the **event loop**; moving between screens changes the URL fragment and the DOM, with **no further requests**.

If Deliberate gained accounts, step 6 would add **fetch** calls to a **backend** listening behind a **reverse proxy**, with a **session cookie** and a **database**.
`,
    takeaways: [
      'Static apps deploy as built files to a host or CDN; backends need an always-running server and a database.',
      'Point a domain at your host with DNS records; get free automated HTTPS certificates from Let\'s Encrypt.',
      'A page load runs DNS, TCP and TLS, HTTP via a CDN, parsing, JavaScript and rendering, then the event loop.',
    ],
    quiz: [
      {
        q: 'What does deploying Deliberate involve?',
        options: ['Starting a database server', 'Building the app and publishing the static `dist/` files to GitHub Pages', 'Copying files to every user', 'Running Node on each phone'],
        answer: 1,
        why: 'It\'s a static SPA; CI builds and publishes it.',
      },
      {
        q: 'Which DNS record points your domain at another hostname, such as your host\'s?',
        options: ['MX', 'CNAME', 'TXT', 'SOA'],
        answer: 1,
        why: 'A CNAME aliases one name to another; an A record points to an IP.',
      },
      {
        q: 'In the end-to-end trace, what happens when you move between screens in Deliberate?',
        options: ['A new page is downloaded each time', 'JavaScript changes the DOM and URL fragment; no request goes to the server', 'The CDN rebuilds the page', 'DNS is looked up again'],
        answer: 1,
        why: 'It\'s a single-page app with everything already loaded.',
      },
    ],
    practice: 'Trace the steps for a site you use that has a login, such as an online shop. Which steps match Deliberate, and which extra ones (backend, database, cookies) does it need?',
    cards: [
      { id: 'c-web-deploy-1', front: 'Static deploy vs server deploy?', back: 'Static: build and upload files to a host or CDN. Server: keep a backend program running, plus a database.' },
      { id: 'c-web-deploy-2', front: 'What does Let\'s Encrypt do?', back: 'Issues free, automated TLS certificates after proving you control the domain.' },
      { id: 'c-web-deploy-3', front: 'A record vs CNAME?', back: 'A: points a name to an IP address. CNAME: points a name to another name.' },
    ],
    related: ['fg-deploy-strategies', 'web-big-picture', 'web-cdn-cache'],
    sources: [SRC.ghPages, SRC.letsEncrypt, SRC.dotnetDeploy],
  },
]
