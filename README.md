# GitHub PullRequest widget

Author: [Julian Kleinhans](https://github.com/kj187) · Blog: [http://blog.kj187.de](http://blog.kj187.de)

[Dashing-JS](https://github.com/fabiocaseri/dashing-js) is a NodeJS port of [Dashing](http://dashing.io/), an Sinatra based framework that lets you build beautiful dashboards.

The GitHub PullRequest widget is a widget which provides a list of configured repositories and the amount of current open Pull Requests. 
 
## Preview 

![GitHub Pull Request widget](http://res.cloudinary.com/kj187/image/upload/v1453148622/dashing-pullreq_naai9p.png)

## Requirements

[Dashing-JS](https://github.com/fabiocaseri/dashing-js)
```ssh
$ npm install -g dashing-js
```

Widget dependencies
```shell
$ npm install github
$ npm install cron
```

## Installation
```shell
$ dashing-js install https://github.com/kj187/dashing-github_pullrequests/archive/master.zip
```
Create a new directory `config` on your root directory.
Move the `widgets/github_pullrequests/config.github_pullrequests.sample.js` file to this directory and rename it to `config.github_pullrequests.js`.
 
```
assets/
  ...
config/
  config.github_pullrequests.js
  ...
dashboards/
  ...
jobs/
  ...
...
```

## Usage
To include the widget on your dashboard, add the following snippet to the dashboard layout file:

```html
<li data-row="1" data-col="1" data-sizex="1" data-sizey="1" style="background-color:#666">
  <div data-title="Pull Requests" data-id="github_pullrequests" data-view="GithubPullrequests" class="widget"></div>
  <i class="fa fa-github-square icon-background"></i>
</li>
```
Or if you use Jade as your favorite template engine 
```jade
li(data-row='1', data-col='1', data-sizex='1', data-sizey='1', style='background-color:#666')
  div(data-id='github_pullrequests', data-view='GithubPullrequests', data-title='Pull Requests', class='widget')
  i(class='fa fa-github-square icon-background')
```

## Settings

```javascript
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
```

### Global settings
| Setting       | Example              | Description                |
| ------------- |----------------------| ---------------------------|
| eventName     | github_pullrequests  | Event name, must be the same as the `data-id` attribute |

### Client settings
| Setting       | Example              | Description                |
| ------------- |----------------------| ---------------------------|
| userAgent     | PullRequest Dashboard  | GitHub is happy with an unique user agent |
| debug     | false  | Debug mode |
| protocol     | https  | Http protocol of GitHub |
| host     | api.github.com  | Host of GitHub |
| auth.token     | xxx  | Personal GitHub API token. [Blogpost](https://github.com/blog/1509-personal-api-tokens) |

### Repositories settings
You can define multiple repositories

| Setting       | Example              | Description                |
| ------------- |----------------------| ---------------------------|
| cronInterval     | 1 * * * * *  | Click [here](https://github.com/ncb000gt/node-cron) for available cron patterns |
| id     | github-repository-name  | Must be the GitHub repository name |
| label     | repository-label  | The label of the repository which is displayed in the widget |
| owner     | kj187  | The owner of the repository |
| state     | open  | The state of pull requests, could be open or closed |

## Changelog

### release-1.0.0
* First release

## Other Dashing-JS widgets
Do you know that I also created some other Dashing-JS widgets? Try out

* [Jenkins Job widget](http://kj187.github.io/dashing-jenkins_job/)
* [GitHub PullRequest widget](http://kj187.github.io/dashing-github_pullrequests/)
* [TargetProcess Impediments widget](http://kj187.github.io/dashing-targetprocess_impediments/)
* [TargetProcess Sprint widget](http://kj187.github.io/dashing-targetprocess_sprint/)
* [TargetProcess Burndown widget](http://kj187.github.io/dashing-targetprocess_burndown/)
