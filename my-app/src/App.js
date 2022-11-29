import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import MenuSection from './components/MenuSection/MenuSection';
import ProductsSection from './components/ProductsSection/ProductsSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import ContactSection from './components/ContactSection/ContactSection';
import BlogsSection from './components/BlogsSection/BlogsSection';
import FooterSection from './components/FooterSection/FooterSection';

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
