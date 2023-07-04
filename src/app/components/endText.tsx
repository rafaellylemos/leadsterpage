import React from 'react';
import Image from 'next/image';
import nocarddark from '../imgs/nocarddark.webp';
import rating from '../imgs/rating.webp';
import { EndTextS } from '../stylescomponents/styles';

export default function EndText() {
    return (
        <EndTextS>
            <Image src={nocarddark} alt="Logo" priority height={10} />
            Não é necessário cartão de crédito |
            <Image src={rating} alt="Logo" priority height={10} />
            4,9/5 média de satisfação
         </EndTextS>
    );
}