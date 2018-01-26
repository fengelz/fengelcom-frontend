export function categoryPostsHasErrored(state = false, action) {
    switch (action.type) {
        case 'CATEGORY_POSTS_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function categoryPostsIsLoading(state = true, action) {
    switch (action.type) {
        case 'CATEGORY_POSTS_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function categoryPosts(state = { isLoading: true }, action) {
    switch (action.type) {
        case 'FETCH_CATEGORY_POSTS_SUCCESS':
            return Object.assign({}, state, {
                isLoading: false,
                data: action.categoryPosts,
            })

        default:
            return state
    }
}
