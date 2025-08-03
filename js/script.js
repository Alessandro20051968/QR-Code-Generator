// DOM Elements
const qrInput = document.querySelector('.form input');
const generateBtn = document.querySelector('.generate-btn');
const qrCode = document.querySelector('.qr-code');
const qrImg = qrCode.querySelector('img');
const downloadBtn = document.querySelector('.download-btn');
const copyBtn = document.querySelector('.copy-btn');
const footerLinks = document.querySelectorAll('.footer a');
const clickSound = new Audio('audio/audio.mp3');

// Variables
let preValue = '';
let isGenerating = false;

// Initialize audio settings
clickSound.volume = 0.3;

// Generate QR Code
const generateQR = () => {
	const qrValue = qrInput.value.trim();

	if (!qrValue || preValue === qrValue || isGenerating) return;

	isGenerating = true;
	preValue = qrValue;

	generateBtn.innerHTML =
		'<i class="fas fa-spinner fa-spin"></i> Generating...';
	generateBtn.disabled = true;

	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
		qrValue
	)}`;

	qrImg.onload = () => {
		qrCode.classList.add('active');
		generateBtn.innerHTML = '<i class="fas fa-bolt"></i> Generate QR Code';
		generateBtn.disabled = false;
		isGenerating = false;
	};

	qrImg.onerror = () => {
		generateBtn.innerHTML =
			'<i class="fas fa-exclamation-circle"></i> Error! Try Again';
		setTimeout(() => {
			generateBtn.innerHTML = '<i class="fas fa-bolt"></i> Generate QR Code';
			generateBtn.disabled = false;
			isGenerating = false;
		}, 2000);
	};
};

// Download QR Code
const downloadQR = () => {
	if (!qrImg.src || !qrCode.classList.contains('active')) return;

	const link = document.createElement('a');
	link.href = qrImg.src;
	link.download = `qr-code-${Date.now()}.png`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
	setTimeout(() => {
		downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
	}, 2000);
};

// Copy QR Code to Clipboard
const copyQR = async () => {
	if (!qrImg.src || !qrCode.classList.contains('active')) return;

	try {
		const response = await fetch(qrImg.src);
		const blob = await response.blob();

		await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);

		copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
		setTimeout(() => {
			copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
		}, 2000);
	} catch (err) {
		copyBtn.innerHTML = '<i class="fas fa-times"></i> Failed';
		setTimeout(() => {
			copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
		}, 2000);
	}
};

// Play click sound with error handling
const playClickSound = () => {
	try {
		clickSound.currentTime = 0;
		clickSound.play().catch(e => console.log('Audio play prevented:', e));
	} catch (err) {
		console.log('Audio error:', err);
	}
};

// Event Listeners
generateBtn.addEventListener('click', generateQR);
downloadBtn.addEventListener('click', downloadQR);
copyBtn.addEventListener('click', copyQR);

qrInput.addEventListener('keyup', e => {
	if (!qrInput.value.trim()) {
		qrCode.classList.remove('active');
		preValue = '';
	}
	if (e.key === 'Enter') generateQR();
});

// Add sound to footer links
footerLinks.forEach(link => {
	link.addEventListener('click', e => {
		if (link.getAttribute('target') === '_blank') {
			playClickSound();

			// Delay navigation slightly to allow sound to play
			setTimeout(() => {
				window.open(link.href, '_blank');
			}, 100);

			e.preventDefault();
		}
	});
});

// Initialize
window.addEventListener('load', () => {
	document.body.classList.add('animation-ready');
	setTimeout(() => qrInput.focus(), 500);

	// Preload audio
	clickSound.load().catch(e => console.log('Audio preload failed:', e));
});
