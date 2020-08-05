# Notes about the test project

Deployed application: **[DEMO](https://frontend-test-2020-08-03.herokuapp.com/)**

## Setup, production and development

To install: `npm i` or `yarn`

Create a `.env` file in the root with Yelp's API credentials:

```
ClientID=YOUR_ID
APIKey=YOUR_KEY
```

To run the tests: `npm test` or `yarn test`

To run the production server locally: `npm start` or `yarn start` and open the browser at **[localhost:8080](http://localhost:8080)**

To run the dev server with hot reload: `npm dev` or `yarn dev`. A browser tab should open at **[localhost:3000](http://localhost:3000)**

## Design

The app has a server and a client:

### Server

All the server code is in `/server`. It does 2 things:

- It proxies the **[Yelp's API](https://www.yelp.com/developers/documentation/v3)** at `/api`. The entire Yelp's API is accesible from that route by simply adding Yelp's endpoints. For example: **[Try API](https://frontend-test-2020-08-03.herokuapp.com/api/businesses/QXV3L_QFGj8r6nWX2kS2hA)**

- Any other route `*` serves a `index.html` file that loads the css and js: the client alone manages the routing.

### Client

The client is based on **React** and has the following features:

- **Routing** There are only 3 routes: the home page (list of restaurants), the detail page (details of a restaurant) and a "Not found" page for any other route. See: [Router.js](/src/components/Router.js)

- **Global store** Redux is used to store or manipulate the data from Yelp and persist the filters during the navigation. See: [store.js](/src/redux/store.js)

- **Data fetching** A single `useFetch` hook is used to fetch data with Axios, but several hooks rely on it for each relevant enpoint: `useYelpSearch`, `useYelpReviews`, `useYelpDetails`. See: [hooks](/src/hooks). Example of usage:

```
const { state, error, data } = useYelpSearch(apiParams)

// When `apiParams` change, new data gets fetched from Yelp (or from the cache)
```

- **Styles** All styles are coded in SASS. I used:

  - Variables (`vars.sass`) defines colors, sizes and breakpoints.

  - A simple reset (`reset.sass`) defines cross-browser defaults.

  - Globals (`global.sass`) sets up body and html.

  - The [components](/src/styles/components) folder mirrors the React components.

  - The code is "mobile first" (media queries use `min-width`) and the app looks ok on small screens, but for the purpose of this test I focused on desktop.

- **Filters** There are two types of filters stored with Redux: client and server filters (referred as `apiParams` in the code). This is how they work:

  - When user interacts with the UI, the filter parameters get saved in the store.

  - In the case of "client" filters, a render gets triggered immediately via props passed to the `Results` component.

  - In the case of "server" filters (api parameters), new data gets fetched or taken from the cache.

  - Then the new data gets saved in the store (based on category and offset).

  - The update in the store triggers a new render. See: [List.js](/src/components/List.js)

- **Automated testing** I included unit tests for the following:
  - Reducers: all reducers have unit tests that emulate changes in the filters and data.
  - React components and hooks: the most important components are fully rendered with mock data and filters, also asynchronously (useEffect updates).
  - Jest and Testing Library were used.

## Optimisations

- **Basic caching** No url is fetched twice, unless the page is reloaded. See: [useFetch](/src/hooks/useFetch.js)
- **Categories cache** Data fetched from Yelp is stored in different categories so we never need to request the same data twice.
- **Static categories** While Yelp offers a `categories` endpoint that returns a massive json, I use a much smaller, static json file that only includes restaurants data.

## Possible improvements

- **Persist filters** It would be better to store parts of the Redux store in sessionStorage or localStorage for a better user experience.

- **Code splitting** This app is small but in the real world we need splitting.

- **Selectors** The client filters for this test app are trivial so they can be easily performed inside any React component, but for more complex filters it would be better to create new selectors.

- **E2E + Integration tests** In the real world - and with more complex filters or interactions - we would want to have E2E and more integration tests to mimic user actions on the filters and the UI.

- **Mobile** The app is usable on mobile but it needs some work to actually look and feel like the [design](https://www.figma.com/file/4MqQhKPsnKetTud9tm6kDY/Superformula-FE-test-264388d?node-id=0%3A1).

- **A back button!** There is no way to go back in the design. Adding navigation UI (breadcrumbs or simply a back link) would be good!
