import React, { useState } from 'react';
import { NumS, PagsS } from '../stylescomponents/styles';

const Pags = () => {
  const [selectedNum, setSelectedNum] = useState('');

  const handleClick = (num) => {
    setSelectedNum(num);
  };

  const isNumSelected = (num) => {
    return selectedNum === num;
  };

  return (
    <PagsS>
      Página
      <NumS
        style={{
          border: isNumSelected('1') ? '1px solid #00A8FF' : 'none',
          padding: isNumSelected('1') ? '1px 8px' : '0',
          borderRadius: isNumSelected('1') ? '5px' : '0',
          color: isNumSelected('1') ? '#00A8FF' : 'black',
          width: '20px', // Largura fixa
          verticalAlign: 'middle', // Alinhamento vertical
        }}
        onClick={() => handleClick('1')}
      >
        1
      </NumS>
      <NumS
        style={{
          border: isNumSelected('2') ? '1px solid #00A8FF' : 'none',
          padding: isNumSelected('2') ? '1px 8px' : '0',
          borderRadius: isNumSelected('2') ? '5px' : '0',
          color: isNumSelected('2') ? '#00A8FF' : 'black',
          width: '20px', // Largura fixa
          verticalAlign: 'middle', // Alinhamento vertical
        }}
        onClick={() => handleClick('2')}
      >
        2
      </NumS>
      <NumS
        style={{
          border: isNumSelected('3') ? '1px solid #00A8FF' : 'none',
          padding: isNumSelected('3') ? '1px 8px' : '0',
          borderRadius: isNumSelected('3') ? '5px' : '0',
          color: isNumSelected('3') ? '#00A8FF' : 'black',
          width: '20px', // Largura fixa
          verticalAlign: 'middle', // Alinhamento vertical
        }}
        onClick={() => handleClick('3')}
      >
        3
      </NumS>
      <NumS
        style={{
          border: isNumSelected('4') ? '1px solid #00A8FF' : 'none',
          padding: isNumSelected('4') ? '1px 8px' : '0',
          borderRadius: isNumSelected('4') ? '5px' : '0',
          color: isNumSelected('4') ? '#00A8FF' : 'black',
          width: '20px', // Largura fixa
          verticalAlign: 'middle', // Alinhamento vertical
        }}
        onClick={() => handleClick('4')}
      >
        4
      </NumS>
    </PagsS>
  );
};

export default Pags;


