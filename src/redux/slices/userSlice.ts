import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/firebase/FirebaseUtils"
import { AppThunk } from "../store"

interface User {
  id: string
  email: string
}

interface UserState {
  currentUser: User | null
}

const initialState: UserState = {
  currentUser: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions

export const fetchCurrentUser = (): AppThunk => (dispatch) => {
  const unsubscribe = onAuthStateChangedListener((user: any) => {
    if (user) {
      createUserDocumentFromAuth(user)
    }
    dispatch(setCurrentUser(user))
  })
  return unsubscribe
}

export default userSlice.reducer
