import { Route, Switch } from "react-router-dom";
import CreateProducts from "./views/create-product";
function App() {
  return (
    <Switch>
      <Route path="/create-products">
        <CreateProducts />
      </Route>
      <Route path="/">
        <div>Hello home</div>
      </Route>
    </Switch>
  );
}

export default App;
