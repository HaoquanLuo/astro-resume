import { useContext, type JSXElement, createContext } from 'solid-js'
import type { ResumeItem } from '../common/typings/resume.d.ts'
import { metaData } from '../../meta.config.ts'

export interface ResumeItemProps {
  children: JSXElement
}

const ResumeItem = (props: ResumeItemProps) => {
  const { children } = props

  return (
    <div class="w-full rounded-lg bg-gray-200 px-5 py-4 text-black">
      {children}
    </div>
  )
}

export default ResumeItem
