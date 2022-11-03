import { motion } from 'framer-motion'

interface NewMediaProps {
  newMedia: any
}

export const NewMedia = (({ newMedia }: NewMediaProps) => {
  return (
    <div className="w-full max-w-[52rem] flex flex-col mx-auto px-4 mb-10">
      <div className="flex items-center justify-between gap-5 mb-10">
        <h3 className="font-raleway-bold bg-primary text-tertiary text-sm rounded-md py-1 px-3">
          {newMedia.tag}
        </h3>
        <p className="text-lg tracking-wider">{newMedia.data}</p>
      </div>
      <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-10">
        {newMedia.title}
      </h2>
      <motion.img src={newMedia.image} className="relative w-full mb-5" />
      <q className="italic text-secundary text-lg tracking-wider mb-10">
        {newMedia.quotation}
      </q>
      <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-10">
        {newMedia.description}
      </p>
      <p className="font-raleway-extraBold text-xl text-secundary leading-[1.75rem] tracking-wider mb-10 pl-10 border-l-4 border-l-secundary">
        {newMedia.blockquote}
      </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-10">
        <motion.img src={newMedia.image} className="relative w-full h-full object-cover" />
        <motion.img src={newMedia.image} className="relative w-full h-full object-cover" />
      </div>
    </div>
  )
})
