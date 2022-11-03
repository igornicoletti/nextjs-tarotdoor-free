import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const MotionFade = ((props: any) => {
  const { children, ...rest } = props

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: .8 }} {...rest}>
      {children}
    </motion.div>
  )
})
