import React, { useEffect } from 'react'
import { ModalButton, ModalButtonClose, ModalContent, ModalWrapper } from './ModalExit.styled'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/authorisation/operations'
import logo from '../../assets/logo.svg';


const ModalExit = ({ handleCloseModal }) => {
  const dispatch = useDispatch()
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return (() =>
      document.removeEventListener('keydown', handleKeyDown)
    )
  }, [handleCloseModal])
  return (
    <ModalWrapper onClick={clickOutside}>
      <ModalContent >
        <img
          src={logo}
          alt='logo'
          width='115'
          height='48'
          loading='lazy' />
        <p>Are you sure you want to log out?</p>
        <ModalButton onClick={() => dispatch(logOut())}>Logout</ModalButton>
        <ModalButtonClose onClick={handleCloseModal}>cancel</ModalButtonClose>
      </ModalContent>
    </ModalWrapper>
  )
}

export default ModalExit