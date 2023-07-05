'use client';

import React, { useState } from 'react';
import IconBxUpArrow from './icons/IconBsUpArrow';
import IconBxsDownArrow from './icons/IconBxsDownArrow';
import { ButtonDiv } from '../stylescomponents/styles';

const OrderButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Data de Publicação'); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Aqui você pode realizar a ação correspondente à opção selecionada (por exemplo, realizar a ordenação)
  };
  return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)}>
        <ButtonDiv>
            <span>{selectedOption}</span>
          {isOpen ? <IconBxUpArrow /> : <IconBxsDownArrow />}
        </ButtonDiv>
        </button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionSelect('Data de Publicação')}>Data de Publicação</li>
          <li onClick={() => handleOptionSelect('Mais Vistos')}>Mais Vistos</li>
          <li onClick={() => handleOptionSelect('Melhores Avaliados')}>Melhores Avaliados</li>
        </ul>
      )}
    </div>
  );
      }  

export default OrderButton;
