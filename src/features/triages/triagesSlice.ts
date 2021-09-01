import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { RootState } from '@/store/index'
import { Triage } from '@/types'
import { fetcher } from '@/utils/index'

const triagesAdapter = createEntityAdapter<Triage>({
  selectId: (triage) => triage.uid,
})

export const fetchTriages = createAsyncThunk(
  'triages/fetchTriages',
  async () => {
    try {
      return await fetcher('entries/triage')
    } catch (error: unknown) {
      return new Promise((resolve, reject) => reject(error))
    }
  }
)

export const triagesSlice = createSlice({
  name: 'triages',
  initialState: triagesAdapter.getInitialState({
    status: 'idle',
    error: null,
    fetched: false,
  }),
  reducers: {
    triagesReceived(state, action) {
      triagesAdapter.setAll(state, action.payload)
      state.fetched = true
    },
    triageUpdated: triagesAdapter.updateOne,
  },
})

export const { triagesReceived, triageUpdated } = triagesSlice.actions

const triageSelectors = triagesAdapter.getSelectors()

export const triagesLoaded = (state: RootState): boolean =>
  state.triages.fetched

export const selectTriageByUID = (state: RootState, uid: string) =>
  triageSelectors.selectById(state.triages, uid)

export default triagesSlice.reducer
