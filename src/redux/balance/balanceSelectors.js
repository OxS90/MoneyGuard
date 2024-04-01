// balanceSelectors.js

import { createSelector } from 'reselect';

// Selector pentru a extrage reducer-ul pentru balanță din starea Redux
const selectBalanceReducer = state => state.balance;
// debugger;
// Selector pentru a extrage soldul total din reducer-ul pentru balanță
export const selectTotalBalance = createSelector(
  [selectBalanceReducer],
  balance => balance.totalBalance
);
