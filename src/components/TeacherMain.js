import React from 'react'
import TeacherNav from './TeacherNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherRegistrationForm from './TeacherRegistrationForm';
import TeacherApply from './TeacherApply';

export default function TeacherMain(){
  return (
    <div>
        <BrowserRouter>
        <TeacherNav/>
        <Routes>
        <Routes>       
                <Route path="/teacher/create" element={<TeacherRegistrationForm/>}></Route>
                <Route path="/apply" element={<TeacherApply/>}></Route>
              </Routes>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
