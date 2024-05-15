const imageUpload = document.getElementById('imageUpload');
const imageGallery = document.getElementById('imageGallery');

imageUpload.addEventListener('change', () => {
    const files = imageUpload.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageGallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});

