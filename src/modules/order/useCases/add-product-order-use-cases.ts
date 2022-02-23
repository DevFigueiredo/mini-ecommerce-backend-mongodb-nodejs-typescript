import { Establishment } from '../../../shared/domain/Establishment'
import { Product } from '../../../shared/domain/product'
import { HttpStatusHelper } from '../../../shared/enums/http-status-helper'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IAddProductOrderUseCase, IAddProductOrderUseCaseParams } from '../../../shared/protocols/useCases/order/add-product-order-use-cases-interface'
import api from '../../../shared/utils/api'

export class AddProductOrderUseCase implements IAddProductOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ entity, params }: IAddProductOrderUseCaseParams): Promise<void> {
    console.log(entity)
    const { description, _id: productId, establishmentId, title, price } = await this.getProduct(entity.productId)
    const { name: establishmentName } = await this.getEstablishment(establishmentId)
    await this.orderRepository.addProduct({ description, title, establishmentId, quantity: entity.quantity, productId, price, establishmentName }, { where: { ...params } })
  }

  private async getProduct (productId: string): Promise<Product> {
    try {
      const { data: product } = await api.get(`/product/${productId}`)
      return product
    } catch (error) {
      if (error.response.status === HttpStatusHelper.NotFound) throw new NotFoundError('Product not found')
      throw error
    }
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
