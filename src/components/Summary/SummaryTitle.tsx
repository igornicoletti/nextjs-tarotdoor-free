import { Anchor } from '../Anchor'
import { SummaryProps } from '../../interfaces/summary'

interface SummaryTitleProps {
  summaryTitle: any
}

export const SummaryTitle = (({ summaryTitle }: SummaryTitleProps) => {
  return (
    <>
      {summaryTitle.map((s: SummaryProps) => (
        <Anchor key={s.id} href={`#${s.id}`} className="flex flex-col gap-5">
          <h3 className="text-lg tracking-[0.125rem] text-secundary">
            {s.title}
          </h3>
        </Anchor>
      ))}
    </>
  )
})
