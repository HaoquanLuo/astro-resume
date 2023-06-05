import { useHighlight, type ColorKind } from 'src/hooks/useHighlight'
import type {
  TContact,
  TInfo,
  TObjectWithLabel,
  TResumeItem,
} from '../common/typings/resume'

interface InfoBoxProps {
  item: TResumeItem
  colorKind?: ColorKind
}

const ResumeInfoBox = (props: InfoBoxProps) => {
  const { item, colorKind = 'primary' } = props

  return (
    <>
      <div class="font-semibold text-2xl mb-3">{item.title}</div>
      <div>
        {Object.values(item.content as TObjectWithLabel<TContact | TInfo>).map(
          (ov) => {
            return (
              <div class="my-1">
                {Object.entries(ov).map(([ik, iv]) => {
                  return ik !== 'label' ? (
                    <>{useHighlight(iv, colorKind)}</>
                  ) : (
                    <>{iv}</>
                  )
                })}
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default ResumeInfoBox
