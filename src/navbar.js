import { Link } from 'react-router-dom';

const  NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tarek ait ahmed</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar ;


// use sfc as a short cut for creating the component function