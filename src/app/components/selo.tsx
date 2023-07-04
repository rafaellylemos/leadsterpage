import React from 'react';
import { SeloRDS } from '../stylescomponents/styles';
import seloRD from '../imgs/seloRD.png';
import Image from 'next/image';


export default function Selo() {
    return (
        <SeloRDS>
            <Image src={seloRD} alt="Selo RD" priority height={50} width={100} />
        </SeloRDS>
    );
}