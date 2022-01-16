hello, please read this readme in raw, thank you

rtc - real time chat

default - websocket app

start server
    cd server
    npm install
    npm start

client start
    cd client
    npm install
    npm start

you can select longpulling or eventsource or websocket app
    for server
        package.json
        change string
        "start": "nodemon longpulling/eventsource/websocket.js"
    for client
        App.js
        change rendering component
        LongPulling.jsx/EventSource.jsx/WebSock.jsx
