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
    if (!foundLink.id === scrollElem.id) {
      return
    }
    foundLink.isActive = true
    await this.calculateYOffset(scrollElem)
    logger.log(`Scrolling to '${foundLink.id}...'`)
  }

  async calculateYOffset(scrollElem) {
    const yOffset = -65;
    let y = await scrollElem.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    logger.log(`Scrolled to HTMLElement:`, scrollElem, `@ offset Y-axis by ${yOffset}px.`)
  }
}

export const accountService = new AccountService()
