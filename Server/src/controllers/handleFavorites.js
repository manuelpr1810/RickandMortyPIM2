

let myFavorites = [];

const postFav = (req, res)=>{
    try {
        myFavorites.push(req.body)
        return res.status(200).json(myFavorites)
    } catch (error) {res.status(400).json({error : error.message})   
    }
};

const deleteFav = (req, res)=>{
    const {id} = req.params;
    try {
        const deletedChar = myFavorites.filter((char)=> char.id !== id);
        myFavorites = deletedChar;
        return res.status(200).json(myFavorites)
    } catch (error) {res.status(400).json({error : error.message})
    }
};

module.exports = {postFav, deleteFav};