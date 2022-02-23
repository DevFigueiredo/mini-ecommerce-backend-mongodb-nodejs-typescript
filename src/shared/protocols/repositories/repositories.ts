import { Builder } from './builder'

export interface IRepository<Entity> {
  find: (params: Builder<Entity>) => Promise<Entity[]>
  update: (entity: Entity, params: Builder<Entity>) => Promise<void>
  delete: (params: Builder<Entity>) => Promise<void>
  save: (entity: Entity) => Promise<void>
}
