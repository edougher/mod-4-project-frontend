import Navbar from './components/Navbar'
import Home from './components/Home'
import SignIn from './components/SignIn'
//import Requests from './components/Requests'
import Appointments from './components/Appointments';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/appointments" component={Appointments}/>
    </div>
    </Router>
  );
}

export default App;
