import './skills.css'
import {FaReact} from 'react-icons/fa'
import {ImHtmlFive2} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {SiRedux} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import {FaGit} from 'react-icons/fa'
import {DiSass} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillApi} from 'react-icons/ai'
import {GrTest} from 'react-icons/gr'



const Skills = () => {
    return (
        <section id='skills'>
            <h2 id='hs'>Skills</h2>
            <div className='container container__skills'>
                <div className='skills'>
                    <div className='main__skills'>
                        <ImHtmlFive2 className='skills-icon'/>
                        <h3>HTML</h3>
                    </div>
                </div>
                <div className='skills'>
                    <div className='main__skills'>
                        <IoLogoCss3 className='skills-icon'/>
                        <h3>CSS</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <IoLogoJavascript className='skills-icon'/>
                        <h3>Java Script</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <FaReact className='skills-icon'/>
                        <h3>React</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <SiRedux className='skills-icon'/>
                        <h3>Redux</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <SiTypescript className='skills-icon'/>
                        <h3>TypeScript</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <FaNode className='skills-icon'/>
                        <h3>Node js</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <FaGit className='skills-icon'/>
                        <h3>Git</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <DiSass className='skills-icon'/>
                        <h3>Sass</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <SiTailwindcss className='skills-icon'/>
                        <h3>Tailwind</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <AiFillApi className='skills-icon'/>
                        <h3>Rest API</h3>
                    </div>
                </div>

                <div className='skills'>
                    <div className='main__skills'>
                        <GrTest className='skills-icon'/>
                        <h3>Unit Test</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;