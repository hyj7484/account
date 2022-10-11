import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default (props) => {
  const date = useSelector(s => s.date)
  return (
    <div className="SelectDateMenu border-blk center mainCon">
      <div className="SelectDateMene-content center">
        <Link to={`/account/${date.day}`}><div className="center center-text border-blk margin-10 button button-pupple"> 가계부 </div> </Link>
        <Link to={`/schedule/${date.day}`}><div className="center center-text border-blk margin-10 button button-sky"> 스케줄 </div> </Link>
      </div>
    </div>
  )

}
