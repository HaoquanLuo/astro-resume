import { useHighlight } from 'src/hooks/useHighlight'
import type { ColorKind } from 'src/hooks/useHighlight'
import type {
  ArrayType,
  TContact,
  TObjectWithLabel,
  TProject,
  TResumeItem,
} from '../common/typings/resume'
import { resizeProjectText as resizeProjectText } from 'src/common/utils/resizeProjectText'
import useIcon from 'src/hooks/useIcon'

interface InfoBoxProps {
  item: TResumeItem
  colorKind?: ColorKind
}

const ArrayTypeBox = (props: InfoBoxProps) => {
  const { item, colorKind = 'primary' } = props

  return (
    <>
      <div class="font-semibold text-2xl mb-3">{item.title}</div>
      <div class="flex flex-col">
        {(item.content as ArrayType<TProject | string>).map((ov) => {
          if (typeof ov === 'string') {
            return (
              <div class="m-0.5 text-sm">{useHighlight(ov, colorKind)}</div>
            )
          }

          if (ov instanceof Object) {
            return (
              <div class="mb-6">
                {Object.entries(ov).map(([ik, iv]) => {
                  if (typeof iv === 'string') {
                    return (
                      <div
                        class={`mx-0.5 mt-2
                          ${resizeProjectText(ik)} `}
                      >
                        {useHighlight(iv, colorKind)}
                      </div>
                    )
                  }

                  if (iv instanceof Array) {
                    if (ik === 'projectTechnology') {
                      return (
                        <div class="flex justify-end my-1">
                          {iv.map((item) => {
                            return (
                              <div class={`m-0.5 ${resizeProjectText(ik)} `}>
                                {useIcon(item)}
                              </div>
                            )
                          })}
                        </div>
                      )
                    }

                    return (
                      <div class="pt-2">
                        {iv.map((item) => {
                          return (
                            <div class={`my-1 ${resizeProjectText(ik)} `}>
                              {useHighlight(item, colorKind)}
                            </div>
                          )
                        })}
                      </div>
                    )
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
