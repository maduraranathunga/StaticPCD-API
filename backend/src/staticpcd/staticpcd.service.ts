import { Injectable } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class StaticpcdService {
  
      async getStaticPCDOutput(){
        return getConnection().query('EXEC spFRToM3GetMinPSDByScheduleForControlRoom')
      }
}
