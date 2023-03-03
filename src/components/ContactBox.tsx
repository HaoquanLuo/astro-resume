import { addColor, type ColorKind } from 'src/common/utils/addColor.ts'
import type {
  ContactType,
  ObjectWithLabelType,
  ResumeItem,
} from '../common/typings/resume.d.ts'

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
        {Object.entries(item.content as ObjectWithLabelType<ContactType>).map(
          ([_ok, ov]) => {
            return (
              <div class="my-1">
                {Object.entries(ov).map(([ik, iv]) => (
                  <span
                    class={`mx-0.5 ${
                      ik === 'value' && addColor(iv, colorKind)
                    }`}
                  >
                    {iv}
                  </span>
                ))}
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default ObjectTypeBox
