import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'

import { Anchor } from '../Anchor'
import { QueriesPainelProps } from '../../interfaces/queries'
interface QueryPainelProps {
  queryPainel: any
  queryType: any
}

export const QueryPainel = (({ queryPainel, queryType }: QueryPainelProps) => {
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      {!queryType && (
        <Tab.Panel className="relative w-full flex gap-4">
          {queryPainel.map((q: QueriesPainelProps) => (
            <Anchor key={q.id} href={`/queries/${(q.queriesId)}`}>
              <div className={classNames(Number(q.id) % 2 === 0 ? 'bg-primary' : 'bg-secundary', 'relative w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem] text-left rounded py-10 px-7')}>
                <motion.img src={q.image} className={classNames(Number(q.id) % 2 === 0 ? 'bottom-0' : 'top-0', 'absolute left-0 w-[16.5rem] xl:w-[19.5rem] object-cover')} />
                <div className={classNames(Number(q.id) % 2 === 0 ? 'justify-start' : 'justify-end', 'relative w-full h-full flex flex-col')}>
                  <h3 className="font-raleway-bold uppercase tracking-[0.25rem] text-white text-xs">
                    {q.subtitle}
                  </h3>
                  <h2 className={classNames(Number(q.id) % 2 === 0 ? 'text-tertiary ' : 'text-primary', 'font-herculanum text-[2.5rem] md:text-[2.75rem] xl:text-[3.25rem] leading-[2.75rem] md:leading-[3rem] xl:leading-[3.5rem] mb-2')}>
                    {q.title}
                  </h2>
                  <p className="font-raleway-regular text-white text-lg tracking-[0.05rem] line-clamp-5 xl:line-clamp-6">
                    {q.summary}
                  </p>
                </div>
              </div>
            </Anchor>
          ))}
        </Tab.Panel>
      )}
      {queryType && (
        <>
          {queryPainel.map((q: QueriesPainelProps) => (
            <Tab.Panel key={q.id} className="relative w-full flex gap-4">
              {queryType.map((q: QueriesPainelProps) => (
                <Anchor key={q.id} href={`/queries/${(q.queriesId)}`}>
                  <div className={classNames(Number(q.id) % 2 === 0 ? 'bg-primary' : 'bg-secundary', 'relative w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem] text-left rounded py-10 px-7')}>
                    <motion.img src={q.image} className={classNames(Number(q.id) % 2 === 0 ? 'bottom-0' : 'top-0', 'absolute left-0 w-[16.5rem] xl:w-[19.5rem] object-cover')} />
                    <div className={classNames(Number(q.id) % 2 === 0 ? 'justify-start' : 'justify-end', 'relative w-full h-full flex flex-col')}>
                      <h3 className="font-raleway-bold uppercase tracking-[0.25rem] text-white text-xs">
                        {q.subtitle}
                      </h3>
                      <h2 className={classNames(Number(q.id) % 2 === 0 ? 'text-tertiary ' : 'text-primary', 'font-herculanum text-[2.5rem] md:text-[2.75rem] xl:text-[3.25rem] leading-[2.75rem] md:leading-[3rem] xl:leading-[3.5rem] mb-2')}>
                        {q.title}
                      </h2>
                      <p className="font-raleway-regular text-white text-lg tracking-[0.05rem] line-clamp-5 xl:line-clamp-6">
                        {q.summary}
                      </p>
                    </div>
                  </div>
                </Anchor>
              ))}
            </Tab.Panel>
          ))}
        </>
      )}
    </>
  )
})
