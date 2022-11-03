import { NewsPainelData } from '../data/news'
import { NewsPainelProps } from '../interfaces/news'

export async function getNews(ctx: any) {
  const { newsId } = ctx.params
  const data = NewsPainelData.find((q: NewsPainelProps) => q.newsId === newsId)
  return data
}

export async function getSortNews() {
  const data = NewsPainelData
  const sortData = data.sort((a, b) => a.id < b.id ? 1 : -1)
  return sortData
}

export async function getShuffleNews() {
  const data = NewsPainelData
  let currentIndex = data.length
  let randomIndex = data.length
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]]
  }
  return data.slice(0, 5)
}

export async function getAllNews() {
  const data = NewsPainelData
  const mappedPt = data.map((n: NewsPainelProps) => ({ params: { newsId: n.newsId }, locale: 'pt' }))
  const mappedEn = data.map((n: NewsPainelProps) => ({ params: { newsId: n.newsId }, locale: 'en' }))
  const paths = [...mappedPt, ...mappedEn]
  return paths
}
