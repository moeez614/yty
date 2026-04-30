import { useState, lazy, Suspense } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import Gate from './Components/Gate'
const Gate = lazy(() => import('./Components/Gate'))
import Logo from './Layout/Logo'
import Admin from './Pages/Admin'
import DashSide from './Components/DashSide'
import Patient from './Pages/Patient'
const Appointment = lazy(() => import('./Pages/Appointment'))
const Doctor = lazy(() => import('./Pages/Doctor'))
const Register = lazy(() => import('./Components/Register'))
const Drprofile = lazy(() => import('./Pages/Dr_profile'))
const Doctorclaude = lazy(() => import('./Layout/DoctorPortal'))
const Googlemap = lazy(() => import('./Components/Googlemap'))
const Staff = lazy(() => import('./Components/Staff'))
const Disease = lazy(() => import('./Components/Disease'))
const Patientlogin = lazy(() => import('./Layout/Patientlogin'))
const Patientregester = lazy(() => import('./Layout/Patientregester'))
const Myprofile = lazy(() => import('./Pages/Myprofile'))
// loader
import Loader from './Components/Loader'
import PrivateRoute from './Components/PrivateRoute';
import PrivateRoutesPatient from './Components/PrivateRoutesPatient'
import DrMain from './Pages/DrMain'
const DrMain2 = lazy(() => import('./Pages/DrMain2'))
const Medicalreport = lazy(() => import('./Pages/Medicalreport'))
const Schedule = lazy(() => import('./Pages/Schedule'))
const Forat = lazy(() => import('./Pages/Format'))
const Settings = lazy(() => import('./Pages/Settings'))

function App() {

  return (
    <>

      <HashRouter>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <Gate />
            </Suspense>
          }></Route>
          <Route path='/h' element={
            <Suspense fallback={<Loader />}>
              <Doctorclaude />
            </Suspense>
          }></Route>
          <Route path='/googlemap' element={
            <Suspense fallback={<Loader />}>
              <Googlemap />
            </Suspense>
          }> </Route>
          {/* Admin Portal */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<DashSide />}></Route>
            <Route path='appointment' element={
              <Suspense fallback={<Loader />}>
                <Appointment />
              </Suspense>
            }></Route>
            <Route path='staff' element={
              <Suspense fallback={<Loader />}>
                <Staff />
              </ Suspense>
            }></Route>
            <Route path='patients' element={<Disease />}></Route>
          </Route>
          {/* Patient Portal */}
          <Route path='/patientlogin'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Patientlogin />
              </Suspense>
            }></Route>
            {/* patient registration */}
            <Route path='patientregistration' element={
              <Suspense fallback={<Loader />}>
                <Patientregester />
              </Suspense>
            }></Route>
          </Route>
          <Route path='/patient_profile'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <PrivateRoutesPatient>
                  <Patient />
                </PrivateRoutesPatient>
              </Suspense>
            }></Route>
            <Route path='patient' element={<Patient />}></Route>
            <Route path='myprofile' element={
              <Suspense fallback={<Loader />}>
                <PrivateRoutesPatient>
                  <Myprofile />
                </PrivateRoutesPatient>
              </Suspense>
            }></Route>
            <Route path='appointment' element={
              <Suspense fallback={<Loader />}>
                <PrivateRoutesPatient>
                  <Appointment />
                </PrivateRoutesPatient>
              </Suspense>
            }></Route>
          </Route>

          {/* Doctor Portal */}
          <Route path='/doctor_portal'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Doctor />
              </Suspense>
            }></Route>
            <Route path='register' element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }></Route>
            {/* <Route path='okay' element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute>
                  <Drprofile />
                </PrivateRoute>
              </Suspense>
            }></Route> */}
          </Route>
          <Route path='/okay' element={
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <Drprofile />
              </PrivateRoute>
            </Suspense>
          }>
            <Route index element={<DrMain />}></Route>
            <Route path='today_patient' element={<DrMain2 />}></Route>
            <Route path='medical_report' element={<Medicalreport />}></Route>
            <Route path='schedule' element={<Schedule />}></Route>
            <Route path='settings' element={<Settings />}></Route>
          </Route>
            <Route path='/report' element={<Forat />}></Route>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
