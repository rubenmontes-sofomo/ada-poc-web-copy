import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'

const {
  ANALYTICS_WRITE_KEY = 'mV5doQT9HcNzTdo5stXjbS4YaX4sT2Ic',
  NODE_ENV = 'development',
} = process.env

export default class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
