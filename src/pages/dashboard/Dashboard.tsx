import React from 'react'
import {StyledDashboard} from './Dashbord.style'
interface Props {

}

export const Dashboard = (props: Props) => {
  return (
    <StyledDashboard>
      <div className="dashboard__container">
        <div className="dashboard__search"></div>
        <div className="dashboard__result">

        </div>
</div>
    </StyledDashboard>
  )
}
