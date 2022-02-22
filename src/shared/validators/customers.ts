import { Customer } from '../domain/customers'
import { ICustormersValidator } from './interfaces/ICustormersValidator'
import JoiBase, { Root } from 'joi'
import JoiDate from '@joi/date'
import { InvalidParamError } from '../errors/invalid-param-error'

const Joi = JoiBase.extend(JoiDate) as Root
class CustormersValidator implements ICustormersValidator {
  validateOnSave (customer: Customer): void {
    const schema = Joi.object({
      firstName: Joi.string().min(2).max(40).required().messages({
        'string.min': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.',
        'string.max': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.',
        'any.required':
                    'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres..',
        'string.empty': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.'
      }),
      lastName: Joi.string().min(2).max(80).required().messages({
        'string.min':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres.',
        'string.max':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres.',
        'any.required':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres..',
        'string.empty':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres..'
      }),
      email: Joi.string().email().required().messages({
        'string.min': 'O e-mail passado é inválido.',
        'any.required': 'O e-mail passado é inválido.',
        'string.empty': 'O e-mail passado é inválido.',
        'string.email': 'O e-mail passado é inválido.'
      }),
      password: Joi.string().min(8).required().messages({
        'string.min': 'Senha inválida. Deve conter no mínimo 8 (oito) caracteres com números e letras.',
        'any.required': 'Senha inválida. Deve conter no mínimo 8 (oito) caracteres com números e letras',
        'string.empty': 'Senha inválida. Deve conter no mínimo 8 (oito) caracteres com números e letras'
      }),
      cpf: Joi.string().required().min(11).max(11).messages({
        'string.min': 'Requisição inválida. O CPF passado é inválido.',
        'string.max': 'Requisição inválida. O CPF passado é inválido.',
        'string.empty': 'Requisição inválida. O CPF passado é inválido.'
      }),
      gender: Joi.string().valid('masculino', 'feminino', 'outros', '', null).messages({
        'any.only': 'O gender pode aceitar apenas *masculino, feminino ou outros*.'
      }),
      birthDate: Joi.date().format('YYYY-MM-DD').allow('', null).messages({
        'date.base': 'Data de nascimento inválida.',
        'any.required': 'Data de nascimento inválida.'
      }),
      postalCode: Joi.string().max(10).allow('', null).messages({
        'string.max': 'O postalCode pode ter no máximo 10 caracteres'
      }),
      country: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O country pode ter no máximo 255 caracteres'
      }),
      state: Joi.string().max(2).allow('', null).messages({
        'string.max': 'O state pode ter no máximo 2 caracteres'
      }),
      city: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O city pode ter no máximo 255 caracteres'
      }),
      publicPlace: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O publicPlace pode ter no máximo 255 caracteres'
      }),
      number: Joi.string().max(20).allow('', null).messages({
        'string.max': 'O number pode ter no máximo 20 caracteres'
      }),
      district: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O district pode ter no máximo 255 caracteres'
      }),
      supplement: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O supplement pode ter no máximo 255 caracteres'
      })
    })
    const { error } = schema.validate(customer, {
      allowUnknown: true,
      messages: {
        'any.required': 'Requisição inválida. Informações do cliente são obrigatórias.'
      }
    })

    if (error?.details?.length > 0) {
      throw new InvalidParamError(error.details[0].message)
    }
  }

  validateOnUpdate (customer: Customer): void {
    const schema = Joi.object({
      id: Joi.string(),
      firstName: Joi.string().min(2).max(40).required().messages({
        'string.min': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.',
        'string.max': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.',
        'any.required':
                    'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres..',
        'string.empty': 'O campo nome deve ser preenchido e deve conter no minimo 2 e no máximo 40 caracteres.'
      }),
      lastName: Joi.string().min(2).max(80).required().messages({
        'string.min':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres.',
        'string.max':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres.',
        'any.required':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres..',
        'string.empty':
                    'O campo sobrenome deve ser preenchido e deve conter no minimo 2 e no máximo 80 caracteres..'
      }),
      email: Joi.string().email().max(255).required().messages({
        'string.min': 'O e-mail passado é inválido.',
        'any.required': 'O e-mail passado é inválido.',
        'string.empty': 'O e-mail passado é inválido.',
        'string.email': 'O e-mail passado é inválido.',
        'string.max': 'O campo email deve conter no máximo 255 caracteres.'
      }),
      rg: Joi.string().max(50).allow('', null).messages({
        'string.max': 'O campo pode conter no máximo 50 caracteres.'
      }),
      gender: Joi.string().valid('masculino', 'feminino', 'outros').messages({
        'any.only': 'O genero pode aceitar apenas *masculino, feminino ou outros*.'
      }),
      phoneNumber: Joi.string()
        .min(10)
        .max(11)
        .messages({
          'string.min': 'O campo telefone deve conter no minimo 10 caracteres.',
          'string.max': 'O campo telefone deve conter no máximo 11 caracteres.'
        })
        .allow('', null),
      birthDate: Joi.date().format('YYYY-MM-DD').allow('', null).messages({
        'date.base': 'Data de nascimento inválida.',
        'any.required': 'Data de nascimento inválida.',
        'date.format': 'Data de nascimento inválida. Deve possuir o formato YYYY-MM-DD'
      }),
      postalCode: Joi.string().max(10).allow('', null).messages({
        'string.max': 'O postalCode pode ter no máximo 10 caracteres'
      }),
      country: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O country pode ter no máximo 255 caracteres'
      }),
      state: Joi.string().max(2).allow('', null).messages({
        'string.max': 'O state pode ter no máximo 2 caracteres'
      }),
      city: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O city pode ter no máximo 255 caracteres'
      }),
      publicPlace: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O publicPlace pode ter no máximo 255 caracteres'
      }),
      number: Joi.string().max(20).allow('', null).messages({
        'string.max': 'O number pode ter no máximo 20 caracteres'
      }),
      district: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O district pode ter no máximo 255 caracteres'
      }),
      supplement: Joi.string().max(255).allow('', null).messages({
        'string.max': 'O supplement pode ter no máximo 255 caracteres'
      })
    })

    const { error } = schema.validate(customer, {
      allowUnknown: true,
      messages: {
        'any.required': 'Requisição inválida. Informações do cliente são obrigatórias.'
      }
    })

    if (error?.details?.length > 0) {
      throw new InvalidParamError(error.details[0].message)
    }
  }
}

export { CustormersValidator }
