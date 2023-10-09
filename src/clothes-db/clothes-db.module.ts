import { Module } from '@nestjs/common';
import { ClothesDbService } from './clothes-db.service';
import { ClothesDbController } from './clothes-db.controller';

@Module({
  providers: [ClothesDbService],
  controllers: [ClothesDbController],
})
export class ClothesDbModule {}
