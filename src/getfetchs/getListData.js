
export function itemsFetchData(url, dispatch, itemsFetchDataSuccess) {
      fetch(url)
          .then((response) => response.json())
          .then((items) => {
              dispatch(itemsFetchDataSuccess(items.results))
          })
}
