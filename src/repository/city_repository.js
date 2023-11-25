const {City} = require("../models/index")

class CityRepository{

async createCity({name}){  
    try{
        const city = await City.create(
            {
                name : name,
            }
        )
       return city;     
    }
    catch(error){
        console.log("there is an error while creating a city")
        throw{error};
    }
    }

    async  deleteCity({cityid}){
        try{    
        City.destroy({
            where :{
                id : cityid
            }
        });
        }
        catch(error){
            console.log("there is an error while deleting  a city")
            throw{error};
        }
    }


    async getCity({cityid})
    {
        try{
            const city = await City.findOne({
                where: {
                    id : cityid,
                }
            })         
          return city;
        }
        catch(error)
        {
            throw {error}
        }
    }

    async updateCity({cityid, data}){     
        try{
            const city = City.update({
                where :{
                    id : cityid
                }
            })               
            return city;
        }
        catch(error)
        {
            throw {error}
        }    
    }
}



module.exports =  CityRepository

