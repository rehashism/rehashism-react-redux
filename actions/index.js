export const DISCARD_CARD = 'DISCARD_CARD'

export const discardCard = (menuId) => {
  return {
    type: DISCARD_CARD,
    menuId
  }
}
