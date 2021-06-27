import styled from 'styled-components'
import { TSortType } from '../types';
import { ReactComponent as SortIcon } from '../assets/caret.svg'

export const StyledResult = styled.div`
overflow-y: auto;
    height: calc(100vh - 150px);

.dashboard__table{
   width: calc(100% - 20px);
   margin: 20px 10px 0 10px;
 background: #FFFFFF;
box-shadow: 0px 8px 16px -6px rgba(10, 31, 68, 0.08);
border-radius: 12px 12px 0px 0px;

  thead {
    background: #F7F8F9;
     height: 40px;
 border-radius: 2px;
     text-align: left;
     color: #8A94A6;
  }

  tbody > tr {
border: 1px solid #F1F2F4;
  }
  th{
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
line-height: 150%;
color: #8A94A6;
  }

  td {
 padding: 15px 20px;
  }

tbody > tr {
  :hover {
    background: #F5FCFD;
  border-radius: 2px;
  }
}
.name__header{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.SortIcon{
        display: flex;
    flex-direction: column;
    margin-left: 8px;
}
  .user__details{
    display: flex;
    align-items: center;
  }

  .user__avatar{
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin-right: 12px;

  }
.user__name,.user__type{
  font-weight: 500;
font-size: 14px;
line-height: 150%;
color: #0A1F44;
}

.user__type{
  font-weight: normal;
}
}


@media screen and (min-width: 700px){
    height: calc(100vh - 200px);

    .dashboard__table {
   width: calc(100% - 100px);
 margin: 20px 50px 0 50px;

 .user__details{
}
.user__type{
  width: 160px;
}
    }
}
`

export const ArrowUpIcon = styled(SortIcon) <{ $sortType: TSortType }>`
transform: rotateX(180deg);
    width: 10px;
    height: 8px;
    color: ${props => props.$sortType === "ASC" && "#00A6EF"}
`
export const ArrowDownIcon = styled(SortIcon) <{ $sortType: TSortType }>`
   width: 10px;
    height: 8px;
    color: ${props => props.$sortType === "DESC" && "#00A6EF"}
`;
