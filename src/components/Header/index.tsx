import { useState } from 'react'

import { HeaderLogo } from './HeaderSteps/HeaderLogo'
import { HeaderMenu } from './HeaderSteps/HeaderMenu'
import { HeaderLanguage } from './HeaderSteps/HeaderLanguage'

export const Header = (() => {
  const [headerType, setHeaderType] = useState<boolean>(false)

  return (
    <div className="absolute w-full h-14 md:h-20 xl:h-28 top-0 left-0 z-50">
      <div className="relative h-full w-full max-w-[102rem] flex items-end px-4 mx-auto">
        <div className="w-full flex xl:grid xl:grid-cols-3 items-center justify-between">
          <HeaderLogo onHeaderLogo={headerType} handleHeaderLogo={setHeaderType} />
          <HeaderMenu onHeaderMenu={setHeaderType} />
          <HeaderLanguage />
        </div>
      </div>
    </div>
  )
})