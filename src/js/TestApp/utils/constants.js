export const rootUrl = 'http://fengel.com/wp-json/wp/v2/'

export const endpoints = {
    posts: () => (`${rootUrl}posts`),
    post: id => (`${rootUrl}post/${id}`),
}
