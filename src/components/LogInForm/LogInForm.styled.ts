import styled from 'styled-components';

export const FormWrap = styled.div<{ isPage: boolean }>`
  form {
    display: ${props => props.isPage ? "block" : "flex"};
    justify-content: space-between;
    align-items: center;

    .input-wrap {
      position: ${props => props.isPage ? "static" : "relative"};
      margin-bottom: ${props => props.isPage ? "10px" : "0"};

      .err-msg {
        position: ${props => props.isPage ? "static" : "absolute"};
        bottom: ${props => props.isPage ? "5px" : "-20px"};
      }
    }

    .err-msg {
      color: red;
    }

    input, button {
      margin-right: ${props => props.isPage ? "0" : "10px"};
      width: ${props => props.isPage ? "320px" : "auto"};
    }
  }
`;