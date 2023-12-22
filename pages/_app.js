import MasterLayout from '../src/components/layouts/master';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/style.scss";
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>
  )
}

export default MyApp
