import React from 'react';
import Image from 'next/image';
import comparativoleadster from '../imgs/comparativoleadster.png';


export default function Comparativo() {
    return (
        <div style={{ background: 'transparent' }}>
        <Image src={comparativoleadster} alt="Comparativos Leadster" priority height={350} width={320} />
        </div>
    );
}
