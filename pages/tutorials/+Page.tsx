import "./_styles/_page.scss";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { Head } from "vike-react/Head";
import { MainFooter } from "@core/components/layout/components/footer/MainFooter";

export { Page };

function Page() {
  return (
    <main id="page__tutorials">
      <Head>
        <title>Tutorials</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Tutorials</h1>

        <section>
          <details id="tutorial-1">
            <summary>
              <span>Adding a Chrome Extension (chrome.lore.land)</span>
            </summary>
            <h3>Step 1: Prepare the Manifest File</h3>
            <p>
              Create a <code>manifest.json</code> file in the root of your
              extension’s folder. This file defines the extension’s details and
              behavior.
            </p>
            <pre>
              <code>
                {`{
  "manifest_version": 3,
  "name": "chrome.lore.land",
  "version": "1.0",
  "description": "Your description here.",
  "action": {
    "default_popup": "popup.html"
  },
  "permissions": ["tabs"]
}`}
              </code>
            </pre>

            <h3>Step 2: Create Basic Files</h3>
            <p>
              Create <code>popup.html</code> and <code>popup.js</code> as the
              base files for your extension:
            </p>
            <pre>
              <code>{`<!-- popup.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chrome Extension Popup</title>
</head>
<body>
  <h1>Welcome to chrome.lore.land!</h1>
  <script src="popup.js"></script>
</body>
</html>`}</code>
            </pre>

            <pre>
              <code>{`// popup.js
console.log("Chrome Extension Loaded!");`}</code>
            </pre>

            <h3>Step 3: Load the Extension</h3>
            <p>
              Go to <code>chrome://extensions</code>, enable Developer mode, and
              click “Load unpacked.” Select your extension’s folder to load it.
            </p>
          </details>
        </section>

        <section>
          <details id="tutorial-2">
            <summary>
              <span>
                Converting a Basic Static Site (HTML & CSS) into an EPUB
              </span>
            </summary>
            <div>
              <header>Step 1: Prepare the document structure</header>
              <section>
                <p>index.html</p>
                <pre>
                  <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Static Site</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to the Static Site!</h1>
  <p>This is a sample site to convert into an EPUB.</p>
</body>
</html>`}</code>
                </pre>
                <p>styles.css</p>
                <pre>
                  <code>{`body { background: #ccc; }
`}</code>
                </pre>
              </section>
              {/**/}
              <header>Step 2: Use an EPUB Conversion Tool</header>
              <section>
                <p>
                  Use a free tool like{" "}
                  <a href="https://www.calibre-ebook.com/">Calibre</a> to
                  convert the static site into an EPUB format. You can do this
                  by loading your HTML file into Calibre and exporting it as an
                  EPUB.
                </p>
              </section>
              {/**/}
              <header>Step 3: Customize Metadata and Styling</header>
              <section>
                <p>
                  Once your site is converted, make sure to adjust the EPUB
                  metadata (such as title and author) and styling if necessary
                  using Calibre’s editor.
                </p>
              </section>
            </div>
          </details>
        </section>
      </article>
      <MainFooter />
    </main>
  );
}
