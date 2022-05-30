import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StaticpcdService } from './staticpcd.service';

@Controller('staticpcd')
export class StaticpcdController {
    private readonly logger = new Logger('Static PCD');
    constructor(private readonly psdSevice: StaticpcdService) { }

    @UseGuards(JwtAuthGuard)
    @Get('getStaticPCDOutput')
    async getStaticPCDOutput() {
      try {
        this.logger.log("Request came")
        return await this.psdSevice.getStaticPCDOutput()
      } catch (error) {
          this.logger.error("read failed")
          return error
      }
   
    }
}
