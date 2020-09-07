module.exports = function (app, streams) {

  var index = function (req, res) {
    res.render('index', {
      title: 'Streaming',
      header: 'live streaming',
      username: 'Username',
      share: 'Share this link',
      footer: 'prabh@live.in',
      id: req.params.id
    });
  };

  var displayStreams = function (req, res) {
    var streamList = streams.getStreams();
    var data = (JSON.parse(JSON.stringify(streamList)));

    res.status(200).json(data);
  };

  app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
}