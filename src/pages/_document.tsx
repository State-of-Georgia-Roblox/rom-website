import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

class MyDocument extends Document<{ path: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, path: ctx.asPath };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="State of Georgia-ROBLOX" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          ></meta>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Header path={this.props.path} />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
