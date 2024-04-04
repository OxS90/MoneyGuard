import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleLogOutModal } from '../../../redux/modal/slice';
import Modal from '../../Modals/LogOutModal/Modal';
import Logout from '../../Logout/Logout';
import {
  Div,
  HeaderDiv,
  Box,
  ExitButton,
  ExitOutline,
  HeaderContainer,
  Logo,
  LogoBox,
  LogoName,
  Name,
  Stick,
} from './Header.styled';
import logo from '../../../assets/icons/logo.svg';
import { selectUser } from '../../../redux/authorisation/selectors';
import {
  selectModalState,
  selectModalTypeState,
} from '../../../redux/modal/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);
  const buttonRef = useRef(null);

  const user = useSelector(selectUser);
  const username = user.email ? user.email.split('@')[0] : '';

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox onClick={goToHome} ref={buttonRef}>
            <Logo src={logo} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <Box>
            <Name>{username}</Name>
            <Stick />
            <ExitButton
              id="exit"
              type="button"
              onClick={() => dispatch(toggleLogOutModal())}
            >
              <ExitOutline />
            </ExitButton>
          </Box>
        </HeaderDiv>
      </HeaderContainer>

      {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} />
      )}
    </Div>
  );
};
