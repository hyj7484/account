import {Calendar} from '../component/index';
import {setDate_redux} from '../setStore';
import {getToday} from '../functionList';


export default (props) => {



  return (
    <div className="Home mainCon center center-text">
      <div>
        월별 내역 보기
      </div>
      <div className="Home_content">
        <Calendar />
      </div>
    </div>
  )
};
