var response = require('response');

var server = require('flatsheet')({
  site: {
    title: 'data.seattle.io',
    email: 'hi@seattle.io',
    url: 'http://data.seattle.io', // include port here if not at port 80
    contact: 'Seth Vincent'
  },
  db: __dirname + '/data'
});

server.route('/', function (req, res) {
  if (!res.account) {
    return response()
      .html(server.render('index', {
        account: { username: 'friend' }
      }))
      .pipe(res);
  }
  else {
    res.writeHead(302, { 'Location': '/sheets' });
    res.end();
  }
});

server.listen(80);
