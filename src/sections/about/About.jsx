import './about.css'
import cv from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import me2 from '../../assets/me2.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className='container about__container'>
                <div className='about__left'>
                    <div className='about__portrait'>
                        <img src={me2} alt='me2'/>
                    </div>
                </div>
                <div className='about__right'>
                    <h2>About me</h2>
                    <div className='about__cards'>
                        {
                            data.map(item => (
                                <Card key={item.id} className='about__card'>
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Construction projects that my clients like have always been my passion. Working in the web
                        development industry for over 2 years and serving many happy clients around the world, I am
                        always motivated to do more
                    </p>
                    <p>
                        Hi, my name is Marat Aldiyar from Kazakhstan, Almaty. I'm a frontend web developer.. My top
                        priority is to get your business online the right way, giving you industry-standard design
                        and all the functionality you need to operate smoothly online. Get in touch today with the
                        details your project let's get started! Check out my resume below!
                    </p>
                    <a href={cv} download className='btn primary'>Download CV <HiDownload/></a>
                </div>
            </div>
        </section>
    );
};

export default About;