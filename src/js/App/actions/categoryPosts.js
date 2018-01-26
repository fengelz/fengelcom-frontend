// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

if (!window.Promise) {
    window.Promise = Promise
}

export function categoryPostsHasErrored(bool) {
    return {
        type: 'CATEGORY_POSTS_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function categoryPostsIsLoading(bool) {
    return {
        type: 'CATEGORY_POSTS_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchPostsSuccess(categoryPosts) {
    return {
        type: 'FETCH_CATEGORY_POSTS_SUCCESS',
        categoryPosts,
    }
}

export function fetchCategoryPosts(url) {
    return (dispatch) => {
        dispatch(categoryPostsIsLoading(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(categoryPostsIsLoading(false))
                return response
            })
            .then(response => response.json())
            .then((categoryPosts) => {
                dispatch(fetchPostsSuccess(categoryPosts))
            })
            .catch(() => dispatch(categoryPostsHasErrored(true)))
    }
}
