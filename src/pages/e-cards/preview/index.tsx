import { useRouter } from 'next/router'
import { FormEvent, useEffect } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { IconUp } from '../../../components/Icon'
import { Anchor } from '../../../components/Anchor'
import { Browser } from '../../../components/Browser'
import { MotionFade } from '../../../components/Motion/MotionFade'

import { useEcards } from '../../../hooks/useEcards'

const Preview: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('ecards')
  const { ecard, createEcard } = useEcards()

  useEffect(() => { !ecard.name && router.push('/e-cards') }, [ecard.name, router])

  const handleSubmitPreview = async (event: FormEvent) => {
    event.preventDefault()
    await createEcard()
    router.push('/e-cards/preview/success')
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <form onSubmit={handleSubmitPreview} autoComplete="off" className="grid grid-rows-1 gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-10 lg:gap-0">
            <div className="relative lg:sticky flex items-center justify-center top-0 lg:top-28 xl:top-40">
              <motion.img src={'/images/tarotdoor_card.png'} className="absolute -mr-10 -mb-10 md:mb-0 w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem]" />
              <motion.img src={'/images/tarotdoor_card_view.png'} className="relative -ml-10 w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem]" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 text-lg font-raleway-bold leading-6 mb-5">
                <p>
                  <span className="text-secundary">Data: </span>
                  {new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(new Date())}
                </p>
                <p><span className="text-secundary">De: </span>{ecard.person}</p>
                <p><span className="text-secundary">Para: </span>{ecard.name}</p>
              </div>
              <p className="font-raleway-semiBold md:font-raleway-bold text-lg md:text-[1.375rem] leading-[1.625] text-secundary mb-1">
                Este ano você vai ser o ano regido por:
              </p>
              <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
                Ano do confronto
              </h2>
              <p className="font-raleway-bold uppercase mb-5 text-[1.25rem] leading-[2rem] tracking-wider lg:tracking-[0.21875rem]">
                <q>Os arcos dos fortes foram quebrados; E os dos oprimidos se encheram de força</q>
              </p>
              <ul className="list-disc pl-5 uppercase text-lg leading-[1.875rem] tracking-wider lg:tracking-[0.21875rem] mb-5">
                <li>Exploração</li>
                <li>Curiosidade</li>
                <li>Ação</li>
                <li>Revelação</li>
                <li>Desabrochar dos talentos</li>
                <li>Sair do anonimato</li>
              </ul>
              <p className="font-raleway-semiBold md:font-raleway-bold text-lg md:text-[1.375rem] leading-[1.625] text-secundary mb-1">
                Mensagem:
              </p>
              <p className="font-raleway-semiBold text-lg leading-[1.625rem] tracking-wider mb-10">
                {ecard.message}
              </p>
              <p className="font-raleway-bold md:font-raleway-extraBold text-[0.875] leading-6 tracking-wider text-secundary">
                Este vai ser seu cartão, para remeter clique no botão abaixo. Se você quiser fazer alguma mudança, retorne utilizando o <Anchor href="/e-cards" className="underline">voltar</Anchor> e edite novamente.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="lg:col-start-2 flex flex-col lg:flex-row items-center justify-between gap-10">
              <button type="submit" className="relative w-full max-w-sm lg:max-w-[12.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                <span className="relative">Enviar</span>
              </button>
              <Anchor
                href="/"
                className="flex items-end justify-center lg:justify-end gap-4">
                <IconUp className="fill-secundary" />
                <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Início</span>
              </Anchor>
            </div>
          </div>
        </form>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['ecards']) } }
}

export default Preview
