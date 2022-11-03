import { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Tab } from '@headlessui/react'

import { Anchor } from '../../../components/Anchor'
import { Browser } from '../../../components/Browser'
import { GameList } from '../../../components/Game/GameList'
import { IconDown, IconLeft } from '../../../components/Icon'
import { GameTitle } from '../../../components/Game/GameTitle'
import { GamePainel } from '../../../components/Game/GamePainel'
import { MotionFade } from '../../../components/Motion/MotionFade'

import { getGames, getAllGames } from '../../../lib/games'

const GamesSteps: NextPage = ({ data }: any) => {
  const { t } = useTranslation('games')
  const [isCategoryType, setIsCategoryType] = useState<any>()
  const [isSubcategoryType, setIsSubcategoryType] = useState<any>()

  const handleCategories = async (id: any) => {
    const category = await data.categories.find((g: any) => g.id === id)
    if (category.subcategories) setIsCategoryType(category)
  }

  const handleSubCategories = async (id: any) => {
    const subcategory = await isCategoryType.subcategories.find((g: any) => g.id === id)
    if (subcategory.subsubcategories) setIsSubcategoryType(subcategory)
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <div className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <Tab.Group>
          <div className="grid grid-cols-1 xl:grid-cols-5 items-center my-auto gap-20 xl:gap-0">
            <MotionFade className="relative w-full max-w-[33rem] mx-auto xl:ml-0 xl:pr-8 text-center xl:text-left flex flex-col xl:col-span-2">
              <Anchor href="/games" className="flex mb-5 mx-auto xl:ml-0">
                <IconLeft className="fill-secundary" />
              </Anchor>
              <h4 className="hidden xl:flex text-lg uppercase tracking-[0.25rem] xl:tracking-[0.35rem] mb-5">
                Tarot Free
              </h4>
              <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center xl:justify-start xl:gap-2 mb-5">
                <h3 className="xl:font-raleway-bold text-center px-2 py-1 uppercase xl:normal-case xl:bg-secundary xl:text-white text-sm tracking-[0.25rem] xl:tracking-[0.175rem]">
                  {data.title.primary}
                </h3>
              </div>
              <h2 className="font-herculanum text-secundary text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[3.75rem] lg:leading-[4.5rem] xl:leading-[5rem] mb-5">
                Escolha <br /> sua carta
              </h2>
              <p className="hidden xl:flex font-raleway-extraBold text-secundary tracking-wider mb-5">
                Você pode escolher entre:
              </p>
              <Tab.List className="relative flex order-last xl:order-none xl:grid xl:grid-cols-2 justify-center gap-2 xl:mb-10">
                <GameList gameList={data} gameCategory={isCategoryType} gameSubcategory={isSubcategoryType} handleCategories={handleCategories} handleSubCategories={handleSubCategories} />
              </Tab.List>
              <p className="xl:font-raleway-semiBold xl:text-lg mb-5 xl:mb-0 tracking-wider">
                Pense numa pergunta, escolha uma das 3 cartas, e descubra o que o Tarot Egípcio pode te trazer.
              </p>
              <div className="xl:hidden mb-10 tracking-wider text-secundary">
                <p>Você pode escolher entre:</p>
                <GameTitle gameTitle={data} gameCategory={isCategoryType} gameSubcategory={isSubcategoryType} />
              </div>
            </MotionFade>
            <Tab.Panels className="relative w-[108%] md:w-[103.25%] lg:w-[102.5%] xl:w-[103.25%] 2xl:w-[102%] -ml-4 xl:-ml-4 2xl:ml-0 overflow-auto xl:col-span-3">
              <GamePainel gamePainel={data} gameCategory={isCategoryType} gameSubcategory={isSubcategoryType} />
            </Tab.Panels>
          </div>
        </Tab.Group>
        <Anchor href="/author" className="flex items-start justify-center xl:justify-end gap-4">
          <IconDown className="fill-secundary" />
          <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">A Autora</span>
        </Anchor>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const paths = await getAllGames()
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const data = await getGames(ctx)
  return { props: { data, ...await serverSideTranslations(ctx.locale, ['games']) } }
}

export default GamesSteps
