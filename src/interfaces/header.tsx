export interface SubmenuProps {
  id: string
  subtitle: string
  source: string
}

export interface MenuProps {
  id: string
  title: string
  source: string
  submenu: SubmenuProps[]
}
