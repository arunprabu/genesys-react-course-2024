import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

/* 
  createSlice is A function that accepts an initial state, 
  an object full of reducer functions, 
  and a "slice name", 
  and automatically generates action creators 
  and action types that correspond to the reducers and state.
*/

interface User {
  id?: number
  name: string
  phone: string
  email: string
}

interface UsersState {
  isLoading: boolean
  isError: boolean
  userList: User[]
  status: string
}

const initialState: UsersState = {
  isLoading: false,
  isError: false,
  userList: [],
  status: "idle",
}

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers", // action type
  async () => {
    console.log("3. Inside fetchUsersAsync")
    // axios call
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    )
    return response.data
  },
)

export const addUserAsync = createAsyncThunk<
  User, // return type
  User // type of form data we receive from comp
>("users/addUser", async (addUserFormData) => {
  console.log("3. Inside addUserAsync")
  // axios call
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    addUserFormData, // sending the form data to rest api
  )
  return response.data
})

// we need to create slice
export const usersSlice = createSlice({
  name: "users", // needs a name
  initialState: initialState, // initial data for the feature
  reducers: {
    // if you want to update the store locally w/o connecting to the rest api
    // write the logic here
  },
  extraReducers: (builder) => {
    // if you want to update the store by connecting to the rest api
    // write the logic here
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        console.log("2. Inside addCase of fetchUsersAsync")
        // store data for this feature will be available in state.
        console.log(state)
        state.isLoading = true // updating the store with new data
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        console.log("4. Inside addCase of fetchUsersAsync -- fulfilled")
        state.isLoading = false
        state.userList = action.payload
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        console.log("4. Inside addCase of fetchUsersAsync -- rejected")
        state.isLoading = false
        state.isError = true
      })
      .addCase(addUserAsync.pending, (state) => {
        // store data for this feature will be available in state.
        console.log(state)
        state.isLoading = true // updating the store with new data
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userList = [...state.userList, action.payload]
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export default usersSlice.reducer
