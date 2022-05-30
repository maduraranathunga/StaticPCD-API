import { Body, Controller, Post } from '@nestjs/common';
import { User } from './Entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Post('addUser')
    async addUser(@Body() user:User){
        return await this.usersService.addUser(user.username,user.password)
    }

    @Post('updateUser')
    async updateUser(@Body() user:User){
        return await this.usersService.updateUser(user.userId,user.username,user.password)
    }

    @Post('deleteUser')
    async deleteUser(@Body() user:any){
        return await this.usersService.deleteUser(user.userId)
    }

}
