import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { IconUp } from '../../../../components/Icon'
import { Anchor } from '../../../../components/Anchor'
import { Browser } from '../../../../components/Browser'
import { MotionDeck } from '../../../../components/Motion/MotionDeck'
import { MotionFade } from '../../../../components/Motion/MotionFade'

const Success: NextPage = () => {
  const { t } = useTranslation('ecards')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionDeck source={'/images/tarotdoor_cards_ecard.png'} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-herculanum text-secundary mx-auto mb-10 text-center text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[3.75rem] lg:leading-[4.5rem] xl:leading-[5rem] px-5">
            E-card enviado <br /> com sucesso
          </h2>
          <p className="font-raleway-semiBold text-center md:text-lg md:leading-[1.75rem] tracking-wider mb-10">
            Faça outros E-cards e envie para outras pessoas. <br className="hidden md:flex" /> Clique no botão abaixo e faça novos cartões.
          </p>
          <Anchor href="/e-cards" className="relative w-full max-w-sm lg:max-w-[15.75rem] h-[3.75rem] flex items-center justify-center lg:col-start-2 mx-auto px-5 font-raleway-bold xl:font-raleway-medium xl:text-lg text-center bg-transparent border-2 border-secundary text-secundary tracking-[0.21875rem] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1] transition-all duration-300">
            <span className="relative">Criar E-cards</span>
          </Anchor>
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
  return { props: { ...await serverSideTranslations(locale, ['ecards']) } }
}

export default Success