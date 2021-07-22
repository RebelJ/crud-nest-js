import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

/**
 * Class Users Module
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */

@Module({
    controllers: [UsersController],
    providers: [UsersService]

})
export class UsersModule {


}
