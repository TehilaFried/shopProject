import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import AllProducts from './components/allProducts'
import Payment from './components/payment'
import Navbar from './components/navbar'
import {BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';
import Information from './components/about/information';
import FinalPayment from './components/finalPayment';
// import bootstrap from 'bootstrap';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <Information /> */}
      <Router>
          <Navbar/>
          <Switch>
          <Route path='/products'>
          <AllProducts/>
          </Route>
          <Route path='/basket'>
          <Payment/>
          </Route>
          <Route path='/finalPayment'>
          <FinalPayment/>
          </Route>
          <Route path='/'>
          <AllProducts/>
          </Route>
          </Switch>
        </Router>
      
      
      </Provider>
    
    
    </div>
  );
}

export default App;
