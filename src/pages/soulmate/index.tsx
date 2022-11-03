import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { IconUp } from '../../components/Icon'
import { Anchor } from '../../components/Anchor'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

const Soulmate: NextPage = () => {
  const { t } = useTranslation('soulmate')

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
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Alma gêmea
            </h2>
            <p className="font-raleway-bold uppercase mb-5 text-secundary text-lg md:text-xl leading-[2rem] tracking-wider md:tracking-[0.25rem]">
              Onde está minha alma gêmea?
            </p>
            <div className="flex flex-col gap-6 font-raleway-semiBold text-lg leading-[1.625rem] tracking-wider">
              <p>Use a linguagem simbólica para expandir a percepção de si mesmo e do universo que está inserido.</p>
              <p>Através da consciência do seu ser e da realidade que o cerca, você pode encaminhar a realização de todos os seus sonhos. Inclusive encontrar sua Alma Gêmea.</p>
              <p>Alma Gêmea é uma pessoa que se identifica muito com você, tanto, que quando ela aparece na sua vida precipita uma defragmentação do seu ego, e uma restruturação de uma nova identidade. Marcando com isso o início de um novo ciclo de sete anos. A Alma Gêmea, é a exata combinaçao que você precisa para se desenvolver. E tem um ciclo de duração de sete anos. Não que acabe em sete anos, mas depois de sete anos, um balanço, uma revisão acontece. E a relação pode ser renovada ou nào. Depende se a sintonia, e a possibilidade de crescimento mútuo se mantem.</p>
              <p>Existem Alma Gêmea do Espírito, o que representa uma parceria que já vem acontecendo por várias vidas, e muitas vezes com o intuito se fundir em uma única Alma ou Espírito. Esse tipo de Alma Gêmea pode ou não emergir na vida presente. É reconhecida pelas cartas do Eremita#9, da Esperança#17, o Crepúsculo #18, eo a Inspiração #19.</p>
              <p>Como também as cartas de Ouros. Na vida real, ela se reafirma com a sensação de conhecer aquela pessoa já há muito tempo, saudades, e coincidências dos marcos de transformações na vida dos dois, ou em relação à datas, ou a acontecimentos significativos semelhantes.</p>
              <p>A melhor maneira de você atrair sua Alma Gêmea é descobrindo a si próprio. Quanto mais você desenvolver e expandir seus talentos, habilidades, sabedoria, seu jeitinho de ser que só tem igual em você. Mas, facil será de ser reconhecida(o) pela sua Alma Gêmea.</p>
              <p>Especificamente par ao lado afetivo ofereço aqui alguns serviços como a Mandala A Magia do Amor, onde o foco é você, em como ressaltar suas qualidades. Especial para identificar o que te torna uma pessoa atraente e irresistível a sua Alma Gêmea. E a Sinastria da Pirâmide onde podemos estudar sua relação com alguém que você já está se relacionando e ver o que está acontecendo com vocês e como melhorar sua performance com ele. Tente também, o teste Meu Amor é minha Alma Gêmea, os Textos e grátis online O Tarot do Amor. Um abraço e muito amor na sua vida!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Anchor href="/queries" className="relative w-full lg:w-[17.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
              <span className="relative">Faça sua consulta</span>
            </Anchor>
            <Anchor href="/" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
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
  return { props: { ...await serverSideTranslations(locale, ['soulmate']) } }
}

export default Soulmate
