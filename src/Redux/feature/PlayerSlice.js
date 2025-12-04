import {createSlice, current} from "@reduxjs/toolkit"

const initialState={
    ActiveList:[],
    isPlaying:false,
    isActive:false,
    ActiveSong:{},
    currentIndex:0
}

const PlayerSlice= createSlice({
    name:"player",
    initialState,
    reducers:{
        setActiveSong:(state,action)=>{
        state.ActiveSong=action.payload.song;
        state.ActiveList=action.payload.list;
        state.currentIndex=action.payload.i;
        state.isActive=true,
        state.isPlaying=true
        },
        nextSong:(state,action)=>{
        if((state.ActiveList?.[state.currentIndex+1])){
            state.currentIndex=state.currentIndex+1;
            state.ActiveSong=state.ActiveList?.[state.currentIndex]
        }
        if(state.currentIndex===state.ActiveList.length-1){
            state.currentIndex=0;
            state.ActiveSong=state.ActiveList?.[state.currentIndex]
        }
       
        },
        prevSong:(state,action)=>{
        if((state.ActiveList?.[state.currentIndex-1])){
            state.currentIndex=state.currentIndex-1;
            state.ActiveSong=state.ActiveList?.[state.currentIndex]
        }
        },
        playPause:(state,action)=>{
            state.isPlaying=action.payload
        },
        cancelMusic:(state,action)=>{
            state.ActiveList=[]
            state.ActiveSong={}
            state.isPlaying=false
            state.isActive=false
        }
    }
})

export const {setActiveSong,nextSong,prevSong,playPause,cancelMusic} =PlayerSlice.actions;

export default PlayerSlice.reducer;