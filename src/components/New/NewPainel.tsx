import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'

import { Anchor } from '../Anchor'
import { NewsPainelProps } from '../../interfaces/news'

interface NewPainelProps {
  newPainel: any
  newType: any
}

export const NewPainel = (({ newPainel, newType }: NewPainelProps) => {
  return (
    <>
      {!newType && (
        <Tab.Panel className="relative w-full grid grid-rows-2 grid-flow-col gap-4 justify-start">
          {newPainel.map((n: NewsPainelProps) => (
            <Anchor key={n.id} href={`/news/${(n.newsId)}`}>
              <div className="relative w-[16.5rem] xl:w-[19.5rem] h-[16.5rem] xl:h-[19.5rem] text-left rounded-lg">
                <motion.img src={n.image} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                <div className="h-full flex flex-col justify-between">
                  <div className="relative font-raleway-bold flex p-5">
                    {n.newsListId === 'media' && (
                      <h3 className="font-raleway-bold bg-secundary text-white text-xs rounded-md py-1 px-3">
                        {n.tag}
                      </h3>
                    )}
                    {n.newsListId === 'podcast' && (
                      <h3 className="font-raleway-bold bg-primary text-tertiary text-xs rounded-md py-1 px-3">
                        {n.tag}
                      </h3>
                    )}
                    {n.newsListId === 'blog' && (
                      <h3 className="font-raleway-bold bg-tertiary text-xs rounded-md py-1 px-3">
                        {n.tag}
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
        </Tab.Panel>
      )}
      {newType && (
        <>
          {newPainel.map((n: NewsPainelProps) => (
            <Tab.Panel key={n.id} className="relative w-full grid grid-rows-2 grid-flow-col gap-4 justify-start">
              <>
                {newType.map((n: NewsPainelProps) => (
                  <Anchor key={n.id} href={`/news/${(n.newsId)}`}>
                    <div className="relative w-[16.5rem] xl:w-[19.5rem] h-[16.5rem] xl:h-[19.5rem] text-left rounded-lg">
                      <motion.img src={n.image} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                      <div className="h-full flex flex-col items-stretch justify-between">
                        <div className="relative flex p-5">
                          {n.newsListId === 'media' && (
                            <h3 className="font-raleway-bold bg-secundary text-white text-xs rounded-md py-1 px-3">
                              {n.tag}
                            </h3>
                          )}
                          {n.newsListId === 'podcast' && (
                            <h3 className="font-raleway-bold bg-primary text-tertiary text-xs rounded-md py-1 px-3">
                              {n.tag}
                            </h3>
                          )}
                          {n.newsListId === 'blog' && (
                            <h3 className="font-raleway-bold bg-tertiary text-xs rounded-md py-1 px-3">
                              {n.tag}
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
              </>
            </Tab.Panel>
          ))}
        </>
      )}
    </>
  )
})
