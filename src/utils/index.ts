export function getPaths(path: string) {
  const modulesFiles = import.meta.glob(`./views/${path}`)
  const modules = new Set()
  const files = []
  Object.keys(modulesFiles).forEach((module) => {
    modules.add(module.match(/(?<=\.\/views\/)(\w+)/g)?.[0])
    files.push(module)
  })

  return modules
}
