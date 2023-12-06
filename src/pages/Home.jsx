import { Link } from 'react-router-dom';
import Add from '../components/Add';
import Category from '../components/Category';

function Home() {
    return (
        <div >
            <div className='container d-flex justify-content-between align-items-center my-5'>
                <div className='add-videos'>
                <Add/>
                    
                </div>
                <div>
                    <Link to={'/watch'} style={{textDecoration:"none", color:"white",fontSize:"25px"}}>
                        Watch History
                    </Link>
                </div>
            </div>
            <div className='container d-flex justify-content-between align-items-center my-5'>
              
                <h4>All Videos</h4>
            </div>
            <div>
                <Category/>
            </div>

        </div>
    )
}
export default Home;