import { motion } from 'framer-motion'

export const MotionFlip = ((props: any) => {
  const { variants, variantsY, source } = props

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: .8 }} className="relative w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem] perspective">
      <motion.div initial="initial" animate="animate" exit="exit" variants={variantsY} transition={{ duration: .8 }} className="relative w-full h-full preserve-3d rounded-3xl">
        <motion.img src={'/images/tarotdoor_card.png'} className="absolute w-full h-full backface-hidden" />
        <motion.img src={source} className="absolute w-full h-full backface-hidden -rotate-y-180" />
      </motion.div>
    </motion.div>
  )
})
