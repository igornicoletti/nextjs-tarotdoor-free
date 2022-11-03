import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

export interface EcardsProps {
  algorithm?: string
  name?: string
  email?: string
  person?: string
  phone?: string
  message?: string
}

interface EcardsProviderProps {
  children: ReactNode
}

interface EcardsContextProps {
  ecard: EcardsProps
  setEcard: Dispatch<SetStateAction<EcardsProps>>
  createEcard: () => Promise<void>
}

const EcardsContext = createContext<EcardsContextProps>({} as EcardsContextProps)

export function EcardsProvider({ children }: EcardsProviderProps) {
  const [ecard, setEcard] = useState<EcardsProps>({})

  async function createEcard() {
    await fetch('/api/ecards', {
      method: 'POST',
      body: JSON.stringify({ id: String(Date.now()), ...ecard }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <EcardsContext.Provider value={{ ecard, setEcard, createEcard }}>
      {children}
    </EcardsContext.Provider>
  )
}

export function useEcards() {
  const context = useContext(EcardsContext)
  return context
}