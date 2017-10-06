import { START, FINISH, PAGE_LOAD } from '../constants';

export const load = ({ name, context }) => ({
  type: PAGE_LOAD,
  payload: {
    name,
    context
  }
});

export const loadStart = (name) => ({
  type: PAGE_LOAD + START,
  payload: {
    name
  }
});

export const loadFinish = (name) => ({
  type: PAGE_LOAD + FINISH,
  payload: {
    name
  }
});
