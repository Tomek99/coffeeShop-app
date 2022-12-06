import './App.css';
import React, { useEffect, useState } from 'react'
import { HeaderSection, HomeSection, AboutSection, MenuSection, ProductsSection, ReviewSection, ContactSection, BlogsSection, FooterSection } from './components/index'


function App() {
    // const [backendData, setBackendData] = useState([{}]);
    const [basketItems, setBasketItem] = useState([]);

    const addItem = (item) => {
        setBasketItem([...basketItems, item])
    }

    const deleteItem = (id) => {
        const newArray = basketItems.filter(item => item.id !== id);
        setBasketItem(newArray)
    }
    // console.log(basketItems);
    // useEffect(() => {
    //     fetch("http://localhost:5000/api")
    //         .then((response) => response.json())
    //         .then((data) => setBackendData(data));

    // }, [])

    return (
        (<section className='columnWeb'>
            <HeaderSection basketItems={basketItems} deleteItem={deleteItem} />
            <HomeSection />
            <AboutSection />
            <MenuSection addItem={addItem} />
            <ProductsSection addItem={addItem} />
            <ReviewSection />
            <ContactSection />
            <BlogsSection />
            <FooterSection />
        </section>)
    );
}

export default App;
