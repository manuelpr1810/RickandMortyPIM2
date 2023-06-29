const axios = require("axios");


const getCharById = async (req, res)=>{
    const URL = "https://rickandmortyapi.com/api/character/";
    const {id} = req.params;
try {
    let response = await axios.get(URL+id)
    if ( response.data ){
        const{ name, gender, species, origin, image, status} = response.data;
        const character = {id, name, gender, species, origin, image, status }
    
        return character.name ?
        res.status(200).json(character) : res.status(404).send("Not found")
    }
} catch (error) {
    return  res.status(500).json({error : error.message})
}
};

module.exports = getCharById;