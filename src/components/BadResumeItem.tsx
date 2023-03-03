import type { JSX } from 'solid-js/jsx-runtime'
import type { ResumeItem } from '../common/typings/resume.d.ts'

export interface ResumeItemProps {
  resumeValue: ResumeItem
}

const BadResumeItem = (props: ResumeItemProps) => {
  const { resumeValue } = props

  const getCorrespondType: (content: unknown) => JSX.Element = (content) => {
    if (content instanceof Object) {
      if (content instanceof Array) {
        return (
          <div class="flex flex-col gap-2">
            {content.map((item) => {
              if (typeof item === 'string' || typeof item === 'number') {
                return <div>{item}</div>
              }

              return getCorrespondType(item)
            })}
          </div>
        )
      }

      return Object.entries(content).map(([_itemKey, itemValue]) => {
        if (typeof itemValue === 'string' || typeof itemValue === 'number') {
          return <div>{itemValue}</div>
        }

        return getCorrespondType(itemValue)
      })
    }

    if (typeof content === 'string' || typeof content === 'number') {
      return <div>{content}</div>
    }
  }

  return (
    <div class="my-2">
      <div class="mb-1 font-serif text-2xl">{resumeValue.title}</div>
      <div class={`pl-2 flex gap-2 text-base `}>
        {getCorrespondType(resumeValue.content)}
      </div>
    </div>
  )
}

export default BadResumeItem
