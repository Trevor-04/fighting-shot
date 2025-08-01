const express = require('express')
const db = require('./db')
const userRoutes = require('./routes/users_routes')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW() as current_time')
    res.json({
      message: 'Hello World! Database connected successfully.',
      db_time: result.rows[0].current_time
    })
  } catch (error) {
    console.error('Database connection error:', error)
    res.status(500).json({
      message: 'Hello World! But database connection failed.',
      error: error.message
    })
  }
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  
});
