import { motion } from 'framer-motion'

export const MotionSwitch = ((props: any) => {
  const { variants } = props

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: .8 }}
      className="fixed w-full h-full min-h-screen bg-primary/60 backdrop-blur-[2px] xl:backdrop-blur-none" />
  )
})
