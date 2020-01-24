import React from 'react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import './Tab.sass';



const getTabs = () => {
    const fisheaten = [
        { 
            titel: 'Использование высококомпонентный муки в комбикормах для радужной форели', 
            content: <div className="tabContent">
            <div className="head">Максимальные значения перекисного и кислотного <br />чисел в кормах для рыб</div>
            <div className="tabCont">
                <div className="d-flex row">
                    <div className="d-flex--fullcenter">Показатель</div>
                    <div className="d-flex--fullcenter">корм для<br /> форели и осетра</div>
                    <div className="d-flex--fullcenter">корм для<br /> сома и карпа</div>
                </div>
                <div className="d-flex row">
                    <div className="d-flex--fullcenter">перекисное число,% 1</div>
                    <div className="d-flex--fullcenter">0.2</div>
                    <div className="d-flex--fullcenter">0.3</div>
                </div>
                <div className="d-flex row">
                    <div className="d-flex--fullcenter">кислотное число,мг КОН</div>
                    <div className="d-flex--fullcenter">20</div>
                    <div className="d-flex--fullcenter">30</div>
                </div>
                <div className="d-flex row">
                    <div className="d-flex--fullcenter">токсичность</div>
                    <div className="d-flex--fullcenter">не допускается</div>
                    <div className="d-flex--fullcenter">не допускается</div>
                </div>
            </div>
        </div> 
        }, 
        { titel: 'Время необходимое для окраски форели в розовый цвет', content: '2' },
        { titel: 'Безопасность кормов', content: '3' },
        { titel: 'Требования к рыбному корму', content: '4' }
    ];
    return fisheaten.map((fisheaten, index) => ({
        title: fisheaten.titel,
        getContent: () => fisheaten.content,
        /* Optional parameters */
        key: index,
        tabClassName: 'tab',
        panelClassName: 'panel',
    }));
}

const Tab = () => {
    return (
        <div className="tabContainer position-abs">
            <Tabs items={getTabs()} />
            
        </div>
        
    )
}

export default Tab;