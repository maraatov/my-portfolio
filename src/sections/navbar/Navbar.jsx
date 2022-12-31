import './navbar.css'
import logo from '../../assets/itkarate.png'
import data from "./data";
import {IoIosColorPalette} from 'react-icons/io'

const Navbar = () => {
    return (
        <nav>
            <div className='container nav__container'>
                <a href='#' className='nav__logo'>
                    <img src={logo} alt='logo'/>
                </a>
                    <ul className='nav__menu'>
                        {
                            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                        }
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;