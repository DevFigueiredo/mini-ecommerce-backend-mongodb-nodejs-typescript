import { Customer } from '../../../../../shared/domain/customers'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'

export class CustomerRepository implements IRepository<Customer> {
  private readonly collectionName = 'customers'
  private readonly db

  constructor ({ db }: any) {
    this.db = db
  }

  async find (params: Builder<Customer>): Promise<Customer[]> {
    return []
  }

  async update (entity: Customer, params: Builder<Customer>): Promise<void> {
  }

  async delete (params: Builder<Customer>): Promise<void> {

  }

  async save (entity: Customer): Promise<void> {

  }
}
