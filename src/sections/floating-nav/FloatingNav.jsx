import './floating-nav.css'
import data from "./data";

const FloatingNav = () => {
    return (
            <section id='floating__nav'>
                <div className='floating_nav'>
                    {
                        data.map(item => <li key={item.id}><a href={item.link}><p className='item_nav'>{item.title}</p></a></li>)
                    }
                </div>
            </section>
    );
};

export default FloatingNav;