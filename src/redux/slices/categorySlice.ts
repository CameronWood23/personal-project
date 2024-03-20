import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCategoriesAndDocuments } from "../../utils/firebase/FirebaseUtils"
import { AppThunk } from "../store"

interface CategoryMap {
  [key: string]: any
}

interface CategoriesState {
  categoriesMap: CategoryMap
  isLoading: boolean
  error: string | null
}

const initialState: CategoriesState = {
  categoriesMap: {},
  isLoading: false,
  error: null,
}

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesMap(state, action: PayloadAction<CategoryMap>) {
      state.categoriesMap = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

// Define fetchCategories separately from the slice
export const fetchCategories = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const categoriesMap: CategoryMap = await getCategoriesAndDocuments()
    dispatch(setCategoriesMap(categoriesMap))
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export const { setCategoriesMap, setLoading, setError } = categorySlice.actions

export default categorySlice.reducer
