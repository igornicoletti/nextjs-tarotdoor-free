import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Anchor } from '../components/Anchor'
import { Browser } from '../components/Browser'
import { MotionDeck } from '../components/Motion/MotionDeck'
import { MotionCard } from '../components/Motion/MotionCard'
import { MotionFade } from '../components/Motion/MotionFade'
import { MotionSwitch } from '../components/Motion/MotionSwitch'

const motionSwitch = {
  initial: { opacity: 0 },
  exit: { opacity: 1 }
}

const motionCard = {
  initial: { top: '95%', left: '50%', y: '0%', x: '-50%' },
  exit: { top: '50%', left: '50%', y: '-50%', x: '-50%' }
}

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionDeck source={'/images/tarotdoor_cards_home.png'} />
      <MotionCard variants={motionCard} />
      <MotionSwitch variants={motionSwitch} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 gap-6 items-center my-auto">
          <h2 className="font-herculanum text-center text-[5rem] lg:text-[5.5rem] xl:text-[7rem] leading-[5rem] lg:leading-[5.5rem] xl:leading-[7rem]">
            Tarot <br /> free <br /> online
          </h2>
          <div className="grid grid-col-1 xl:grid-cols-3 xl:grid-flow-row-dense gap-12 xl:gap-0 items-center xl:items-end">
            <p className="font-raleway-semiBoldItalic italic text-center xl:text-left text-lg xl:text-[1.375rem] leading-[1.375rem] xl:leading-[2rem] xl:col-start-3">
              Um meio moderno <br /> de acessar o manacial <br /> do conhecimento humano
            </p>
            <Anchor href="/games" className="relative w-full max-w-sm xl:max-w-[15.75rem] h-[3.75rem] flex items-center justify-center xl:col-start-2 mx-auto px-5 font-raleway-bold xl:font-raleway-medium xl:text-lg text-center bg-transparent border-2 border-secundary text-secundary tracking-[0.21875rem] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1] transition-all duration-300">
              <span className="relative">Tire sua carta</span>
            </Anchor>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center xl:justify-start text-secundary gap-8 text-lg">
          <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Youtube</Anchor>
          <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Instagram</Anchor>
          <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Facebook</Anchor>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['common']) } }
}

export default Home
