
var github = require('github');
var config = require("../config.github_pullrequests");
var cronJob = require('cron').CronJob;

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
  new cronJob(repository.cronInterval, function(){
    GithubClient.pullRequests.getAll({
        repo: repository.id,
        user: repository.owner,
        state: repository.state,
        per_page: 1000
    }, function(error, data) {
        if (error) return console.log('Error:', error);
        send_event(config.eventName, {label: repository.label, value: data.length});
    });
  }, null, true, null);
});