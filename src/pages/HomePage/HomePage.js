import React from 'react';
import css from './homePage.module.css';
import AddModal from '../../components/Modals/AddModal/AddModal';

export default function Home() {
  return (
    <div className={css.container}>
      <h1>Home page</h1>
      <AddModal />
    </div>
  );
}
