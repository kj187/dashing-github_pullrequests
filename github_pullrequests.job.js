var github = require('github');
var config = require("../config/config.github_pullrequests");
var cronJob = require('cron').CronJob;
var jobs = [];

var GithubClient = new github({
    version:  '3.0.0',
    debug:    config.client.debug,
    protocol: config.client.protocol,
    host:     config.client.host,
    timeout:  5000,
    headers:  {
        'user-agent': config.client.userAgent
    }
});

GithubClient.authenticate({
    type:  'oauth',
    token: config.client.auth.token
});

config.repositories.forEach(function(repository) {
    var update = function() {
        GithubClient.pullRequests.getAll({
            repo: repository.id,
            user: repository.owner,
            state: repository.state,
            per_page: 1000
        }, function(error, data) {
            if (error) return console.log('Error:', error);

            send_event(config.eventName, {
                label: repository.label,
                value: data.length,
                url: 'https://github.com/' + repository.owner + '/' + repository.id + '/pulls'
            });
        });
    };

    jobs.push(update);
    new cronJob(repository.cronInterval, update, null, true, null);
});

function updateAll() {
    jobs.forEach(function(update){
        update();
    });
}

module.exports.update = updateAll;