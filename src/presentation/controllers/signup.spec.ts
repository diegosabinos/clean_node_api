import { SingUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SingUpController => {
  return new SingUpController()
}

describe('SingUp Controller', () => {
  test('Should return 400 ir no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'qualquer_email@emai.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 ir no email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'qualquer nome',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 ir no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'qualquer nome',
        email: 'qualquer_email@emai.com',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 ir no passwordConfirmation is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'qualquer nome',
        email: 'qualquer_email@emai.com',
        password: 'password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
