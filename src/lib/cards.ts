import { CardsData } from '../data/cards'
import { CardsProps } from '../interfaces/cards'

export async function getCards(ctx: any) {
  const { cardsId } = ctx.params
  const data = CardsData.find((c: CardsProps) => c.cardsId === cardsId)
  return data
}

export async function getAllCards() {
  const data = CardsData
  const mappedPt = data.map((c: CardsProps) => ({ params: { gamesId: c.gamesId, cardsId: c.cardsId }, locale: 'pt' }))
  const mappedEn = data.map((c: CardsProps) => ({ params: { gamesId: c.gamesId, cardsId: c.cardsId }, locale: 'en' }))
  const paths = [...mappedPt, ...mappedEn]
  return paths
}
