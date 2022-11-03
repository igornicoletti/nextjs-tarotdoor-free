import { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { IconUp } from '../../components/Icon'
import { Anchor } from '../../components/Anchor'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'
import { EcardSubject } from '../../components/Ecard/EcardSubject'
import { EcardMessage } from '../../components/Ecard/EcardMessage'
import { EcardAlgorithms } from '../../components/Ecard/EcardAlgorithms'

const ECards: NextPage = () => {
  const { t } = useTranslation('ecards')
  const [ecardSubject, setEcardSubject] = useState<boolean>(false)
  const [ecardAlgorithms, setEcardAlgorithms] = useState<boolean>(false)

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-20 lg:gap-10">
          <div className="flex flex-col items-start">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              E-cards
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Cartões <br className="hidden lg:flex" /> eletrônicos com previsões para {new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date())}
            </h2>
            <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
              Para obter a previsão para o ano {new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date())}, siga as instruções abaixo:
            </p>
            <div className="flex flex-col gap-6 font-raleway-bold md:font-raleway-extraBold text-lg leading-[1.75rem] tracking-wider text-secundary max-w-[40rem]">
              <p>Some os algarismos que compõe sua data de nascimento ou da pessoa que você quer enviar um cartão:</p>
              <p>Ex: 29 de setembro de 1947 - (2 + 9) + (9) + (1 + 9 + 4 + 7) = 41 Selecione o resultado (no caso do exemplo o número 41).</p>
            </div>
          </div>
          {!ecardAlgorithms
            ? (<EcardAlgorithms onEcardAlgorithms={setEcardAlgorithms} />)
            : (<>{ecardAlgorithms && !ecardSubject
              ? (<EcardSubject onEcardSubject={setEcardSubject} onEcardAlgorithms={setEcardAlgorithms} />)
              : (<>{ecardAlgorithms && ecardSubject && (<EcardMessage onEcardSubject={setEcardSubject} />)}</>)
            } </>)
          }
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

export default ECards
