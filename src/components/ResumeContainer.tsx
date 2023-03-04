import type { JSXElement } from 'solid-js'
import { metaData } from '../../meta.config'
import ResumeItem from './ResumeItem.tsx'
import ObjectTypeBox from './ObjectTypeBox.tsx'
import ArrayTypeBox from './ArrayTypeBox.tsx'

interface ResumeContainerProps {}

const ResumeContainer = (props: ResumeContainerProps) => {
  const resumeData = metaData()

  return (
    <div class="flex flex-col w-full h-fit gap-6">
      <div class="flex w-full h-fit gap-6">
        <ResumeItem>
          <ObjectTypeBox item={resumeData.contact} colorKind="keyword" />
        </ResumeItem>
        <ResumeItem>
          <ObjectTypeBox item={resumeData.info} colorKind="site" />
        </ResumeItem>
      </div>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.skills} colorKind="keyword" />
      </ResumeItem>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.projects} />
      </ResumeItem>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.evaluation} colorKind="highlight" />
      </ResumeItem>
    </div>
  )
}

export default ResumeContainer
