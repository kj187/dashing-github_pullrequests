
module.exports = {

    eventName: 'github_pullrequests',

    client: {
        userAgent: 'PullRequest Dashboard',
        debug: false,
        protocol: 'https',
        host: 'api.github.com',
        auth: {
            token: 'xxx'
        },
    },

    repositories: [
        {
            cronInterval: '1 * * * * *',
            id: 'github-repository-name',
            label: 'repository-label',
            owner: 'kj187',
            state: 'open'
        },
        {
            cronInterval: '1 * * * * *',
            id: 'github-repository-name',
            label: 'repository-label2',
            owner: 'kj187',
            state: 'open'
        }
    ]

}