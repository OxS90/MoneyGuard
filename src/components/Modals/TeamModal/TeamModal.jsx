// TeamModal.js
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTeamModal } from '../../../redux/modal/slice';
import { selectModalState } from '../../../redux/modal/selectors';
import css from './TeamModal.module.css';
import { CloseBtn } from '../AddTransaction/AddTransaction.styled';
import TeamMember from '../../TeamMember/TeamMember';
import ciprianRopcean from '../../../assets/images/ciprianRopcean.webp';
import ciprianImagex2 from '../../../assets/images/ciprianRopcean@2x.webp';
import andreiRusu from '../../../assets/images/andrei-rusu.webp';
import andreiRusux2 from '../../../assets/images/andrei-rusu@2x.webp';
import alexandruNitu from '../../../assets/images/alexandruNitu.png';
import alexandruNitux2 from '../../../assets/images/alexandruNitu@x2.webp';
import oxanaSlivinschi from '../../../assets/images/oxanaSlivinschi.webp';
import oxanaSlivinschix2 from '../../../assets/images/oxanaSlivinschi@x2.webp';
import onisimSuldac from '../../../assets/images/onisimSuldac.webp';
import onisimSuldacx2 from '../../../assets/images/onisimSuldac@x2.webp';

const TeamModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModalState);

  const closeModal = useCallback(() => {
    dispatch(toggleTeamModal(false));
  }, [dispatch]);

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
  }, [closeModal]);

  // const onBackdropClick = e => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  return (
    <section
      className={`${css.backdrop} ${isModalOpen ? css.blurBackground : ''}`}
      // onClick={onBackdropClick}
    >
      {isModalOpen && (
        <div className={css.modalLayout}>
          <button type="button" className={css.closeBtn} onClick={closeModal}>
            <CloseBtn />
          </button>
          <TeamMember
            name="Oxana Slivinschi"
            role="Team leader"
            imgSrc={oxanaSlivinschi}
            imgSrcSet={oxanaSlivinschix2}
            githubLink="https://github.com/OxS90"
            linkedinLink="https://www.linkedin.com/in/oxana-slivinschi-2854b8244"
          />
          <TeamMember
            name="Ciprian Ropcean"
            role="Scrum master"
            imgSrc={ciprianRopcean}
            imgSrcSet={ciprianImagex2}
            githubLink="https://github.com/Cipick23"
            linkedinLink="https://www.linkedin.com/in/ciprianropcean"
          />
          <TeamMember
            name="Alexandru Nitu"
            role="Frontend developer"
            imgSrc={alexandruNitu}
            imgSrcSet={alexandruNitux2}
            githubLink="https://github.com/NituAlexandru"
            linkedinLink="https://www.linkedin.com/in/alexandru-nitu-631929107"
          />
          <TeamMember
            name="Andrei Rusu"
            role="Frontend developer"
            imgSrc={andreiRusu}
            imgSrcSet={andreiRusux2}
            githubLink="https://github.com/adad22ro"
            linkedinLink="https://ro.linkedin.com/in/andrei-rusu-270719288"
          />
          <TeamMember
            name="Onisim Șuldac"
            role="Frontend developer"
            imgSrc={onisimSuldac}
            imgSrcSet={onisimSuldacx2}
            githubLink="https://github.com/onisimsuldac"
            linkedinLink="https://www.linkedin.com/in/onisim-suldac-101444213"
          />
        </div>
      )}
    </section>
  );
};

export default TeamModal;