import Document, { Html, Head, Main, NextScript } from 'next/document'

class RootDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/typescript-react-embedded-widget-starter@latest/dist/embedded-widget.js"></script>
          <script>EmbeddedWidget.mount();</script>
        </body>
      </Html>
    )
  }
}

export default RootDocument
