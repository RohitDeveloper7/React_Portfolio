import React from 'react'
import Developer from '../../assets/Developer.png'
const About = () => {
  return (
    <div className='about container'>
        <div className="row">
            <div className="col-6">
                <img className='img img-fluid shadow-lg p-3 mb-5 bg-body-tertiary rounded' src={Developer} alt="" />
            </div>
            <div className="col-6">
                <div className="header">
                    <h1>About <span className='text-info'>Me</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, expedita facere! Perspiciatis laboriosam voluptates nobis tempora, unde dicta, cupiditate necessitatibus magnam explicabo earum, ex tenetur? Quam voluptatum aspernatur repellat fuga possimus molestiae voluptatibus exercitationem aperiam aut iure! Officiis voluptatum distinctio quidem beatae dolore fuga maiores, voluptas ducimus exercitationem tempore ex, minima vel quae. Facilis delectus consectetur velit, soluta autem inventore quae porro illo ipsum quam, sunt quod animi asperiores quas minus? Dicta obcaecati aperiam sint, nisi error illo voluptate sed sunt! Nihil quidem, corporis dolor velit, quae voluptatum optio tenetur, nulla molestiae quisquam nobis.</p>
                </div>
                <div className="button">
                    <button className='btn btn-success px-5 py-2 rounded-5'>Download Resume</button>
                </div>  
            </div>
            
        </div>
    </div>
  )
}

export default About