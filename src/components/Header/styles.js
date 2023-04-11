import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  z-index: 2;
  flex-direction: column;
  width: 100%;
  min-height: 58px;
  background-color: #301e67;

  @media (min-width: 760px) {
    height: 75px;
  }

  @media (min-width: 1440px) {
    height: 84px;
  }
`;

export const I = styled.i`
  display: flex;
  color: #5b8fb9;
  font-size: 38px;
  width: 38px;
  justify-self: center;
  height: 58px;
  line-height: 58px;
  margin-left: 16px;

  @media (min-width: 760px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.6s;
  overflow-y: hidden;

  @media (min-width: 760px) {
    visibility: visible;
    overflow-y: visible;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 166px;
  padding-top: 19px;
  padding-bottom: 19px;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 75px;
    padding: 0px;
  }

  @media (min-width: 1440px) {
    justify-content: right;
    height: 94px;
  }
`;

export const Li = styled.li`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: solid #03001c 1px;

  @media (min-width: 760px) {
    flex: 1;
    text-align: center;
    border-bottom: none;
    padding-bottom: 0px;
    border-right: solid #03001c 2px;
  }

  @media (min-width: 1440px) {
    flex: 0;
    padding: 0px 40px;
  }
`;

export const LiWithoutBorder = styled.li`
  @media (min-width: 760px) {
    flex: 1;
    text-align: center;
  }

  @media (min-width: 1440px) {
    flex: 0;
    padding-right: 20px;
    padding-left: 40px;
  }
`;

export const Page = styled.p`
  color: ${({ active }) => (active ? '#5B8FB9' : '#B6EADA')};
  font-size: ${({ active }) => (active ? '26px' : '20px')};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: ${({ active }) => (active ? '' : 'scale(1.2)')};
    color: ${({ active }) => (active ? '' : '#5B8FB9')};
  }

  @media (min-width: 1440px) {
    font-size: ${({ active }) => (active ? '32px' : '24px')};
  }
`;
