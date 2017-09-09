// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

export function postHasErrored(bool) {
    return {
        type: 'POST_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function postIsLoading(bool) {
    return {
        type: 'POST_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchPostsSuccess(post) {
    return {
        type: 'FETCH_POST_SUCCESS',
        post,
    }
}

export function fetchPost(url) {
    return (dispatch) => {
        dispatch(postIsLoading(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(postIsLoading(false))
                return response
            })
            .then(response => response.json())
            .then((post) => {
                dispatch(fetchPostsSuccess(post))
            })
            .catch(() => dispatch(postHasErrored(true)))
    }
}
