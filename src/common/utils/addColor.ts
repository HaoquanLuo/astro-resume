export type ColorKind = keyof typeof colorSet

export const colorSet = {
  primary: 'text-gary-600',
  highlight: 'text-yellow-500',
  keyword: 'text-orange-600',
  important: 'text-red-500',
  site: 'text-blue-400',
}

export const addColor = (value: string, kind: ColorKind) => {
  const strValue = String(value)

  const color = colorSet[kind]
  const validator = /[a-zA-Z0-9]+/g
  return validator.test(strValue) ? color : ''
}
