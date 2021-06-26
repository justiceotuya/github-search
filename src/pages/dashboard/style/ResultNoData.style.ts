import styled from "styled-components"

export const StyledResultNoData = styled.div`

.centered__page {
       height: fit-content;
    min-height: 50vh;
    padding: 30px;
    display: grid;
    place-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8A94A6;

    p{
      margin-bottom: 15px;
    }


  button {
       width: fit-content;
    margin: 10px auto;
    background: #00A6EF;
border-radius: 12px;
font-weight: 500;
font-size: 14px;
line-height: 150%;
text-align: center;
color: #FFFFFF;
padding: 8px 28px;
border:none;
transform: translateX(0);
transition: .3s transform ease-in;
margin-right:8px;
cursor:pointer;

:disabled{
  opacity: .5;
cursor:not-allowed;

}
:active {
transform: translateY(3px);
}
  }
}

`
