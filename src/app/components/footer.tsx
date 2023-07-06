import React from 'react';
import Cases from './cases';
import Contato from './contato';
import Links from './links';
import LogoBottom from './logobottom';
import Materiais from './materiais';
import { DivLogoS, FooterS, HiddenS } from '../stylescomponents/styles';


export default function Footer() {
    return (
    <><div>
            <HiddenS>
            <DivLogoS>
                <LogoBottom />
                Transformando visitantes em clientes.
            </DivLogoS>
            </HiddenS>
        </div><footer>
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
            </footer></>
    );
}