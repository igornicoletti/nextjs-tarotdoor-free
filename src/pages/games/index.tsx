import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionCard } from '../../components/Motion/MotionCard'
import { MotionFade } from '../../components/Motion/MotionFade'
import { MotionSwitch } from '../../components/Motion/MotionSwitch'

import { GamesData } from '../../data/games'
import { GamesProps } from '../../interfaces/games'

const motionSwitch = { initial: { opacity: 1 }, exit: { opacity: 0 } }
const motionCard = { initial: { top: '50%', left: '50%', y: '-50%', x: '-50%' } }

const Games: NextPage = ({ data }: any) => {
  const { t } = useTranslation('games')
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionCard variants={motionCard} />
      <MotionSwitch variants={motionSwitch} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 items-center my-auto">
          <h3 className="text-center text-white lg:text-lg uppercase tracking-[0.25rem] lg:tracking-[0.35rem] mb-5">
            Tarot Free
          </h3>
          <h2 className="font-herculanum text-tertiary mx-auto mb-10 text-center text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[3.75rem] lg:leading-[4.5rem] xl:leading-[5rem]">
            Escolha <br className="flex xl:hidden" /><span className="inline-flex xl:hidden">o</span> <span className="hidden xl:inline-flex">seu</span> jogo <br /> abaixo
          </h2>
          <div className="w-full max-w-sm xl:max-w-full flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-4 mx-auto">
            {data.map((g: GamesProps) => (
              <Anchor key={g.id} href={`/games/${(g.gamesId)}`} className={classNames(g.id !== '2' ? 'xl:w-[13.75rem]' : 'xl:w-[25rem]', 'relative w-full max-w-sm min-w-[13.75rem] h-[3.75rem] px-5 font-raleway-bold xl:font-raleway-regular flex items-center justify-center border-2 border-tertiary text-tertiary xl:text-sm tracking-[0.21875rem] lg:tracking-[0.30rem] hover:bg-secundary hover:border-secundary hover:text-white hover:tracking-[0.175rem] hover:font-raleway-bold transition-all duration-300')}>
                {g.title.primary} <span className="hidden xl:inline-flex">&nbsp;{g.title.secundary}</span>
              </Anchor>
            ))}
          </div>
        </div>
        <Anchor href="/author" className="flex items-start justify-center xl:justify-end gap-4">
          <IconDown className="fill-tertiary" />
          <span className="text-white font-raleway-semiBold text-lg leading-none whitespace-nowrap">A Autora</span>
        </Anchor>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const data = await GamesData
  return { props: { data, ...await serverSideTranslations(locale, ['games']) } }
}

export default Games
