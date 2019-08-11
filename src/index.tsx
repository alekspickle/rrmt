import * as React from "react";
import { render } from "react-dom";

import { Store } from "~/store";
import { StoreContext } from "~/components/context";
import { TodoList } from "~/components";

import "./index.css";

function App() {
  const store = new Store();

  return (
    <StoreContext.Provider value={store}>
      <div>Initialized</div>
      <TodoList />
    </StoreContext.Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
