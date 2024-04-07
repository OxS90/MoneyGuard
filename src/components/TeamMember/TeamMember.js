// TeamMember.js
import React from 'react';
import css from './TeamMember.module.css';

const TeamMember = ({ name, role, imgSrc, githubLink, linkedinLink }) => (
  <div className={css['footer-team-card']}>
    <picture className={css['footer-image-container']}>
      <source srcSet={imgSrc} type="image/webp" />
      <img className={css['footer-img-size']} src={imgSrc} alt={name} />
    </picture>
    <div className={css['footer-member-info']}>
      <span className={css['footer-team-name']}>{name}</span>
      <em className={css['footer-team-function']}>{role}</em>
    </div>
    <div className={css['footer-icon-cards']}>
      <a
        href={githubLink}
        className={css['footer-github-icon']}
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className={css['footer-github-icon']}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
        >
          <g id="icomoon-ignore"></g>
          <path
            fill="#000"
            d="M512 0c282.77 0 512 229.23 512 512v0c0 0.013 0 0.027 0 0.042 0 225.556-145.853 417.047-348.39 485.302l-3.61 1.056c-19.2 0-32-12.8-32-25.6v-140.8c0-44.8-12.8-76.8-32-96 108.8-12.8 230.4-57.6 230.4-256 0-51.2-19.2-96-51.2-128 0-19.2 25.6-64 0-140.8 0 0-51.2-12.8-147.2 51.2-38.361-11.189-82.429-17.625-128-17.625s-89.638 6.436-131.343 18.449l3.343-0.824c-96-64-140.8-51.2-140.8-51.2-25.6 70.4-6.4 128 0 134.4-38.4 38.4-57.6 83.2-57.6 140.8 0 192 121.6 236.8 236.8 256-19.2 6.4-32 32-38.4 64-25.6 12.8-102.4 32-147.2-44.8-6.4-12.8-38.4-51.2-76.8-51.2-44.8 0-19.2 25.6 0 32 19.2 12.8 44.8 64 51.2 76.8 12.8 25.6 44.8 83.2 172.8 64v89.6c0 12.8-6.4 32-32 25.6-206.147-69.312-352-260.802-352-486.358 0-0.015 0-0.030 0-0.045v0.003c0-282.77 229.23-512 512-512v0z"
          ></path>
        </svg>
      </a>
      <a
        href={linkedinLink}
        className={css['footer-linkedin-icon']}
        aria-label="Linkedin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className={css['footer-linkedin-icon']}
        >
          <title>linkedin-icon</title>
          <g id="icomoon-ignore"></g>
          <path d="M1024 1024v-373.76c0-184.32-40.96-327.68-256-327.68-102.4 0-168.96 56.32-199.68 112.64v-97.28h-209.92v686.080h209.92v-337.92c0-92.16 15.36-174.080 128-174.080 107.52 0 112.64 102.4 112.64 179.2v332.8h215.040zM15.36 337.92h215.040v686.080h-215.040v-686.080zM122.88 0c-66.56 0-122.88 51.2-122.88 122.88 0 66.56 51.2 122.88 122.88 122.88 67.865 0 122.88-55.015 122.88-122.88s-55.015-122.88-122.88-122.88v0z"></path>
        </svg>
      </a>
    </div>
  </div>
);

export default TeamMember;
