const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res)=>{
    const {id} = req.params;

    axios.get(URL+id)
    .then(({ data })=>{
        const{ name, gender, species, origin, image, status} = data;
        const character = {id, name, gender, species, origin, image, status }
    
        return character.name ?
        res.status(200).json(character)
        : res.status(404).send("Not found")
    })
    .catch((err)=>{
       return  res.status(500).send(message.error)
    })

};

module.exports = getCharById;