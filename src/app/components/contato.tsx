import { CircleS, ContatoMobileS, LinksS, SocialS } from "../stylescomponents/styles";
import IconInstagram from "./icons/IconInstagram";
import IconLinkedin from "./icons/IconLinkedin";
import IconSocialFacebook from "./icons/IconSocialFacebook";

export default function Contato() {
    return (
        <>
        <ContatoMobileS>
            <h1>Siga a Leadster</h1>  
        </ContatoMobileS>      
        <LinksS>
            <div>
                <SocialS>
                    <div>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <CircleS>
                                <IconLinkedin />
                            </CircleS>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <CircleS>
                                <IconSocialFacebook />
                            </CircleS>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <CircleS>
                                <IconInstagram />
                            </CircleS>
                        </a>
                    </div>
                </SocialS>
            </div>
            <div>
                <span className="font-thin text-black text-opacity-80"> E-mail: {''} </span>
                <a href="mailto:contato@leadster.com.br">contato@leadster.com.br</a>
            </div>
            <div>
            <span className="font-thin text-black text-opacity-80"> Telefone: {''} </span>
                <a href="https://wa.me/5542988289851">(42) 98828-9851</a>
            </div>
        </LinksS></>
    );
}