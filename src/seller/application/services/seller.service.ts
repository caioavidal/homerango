import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from '../../infrastructure/entities/seller.entity';
import {CreateSellerDto} from '../dto/seller/create-seller.dto';
import { SellerInput } from '../../graphql/inputs/seller.input';


@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private readonly sellerRepository: Repository<Seller>,
  ) {}

  findAll(): Promise<Seller[]> {
    return this.sellerRepository.find();
  }
  
  create(seller:CreateSellerDto): Promise<Seller>{
    
      return this.sellerRepository.save({...seller});
  }
}