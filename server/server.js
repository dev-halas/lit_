// packages import
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Proxy data from GIOS api");
});
app.get("/findAll", (req, res) => {
    const findAll = "https://api.gios.gov.pl/pjp-api/rest/station/findAll";
    axios.get(findAll).then(response => res.send(response.data));
});
app.get("/sensors/:id", (req, res) => {
    const sensors = `https://api.gios.gov.pl/pjp-api/rest/station/sensors/${req.params.id}`;
    axios.get(sensors).then(response => res.send(response.data));
});

app.get("/data/getData/:city", (req, res) => {
    const getData = `https://api.gios.gov.pl/pjp-api/rest/data/getData/${req.params.city}`;
    axios.get(getData).then(response => res.send(response.data));
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});