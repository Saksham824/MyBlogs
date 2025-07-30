"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Determine if dark mode is active
  const isDark = resolvedTheme === "dark"

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}