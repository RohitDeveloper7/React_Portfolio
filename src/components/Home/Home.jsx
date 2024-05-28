import React, { useEffect, useState } from 'react'
import Developer from '../../assets/Developer.png'
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
  const [title , setTitle] = useState('Full Stack Developer')
  const names = ['Coding', 'Programming', 'Learning', 'Full Stack Developer'];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (names.indexOf(title) + 1) % names.length;
      setTitle(names[nextIndex]);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [title, names]);

  return (
    <>
    <div className='home container mt-5 w-100'>
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h4>Hello it's Me</h4>
                <h1>Rohit Maurya</h1>
                <h4>I'm a Developer And passionate</h4>
                <h4>in <span className='text-info'>{title}</span></h4>
                <div className="logo my-3">
                    <span><i className="fa-brands fa-linkedin-in"></i></span>
                    <span><i className="fa-brands fa-instagram mx-3"></i></span>
                    <span><i className="fa-brands fa-facebook mx-2"></i></span>
                    <span><i className="fa-brands fa-github mx-2"></i></span>
                </div>
                <div>
                  <button className="btn btn-success text-light rounded-5 px-5 py-2">Download Resume</button>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img className='img img-fluid' src={Developer} alt="Developer" />
            </div>
        </div>
    </div>
    <div className="container">
        <About/>
    </div>
    <div className="container">
        <Contact/>
    </div>
    </>
  )
}

export default Home