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
import Image from 'next/image';
import assetheader from '../app/imgs/assetheader.png';
import { MenuButtonRightS, DivMenuButtonsS, ButtonWebnarsS, Call1S, Call2S, Component1S, Component2S, ComponentContainerS, DivAdversitingS, DivLogoS, EndTextS, FooterS, LeftS, LogoS, Principal, RightS, RightTextS1, RightTextS2, RightTextS3, SubtextS, WebnarsS, MenuButtonsS, LeftMenuButtonsS, RightMenuButtonS, Videos, Video, Pags } from './stylescomponents/styles';
import OrderButton from './components/orderbybutton';

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
      <Principal>
        <div>
          <ButtonWebnarsS>
            <WebnarsS>
              Webnars Exclusivos
            </WebnarsS>
            </ButtonWebnarsS>
            <Call1S> 
              Menos conversinha,
            </Call1S>
              <Call2S>
                Mais conversão
                <Image src={assetheader} alt="Leadster Page" priority height={30}/>
              </Call2S>
            <hr />
            <SubtextS>
              Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
            </SubtextS>
        </div>
      </Principal>
        <section>
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
            <hr />
          <Videos>
            <Video>Video1</Video>
            <Video>Video2</Video>
            <Video>Video3</Video>
            <Video>Video4</Video>
            <Video>Video5</Video>
            <Video>Video6</Video>
            <Video>Video7</Video>
            <Video>Video8</Video>
            <Video>Video9</Video>
          </Videos>
          <hr />
          <Pags>
            Página 1 2 3 4
          </Pags>
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
