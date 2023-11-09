
import { Link ,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Auth/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import CreateQuiz from './Components/Admin/CreateQuiz';
import StudentDashboard from './Components/Student/StudentDashboard';


function App() {
 
  return (
  <Router>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/auth' element={<Auth/>} />
  <Route path='/admin/dashboard' element={<AdminDashboard/>} />
  <Route path='/student/dashboard' element={<StudentDashboard/>} />
  <Route path='/admin/dashboard/create-quiz' element={<CreateQuiz/>} />
</Routes>
  </Router>
  );
}

export default App;
