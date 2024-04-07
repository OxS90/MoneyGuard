// BtnTeamModal.js
import React, { useState } from 'react';
import { FcAbout } from 'react-icons/fc';
import css from './BtnTeamModal.module.css';
import { useDispatch } from 'react-redux';
import { toggleTeamModal } from '../../redux/modal/slice';
import TeamModal from '../Modals/TeamModal/TeamModal';
const svgOpenModal = <FcAbout />;

const BtnTeamModal = () => {
  const dispatch = useDispatch();
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const openTeamModal = () => {
    dispatch(toggleTeamModal());
    setIsTeamModalOpen(true);
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
      {isTeamModalOpen && <TeamModal closeModal={setIsTeamModalOpen} />}

      {/* Nu este nevoie să verifici starea modalului aici, deoarece se face în TeamModal */}
    </>
  );
};

export default BtnTeamModal;
