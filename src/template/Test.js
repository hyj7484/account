import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux';

export default (props) => {
  const params = useParams();
  const d = useSelector(state => state.date)
  console.log(d)
  console.log(params)
  return (
    <div>
      test template
    </div>
  )
}
