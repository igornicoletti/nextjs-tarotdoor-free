import { GamesData } from '../data/games'
import { GamesProps } from '../interfaces/games'

export async function getGames(ctx: any) {
  const { gamesId } = ctx.params
  const data = GamesData.find((g: GamesProps) => g.gamesId === gamesId)
  return data
}

export async function getAllGames() {
  const data = GamesData
  const mappedPt = data.map((g: GamesProps) => ({ params: { gamesId: g.gamesId }, locale: 'pt' }))
  const mappedEn = data.map((g: GamesProps) => ({ params: { gamesId: g.gamesId }, locale: 'en' }))
  const paths = [...mappedPt, ...mappedEn]
  return paths
}
