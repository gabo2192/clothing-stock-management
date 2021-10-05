import { Route, Switch } from "react-router-dom";
import Categories from "./views/categories";
import CreateProducts from "./views/create-product";
import Subcategories from "./views/subcategories";
function App() {
  return (
    <Switch>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/subcategories">
        <Subcategories />
      </Route>
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
