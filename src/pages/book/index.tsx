import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

const Book: NextPage = () => {
  const { t } = useTranslation('book')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense items-start justify-between lg:gap-10">
          <div className="relative lg:sticky w-full max-w-[21rem] md:max-w-[31.5rem] lg:max-w-[42rem] mx-auto flex flex-col items-center justify-center lg:col-start-2 top-0 lg:top-28 xl:top-40 pb-14 md:pb-28">
            <motion.img src={'/images/tarotdoor_textbook.png'} className="relative w-[14rem] md:w-[21rem] xl:w-[28rem] h-[20.75rem] md:h-[30.875rem] xl:h-[41.125rem] top-0 mr-0 ml-auto" />
            <motion.img src={'/images/tarotdoor_book.png'} className="absolute w-[15.8125rem] md:w-[22.875rem] xl:w-[31.25rem] h-[20.75rem] md:h-[30.125rem] xl:h-[41.125rem] bottom-0 left-0" />
          </div>
          <div className="flex flex-col lg:col-start-1 mt-10">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Livro
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              O Tarot Egípcio: <br className="hidden md:flex" /> A jornada em busca do ser
            </h2>
            <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
              O conjunto dos nossos dons e conhecimentos formam o nosso self ou nosso espírito e determinam nossos anseios. A linguagem simbólica foi criada por nós como instrumento de comunicação entre nossa mente e nosso self. Espero através deste site passar um pouco do que aprendi no exercício com essa língua maravilhosa e universal. E que você passe a se privilegiar desse contato que os símbolos oferecem à você de se conhecer cada vez mais, ampliando a consciência das suas capacidades e o poder de realização dos seus ideais. Comecei a escrever este livro há mais de 40 anos atrás, mas nunca consegui terminar porque sempre existe algo para acrescentar.
            </p>
            <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-5">
              O conjunto dos nossos dons e conhecimentos formam o nosso self ou nosso espírito e determinam nossos anseios. A linguagem simbólica foi criada por nós como instrumento de comunicação entre nossa mente e nosso self. Espero através deste site passar um pouco do que aprendi no exercício com essa língua maravilhosa e universal. E que você passe a se privilegiar desse contato que os símbolos oferecem à você de se conhecer cada vez mais, ampliando a consciência das suas capacidades e o poder de realização dos seus ideais. Comecei a escrever este livro há mais de 40 anos atrás, mas nunca consegui terminar porque sempre existe algo para acrescentar.
            </p>
            <p className="font-raleway-bold md:font-raleway-extraBold text-secundary text-lg leading-[1.75rem] tracking-wider mb-10">
              Tenho o prazer de comunicar que agora você pode adquirir uma versão do meu livro para impressão ou uso digital.
            </p>
            <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 mx-auto">
              <Anchor href="/book/summary" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                <span className="relative">Índice do livro</span>
              </Anchor>
              <Anchor href="/" className="relative w-full lg:w-[15.75rem] h-[3.75rem]  flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary  font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                <span className="relative">Comprar livro</span>
              </Anchor>
            </div>
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
  return { props: { ...await serverSideTranslations(locale, ['book']) } }
}

export default Book
