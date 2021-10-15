import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "containers/home"
import { Provider } from "react-redux"
import store from "./store"

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
)

export default AppRouter
