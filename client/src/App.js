import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import LandingPage from "./components/landing/LandingPage";
import Country from "./components/country/Country";
import Form from './components/form/Form';
import Err from "./components/error404/Err";

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/create' component={Form}/>
      <Route exact path='/country/:id' component={Country}/>
      <Route path='*' component={Err} />
    </Switch>
  );
}