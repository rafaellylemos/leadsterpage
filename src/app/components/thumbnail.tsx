import React from 'react';
import Image from 'next/image';
import thumbnail from '../imgs/thumbnail.png';
import { CardS, TextCardS, VideoS } from '../stylescomponents/styles';

export default function Thumbnail() {
    return (
        <CardS>
            <VideoS>
                    <div style={{ width: '100%' }}>
                        <Image src={thumbnail} alt="Logo" />
                    </div>
            </VideoS>
            <TextCardS>    
                Como aumentar sua Geração de Leads feat. Traktor
            </TextCardS>
        </CardS>
    );
}