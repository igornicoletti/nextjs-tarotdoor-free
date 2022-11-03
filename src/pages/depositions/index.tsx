import { MouseEvent, useRef, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

import { DepositionsData } from '../../data/depositions'
import { DepositionsProps } from '../../interfaces/depositions'

const Depositions: NextPage = ({ data }: any) => {
  const { t } = useTranslation('depositions')
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
        <div className="w-full max-w-[111rem] ml-auto mr-0 flex flex-col items-center md:text-center xl:text-left my-auto gap-10">
          <div className="relative w-full px-4 flex flex-col">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Clientes satisfeitos
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary">
              Depoimentos
            </h2>
          </div>
          <div ref={elRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={() => setIsMouseStatus(false)} onMouseLeave={() => setIsMouseStatus(false)}
            className="relative w-auto max-w-full px-4 select-none overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
            <div className="relative w-full flex gap-10">
              {data.map((d: DepositionsProps) => (
                <div key={d.id} className="relative min-w-[16.5rem] max-w-[16.5rem] xl:min-w-[18.5rem] xl:max-w-[18.5rem]">
                  <div className="relative w-full h-[16.5rem] xl:h-[18.75rem] rounded-lg mb-5">
                    <motion.img src={d.image} className="absolute w-full h-full object-cover" />
                    <div className="absolute w-full h-1/3 left-0 bottom-0 flex items-end bg-gradient-to-t from-primary rounded-b-lg p-5">
                      <p className="text-white font-raleway-medium text-xl tracking-[0.125rem]">{d.name}</p>
                    </div>
                  </div>
                  <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-[0.05rem]"><q>{d.text}</q></p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[102rem] px-4 mx-auto">
          <Anchor href="/contact" className="flex items-start justify-center lg:justify-end gap-4">
            <IconDown className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Contato</span>
          </Anchor>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const data = await DepositionsData
  return { props: { data, ...await serverSideTranslations(locale, ['depositions']) } }
}

export default Depositions
