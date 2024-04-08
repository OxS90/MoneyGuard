import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  flex-direction: column;
  align-items: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 20;

  &::before {
    background: var(--Form-color, rgba(255, 255, 255, 0.1));
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  overflow: hidden;
  height: 100%;
  justify-content: center;
  z-index: 20;
  position: fixed;

  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 540px;
    height: 589px;
    padding: 40px 73px;
    border-radius: 8px;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    background-color: var(--transp-10);
    content: '';
    backdrop-filter: blur(50px);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export const Gradient = styled.div`
  z-index: -20;
  position: absolute;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  inset: 0;
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const CancelBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  margin-top: 20px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  &:hover {
    background-color: rgba(98, 63, 139, 1);
    color: rgba(251, 251, 251, 1);
  }
`;
