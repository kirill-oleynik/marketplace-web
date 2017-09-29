import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import initStore from './init_store';

export default function withReduxAndSaga(Component, mapStateToProps = null) {
  return withRedux(initStore, mapStateToProps)(
    withReduxSaga(Component)
  );
}
