import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entity/item.entity';


@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'crud-db',
      entities:[Item],
      synchronize:true
    }),
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
