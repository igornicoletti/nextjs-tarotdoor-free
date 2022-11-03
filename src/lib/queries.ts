import { QueriesPainelData } from '../data/queries'
import { QueriesPainelProps } from '../interfaces/queries'

export async function getQueries(ctx: any) {
  const { queriesId } = ctx.params
  const data = QueriesPainelData.find((q: QueriesPainelProps) => q.queriesId === queriesId)
  return data
}

export async function getSortQueries() {
  const data = QueriesPainelData
  const sortData = data.sort((a, b) => a.id < b.id ? 1 : -1)
  return sortData
}

export async function getAllQueries() {
  const data = QueriesPainelData
  const mappedPt = data.map((q: QueriesPainelProps) => ({ params: { queriesId: q.queriesId }, locale: 'pt' }))
  const mappedEn = data.map((q: QueriesPainelProps) => ({ params: { queriesId: q.queriesId }, locale: 'en' }))
  const paths = [...mappedPt, ...mappedEn]
  return paths
}
