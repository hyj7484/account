
export function setDate_redux(props) {
  return {
    type : "changeDate",
    date : props
  }
}

export function setDate_day_redux(props){
  return {
    type : "changeDate-day",
    date : props
  }
}

// export {changeDate, changeDate_day}
