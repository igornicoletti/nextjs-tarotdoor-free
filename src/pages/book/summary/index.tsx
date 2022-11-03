import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../../components/Anchor'
import { IconDown } from '../../../components/Icon'
import { Browser } from '../../../components/Browser'
import { MotionFade } from '../../../components/Motion/MotionFade'
import { SummaryTitle } from '../../../components/Summary/SummaryTitle'
import { SummaryDisclosure } from '../../../components/Summary/SummaryDisclosure'

import { SummaryData } from '../../../data/summary'

const Summary: NextPage = ({ data }: any) => {
  const { t } = useTranslation('book')
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] flex flex-col gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between lg:gap-10">
          <div className="relative lg:sticky w-full max-w-[15rem] hidden lg:flex flex-col gap-5 top-0 lg:top-28 xl:top-40">
            <h3 className="font-raleway-light text-lg uppercase tracking-[0.125rem] text-secundary whitespace-nowrap">
              Índice do livro
            </h3>
            <SummaryTitle summaryTitle={data} />
          </div>
          <SummaryDisclosure summaryDisclosure={data} />
          <div className="relative lg:sticky w-full max-w-[21rem] md:max-w-[25rem] 2xl:max-w-[32rem] mx-auto flex lg:hidden xl:flex flex-col items-center justify-center top-0 lg:top-28 xl:top-40 pb-14 lg:pb-0">
            <motion.img src={'/images/tarotdoor_textbook.png'} className="relative xl:fixed w-[14rem] md:w-[21rem] 2xl:w-[28rem] h-[20.75rem] md:h-[30.875rem] 2xl:h-[41.125rem] xl:top-32 xl:-right-20 ml-auto" />
            <motion.img src={'/images/tarotdoor_book.png'} className="absolute xl:relative w-[15.8125rem] md:w-[22.875rem] 2xl:w-[31.25rem] h-[20.75rem] md:h-[30.125rem] 2xl:h-[41.125rem] bottom-0 left-0" />
          </div>
        </div>
        <Anchor href="/contact" className="flex items-start justify-center lg:justify-end gap-4">
          <IconDown className="fill-secundary" />
          <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Contato</span>
        </Anchor>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const data = await SummaryData
  return { props: { data, ...await serverSideTranslations(locale, ['book']) } }
}

export default Summary
