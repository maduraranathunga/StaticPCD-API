import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { User } from './Entity/user.entity';
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User,'postgres') private userRepository:Repository<User>){}

       
      async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({where:{username:username}});
      }

      async addUser(username:string,password:string){
        const saltRounds = 10;
        const pwhash =await bcrypt.hashSync(password, saltRounds);
        let newuser=this.userRepository.create({username:username,password:pwhash})
          return this.userRepository.insert(newuser)
      }

      async updateUser(userId:number,username:string,password:string){
        const saltRounds = 10;
        const pwhash =await bcrypt.hashSync(password, saltRounds);
        let newuser=this.userRepository.create({userId:userId,username:username,password:pwhash})
          return this.userRepository.save(newuser)
      }

      async deleteUser(userId:number){
        return this.userRepository.delete({userId:userId})
         
      }

}
