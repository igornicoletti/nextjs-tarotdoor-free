import { SetStateAction } from 'react'

import { Anchor } from '../../Anchor'
import { IconTarotDoor } from '../../Icon'

interface HeaderLogoProps {
  onHeaderLogo: boolean
  handleHeaderLogo: React.Dispatch<SetStateAction<boolean>>
}

export const HeaderLogo = ({ onHeaderLogo, handleHeaderLogo }: HeaderLogoProps) => {
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')

  return (
    <div className="relative flex justify-start z-30 xl:z-10">
      <Anchor href="/" onClick={() => handleHeaderLogo(false)}>
        <IconTarotDoor aria-hidden="true" className={classNames(onHeaderLogo ? 'fill-tertiary xl:fill-primary' : 'fill-primary', 'w-[12.375rem] md:w-[16.875rem] xl:w-[18.375rem] 2xl:w-[20.875rem]')} />
        <span className="sr-only">TarotDoor Free Online</span>
      </Anchor>
    </div>
  )
}
