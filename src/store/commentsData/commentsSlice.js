import {createSlice} from '@reduxjs/toolkit';
// import {commentsRequestAsync} from './commentsDataAction';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
  id: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsRequest: (state, action) => {
      state.error = '';
      state.status = 'loading';
      state.id = action.payload;
    },
    commentsRequestSuccess: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.status = 'loaded';
      state.error = '';
      state.id = action.payload.id;
    },
    commentsRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(commentsRequestAsync.pending, (state) => {
  //       state.error = '';
  //       state.status = 'loading';
  //     })
  //     .addCase(commentsRequestAsync.fulfilled, (state, action) => {
  //       state.post = action.payload.post;
  //       state.comments = action.payload.comments;
  //       state.status = 'loaded';
  //       state.error = '';
  //     })
  //     .addCase(commentsRequestAsync.rejected, (state, action) => {
  //       state.status = 'error';
  //       state.error = action.error;
  //     });
  // }
});

export default commentsSlice.reducer;
export const {
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError,
} = commentsSlice.actions;
