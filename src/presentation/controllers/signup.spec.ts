import { SingUpController } from './signup'

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
  })
})
