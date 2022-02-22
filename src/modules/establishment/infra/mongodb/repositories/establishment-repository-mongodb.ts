import { Establishment } from '../../../../../shared/domain/Establishment'
import { EstablishmentModel } from '../../../../../shared/infra/database/mongodb/schemas/establishment-schema'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'

export class EstablishmentRepository implements IRepository<Establishment> {
  async find (params: Builder<Establishment>): Promise<Establishment[]> {
    return await EstablishmentModel.find(params)
  }

  async update (entity: Establishment, params: Builder<Establishment>): Promise<void> {
    void await EstablishmentModel.updateOne(params, entity)
  }

  async delete (params: Builder<Establishment>): Promise<void> {
    void await EstablishmentModel.deleteOne(params)
  }

  async save (entity: Establishment): Promise<void> {
    const establishment = new EstablishmentModel(entity)
    await establishment.save()
  }
}
