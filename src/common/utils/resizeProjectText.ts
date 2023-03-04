import type { ProjectType } from 'src/common/typings/resume.d.ts'

type ProjectKeys = {
  [K in keyof ProjectType]: K
}

const projectKeys: ProjectKeys = {
  projectTitle: 'projectTitle',
  projectIntro: 'projectIntro',
  projectContent: 'projectContent',
}

export const resizeProjectText = (value: string) => {
  switch (value) {
    case projectKeys['projectTitle']:
      return 'text-lg'

    case projectKeys['projectIntro']:
      return 'text-md'

    case projectKeys['projectContent']:
      return 'text-md'

    default:
      return 'text-md'
  }
}
