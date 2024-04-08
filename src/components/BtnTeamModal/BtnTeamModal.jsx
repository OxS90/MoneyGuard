import React from 'react';
import { FcAbout } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toggleTeamModal } from '../../redux/modal/slice';
import TeamModal from '../Modals/TeamModal/TeamModal';
import css from './BtnTeamModal.module.css';
import { useState } from 'react';

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
    </>
  );
};

export default BtnTeamModal;