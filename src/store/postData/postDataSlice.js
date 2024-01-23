import {createSlice} from '@reduxjs/toolkit';
import {postDataRequestAsync} from './postDataAction';

const initialState = {
  posts: [],
  error: '',
  after: '',
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
      state.isLast = false;
      state.posts = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        postDataRequestAsync.pending, (state) => {
          state.error = '';
          state.status = 'loading';
        })
      .addCase(postDataRequestAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.posts = [...state.posts, ...action.payload.children];
          state.after = action.payload.after;
          state.isLast = !action.payload.after;
          state.error = '';
          state.status = 'loaded';
        }
      })
      .addCase(postDataRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export default postDataSlice.reducer;
