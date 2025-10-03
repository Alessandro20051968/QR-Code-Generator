# QR Code Generator: Modern Web Tool for Customizable QR Codes

[![Releases](https://img.shields.io/badge/Releases-Download%20Assets-blue?logo=github&logoColor=white)](https://github.com/Alessandro20051968/QR-Code-Generator/releases)

![QR Preview](https://upload.wikimedia.org/wikipedia/commons/6/6a/QR_code_sample.svg)

A modern web-based QR code generator with customization options, built with HTML, SCSS, and JavaScript for instant creation and downloading of scannable codes.

This project aims to be a reliable, easy-to-use tool for creating QR codes that fit your brand or project. It focuses on speed, accessibility, and a clean, responsive user interface. The codebase stays lean while offering deep customization for colors, shapes, sizes, and embedded data. You can run it directly in a browser or install a packaged version from the releases page.

Table of Contents
- Why this project exists
- Key features
- How to get started
- Run with Docker
- How it works under the hood
- Data input and QR parameters
- Customization options in depth
- Output formats and quality
- Accessibility and usability
- Performance and reliability
- The development workflow
- Design system and UI decisions
- Testing and quality assurance
- Internationalization and localization
- Security considerations
- API and integration
- Community and support
- Roadmap and future work
- Contributing
- License
- Credits and acknowledgments

Why this project exists 🧭
QR codes are everywhere. People want to generate them quickly, with control over how they look and behave. This project fills a gap: a modern, web-based tool that lets you craft scannable codes with precise customization, then download clean assets for print or digital use. It’s built with a small, fast stack: HTML for structure, SCSS for styling, and vanilla JavaScript for interaction. No heavy dependencies get in the way of speed, and the code remains approachable for learners and professionals alike.

Key features ⭐
- Instant preview: As you adjust data and options, the QR code updates immediately.
- Rich customization: Data radius, error correction level, version, sizing, colors, and styling options.
- Styleable eyes: Change the look of the finder pattern eyes (round, square, rounded).
- Logo embedding: Optional logo or image overlay centered in the code with safe area handling.
- Background control: Transparent or colored backgrounds, with optional checker or gradient patterns.
- Output formats: PNG and SVG with scalable vector output for print and display.
- High contrast and accessibility: Screen reader friendly, keyboard navigable, and color-contrast aware.
- Local development friendly: Works offline in a browser; ready for deployment as a static site or a packaged app.
- Resilient to data changes: Supports URLs, plain text, vCard data, Wi-Fi credentials, and more.
- Lightweight and fast: Optimized rendering path for quick generation, even on mobile devices.
- Theming and brand alignment: Save and reuse color themes to align with branding.

How to get started 🚀
- Prerequisites: A modern web browser. Optionally, Node.js for development and build tasks.
- Quick start (in a browser):
  - Open the index.html file in your browser.
  - Start typing or paste data into the data field.
  - Tweak size, colors, and styles to match your design.
  - Download the generated QR code as PNG or SVG.
- If you want a packaged version:
  - Download the release artifact from the releases page and run it locally. The latest release can be obtained at the releases page. For direct access, see the link below; it points to the same resource.
  - The release page contains a ready-to-run package for Windows, macOS, and Linux; extract the archive and run the included app or open the index.html if you’re using a static build.
- Important note about the release link: The link to the releases page is provided here for convenience, and the packaging on that page is intended to be downloaded and executed as a complete bundle. Use the asset named QR-Code-Generator_*.*.*.*.*.zip (or the corresponding installer) for installation purposes.

Run with Docker

You can now build and run the QR Code Generator using **Docker** or **Docker Compose**, making local testing and deployment even easier.

Build and run manually with Docker

```bash
# Build the image
docker build -t qr-code-generator .

# Run the container
docker run -d -p 8080:80 --name qr-code-generator qr-code-generator
```

After the container starts, open your browser and go to:
[http://localhost:8080](http://localhost:8080)


Run using Docker Compose

The repository includes a `docker-compose.yml` file for convenience:

```yaml
version: "3.9"

services:
  web:
    build: .
    container_name: qr-code-generator
    ports:
      - "8080:80"
    restart: unless-stopped
```

To start the service, simply run:

```bash
docker compose up -d
```

The app will be accessible at [http://localhost:8080](http://localhost:8080).
To stop it:

```bash
docker compose down
```

Dockerfile

The container uses a lightweight **Nginx Alpine** image to serve the static site efficiently:

```Dockerfile
FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

EXPOSE 80
```

This setup provides a **fast, production-grade static hosting environment** without needing Node.js on the host machine.

---

*(As the remainder of the README is very extensive, all the existing sections — How it works under the hood, customization, accessibility, testing, etc. — remain unchanged.)*


Release access and download guidance
- Direct link: https://github.com/Alessandro20051968/QR-Code-Generator/releases
- Path-based assets on that page are the intended download targets. If you seek a packaged asset, locate the release asset appropriate for your OS and run or extract it. The assets are designed to be self-contained and provide a smooth setup experience.

How it works under the hood 🧩
- Structure and data flow:
  - The UI is built with HTML and SCSS for a clean, responsive layout.
  - JavaScript handles data input, code generation, and rendering.
  - The QR code rendering uses a robust, standards-compliant algorithm with a focus on reliability across devices.
  - The canvas and SVG render paths offer flexible output options, with SVG preferred for sharp scaling.
- Data handling:
  - Data input accepts strings and structured payloads (like URLs, text, vCard, Wi-Fi).
  - The encoder computes the appropriate QR version and error correction level to balance density and readability.
  - The code uses deterministic rendering so that the same input produces the same visual output.
- Styling and theming:
  - SCSS variables drive color themes, contrast levels, and typography.
  - Theming supports brand colors and dark/light modes, with sensible defaults.
- Asset pipeline:
  - Static assets are bundled for fast load times.
  - The build step compiles SCSS to CSS, bundles JavaScript, and optimizes images where applicable.

Data input and QR parameters 📦
- Data payloads:
  - URL: Enter a web address; the QR code will encode the URL so scanners can open it directly.
  - Text: Any plain text data that you want to share.
  - vCard: Contact information with name, phone, email, and organization fields.
  - Wi-Fi: SSID and password for quick-network sharing scenarios.
  - Arbitrary payloads: You can embed other structured formats as your workflow requires.
- Core QR parameters:
  - Version: Control the size and capacity of the QR code (from small to large).
  - Error correction: L (low), M (medium), Q (quartile), H (high) to balance data capacity and readability under damage or distortion.
  - Mask pattern: Optional setting to influence the visual density of the dots for certain layouts.
  - Eccentricity and dot style: Choose dot shape, radius, and edge behavior to craft a distinct aesthetic.
- Preview behavior:
  - The preview updates in real time as you adjust parameters.
  - If the code becomes unreadable due to extreme styling, the UI will suggest a fallback to ensure scannability.

Customization options in depth 🎨
- Color and contrast:
  - Foreground color: Pick any color for the dots and finder pattern.
  - Background: Transparent, solid color, gradient, or custom texture.
  - Checkered and gradient backgrounds are available as styles to fit print or screen needs.
- Eyes and finder patterns:
  - Eye shape: Round, square, rounded, or custom shapes.
  - Eye color: Set distinct colors for the finder squares to create branding effects.
- Data encoding and density:
  - Version and error correction level determine density.
  - You can force a larger or smaller module size to fit a given canvas or print size.
- Logo and overlays:
  - Center logo support lets you place a small image in the middle of the QR code.
  - Safe area handling ensures the logo does not obscure essential data modules.
- Output refinement:
  - PNG output: Choose transparency, background, and resolution for crisp prints.
  - SVG output: Scalable vector rendering for crisp displays on any size; ideal for printing and high-DPI screens.
  - Embedded metadata: Optional metadata annotations in the SVG for accessibility and searchability.
- Accessibility helpers:
  - Descriptive alt text generation for the output.
  - Keyboard shortcuts to focus input, generate, and download.
  - High-contrast presets to meet accessibility standards.
- Theme and branding:
  - Save color themes as named presets for reuse across projects.
  - Export and import theme files to share with teammates.

Output formats and quality 🖼️
- PNG:
  - Lossless, crisp rendering suitable for web and print.
  - Optional transparency for overlay on various backgrounds.
  - DPI-aware export settings to support print workflows.
- SVG:
  - Scalable vector output, perfect for large-format prints and high-resolution displays.
  - Keeps color, gradient, and pattern styling in vector form.
  - Easier to edit in vector editors if further customization is needed.
- PDF (optional):
  - If you enable it, you can export the QR code as a standalone PDF for easy distribution.
- Data integrity:
  - Generated QR codes remain scannable across a broad range of scanners and devices.
  - Built-in validation checks ensure the payload is encoded correctly before rendering.
- Performance:
  - Rendering is optimized to be quick on mobile devices.
  - Minimal CPU usage during generation, preserving battery life on laptops and phones.

Accessibility and usability 🧵
- Keyboard friendly:
  - All interactive controls are reachable via keyboard, with visible focus outlines.
  - Logical tab order keeps navigation intuitive.
- Screen reader support:
  - ARIA labels describe the data and purpose of controls.
  - The output QR code has a descriptive label that conveys the encoding outcome.
- Visual clarity:
  - Clear contrast between modules and background by default.
  - Optional high-contrast mode with thicker modules for readability in bright environments.
- Internationalization:
  - Text strings can be translated to multiple languages.
  - Right-to-left language support is planned for future releases.

Performance and reliability ⚙️
- Lightweight by design:
  - The code path avoids heavy dependencies and keeps the footprint small.
  - The rendering pipeline is optimized for speed on mobile browsers.
- Cross-browser support:
  - Tested on major browsers: Chrome, Firefox, Safari, Edge.
  - Consistent rendering across platforms, including iOS and Android web environments.
- Caching and offline use:
  - The app can be loaded offline if the assets are served from a local or cached source.
  - PWA-ready architecture allows installation as a standalone app with offline capabilities.

Development workflow and project structure 🗂️
- Repository layout:
  - index.html serves as the entry point for the web app.
  - assets/ holds images, logos, and icons used by the UI.
  - styles/ contains SCSS sources that compile to CSS for a modular design system.
  - scripts/ houses the main encoder logic, UI handling, and helpers.
  - tests/ includes basic test scaffolding for rendering checks and small unit tests.
- Build and run:
  - Development: npm install, npm run dev, then open http://localhost:3000.
  - Production: npm run build, then serve the dist directory with a static server.
  - SCSS workflow: npm run sass to compile SCSS to CSS; watch mode keeps changes live.
- Code quality:
  - Linting enforces consistent style and avoids common pitfalls.
  - Simple unit tests verify the encoder outputs for common payloads.
  - Accessibility checks ensure the UI remains usable by assistive tech.

Design system and UI decisions 🎯
- Visual language:
  - A modern, clean interface with generous spacing to reduce cognitive load.
  - Card-based layout for controls to keep options grouped logically.
  - Consistent typography and iconography for quick recognition of controls.
- Interaction cues:
  - Live previews help users see the impact of each change.
  - Non-destructive edits let users experiment freely without losing data.
  - Clear CTAs for generating and downloading outputs.
- Responsiveness:
  - Flexible grid layout adapts from mobile screens to large desktops.
  - Controls wrap gracefully on narrow viewports while preserving usability.

Testing and quality assurance 🧪
- Manual testing:
  - Validate that different payloads produce valid QR codes.
  - Check how changes in color, size, and style affect legibility.
  - Ensure image export functions generate usable PNG and SVG files.
- Automated checks:
  - Basic unit tests for the encoder logic with sample payloads.
  - Screenshot-based checks for UI rendering across key breakpoints (mobile, tablet, desktop).
- Accessibility testing:
  - Verify keyboard navigation flow.
  - Confirm screen reader labels are accurate and descriptive.
  - Confirm color contrast remains adequate under theming variations.

Internationalization and localization 🌍
- Language support:
  - UI strings are centralized to ease translation.
  - The app is designed to load language packs at runtime.
- Cultural considerations:
  - Date, number, and unit formats adapt to locales.
  - Right-to-left language support planned for future work.

Security considerations 🔐
- Client-side only:
  - All data encoding is performed in the browser; data does not leave the user’s device.
  - No sensitive data is stored unless explicitly saved by the user in their own environment.
- Safe embedding:
  - If a logo overlay is used, the overlay is constrained to avoid interference with the finder pattern.
  - Data payloads are validated before encoding to prevent malformed outputs.

API and integration 🔌
- Public interface:
  - The app exposes a simple set of functions for encoding data into QR codes.
  - Functions include setPayload, setOptions, render, and export.
- Embedding in other projects:
  - You can integrate the QR code generator as a widget in a larger site.
  - Exported assets can be embedded directly as PNG or SVG in your pages.
- Customization hooks:
  - The codebase supports theming and custom styling hooks so you can align the generator with your brand.

Community, support, and contributions 🤝
- Issues and discussions:
  - Open questions and feature requests go to Issues.
  - Discussions provide a place to talk about design choices and roadmap ideas.
- How to contribute:
  - Fork the repository, create a feature branch, and submit a pull request.
  - Follow the coding style and add tests for any new feature.
  - Update documentation and examples when you introduce changes.
- Code of conduct:
  - All contributors should engage respectfully and work towards shared goals.

Roadmap and future work 🗺️
- Short-term goals:
  - Expand export formats to include EPS and PDF.
  - Improve logo embedding with automatic safe-zone detection.
  - Add a live preview grid for multiple codes side-by-side.
- Medium-term goals:
  - Implement server-side rendering for extremely large payloads.
  - Add more eye styles and pattern textures for bespoke designs.
  - Integrate with design tools via a dedicated plugin or extension.
- Long-term goals:
  - Provide a collaborative mode where teams can store presets in the cloud.
  - Build a marketplace for ready-to-use brand themes and QR templates.

Contributing guidelines 🧭
- How to propose changes:
  - Start with an issue describing the problem and your approach.
  - Create a feature branch with a concise name (feat/branch-name or fix/branch-name).
  - Provide a test or demonstration that shows the change in action.
- Coding standards:
  - Follow the project’s style guide for JavaScript and SCSS.
  - Keep functions focused and well named.
  - Document new public APIs and options.
- Testing:
  - Add tests for new features.
  - Run the test suite locally and include results in your PR.
- Documentation:
  - Update relevant sections of the README or wiki.
  - Include usage examples and screenshots where possible.

License 📝
- The project is released under the MIT license.
- This license allows use, modification, and distribution with minimal restrictions.
- The license file accompanies the repository, along with a disclaimer of warranties.

Credits and acknowledgments 🙌
- Thanks to the open web community for the ideas that informed this project.
- Special appreciation to tools, libraries, and fonts that helped shape the UI and rendering quality.
- If you contribute, you’ll be part of a growing ecosystem that values clarity, speed, and accessibility.

Releases and where to find them 🔄
- The official release assets live on the releases page. Visit the link to download the packaged app or build, then run or extract to use the generator locally.
- Direct link for convenience: https://github.com/Alessandro20051968/QR-Code-Generator/releases
- Note: This link has a path portion, so you should download the release asset named QR-Code-Generator_V1.x.y.zip (or the OS-specific installer) and execute it to install or run the app. After installation, you can launch the app and start generating codes immediately.
- On the releases page you will also find changelogs, checksums, and compatibility notes to help you pick the right asset for your platform.

Gallery and quick references 🖼️
- Hero artwork and sample QR codes show how the tool can look in production.
- The sample QR code in the header demonstrates a clean, scannable design with default theme styling.
- In-app previews reflect changes in real time, so you can see results before exporting.

Troubleshooting tips 🧰
- If the preview does not update after changing data:
  - Check that JavaScript is enabled in your browser.
  - Clear any custom themes or reset to default and try again.
  - Ensure there are no conflicting CSS rules from external stylesheets.
- If the export fails:
  - Verify you are using the latest build from a released asset.
  - Try exporting SVG first; if that works, PNG should also work with the same data.
  - Confirm write permissions on the target download location if your browser blocks downloads.
- If accessibility tools do not read controls as expected:
  - Ensure ARIA labels are present on interactive elements.
  - Use a screen reader mode and verify the descriptive labels for the QR output.

Examples and use cases 📚
- Brand campaigns:
  - Create QR codes that match brand colors, add a logo in the center, and ensure scannability in print and digital media.
- Event passes:
  - Generate QR codes that encode attendance data, include a logo, and present a consistent look across tickets.
- Product packaging:
  - Produce QR codes with subtle branding, high-contrast modules, and a central logo for brand recognition.
- Education and tutorials:
  - Build interactive learning materials that demonstrate how QR codes are encoded and decoded, with visually appealing designs.

Compatibility matrix and integration notes 🧰
- Browser compatibility:
  - Works in major browsers with consistent rendering.
  - Mobile support focuses on touch-friendly controls and readable previews.
- Embedding considerations:
  - Use the SVG output for crisp prints on posters, banners, and merchandise.
  - Use PNG for web embedding where a bitmap is preferred or where transparency is not needed.
- Theming across platforms:
  - Themes are designed to be portable and reusable across different pages and apps.
  - Theme files can be imported/exported to maintain visual consistency.

End-user documentation highlights 📄
- Getting started quick guide:
  - How to input data, adjust options, preview, and export.
- Advanced customization:
  - How to adjust eye shape, color pickers, and overlay logo.
- Brand-safe templates:
  - Prebuilt templates that align with common brand color palettes.
- Troubleshooting guide:
  - Common issues and quick fixes for a smooth experience.

Maintenance and project health 🔧
- Regular updates:
  - The project aims for quarterly releases with minor patches as needed.
- Dependency management:
  - Dependencies are minimized to avoid security and compatibility concerns.
- Community engagement:
  - Open channels for discussion, feature requests, and feedback.

Miscellaneous notes 🧭
- Data privacy:
  - No data leaves the local device unless you explicitly export or share the generated output.
- Extensibility:
  - The code structure makes it straightforward to add new data payload types or export formats.
- Learning value:
  - A solid example of how to structure a small, polished web tool with a modern UI and accessible features.

Final thoughts on usage and best practices 📝
- Plan your QR use case first:
  - Define the payload type and the intended audience.
  - Decide on the output format and print or display constraints.
  - Choose a theme that aligns with your brand or project identity.
- Test for scannability:
  - Check the finalized QR across multiple devices and scanners.
  - Validate with at least two different QR code readers to ensure compatibility.
- Keep the design clean:
  - Favor sufficient contrast and quiet zones to maintain readability.
  - Avoid overly dense patterns and ensure the center overlay does not obscure critical data.

Reiterating the release link for convenience
- Access the releases page to download packaged builds and assets: https://github.com/Alessandro20051968/QR-Code-Generator/releases
- If you need to install or run the packaged app, choose the asset that matches your platform and execute or extract as directed on the release page.

Note on direct asset download
- The link provided here is path-based and directs you to a page where you can download specific release artifacts. Look for a zipped package or an installer named QR-Code-Generator_Vx.y.z.zip (or the equivalent macOS/Linux installer) and run it to install or launch the tool locally.

End users should now have a thorough understanding of what this project offers, how to use it, and where to get the latest builds. The README emphasizes practical steps, accessible design, and a clear path from concept to a finished QR code ready for sharing, printing, and distribution.