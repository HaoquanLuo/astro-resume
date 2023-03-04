import type { JSXElement } from 'solid-js'
import { metaData } from '../../meta.config'
import ResumeItem from './ResumeItem.tsx'
import ObjectTypeBox from './ObjectTypeBox.tsx'
import ArrayTypeBox from './ArrayTypeBox.tsx'
import useIcon from 'src/common/hooks/useIcon.tsx'
import type { IconKey } from 'src/common/hooks/useIcon.tsx'

interface ResumeContainerProps {}

const ResumeContainer = (props: ResumeContainerProps) => {
  const resumeData = metaData()

  const iconRenderer = (icons: IconKey[]) => {
    return icons.map((iconName) => <>{useIcon(iconName, 'xl')}</>)
  }

  const ResumeFooter = () => {
    const icons = ['Astro', 'Solid']

    return (
      <div class="flex gap-1 justify-center items-center h-fit">
        <span>Made with</span>
        {iconRenderer(icons)}
        <span>and</span>
        <span class="text-lg text-red-600">❤</span>
        <span>By</span>
        <span class="font-semibold">ffxixslh</span>
        <span>.</span>
      </div>
    )
  }

  return (
    <div class="flex flex-col w-full h-fit gap-5">
      <div class="flex w-full h-fit gap-5">
        <ResumeItem>
          <ObjectTypeBox item={resumeData.contact} colorKind="info" />
        </ResumeItem>
        <ResumeItem>
          <ObjectTypeBox item={resumeData.info} colorKind="primary" />
        </ResumeItem>
      </div>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.skills} colorKind="keyword" />
      </ResumeItem>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.projects} colorKind="highlight" />
      </ResumeItem>
      <ResumeItem>
        <ArrayTypeBox item={resumeData.evaluation} colorKind="important" />
      </ResumeItem>
      <ResumeFooter />
    </div>
  )
}

export default ResumeContainer
