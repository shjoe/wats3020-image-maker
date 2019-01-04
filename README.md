# WATS 3020 Image Maker Project

This is a JavaScript exercise designed to practice DOM manipulation by selecting
DOM elements, creating new elements, reading attributes of elements, and then
modifying attributes of other elements.

The premise of this assignment is that we are creating an image generator like
we find on so many sites around the web. This generator, in its base form, lets
a user combine a background image, top text, and bottom text to create a clever
composition. It's possible to push this image generation much further if you
desire.

This project covers concepts and techniques described in Practical JavaScript: [The Document Object Model](https://suwebdev.github.io/WATS-3020-gitbook/the-document-object-model/). Also, note that the download feature of this project will only work in Chrome.

## Basic Requirements
In order to complete this project, fulfill the following requirements:

* Complete the TODOs to initialize the `ImageMaker` class in JavaScript.
    * Select the `#image-preview` element and store it as a class attribute.
    * Create the `topText` and `bottomText` elements and store them as class attributes.
    * Append the `topText` and `bottomText` elements to the `#image-preview` element.
    * Select the form fields used to modify the image.
* Complete the TODOs to update the `#image-preview` element using JavaScript in the `drawPreview()` method.
    * Read the data from the form fields.
    * Update the DOM elements with form field data to update the image preview.

## Stretch Goals
If you have fulfilled the Basic Requirements, attempt some of these stretch goals:

* Add additional ways to change existing elements. For example, you could experiment with the `<input type="color">` field to allow users to change the color of the text, or you could allow a select box to choose different fonts.
* Populate with custom images. This is not really a JS stretch, but you could populate the whole thing with custom images that serve your needs. Perhaps you want to run a viral image sharing campaign on social media? (Note: You can allow people to submit image URLs to use images from other sites, but those might not work for a variety of reasons.)
* Enhance the presentation of the image maker form. This form is not very well styled out of the box. Improve the user experience by making this form better looking.
* Add additional elements to the image composition. You can create additional text, bars, icons, etc. to add to the image. This involves both creating the elements in the `#image-preview` and also adding form fields to allow a user to modify the additional elements.
* Allow the user to select the size of image to output. The `generateImage()` function in the `ImageMaker` class will accept parameters for `height` and `width`. You could allow users to change the size of the image they generate (and preview).

## Credits
The images are previewed in HTML using JavaScript to adjust styles and content.
Users can download the image to share in other locations. Images for download
are created using the ["dom-to-image"](https://github.com/tsayen/dom-to-image)
module, which uses a JS `<canvas>` element to create the image file. (**NOTE**:
This module is not covered in the project, and implementation is provided for
you as a convenience.)
