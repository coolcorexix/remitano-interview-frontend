import styled from 'styled-components';

export const SharingBtnMobile = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    width: 1280px;
    padding-bottom: 20px;
    border-bottom: 1px solid #6c757d;
  }

  .mobile-btn-group {
    display: flex;
    align-items: center;

    button, a {
      margin-left: 10px;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  
  .header-left {
    a {
      display: flex;
      align-items: center;
    }
    
    span {
      display: none;
      font-size: 1em;
      margin-left: 10px;

      @media screen and (min-width: 768px) {
        display: initial;
      }
    }

    img {
      height: 25px;
      width: 25px;
    }
    
    @media screen and (min-width: 768px) {
      span {
        font-size: 2em;
      }

      img {
        height: 45px;
        width: 45px;
      }
    }
  }

  .header-right {
    display: none;

    @media screen and (min-width: 768px) {
      position: relative;
      display: block;
    }
  }

  .err-msg {
    position: absolute;
    margin: 0;
    top: 100%;
    color: red;
  }
`;
