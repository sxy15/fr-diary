export const isDark = useDark();

function enableTransitions() {
  return 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
}

export const toggleDark = async ({ clientX: x, clientY: y }: MouseEvent) => {
  if(!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${radius}px at ${x}px ${y}px)`,
  ]

  // @ts-expect-error
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready

  document.documentElement.animate(
    {clipPath: isDark.value ? clipPath.reverse() : clipPath},
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    }
  )
}

export const checkDark = () => {
  const prefersScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localSetting = localStorage.getItem('anfu-color-scheme');

  if(localSetting === 'dark' || (prefersScheme && localSetting !== 'light')) {
    document.documentElement.classList.toggle('dark', true)
    isDark.value = true;
  }
}