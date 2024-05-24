document.addEventListener('DOMContentLoaded', function() {
    var pdfBase64 = "{{ pdf_content }}"; // Placeholder for actual base64 content fetched from server

    var loadingTask = pdfjsLib.getDocument({data: atob(pdfBase64)});
    loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var canvas = document.getElementById('pdf-canvas');
            var context = canvas.getContext('2d');
            var viewport = page.getViewport({scale: 1.5});
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext).promise.then(function() {
                console.log('Page rendered!');
                // Add highlighting logic here
            });
        });
    });
});
