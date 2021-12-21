## History Router Test Template

This template tests the [new][6_1_1] `HistoryRouter` API of [`react-router-dom`](https://github.com/remix-run/react-router/). This is also a response to [issue #912](https://github.com/remix-run/history/issues/912) of [`history`](https://github.com/remix-run/history/) and a related issue with [React Router v6](https://reactrouter.com/docs/en/v6). Here is a [live demo on CodeSandbox][sandbox].

## Installation and Example

Besides [`react`](https://reactjs.org/) and [`vite`](https://vitejs.dev/), the main dependencies to install with [`pnpm`](https://pnpm.io/), `npm`, or `yarn` are:

```
pnpm add use-hash-history@1 react-router-dom@6.1.1
```

In `src/app.tsx`, you'll find the core of this template here:

```jsx
import * as React from "react";
import { useHashHistory } from "use-hash-history";
import { Routes, Route, Link } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

const App = ({ hashRoot = "" }) => {
  const history = useHashHistory({ hashRoot });
  return (
    <HistoryRouter history={history}>
      <Link to="/home">Go to #{hashRoot}home</Link>
      <Routes>
        <Route path="home" element={<> here!</>} />;
        <Route path="*" element={<>...</>} />;
      </Routes>
    </HistoryRouter>
  );
};
```

The `HistoryRouter` allows the use of a custom `HashHistory` to store paths in the url after `#` instead of `#/`, [among other possibilities][exampleprops].

# ...Why?

This template uses [a new package called `use-hash-history`][yarn], which is a [`Proxy`][proxy] for `history` in `react-router-dom@6.1.1`. This can be done thanks to [an unstable version][6_1_1] of a `HistoryRouter` API.

This replaces a feature that `react-router-dom@6` lost in the upgrade from `history@4` to `history@5`. Basically, this restores the ability to have a `hash` in the URL of `#something` instead of `#/something`. First, @tannera [noticed the issue](https://github.com/remix-run/react-router/issues/7703) in Nov 2020. In Dec 2021, I [proposed](https://github.com/remix-run/react-router/issues/8459) the reintroduction of the feature, and made three attempts to add it: [1][1], [2][2], [3][3].

Ultimately, I settled on maintaining the use-hash-history as a `Proxy` around `history@5`. It now works with `react-router-dom@6.1.1`, but I plan to maintain this project for longterm compatibility with React Router going forward.

...for [more details][why].

## Contributing

The published copy lives at [use-hash-history](https://github.com/thejohnhoffer/use-hash-history/).
Make any pull request against the main branch.

### Getting started

Please [fork this template](https://github.com/thejohnhoffer/test-history-router/fork), and clone the Repository:

```
git clone git@github.com:thejohnhoffer/test-history-router.git
```

You'll need to [install node](https://heynode.com/tutorial/install-nodejs-locally-nvm/) and a package manager:

- Install with `pnpm install`, run Vite locally with `pnpm demo` and build with `pnpm build`.
- Install with `yarn install`, run Vite locally with `yarn demo` and build with `yarn build`.
- Install with `npm install`, run Vite locally with `npm run demo` and build with `npm run build`.

[1]: https://github.com/remix-run/react-router/pull/8450
[2]: https://github.com/remix-run/react-router/pull/8460
[3]: https://github.com/remix-run/react-router/pull/8463
[exampleprops]: https://github.com/thejohnhoffer/use-hash-history/blob/v1.0.0/demo/exampleProps.ts#L14
[6_1_1]: https://github.com/remix-run/react-router/releases/tag/v6.1.1
[proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#examples
[sandbox]: https://codesandbox.io/s/use-hash-history-esl4q
[yarn]: https://yarnpkg.com/package/use-hash-history
[why]: https://gist.github.com/thejohnhoffer/5cb3798684c815683195847c53cff4ab
