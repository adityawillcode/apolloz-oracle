
import { Link ,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Auth/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';


function App() {
 
  return (
  <Router>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/auth' element={<Auth/>} />
  <Route path='/admin/dashboard' element={<AdminDashboard/>} />
</Routes>
  </Router>
  );
}

export default App;
