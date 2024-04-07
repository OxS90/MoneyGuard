import logo from '../../assets/icons/logo.svg';
import { useDispatch } from 'react-redux';
import { LogoTitle, Text } from './Logout.styled';
import CustomButton from '../CustomElements/CustomButton/CustomButton';
import { logOut } from '../../redux/authorisation/operations';
import { toggleModal } from '../../redux/modal/slice';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <>
      <img src={logo} alt="Logo MoneyGuard" width="36px" height="36px" />
      <LogoTitle>Money Guard</LogoTitle>
      <Text>Are you sure you want to log out?</Text>
      <CustomButton
        type="submit"
        onClick={() => {
          dispatch(logOut());
          dispatch(toggleModal());
        }}
      >
        Logout
      </CustomButton>
    </>
  );
}
