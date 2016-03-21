export const DISCARD_CARD = 'DISCARD_CARD'

export const dsiscardCard = (menuId) => {
  return {
    type: DISCARD_CARD,
    menuId
  }
}
