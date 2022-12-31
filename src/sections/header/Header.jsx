import './header.css'
import me from '../../assets/me.jpg'
import data from "./data";

const Header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile'>
                    <img src={me} alt='me'/>
                </div>
                <h3>Marat Aldiyar</h3>
                <p>
                    Most good programmers do their job not because they expect payment or recognition, but because they enjoy programming.
                </p>
                <div className='header__cta'>
                    <a href='#contact' className='btn primary'>Let`s Talk</a>
                    <a href='#portfolio' className='btn light'>My Work</a>
                </div>
                <div className='header__socials'>
                    {
                        data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;