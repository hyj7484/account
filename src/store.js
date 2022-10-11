import { createStore } from 'redux';

const dateObj = new Date();
const init_redux = {
  date :{
    year : dateObj.getFullYear(),
    month : dateObj.getMonth() + 1,
    day : 1
  }
}

export default createStore((state, action) => {
  const {type, date} = action
  console.log(date, action)
  if(!state){
    return init_redux;
  }else if(type == "changeDate"){
    state.date = action.date
    return state;
  }else if(type == "changeDate-day"){
    state.date.day = action.date
    return state
  }
  return state
});
