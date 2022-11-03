import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { IconLeft, IconRight } from '../Icon'
import { useEcards } from '../../hooks/useEcards'

export interface EcardProps {
  person: string
  email: string
}

interface EcardSubjectProps {
  onEcardSubject: (type: boolean) => void
  onEcardAlgorithms: (type: boolean) => void
}

const ecardSchema = Yup.object({
  person: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string().email('E-mail inválido.').required('Este campo é obrigatório.')
}).required()


export const EcardSubject = (({ onEcardSubject, onEcardAlgorithms }: EcardSubjectProps) => {
  const { ecard, setEcard } = useEcards()
  const { register, handleSubmit, formState: { errors } } = useForm<EcardProps>({ resolver: yupResolver(ecardSchema) })

  const handleSubmitSubject = (data: EcardProps) => {
    const { person, email } = data
    setEcard({ ...ecard, person, email })
    onEcardSubject(true)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitSubject)} autoComplete="off" className="flex flex-col items-center justify-center gap-10">
      <div className="w-full max-w-lg flex flex-col gap-10 mx-auto">
        <div className="relative w-full h-[4.75rem]">
          <input type="text" placeholder=" " {...register('person')}
            className="relative w-full h-full flex items-center z-10 bg-transparent border-b-2 border-secundary  text-lg md:text-xl px-[1rem] md:px-[1.875rem] hover:outline-none focus:outline-none peer" />
          <label className="absolute top-0 left-0 -translate-y-1/2 text-lg md:text-xl px-[1rem] md:px-[1.875rem] peer-focus:text-primary/60 peer-focus:top-0 peer-placeholder-shown:top-2/4 transition-all duration-300">
            Nome de quem você quer mandar
          </label>
          <p className="text-secundary text-sm md:text-base">{errors.person?.message}</p>
        </div>
        <div className="relative w-full h-[4.75rem]">
          <input type="email" placeholder=" " {...register('email')}
            className="relative w-full h-full flex items-center z-10 bg-transparent border-b-2 border-secundary  text-lg md:text-xl px-[1rem] md:px-[1.875rem] hover:outline-none focus:outline-none peer" />
          <label className="absolute top-0 left-0 -translate-y-1/2  text-lg md:text-xl px-[1rem] md:px-[1.875rem] peer-focus:text-primary/60 peer-focus:top-0 peer-placeholder-shown:top-2/4 transition-all duration-300">
            E-mail de quem você quer mandar
          </label>
          <p className="text-secundary text-sm md:text-base">{errors.email?.message}</p>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row gap-5">
        <div className="flex items-center justify-center gap-5">
          <button type="button" onClick={() => onEcardAlgorithms(false)} className="opacity-100">
            <IconLeft className="fill-secundary" />
          </button>
          <ul className="flex items-center justify-center gap-1 font-raleway-bold text-[1.875rem] text-secundary">
            <li className="opacity-100">02</li>
            <li className="font-raleway-medium opacity-30">/</li>
            <li className="opacity-50">03</li>
          </ul>
          <button type="button" disabled={true} className="disabled:cursor-not-allowed disabled:opacity-50">
            <IconRight className="fill-secundary" />
          </button>
        </div>
        <button type="submit" className="relative w-full max-w-sm lg:max-w-[15.75rem] h-[3.75rem] flex items-center justify-center text-center mx-auto lg:mx-0 px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.21875rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
          <span className="relative">Próximo</span>
        </button>
      </div>
    </form>
  )
})
