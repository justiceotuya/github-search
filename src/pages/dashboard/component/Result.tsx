import React from 'react'
import { IResultProps, ISearchResult } from '../types';
import { Pagination } from './index'
import { StyledResult, ArrowUpIcon, ArrowDownIcon } from '../style/Result.style'

export const Result = (props: IResultProps) => {
  const { searchStatus, searchResult, handleSortResult, sortType, currentPage, handlePageNavigation, totalPage } = props;

  return (searchStatus === "SUCCESS" && searchResult.length > 0) ? <StyledResult>
    <table className="dashboard__table">
      <thead>
        <tr>
          <th role="button" onClick={handleSortResult} className="name__header">
            <span>
              Name
            </span>
            <span className="SortIcon">
              <ArrowUpIcon $sortType={sortType} />
              <ArrowDownIcon $sortType={sortType} />
            </span>

          </th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          searchResult.slice(((currentPage - 1) * 9), ((currentPage) * 9)).map((result: ISearchResult) => {
            const { id, login, avatar_url, type } = result
            return (<tr key={id}>
              <td className="user__details">
                <img src={avatar_url} alt={avatar_url} className="user__avatar" />
                <p className="user__name">{login}</p></td>
              <td className="user__type">{type}</td>
            </tr>)
          })
        }
      </tbody>
    </table>


    <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      handlePageNavigation={handlePageNavigation}
    />

  </StyledResult> : null
}
