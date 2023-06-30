'use client';


import Cases from './components/cases';
import Contato from './components/contato';
import Links from './components/links';
import LogoBottom from './components/logobottom';
import LogoTop from './components/logotop';
import Materiais from './components/materiais';
import GlobalStyle from './styles/global'
import { DivAdversitingS, DivLogoS, FooterS, LogoS } from './stylescomponents/styles';

export default function Home() {
  return (
    <body>
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
          //Div-Buttons
          //Div-Videos
          //Div-Pags
        </section>
        <div>
          <DivAdversitingS />
        </div>
        <div>
          <DivLogoS> 
            <LogoBottom /> 
            Transformando visitantes em clientes.
          </DivLogoS>
        </div>
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
      </main>
    </body>
  )
}

