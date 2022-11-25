import './App.css';
import HeaderSection from './components/HeaderSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ProductsSection from './components/ProductsSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import BlogsSection from './components/BlogsSection';
import FooterSection from './components/FooterSection';

function App() {
    return (
        <section className='columnWeb'>
            <HeaderSection />
            <HomeSection />
            <AboutSection />
            <MenuSection />
            <ProductsSection />
            <ReviewSection />
            <ContactSection />
            <BlogsSection />
            <FooterSection />
        </section>
    );
}

export default App;
