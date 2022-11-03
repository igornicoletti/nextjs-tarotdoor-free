import { CategoryProps, SubcategoryProps, SubsubcategoryProps } from '../../interfaces/games'

interface GameTitleProps {
  gameTitle: any
  gameCategory: any
  gameSubcategory: any
}

export const GameTitle = (({ gameTitle, gameCategory, gameSubcategory }: GameTitleProps) => {
  return (
    <>
      {!gameCategory && (
        <>
          {gameTitle.categories.map((g: CategoryProps) => (
            <span key={g.id} className="font-raleway-semiBold">
              <q>{g.title.full}</q>&nbsp;
            </span>
          ))}
        </>
      )}
      {gameCategory && !gameSubcategory && (
        <>
          {gameCategory.subcategories.map((g: SubcategoryProps) => (
            <span key={g.id} className="font-raleway-semiBold">
              <q>{g.title.full}</q>&nbsp;
            </span>
          ))}
        </>
      )}
      {gameSubcategory && (
        <>
          {gameSubcategory.subsubcategories.map((g: SubsubcategoryProps) => (
            <span key={g.id} className="font-raleway-semiBold">
              <q>{g.title.full}</q>&nbsp;
            </span>
          ))}
        </>
      )}
    </>
  )
})
