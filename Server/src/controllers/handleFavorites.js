let myFavorites = [];

const postFav = (req, res)=>{
myFavorites.push(req.body)
return res.status(200).json(myFavorites)

};

const deleteFav = (req, res)=>{
    const {id} = req.params;
    const deletedChar = myFavorites.filter((char)=>{
        console.log(char.id !== id);
        return char.id !== id
    })
    myFavorites = deletedChar;
    return res.status(200).json(myFavorites)
};

module.exports = {postFav, deleteFav};