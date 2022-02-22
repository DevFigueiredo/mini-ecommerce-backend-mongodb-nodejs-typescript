import { Customer } from '../../../../../shared/domain/customers'
import { CustomerModel } from '../../../../../shared/infra/database/mongodb/schemas/customer-schema'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'

export class CustomerRepository implements IRepository<Customer> {
  async find (params: Builder<Customer>): Promise<Customer[]> {
    return await CustomerModel.find(params.where)
  }

  async update (entity: Customer, params: Builder<Customer>): Promise<void> {
    void await CustomerModel.updateOne(params.where, entity)
  }

  async delete (params: Builder<Customer>): Promise<void> {
    void await CustomerModel.deleteOne(params.where)
  }

  async save (entity: Customer): Promise<void> {
    const establishment = new CustomerModel(entity)
    await establishment.save()
  }
}
