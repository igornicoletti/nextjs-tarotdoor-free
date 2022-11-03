import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

import { Anchor } from '../../components/Anchor'
import { IconDown } from '../../components/Icon'
import { Browser } from '../../components/Browser'
import { MotionFade } from '../../components/Motion/MotionFade'

const Story: NextPage = () => {
  const { t } = useTranslation('story')

  return (
    <>
      <Browser title={`${t('headtitle')} | TarotDoor Free Online`} />
      <MotionFade className="relative h-full min-h-screen w-full max-w-[102rem] grid grid-rows-1 gap-10 px-4 pb-20 pt-28 xl:pt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense items-start justify-between lg:gap-10">
          <div className="relative lg:sticky flex flex-col items-center justify-center lg:col-start-2 top-0 lg:top-28 xl:top-40">
            <motion.img src={'/images/tarotdoor_history.png'} className="relative w-[14rem] md:w-[21rem] xl:w-[28rem] h-[20.75rem] md:h-[30.875rem] xl:h-[41.125rem]" />
          </div>
          <div className="flex flex-col lg:col-start-1 mt-10">
            <h3 className="md:text-lg uppercase tracking-[0.25rem] md:tracking-[0.35rem] mb-5">
              A história
            </h3>
            <h2 className="font-herculanum text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[3rem] md:leading-[3.75rem] lg:leading-[4.5rem] text-secundary mb-5">
              Quem é Nelise Carbonare Vieira
            </h2>
            <div className="flex flex-col gap-6 font-raleway-semiBold text-lg leading-[1.75rem] tracking-wider">
              <p>Nasci sob o signo de aquário, numa família protestante, porém bem aberta, estudei em escolas de projetos experimentais em S. Paulo, e na Igreja absorvi muitos conceitos da Teologia da Libertação que era base do pastor. Reverendo Oswaldo Alves é psicólogo, teólogo e estudioso da parapsicologia, e naquela época durante seus sermões e na Escola dominical, aprendi a exercer a prática da filosofia e a análise do desenvolvimento da consciência humana. Aos quinze anos, me distanciei da Igreja, e encontrei no Jung, a satisfação das minhas necessidades de estudar o ser humano. No colégio, comecei a utilizar o I Ching para analisar as pessoas, e apesar deste oráculo ser um texto de meditação, eu ajudava os outros a meditarem com ele. Minha opção deste pequena era fazer psicologia, mas já muito adiantada nos estudos da psicologia analítica, não consegui me motivar o suficiente para cursar o modelo behaviorista que era comum nas universidades da época, e com uma ideologia mais socialista, achei mais útil a pedagogia. Fiz o curso na PUC-SP, Piaget era a base do curso, assim o estudo do desenvolvimento do processo cognitivo me encantou, e passou a complementar os estudos do Jung, como também as idéias de Rudolf Steiner, idealizador da Pedagogia Waldorf, que entrei em contato, em função de estágio para a faculdade.Paralelamente, estudava a simbologia, em várias fontes: astrologia, quiromancia, mitologia e qualquer material de ocultismo que eu encontrava. Com 18 anos ganhei meu primeiro livro de Tarot, não tinha baralho, fiz um pequeno e comecei a brincar, depois encontrei meu primeiro baralho, na Bienal de Livros era o Tarot Adivinhatórios da Ed. Pensamento, a partir disto comecei a brincar muito com o Tarot.</p>
              <p>Com 21 anos, minha primeira filha recém-nascida, aconteceu a primeira experiência mágica com o Tarot: Passei o final de semana com amigos em uma fazenda em Tatuí, tirei usando este baralho da Pensamento Tarot para 7 pessoas, usava o livro para interpretar as cartas, fiquei muito chateada, porque só dava tragédias, o texto era muito pesado. Achei que não devia mais tirar o Tarot. Na segunda feira já de volta em S. Paulo, um amigo me procurou, querendo que eu tirasse o Tarot, disse para ele, que não queria, que achava que era muito pesado, ele insistiu, fui buscar o livro, não encontrei de jeito nenhum ( anos mais tarde encontrei este livro na casa de uma amiga minha que não estava neste final de semana na fazenda). Mesmo sem livro, tirei as cartas para ele, e de novo só tragédias. Fiquei firme no propósito de não mexer mais com aquelas cartas. <br />No mesmo dia, passeando com minha filha, passei em frente da loja Mandala, na Alameda Lorena, do prof. Molinero. Ele não costumava vender tarot na sua loja, mas, naquele dia, passando na calçada me surpreendi e fui atraída por muitas caixinhas no balcão de sua loja. Entrei eram sete baralhos de Tarot diferentes. Passei a tarde toda dentro da loja, com minha filha dormindo no carrinho. Escolhi o baralho egípcio, naquela época, não sabia nada das lendas do Tarot, e achei que a mitologia egípcia era mais antiga que a grego romana, que era a base do Tarot de Marseille, era mais genuína, original. Lembro que paguei com dois cheques.</p>
              <p>O fato, foi que surpreendentemente, eu conseguia ler aquele baralho sem me utilizar do livro, e ao contrário de só dar tragédias, eu conseguia passar um mensagem bastante positiva para as pessoas. A partir daí, mergulhei no estudo do Tarot. No Tarot Egípcio da Editora Kier, é um pouco diferente do Tarot tradicional (Marseille), não existe nenhuma referência dos naipes, apenas é numerado de 1 a 78, mantendo uma divisão que separa as 22 primeiras cartas, correspondentes aos Arcanos Maiores. Os Arcanos (cartas do Tarot), normalmente são separados em cinco grupos, Arcanos Maiores, de 1 a 22, e os Arcanos Menores, de 23 a 78 que são subdivididos nos quatro naipes do baralho convencional: Paus, Copas, Espadas e Ouros. Essa diferença, despertou em mim a curiosidade de tentar identificar no Tarot Egípcio, os naipes e as figuras, assim comecei a estudar os símbolos da mitologia egípcia das cartas deste Tarot, que por sinal é riquíssimo neste aspecto, buscando as associações nos livros de Tarot convencionais. <br />O resultado foi desenvolver uma teoria própria do caminho que o Tarot descreve, baseada nas conceitos da psicologia analítica. Criei também, meu próprio método de trabalho, desenvolvi um jogo, onde com as cartas formam uma espécie de linha histórica, que abrange 16 meses, oito meses atrás e os próximos oito meses do dia da consulta, e já das primeiras brincadeiras com o Tarot Egípcio, eu já comecei a usar este método e a anotar todas as cartas que os consulente tiravam comigo, e como no começo eram só amigos, a comparar com os acontecimentos mais tarde.</p>
              <p>Aos 23 anos, assumi a profissão, e à partir daí a coisa andou muito rápido, a imprensa me descobriu logo. E eu comecei a trabalhar muito e a dar cursos. Porém, trabalhando intensamente com as pessoas em crise, comecei a me alterar muito emocionalmente. Percebi que estava me contaminando demais com as emoções dos meus clientes, muitas vezes chegando a captar muito antes até de atendê-los a primeira vez, já que a fila de espera, entre marcar a consulta e ser atendido, naquela época era de pelo menos um mês de antecedência, minha vida virou uma bagunça. Foi aí, que eu conheci o Dr. Eliezer Mendes, e sua teoria acerca da mediunidade, e sobre as doenças psiquiátricas. Ele considera este fenômeno, como uma capacidade da consciência humana, e que através do desenvolvimento da sensitividade, podemos ser capazes de identificar e superar nossos traumas, e até captar e ajudarmos as pessoas a se libertarem de seus traumas também. <br />Assim, passei a desenvolver minha sensibilidade, o que deu base, para me equilibrar melhor emocionalmente e para começar a estudar a psique de uma forma mais profunda. Eliezer, utilizava as técnicas de regressão com seus pacientes, e utilizava sensitivas para o trabalho de captação de vidas passadas. Participei dos trabalhos de sua Clínica em S.Paulo, e de várias comunidades psiquiátricas que ele tentou criar ao longo de uns sete anos. No início eu não atendia meus pacientes com a captação, mas os encaminhava para as sensitivas do Dr. Eliezer, através dos trabalhos das sensitivas, comecei a observar que as imagens captadas, pareciam demais com as histórias vividas na infância pela pessoas ou até fatos da histórias dos antepassados.</p>
              <p>Assim, comecei a desenvolver uma teoria, que estes trabalhos de regressão possibilitam a produção de sonhos, que podem ser utilizados como base, para um estudo psico-analítico dos pacientes. Atualmente, desenvolvo como sensitiva, este trabalho com as imagens do inconsciente sob a forma de Terapia de Transidentificação. Este foi o meu trajeto até agora. No momento estou morando em Fairfax na Califórnia, USA, desenvolvendo estudos de consciência corporal com o intuito de trabalhar com estados de extrema cognição, além do atendimento no consultório e ministrando palestras sobre temas, que percebo ser de muito interesse do público que me procura, como por exemplo, o tema, <q>Alma Gêmea</q>, que é um ensaio sobre a problemática do amor, que é um dos assuntos principais, dos meus clientes. <br />No momento, tenho no meu arquivo, mais de 12 mil consultas registradas. E muitas matérias publicadas nos maiores veículos de comunicação do Brasil, desde 80, última publicação Revista Claudia de janeiro/98, editora Abril. A foto acima na página, foi capa do encarte das Revistas Nova e Quatro Rodas em 1982 (teste para a posterior revista Vejinha São Paulo), quando previ a vitória de Franco Montoro como governador.</p>
            </div>
          </div>
        </div>
        <Anchor href="/queries" className="flex items-start justify-center lg:justify-end gap-4">
          <IconDown className="fill-secundary" />
          <span className="font-raleway-semiBold text-lg leading-none whitespace-nowrap">Consultas</span>
        </Anchor>
      </MotionFade>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return { props: { ...await serverSideTranslations(locale, ['story']) } }
}

export default Story
