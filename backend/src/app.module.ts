import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticpcdModule } from './staticpcd/staticpcd.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { User } from './users/Entity/user.entity';
import {Staticpcd} from './staticpcd/Entities/staticpcd.entity'
import { ConfigModule } from '@nestjs/config';

@Module({
   imports: [TypeOrmModule.forRoot(),
    
  TypeOrmModule.forRoot({
    name: 'postgres',
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'Belpostgre123',
    database: 'staticpcd_controlroom',
    synchronize: true,
    entities: [User],
  
  })
  ,StaticpcdModule, AuthModule, UsersModule],
  controllers: [AppController],
  // providers: [AppService,{
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard,
  // }],
})
export class AppModule {}
