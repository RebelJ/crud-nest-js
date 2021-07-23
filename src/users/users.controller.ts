import { Controller, Post, Body, Get, Param, Patch, } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * Class Users Controller 
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

   /**
   * Post Method to add a new user in the database.
   * @return user id generated
   */
    @Post()
    async addUser(
        @Body('email') userEmail: string,
        @Body('password') userPwd: string,
    ) {

        const generatedId = await this.usersService.insertUser(
            userEmail,
            userPwd,
   
        );
        return { id: generatedId };
    }

   /**
   * Get Method to get user information in the database identify by the id.
   * @param : user id 
   * @return user information
   */
    @Get(':id')
    async getUser(@Param('id') userId: string) {
        const user = await this.usersService.getUser(userId);
        return user;
    }

   /**
   * Patch Method to modify user password in the database identify by the id.
   * @param : user id
   * @return user information updated
   */
    @Patch(':id')
    updateUser(
        @Param('id') userId: string,
        @Body('email') userEmail: string,
        @Body('password') userPwd: string,
    
    ) {
        this.usersService.updateUser(userId, userEmail, userPwd);
        return null;
    }


}
