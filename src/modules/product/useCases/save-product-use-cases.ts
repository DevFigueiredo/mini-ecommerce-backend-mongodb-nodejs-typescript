
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { ISaveProductUseCase, ISaveProductUseCaseParams, ISaveProductUseCaseResponse } from '../../../shared/protocols/useCases/product/create-product-use-cases'
import { Product } from '../../../shared/domain/product'
import api from '../../../shared/utils/api'
import { Establishment } from '../../../shared/domain/establishment'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { HttpStatusHelper } from '../../../shared/enums/http-status-helper'

export class SaveProductUseCase implements ISaveProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ entity }: ISaveProductUseCaseParams): Promise<ISaveProductUseCaseResponse> {
    entity._id = generateUUID()
    await this.getEstablishment(entity.establishmentId)
    await this.productRepository.save(entity)
    return entity._id
  }

  private async getEstablishment (establishmentId: string): Promise<Establishment> {
    try {
      const { data: establishment } = await api.get(`/establishment/${establishmentId}`)
      return establishment
    } catch (error) {
      if (error.response.status === HttpStatusHelper.NotFound) throw new NotFoundError('Establishment not found')
      throw error
    }
  }
}
