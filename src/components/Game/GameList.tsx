import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'

import { CategoryProps, SubcategoryProps, SubsubcategoryProps } from '../../interfaces/games'

interface GameListProps {
  gameList: any
  gameCategory: any
  gameSubcategory: any
  handleCategories: (id: any) => Promise<void>
  handleSubCategories: (id: any) => Promise<void>
}

export const GameList = (({ gameList, gameCategory, gameSubcategory, handleCategories, handleSubCategories }: GameListProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      {!gameCategory && (
        <>
          {gameList.categories.map((g: CategoryProps) => (
            <Tab as={Fragment} key={g.id}>
              {({ selected }: any) => (
                <button type="button" onClick={() => {
                  setIsSelected(true)
                  handleCategories(g.id)
                }} className="flex items-center text-left gap-2 group focus:outline-none focus-visible:outline-none">
                  <div className={classNames(selected && isSelected ? 'bg-primary' : '', 'h-[3.125rem] w-full min-w-[2.5rem] max-w-[2.5rem] flex items-center justify-center border-2 border-primary rounded-[0.1875rem] group-hover:bg-primary transition-all duration-300')}>
                    <motion.img src={g.icon} className="relative" />
                  </div>
                  <p className={classNames(selected ? 'block' : 'hidden xl:block', 'absolute xl:relative w-full font-raleway-bold text-center xl:text-left top-[125%] xl:top-auto left-0 leading-[1.5rem]')}>
                    <span className="text-secundary">{g.title.primary}</span> {g.title.secundary}
                  </p>
                </button>
              )}
            </Tab>
          ))}
        </>
      )}
      {gameCategory && !gameSubcategory && (
        <>
          {gameCategory.subcategories.map((g: SubcategoryProps) => (
            <Tab as={Fragment} key={g.id}>
              {({ selected }: any) => (
                <button type="button" onClick={() => {
                  setIsSelected(true)
                  handleSubCategories(g.id)
                }} className="flex items-center text-left gap-2 group focus:outline-none focus-visible:outline-none">
                  <div className={classNames(selected && isSelected ? 'bg-primary' : '', 'h-[3.125rem] w-full min-w-[2.5rem] max-w-[2.5rem] flex items-center justify-center border-2 border-primary rounded-[0.1875rem] group-hover:bg-primary transition-all duration-300')}>
                    <motion.img src={g.icon} className="relative" />
                  </div>
                  <p className={classNames(selected ? 'block' : 'hidden xl:block', 'absolute xl:relative w-full font-raleway-bold text-center xl:text-left top-[125%] xl:top-auto left-0 leading-[1.5rem]')}>
                    <span className="text-secundary">{g.title.primary}</span> {g.title.secundary}
                  </p>
                </button>
              )}
            </Tab>
          ))}
        </>
      )}
      {gameSubcategory && (
        <>
          {gameSubcategory.subsubcategories.map((g: SubsubcategoryProps) => (
            <Tab as={Fragment} key={g.id}>
              {({ selected }: any) => (
                <button type="button" onClick={() => {
                  setIsSelected(true)
                }} className="flex items-center text-left gap-2 group focus:outline-none focus-visible:outline-none">
                  <div className={classNames(selected && isSelected ? 'bg-primary' : '', 'h-[3.125rem] w-full min-w-[2.5rem] max-w-[2.5rem] flex items-center justify-center border-2 border-primary rounded-[0.1875rem] group-hover:bg-primary transition-all duration-300')}>
                    <motion.img src={g.icon} className="relative" />
                  </div>
                  <p className={classNames(selected ? 'block' : 'hidden xl:block', 'absolute xl:relative w-full font-raleway-bold text-center xl:text-left top-[125%] xl:top-auto left-0 leading-[1.5rem]')}>
                    <span className="text-secundary">{g.title.primary}</span> {g.title.secundary}
                  </p>
                </button>
              )}
            </Tab>
          ))}
        </>
      )}
    </>
  )
})
