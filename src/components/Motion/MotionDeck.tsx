import { motion } from 'framer-motion'

const variants = {
  initial: { top: '0%', left: '50%', y: '-50%', x: '-50%', opacity: 0 },
  animate: { top: '50%', left: '50%', y: '-50%', x: '-50%', opacity: 1 },
  exit: { top: '0%', left: '50%', y: '-100%', x: '-50%', opacity: 0 },
}

export const MotionDeck = ((props: any) => {
  const { source } = props

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: .8 }} className="fixed w-full h-full min-h-screen">
      <motion.img src={source} className="relative w-full h-full object-cover hidden md:block" />
    </motion.div>
  )
})
