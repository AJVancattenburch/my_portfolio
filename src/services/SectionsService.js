import { logger } from '../utils/Logger'

class SectionsService {

  async setLinkAsScrollElem(foundLink, scrollElem) {
    let position = await scrollElem.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: position, behavior: 'smooth' });
    logger.log(`Scrolled to HTMLElement:`, scrollElem)
    scrollElem.id = foundLink.id
    logger.log(`ScrollId: '${scrollElem.id}' matches NavLinkId: '${foundLink.id}'`)
  }
}

export const sectionsService = new SectionsService()
