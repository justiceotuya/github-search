import styled from "styled-components"



export const StyledDashboard = styled.main`
background: #F7F8F9;
height: 100vh;
overflow: hidden;
padding: 32px 16px;
box-shadow: 0px 8px 16px -6px rgba(10, 31, 68, 0.08);
.app__title{
  font-size: 25px;
  margin-bottom:20px;
  padding-top:10px;
}
.dashboard__container {
  height: 100%;
  background-color: #fff;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 12px;
}

@media screen and (min-width: 700px){
padding: 54px 80px;
}

`;
