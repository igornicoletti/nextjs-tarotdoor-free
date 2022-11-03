import { Fragment, SetStateAction } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { Anchor } from '../../Anchor'
import { IconMenu } from '../../Icon'
import { MenuData } from '../../../data/menu'
import { MenuProps, SubmenuProps } from '../../../interfaces/header'

interface HeaderMenuProps {
  onHeaderMenu: React.Dispatch<SetStateAction<boolean>>
}

export const HeaderMenu = ({ onHeaderMenu }: HeaderMenuProps) => {
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <Popover className="relative flex justify-center z-20">
      {({ open }) => (
        <>
          <Popover.Button
            onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)}
            className="relative flex flex-col items-center justify-center gap-2 z-10 focus:outline-none focus-visible:outline-none">
            <IconMenu aria-hidden="true" className={classNames(!open ? 'iconSlideUp fill-primary' : 'iconSlideDown fill-secundary', 'w-[3.1875rem] md:w-[4.1875rem] xl:w-[5.1875rem]')} />
            <p className="hidden xl:flex text-sm tracking-wide">
              {!open
                ? (<span className="text-primary/60">Abrir menu</span>)
                : (<span className="text-tertiary/60">Fechar menu</span>)
              }
            </p>
          </Popover.Button>
          <Transition as={Fragment} enter="transition ease-out duration-500 transform" enterFrom="opacity-0 -translate-y-full" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-500 transform" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-full">
            <Popover.Panel className="fixed w-full h-full min-h-screen top-0 left-0 pt-28 xl:pt-44 bg-primary/90">
              <nav className="relative w-full h-full flex flex-col items-center justify-start text-center gap-10 px-4 pb-20 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                <ul role="list" className="flex flex-col gap-6">
                  {MenuData.map((m: MenuProps) => (
                    <li key={m.id} className="gap-2 flex flex-col">
                      <Anchor href={m.source}>
                        <Popover.Button onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)} className="text-lg text-tertiary tracking-[0.35rem] leading-none uppercase">
                          {m.title}
                        </Popover.Button>
                      </Anchor>
                      <ul role="list" className="relative gap-12 hidden md:flex justify-center">
                        {m.submenu.map((s: SubmenuProps) => (
                          <li key={s.id}>
                            <Anchor href={s.source}>
                              <Popover.Button onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)} className="font-raleway-regular text-sm uppercase text-white/60 tracking-widest leading-none">
                                {s.subtitle}
                              </Popover.Button>
                            </Anchor>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <ul role="list" className="flex xl:hidden items-center justify-center gap-8">
                  <li>
                    <Anchor href="/" target="_blank" onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)}>
                      <Popover.Button className="text-lg text-secundary tracking-widest">
                        Youtube
                      </Popover.Button>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="/" target="_blank" onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)}>
                      <Popover.Button className="text-lg text-secundary tracking-widest">
                        Instagram
                      </Popover.Button>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="/" target="_blank" onClick={() => setTimeout(() => { onHeaderMenu(!open) }, 150)}>
                      <Popover.Button className="text-lg text-secundary tracking-widest">
                        Facebook
                      </Popover.Button>
                    </Anchor>
                  </li>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
