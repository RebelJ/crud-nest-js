import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';

/**
 * Class Users Service
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */ 

@Injectable()
export class UsersService {
    private user: User[] = [];

    /**
    * Set new user in the database.
    * @return user id
    */
    insertUser(email: string, password: string) {
        const userId = Math.random().toString();
        const newProducts = new User(userId, email, password);
        this.user.push(newProducts);
        return userId;
    }   

   /**
   * Get user with is email address in the database.
   * @return user informations
   */
    getUser(userId: string) {
        const user = this.findUser(userId)[0];
        return { ...user };
    }

   /**
   * Modify user password in the database.
   * @return boolean result
   */
    updateUser(id: string, email: string, password: string) {
        const [user, index] = this.findUser(id);
        const updateUser = { ...user };
        if (email) {
            updateUser.email = email;
        }
        if (password) {
            updateUser.password = password;
        }
        
        this.user[index] = updateUser;
    }

   /**
   * Get user information with is email address in the database.
   * @return user informations
   */
   private findUser(id: string): [User, number] {
        const userIndex = this.user.findIndex((prod) => prod.id === id)
        const user = this.user[userIndex];
        if (!user) {
            throw new NotFoundException('Could not found product. ')
        }
        return [user, userIndex];
    }
}
