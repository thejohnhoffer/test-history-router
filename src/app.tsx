import { createHashHistory } from "history-noslash";
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

export default App
