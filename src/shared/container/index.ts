import { createContainer, asClass, asValue } from 'awilix'
import { FindCustomersUseCase } from '../../modules/customers/useCases/find-customer-use-cases'
import { SaveCustomersUseCase } from '../../modules/customers/useCases/save-customer-use-cases'
import { DeleteCustomersUseCase } from '../../modules/customers/useCases/delete-customer-use-cases'
import { UpdateCustomersUseCase } from '../../modules/customers/useCases/update-customer-use-cases'
import { FindByIdCustomerUseCase } from '../../modules/customers/useCases/find-by-id-customer-use-cases'
import { CustomerRepository } from '../../modules/customers/infra/mongodb/repositories/customers-repository-mongodb'
import { FindEstablishmentsUseCase } from '../../modules/establishment/useCases/find-establishment-use-cases'
import { DeleteEstablishmentsUseCase } from '../../modules/establishment/useCases/delete-establishment-use-cases'
import { EstablishmentRepository } from '../../modules/establishment/infra/mongodb/repositories/establishment-repository-mongodb'
import { FindByIdEstablishmentUseCase } from '../../modules/establishment/useCases/find-by-id-establishment-use-cases'
import { UpdateEstablishmentUseCase } from '../../modules/establishment/useCases/update-establishment-use-cases'
import { SaveEstablishmentUseCase } from '../../modules/establishment/useCases/save-establishment-use-cases'
import { CreateEstablishmentController } from '../infra/http/controllers/awilix-express/establishment/create-establishment-controller'
import { AuthenticationCreateUseCase } from '../../modules/authentication/useCases/create-user-use-cases'
import { AuthenticationUpdateUseCase } from '../../modules/authentication/useCases/update-user-use-cases'
import { UploadImage } from '../helpers/upload-image'
import { CustormersValidator } from '../validators/customers'
import MongoDB from '../infra/database/mongodb'
import { AuthenticationDeleteUseCase } from '../../modules/authentication/useCases/delete-user-use-cases'
import { AuthenticationSignEmailAndPasswordUseCase } from '../../modules/authentication/useCases/sign-with-email-and-password-use-cases'
import { ProductRepository } from '../../modules/product/infra/mongodb/repositories/product-repository-mongodb'
import { FindProductUseCase } from '../../modules/product/useCases/find-product-use-cases'
import { FindByIdProductUseCase } from '../../modules/product/useCases/find-by-id-product-use-cases'
import { DeleteProductUseCase } from '../../modules/product/useCases/delete-product-use-cases'
import { UpdateProductUseCase } from '../../modules/product/useCases/update-product-use-cases'
import { SaveProductUseCase } from '../../modules/product/useCases/save-product-use-cases'
import { auth } from '../../modules/authentication/infra/firebase/firebase-auth'
import { admin } from '../../modules/authentication/infra/firebase/firebase-admin'
import { AuthenticationVerifyTokenUseCase } from '../../modules/authentication/useCases/verify-token-use-cases'
import { OrderRepository } from '../../modules/order/infra/order-repository-mongodb'
import { AddProductOrderUseCase } from '../../modules/order/useCases/add-product-order-use-cases'
import { CreateOrderUseCase } from '../../modules/order/useCases/create-order-order-use-cases'
import { ListOrderUseCase } from '../../modules/order/useCases/list-product-order-use-cases'
import { FlushOrderUseCase } from '../../modules/order/useCases/flush-order-order-use-cases'
import { RemoveProductOrderUseCase } from '../../modules/order/useCases/remove-product-order-order-use-cases'
import { UpdateOrderUseCase } from '../../modules/order/useCases/update-order-order-use-cases'

export const register = {
  // utils
  db: asValue(MongoDB.connect(process.env.MONGO_URI)),

  // auth
  firebaseAdmin: asValue(admin),
  firebaseAuth: asValue(auth),

  // controllers
  createEstablishmentController: asClass(CreateEstablishmentController).singleton(),

  // use cases
  findCustomersUseCase: asClass(FindCustomersUseCase).singleton(),
  findByIdCustomerUseCase: asClass(FindByIdCustomerUseCase).singleton(),
  saveCustomersUseCase: asClass(SaveCustomersUseCase).singleton(),
  deleteCustomersUseCase: asClass(DeleteCustomersUseCase).singleton(),
  updateCustomersUseCase: asClass(UpdateCustomersUseCase).singleton(),

  findEstablishmentsUseCase: asClass(FindEstablishmentsUseCase).singleton(),
  findByIdEstablishmentUseCase: asClass(FindByIdEstablishmentUseCase).singleton(),
  deleteEstablishmentsUseCase: asClass(DeleteEstablishmentsUseCase).singleton(),
  updateEstablishmentUseCase: asClass(UpdateEstablishmentUseCase).singleton(),
  saveEstablishmentUseCase: asClass(SaveEstablishmentUseCase).singleton(),

  findProductUseCase: asClass(FindProductUseCase).singleton(),
  findByIdProductUseCase: asClass(FindByIdProductUseCase).singleton(),
  deleteProductUseCase: asClass(DeleteProductUseCase).singleton(),
  updateProductUseCase: asClass(UpdateProductUseCase).singleton(),
  saveProductUseCase: asClass(SaveProductUseCase).singleton(),
  createOrderUseCase: asClass(CreateOrderUseCase).singleton(),
  updateOrderUseCase: asClass(UpdateOrderUseCase).singleton(),

  addProductOrderUseCase: asClass(AddProductOrderUseCase).singleton(),
  listOrderUseCase: asClass(ListOrderUseCase).singleton(),
  flushOrderUseCase: asClass(FlushOrderUseCase).singleton(),
  removeProductOrderUseCase: asClass(RemoveProductOrderUseCase).singleton(),

  authenticationCreateUseCase: asClass(AuthenticationCreateUseCase).singleton(),
  authenticationUpdateUseCase: asClass(AuthenticationUpdateUseCase).singleton(),
  authenticationDeleteUseCase: asClass(AuthenticationDeleteUseCase).singleton(),
  authenticationVerifyTokenUseCase: asClass(AuthenticationVerifyTokenUseCase).singleton(),
  authenticationSignEmailAndPasswordUseCase: asClass(AuthenticationSignEmailAndPasswordUseCase).singleton(),

  // repositories
  customerRepository: asClass(CustomerRepository).singleton(),
  establishmentRepository: asClass(EstablishmentRepository).singleton(),
  productRepository: asClass(ProductRepository).singleton(),
  orderRepository: asClass(OrderRepository).singleton(),

  // helpers
  uploadImage: asClass(UploadImage).singleton(),

  // validators
  custormersValidator: asClass(CustormersValidator).singleton()

}

const container = createContainer().register(register)

export { container }
