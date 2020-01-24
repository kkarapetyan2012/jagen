import React from 'react';
import ProductList from '../../ProductList/components/ProductList';
import News from '../../News/components/News';
import Fishes from '../../Fishes/components/Fishes';
import Tab from '../../Tab/components/Tab';
import './Product.sass';

const Product = () => {
    return (
        <>
            <div className="d-flex flex-column align-items--center">
                <div className="w100 d-flex justify-content--center position-rel">
                    <img className="fish position-abs" src="images/fish-t.png" alt="fish" />
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
                        </div>
                    
                    </div>
                </div>
                
                <div className="w100 d-flex justify-content--center position-rel">
                    <div className="center">
                        <div className="newsProd">

                            <News />
                            
                        </div>
                    </div>
                    <img className="fish-abs position-abs" src="images/fishes3.png" alt="fish" />
                </div>

                <div className="center">       
                    <Fishes />
                </div>
                    
                
            </div>
        
            <div className="tabs">
                <div className="center position-rel marginAuto">
                    <Tab/>
                </div>
                <img src="images/fishT.png" alt="" />
            </div>

        </>
    )
}

export default Product;