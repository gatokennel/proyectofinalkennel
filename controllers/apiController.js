const axios = require("axios");

const consultaCovid = async (req, res) => {
    try{
        const respuesta = await axios.get("https://api.covidtracking.com/v1/us/daily.json") //API SOBRE RESULTADOS COVID-19
        res.json({data: respuesta.data, status: respuesta.status})
    }catch (error){
        res.json({data: error.response.data, status: error.response.status})
        console.log(error)
    }
    
}

module.exports = { consultaCovid }