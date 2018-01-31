
export function itemsFetchData(url, dispatch, itemsFetchDataSuccess) {
      fetch(url)
          .then((response) => response.json())
          .then((items) => {
              dispatch(itemsFetchDataSuccess(items.results))
          })
}

export function getDetail(id, dispatch, getDetailSuccess,getCastSuccess) {
    fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US')
        .then((response) => response.json())
        .then((items) => {
            dispatch(getDetailSuccess(items))
        });
    fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US')
        .then((response) => response.json())
        .then((items) => {
            
            dispatch(getCastSuccess(items.cast))
        });
}

export function getDetailRemind(id,dateremind, dispatch, addNewRemind) {
    fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US')
        .then((response) => response.json())
        .then((items) => {
            dispatch(addNewRemind(items,dateremind))
        });
}