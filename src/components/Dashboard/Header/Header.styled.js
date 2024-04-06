import styled from 'styled-components';
import { IoExitOutline } from 'react-icons/io5';

export const HeaderContainer = styled.header`
  width: 320px;
  padding: 0;
  background: transparent;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
`;

export const HeaderDiv = styled(Div)`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 1280px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    height: 60px;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    padding: 0 32px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const LogoBox = styled.button`
  padding: 16px 16px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  transition: all 400ms;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    padding: 12px 0;
    margin-right: auto;
  }
`;

export const Logo = styled.img`
  width: 17px;
  height: 21px;
  margin-bottom: 3px;
`;

export const LogoName = styled.span`
  color: #fbfbfb;
  font-size: 12px;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;


export const Name = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  font-size: 16px;
  margin: 0;
  margin-right: 12px;

  @media (max-width: 767px) {
    margin-right: 8px;
  }
`;

export const Stick = styled.div`
  height: 30px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-right: 12px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
  width: 20px;
  height: 100%;
  transition: all 400ms;
  padding: 0;
  &:hover {
    transform: scale(1.2);
  }
  & > svg {
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const ExitOutline = styled(IoExitOutline)`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const ExitText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  @media (max-width: 767px) {
    display: none;
  }
`;
