import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from '../entities/seller.entity';


@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private readonly sellerRepository: Repository<Seller>,
  ) {}

  findAll(): Promise<Seller[]> {
    return this.sellerRepository.find();
  }
}