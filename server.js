const express = require('express')
const app = express()

app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on app http://localhost:${PORT}`))