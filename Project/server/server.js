const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(
	cors({
		origin: ['http://localhost:3000'],
		methods: ['POST', 'GET'],
		credentials: true,
	})
)
app.use(express.json())

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db') 
let sql

app.post('/signup', (req, res) => {
	sql = 'INSERT INTO login(name,email,password) VALUES (?,?,?)'
	db.run(sql, [`${req.body.name}`,`${req.body.email}`,`${req.body.password}`], (err, data) => {
		if (err) {
			return res.json(err)
		}
		res.json({ answer: 'Success' })
	})

})

app.post('/login', async (req, res) => {
	sql = `SELECT * FROM login WHERE name = ? AND password = ?`
	db.all(sql, [`${req.body.name}`,`${req.body.password}`], (err, data) => {
		if (err) return res.json('Error')

		if (data.length > 0) {
			return res.json(data)
		} else {
			res.json('Not found');
		}
	})
})

app.listen(8081, () => {
	console.log(`starting server`)
})
