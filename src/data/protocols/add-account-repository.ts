import { AddAccountModel } from '../../domain/usecases/addacount'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
