import './App.css';
import React, { useEffect, useState } from 'react'
import { HeaderSection, HomeSection, AboutSection, MenuSection, ProductsSection, ReviewSection, ContactSection, BlogsSection, FooterSection } from './components/index'


function App() {
    // const [backendData, setBackendData] = useState([{}]);
    const [basketItems, setBasketItem] = useState([]);
    const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 })


    const addItem = (item) => {
        setBasketItem([...basketItems, item])

        setBasketPrice(prevPrice => ({
            ...prevPrice,
            currentPrice: Math.round((prevPrice.currentPrice + item.newPrice) * 100) / 100,
            save: Math.round((prevPrice.save + (item.oldPrice - item.newPrice)) * 100) / 100

        }))

        console.log(basketPrice.currentPrice)


    }

    const deleteItem = (id, newPrice, oldPrice) => {
        const newArray = basketItems.filter(item => item.id !== id);
        setBasketItem(newArray)

        setBasketPrice(prevPrice => ({
            ...prevPrice,
            currentPrice: Math.round((prevPrice.currentPrice - newPrice) * 100) / 100,
            save: Math.round((prevPrice.save - (oldPrice - newPrice)) * 100) / 100
        }))

    }
    // console.log(basketItems);
    // useEffect(() => {
    //     fetch("http://localhost:5000/api")
    //         .then((response) => response.json())
    //         .then((data) => setBackendData(data));

    // }, [])

    return (
        (<section className='columnWeb'>
            <HeaderSection basketItems={basketItems} deleteItem={deleteItem} basketPrice={basketPrice} />
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
