import React from 'react'

const Skill = () => {
  return (
    <div className='skills container mt-4'>
        <div className="header">
            <h1 className='text-center'>My <span className='text-info'>Skills</span></h1>
        </div>
        <div className="row">
            <div className="col-6 mb-4">
                <h4 className='text-center'><u>Technical Skills</u></h4>
            </div>
            <div className="row">
                <div className="html">
                    <span><i class="fa-brands fa-html5"></i></span>
                    <h6>HTML</h6>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': '50%'}}>
                        <div className="progress-bar bg-info" style={{'width': '90%'}}>50%</div>
                    </div>
                </div>
                <div className="CSS">
                <span><i class="fa-brands fa-css3-alt"></i></span>
                    <h6>CSS</h6>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': '50%'}}>
                        <div className="progress-bar bg-info" style={{'width': '85%'}}>50%</div>
                    </div>
                </div>
                <div className="python">
                <span><i class="fa-brands fa-python"></i></span>
                    <h6>PYTHON</h6>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': '50%'}}>
                        <div className="progress-bar bg-info" style={{'width': '70%'}}>50%</div>
                    </div>
                </div>
                <div className="java">
                <span><i class="fa-brands fa-java"></i></span>
                    <h6>JAVA</h6>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': '50%'}}>
                        <div className="progress-bar bg-info" style={{'width': '50%'}}>50%</div>
                    </div>
                </div>
                <div className="c">
                <span><i class="fa-solid fa-c"></i></span>
                    <h6>C/C++</h6>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width': '50%'}}>
                        <div className="progress-bar bg-info" style={{'width': '50%'}}>50%</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}   

export default Skill