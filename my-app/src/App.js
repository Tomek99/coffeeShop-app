import './App.css';
import { HeaderSection, HomeSection, AboutSection, MenuSection, ProductsSection, ReviewSection, ContactSection, BlogsSection, FooterSection } from './components/index'

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
