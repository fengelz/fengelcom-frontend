// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

export function pageHasErrored(bool) {
    return {
        type: 'POST_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function pageIsLoading(bool) {
    return {
        type: 'POST_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchPagesSuccess(page) {
    return {
        type: 'FETCH_POST_SUCCESS',
        page,
    }
}

export function fetchPage(url) {
    return (dispatch) => {
        dispatch(pageIsLoading(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(pageIsLoading(false))
                return response
            })
            .then(response => response.json())
            .then((page) => {
                dispatch(fetchPagesSuccess(page))
            })
            .catch(() => dispatch(pageHasErrored(true)))
    }
}
