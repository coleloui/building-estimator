import { createSlice } from '@reduxjs/toolkit';

interface IMember {
  member: { obj: object };
}

// member slice
export const member = createSlice({
  name: 'member',
  initialState: {
    obj: {},
  },
  reducers: {
    reset: (state, _) => {
      state.obj = {};
    },
    update: (state, { payload: { member: _member } }) => {
      state.obj = _member;
    },
  },
});

// reducer functions
export const { reset: resetMember, update: updateMember } = member.actions;

// selector functions
export const selectMember = (state: IMember) =>
  Object.keys(state.member.obj).length ? state.member.obj : false;

export default member.reducer;
