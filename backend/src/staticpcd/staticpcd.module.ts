import { Module } from '@nestjs/common';
import { StaticpcdController } from './staticpcd.controller';
import { StaticpcdService } from './staticpcd.service';

@Module({
  controllers: [StaticpcdController],
  providers: [StaticpcdService]
})
export class StaticpcdModule {}
