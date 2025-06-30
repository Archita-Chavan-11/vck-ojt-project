// import {Link} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className='header1'>
            <header>
                <nav>
                    <a className='navbar'>Vivekanand College</a>
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"} className='nav'>About</Link>
                    <Link to={"/contact"} className='nav'>ContactUs</Link>
                    <Link to={"/courses"} className='nav'>Courses</Link>
                    <Link to={"/admission"} className='navitem'>Apply Now!</Link>
                   
                </nav>
            </header>
        </div>
    )
}

export default Header;