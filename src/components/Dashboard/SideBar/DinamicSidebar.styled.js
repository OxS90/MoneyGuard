import styled from 'styled-components';

export const DinamicSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 0 32px;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
