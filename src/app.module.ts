import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackModule } from './back/back.module';
import { MoService } from './mo/mo.service';
import { MoService } from './mid/mo/mo.service';
import { ClothesDbModule } from './clothes-db/clothes-db.module';

@Module({
  imports: [BackModule, ClothesDbModule],
  controllers: [AppController],
  providers: [AppService, MoService],
})
export class AppModule {}
