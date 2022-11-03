
import { motion } from 'framer-motion'

export const MotionShuffle = ((props: any) => {
  const { variants, source } = props

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: .8 }}
      className="relative w-[16.5rem] xl:w-[19.5rem] h-[32rem] xl:h-[38rem]">
      <motion.img src={source} className="relative w-full h-full" />
    </motion.div>
  )
})