import { motion } from 'framer-motion'

interface NewPodcastProps {
  newPodcast: any
}

export const NewPodcast = (({ newPodcast }: NewPodcastProps) => {
  return (
    <div className="w-full max-w-[52rem] flex flex-col mx-auto px-4 mb-10">
      <div className="flex items-center justify-between gap-5 mb-10">
        <h3 className="font-raleway-bold bg-primary text-tertiary text-sm rounded-md py-1 px-3">
          {newPodcast.tag}
        </h3>
        <p className="text-lg tracking-wider">{newPodcast.data}</p>
      </div>
      <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-10">
        {newPodcast.title}
      </h2>
      <motion.img src={newPodcast.image} className="relative w-full mb-10" />
      <p className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider mb-10">
        {newPodcast.description}
      </p>
      <motion.img src={newPodcast.player} className="relative w-full max-w-[40.5rem] mx-auto" />
    </div>
  )
})
