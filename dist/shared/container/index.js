"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.register = void 0;
const awilix_1 = require("awilix");
const find_customer_use_cases_1 = require("../../modules/customers/useCases/find-customer-use-cases");
const save_customer_use_cases_1 = require("../../modules/customers/useCases/save-customer-use-cases");
const delete_customer_use_cases_1 = require("../../modules/customers/useCases/delete-customer-use-cases");
const update_customer_use_cases_1 = require("../../modules/customers/useCases/update-customer-use-cases");
const find_by_id_customer_use_cases_1 = require("../../modules/customers/useCases/find-by-id-customer-use-cases");
const customers_repository_mongodb_1 = require("../../modules/customers/infra/mongodb/repositories/customers-repository-mongodb");
const find_establishment_use_cases_1 = require("../../modules/establishment/useCases/find-establishment-use-cases");
const delete_establishment_use_cases_1 = require("../../modules/establishment/useCases/delete-establishment-use-cases");
const establishment_repository_mongodb_1 = require("../../modules/establishment/infra/mongodb/repositories/establishment-repository-mongodb");
const find_by_id_establishment_use_cases_1 = require("../../modules/establishment/useCases/find-by-id-establishment-use-cases");
const update_establishment_use_cases_1 = require("../../modules/establishment/useCases/update-establishment-use-cases");
const save_establishment_use_cases_1 = require("../../modules/establishment/useCases/save-establishment-use-cases");
const create_establishment_controller_1 = require("../infra/http/controllers/awilix-express/establishment/create-establishment-controller");
const create_user_use_cases_1 = require("../../modules/authentication/useCases/create-user-use-cases");
const update_user_use_cases_1 = require("../../modules/authentication/useCases/update-user-use-cases");
const upload_image_1 = require("../helpers/upload-image");
const customers_1 = require("../validators/customers");
const mongodb_1 = __importDefault(require("../infra/database/mongodb"));
const delete_user_use_cases_1 = require("../../modules/authentication/useCases/delete-user-use-cases");
const sign_with_email_and_password_use_cases_1 = require("../../modules/authentication/useCases/sign-with-email-and-password-use-cases");
const product_repository_mongodb_1 = require("../../modules/product/infra/mongodb/repositories/product-repository-mongodb");
const find_product_use_cases_1 = require("../../modules/product/useCases/find-product-use-cases");
const find_by_id_product_use_cases_1 = require("../../modules/product/useCases/find-by-id-product-use-cases");
const delete_product_use_cases_1 = require("../../modules/product/useCases/delete-product-use-cases");
const update_product_use_cases_1 = require("../../modules/product/useCases/update-product-use-cases");
const save_product_use_cases_1 = require("../../modules/product/useCases/save-product-use-cases");
const firebase_auth_1 = require("../../modules/authentication/infra/firebase/firebase-auth");
const firebase_admin_1 = require("../../modules/authentication/infra/firebase/firebase-admin");
const verify_token_use_cases_1 = require("../../modules/authentication/useCases/verify-token-use-cases");
const order_repository_mongodb_1 = require("../../modules/order/infra/order-repository-mongodb");
const add_product_order_use_cases_1 = require("../../modules/order/useCases/add-product-order-use-cases");
const create_order_order_use_cases_1 = require("../../modules/order/useCases/create-order-order-use-cases");
const list_product_order_use_cases_1 = require("../../modules/order/useCases/list-product-order-use-cases");
const flush_order_order_use_cases_1 = require("../../modules/order/useCases/flush-order-order-use-cases");
const remove_product_order_order_use_cases_1 = require("../../modules/order/useCases/remove-product-order-order-use-cases");
const update_order_order_use_cases_1 = require("../../modules/order/useCases/update-order-order-use-cases");
const api_1 = __importDefault(require("../utils/api"));
const sqs_1 = __importDefault(require("../utils/sqs"));
const delete_queue_use_case_1 = require("../../modules/queue/delete-queue-use-case");
const send_queue_use_case_1 = require("../../modules/queue/send-queue-use-case");
const receive_queue_use_case_1 = require("../../modules/queue/receive-queue-use-case");
const logger_service_1 = require("../../modules/logger/logger-service");
exports.register = {
    db: (0, awilix_1.asValue)(mongodb_1.default.connect(process.env.MONGO_URI)),
    api: (0, awilix_1.asValue)(api_1.default),
    sqs: (0, awilix_1.asValue)(sqs_1.default),
    logger: (0, awilix_1.asClass)(logger_service_1.Logger),
    firebaseAdmin: (0, awilix_1.asValue)(firebase_admin_1.admin),
    firebaseAuth: (0, awilix_1.asValue)(firebase_auth_1.auth),
    createEstablishmentController: (0, awilix_1.asClass)(create_establishment_controller_1.CreateEstablishmentController).singleton(),
    findCustomersUseCase: (0, awilix_1.asClass)(find_customer_use_cases_1.FindCustomersUseCase).singleton(),
    findByIdCustomerUseCase: (0, awilix_1.asClass)(find_by_id_customer_use_cases_1.FindByIdCustomerUseCase).singleton(),
    saveCustomersUseCase: (0, awilix_1.asClass)(save_customer_use_cases_1.SaveCustomersUseCase).singleton(),
    deleteCustomersUseCase: (0, awilix_1.asClass)(delete_customer_use_cases_1.DeleteCustomersUseCase).singleton(),
    updateCustomersUseCase: (0, awilix_1.asClass)(update_customer_use_cases_1.UpdateCustomersUseCase).singleton(),
    findEstablishmentsUseCase: (0, awilix_1.asClass)(find_establishment_use_cases_1.FindEstablishmentsUseCase).singleton(),
    findByIdEstablishmentUseCase: (0, awilix_1.asClass)(find_by_id_establishment_use_cases_1.FindByIdEstablishmentUseCase).singleton(),
    deleteEstablishmentsUseCase: (0, awilix_1.asClass)(delete_establishment_use_cases_1.DeleteEstablishmentsUseCase).singleton(),
    updateEstablishmentUseCase: (0, awilix_1.asClass)(update_establishment_use_cases_1.UpdateEstablishmentUseCase).singleton(),
    saveEstablishmentUseCase: (0, awilix_1.asClass)(save_establishment_use_cases_1.SaveEstablishmentUseCase).singleton(),
    findProductUseCase: (0, awilix_1.asClass)(find_product_use_cases_1.FindProductUseCase).singleton(),
    findByIdProductUseCase: (0, awilix_1.asClass)(find_by_id_product_use_cases_1.FindByIdProductUseCase).singleton(),
    deleteProductUseCase: (0, awilix_1.asClass)(delete_product_use_cases_1.DeleteProductUseCase).singleton(),
    updateProductUseCase: (0, awilix_1.asClass)(update_product_use_cases_1.UpdateProductUseCase).singleton(),
    saveProductUseCase: (0, awilix_1.asClass)(save_product_use_cases_1.SaveProductUseCase).singleton(),
    createOrderUseCase: (0, awilix_1.asClass)(create_order_order_use_cases_1.CreateOrderUseCase).singleton(),
    updateOrderUseCase: (0, awilix_1.asClass)(update_order_order_use_cases_1.UpdateOrderUseCase).singleton(),
    addProductOrderUseCase: (0, awilix_1.asClass)(add_product_order_use_cases_1.AddProductOrderUseCase).singleton(),
    listOrderUseCase: (0, awilix_1.asClass)(list_product_order_use_cases_1.ListOrderUseCase).singleton(),
    flushOrderUseCase: (0, awilix_1.asClass)(flush_order_order_use_cases_1.FlushOrderUseCase).singleton(),
    removeProductOrderUseCase: (0, awilix_1.asClass)(remove_product_order_order_use_cases_1.RemoveProductOrderUseCase).singleton(),
    authenticationCreateUseCase: (0, awilix_1.asClass)(create_user_use_cases_1.AuthenticationCreateUseCase).singleton(),
    authenticationUpdateUseCase: (0, awilix_1.asClass)(update_user_use_cases_1.AuthenticationUpdateUseCase).singleton(),
    authenticationDeleteUseCase: (0, awilix_1.asClass)(delete_user_use_cases_1.AuthenticationDeleteUseCase).singleton(),
    authenticationVerifyTokenUseCase: (0, awilix_1.asClass)(verify_token_use_cases_1.AuthenticationVerifyTokenUseCase).singleton(),
    authenticationSignEmailAndPasswordUseCase: (0, awilix_1.asClass)(sign_with_email_and_password_use_cases_1.AuthenticationSignEmailAndPasswordUseCase).singleton(),
    deleteQueueUseCase: (0, awilix_1.asClass)(delete_queue_use_case_1.DeleteQueueUseCase).singleton(),
    sendQueueUseCase: (0, awilix_1.asClass)(send_queue_use_case_1.SendQueueUseCase).singleton(),
    receiveQueueUseCase: (0, awilix_1.asClass)(receive_queue_use_case_1.ReceiveQueueUseCase).singleton(),
    customerRepository: (0, awilix_1.asClass)(customers_repository_mongodb_1.CustomerRepository).singleton(),
    establishmentRepository: (0, awilix_1.asClass)(establishment_repository_mongodb_1.EstablishmentRepository).singleton(),
    productRepository: (0, awilix_1.asClass)(product_repository_mongodb_1.ProductRepository).singleton(),
    orderRepository: (0, awilix_1.asClass)(order_repository_mongodb_1.OrderRepository).singleton(),
    uploadImage: (0, awilix_1.asClass)(upload_image_1.UploadImage).singleton(),
    custormersValidator: (0, awilix_1.asClass)(customers_1.CustormersValidator).singleton()
};
const container = (0, awilix_1.createContainer)().register(exports.register);
exports.container = container;
