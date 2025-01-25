const colorInput = document.getElementById('colorInput');
const hexInput = document.getElementById('hexInput');
const colorValue = document.getElementById('colorValue');
const colorPreview = document.getElementById('colorPreview');

// Event listener for the color input picker
colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    colorValue.textContent = selectedColor;
    hexInput.value = selectedColor;  // Update hex input field
    colorPreview.style.backgroundColor = selectedColor;  // Change preview box color
});

hexInput.addEventListener('input', function() {
    const hexColor = hexInput.value;
    colorInput.value = hexColor;  // Update the color picker value
    colorValue.textContent = hexColor;
    colorPreview.style.backgroundColor = hexColor;  // Change preview box color
});