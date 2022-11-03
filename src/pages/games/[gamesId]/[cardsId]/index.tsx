import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { motion } from 'framer-motion'

import { Anchor } from '../../../../components/Anchor'
import { IconDown } from '../../../../components/Icon'
import { Browser } from '../../../../components/Browser'
import { MotionFade } from '../../../../components/Motion/MotionFade'
import { MotionFlip } from '../../../../components/Motion/MotionFlip'

import { getCards, getAllCards } from '../../../../lib/cards'
import { SubdescriptionProps } from '../../../../interfaces/cards'

const motionCard = {
  initial: { top: '0%', left: '50%', y: '0%', x: '0%' },
  animate: { top: '0%', left: '0%', y: '0%', x: '-7.5%', transition: { delay: .8, duration: .8 } },
}

const motionCardY = { animate: { rotateY: '-180deg' } }

const motionCardZ = {
  initial: { opacity: 0, top: '0%', left: '50%', y: '0%', x: '-50%' },
  animate: { opacity: 1, top: '0%', left: '50%', y: '0%', x: '-42.5%', transition: { delay: 1.6, duration: .4 } },
}

const CardsSteps: NextPage = ({ data }: any) => {
  const { t } = useTranslation('games')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <div className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-10 lg:gap-0">
          <div className="relative flex lg:sticky items-center justify-center top-0 lg:top-28 xl:top-40 z-10">
            <motion.img initial="initial" animate="animate" variants={motionCardZ} src={'/images/tarotdoor_card.png'} className="absolute -mb-10 md:mb-0 w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem]" />
            <MotionFlip variants={motionCard} variantsY={motionCardY} source={data.image} />
          </div>
          <MotionFade className="flex flex-col gap-5">
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary">
              {data.title}
            </h2>
            <p className="flex flex-col gap-6 font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider">
              {data.description}
            </p>
            {data.subdescription.map((c: SubdescriptionProps) => (
              <div key={c.id} className="flex flex-col gap-2">
                <h3 className="font-raleway-bold text-[1.375rem] leading-[2.1875rem] tracking-[0.125rem] text-secundary uppercase">
                  {c.title}
                </h3>
                <p className="font-raleway-semiBold text-lg leading-[1.625rem] tracking-wider">{c.text}</p>
              </div>
            ))}
          </MotionFade>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Anchor href="/games" className="relative w-full lg:w-[12.5rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Voltar</span>
            </Anchor>
            <Anchor href="/" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Compartilhar</span>
            </Anchor>
            <Anchor href="/queries" className="relative w-full lg:w-[17.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Faça sua consulta</span>
            </Anchor>
          </div>
          <Anchor href="/author" className="flex items-start justify-center lg:justify-end gap-4">
            <IconDown className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">A Autora</span>
          </Anchor>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const paths = await getAllCards()
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const data = await getCards(ctx)
  return { props: { data, ...await serverSideTranslations(ctx.locale, ['games']) } }
}

export default CardsSteps
