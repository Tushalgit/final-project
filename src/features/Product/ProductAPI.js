// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data })
  }
  );
}


export function fetchProductsByFilters(filter, sort, pagination) {

  // filter
  let queryString = '';
  for (let key in filter) {
    const categortValues = filter[key]
    if (categortValues.length) {
      const lastCategoryValue = categortValues[categortValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  // sort
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  // pagination
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }


  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({ data: { products: data, totalItems: +totalItems } })
  }
  );
}
