export interface NewsListProps {
  id: string
  newsListId: string
  title: string
}

export interface NewsPainelProps {
  id: string
  newsId: string
  newsListId: string
  tag: string
  title: string
  anchor: string
  data: string
  image: string
  description: string
  player?: string
  blockquote?: string
  quotation?: string
}
