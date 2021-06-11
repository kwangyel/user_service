import database from '../src/models';

class caseService{

    static async getAllCases(){
        try{
            const item = database.Case.findAll()
            return item
        }catch(err){
            throw err
        }
    }
	//get a subzone feature with zoneid provided
	static async getZone(zoneid){
		try {
			const result = await database.sequelize.query("select ST_AsGeoJSON(geom),zone_id from Thimphu_zones where zone_id = "+zoneid+";") 
			return result[0]
		}catch (error){
			console.log(error)
		}
	}
}
export default mapServices;
