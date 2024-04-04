import logo from '../../assets/icons/logo.svg';
import { useDispatch } from 'react-redux';
import { LogoutBtn, LogoTitle, Text } from './Logout.styled';
import { logOut } from '../../redux/authorisation/operations';
import { toggleModal } from '../../redux/modal/slice';
import { CancelBtn } from 'components/Modals/LogOutModal/Modal.styled';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <>
      <img src={logo} alt="Logo MoneyGuard" width="36px" height="36px" />
      <LogoTitle>Money Guard</LogoTitle>
      <Text>Are you sure you want to log out?</Text>
      <LogoutBtn
        type="submit"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </LogoutBtn>
      <CancelBtn onClick={() => dispatch(toggleModal())}>Cancel</CancelBtn>
    </>
  );
}
