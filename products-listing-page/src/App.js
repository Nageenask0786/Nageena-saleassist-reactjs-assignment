import { BrowserRouter,Switch,Route } from "react-router-dom/cjs/react-router-dom.min"

import Header from "./components/Header"

const App = () => <BrowserRouter>
<Switch>
<Header />
</Switch>
</BrowserRouter>

export default App