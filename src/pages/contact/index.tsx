import { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Check, Circle, CircleNotch } from 'phosphor-react'
import * as Yup from 'yup'
import 'yup-phone-lite'

import { IconUp } from '../../components/Icon'
import { Anchor } from '../../components/Anchor'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'
import { MotionDeck } from '../../components/Motion/MotionDeck'

interface ContactProps {
  name: string
  phone: string
  message: string
}

const contactSchema = Yup.object({
  name: Yup.string().required('Este campo é obrigatório.'),
  phone: Yup.string().phone('BR', 'Número de telefone inválido.').required('Este campo é obrigatório.'),
  message: Yup.string().required('Este campo é obrigatório.')
}).required()

const Contact: NextPage = () => {
  const { t } = useTranslation('contact')
  const [isSend, setIsSend] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactProps>({ resolver: yupResolver(contactSchema) })

  const handleSubmitContact = async (data: ContactProps) => {
    setIsSending(true)
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ id: String(Date.now()), ...data }),
      headers: { 'Content-Type': 'application/json' }
    })
    reset()
    setTimeout(() => {
      setIsSending(false)
      setIsSend(true)
      setTimeout(() => { setIsSend(false) }, 5000)
    }, 2500)
  }

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionDeck source={'/images/tarotdoor_cards_contact.png'} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense items-center gap-10">
          <div className="flex flex-col lg:col-start-2 lg:mx-auto">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              Fale conosco
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Vamos <br className="hidden lg:flex" /> conversar
            </h2>
            <ul className="font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider gap-2 mb-10">
              <li className="mb-5">Avenida lorem ipsum, 0000 - São Paulo - SP - Cep: 00000-000</li>
              <li>Email: contact@tarotdoor.com.br</li>
              <li>WhatsApp: +55 11 0000 0000</li>
              <li>Skype: contact@email.com.br</li>
            </ul>
            <div className="hidden lg:flex items-center text-secundary gap-8 text-lg">
              <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Youtube</Anchor>
              <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Instagram</Anchor>
              <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Facebook</Anchor>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleSubmitContact)} autoComplete="off" className="w-full max-w-lg flex flex-col lg:col-start-1 mx-auto">
            <div className="relative w-full h-[4.75rem] mb-8">
              <input placeholder=" " {...register('name')}
                className="relative w-full h-full flex items-center z-10 bg-transparent border-b-2 border-secundary  text-lg md:text-xl px-[1rem] md:px-[1.875rem] hover:outline-none focus:outline-none peer" />
              <label className="absolute top-0 left-0 -translate-y-1/2 text-lg md:text-xl px-[1rem] md:px-[1.875rem] peer-focus:text-primary/60 peer-focus:top-0 peer-placeholder-shown:top-2/4 transition-all duration-300">
                Nome completo
              </label>
              <p className="text-secundary text-sm md:text-base">{errors.name?.message}</p>
            </div>
            <div className="relative w-full h-[4.75rem] mb-8">
              <input placeholder=" " {...register('phone')}
                className="relative w-full h-full flex items-center z-10 bg-transparent border-b-2 border-secundary  text-lg md:text-xl px-[1rem] md:px-[1.875rem] hover:outline-none focus:outline-none peer" />
              <label className="absolute top-0 left-0 -translate-y-1/2 text-lg md:text-xl px-[1rem] md:px-[1.875rem] peer-focus:text-primary/60 peer-focus:top-0 peer-placeholder-shown:top-2/4 transition-all duration-300">
                Telefone
              </label>
              <p className="text-secundary text-sm md:text-base">{errors.phone?.message}</p>
            </div>
            <div className="relative w-full min-h-[4.75rem] pt-5 mb-10">
              <textarea placeholder=" " {...register('message')}
                className="relative w-full h-full flex items-center z-10 bg-transparent border-b-2 border-secundary  text-lg md:text-xl px-[1rem] md:px-[1.875rem] hover:outline-none focus:outline-none peer" />
              <label className="absolute top-0 left-0 -translate-y-1/2 text-lg md:text-xl px-[1rem] md:px-[1.875rem] peer-focus:text-primary/60 peer-focus:top-0 peer-placeholder-shown:top-2/4 transition-all duration-300">
                Mensagem
              </label>
              <p className="text-secundary text-sm md:text-base">{errors.message?.message}</p>
            </div>
            <div className="relative w-full max-w-sm lg:max-w-full mx-auto mt-5">
              <button type="submit" className="relative w-full lg:w-[15.75rem] h-[3.75rem] flex items-center justify-center text-center px-5 bg-transparent border-2 border-secundary text-secundary font-raleway-bold md:font-raleway-medium md:text-lg leading-3 md:leading-none tracking-[0.125rem] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secundary before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-300 hover:text-white hover:font-raleway-bold hover:before:w-full hover:before:opacity-[1]">
                {isSending ? (
                  <div className="relative flex gap-3 items-center">
                    <div className="relative w-[1.125rem] h-[1.125rem]">
                      <Circle size={18} className="absolute opacity-50" />
                      <CircleNotch size={18} className="relative animate-spin" />
                    </div>
                    <span className="relative">Enviando...</span>
                  </div>
                ) : (
                  <span className="relative">Enviar</span>
                )}
              </button>
            </div>
            {isSend && (
              <div className="relative flex gap-3 items-center justify-center lg:justify-start text-secundary mt-5">
                <Check size={18} />
                <p>Enviado com sucesso!</p>
              </div>
            )}
          </form>
          <div className="lg:hidden flex items-center justify-center text-secundary gap-8 text-lg">
            <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Youtube</Anchor>
            <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Instagram</Anchor>
            <Anchor href="/" target="_blank" className="hover:font-raleway-bold">Facebook</Anchor>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 grid-flow-row-dense items-center gap-10">
          <Anchor href="/" className="flex items-end justify-center gap-4 lg:col-start-3">
            <IconUp className="fill-secundary" />
            <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Início</span>
          </Anchor>
          <p className="font-raleway-regular text-sm md:text-lg text-center lg:text-left lg:col-start-1 lg:col-span-2">
            © {new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date())} Tarotdoor All Rights Reserved.
          </p>
        </div>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['contact']) } }
}

export default Contact
