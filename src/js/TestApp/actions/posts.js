// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

export function postsHasErrored(bool) {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function postsIsLoading(bool) {
    return {
        type: 'POSTS_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts,
    }
}

export function fetchPosts(url) {
    return (dispatch) => {
        dispatch(postsIsLoading(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(postsIsLoading(false))
                return response
            })
            .then(response => response.json())
            .then((posts) => {
                dispatch(fetchPostsSuccess(posts))
            })
            .catch(() => dispatch(postsHasErrored(true)))
    }
}
