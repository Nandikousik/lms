import Header from './Header';
import Home from './Home';
import Footer from './Footer';

//Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourses from './Teacher/AddCourses';
import UserList from './Teacher/UserList';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherDetail from "./TeacherDetail";

//user
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
import About from './About';
import CourseDetail from "./CourseDetail";

//List Pages
import AllCourses  from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';

import { Routes as Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />


        //Teacher
        <Route path="/teacher-login" element={<TeacherLogin/>} />
        <Route path="/teacher-register" element= {<TeacherRegister/>} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
         <Route path="/teacher-courses" element={<TeacherCourses/>} />
        <Route path="/add-courses" element={<AddCourses/>} />
        <Route path="/teacher-users" element={<UserList/>} />
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>} />
        <Route path="/teacher-change-password" element={<TeacherChangePassword/>} /> 
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail/>} />

      //User
        <Route path="/user-login" element={<Login/>} />
        <Route path="/user-register" element= {<Register/>} />
        <Route path="/user-dashboard" element={<Dashboard/>} />
        <Route path="/my-courses" element={<MyCourses/>} />
        <Route path="/favorite-courses" element={<FavoriteCourses/>} />
        <Route path="/recommended-courses" element={<RecommendedCourses/>} />
        <Route path="/profile-setting" element={<ProfileSetting/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
        <Route path="/detail/:course_id" element={<CourseDetail/>} />

        <Route path="/all-courses" element={<AllCourses/>} />
        <Route path="/popular-courses" element={<PopularCourses/>} />
        <Route path="/popular-teachers" element={<PopularTeachers/>} />

      </Switch>
      <Footer />
    </div>
  );
}

export default Main;