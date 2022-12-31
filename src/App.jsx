import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/sevices/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Skills from "./sections/testimonials/Skills";

const App = () => {
    return (
        <main>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <FloatingNav/>
        </main>
    );
};

export default App;