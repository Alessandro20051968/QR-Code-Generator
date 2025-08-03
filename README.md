# QR Code Generator

A modern QR code generator built with semantic HTML, SCSS, and vanilla JavaScript.

## Features

- **Customizable QR Codes**: Choose colors, sizes, and content  
- **Instant Generation**: Real-time QR code creation  
- **Download & Share**: Save PNGs or share directly  
- **Responsive Design**: Works on all devices  
- **Clean Architecture**: Organized SCSS with CSS variables  

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-generator.git
   ```
2. Open `index.html` in your browser  
3. Enter any text or URL to generate a QR code  
4. Customize colors and size using the controls  
5. Download or share your QR code  

## Project Structure

```
qr-generator/
├── css/
│   └── main.css          # Compiled CSS
├── js/
│   └── script.js         # QR generation logic
├── scss/
│   └── main.scss         # Source SCSS styles
└── index.html            # Main application file
```

## Customization

### Styles

Edit the SCSS variables in `main.scss` to change:

```scss
// Color system
:root {
  --color-primary: #4361ee;         // Main brand color
  --color-gradient-start: #7209b7;  // Gradient start
  --color-gradient-mid: #3a0ca3;    // Gradient middle
  --color-gradient-end: #4361ee;    // Gradient end
}
```

### Functionality

Modify `script.js` to:

- Change the QR code API endpoint  
- Add new customization options  
- Implement additional sharing methods  

## Demo

<p align="center">
  <img src="https://github.com/user-attachments/assets/ea8c404d-79c9-4478-a00f-8959a9bcb9df" alt="Repo UI Preview" />
</p>

## Dependencies

- [QRServer API](https://goqr.me/api/) – Free QR code generation  
- [Font Awesome](https://fontawesome.com/) – Icon toolkit  
- [Google Fonts](https://fonts.google.com/specimen/Inter) – Inter font family  

## License

MIT © CodingNORVIN


