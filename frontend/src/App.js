import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './screens/UnAuth/Login';
import Home from './screens/Home'
import Redirect from './screens/Redirect'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Login} exact/>
        <Route path='/home' component={Home} exact />
        <Route path='/redirect' component={Redirect} exact />
      </Router>
    </div>
  );
}

export default App;
