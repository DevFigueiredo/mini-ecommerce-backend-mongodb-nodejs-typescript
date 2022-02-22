import { Product } from '../../../../../shared/domain/product'
import { ProductModel } from '../../../../../shared/infra/database/mongodb/schemas/product-schema'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'

export class ProductRepository implements IRepository<Product> {
  async find (params: Builder<Product>): Promise<Product[]> {
    return await ProductModel.find(params)
  }

  async update (entity: Product, params: Builder<Product>): Promise<void> {
    void await ProductModel.updateOne(params, entity)
  }

  async delete (params: Builder<Product>): Promise<void> {
    void await ProductModel.deleteOne(params)
  }

  async save (entity: Product): Promise<void> {
    const establishment = new ProductModel(entity)
    await establishment.save()
  }
}
