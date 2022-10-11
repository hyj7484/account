import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setDate_redux, setDate_day_redux} from '../setStore';
import {getLastDate, monthDown, monthUp, getToday} from '../functionList';
import {Link} from 'react-router-dom';

const sampleData = [
  {
    division : "ss",
    amount : "100",
    content : "asdf \r\n asdfds<br/> afdsasf"
  },
  {
    division : "ss",
    amount : "100",
    content : `asdf<br/> asdfds<br/> afdsasf`
  },
  {
    division : "ss",
    amount : "100",
    content : `asdf<br/> asdfds<br/> afdsasf`
  },
  {
    division : "ss",
    amount : "100",
    content : `asdf<br/> asdfds<br/> afdsasf`
  }
]


const getBeforeDay = (date) => {
  if(date.day == 1){
    date = monthDown(date);
    date.day = getLastDate(date);
    return date;
  }else{
    date.day -= 1;
    return date;
  }
}

const getAfterDay = (date) => {
  if(date.day == getLastDate(date)){
    date = monthUp(date);
    date.day = 1;
    return date;
  }else {
    date.day += 1;
    return date;
  }
}

const View_prtAccountList = (props) => {
  return (
    <>
      {sampleData.map((value, index)=>{
        return (
          <tr key={index}>
            <td >{value.division}</td>
            <td >{value.amount}</td>
            <td >{value.content}</td>
          </tr>
        )
      })}
    </>
  )
}

export default (props) => {
  const [date, setDate] = useState(useSelector(s => s.date))
  const [accountList, setAccountList] = useState();
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(date)
  }, [])
  useEffect(()=>{
    if(date){
      console.log(date)
      dispatch(setDate_redux(date))
    }
  }, [date])
  const clickLeft = (e) => {
    setDate({...getBeforeDay(date)})
  }
  const clickRight = (e) => {
    setDate({...getAfterDay(date)})
  }
  const setToday = () => {
    setDate({...getToday()})
  }
  return(
    <div className="account mainCon center">
      <div className="account-list">
        <ul>
          <li className="account-list-today"> <Link to="/"> HOME </Link></li>
          <li className="account-list-today" onClick={setToday}> today </li>
          <li> </li>
        </ul>
      </div>
      <div className="account-header center-text">
        <div className="account-header-left border-blk" onClick={clickLeft}> {"<"} </div>
        <div className="account-header-center border-blk"> {date.year}年 {date.month}月 {date.day}日 </div>
        <div className="account-header-right border-blk" onClick={clickRight}> {">"} </div>
      </div>
      <div className="account-content">
        <table className="account-table">
          <thead className="account-table-head">
            <tr>
              <th className="border-blk"> 구분 </th>
              <th className="border-blk"> 금액 </th>
              <th className="border-blk"> 내용 </th>
            </tr>
          </thead>
          <tbody className="account-table-body">
            <View_prtAccountList />
          </tbody>
        </table>
      </div>
    </div>
  )
}
