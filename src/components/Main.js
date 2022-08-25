import React from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import Footer from './Footer'
import StdregForm from './StdregForm'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CourseList from './EnrolledCourseList'
import StudentDashboard from "./StudentDashboard";
import AllCourseList from './AllCourseList';
import StudentPayment from './StudentPayment';
import TeacherRegistrationForm from './TeacherRegistrationForm';
import TeacherApply from './TeacherApply';
import RegistrationNumber from './RegistrationNumber';
import CourseDashboard from './CourseDashboard'
import LogNavbar from './student/LogNavbar'
import TeacherDashboard from './TeacherDashboard';
import TstudentList from './TstudentList'
import StudentList from './StudentList'
import StudentDetails from './StudentDetails';
import TeacherProfile from './TeacherProfile'
export default function Main() {
  var islog=localStorage.getItem('_islogged')
  // console.log(islog)
  return (
    <div>
 <BrowserRouter>
                {console.log(islog)}
                <div>{islog ? console.log("HI"):console.log("bye")}</div>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<LoginForm/>}></Route>
                    <Route path="/login" element={<LoginForm/>}></Route>
                    <Route path="/register" element={<StdregForm/>}></Route>
                    <Route path="/all/course" element={<AllCourseList/>}></Route>
                    <Route path="/student/dashboard" element={<StudentDashboard/>}></Route>
                    <Route path="/student/payment/:sid/:csid" element={<StudentPayment/>}></Route>
                    {/* <Route path="/teacher" element={<RegistrationNumber/>}></Route> */}
                    <Route path="/student/register" element={<StdregForm/>}></Route>
                    <Route path="/course/dashboard/:enrid/:csid" element={<CourseDashboard/>}></Route>
                    <Route path="/course/dashboard/:enrid/:csid" element={<CourseDashboard/>}></Route>

                    {/* Teacher */}
                    <Route path="/teacher/create" element={<TeacherRegistrationForm/>}></Route>
                    <Route path="/apply" element={<TeacherApply/>}></Route>
                    <Route path="/teacher/dashboard" element={<TeacherDashboard/>}></Route>
                    <Route path="/showteacher" element={<TstudentList/>}></Route>
                    <Route path="/showstudent/:csdd" element={<StudentList/>}></Route>
                    <Route path="/teacher/myprofile" element={<TeacherProfile/>}></Route>
                    {/* <Route path="/teacher/myprofile" element={<TeacherProfile/>}></Route> */}

                    
                    {/* <Route path="/paragraph" element={<Paragraph/>}></Route>
                    <Route path="/event" element={<EventHandle/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                    <Route path="/create" element={<CreateStudent/>}></Route>
                    <Route path="/list/student" element={<ListStudents/>}></Route>
                    <Route path="/student/details/:id" element={<StudentDetails/>}> </Route> */}
                </Routes>
                
                

                
          
                
               
                
            </BrowserRouter>
            {/* <Footer/> */}
            
    </div>
  )
}
