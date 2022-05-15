const express = require('express');
const app = express();

const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get('/api', (req, res) => {
    const data = {
        "movies": [
            { "name": "Volver al Futuro", "priceDay": 200, "priceNight": 300 },
            { "name": "Stars Wars", "priceDay": 200, "priceNight": 300 },
            { "name": "Carrozas de Fuego", "priceDay": 200, "priceNight": 300 },
            { "name": "Titanic", "priceDay": 200, "priceNight": 300 },
            { "name": "Tonto y re Tonto", "priceDay": 200, "priceNight": 300 },
        ]
    }
    res.json(data)
    res.send(JSON.stringify(data))
})
//strarting
app.listen(3001, () => {
    console.log(`Server On Port  ${3001} `)
});

