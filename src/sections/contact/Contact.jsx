import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h2 id='h2'>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4 id='h'>Email</h4>
                        <h5 id='h'>aldiyar0609@gmail.com</h5>
                        <a href='mailto:aldiyar0609@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaTelegramPlane className='contact__option-icon'/>
                        <h4 id='h'>Telegram</h4>
                        <h5 id='h'>maraatovrep</h5>
                        <a href='https://t.me/maraatovrep' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4 id='h'>Whatsapp</h4>
                        <h5 id='h'>+7 707 415 2004</h5>
                        <a href='https://api.whatsapp.com/send?phone=87074152004' target='_blank'>Send a message</a>
                    </article>
                </div>
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                        <button type='submit' className='send'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;