import MasterLayout from '../src/components/layouts/master';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/style.scss";
import { Provider } from 'react-redux';
import { store, persistor } from "../src/redux/store";
import { PersistGate } from 'redux-persist/lib/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MasterLayout>
          <Component {...pageProps} />
        </MasterLayout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
