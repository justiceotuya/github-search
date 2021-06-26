import React from 'react'
import { IResultNoDataProps } from '../types'
import { StyledResultNoData } from '../style/ResultNoData.style'


export const ResultNoData = (props: IResultNoDataProps) => {
  const {searchStatus,searchError,handleSearchUsersProfile, searchResult} = props
  return (
    <StyledResultNoData>
    {
          searchStatus === "LOADING" &&
          <div className="centered__page">
            <h1>Loading ...</h1>
          </div>
        }
        {
          searchStatus === "ERROR" &&
          <div className="centered__page">
            <p>{searchError}</p>
            <button onClick={handleSearchUsersProfile}>TRY AGAIN</button>
          </div>
        }
        {
          (searchStatus === "SUCCESS" && searchResult.length === 0) && <div className="dashboard__result">
            <div className="centered__page">
              <p>User not found</p>
            </div>
          </div>
        }
    </StyledResultNoData>
  )
}
