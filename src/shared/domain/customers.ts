import { GenderEnum } from '../enums/gender-enum'

export class Customer {
  _id?: string
  firstName!: string
  lastName!: string
  email!: string
  password!: string
  cpf!: string
  rg!: string
  gender!: GenderEnum
  birthDate!: Date
  phoneNumber!: string
  postalCode!: string
  country!: string
  state!: string
  city!: string
  publicPlace!: string
  number!: string
  district!: string
  supplement!: string
  createdAt!: Date
  updatedAt!: Date
}
