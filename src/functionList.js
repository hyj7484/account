/*
  get Last Date
  argument type : object
  key : year, month

  return 해당 월의 Last Date ( 1 ~ 31 )
  return type : number
*/
export function getLastDate(date){
  return new Date(date?.year, date?.month, 0).getDate();
}

/*
  get Start Day (해당 월의 시작 요일 습득)
  argument type : object
  key : year, month

  return : 해당 월의 시작 요일 (0 ~ 6) 0 : 일, 1 : 월 ... 5 : 금, 6 : 토
  return type : number
*/
export function getStartDay(date){
  return new Date(date?.year, date?.month-1, 1).getDay();
}


/*
  month Down
  argument type : object
  key : year, month

  return 이전월로 수정하여 반환
  * 1월일 경우 년, 월 수정
  return type : object
*/
export function monthDown(argDate){
  if(argDate.month > 1){
    argDate.month -= 1
  }else{
    argDate.year -= 1
    argDate.month = 12
  }
  return argDate
}

/*
  month Up
  argument type : object
  key : year, month

  return 다음 월로 수정하여 반환
  * 12월일 경우 년, 월 수정
  return type : object
*/
export function monthUp(argDate){
  if(argDate.month < 12){
    argDate.month += 1
  }else{
    argDate.year += 1
    argDate.month = 1
  }
  return argDate
}

/*
  get Today
  return type : object

  key : year, month, day
*/
export function getToday(){
  const dateObj = new Date();
  const date = {
    year : dateObj.getFullYear(),
    month : dateObj.getMonth() + 1,
    day : dateObj.getDate()
  }
  return date
}
