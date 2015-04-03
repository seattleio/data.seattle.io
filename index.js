var response = require('response');

var app = require('flatsheet')({
  site: {
    title: 'data.seattle.io',
    email: 'hi@seattle.io',
    url: 'http://data.seattle.io', // include port here if not at port 80
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

app.listen((process.env.PORT || 3333), function () {
  console.log('server started at 127.0.0.1:' + (process.env.PORT || 3333));
});
