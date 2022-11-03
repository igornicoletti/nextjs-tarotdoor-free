import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../components/Anchor'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'
import { IconLeft, IconRight, IconUp } from '../../components/Icon'

const Sale: NextPage = () => {
  const { t } = useTranslation('sale')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense items-start justify-between lg:gap-10">
          <div className="relative lg:sticky flex flex-col items-center justify-center lg:col-start-2 top-0 lg:top-28 xl:top-40">
            <motion.img src={'/images/tarotdoor_sale.png'} className="relative w-[14rem] md:w-[21rem] xl:w-[28rem] h-[20.75rem] md:h-[30.875rem] xl:h-[41.125rem]" />
          </div>
          <div className="flex flex-col xl:pr-28 2xl:pr-40 lg:col-start-1 mt-10">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Promoção
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Linha do tempo de 12 meses
            </h2>
            <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
              Leitura de 40 minutos com super desconto, esta leitura abrange 12 meses. Uma leitura detalhada para cada mês.
            </p>
            <p className="font-raleway-bold md:font-raleway-extraBold text-secundary text-lg leading-[1.75rem] tracking-wider mb-5">
              Para pagamento no banco: Whatsapp/Telegram: 11 9889 1044 ou pelo email: consultas@tarotdoor.com
            </p>
            <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-10">
              *Assim que você eu receber o recibo da consulta, peço de 1 à 3 dias úteis para atender no telefone ou chat
            </p>
            <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 mx-auto mb-5">
              <Anchor href="/portfolio" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                <span className="relative">Portfolio</span>
              </Anchor>
              <Anchor href="/book" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                <span className="relative">Comprar livro</span>
              </Anchor>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <button type="button" disabled={true} className="disabled:cursor-not-allowed disabled:opacity-50">
                <IconLeft className="fill-secundary" />
              </button>
              <ul className="flex items-center justify-center gap-1 font-raleway-bold text-[1.875rem] text-secundary">
                <li className="opacity-100">01</li>
                <li className="font-raleway-medium opacity-30">/</li>
                <li className="opacity-30">02</li>
              </ul>
              <button type="button" disabled={true} className="disabled:cursor-not-allowed disabled:opacity-50">
                <IconRight className="fill-secundary" />
              </button>
            </div>
          </div>
        </div>
        <Anchor href="/" className="flex items-end justify-center lg:justify-end gap-4">
          <IconUp className="fill-secundary" />
          <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Início</span>
        </Anchor>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['sale']) } }
}

export default Sale
