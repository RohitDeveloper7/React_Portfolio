import React from 'react'

const My_Project = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12 mb-5">
                    <h1 className='text-center'>My <span className='text-info'>Projects</span></h1>
            </div>
            <div className="col-4">
                <div className="card" style={{'width': '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card" style={{'width': '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card" style={{'width': '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default My_Project