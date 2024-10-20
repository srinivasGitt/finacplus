function specialCipher(inputString, rotation) {
    // Step 1: Apply Caesar Cipher
    let caesarCiphered = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        // Shift the character using Caesar Cipher logic (only for uppercase letters)
        let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + rotation) % 26) + 65);
        caesarCiphered += shiftedChar;
    }

    // Step 2: Apply Run-Length Encoding (RLE)
    let rleEncoded = '';
    let count = 1;
    for (let i = 1; i < caesarCiphered.length; i++) {
        if (caesarCiphered[i] === caesarCiphered[i - 1]) {
            count++;
        } else {
            // Append the previous character and its count (if count > 1)
            rleEncoded += caesarCiphered[i - 1];
            if (count > 1) {
                rleEncoded += count;
            }
            count = 1;
        }
    }

    // Append the last character and its count (if > 1)
    rleEncoded += caesarCiphered[caesarCiphered.length - 1];
    if (count > 1) {
        rleEncoded += count;
    }

    return rleEncoded;
}

// Example usage:
const output = specialCipher("AABCCC", 3);
console.log(output);  // Output: D2EF3


