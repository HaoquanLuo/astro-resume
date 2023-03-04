import { useHighlight } from 'src/common/hooks/useHighlight'
import type { ColorKind } from 'src/common/hooks/useHighlight'
import type {
  ArrayType,
  ContactType,
  ObjectWithLabelType,
  ProjectType,
  ResumeItem,
} from '../common/typings/resume'
import { resizeProjectText as resizeProjectText } from 'src/common/utils/resizeText'

interface InfoBoxProps {
  item: ResumeItem
  colorKind?: ColorKind
}

const ArrayTypeBox = (props: InfoBoxProps) => {
  const { item, colorKind = 'primary' } = props

  return (
    <>
      <div class="font-semibold text-2xl mb-3">{item.title}</div>
      <div>
        {(item.content as ArrayType<ProjectType | string>).map((ov) => {
          if (typeof ov === 'string') {
            return <div class={`m-1 `}>{useHighlight(ov, colorKind)}</div>
          }
          if (ov instanceof Object) {
            return (
              <div class="my-1">
                {Object.entries(ov).map(([ik, iv]) => {
                  if (typeof iv === 'string') {
                    return (
                      <div class={`m-0.5 ${resizeProjectText(ik)} `}>
                        {useHighlight(iv, colorKind)}
                      </div>
                    )
                  }

                  if (iv instanceof Array) {
                    return iv.map((item) => {
                      return (
                        <div class={`mx-0.5 ${resizeProjectText(ik)} `}>
                          {useHighlight(item, colorKind)}
                        </div>
                      )
                    })
                  }
                })}
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default ArrayTypeBox
