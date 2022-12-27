import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    position : ['탑', '정글', '미드', '원딜', '서포터'],
}

export const chooseSlice = createSlice({
    name: 'choose',
    initialState,
    reducers: {
        change: (state, action) => {
            state.value = state.position.indexOf(action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { change } = chooseSlice.actions

export default chooseSlice.reducer