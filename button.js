// Get references to the buttons and the result container
const hideButtons = document.querySelectorAll('.hide-button');
const resultContainer = document.querySelector('.result-container');

// Add click event listeners to the hide buttons
hideButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Define the corresponding image source for the clicked button
        const imageSources = [
            'images/css-letter-a.png',
            'images/css-letter-b.png',
            'images/css-letter-c.png',
        ];

        // Create an image element with the corresponding source
        const resultImage = document.createElement('img');
        resultImage.src = imageSources[index];
        resultImage.alt = `CSS Technology Feature ${String.fromCharCode(65 + index)}`;

        // Clear the result container and add the image
        resultContainer.innerHTML = '';
        resultContainer.appendChild(resultImage);

        // Display the result container
        resultContainer.style.display = 'block';
    });
});

// Add click event listener to hide the result container when it's clicked
resultContainer.addEventListener('click', () => {
    resultContainer.style.display = 'none';
});
