var response = require('response');

var app = require('flatsheet')({
  site: {
    title: 'data.seattle.io',
    email: 'hi@seattle.io',
    url: 'http://data.seattle.io',
    contact: 'Seth Vincent'
  },
  views: __dirname + '/views',
  db: __dirname + '/data'
});

app.route('/', function (req, res) {
  var account = res.account || { username: 'friend' }
  
  app.sheets.list(function (err, sheets) {
    return response()
      .html(app.render('index', { account: account, sheets: sheets }))
      .pipe(res);
  });
});

app.listen(80)
