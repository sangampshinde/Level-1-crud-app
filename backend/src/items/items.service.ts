import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './entity/item.entity';


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository <Item>
    ){}


    createItem(item:Item):Promise<Item>{
        return this.itemsRepository.save(item)
    }

    findAllItem():Promise<Item[]>{
        return this.itemsRepository.find()
    }

    findOneItem(id: number): Promise< Item | null > {
        return this.itemsRepository.findOneBy({ id });
    }

    async updateItem(id: number, item: Item){
        await this.itemsRepository.update(id,item);
        return this.findOneItem(id);
    }

    async removeItem(id: number): Promise<void>{
        await this.itemsRepository.delete(id)
    }



}