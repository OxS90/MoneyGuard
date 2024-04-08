import { StyledSectionHome } from 'pages/HomePage/HomePage.styled';
import { BtnAddTransaction } from '../../components/BtnAddTransaction/BtnAddTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import React from 'react';
import BtnTeamModal from 'components/BtnTeamModal/BtnTeamModal';

const HomePage = () => {
  return (
    <StyledSectionHome>
      <TransactionList />
      <BtnAddTransaction />
      <BtnTeamModal />
    </StyledSectionHome>
  );
};

export default HomePage;
