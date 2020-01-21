import React from 'react';

import './ProductList.sass';

const ProductList = () => {
    return (
        <table className="productTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Название</th>
                    <th>Тип</th>
                    <th>Класс</th>
                    <th>Размер (мм)</th>
                    <th>Протеин (%)</th>
                    <th>Жир (%)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="images/tb-1.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-2.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-3.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-4.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-5.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-6.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="images/tb-7.png" alt="prod"/>
                    </td>
                    <td>JAGEN-1 Арт 000F01</td>
                    <td>Форелевый</td>
                    <td>Стартовый</td>
                    <td>0.1 (крупка)</td>
                    <td>62</td>
                    <td>12</td>
                    <td>
                        <button className="prodBtn">узнать цену</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductList