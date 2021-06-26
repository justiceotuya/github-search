
export interface ISearchResult {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
}
export type TImageStatus = 'IDLE' | 'LOADING' | 'ERROR' | 'SUCCESS';

export type TSortType = "ASC" | "DESC";

export interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  handlePageNavigation: (value: string) => void
}

export interface IResultProps {
  searchStatus: string;
  searchResult: ISearchResult[]
  handleSortResult: () => void;
  handlePageNavigation: (type: string) => void;
  sortType: TSortType;
  currentPage: number;
  totalPage: number;
}

export interface ISearchProps {
  searchInput: string
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IResultNoDataProps {
  searchStatus: TImageStatus;
  searchError: null | string;
  handleSearchUsersProfile: () => void;
  searchResult: ISearchResult[]
}
