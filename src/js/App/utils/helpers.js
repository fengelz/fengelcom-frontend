export const getTask = (id, arr) => (arr.find(() => (arr.id === id)))

export const replaceDynamicText = (text = '', taskProgress) => {
    let output = text
    for (let i = 0; i < taskProgress.steps.length; i += 1) {
        output = output.replace(`@{answer-${i + 1}}`, taskProgress.steps[i].answer)
    }
    return output
}

export const isIpad = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

export const viewportHeight = isIpad ? `${Math.max(document.documentElement.clientHeight, window.innerHeight)}px` : '100vh'

export const percentComplete = (total = 0, completed = 0) => Math.round((completed / total) * 100)

export const createMarkup = html => ({ __html: html })

export const modulus = (a, b) => (((a % b) + b) % b)

export const getCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    return parts.length === 2 ? parts.pop().split(';').shift() : ''
}

export const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`
}

export const formatDate = (date) => {
    // const monthNames = [
    //     'January', 'February', 'March',
    //     'April', 'May', 'June', 'July',
    //     'August', 'September', 'October',
    //     'November', 'December',
    // ]

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${day} / ${monthIndex + 1} / ${year}`
    // return `${day} ${monthNames[monthIndex]} ${year}`
}
