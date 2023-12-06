import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <div className='container mb-5 mt-4'>
            <Row className='d-flex align-items-center justify-content-evenly'>
                <Col>
                    <h3>Welcome To  <span style={{ color: 'orange' }}>Media player</span></h3>
                    <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Labore a ab obcaecati, molestias ratione,
                        ipsum dolore
                        similique, quisquam sunt odit expedita totam
                        fuga fugiat qui? Sunt laboriosam tempora quos adipisci?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eos magni, repellendus quisquam eius nulla velit tempora
                        quasi illo hic aliquid distinctio sed.
                        Explicabo omnis laudantium ipsam eligendi, neque repellat cupiditate!</p>

                    <Link to={'/home'}>
                        <button className='btn bg-warning mt-5'>Get started<i class="fa-solid fa-arrow-right ms-2"></i></button>
                    </Link>



                </Col>
                <Col  >
                    <img className='ms-5 ' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{ height: "400px" }} />
                </Col>
            </Row>
            <div className='container'>
                <h3>Features</h3>
                <div className='d-flex align-items-center justify-content-evenly mt-5 mb-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>

            </div>
            <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5">
                <Row className='d-flex align-items-center justify-content-evenly'>
                    <div className='col-md-6'>
                        <h3 className='text-warning'>Simple and Powerful</h3>
                        <p style={{ color: "white" }}><span className='fw-bolder fs-5'>Play Everything:</span><span>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Ea optio fugiat qui a molestias modi, ullam
                            doloremque non eligen temporibus dolores, vitae laboriosam,
                            sed. Deserunt et voluptate laboriosam quis?</span></p>
                        <p style={{ color: "white" }}><span className='fw-bolder fs-5'>Play Everything:</span><span>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Ea optio fugiat qui a molestias modi, ullam
                            doloremque non eligen temporibus dolores, vitae laboriosam,
                            sed. Deserunt et voluptate laboriosam quis?</span></p>
                        <p style={{ color: "white" }}><span className='fw-bolder fs-5'>Play Everything:</span><span>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Ea optio fugiat qui a molestias modi, ullam
                            doloremque non eligen temporibus dolores, vitae laboriosam,
                            sed. Deserunt et voluptate laboriosam quis?</span></p>


                    </div>
                    <div className='col-md-6'>
                       
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/VAdGW7QDJiU" title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </Row>
            </div>

        </div>
    )
}
export default Landing;