export const rootUrl = '//fengel.com/wp-json/wp/v2/'

export const endpoints = {
    posts: () => (`${rootUrl}posts`),
    post: id => (`${rootUrl}posts/${id}`),
}
