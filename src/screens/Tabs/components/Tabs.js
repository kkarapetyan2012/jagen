import React from 'react';

import './Tabs.sass';

const Tabs = () => { 
    return (
        <>
            <div className="tabContainer">
                <div className="tab1 tab">
                    Использование высококомпонентный муки в комбикормах для радужной форели
                </div>
                <div className="tab2 tab">
                    Время необходимое для окраски форели в розовый цвет
                </div>
                <div className="tab3 tab tabActive">
                    Безопасность кормов
                </div>
                <div className="tab4 tab">
                    Требования к рыбному корму
                </div>
            </div>
            <div className="tabContent">
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
            <img src="images/fishT.png" alt="" />
        </>
    )
}

export default Tabs;