import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: '',
  after: '',
  afterSearch: '',
  search: '',
  isLast: false,
  // page: '',
  status: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // changePageSearch: (state, action) => {
    //   state.page = action.payload;
    //   state.afterPosts = '';
    //   state.afterSearch = '';
    //   state.isLast = false;
    //   state.posts = [];
    //   if (action.payload !== 'search') {
    //     state.search = '';
    //   }
    // },
    searchRequest: (state, action) => {
      state.error = '';
      state.status = 'loading';
      if (action.payload) {
        state.search = action.payload;
      }
    },
    searchRequestSuccess: (state, action) => {
      if (action.payload) {
        if (state.afterSearch) {
          state.posts = [...state.posts, ...action.payload.children];
          console.log(state.posts);
        } else {
          state.posts = action.payload.children;
          console.log(state.posts);
          console.log(state.search);
        }
        state.afterSearch = action.payload.after;
        state.isLast = !action.payload.after;
        state.error = '';
        state.status = 'loaded';
      }
    },
    searchRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
      state.search = '';
    },
  },

});

export default searchSlice.reducer;
export const {
  changePageSearch,
  searchRequest,
  searchRequestSuccess,
  searchRequestError,
} = searchSlice.actions;
