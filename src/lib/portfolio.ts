import { PortfolioData } from '../data/portfolio'
import { PortfolioProps } from '../interfaces/portoflio'

export async function getPortfolio(ctx: any) {
  const { portfolioId } = ctx.params
  const data = PortfolioData.find((q: PortfolioProps) => q.portfolioId === portfolioId)
  return data
}

export async function getSortPortfolio() {
  const data = PortfolioData
  const sortData = data.sort((a, b) => a.id < b.id ? 1 : -1)
  return sortData
}

export async function getShufflePortfolio() {
  const data = PortfolioData
  let currentIndex = data.length
  let randomIndex = data.length
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]]
  }
  return data.slice(0, 5)
}

export async function getAllPortfolio() {
  const data = PortfolioData
  const mappedPt = data.map((p: PortfolioProps) => ({ params: { portfolioId: p.portfolioId }, locale: 'pt' }))
  const mappedEn = data.map((p: PortfolioProps) => ({ params: { portfolioId: p.portfolioId }, locale: 'en' }))
  const paths = [...mappedPt, ...mappedEn]
  return paths
}
