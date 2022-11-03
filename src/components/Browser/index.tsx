import Head from 'next/head'

export const Browser = ((props: any) => {
  const { title } = props

  return (
    <Head><title>{title}</title></Head>
  )
})
