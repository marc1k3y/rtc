const express = require("express")
const cors = require("cors")
const events = require("events")

const emitter = new events.EventEmitter()

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get("/connect", (req, res) => {
    res.writeHead(200, {
        "Connection": "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache"
    })
    emitter.on("newMsg", (msg) => {
        res.write(`data: ${JSON.stringify(msg)} \n\n`)
    })
})

app.post("/new-msg", (req, res) => {
    const msg = req.body
    emitter.emit("newMsg", msg)
    res.status(200)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))