"use client"
import { ReactNode, useContext } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ClientThemeWrapper({children}: ThemeProviderProps) {
  const {theme} = useContext(ThemeContext) 

  return <div data-theme={theme}>{children}</div>

}