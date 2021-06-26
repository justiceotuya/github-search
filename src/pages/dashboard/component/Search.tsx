import React,{useRef,useEffect} from 'react'
import {StyledSearch} from '../style/Search.style'
import {ISearchProps} from '../types'


export const Search = (props: ISearchProps) => {
  const {searchInput,handleSearchInput} = props
  const inputRef = useRef<HTMLInputElement>(null);

    //focus input on load
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <StyledSearch>
          <input type="text" className="search__input" placeholder="Search user" value={searchInput} onChange={handleSearchInput} ref={inputRef} />
    </StyledSearch>
  )
}
