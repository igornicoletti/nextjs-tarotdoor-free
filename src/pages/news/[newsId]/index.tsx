import { MouseEvent, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../../components/Anchor'
import { Browser } from '../../../components/Browser'
import { NewBlog } from '../../../components/New/NewBlog'
import { NewMedia } from '../../../components/New/NewMedia'
import { NewPodcast } from '../../../components/New/NewPodcast'
import { MotionFade } from '../../../components/Motion/MotionFade'
import { IconDown, IconFacebook, IconInstagram, IconTwitter } from '../../../components/Icon'

import { NewsPainelProps } from '../../../interfaces/news'
import { getNews, getAllNews, getShuffleNews } from '../../../lib/news'

const NewsSteps: NextPage = ({ data, shuffleData }: any) => {
  const { t } = useTranslation('news')
  const elRef = useRef<HTMLDivElement | null>(null)
  const [isMouseStartX, setIsMouseStartX] = useState<any>()
  const [isMouseScrollX, setIsMouseScrollX] = useState<any>()
  const [isMouseStatus, setIsMouseStatus] = useState<boolean>(false)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const el = elRef.current!
    setIsMouseStatus(true)
    setIsMouseStartX(e.pageX - el.offsetLeft)
    setIsMouseScrollX(el.scrollLeft)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const el = elRef.current!
    if (!isMouseStatus) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - isMouseStartX) * 3
    el.scrollLeft = isMouseScrollX - walk
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] flex flex-col gap-10 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="w-full flex flex-col items-center my-auto">
          {data.newsListId === 'media' && (<NewMedia newMedia={data} />)}
          {data.newsListId === 'blog' && (<NewBlog newBlog={data} />)}
          {data.newsListId === 'podcast' && (<NewPodcast newPodcast={data} />)}
          <div className="w-full flex flex-col px-4">
            <p className="text-secundary tracking-[0.25rem] text-lg text-center mb-5">Compartilhar</p>
            <hr className="w-full max-w-[31.25rem] border-t-2 border-t-secundary mx-auto mb-10" />
            <div className="flex justify-center gap-5 mb-20">
              <Anchor href="/" target="_blank">
                <IconFacebook className="fill-secundary hover:fill-primary w-[2.5rem] h-[2.5rem] transition-all duration-300" />
              </Anchor>
              <Anchor href="/" target="_blank">
                <IconInstagram className="fill-secundary hover:fill-primary w-[2.5rem] h-[2.5rem] transition-all duration-300" />
              </Anchor>
              <Anchor href="/" target="_blank">
                <IconTwitter className="fill-secundary hover:fill-primary w-[2.5rem] h-[2.5rem] transition-all duration-300" />
              </Anchor>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary text-center mb-10">
              Veja também
            </h2>
            <div ref={elRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={() => setIsMouseStatus(false)} onMouseLeave={() => setIsMouseStatus(false)}
              className="relative w-auto max-w-full px-4 select-none overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              <div className="relative w-full flex justify-between gap-4">{shuffleData.map((n: NewsPainelProps) => (
                <Anchor key={n.id} href={`/news/${(n.newsId)}`} className="snap-center shrink-0">
                  <div className="relative w-[16.5rem] xl:w-[18.75rem] h-[16.5rem] xl:h-[18.75rem] text-left rounded-lg">
                    <motion.img src={n.image} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                    <div className="h-full flex flex-col justify-between">
                      <div className="relative flex p-5">
                        {n.newsListId === 'media' && (
                          <h3 className="font-raleway-bold bg-secundary text-white text-xs rounded-md py-1 px-3">
                            {n.tag} ({n.id})
                          </h3>
                        )}
                        {n.newsListId === 'podcast' && (
                          <h3 className="font-raleway-bold bg-primary text-tertiary text-xs rounded-md py-1 px-3">
                            {n.tag} ({n.id})
                          </h3>
                        )}
                        {n.newsListId === 'blog' && (
                          <h3 className="font-raleway-bold bg-tertiary text-xs rounded-md py-1 px-3">
                            {n.tag} ({n.id})
                          </h3>
                        )}
                      </div>
                      <div className="absolute flex flex-col gap-1 w-full h-2/4 justify-end left-0 bottom-0 bg-gradient-to-t from-primary text-white tracking-[0.015rem] text-sm rounded-b-lg p-5">
                        <h2 className="font-raleway-bold">{n.title}</h2>
                        <p className="font-raleway-regular">{n.anchor}</p>
                      </div>
                    </div>
                  </div>
                </Anchor>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-4 items-center justify-center xl:justify-between gap-10">
          <Anchor href="/news" className="relative w-full max-w-sm lg:w-[12.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
            <span className="relative">Voltar</span>
          </Anchor>
          <Anchor href="/book" className="flex items-start justify-center lg:justify-end gap-4">
            <IconDown className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Livro</span>
          </Anchor>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const paths = await getAllNews()
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const data = await getNews(ctx)
  const shuffleData = await getShuffleNews()
  return { props: { data, shuffleData, ...await serverSideTranslations(ctx.locale, ['news']) } }
}

export default NewsSteps
