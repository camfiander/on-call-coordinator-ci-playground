import { createContext } from 'react';

import SchoolSchedule from './page/schoolSchedule';
import Board from './page/Board';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/Homepage';
import Lost from './page/404';
import { useAuth } from './Helper/Auth';
import AbsenceSchedule from './page/AbsenceSchedule';
import Login from './page/loginPage';
import UploadClasses from './page/UploadClasses/UploadClasses';
import { TeacherProfile } from './page/TeacherProfile/TeacherProfile';
import TeacherDashboard from './page/teacherDashboard';
import AdminDashboard from './page/adminDashboard';
import PrincipalDashboard from './page/principalDashboard'
function App() {
  const [user, loading] = useAuth(() => { if (document.URL.split('/').pop() != 'loginPage') window.location.href = '/loginPage' });

  if (loading) {
    return <div>...</div>
  }
  return (
    <UserContext.Provider value={user}>
      <div>
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/importAbsences' element={<AbsenceSchedule />} />
              <Route path='/teacherAbsences' element={<AbsenceSchedule />} />
              <Route path='/importAbsences' element={<AbsenceSchedule />} />
              <Route path='/uploadClasses' element={<UploadClasses />} />
              <Route path='/addTeacher' element={<TeacherProfile />} />
              <Route path='/schoolSchedule' element={<SchoolSchedule />} />
              <Route path='/board' element={<Board />} />

              <Route path='/loginPage' element={<Login />} />
              <Route path='/teacherDashboard' element={<TeacherDashboard user={user}/>}></Route>
              <Route path='/adminDashboard' element={<AdminDashboard user={user}/>}></Route>
              <Route path='/principalDashboard' element={<PrincipalDashboard user={user}/>}></Route>
              <Route path='*' element={<Lost />} />
            </Routes>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  )

}

export default App;
export const UserContext = createContext('');