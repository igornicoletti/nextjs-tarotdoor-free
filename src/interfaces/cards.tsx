export interface SubdescriptionProps {
  id: string
  title: string
  text: string
}

export interface CardsProps {
  id: string
  gamesId: string
  cardsId: string
  title: string
  image: string
  description: string
  subdescription: SubdescriptionProps[]
}
