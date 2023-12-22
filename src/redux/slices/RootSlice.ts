import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        authors_first_name: "Authors First Name",
        authors_last_name: "Authors Last Name",
        book_title: "Book Title",
        genre: "Genre",
        pages: "Total Page Number"
    },
    reducers: {
        chooseFirst: (state, action) => { state.authors_first_name = action.payload},
        chooseLast: (state, action) => { state.authors_last_name = action.payload},
        chooseTitle: (state, action) => { state.book_title = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
        choosePages: (state, action) => { state.pages = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirst, chooseLast, chooseTitle, chooseGenre, choosePages} = rootSlice.actions