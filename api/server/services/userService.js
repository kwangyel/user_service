import database from '../src/models';
// import bcrypt from 'bcryptjs'

class userService{

    static async login(username,pass){
        try{
            const user = await database.User.findOne({
                where:{username: username},
                raw:true
            })
            return null
        }catch(error){
            throw error
        }
    }

    static async getPassHash(cid){
        try{
            const user = await database.User.findOne({
                where:{cid : cid},
                raw:true
            })
            if(user==null){
                return null
            }
            return user['password']
        }catch(error){
            throw error
        }
    }

	static async retrieve(id){
		try{
			const user= await database.User.findOne({
                where:{id:Number(id)}
            })
            return user
		}catch(error){
			throw error
		}
    }
    //retrieve info for a particular unit
	static async getAUser(cid){
		try{
			const user= await database.User.findOne({
                where:{cid:Number(cid)}
            })
            console.log(user)
            return user
		}catch(error){
			throw error
		}
    }
    
    //add info for a user
    static async addUser(data){
        try{
            const updatedItem=await database.User.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }


    //delete unit info. Warning: use this with caution
    static async deleteUser(id){
        try{
            const toDelete=await database.User.findOne({
                where:{id:Number(id)}
            })
            if(toDelete){
                const deletedItem=await database.User.destroy({
                    where:{id:Number(id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }


    //update existing unit info
    static async updateUser(id,data){
        try{
            const toUpdate= await database.User.findOne({
                where:{id:Number(id)}
            })
            if(toUpdate){
                const updatedItem = await database.User.update(data,{
                    where:{id:Number(id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

}

export default userService;