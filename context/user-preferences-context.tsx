"use client"

import { createContext, useContext, type ReactNode, useState } from "react"

type UserPreferencesContextType = {
  selectedCategories: string[]
  toggleCategory: (categoryId: string) => void
  darkMode: boolean
  toggleDarkMode: () => void
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined)

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["ai", "cybersecurity", "quantum"])
  const [darkMode, setDarkMode] = useState(true)

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <UserPreferencesContext.Provider
      value={{
        selectedCategories,
        toggleCategory,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  )
}

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext)
  if (context === undefined) {
    throw new Error("useUserPreferences must be used within a UserPreferencesProvider")
  }
  return context
}
