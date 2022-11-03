import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { QueriesListProps } from '../../interfaces/queries'

interface QueryListProps {
  queryList: any
  handleQueries: (queriesListId: any) => Promise<void>
}

export const QueryList = (({ queryList, handleQueries }: QueryListProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      {queryList.map((q: QueriesListProps) => (
        <Tab as={Fragment} key={q.id}>
          {({ selected }: any) => (
            <button type="button" onClick={() => {
              setIsSelected(true)
              handleQueries(q.queriesListId)
            }} className={classNames(selected && isSelected ? 'text-white font-raleway-bold before:w-full before:opacity-[1]' : '', 'relative w-full lg:w-[17.5rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1] focus:outline-none focus-visible:outline-none')}>
              <span className="relative">{q.title}</span>
            </button>
          )}
        </Tab>
      ))}
    </>
  )
})
