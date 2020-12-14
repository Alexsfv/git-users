
import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import MainPage from './Pages/MainPage/MainPage';
import UserPage from './Pages/UserPage/UserPage';
 
function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path="/userPage/:userLogin" component={UserPage}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
