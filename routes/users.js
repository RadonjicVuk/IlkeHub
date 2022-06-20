const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', async (req, res) => {
    if(req.query.id === undefined){
        res.json(await User.find({}))
    }else{
        User.find({_id: req.query.id}, async (err, content) =>{
            if(content === undefined){
                return res.sendStatus(400)
            }
            res.json(content)
        })
    } 
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    if(!user.name || !user.password){
        res.sendStatus(400)
    }else{
        console.log()
        await user.save()
        res.json(user)
    }
})

// ! DODATI DELETION ZA USERE

module.exports = router