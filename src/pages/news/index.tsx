import { MouseEvent, useEffect, useRef, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Tab } from '@headlessui/react'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { NewList } from '../../components/New/NewList'
import { NewPainel } from '../../components/New/NewPainel'
import { MotionFade } from '../../components/Motion/MotionFade'

import { getSortNews } from '../../lib/news'
import { NewsListData } from '../../data/news'
import { NewsPainelProps } from '../../interfaces/news'

const News: NextPage = ({ newsPainelData, newsListData }: any) => {
  const { t } = useTranslation('news')
  const elRef = useRef<HTMLDivElement | null>(null)
  const [isNewType, setIsNewType] = useState<any>()
  const [isMouseStartX, setIsMouseStartX] = useState<any>()
  const [isMouseScrollX, setIsMouseScrollX] = useState<any>()
  const [isMouseStatus, setIsMouseStatus] = useState<boolean>(false)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const el = elRef.current!
    setIsMouseStatus(true)
    setIsMouseStartX(e.pageX - el.offsetLeft)
    setIsMouseScrollX(el.scrollLeft)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const el = elRef.current!
    if (!isMouseStatus) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - isMouseStartX) * 3
    el.scrollLeft = isMouseScrollX - walk
  }

  const handleNews = async (newsListId: any) => {
    const data = await newsPainelData.filter((n: NewsPainelProps) => n.newsListId === newsListId)
    if (data) setIsNewType(data)
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <Tab.Group>
        <MotionFade className="relative h-full min-h-screen w-full flex flex-col gap-10 pb-20 pt-28 xl:pt-40">
          <div className="w-full max-w-[111rem] ml-auto mr-0 flex flex-col lg:flex-row items-center md:text-center lg:text-left my-auto gap-10 lg:gap-0">
            <div className="relative w-full max-w-[40rem] px-4 flex flex-col">
              <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
                News
              </h3>
              <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
                Tudo que saiu de novo sobre TarotDoor
              </h2>
              <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, tortor ac sollicitudin tincidun.
              </p>
            </div>
            <Tab.Panels ref={elRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={() => setIsMouseStatus(false)} onMouseLeave={() => setIsMouseStatus(false)}
              className="relative w-auto max-w-full px-4 select-none overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <NewPainel newPainel={newsPainelData} newType={isNewType} />
            </Tab.Panels>
          </div>
          <div className="w-full max-w-[102rem] px-4 mx-auto flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-10">
            <Tab.List className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 mx-auto">
              <NewList newList={newsListData} handleNews={handleNews} />
            </Tab.List>
            <Anchor href="/book" className="flex items-start justify-center lg:justify-end gap-4">
              <IconDown className="fill-secundary" />
              <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Livro</span>
            </Anchor>
          </div>
        </MotionFade>
      </Tab.Group>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const newsListData = await NewsListData
  const newsPainelData = await getSortNews()
  return { props: { newsPainelData, newsListData, ...await serverSideTranslations(locale, ['news']) } }
}

export default News
