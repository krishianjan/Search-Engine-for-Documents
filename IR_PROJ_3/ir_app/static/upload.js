document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('uploadForm');
    const uploadMessage = document.getElementById('uploadMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect files and URL input
        const fileInput = document.getElementById('fileInput');
        const urlInput = document.getElementById('urlInput');
        const formData = new FormData();

        if (fileInput.files.length > 0) {
            Array.from(fileInput.files).forEach(file => {
                formData.append('files', file);
            });
        } else if (urlInput.value.trim() !== '') {
            formData.append('url', urlInput.value.trim());
        } else {
            uploadMessage.textContent = 'Please select a file or enter a URL.';
            return;
        }

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            uploadMessage.textContent = data.message;
        })
        .catch(error => {
            console.error('Upload failed:', error);
            uploadMessage.textContent = 'Upload failed.';
        });
    });
});
