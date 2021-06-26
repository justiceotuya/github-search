import React, { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks';
import { Result } from './component/Result';
import { ResultNoData } from './component/ResultNoData';
import { Search } from './component/Search';
import { StyledDashboard } from './style/Dashboard.style'
import {ISearchResult,TImageStatus,TSortType} from './types'

export const Dashboard = () => {


  const [searchInput, setSearchInput] = useState("")
  const [searchStatus, setSearchStatus] = useState<TImageStatus>('IDLE');
  const [searchResult, setSearchResult] = useState<ISearchResult[]>([])
  const [, setFilteredResult] = useState<ISearchResult[]>([])
  const [searchError, setSearchError] = useState(null)
  const [pagination, setPagination] = useState({
    count: 0,
    currentPage: 0,
    totalPage: 0
  })
  const [sortType, setSortType] = useState<TSortType>("ASC")

  //delay the search function to prevent rate limiting
  useDebounce(
    handleSearchUsersProfile
    ,
    1000,
    [searchInput],
  );

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  async function handleSearchUsersProfile() {
    if (searchInput !== "") {
      setSearchStatus("LOADING")
      const URL = `https://api.github.com/search/users?q=${searchInput}`
      try {
        const request = await fetch(URL)
        const response = await request.json()
        if (request.status === 200) {
          setSearchResult(handleSort([...response.items], "ASC"))
          calculatePaginationResult(response.items)
          setFilteredResult(searchResult.slice(((currentPage - 1) * 9), ((currentPage) * 9)))
          setSearchStatus("SUCCESS")
        } else {
          setSearchError(response.message)
          setSearchStatus("ERROR")
        }
      } catch (error) {
        setSearchError(error.message)
        setSearchStatus("ERROR")
      }
    }
  }

  function calculatePaginationResult(response: ISearchResult[]) {
    if (response.length !== 0)
      setPagination({
        ...pagination,
        count: response.length,
        currentPage: 1,
        totalPage: Math.ceil(response.length / 9)
      })
  }

  function handlePageNavigation(type: string) {
    const {
      currentPage,
      totalPage } = pagination
    if (type === "NEXT" && currentPage !==
      totalPage) {
      setPagination({
        ...pagination,
        currentPage: currentPage + 1
      })
      setFilteredResult(searchResult.slice(((currentPage - 1) * 9), ((currentPage) * 9)))
    } else if (type === "PREVIOUS" && currentPage !== 1) {
      setPagination({
        ...pagination,
        currentPage: currentPage - 1
      })
      setFilteredResult(searchResult.slice(((currentPage - 1) * 9), ((currentPage) * 9)))
    }
  }



  function handleSort(arr: ISearchResult[], type: "ASC" | "DESC"): ISearchResult[] {
    return arr.sort((a: ISearchResult, b: ISearchResult) => (a.login.toLowerCase() > b.login.toLowerCase()) && type === "ASC" ? 1 : -1)
  }

  function handleSortResult() {
    if (sortType === "ASC") {
      setSortType("DESC")
      setSearchResult(handleSort([...searchResult], "DESC"))
    } else {
      setSortType("ASC")
      setSearchResult(handleSort([...searchResult], "ASC"))
    }
  }


  const { currentPage, totalPage } = pagination
  return (
    <StyledDashboard>
      <div className="dashboard__container">
        <Search
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <ResultNoData
          searchStatus={searchStatus}
          searchError={searchError}
          handleSearchUsersProfile={handleSearchUsersProfile}
          searchResult={searchResult}
        />

        <Result
          searchStatus={searchStatus}
          searchResult={searchResult}
          handleSortResult={handleSortResult}
          sortType={sortType}
          currentPage={currentPage}
          handlePageNavigation={handlePageNavigation}
          totalPage={totalPage}
        />
      </div>
    </StyledDashboard>
  )
}
