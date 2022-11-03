export interface TitleProps {
  primary: string
  secundary: string
  full: string
}

export interface CardProps {
  id: string
  image: string
  gamesId: string
  cardsId: string
}

export interface SubsubcategoryProps {
  id: string
  title: TitleProps
  icon: string
  cards: CardProps[]
}

export interface SubcategoryProps {
  id: string
  title: TitleProps
  icon: string
  cards: CardProps[]
  subsubcategories?: SubsubcategoryProps[]
}

export interface CategoryProps {
  id: string
  title: TitleProps
  icon: string
  cards: CardProps[]
  subcategories?: SubcategoryProps[]
}

export interface GamesProps {
  id: string
  gamesId: string
  title: TitleProps
  categories: CategoryProps[]
}
