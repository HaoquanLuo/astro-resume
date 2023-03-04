export type IconKey = keyof typeof iconSet

const iconSet = {
  astro: 'svgs/astro.svg',
  solid: 'svgs/solid.svg',
}

const useIcon = (iconName: IconKey) => {
  const iconPath = iconSet[iconName]
  return <img class="w-6 h-6 mx-2" src={iconPath} alt={`icon-${iconName}`} />
}

export default useIcon
