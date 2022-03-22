import { Establishment } from '../../../shared/domain/establishment'
import { Product } from '../../../shared/domain/product'
import { HttpStatusHelper } from '../../../shared/enums/http-status-helper'
import { MissingParamError } from '../../../shared/errors/missing-params-error'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IUpdateProductUseCase, IUpdateProductUseCaseParams } from '../../../shared/protocols/useCases/product/update-product-use-cases'
import api from '../../../shared/utils/api'

export class UpdateProductUseCase implements IUpdateProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ entity, params }: IUpdateProductUseCaseParams): Promise<void> {
    if (!params._id) {
      throw new MissingParamError('id')
    }
    await this.getEstablishment(entity.establishmentId)
    await this.productRepository.update(entity, { where: params })
  }

  private async getEstablishment (establishmentId: string): Promise<Establishment> {
    try {
      const { data: establishment } = await api.get(`/establishment/${establishmentId}`)
      return establishment
    } catch (error) {
      if (error?.response.status === HttpStatusHelper.NotFound) throw new NotFoundError('Establishment not found')
      throw error
    }
  }
}
