import { createContext, type JSXElement } from 'solid-js'
import { ResumeData } from '../common/typings/resume.d.ts'
import { metaData } from '../../meta.config'
import ResumeItem from './ResumeItem.tsx'
import ObjectTypeBox from './ContactBox.tsx'

interface ResumeContainerProps {
  children: JSXElement
}

const ResumeContainer = (props: ResumeContainerProps) => {
  const { children } = props

  const resumeData = metaData()

  return (
    <div class="flex flex-col w-full h-fit gap-6">
      <div class="flex w-full h-fit gap-6">
        <ResumeItem>
          <ObjectTypeBox item={resumeData.contact} colorKind={'keyword'} />
        </ResumeItem>
        <ResumeItem>
          <ObjectTypeBox item={resumeData.info} colorKind={'highlight'} />
        </ResumeItem>
      </div>
      <ResumeItem>
        <ObjectTypeBox item={resumeData.contact} />
      </ResumeItem>
    </div>
  )
}

export default ResumeContainer
