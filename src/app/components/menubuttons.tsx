import React from 'react';
import { DivMenuButtonsS, LeftMenuButtonsS, MenuButtonRightS, MenuButtonsS, RightMenuButtonS } from '../stylescomponents/styles';
import OrderButton from './orderbybutton';


export default function MenuButtons() {
    return (
        <DivMenuButtonsS>
            <LeftMenuButtonsS>
                <MenuButtonsS>Agências</MenuButtonsS>
                <MenuButtonsS>Chatbot</MenuButtonsS>
                <MenuButtonsS>Marketing Digital</MenuButtonsS>
                <MenuButtonsS>Geração de Leads</MenuButtonsS>
                <MenuButtonsS>Mídia Paga</MenuButtonsS>
            </LeftMenuButtonsS>
        <RightMenuButtonS>
          <strong>Ordenar por</strong>
          <MenuButtonRightS>
            <OrderButton />
          </MenuButtonRightS>
        </RightMenuButtonS>
      </DivMenuButtonsS>
    );
}