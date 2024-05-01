import { AppState } from '../AppState'
import { Account } from '../models/Account'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async setLinkAsScrollElem(foundLink, scrollElem) {
    let position = await scrollElem.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: position, behavior: 'smooth' });
    logger.log(`Scrolled to HTMLElement:`, scrollElem)
    scrollElem.id = foundLink.id

    logger.log(`Scrolling to '${scrollElem.id}'`)
  }
}

export const accountService = new AccountService()
