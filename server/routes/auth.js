var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { PrismaClient } = require('@prisma/client')
const { getUserByEmail } = require('./users');

dotenv.config();

const prisma = new PrismaClient()

async function tokenify(user) {

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(user, jwtSecretKey, { expiresIn: '100s' });
    return token;

}

async function untokenify(token){
    let user = jwt.verify(token,process.env.JWT_SECRET_KEY);
    return user;
}

router.post('/', async function (req, res, next) {

    const user = await getUserByEmail(req.body.email, req.body.password);
    if (user == null) {

        res.status(401);
        res.send("User does not exist!");

    }

    else {
        const token = await tokenify(user);

        res.send({ token: token });
    }
})


router.get('/',async function(req,res,next){
    const user = await untokenify(req.headers['authorization']);
    res.send({user:user});
});

module.exports = router;
