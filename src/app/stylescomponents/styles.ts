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
//Div-Advertising
export const DivAdversitingS = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  background-color: rgba(30,144,255, 0.1);

  width: 100%;
  height: 300px;
`;

//Div-Buttons
//Div-Videos
//Div-Pags
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
  background-color: #097BF4;
  font-size: 11px;
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  text-transform: uppercase;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #001969;
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
