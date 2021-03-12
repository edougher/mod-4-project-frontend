import Navbar from './components/Navbar'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Request from './components/Request'
import RequestForm from './components/RequestForm'
import Appointments from './components/Appointments';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
    <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/appointments" component={Appointments}/>
      <Route exact path="/request" component={Request}/>
      <Route exact path="/requestForm" component={RequestForm}/>
    </div>
    </Router>
  );
}

export default App;
