import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { ItemsService } from './items.service';
import { Item } from './entity/item.entity';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemService:ItemsService ){}

    @Post()
    create(@Body() item:Item){
        return this.itemService.createItem(item);
    }

    @Get()
    findAll(){
        return this.itemService.findAllItem();
    }

    @Get(':id')
    findOne(@Param() id:string){
        return this.itemService.findOneItem(+id);
    }

    @Put(':id')
    update(@Param() id:string,@Body() item:Item){
        return this.itemService.updateItem(+id,item)
    }

    @Delete(':id')
    delete(@Param() id:string){
        return this.itemService.removeItem(+id);
    }
    
}
