## History Router Test Template

This template tests the unstable `HistoryRouter` API of [`react-router-dom`](https://github.com/remix-run/react-router/). This is also a tempoary work-around to [issue #912](https://github.com/remix-run/history/issues/912) of [`history`](https://github.com/remix-run/history/). Here is a [live demo on CodeSandbox](https://codesandbox.io/s/hash-router-history-noslash-sxud8?file=/src/index.js).

## Installation and Example

Besides [`react`](https://reactjs.org/) and [`parcel`](https://parceljs.org/),
the main dependencies to install with npm or [`yarn`](https://yarnpkg.com/) are:

```
yarn add history-noslash react-router-dom@6.1.1
```

In `src/app.tsx`, you'll find the core of this template here:

```jsx
import { createHashHistory } from "history-noslash"; // Use of this package
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";

const history = createHashHistory({
  window, hashRoot: ""
})

const App = () => {
  return (
    <HistoryRouter basename="" history={history}>
      <Link to="home">Go to #home</Link>
      <Routes>
        <Route path="home" element={<>content</>} />;
      </Routes>
    </HistoryRouter>
  );
}
```

The `HistoryRouter` allows the use of a custom `HashHistory` to store paths in the url after `#` instead of `#/`.

### Why

This template uses a temporary package called [`history-noslash`](https://github.com/thejohnhoffer/history/tree/publish-noslash#readme) as a replacement for `history` in `react-router-dom@6.1.1`. which exposes [an unstable version](https://github.com/remix-run/react-router/releases/tag/v6.1.1) of a `HistoryRouter` API.

This replaces a feature that `react-router-dom@6` lost in the upgrade from `history@4` to `history@5`. Basically, this restores the ability to have a `window.location.hash` of `#something` instead of `#/something`. First, @tannera [noticed the issue](https://github.com/remix-run/react-router/issues/7703) in Nov 2021. I [described it further](https://github.com/remix-run/react-router/issues/7703), and made three attempts to solve it: [1][1], [2][2], [3][3].

## Contributing

The custom `history-noslash` code lives on [a branch of a fork](https://github.com/thejohnhoffer/history/tree/publish-noslash) of `history@5.1.0`. That fork is the packaged version of [History PR # 911](https://github.com/remix-run/history/pull/911).

Optimistically, the `history-noslash` package is versioned as a pre-release of `history@5.2.0`.

### Parcel

After `yarn install`, run Parcel locally with `yarn start` and build with `yarn build`.

[1]:https://github.com/remix-run/react-router/pull/8450
[2]:https://github.com/remix-run/react-router/pull/8460
[3]:https://github.com/remix-run/react-router/pull/8463
