import curry from 'lodash/curry';
import Document, { Head, Main, NextScript } from 'next/document';
import styles from '../scss/main.scss';

const isProduction = process.env.NODE_ENV === 'production';

const getLink = curry((nextData, link) => (
  isProduction ? `${link}?${nextData.buildStats['app.js'].hash}` : link
));

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage();
  }

  constructor(props) {
    super(props);

    this.getLink = getLink(props.__NEXT_DATA__);
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={this.getLink('/static/images/apple-icon-57x57.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={this.getLink('/static/images/apple-icon-60x60.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={this.getLink('/static/images/apple-icon-72x72.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={this.getLink('/static/images/apple-icon-76x76.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={this.getLink('/static/images/apple-icon-114x114.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={this.getLink('/static/images/apple-icon-120x120.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={this.getLink('/static/images/apple-icon-144x144.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={this.getLink('/static/images/apple-icon-152x152.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={this.getLink('/static/images/apple-icon-180x180.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={this.getLink('/static/images/android-icon-192x192.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={this.getLink('/static/images/favicon-32x32.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={this.getLink('/static/images/favicon-96x96.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={this.getLink('/static/images/favicon-16x16.png')}
          />

          <link
            rel="manifest"
            href={this.getLink('/static/manifest.json')}
          />

          <meta
            name="msapplication-TileColor"
            content="#54c2f5"
          />

          <meta
            name="msapplication-TileImage"
            content={this.getLink('/static/images/ms-icon-144x144.png')}
          />

          <meta
            name="theme-color"
            content="#ffffff"
          />

          {
            process.env.NODE_ENV === 'production' ? (
              <link
                rel="stylesheet"
                type="text/css"
                href={this.getLink('/static/css/styles.css')}
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
