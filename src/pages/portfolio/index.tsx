import { MouseEvent, useRef, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

import { getSortPortfolio } from '../../lib/portfolio'
import { PortfolioProps } from '../../interfaces/portoflio'

const Portfolio: NextPage = ({ data }: any) => {
  const { t } = useTranslation('portfolio')
  const elRef = useRef<HTMLDivElement | null>(null)
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

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full flex flex-col gap-10 pb-20 pt-28 xl:pt-40">
        <div className="w-full max-w-[111rem] ml-auto mr-0 flex flex-col lg:flex-row items-center md:text-center lg:text-left my-auto gap-10 lg:gap-0">
          <div className="relative w-full max-w-[40rem] px-4 flex flex-col">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Portfólio
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Veja algumas das entrevistas que dei para jornais e revistas:
            </h2>
            <p className="font-raleway-semiBold xl:pr-20 text-lg leading-[1.75rem] tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, tortor ac sollicitudin tincidun.
            </p>
          </div>
          <div ref={elRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={() => setIsMouseStatus(false)} onMouseLeave={() => setIsMouseStatus(false)}
            className="relative w-auto max-w-full px-4 select-none overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
            <div className="relative w-full grid grid-rows-2 grid-flow-col gap-4 justify-start">
              {data.map((p: PortfolioProps) => (
                <Anchor key={p.id} href={`/portfolio/${(p.portfolioId)}`}>
                  <div className="relative w-[16.5rem] xl:w-[19.5rem] h-[16.5rem] xl:h-[19.5rem] text-left rounded-lg">
                    <motion.img src={p.image} className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div className="h-full flex flex-col justify-between">
                      <div className="relative font-raleway-bold flex p-5">
                        <h3 className="font-raleway-bold bg-primary text-tertiary text-xs rounded-md py-1 px-3">
                          {p.tag}{p.id}
                        </h3>
                      </div>
                      <div className="absolute flex flex-col gap-1 w-full h-2/4 justify-end left-0 bottom-0 bg-gradient-to-t from-primary text-white tracking-[0.015rem] text-sm rounded-b-lg p-5">
                        <h2 className="font-raleway-bold">{p.title}</h2>
                        <p className="font-raleway-regular">{p.anchor}</p>
                      </div>
                    </div>
                  </div>
                </Anchor>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[102rem] px-4 mx-auto">
          <Anchor href="/book" className="flex items-start justify-center lg:justify-end gap-4">
            <IconDown className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Livro</span>
          </Anchor>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const data = await getSortPortfolio()
  return { props: { data, ...await serverSideTranslations(locale, ['portfolio']) } }
}

export default Portfolio
