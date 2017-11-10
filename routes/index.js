const Router = require('koa-router');
const fs = require('fs')
const router = new Router();

/* GET home page. */
router.get('/', (ctx) => {
  const stream = fs.createReadStream('./index.html')
  ctx.set('Content-Type', 'text/html;utf-8')
  ctx.body = stream
})

module.exports = router;
