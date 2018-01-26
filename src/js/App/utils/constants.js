export const rootUrl = '//fengel.com/wp-json/wp/v2/'

export const endpoints = {
    categories: () => (`${rootUrl}categories`),
    categoryPosts: cat => (`${rootUrl}posts?categories=${cat}`),
    posts: () => (`${rootUrl}posts?per_page=100`),
    post: id => (`${rootUrl}posts/${id}`),
}
