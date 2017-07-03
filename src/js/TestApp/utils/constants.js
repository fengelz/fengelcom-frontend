export const endpoints = {
    overview: lang => (`/assets/data/worlds.${lang}.json`),
    world: (id, lang) => (`/assets/data/world.${lang}.${id}.json`),
    task: (id, task, lang) => (`/assets/data/world.${lang}.${id}.${task}.json`),
    progress: userId => (`/assets/data/progress.${userId}.json`),
    saveProgress: taskId => (`/assets/data/progress.${taskId}.json`),
    sendFeedback: taskId => (`cymapi/feedback/save/${taskId}`),
    language: lang => (`/assets/data/lang.${lang}.json`),
}

// export const endpoints = {
//     overview: () => ('/assets/data/server/worlds.json'),
//     world: id => (`/assets/data/server/world.${id}.json`),
//     task: (id, task) => (`/assets/data/server/world.${id}.${task}.json`),
//     progress: userId => (`/assets/data/server/progress.${userId}.json`),
//     saveProgress: taskId => (`/assets/data/progress.${taskId}.json`),
//     sendFeedback: taskId => (`cymapi/feedback/save/${taskId}`),
//     language: lang => (`/assets/data/lang.${lang}.json`),
// }

export const progressStates = {
    pending: 'pending',
    completed: 'completed',
    locked: 'locked',
}

export const gameTypes = {
    uniLogin: 'uni-login',
    open: 'open',
}
