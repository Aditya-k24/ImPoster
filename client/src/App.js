import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";

function App() {
  return (
    <><BrowserRouter>
      <Navbar/>
      
      <Switch>
      <Route path = '/register' component={Register} exact/>
      <Route path = '/login' component={Login} exact/>
        <Route path = '/about' component={About} exact/>
        <Route path = '/cart' component={CartScreen} exact/>

        <Route path = '/' component={HomeScreen} exact/>

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
