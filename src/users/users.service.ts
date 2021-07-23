import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/**
 * Class Users Service
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */ 

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }

    /**
    * Set new user in the database.
    * @return user id
    */
     async insertUser(email: string, pwd: string) {
        const userId = Math.random().toString();
        const newProducts = new this.userModel({
            email: email,
            password: pwd
        });
        const result = await newProducts.save().then();

        return result.id as string;
    }   

   /**
   * Get user with is email address in the database. 
   * @return user informations
   */
    async getUser(userId: string) {
        const user = await this.findUser(userId);
        return { id: user.id, email: user.email, password: user.password };
    }

   /**
   * Modify user password in the database.
   * @return boolean result
   */
   async updateUser(id: string, email: string, password: string) {
        const userUpdated = await this.findUser(id);
    
        if (email) {
            userUpdated.email = email;
        }
        if (password) {
            userUpdated.password = password;
        }
        
       userUpdated.save();
    }

   /**
   * Get user information with is email address in the database.
   * @return user informations
   */
    private async findUser(id: string): Promise<User> {
        let userFind;
        try {
            userFind = await this.userModel.findById(id).exec();
        } catch(error) {
            throw new NotFoundException('Could not found user.')
        }
       
        if (!userFind) {
            throw new NotFoundException('Could not found user.')
       }
        return userFind;
    }
}
