
import { Link ,BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { useEffect,useState } from "react"
import Auth from './Components/Auth/Auth';
import Home from './Components/Auth/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import CreateQuiz from './Components/Admin/CreateQuiz';
import PageNotFound from './Components/Auth/PageNotFound'
import StudentDashboard from './Components/Student/StudentDashboard';
import ChooseUserRole from './Components/Auth/ChooseUserRole';
import QuizPage from './Components/Student/QuizPage';


function App() {
const [loginData,setLoginData]=useState({})
const getLoginData =async () => {
  const result=await fetch('http://localhost:4000/getData',{credentials:'include'})
  const response=await result.json()
 setLoginData(response)

}
useEffect(()=>{
  getLoginData()
},[])




const protectDashboard = (element) => {

  if(!loginData.name){
    return <Navigate to={'/auth'}/>
  }
  else if(!loginData.userRole){
    return <Navigate to={'/select-role'}/>
  }
 else if(loginData.userRole=='STUDENT' && element==<AdminDashboard/>  || loginData.userRole=='ADMIN' && element==<StudentDashboard/> || loginData.userRole=='STUDENT' && element==<CreateQuiz /> || loginData.userRole && element==<ChooseUserRole/>  ) {
           return <Navigate to={'/page-not-found'} />
     }

     return element


};

  return (
  <Router>
<Routes>
  <Route path='/' element={protectDashboard(<Home loginData={loginData} />)}/>
  <Route path='/auth' element={(<Auth loginData={loginData}/>)} />
  <Route path='/select-role' element={(<ChooseUserRole setLoginData={setLoginData}/>)} />
  <Route path='/admin/dashboard' element={protectDashboard(<AdminDashboard loginData={loginData}/>)} />
  <Route path='/student/dashboard' element={protectDashboard(<StudentDashboard/>)} />
  <Route path='/admin/dashboard/create-quiz' element={protectDashboard(<CreateQuiz/>)} />
  <Route path='/page-not-found' element={<PageNotFound />} />
  <Route path='/student/quiz/:quizId' element={<QuizPage />}/>
</Routes>
  </Router>
  );
}

export default App;
