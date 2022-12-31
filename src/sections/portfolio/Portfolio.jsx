import './portfolio.css'
import todolist from '../../assets/todolist.png'
import talapty from '../../assets/talapty.png'
import tailwind from '../../assets/tailwind.jpg'
import heroes from '../../assets/heroes.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item__image'>
                        <img src={todolist} className='img_radius'/>
                    </div>
                    <div className='window__title'>
                        <h3>Todolist on React</h3>
                    </div>
                    <div className='test'>
                    <a href='https://github.com/maraatov/todolist' className='btn'>GitHub</a>
                    <a href='https://maraatov.github.io/todolist/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item__image'>
                        <img src={tailwind} className='img_radius_tailwind'/>
                    </div>
                    <div className='window__title'>
                        <h3>Page on Tailwind CSS</h3>
                    </div>
                    <div className='test'>
                        <a href='https://github.com/maraatov/tailwind' className='btn'>GitHub</a>
                        <a href='https://maraatov.github.io/tailwind/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item__image'>
                        <img src={talapty} className='img_radius_talapty'/>
                    </div>
                    <div className='window__title2'>
                        <h3>Talapty Website</h3>
                    </div>
                    <div className='test'>
                        <a href='https://github.com/hj-abzal/ayul-go' className='btn'>GitHub</a>
                        <a href='https://talapty.auyl.online/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item__image'>
                        <img src={heroes} className='img_radius_talapty'/>
                    </div>
                    <div className='window__title2'>
                        <h3>Game heroes on redux</h3>
                    </div>
                    <div className='test'>
                        <a href='https://github.com/maraatov/redux-app' className='btn'>GitHub</a>
                        <a href='https://maraatov.github.io/redux-heroes' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;