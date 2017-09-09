export function postsHasErrored(state = false, action) {
    switch (action.type) {
        case 'POSTS_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function postsIsLoading(state = true, action) {
    switch (action.type) {
        case 'POSTS_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function posts(state = { isLoading: true }, action) {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return Object.assign({}, state, {
                isLoading: false,
                data: action.posts,
            })

        default:
            return state
    }
}
