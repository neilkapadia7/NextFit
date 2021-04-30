import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './screens/UnAuth/Login';
import Home from './screens/Home'
import querystring from 'querystring';

function App() {

  const redirectURL = 'http://localhost:3000/home';
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const options = {
      redirect_uri: redirectURL,
      client_id: process.env.REACT_APP_GOOGLE_CLIENT,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/fitness.activity.read',
      'https://www.googleapis.com/auth/fitness.activity.write',
      'https://www.googleapis.com/auth/fitness.blood_pressure.read',
      'https://www.googleapis.com/auth/fitness.heart_rate.read'
     ].join(" ")
  };

  return (
    <div className="App">
      <Router>
        <Route path='/' component={Login} exact/>
        <Route path='/login' exact component={() => {
            window.location.href = `${rootUrl}?${querystring.stringify(options)}`; 
            return null; 
          }}/>
        <Route path='/home' component={Home} exact />
      </Router>
    </div>
  );
}

export default App;
