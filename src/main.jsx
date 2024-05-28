import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import My_Project from './components/My-Project/My_Project'
import My_Service from './components/My-Service/My_Service'
import Prof_Skill from './components/Prof-Skills/Prof_Skill'
import Skill from './components/Skills/Skill'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github'

// there are two methods to do routing 
//1) createBrowserRouter is method it contain array object

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
            {
              path: "",//in path '/' we display home comopnent
              element: <Home />
            },
            {
              path: "about",
              element: <About />
            },
            {
              path: "contact",
              element: <Contact />
            },
            {
              path: "my-project",
              element: <My_Project />
            },
            {
              path: "my-service",
              element: <My_Service />
            },
            {
              path: "prof-skills",
              element: <Prof_Skill/>
            },
            {
              path: "skills",
              element: <Skill/>
            },
            {
              path: "my-service",
              element: <My_Service />
            }
    ]
  }
])

// 2)
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='my_project' element={<My_Project/>}/>
//       <Route path='my_service' element={<My_Service/>}/>
//       <Route path='user/:userid' element={<User/>}/>
//       <Route
//         path='github'
//         loader={(githubInfoLoader)}
//         element={<Github/>}
//       />
//     </Route>
//   )
// )

//loader when you want fetch the data using the api we can make direct api call from here ex:when hover the cursor the github button then it start the fetching data from api and it take the data in cache
//inside the loader also we can write our api calls 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* routerprovider is a component it take a props router this-> router = createBrowserRouter from react-router-dom  */}
    {/* routerprovideris like a wrapper we role everthing in routerprov they want only props router */}
  </React.StrictMode>,
)
