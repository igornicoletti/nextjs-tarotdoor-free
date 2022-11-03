import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Anchor } from '../../Anchor'

export const HeaderLanguage = () => {
  const router = useRouter()
  const [isLocale, setIsLocale] = useState<string>('pt')
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')
  useEffect(() => router.locale === 'pt' ? setIsLocale('pt') : setIsLocale('en'), [router.locale])

  return (
    <div className="relative hidden xl:flex justify-end gap-4 z-10">
      <Anchor locale={'en'} href={router.asPath} onClick={() => setIsLocale('en')}
        className={classNames(isLocale === 'en' ? 'font-raleway-bold text-tertiary bg-secundary' : 'text-primary bg-inherit', 'h-10 w-[6.25rem] flex items-center justify-center text-sm tracking-wide')}>
        English
      </Anchor>
      <Anchor locale={'pt'} href={router.asPath} onClick={() => setIsLocale('pt')}
        className={classNames(isLocale === 'pt' ? 'font-raleway-bold text-tertiary bg-secundary' : 'text-primary bg-inherit', 'h-10 w-[6.25rem] flex items-center justify-center text-sm tracking-wide')}>
        Português
      </Anchor>
    </div>
  )
}