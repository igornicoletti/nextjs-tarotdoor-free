import { MouseEvent, useRef, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Tab } from '@headlessui/react'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'
import { QueryList } from '../../components/Query/QueryList.tsx'
import { QueryPainel } from '../../components/Query/QueryPainel'

import { getSortQueries } from '../../lib/queries'
import { QueriesListData } from '../../data/queries'
import { QueriesPainelProps } from '../../interfaces/queries'

const Queries: NextPage = ({ queriesPainelData, queriesListData }: any) => {
  const { t } = useTranslation('queries')
  const elRef = useRef<HTMLDivElement | null>(null)
  const [isQueryType, setIsQueryType] = useState<any>()
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

  const handleQueries = async (queriesListId: any) => {
    const data = await queriesPainelData.filter((q: QueriesPainelProps) => q.queriesListId === queriesListId)
    if (data) setIsQueryType(data)
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <Tab.Group>
        <MotionFade className="relative h-full min-h-screen w-full flex flex-col gap-10 pb-20 pt-28 xl:pt-40">
          <div className="w-full max-w-[111rem] ml-auto mr-0 flex flex-col lg:flex-row items-center md:text-center lg:text-left my-auto gap-10 lg:gap-0">
            <div className="relative w-full max-w-[40rem] px-4 flex flex-col">
              <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
                Consultas
              </h3>
              <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
                Métodos de leitura utilizados
              </h2>
              <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
                Trabalho com a faixa de preço, ou seja você paga o quanto quiser/puder entre R$300 e R$800 reais os preços abaixo são sugestões, clique no link para escolher o valor.
              </p>
              <p className="font-raleway-bold md:font-raleway-extraBold text-secundary text-lg leading-[1.75rem] tracking-wider">
                O preço mínimo da Regressão é de 500 reais, por ser uma sessão de 2 horas.
              </p>
            </div>
            <Tab.Panels ref={elRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={() => setIsMouseStatus(false)} onMouseLeave={() => setIsMouseStatus(false)}
              className="relative w-auto max-w-full px-4 select-none overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <QueryPainel queryPainel={queriesPainelData} queryType={isQueryType} />
            </Tab.Panels>
          </div>
          <div className="w-full max-w-[102rem] px-4 mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-4">
            <Tab.List className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 mx-auto">
              <QueryList queryList={queriesListData} handleQueries={handleQueries} />
            </Tab.List>
            <Anchor href="/news" className="flex items-start justify-center lg:justify-end gap-4">
              <IconDown className="fill-secundary" />
              <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">News</span>
            </Anchor>
          </div>
        </MotionFade>
      </Tab.Group>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const queriesListData = await QueriesListData
  const queriesPainelData = await getSortQueries()
  return { props: { queriesPainelData, queriesListData, ...await serverSideTranslations(locale, ['queries']) } }
}

export default Queries
