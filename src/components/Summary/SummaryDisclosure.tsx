import { Disclosure } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'

import { SummaryProps } from '../../interfaces/summary'

interface SummaryDisclosureProps {
  summaryDisclosure: any
}

export const SummaryDisclosure = (({ summaryDisclosure }: SummaryDisclosureProps) => {
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <>
      <div className="w-full flex flex-col gap-10 mt-10 lg:hidden">
        {summaryDisclosure.map((s: SummaryProps) => (
          <Disclosure key={s.id} as="div" defaultOpen={s.id === '1'} className="flex flex-col gap-5">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between gap-5 text-left">
                  <h3 className="font-raleway-bold text-xl md:text-[1.375rem] uppercase tracking-[0.125rem] lg:tracking-[0.25rem] text-secundary">
                    {s.title}
                  </h3>
                  <CaretDown aria-hidden="true" size={18} weight="bold" className={classNames(open ? '-rotate-180' : 'rotate-0', 'w-full min-w-[1.375rem] max-w-[1.375rem] text-secundary transform mt-1')} />
                </Disclosure.Button>
                <Disclosure.Panel className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider" dangerouslySetInnerHTML={{ __html: s.description }} />
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <div className="relative w-full hidden lg:flex">
        <div className="absolute w-full h-calc-hash flex flex-col gap-20 pb-20 translate-y-full bottom-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
          {summaryDisclosure.map((s: SummaryProps) => (
            <div key={s.id} id={s.id} className="flex flex-col gap-5">
              <h3 className="font-raleway-bold text-xl md:text-[1.375rem] uppercase tracking-[0.125rem] lg:tracking-[0.25rem] text-secundary">
                {s.title}
              </h3>
              <div className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider" dangerouslySetInnerHTML={{ __html: s.description }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
})
