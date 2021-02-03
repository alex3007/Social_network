var express = require('express');
var router = express.Router();

const jsonParser = express.json();
const users = require('./users.json');

var usersList = users;

// owner
var user = {
    id: 1,
    email: 'user@gmail.com',
    login: 'User',
    password: '123',
    profile: {
        fullName: 'User',
        lookingForAJob: 'yes',
        aboutMe: 'GoodMan',
        scills: 'React',
        posts: [
            {id: 1, message: 'Frontend is my pleasure', likesCount: 11},
            {id: 2, message: 'You are successful if you like your job', likesCount: 15}
        ]
    },
    status: 'Hello',

};

// getUsers
router.get('/', (req, res) => {
    res.json(usersList);
})


//follow-unfollow

router.put('/', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    usersList = usersList.map(i => {
        if (i.id === req.body.id) {
            return {...i, followed: true}
        }
        return i
    })

    res.json({resultCode: 0});
})


router.delete('/', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    usersList = usersList.map(i => {
        if (i.id === req.body.id) {
            return {...i, followed: false}
        }
        return i
    })

    res.json({resultCode: 0});
})


// getAuth
router.get('/auth', (req, res) => {
    if (user.email !== null) {
        res.json({
            id: user.id,
            email: user.email,
            login: user.login,
            resultCode: 0
        });
    } else {
        res.json({
            resultCode: 1
        })
    }
})

// getProfile
router.get('/profile', (req, res) => {

    res.json(
        user.profile
    );
})

// getUserProfile
router.put('/profile', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }

    let owner = usersList.find(f => f.id === req.body.userId);

    res.json(
        owner.profile
    );
})

// saveProfile
router.post('/profile', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let profile = req.body.profile;
    user = {...user, profile: profile};
    res.json({
        resultCode: 0
    })
})


// getStatus
router.get('/status', (req, res) => {

    res.json(
        user.status
    );
})

// updateStatus
router.put('/status', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let status = req.body.status;
    user = {...user, status: status};
    res.json({
        resultCode: 0
    })
})

// login
router.post('/auth', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let email = req.body.email;
    let password = req.body.password;
    user = {...user, email: email, password: password};
    res.json({
        resultCode: 0
    })
})

// logout
router.delete("/auth", jsonParser, function (req, res) {
    user = {...user, email: null, password: null};
    res.json({
        resultCode: 0
    });
});


module.exports = router;
