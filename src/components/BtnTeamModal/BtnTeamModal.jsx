// BtnTeamModal.js
import React from 'react';
import { FcAbout } from 'react-icons/fc';
import css from './BtnTeamModal.module.css';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/slice';

const svgOpenModal = <FcAbout />;

const BtnTeamModal = () => {
  const dispatch = useDispatch();

  const openTeamModal = () => {
    dispatch(toggleModal()); // Dispatchează acțiunea pentru a deschide/închide modalul
  };

  return (
    <>
      {/* Butonul pentru deschiderea modalului */}
      <button
        className={css.btnOpenModal}
        type="button"
        onClick={openTeamModal}
      >
        {svgOpenModal}
      </button>

      {/* Nu este nevoie să verifici starea modalului aici, deoarece se face în TeamModal */}
    </>
  );
};

export default BtnTeamModal;
