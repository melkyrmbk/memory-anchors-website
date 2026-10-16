# Memory Anchors — Website starter

Responsive, static landing page designed as a polished starting point for the Memory Anchors project. It uses plain HTML, CSS, and JavaScript, so no build step or framework setup is required.

> Important: the original Emergent preview did not expose its full page content in this session. This starter uses the project name "Memory Anchors" and an assumed concept of preserving meaningful memories. Replace the copy, contact details, and sections if the original project has a different purpose. It is not a verified copy of the original website.

## Files

- `index.html` — website structure and page content
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and CTA tracking
- `config.js` — GA4 Measurement ID setting

## Run locally

Simplest:
1. Unzip this project.
2. Open `index.html` in a browser.

Recommended local preview:
1. Install Visual Studio Code.
2. Open the project folder.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

## Publish using GitHub + Vercel

1. Create/sign in to a GitHub account at https://github.com/.
2. Create a new repository, for example `memory-anchors-website`.
3. Upload the contents of this folder to the repository. Upload the files themselves, not just the ZIP.
4. Sign in to https://vercel.com/ using GitHub.
5. Choose **Add New → Project**, import the repository, and click **Deploy**.
6. Because this is a static website, no framework build command is needed. If asked, leave Build Command and Output Directory blank/default. The `index.html` file should be in the repository root.
7. Open the production URL that Vercel provides and test all links.

## Add Google Analytics 4 (GA4)

1. Go to https://analytics.google.com/.
2. Create/select an Analytics property.
3. Create a **Web** data stream using the deployed Vercel URL.
4. Copy the Measurement ID. It looks like `G-XXXXXXXXXX`.
5. Open `config.js` and replace the empty string with your actual ID:

   ```js
   window.MEMORY_ANCHORS_CONFIG = {
     gaMeasurementId: "G-XXXXXXXXXX"
   };
   ```

6. Commit/push the change to GitHub. Vercel will redeploy automatically.
7. Open the deployed website in a new browser tab and visit a few sections/pages.
8. In GA4, open **Reports → Realtime** and check whether activity appears.

The GA4 script is intentionally disabled while the ID is empty. The site sends standard page-view tracking through the GA4 configuration and a custom `cta_click` event when important CTA links are clicked. Avoid installing a second GA4 tag through another plugin or snippet, because duplicate tags can double-count events.

## Before publishing

- Replace the placeholder email `hello@memoryanchors.example` in `index.html` with a real team contact email. Until changed, the contact CTA shows a reminder instead of opening a non-working email link.
- Confirm that the project name, messaging, and content match your team's actual website.
- Add a privacy notice if appropriate for your intended audience and data practices.
- Do not collect sensitive personal information through a form unless you have a clear need and appropriate safeguards.
- Check all pages, links, and mobile layout after deployment.

## Limitations

This is a static marketing landing page. It does not currently have accounts, a database, persistent memory storage, a real sign-up flow, or a backend. If those were part of the Emergent original, they need to be recreated separately and configured with the required services.
