'use client';

import GlobalStyle from './styles/global';
import MenuButtons from './components/menubuttons';
import Videos from './components/videos';
import Header from './components/header';
import AdversitingTop from './components/advertisingtop';
import AdversitingBotton from './components/adversitingbotton';
import Footer from './components/footer';
import Pags from './components/pags';
import DropdownMenu from './components/dropdownmenu';
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AdversitingTop />
            <section>
              <MenuButtons />
              <DropdownMenu />
                <hr />
              <Videos />
                <hr />
              <Pags />
            </section>
      <AdversitingBotton />
      <Footer />
      </>
  );
}
