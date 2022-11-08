var express = require('express');
var router = express.Router();

const prisma = require('../prismaClient');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allMyUsers = await prisma.user.findMany()
  console.log(allMyUsers);
  res.send(allMyUsers)
});


module.exports = router;
