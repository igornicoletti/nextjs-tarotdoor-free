import { ForwardedRef, forwardRef } from 'react'

import Link from 'next/link'

export const Anchor = forwardRef((props: any, ref: ForwardedRef<unknown>) => {
  const { href, locale, children, ...rest } = props

  return (
    <Link href={href} locale={locale} scroll={false}>
      <a ref={ref} {...rest}>{children}</a>
    </Link>
  )
})

Anchor.displayName = 'Anchor' 