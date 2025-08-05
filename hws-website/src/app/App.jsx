import { useState, useEffect } from 'react'
import './Global.css'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { } from "react-router-dom";

// App structure and components
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lessons">
            <Route index element={<LessonsInfo />} />
            <Route path="lesson-registration" element={<LessonRegistration />} />
            <Route path="join-our-mailing-list" element={<JoinMailingList />} />
          </Route>
          <Route path="club-info">
            <Route index element={<BecomeAnInstructor />} />
            <Route path="diversity-and-inclusion" element={<DiversityAndInclusion />} />
          </Route>
          <Route path="questions">
            <Route index element={<FAQ />} />
            <Route path="contact-us" element={<ContactUs />} /> 
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
