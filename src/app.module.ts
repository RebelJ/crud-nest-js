import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://francoisdamien:Dj4tIzft3YkPBYGQ@clustercrud.cbfiv.mongodb.net/cruddb?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
