import React, { useEffect } from 'react';
import { selectModalState } from '../../../redux/modal/selectors';
import { toggleTeamModal } from '../../../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import css from './TeamModal.module.css';
import { CloseBtn } from '../AddTransaction/AddTransaction.styled';
import TeamMember from '../../TeamMember/TeamMember'; // Importăm noul component

const TeamModal = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectModalState);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch(toggleTeamModal());
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return (
    <section
      className={`${css.backdrop} ${isModalOpen ? css.blurBackground : ''}`}
      onClick={onBackdropClick}
    >
      {isModalOpen && (
        <div className={css.modalLayout}>
          <button type="button" className={css.closeBtn} onClick={closeModal}>
            <CloseBtn />
          </button>
          <h2 className={css['footer-font-title']}>Made by:</h2>
          <div className={css['footer-content']}>
            <div className={css['footer-cards']}>
              {/* Utilizăm componenta TeamMember pentru fiecare membru al echipei */}
              <TeamMember
                name="Oxana Slivinschi"
                role="Team leader"
                imgSrc="./images/bogdan-nemes.webp"
                githubLink="https://github.com/OxS90"
                linkedinLink="https://www.linkedin.com/in/oxana-slivinschi-2854b8244"
              />
              <TeamMember
                name="Ciprian Ropcean"
                role="Scrum master"
                imgSrc="./src/assets/images/ciprianRopcean.webp"
                githubLink="https://github.com/Cipick23"
                linkedinLink="https://www.linkedin.com/in/ciprianropcean"
              />
              <TeamMember
                name="Alexandru Nitu"
                role="Frontend developer"
                imgSrc="./src/assets/images/ciprianRopcean.webp"
                githubLink="https://github.com/NituAlexandru"
                linkedinLink="https://www.linkedin.com/in/alexandru-nitu-631929107"
              />
              <TeamMember
                name="Andrei Rusu"
                role="Frontend developer"
                imgSrc="./src/assets/images/ciprianRopcean.webp"
                githubLink="https://github.com/adad22ro"
                linkedinLink="https://ro.linkedin.com/in/andrei-rusu-270719288"
              />
              <TeamMember
                name="Andrei Rusu"
                role="Frontend developer"
                imgSrc="./src/assets/images/ciprianRopcean.webp"
                githubLink="https://github.com/adad22ro"
                linkedinLink="https://ro.linkedin.com/in/andrei-rusu-270719288"
              />
              <TeamMember
                name="Onisim Șuldac"
                role="Frontend developer"
                imgSrc="./src/assets/images/ciprianRopcean.webp"
                githubLink="https://github.com/onisimsuldac"
                linkedinLink="https://www.linkedin.com/in/onisim-%C8%99uldac-101444213"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamModal;
