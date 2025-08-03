const input = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const qrImg = document.getElementById('qr-img');
const qrBox = document.getElementById('qr-box');
const downloadBtn = document.getElementById('download-btn');

generateBtn.addEventListener('click', () => {
	const value = input.value.trim();
	if (!value) return;

	const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(
		value
	)}`;
	qrImg.src = qrUrl;

	qrImg.onload = () => {
		qrBox.style.display = 'flex'; // show QR and download button
	};
});

downloadBtn.addEventListener('click', () => {
	const src = qrImg.src;
	if (!src) return;

	const link = document.createElement('a');
	link.href = src;
	link.download = 'qr-code.png';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});
