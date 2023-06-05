import { metaData } from '../../meta.config'
import ResumeInfoBox from './ResumeInfoBox.tsx'
import ArrayTypeBox from './ArrayTypeBox.tsx'
import useIcon from 'src/hooks/useIcon.tsx'
import type { IconKey } from 'src/hooks/useIcon.tsx'
import ResumeItemBox from './ResumeItemBox.tsx'

interface ResumeContainerProps {}

const ResumeContainer = (props: ResumeContainerProps) => {
  const resumeData = metaData()

  const ResumeFooter = () => {
    const icons: IconKey[] = ['Astro', 'Solid']

    const iconRenderer = (icons: IconKey[]) => {
      return icons.map((iconName) => <>{useIcon(iconName, 'xl')}</>)
    }

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
        <ResumeItemBox>
          <ResumeInfoBox item={resumeData.contact} colorKind="info" />
        </ResumeItemBox>
        <ResumeItemBox>
          <ResumeInfoBox item={resumeData.info} colorKind="primary" />
        </ResumeItemBox>
      </div>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.skills} colorKind="keyword" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.projects} colorKind="highlight" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.evaluation} colorKind="important" />
      </ResumeItemBox>
      <ResumeFooter />
    </div>
  )
}

export default ResumeContainer
