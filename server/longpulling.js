const express = require("express")
const cors = require("cors")
const events = require("events")

const emitter = new events.EventEmitter()

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get("/get-msg", (req, res) => {
    emitter.once("newMsg", (msg) => {
        res.json(msg)
    })
})

app.post("/new-msg", (req, res) => {
    const msg = req.body
    emitter.emit("newMsg", msg)
    res.status(200)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))