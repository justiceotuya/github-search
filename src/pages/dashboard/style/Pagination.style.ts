import styled from 'styled-components'

export const StyledPagination = styled.div`
  padding: 20px 10px;

  button {
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
  @media screen and (min-width: 700px){
  padding: 20px 50px;
}
`
