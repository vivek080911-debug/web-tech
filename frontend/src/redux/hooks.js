import { useDispatch, useSelector } from 'react-redux';

// Removed: import type { TypedUseSelectorHook } from 'react-redux'
// Removed: import type { RootState, AppDispatch } from './store'

// Standard dispatch and selector hooks without explicit typing
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;