import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { IconUp } from '../../components/Icon'
import { Anchor } from '../../components/Anchor'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

const CardDay: NextPage = () => {
  const { t } = useTranslation('card-day')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-10 lg:gap-0">
          <div className="relative lg:sticky flex items-center justify-center top-0 lg:top-28 xl:top-40">
            <motion.img src={'/images/tarotdoor_card.png'} className="absolute -mr-10 w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem] rounded-3xl shadow-2xl" />
            <motion.img src={'/images/tarotdoor_card_view.png'} className="relative -ml-10 w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem]" />
          </div>
          <div className="flex flex-col">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Carta do dia
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              69 The Unforeseen
            </h2>
            <div className="flex flex-col gap-6 font-raleway-bold md:font-raleway-extraBold text-lg md:text-[1.375rem] leading-[1.625rem] md:leading-[1.75rem] tracking-wider mb-10">
              <q>Dá semente a quem quer semear e não tem, e conselho ao que quer acertar e não sabe.</q>
              <p>Cumplicidades - Identificação de atividades e situações em comum com os próprios ideais - Realização de uma missão</p>
            </div>
            <div className="flex flex-col gap-6 font-raleway-semiBold text-lg leading-[1.625rem] tracking-wider">
              <p>Encontro de atividades que permitem o desenvolvimento dos seus projetos. Apoio de pessoas que estão em comunhão com seus ideais. Estabelecimento de sociedade. Estabelecer negócios ou sociedade. Trabalhar em grupo. Esforço comunitário. Desenvolver capacidades. Assumir uma nova missão. Encontrar um(a) cúmplice, um(a) verdadeiro(a) companheiro(a), ou usufruir da companhia de alguém que já está perto.</p>
              <p>No amor: Cumplicidade. Você está encontrando pessoas que estão em comunhão com os seus ideais. Sua Alma Gêmea pode estar entre elas. Alguém que luta pelas mesmas causas e quer o mesmo que você. Principalmente junto figuras de Espada. No trabalho: Ótimo momento profissional, aonde tudo compactua com você. Sociedade, negócios, compra, venda, qualquer coisa realizada com essa carta é vantagem. Você encontrou as pessoas certas. Aqueles que como cúmplices, vão lutar com você para desenvolver sua missão. As oportunidades também são boas, o universo está dando corda para você crescer. Aproveite.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Anchor href="/queries" className="relative w-full lg:w-[17.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Faça sua consulta</span>
            </Anchor>
            <Anchor href="/" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Compartilhar</span>
            </Anchor>
          </div>
          <Anchor href="/" className="flex items-end justify-center lg:justify-end gap-4">
            <IconUp className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Início</span>
          </Anchor>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['card-day']) } }
}

export default CardDay
