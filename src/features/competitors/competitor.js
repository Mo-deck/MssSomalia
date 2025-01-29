import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    competitors: [],
    currentCompetitor: null,
    voteCount: 0
}

const competitorSlice = createSlice({
    name: "competitor",
    initialState,
    reducers: {
        setCurrentCompetitor: (state, action) =>{
            state.currentCompetitor = action.payload;
        }
    }
})

export default competitorSlice.reducer;
export const {setCurrentCompetitor} = competitorSlice.actions