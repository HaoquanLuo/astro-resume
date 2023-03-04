import { createSignal } from 'solid-js'

export type IconKey = keyof typeof iconSet
export type SizeKey = keyof typeof sizeSet

const iconSet = {
  AntDesign: 'svgs/AntDesign.svg',
  Astro: 'svgs/Astro.svg',
  NodeJS: 'svgs/NodeJS.svg',
  React: 'svgs/React.svg',
  ReactRouter: 'svgs/ReactRouter.svg',
  Redux: 'svgs/Redux.svg',
  Sass: 'svgs/Sass.svg',
  SocketIO: 'svgs/SocketIO.svg',
  Solid: 'svgs/Solid.svg',
  TypeScript: 'svgs/TypeScript.svg',
  Vite: 'svgs/Vite.svg',
}

const sizeSet = {
  sm: 3.5,
  md: 4,
  lg: 6,
  xl: 8,
}

const useIcon = (iconName: IconKey, size: SizeKey = 'md') => {
  const iconPath = iconSet[iconName]
  const [showTips, setShowTips] = createSignal<boolean>(false)

  return (
    <div
      class="relative"
      onMouseEnter={() => setShowTips((prev) => !prev)}
      onMouseLeave={() => setShowTips((prev) => !prev)}
    >
      <img
        class={`h-${sizeSet[size]} mx-2`}
        src={iconPath}
        alt={`icon-${iconName}`}
      />
      {showTips() && (
        <div class="absolute w-fit px-1 -translate-x-1/2 -top-8 left-1/2 right-0 text-sm text-white bg-black bg-opacity-60 rounded">
          {iconName}
        </div>
      )}
    </div>
  )
}

export default useIcon
