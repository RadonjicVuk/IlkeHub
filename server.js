const express = require('express')
const app = express()
const mongoose = require('mongoose')
const options = {
    extensions: ['htm', 'html']
}

mongoose.connect('mongodb+srv://Vuk:cafe4529@ilkehubcluster.jlsfbhd.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public', options))

app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on app http://localhost:${PORT}`))