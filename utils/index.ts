export function getClassNameFunction(rootClassName: string) {
  return (identifier?: string) => `${rootClassName}${identifier ? `__${identifier}` : ''}`
}
