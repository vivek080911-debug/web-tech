import { configureStore } from '@reduxjs/toolkit'
// Named import for the slice
import { movieSlice } from "../redux/movieSlice" 

export const store = configureStore({
  reducer: {
    // Access the reducer via the slice object
    movie: movieSlice.reducer,
  }
})

// Note: Removed TypeScript exports like RootState and AppDispatch