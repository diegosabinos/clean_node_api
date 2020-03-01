import { SingUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SingUp Controller', () => {
  test('Should return 400 ir no name is provided', () => {
    const sut = new SingUpController()
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
    const sut = new SingUpController()
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
})
