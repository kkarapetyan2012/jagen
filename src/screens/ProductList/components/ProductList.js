import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import './ProductList.sass';

const ProductList = () => {
  return (
    <Table className="productTable">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Название</Th>
          <Th>Тип</Th>
          <Th>Класс</Th>
          <Th>Размер (мм)</Th>
          <Th>Протеин (%)</Th>
          <Th>Жир (%)</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><img src="images/tb-1.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
        <Td><img src="images/tb-2.png" alt="prod"/></Td>
        <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
          <Td><img src="images/tb-3.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
          <Td><img src="images/tb-4.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
          <Td><img src="images/tb-5.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
          <Td><img src="images/tb-6.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
        <Tr>
          <Td><img src="images/tb-4.png" alt="prod"/></Td>
          <Td>JAGEN-1 <br/> Арт 000F01</Td>
          <Td>Форелевый</Td>
          <Td>Стартовый</Td>
          <Td>0.1 (крупка)</Td>
          <Td>62</Td>
          <Td>12</Td>
          <Td><button className="prodBtn">узнать цену</button></Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default ProductList;