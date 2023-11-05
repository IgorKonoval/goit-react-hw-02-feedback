import styled from 'styled-components';
export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  text-transform: capitalize;
  border: solid 1px gray;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background-color: darkgrey;
    box-shadow: 3px 3px 8px 0px #5021d1, inset 4px 4px 15px 0px #5021d1;
  }
`;
