'use client';

import GlobalStyle from './styles/global';
import { Pags } from './stylescomponents/styles';
import MenuButtons from './components/menubuttons';
import Videos from './components/videos';
import Header from './components/header';
import AdversitingTop from './components/advertisingtop';
import AdversitingBotton from './components/adversitingbotton';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <GlobalStyle />
       <Header />
        <main>
          <AdversitingTop />
            <section>
              <MenuButtons />
                <hr />
              <Videos />
                <hr />
              <Pags>
                Página 1 2 3 4
              </Pags>
            </section>
          <AdversitingBotton />
      </main>
      <Footer />
      </>
  );
}
