import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from "./entity/item.entity"

@Module({
  imports:[
    TypeOrmModule.forFeature([Item])
  ],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
