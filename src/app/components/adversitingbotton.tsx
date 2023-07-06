import React from 'react';
import { Component1S, Component2S, ComponentContainerS, DivAdversitingS, LeftS, RightS, RightTextS1, RightTextS2, RightTextS3 } from '../stylescomponents/styles';
import ButtonDemo from './buttondemo';
import Comparativo from './comparativo';
import EndText from './endText';
import Selo from './selo';


export default function AdversitingBotton() {
    return (
    <div>
        <DivAdversitingS>
          <div>
            <LeftS>
              <Comparativo />
            </LeftS>
          </div>

          <div>
            <RightS>
              <RightTextS1>
                Pronto para triplicar sua
              </RightTextS1>
              <RightTextS2>
                Geração de Leads?
              </RightTextS2>
              <RightTextS3>
                Criação e ativação em <strong>4 minutos</strong>.
              </RightTextS3>
              
              <hr />
              
            <ComponentContainerS>
              <Component1S>
                  <ButtonDemo />
              </Component1S>
              <Component2S>
                  <Selo />
              </Component2S>
            </ComponentContainerS>
            <EndText />
            </RightS>
        </div>
      </DivAdversitingS>
    </div>
    );
}