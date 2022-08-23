import React from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import Footer from './Footer'
import StdregForm from './StdregForm'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CourseList from './EnrolledCourseList'
import StudentDashboard from "./StudentDashboard";
import AllCourseList from './AllCourseList';
import StudentPayment from './StudentPayment'
import TeacherRegistrationForm from './TeacherRegistrationForm'
import TeacherApply from './TeacherApply'
export default function Main() {
  return (
    <div>
 <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<LoginForm/>}></Route>
                    <Route path="/login" element={<LoginForm/>}></Route>
                    <Route path="/register" element={<StdregForm/>}></Route>
                    <Route path="/all/course" element={<AllCourseList/>}></Route>
                    <Route path="/student/dashboard" element={<StudentDashboard/>}></Route>
                    <Route path="/student/payment/:sid/:csid" element={<StudentPayment/>}></Route>
                    {/* <Route path="/paragraph" element={<Paragraph/>}></Route>
                    <Route path="/event" element={<EventHandle/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                    <Route path="/create" element={<CreateStudent/>}></Route>
                    <Route path="/list/student" element={<ListStudents/>}></Route>
                    <Route path="/student/details/:id" element={<StudentDetails/>}> </Route> */}
                </Routes>
                <Routes>
                  
                  <Route path="/registration" element={<TeacherRegistrationForm/>}></Route>
                  <Route path="/apply" element={<TeacherApply/>}></Route>
                </Routes>
            </BrowserRouter>
            {/* <Footer/> */}
    </div>
  )
}
