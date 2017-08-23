import Document, { Head, Main, NextScript } from 'next/document';
import styles from '../scss/main.scss';

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage();
  }

  render() {
    const { __NEXT_DATA__: next } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>App</title>
          <link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900" rel="stylesheet" />

          {
            process.env.NODE_ENV === 'production' ? (
              <link
                rel="stylesheet"
                type="text/css"
                href={
                  `/static/css/styles.css?${next.buildStats['app.js'].hash}`
                }
              />
            ) : (
              // eslint-disable-next-line react/no-danger
              <style dangerouslySetInnerHTML={{ __html: styles }} />
            )
          }
        </Head>

        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
