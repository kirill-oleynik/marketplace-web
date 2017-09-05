import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import initStore from './init_store';

export default function withReduxAndSaga(Component) {
  return withRedux(initStore)(
    withReduxSaga(Component)
  );
}
