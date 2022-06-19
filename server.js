const express = require('express')
const app = express()
const options = {
    extensions: ['htm', 'html']
}

app.use(express.static('public', options))
app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on app http://localhost:${PORT}`))