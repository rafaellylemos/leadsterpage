import React from 'react';
import Image from 'next/image';
import logo from '../imgs/logo.png';

export default function LogoBottom() {
    return (
        <Image src={logo} alt="Logo" priority height={40} />
    );
}