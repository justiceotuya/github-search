import styled from "styled-components"
export const StyledSearch = styled.div`

  height: 70px;
  background: #F7F8F9;
border-radius: 12px;
  border-radius: 12px 12px 0 0;
  display: flex;
  border: 1px solid #0A1F44;
  box-shadow: 0px 8px 16px -6px rgba(10, 31, 68, 0.08);

input {
  color:#0A1F44;
  border: 1px solid #0A1F44;
font-size: 24px;
border-radius: 12px 12px 0 0;
outline: transparent;
  ::placeholder{
    color: #B0B7C3;
  }
  :focus{
    box-shadow: 0px 0px 0px 2px #32BDD1;
  }
}

.search__input{
background: transparent;
width: 100%;
 border-radius: 12px 12px 0 0;
 border:none;
 padding: 20px;
}

`
