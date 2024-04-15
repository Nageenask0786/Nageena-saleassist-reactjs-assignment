import { Switch, Route } from "react-router-dom";
import Jewellery from "./components/Jewellery";
import Men from "./components/Men";
import Women from "./components/Women";
import Electronics from "./components/Electronics";
import Bags from "./components/Bags";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Bags} />
      <Route exact path="/jewellery" component={Jewellery} />
      <Route exact path="/men" component={Men} />
      <Route exact path="/women" component={Women} />
      <Route exact path="/electronics" component={Electronics} />
    </Switch>
  </>
);

export default App;
