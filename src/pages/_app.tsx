import { AppProps } from "next/app";

import "../css/vars.css";
import "../css/index.css";
import "../css/header.css";
import "../css/footer.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
