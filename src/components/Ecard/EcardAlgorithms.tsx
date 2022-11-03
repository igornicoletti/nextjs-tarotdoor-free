import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { IconLeft, IconRight } from '../Icon'
import { useEcards } from '../../hooks/useEcards'

interface EcardProps {
  algorithm: string
}

interface EcardAlgorithmsProps {
  onEcardAlgorithms: (type: boolean) => void
}

const ecardSchema = Yup.object({
  algorithm: Yup.string().required('Por favor, selecione um número.').nullable()
}).required()

const ecardAlgorithmsData = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]

export const EcardAlgorithms = (({ onEcardAlgorithms }: EcardAlgorithmsProps) => {
  const { ecard, setEcard } = useEcards()
  const [ecardAlgorithms, setEcardAlgorithms] = useState<number | null>(null)
  const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ')
  const { register, handleSubmit, formState: { errors } } = useForm<EcardProps>({ resolver: yupResolver(ecardSchema) })

  const handleSubmitAlgorithms = (data: EcardProps) => {
    const { algorithm } = data
    setEcard({ ...ecard, algorithm })
    onEcardAlgorithms(true)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitAlgorithms)} autoComplete="off" className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col text-center gap-5">
        <div className="w-full max-w-[44rem] flex flex-wrap justify-center gap-2">
          {ecardAlgorithmsData.map((value, index) => (
            <button key={index} onClick={() => setEcardAlgorithms(value)}
              className={classNames(ecardAlgorithms === value ? 'bg-primary' : '', 'relative w-[3.75rem] h-[3.125rem] flex items-center justify-center gap-[0.625rem] border-2 border-primary rounded-[0.1875rem] font-raleway-bold text-[1.375rem] text-secundary hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer')}>
              <input type="radio" value={value} {...register('algorithm', { required: true })} className="absolute w-full h-full opacity-0 cursor-pointer" />
              {value}
            </button>
          ))}
        </div>
        <p className="text-secundary text-sm md:text-base">{errors.algorithm?.message}</p>
      </div>
      <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row gap-5 -mt-5">
        <div className="flex items-center justify-center gap-5">
          <button type="button" disabled={true} className="disabled:cursor-not-allowed disabled:opacity-50">
            <IconLeft className="fill-secundary" />
          </button>
          <ul className="flex items-center justify-center gap-1 font-raleway-bold text-[1.875rem] text-secundary">
            <li className="opacity-100">01</li>
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
