This replaces a feature that `react-router-dom@6` lost in the upgrade from `history@4` to `history@5`. 

Basically, this restores the ability to have a `window.location.hash` of `#something` instead of `#/something`.

@jtojnar [showed](https://github.com/remix-run/react-router/pull/8450#issuecomment-989594832) that `basename=""` doesn't replicate the old `hashType="noslash"` feature. I asked for the maintainer's suggestion of `basename=""` [as a new feature](https://github.com/remix-run/react-router/issues/8459), and I [implemented it][2]. This was [closed](https://github.com/remix-run/react-router/pull/8460#issuecomment-990415343), so I tried a different implementation.


My third attempt involved two repositories, `history` and `react-router`. I addited the `hashRoot` to replicate the old `hashType` behavior in `history`, and I modified `react-route-dom` to specify `hashRoot=""` when `basename=""`.  The `react-router-dom` pull request was [closed](https://github.com/remix-run/react-router/pull/8463#issuecomment-991021034), but the maintainers haven't yet commented on the `history` pull request. I'm hopeful, since the maintainer's comment [in the original issue](https://github.com/remix-run/react-router/issues/7703#issuecomment-735033961) suggested we try to solve this at `history`.

Until `react-router-dom@6.1`, [PR #911](https://github.com/remix-run/history/pull/911) to `history` would also require changes to `react-router-dom`. But with `react-router-dom@6.1`, the maintainers released a `HistoryRouter` class. When the primary maintainer [expresssed reservations](https://github.com/remix-run/react-router/pull/7586#issuecomment-991703987), the `6.1.1` release reclassified `HistoryRouter` as `unstable_HistoryRouter`. 

Now, this template is able to replcate the lost `hashType="noslash"` [documented](https://v5.reactrouter.com/web/api/HashRouter/hashtype-string) of `react-router@5` in `react-router@6` with some wonky  imports:

```jsx
import { createHashHistory } from "history-noslash"; // Use of this package
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
```

Now, if the maintainers merge [PR #911](https://github.com/remix-run/history/pull/911) of `history` and the eventual `HistorRouter` api matches the current `unstable_HistorRouter` api, this would eventually be possible with the normal imports:

```jsx
import { createHashHistory } from "history";
import { HistoryRouter } from "react-router-dom";
```

[1]:https://github.com/remix-run/react-router/pull/8450
[2]:https://github.com/remix-run/react-router/pull/8460
[3]:https://github.com/remix-run/react-router/pull/8463
