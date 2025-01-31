import { createSlice } from "@reduxjs/toolkit";
import competitors from "../../assets/competitors.json"


const initialState ={
    competitors: competitors,
    currentCompetitor: null,
    voteCount: 0
}

const competitorSlice = createSlice({
    name: "competitor",
    initialState,
    reducers: {
        setCurrentCompetitor: (state, action) =>{
            state.currentCompetitor = action.payload;
        },
        increaseVote : (state) =>{

            state.voteCount = state.voteCount + 1;
        },
        decreaseVote: (state)=>{
            state.voteCount = state.voteCount -1;
         },
         addVoteToCompetitor :(state, action)=>{
            let comIndex = state.competitors.findIndex(comp => comp.Id === action.payload)

            state.competitors[comIndex].NumberofVotes = Number( state.competitors[comIndex].NumberofVotes) + Number(state.voteCount)
         }
    }
})

export default competitorSlice.reducer;
export const {setCurrentCompetitor, decreaseVote, increaseVote,addVoteToCompetitor} = competitorSlice.actions