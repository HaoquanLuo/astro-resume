import type { JSXElement } from 'solid-js'

export type ColorKind = keyof typeof colorSet

export const colorSet = {
  primary: 'text-gray-600 font-sans font-normal',
  highlight: 'text-yellow-500 font-serif font-medium',
  keyword: 'text-orange-600 font-mono font-semibold',
  important: 'text-red-500 font-bold',
  info: 'text-blue-500 font-normal',
}

/**
 * @description 关键字高亮
 */
export const useHighlight = (value: string, kind?: ColorKind) => {
  // 默认 'primary' 颜色
  let color = colorSet['primary']
  if (kind) {
    color = colorSet[kind]
  }

  // e.g. '了解 Node.js ，常用 Express、 Koa、 Vite 等技术搭建接口服务器'
  // 0. 在每个 word 的前后用空格将其分隔
  // 1. 搜索 word 放入 keywords
  // 2. 遍历 keywords 替换 word ，存入 result 数组中
  const keywordValidator = new RegExp('([a-zA-Z0-9]+)([.@/][a-zA-Z]+)*', 'g')
  const matchRaws = value.matchAll(keywordValidator)
  const keywords: string[] = []

  for (const raw of matchRaws) {
    keywords.push(raw[0])
  }

  let copyStr = value
  let isTouch = false
  let result: (string | JSXElement)[] = []
  let currentWorkStr: string = ''

  keywords.forEach((keyword, index) => {
    const workStr = isTouch ? currentWorkStr : copyStr
    const startIdx = workStr.indexOf(keyword)
    const endIdx = workStr.indexOf(keyword) + keyword.length

    // 截取 keyword 前后两段字符串
    // e.g. [ front , , end ]
    const splitStr = [workStr.slice(0, startIdx), workStr.slice(endIdx)]
    // 打平重组
    // e.g. [ <span>...</span>, front, <span>...</span> , end ]
    const flatStr = splitStr.flatMap((token) => [
      <span class={`align-middle text-lg ${color}`}>{keyword}</span>,
      token,
    ])
    // 截取正确部分，从数组下标为 '1' 处开始
    // e.g. [ front, <span>...</span> , end ]
    const sliceStr = flatStr.slice(1)
    // 结束操作
    isTouch = true
    // 存储为结果
    // e.g. [ ...result, front, <span>...</span> ]
    result = [...result, ...sliceStr.slice(0, -1)]
    // 后面一段设置为 currentWorkStr
    // e.g. end
    currentWorkStr = sliceStr.at(-1) as string

    // 判断是否到最后一个 keyword
    if (index === keywords.length - 1) {
      result = [...result, currentWorkStr]
    }
  })

  // 如果 keywords 为空数组则直接输出
  if (keywords.length === 0) {
    return <>{value}</>
  }

  // 保险起见，给 result 打平一层
  return result.flatMap((item) => <>{item}</>)
}
