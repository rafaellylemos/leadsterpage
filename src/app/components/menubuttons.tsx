import React, { useState } from 'react';
import { DivMenuButtonsS, LeftMenuButtonsS, MenuButtonRightS, MenuButtonsS, RightMenuButtonS } from '../stylescomponents/styles';
import OrderButton from './orderbybutton';

const MenuButtons = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const isButtonSelected = (buttonName) => {
    return selectedButton === buttonName;
  };

  return (
    <DivMenuButtonsS>
      <LeftMenuButtonsS>
        <MenuButtonsS
          style={{ backgroundColor: isButtonSelected('Agências') ? '#00A8FF' : 'transparent', color: isButtonSelected('Agências') ? 'white' : 'black', border: isButtonSelected('Agências') ? 'none' : '1px solid black' }}
          onClick={() => handleClick('Agências')}
        >
          Agências
        </MenuButtonsS>
        <MenuButtonsS
          style={{ backgroundColor: isButtonSelected('Chatbot') ? '#00A8FF' : 'transparent', color: isButtonSelected('Chatbot') ? 'white' : 'black', border: isButtonSelected('Chatbot') ? 'none' : '1px solid black' }}
          onClick={() => handleClick('Chatbot')}
        >
          Chatbot
        </MenuButtonsS>
        <MenuButtonsS
          style={{ backgroundColor: isButtonSelected('Marketing Digital') ? '#00A8FF' : 'transparent', color: isButtonSelected('Marketing Digital') ? 'white' : 'black', border: isButtonSelected('Marketing Digital') ? 'none' : '1px solid black' }}
          onClick={() => handleClick('Marketing Digital')}
        >
          Marketing Digital
        </MenuButtonsS>
        <MenuButtonsS
          style={{ backgroundColor: isButtonSelected('Geração de Leads') ? '#00A8FF' : 'transparent', color: isButtonSelected('Geração de Leads') ? 'white' : 'black', border: isButtonSelected('Geração de Leads') ? 'none' : '1px solid black' }}
          onClick={() => handleClick('Geração de Leads')}
        >
          Geração de Leads
        </MenuButtonsS>
        <MenuButtonsS
          style={{ backgroundColor: isButtonSelected('Mídia Paga') ? '#00A8FF' : 'transparent', color: isButtonSelected('Mídia Paga') ? 'white' : 'black', border: isButtonSelected('Mídia Paga') ? 'none' : '1px solid black' }}
          onClick={() => handleClick('Mídia Paga')}
        >
          Mídia Paga
        </MenuButtonsS>
      </LeftMenuButtonsS>
      <RightMenuButtonS>
        <strong>Ordenar por</strong>
        <MenuButtonRightS>
          <OrderButton />
        </MenuButtonRightS>
      </RightMenuButtonS>
    </DivMenuButtonsS>
  );
};

export default MenuButtons;
