class ImageMaker {
    constructor() {
        // When this class is instantiated, the `constructor()` method is executed.

        this.imagePreview = document.querySelector('#image-preview');

        // Adds and sets top and bottom element to `imagePreview` id.

        this.topText = document.createElement('p');
        this.topText.setAttribute('class', 'top-text');
        this.imagePreview.appendChild(this.topText);

        this.bottomText = document.createElement('p');
        this.bottomText.setAttribute('class', 'bottom-text');
        this.imagePreview.appendChild(this.bottomText);

        // Forms pulled via `querySelector` and applied to class.

        this.backgroundInput = document.forms[0].querySelector('select[name="backgroundImage"]');
        this.topTextInput = document.forms[0].querySelector('input[name="topText"]');
        this.bottomTextInput = document.forms[0].querySelector('input[name="bottomText"]');
    }
    drawPreview() {
        // Takes user input data from forms and applies them to background image and paragraphs.

        this.imagePreview.style.backgroundImage = 'url("images/${this.backgroundInput.value}")';
        this.topText.innerHTML = this.topTextInput.values;
        this.bottomText.innerHTML = this.bottomTextInput.values;
    }
    downloadImage() {
        this.drawPreview();
        generateImage();
    }
}

let imageMaker = new ImageMaker();

//////////////////////////////////////////////////
// Do Not Edit Below This Line               /////
////////////////////////////////////////////////////////////////////////

// This function uses the `domtoimage` module to render an image of the
// `#image-preview` element and prompts the user to download the created image.
// It is possible to use the `height` and `width` parameters to alter the size
// of the rendered image.
function generateImage(elementID = "image-preview", height = "800px", width = "1280px") {
    let htmlTemplate = document.getElementById(elementID);
    htmlTemplate.style.height = height;
    htmlTemplate.style.width = width;
    let imageName = "image_" + Date.now();

    // Generate image and prompt download for user.
    domtoimage.toJpeg(htmlTemplate, {
            quality: 0.95
        })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = imageName;
            link.href = dataUrl;
            link.click();
        });
}


// This function creates event listeners for each every form field added to
// the image maker form as well as the submit button that generates an image
// for download. New form inputs can be created and will automatically have
// a "change" listener added to them.
//
// The form field listeners look for a "change" event and call the
// `imageMaker.drawPreview()` method.
//
// The submit listener on the form interrupts the regular form processing of the
// browser and calls the `imageMaker.downloadImage()` method.
function applyEventListeners() {
    let inputs = document.querySelectorAll('input, select, textarea');
    for (input of inputs) {
        input.addEventListener("change", function (event) {
            imageMaker.drawPreview();
        })
    }
    let imageForm = document.querySelector('form');
    imageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        imageMaker.downloadImage();
    })
}

// Apply event listeners on page load.
applyEventListeners();