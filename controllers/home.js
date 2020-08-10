/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.db = (req, res) => {
  res.render('db', {
    title: 'Db'
  });
};