import React from 'react';
import Image from 'next/image';
import thumbnail from '../imgs/thumbnail.png';

export default function Thumbnail() {
    return (
        <Image src={thumbnail} alt="Logo" priority width={150}/>
    );
}