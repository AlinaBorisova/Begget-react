import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: '',
  after: '',
  afterSearch: '',
  search: '',
  isLast: false,
  page: '',
  status: '',
};

export const postDataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.afterSearch = '';
      state.isLast = false;
      state.posts = [];
      if (action.payload !== 'search') {
        state.search = '';
      }
    },
    postDataRequest: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    postDataRequestSuccess: (state, action) => {
      if (state.after) {
        state.posts = [...state.posts, ...action.payload.children];
      } else {
        state.posts = action.payload.children;
      }
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.error = '';
      state.status = 'loaded';
    },
    postDataRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },

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
        } else {
          state.posts = action.payload.children;
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       postDataRequestAsync.pending, (state) => {
  //         state.error = '';
  //         state.status = 'loading';
  //       })
  //     .addCase(postDataRequestAsync.fulfilled, (state, action) => {
  //       if (action.payload) {
  //         state.posts = [...state.posts, ...action.payload.children];
  //         state.after = action.payload.after;
  //         state.isLast = !action.payload.after;
  //         state.error = '';
  //         state.status = 'loaded';
  //       }
  //     })
  //     .addCase(postDataRequestAsync.rejected, (state, action) => {
  //       state.status = 'error';
  //       state.error = action.error;
  //     });
  // }
});

export default postDataSlice.reducer;
export const {
  changePage,
  postDataRequest,
  postDataRequestSuccess,
  postDataRequestError,
  searchRequest,
  searchRequestSuccess,
  searchRequestError,
} = postDataSlice.actions;
