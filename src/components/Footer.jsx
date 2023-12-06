import React from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5'>
        <div style={{width:"400px"}}>
            <h4> <i class="fa-solid fa-video fa-lg text-warning me-4"></i> Media Player</h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Totam ab voluptates <br /> eum molestiae iste corrupti sed numquam inventore,<br /> consectetur officiis ipsam unde nobis quae asperiores, <br />cum beatae? Aut, voluptatum earum!</h6>
        </div>
        <div>
            <h4>Links</h4>
            <Link to={'./landing'} style={{textDecoration:"none"}} >
            <h6>Landing page</h6>
            </Link>
             <Link to={'./home'}  style={{textDecoration:"none"}}>
             <h6>Home Page</h6>
             </Link>

             <Link to={'./watch'} style={{textDecoration:"none"}}>
             
            <h6>Watch History</h6>
             </Link>
           


        </div>
        <div>
            <h4>Guides</h4>
            <h6>React</h6>
            <h6>React Bootstrap</h6>
            <h6>Boostwatch</h6>


        </div>
        <div>
            <h4>Contact Us</h4>
            <div>
            {/* <Form.Control  type="text" placeholder="Enter your Email" />
            <Button variant="warning">Subscribe</Button> */}
            <input type="text" name='' id='' placeholder='Enter your Email' />
            <button className='btn bg-warning ms-2'>Subscribe</button>
            </div>
            <div className='ms-5 mt-3'>
            <i class="fa-brands fa-facebook fa-xl ms-3"></i>
            <i class="fa-brands fa-instagram fa-xl ms-3"></i>
            <i class="fa-brands fa-linkedin fa-xl ms-3"></i>
            <i class="fa-brands fa-twitter fa-xl ms-3"></i>
            </div>
        </div>

        
    </div>
    <div className='text-center '>
        <p>Copyright &#169; 2023.Media Player built with React</p>

    </div>
    </>
  )
}
