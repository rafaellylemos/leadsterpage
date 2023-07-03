'use client';

import Cases from './components/cases';
import Contato from './components/contato';
import Links from './components/links';
import LogoBottom from './components/logobottom';
import LogoTop from './components/logotop';
import Materiais from './components/materiais';
import GlobalStyle from './styles/global';
import { Component1S, Component2S, ComponentContainerS, DivAdversitingS, DivLogoS, EndTextS, FooterS, LogoS, RightS, RightTextS1, RightTextS2, RightTextS3 } from './stylescomponents/styles';

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
              DivLeft
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
                    DivRight_left
                </Component1S>
                <Component2S>
                    DivRight_right
                </Component2S>
                </ComponentContainerS>
                <EndTextS>
                  Não é necessário cartão de crédito | 4,9/5 média de satisfação
                </EndTextS>
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
