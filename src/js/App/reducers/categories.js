export function categoriesHasErrored(state = false, action) {
    switch (action.type) {
        case 'CATEGORIES_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function categoriesIsLoading(state = true, action) {
    switch (action.type) {
        case 'CATEGORIES_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function categories(state = { isLoading: true }, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return Object.assign({}, state, {
                isLoading: false,
                data: action.categories,
            })

        default:
            return state
    }
}
