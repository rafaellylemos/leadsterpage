import styled from 'styled-components';

//Header
export const LogoS = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  font-size: 20px;

  width: 100%;
  height: 100%;
`;

//Main
//Div-AdvertisingPrincipal
export const Principal = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  background-color: rgba(30,144,255, 0.1);
  text-align: center;
  margin: auto;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

export const WebnarsS = styled.div`
  background-color: transparent;
  font-size: 10px;
  padding: 2px 15px 2px 15px;
  justify-items: center;
  text-transform: uppercase;
  color: #2c83fb;
  font-weight: bold;
`;

export const ButtonWebnarsS = styled.button`
  background-color: transparent;
  border: 1px solid #2c83fb;
  border-radius : 30px 30px 30px 0px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f76f0;
  }
`;

export const Call1S = styled.div`
  background-color: rgba(30,144,255, 0.1);
  font-size: 24px;
`;

export const Call2S = styled.div`
  display: flex;
  background-color: transparent;
  font-size: 48px;
  line-height: 0.8;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(-45deg, #2c83fb, #1f76f0);
  padding-bottom: 10px;
  font-weight: bold;
`;

export const SubtextS = styled.div`
  background-color: rgba(30,144,255, 0.1);
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 79px;

  strong {
    background-color: transparent;
  }
`;

//Div-Buttons
export const DivMenuButtonsS = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  height: 90px;
  align-items: end;
  margin-bottom: 15px;
`;
export const LeftMenuButtonsS = styled.div`
  display: flex;
  gap: 7px;
`;

export const RightMenuButtonS = styled.div`
  display: flex;
  font-size: 11px;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const MenuButtonsS = styled.a`
  display: flex;
  background-color: transparent;
  font-size: 11px;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  padding: 2px 8px 2px 8px;

  &:hover {
   border-color: #00A8FF;
   color: #00A8FF;
   cursor: default;
  }

  &:active {
    background-color: #00A8FF;
    color: white;
  }

`;

export const MenuButtonRightS = styled.div`
  display: flex;
  background-color: transparent;
  font-size: 11px;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 2px 8px 2px 8px;

`;

//Botão da Div-Buttons
export const ButtonDiv = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;

`;

//Div-Videos
export const VideosS = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 30px;
  height: auto;
`;

export const VideoS = styled.div`
  display:flex;
  justify-content: center;
`;

//Div-Pags
export const Pags = styled.div`
  display:flex;
  justify-content: center;
`;

//Div-Adverstising
export const DivAdversitingS = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  background-color: rgba(30,144,255, 0.1);

  width: 100%;
  height: 300px;
`;
//Div-Advertising-Left
export const LeftS = styled.div`
  display: flex;
  background-color: transparent;
  height: 300px;
  width: 100%;
`;

//Div-Advertising-Right
export const RightS = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  background-color: rgba(30,144,255, 0.1);
  height: 300px;
  padding-left: 80px;
  padding-top: 90px;
  width: 100%;
`;

export const RightTextS1 = styled.div`
  background-color: transparent;
  font-size: 32px;
`;

export const RightTextS2 = styled.div`
  background-color: transparent;
  font-size: 32px;
  font-weight: bold;
`;

export const RightTextS3 = styled.div`
  background-color: transparent;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;

  strong {
    background-color: transparent;
  }
`;

export const ComponentContainerS = styled.div`
  display: flex;
  background-color: transparent;
  gap: 10px;
  margin-top: 10px;
`;

export const Component1S = styled.div`
  background-color: transparent;
`;
export const Component2S = styled.div`
  background-color: transparent;
`;
export const EndTextS = styled.div`
  background-color: transparent;
  display: flex;
  gap: 5px;
  font-size: 10px;
  margin-top: 10px;
`;
export const ButtonS = styled.button`
  background-color: #2c83fb;
  font-size: 11px;
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  text-transform: uppercase;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f76f0;
  }
`;

export const SeloRDS = styled.button`
  border-radius: 30px;
`;


//Div-Logo
export const DivLogoS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 11px;
  gap: 5px;
  color: rgba(0, 0, 0, 0.4);

  width: 100%;
`;
//Footer
export const FooterS = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 12px;
  gap: 100px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;

  width: 100%;
`;


export const LinksS = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 11px;
  gap: 10px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.4);
`;

//Footer-contato
export const SocialS = styled.div`
  display: flex;
  margin: auto;
  gap: 8px;
`;

export const CircleS = styled.div`
  width: 30px;
    height: 30px;
    border-radius: 50%; 
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`;
