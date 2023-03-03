export type PrimitiveType = string | number

export type ArrayType<T> = Array<T>

export type ObjectWithLabelType<T> = {
  [K in keyof T]: {
    label: string
    value: T[K]
  }
}

export type ProjectType = {
  projectTitle: string
  projectContent: string[]
}

export type ContactType = {
  phone: number
  email: string
}

export type InfoType = {
  name: string
  degree: string
  college: string
  major: string
  site: string
}

export type ResumeItemContent =
  | PrimitiveType
  | ArrayType<string>
  | ArrayType<ProjectType>
  | ObjectWithLabelType<ContactType>
  | ObjectWithLabelType<InfoType>

export type ResumeItem = {
  title: string
  content: ResumeItemContent
}

export type ResumeItemTitle =
  | 'contact'
  | 'info'
  | 'skills'
  | 'projects'
  | 'evaluation'

export type ResumeData = {
  [title in ResumeItemTitle]: ResumeItem
}
