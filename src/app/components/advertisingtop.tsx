import React from 'react';
import Image from 'next/image';
import assetheader from '../imgs/assetheader.png';
import { ButtonWebnarsS, Call1S, Call2S, Principal, SubtextS, WebnarsS } from '../stylescomponents/styles';


export default function AdversitingTop() {
    return (
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
    );
}