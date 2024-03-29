import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import  {store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
  );
}

export default MyApp;
