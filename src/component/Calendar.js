import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {setDate_redux, setDate_day_redux} from '../setStore';
import {getLastDate, getStartDay, monthDown, monthUp} from '../functionList';

/* 월별 색상 1~12 (month color 1 ~ 12) */
const monthColor = [
  "#fd79a8",
  "#6c5ce7",
  "#55efc4",
  "#ff7675",
  "#00b894",
  "#a29bfe",
  "#74b9ff",
  "#ffeaa7",
  "#fdcb6e",
  "#e17055",
  "#cf6a87",
  "#dfe6e9"
]
/* 검(black), 파(blue), 빨(red) */
const dayColor = [
  "#2c3e50",
  "#25CCF7",
  "#eb2f06"
]
const color = [
  "#aaaaaa",
  "#2c3e50",
  "#25CCF7",
  "#eb2f06"
]
/* week text */
const week_text = ["日", "月", "火", "水", "木", "金", "土"]

const View_day = (props) => {
  const date = props.date;
  const color = props.color;
  const btnActive = props.active;
  const dispatch = useDispatch();

  const click = (e) =>{
    if(!btnActive){
      return
    }
    dispatch(setDate_day_redux(date))
  }
  return (
      <td onClick={click}>
        <Link to="./selMenu">
          <div>
            <p style={{color:color}}> {date} </p>
          </div>
        </Link>

      </td>
  )
}

const View_date = (props) => {
  const beforeMonth_lastDate = getLastDate(monthDown({year : props.date.year, month : props.date.month}));
  const startDay = props.startDay;
  const lastDate = props.lastDate;
  const weekCount = Math.ceil((startDay + lastDate) / 7)
  const array = [];
  for(let i = 0; i < weekCount; i++){array.push([])}
  let count = beforeMonth_lastDate - startDay + 1;
  let colorNum = 0;
  let thisMonth = false;
  /* set Calendar data*/
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j< 7; j++){

      /* set color Number */
      if(!thisMonth){
        colorNum = 0;
      }else{
        if(j == 0){
          colorNum = 3;
        }else if(j == 6){
          colorNum = 2;
        }else{
          colorNum = 1;
        }
      }
      /* append Data */
      array[i][j] = <View_day date={count} color={color[colorNum]} active={thisMonth} key={i+""+j}/>;
      count++;

      /* befor Month, now Month, afterMonth setter */
      if(i == 0 && count > beforeMonth_lastDate){
        count = 1;
        thisMonth = true;
      }else if(i != 0 && count > lastDate){
        count = 1;
        thisMonth = false;
      }
    }
  }

  return (
    <>
      {array.map((value, index)=>{
        return (
          <tr key={index}>
            {value}
          </tr>
        )
      })}
    </>
  )
}

export default (props) => {
  const [date, setDate] = useState(useSelector(s => s.date));
  const [lastDate, setLastDate] = useState(null)
  const [startDay, setStartDay] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
  }, [])

  useEffect(()=>{
    if(date){
      dispatch(setDate_redux(date))
      setLastDate(getLastDate(date))
      setStartDay(getStartDay(date))
    }
  }, [date])

  const onClick_beforeMonth = (e) => {
    setDate({...monthDown(date)})
  }

  const onClick_afterMonth = (e) => {
    setDate({...monthUp(date)})
  }

  return(
    <div className="Calendar center">
      <table className="Calendar-table border-blk">
        <thead className="Calendar-thead" style={{backgroundColor:monthColor[date.month-1]}}>
          <tr>
            <th colSpan="1" className="Calendar-monthDown" onClick={onClick_beforeMonth}> {"<"} </th>
            <th className="border-blk" colSpan="5"> {date?.year}年{date?.month}月 </th>
            <th colSpan="1" className="Calendar-monthUp" onClick={onClick_afterMonth}> {">"} </th>
          </tr>
        </thead>
        <tbody>
          <tr className="Calendar-week">
            <td style={{color:dayColor[2]}}> {week_text[0]} </td>
            <td style={{color:dayColor[0]}}> {week_text[1]} </td>
            <td style={{color:dayColor[0]}}> {week_text[2]} </td>
            <td style={{color:dayColor[0]}}> {week_text[3]} </td>
            <td style={{color:dayColor[0]}}> {week_text[4]} </td>
            <td style={{color:dayColor[0]}}> {week_text[5]} </td>
            <td style={{color:dayColor[1]}}> {week_text[6]} </td>
          </tr>
          <View_date date={date} startDay={startDay} lastDate={lastDate}/>
        </tbody>
      </table>
    </div>
  )
}
