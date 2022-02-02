import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import LandingPage from "./components/landing/LandingPage";
import Country from "./components/country/Country";
import Form from './components/form/Form'

export default function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/create' component={Form}/>
      <Route exact path='/country/:id' component={Country}/>
    </>
  );
}