'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <div>teste</div>
  )

  if(resolvedTheme === 'dark') {
    return <FiSun onClick={() => setTheme('light')}/>
  }

  if(resolvedTheme === 'light') {
    return <FiMoon onClick={() => setTheme('dark')}/>
  }
}