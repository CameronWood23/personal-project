import React, { createContext, useEffect, useState } from "react"
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/FirebaseUtils"

interface User {
  id: string
  email: string
}

interface UserContextType {
  currentUser: User | null
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const value: UserContextType = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe // Cleanup function
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
