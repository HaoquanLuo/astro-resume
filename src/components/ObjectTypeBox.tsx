import { useHighlight, type ColorKind } from 'src/common/hooks/useHighlight'
import type {
  ContactType,
  InfoType,
  ObjectWithLabelType,
  ResumeItem,
} from '../common/typings/resume'

interface InfoBoxProps {
  item: ResumeItem
  colorKind?: ColorKind
}

const ObjectTypeBox = (props: InfoBoxProps) => {
  const { item, colorKind = 'primary' } = props

  return (
    <>
      <div class="font-semibold text-2xl mb-3">{item.title}</div>
      <div>
        {Object.values(
          item.content as ObjectWithLabelType<ContactType | InfoType>
        ).map((ov) => {
          return (
            <div class="my-1">
              {Object.entries(ov).map(([ik, iv]) => {
                return ik !== 'label' ? (
                  <>{useHighlight(iv, 'info')}</>
                ) : (
                  <>{iv}</>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ObjectTypeBox
