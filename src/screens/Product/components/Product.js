import React from 'react';
import ProductList from '../../ProductList/components/ProductList';
import News from '../../News/components/News';
import Fishes from '../../Fishes/components/Fishes';
import Tabs from '../../Tabs/components/Tabs';
import './Product.sass';

const Product = () => {
    return (
        <>
            <div className="d-flex">
                <img className="fish" src="images/fish-t.png" alt="fish" />
                <div className="center">
                    <div className="productBlock">
                        
                        <h2>продукция нашей компании</h2>
                        <div className="d-flex productContent flex-column">
                            <p>
                            Мы предлагаем корма <b>«Jagen-1»</b> для форели и карпа в гранулах разного диаметра. Продукция предлагается разного класса, 
                            а высококачественное немецкое оборудование позволяет регулировать жиро-протеиновые показатели в зависимости от пожеланий заказчика.
                            </p>
                            
                            <ProductList />
                        
                        </div>


                        <div className="newsProd">

                            <News />
                            
                        </div>

                        
                        <Fishes />

                    </div>
                    
                </div>
            </div>
        
            <div className="tabs">
                
                <Tabs />
                
            </div>

        </>
    )
}

export default Product;