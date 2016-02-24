class Dashing.GithubPullrequests extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered

  onData: (data) ->
    truncateString = (str, length) ->
      if str.length > length then str.substring(0, length - 3) + '...' else str

    widgetNode = $(@node)
    if widgetNode.find('.repository[data-repository="' + data.label + '"]').length > 0
      widgetNode.find('.repository[data-repository="' + data.label + '"]').find('.value').html(data.value)
    else
      repositoryListItem = widgetNode.find('.repository[data-repository=""]').clone()
      repositoryListItem.find('.label').html(truncateString(data.label, 17)).attr('href', data.url)
      repositoryListItem.find('.value').html(data.value)
      repositoryListItem.attr('data-repository', data.label)
      repositoryListItem.prependTo(widgetNode.find('.repositories'))