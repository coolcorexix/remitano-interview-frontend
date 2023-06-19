import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  input, button {
    width: 320px;
    margin-bottom: 10px;
  }
  .err-msg {
    color: red;
  }
`;
