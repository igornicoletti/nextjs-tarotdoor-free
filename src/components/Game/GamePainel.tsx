import { Tab } from '@headlessui/react'

import { Anchor } from '../Anchor'
import { MotionShuffle } from '../Motion/MotionShuffle'
import { CategoryProps, SubcategoryProps, SubsubcategoryProps, CardProps } from '../../interfaces/games'

interface GamePainelProps {
  gamePainel: any
  gameCategory: any
  gameSubcategory: any
}

const motionCard = {
  initial: { top: '50%', left: '50%', y: '-50%', x: '-50%' },
  exit: { top: '50%', left: '50%', y: '-50%', x: '-50%' }
}

export const GamePainel = (({ gamePainel, gameCategory, gameSubcategory }: GamePainelProps) => {
  return (
    <>
      {!gameCategory && (
        <>
          {gamePainel.categories.map((g: CategoryProps) => (
            <Tab.Panel key={g.id} className="relative w-full flex gap-4 snap-mandatory snap-x overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:hidden">
                <div className="shrink-0"></div>
              </div>
              {g.cards.map((g: CardProps) => (
                <Anchor key={g.id} href={`/games/${g.gamesId}/${g.cardsId}`} className="snap-center shrink-0">
                  <MotionShuffle variants={motionCard} source={g.image} />
                </Anchor>
              ))}
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:w-0">
                <div className="shrink-0"></div>
              </div>
            </Tab.Panel>
          ))}
        </>
      )}
      {gameCategory && !gameSubcategory && (
        <>
          {gameCategory.subcategories.map((g: SubcategoryProps) => (
            <Tab.Panel key={g.id} className="relative w-full flex gap-4 snap-mandatory snap-x overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:hidden">
                <div className="shrink-0"></div>
              </div>
              {g.cards.map((g: CardProps) => (
                <Anchor key={g.id} href={`/games/${g.gamesId}/${g.cardsId}`} className="snap-center shrink-0">
                  <MotionShuffle variants={motionCard} source={g.image} />
                </Anchor>
              ))}
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:w-0">
                <div className="shrink-0"></div>
              </div>
            </Tab.Panel>
          ))}
        </>
      )}
      {gameSubcategory && (
        <>
          {gameSubcategory.subsubcategories.map((g: SubsubcategoryProps) => (
            <Tab.Panel key={g.id} className="relative w-full flex gap-4 snap-mandatory snap-x overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:hidden">
                <div className="shrink-0"></div>
              </div>
              {g.cards.map((g: CardProps) => (
                <Anchor key={g.id} href={`/games/${g.gamesId}/${g.cardsId}`} className="snap-center shrink-0">
                  <MotionShuffle variants={motionCard} source={g.image} />
                </Anchor>
              ))}
              <div className="snap-center shrink-0 w-[10%] md:w-[30%] lg:w-[35%] xl:w-0">
                <div className="shrink-0"></div>
              </div>
            </Tab.Panel>
          ))}
        </>
      )}
    </>
  )
})

