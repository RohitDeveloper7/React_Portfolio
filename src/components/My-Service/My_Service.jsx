import React from 'react'

const My_Service = () => {
  return (
    <div>
         <div className='container mt-5'>
        <div className="row">
            <div className="col-12 mb-5">
                    <h1 className='text-center'>My <span className='text-info'>Services</span></h1>
            </div>
            <div className="col-4">
                <div className="border border-5 border-info rounded" style={{'width': '18rem'}}>
                      <div className="card-body p-4">
                      <span><i class="fa-brands fa-css3-alt"></i></span>
                        <h6>CSS</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="border border-5 border-info rounded" style={{'width': '18rem'}}>
                    <div className="card-body p-4">
                    <span><i class="fa-brands fa-css3-alt"></i></span>
                    <h6>CSS</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="border border-5 border-info rounded" style={{'width': '18rem'}}>
                    <div className="card-body p-4">
                    <span><i class="fa-brands fa-css3-alt"></i></span>
                    <h6>CSS</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default My_Service