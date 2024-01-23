import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsDataAction';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.status = 'loaded';
        state.error = '';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export default commentsSlice.reducer;
