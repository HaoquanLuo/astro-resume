export type PrimitiveType = string | number

export type TObjectWithLabel<T> = {
  [K in keyof T]: {
    label: string
    value: T[K]
  }
}

export type TProject = {
  projectTitle: string
  projectTechnology: string[]
  projectIntro: string
  projectContent: string[]
}

export type TContact = {
  phone: string
  email: string
  site: string
}

export type TInfo = {
  name: string
  degree: string
  college: string
  major: string
}

export type TResumeItemContent =
  | PrimitiveType
  | Array<string>
  | Array<TProject>
  | TObjectWithLabel<TContact>
  | TObjectWithLabel<TInfo>

export type TResumeItem = {
  title: string
  content: TResumeItemContent
}

export type TResumeItemTitle =
  | 'contact'
  | 'info'
  | 'skills'
  | 'projects'
  | 'evaluation'

export type TResumeData = {
  [title in TResumeItemTitle]: TResumeItem
}
