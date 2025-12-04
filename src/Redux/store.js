import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./feature/PlayerSlice";

export const store= configureStore({
    reducer: {
        player: PlayerReducer,
      }
})