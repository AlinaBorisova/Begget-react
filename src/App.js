import Header from './components/Header';
import Main from './components/Main';
import {store} from './store';
import {Provider} from 'react-redux';
// import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';

function App() {
  console.log('app');
  return (
    <Provider store={store}>
      {/* <TokenContextProvider>*/}
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
      {/* </TokenContextProvider>*/}
    </Provider>
  );
}

export default App;


