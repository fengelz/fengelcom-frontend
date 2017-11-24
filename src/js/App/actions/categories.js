// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

export function categoriesHasErrored(bool) {
    return {
        type: 'CATEGORIES_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function categoriesIsLoading(bool) {
    return {
        type: 'CATEGORIES_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        categories,
    }
}

export function fetchCategories(url) {
    return (dispatch) => {
        dispatch(categoriesIsLoading(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(categoriesIsLoading(false))
                return response
            })
            .then(response => response.json())
            .then((categories) => {
                dispatch(fetchCategoriesSuccess(categories))
            })
            .catch(() => dispatch(categoriesHasErrored(true)))
    }
}
