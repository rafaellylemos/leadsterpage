'use client';

import ButtonDemo from './components/buttondemo';
import Cases from './components/cases';
import Comparativo from './components/comparativo';
import Contato from './components/contato';
import EndText from './components/endText';
import Links from './components/links';
import LogoBottom from './components/logobottom';
import LogoTop from './components/logotop';
import Materiais from './components/materiais';
import Selo from './components/selo';
import GlobalStyle from './styles/global';
import { Component1S, Component2S, ComponentContainerS, DivAdversitingS, DivLogoS, EndTextS, FooterS, LeftS, LogoS, RightS, RightTextS1, RightTextS2, RightTextS3 } from './stylescomponents/styles';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <header>
        <div>
          <LogoS>
            <LogoTop />
          </LogoS>
        </div>
      </header>
      <main>
        <div>
          <DivAdversitingS />
        </div>
        <section>
          {/* Div-Buttons */}
          {/* Div-Videos */}
          {/* Div-Pags */}
        </section>
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
        <div>
          <DivLogoS>
            <LogoBottom />
            Transformando visitantes em clientes.
          </DivLogoS>
        </div>
      </main>
      <footer>
        <FooterS>
          <div>
            <Links />
          </div>
          <div>
            <Cases />
          </div>
          <div>
            <Materiais />
          </div>
          <div>
            <Contato />
          </div>
        </FooterS>
      </footer>
    </>
  );
}
