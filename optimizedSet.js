function optimizedUnits() {
    const units = [1, 2, 5, 10, 20, 50];
    const maxValue = 100;

    // Array to hold the minimum number of units for each value
    const minUnits = Array(maxValue).fill(Infinity);
    minUnits[0] = 0; // Base case: 0 units needed to make the value 0

    // Fill the minUnits array using dynamic programming
    for (let value = 1; value < maxValue; value++) {
        for (let unit of units) {
            if (value >= unit) {
                minUnits[value] = Math.min(minUnits[value], minUnits[value - unit] + 1);
            }
        }
    }

    // Calculate the total units and count how many have 6 or fewer units
    let totalUnits = 0;
    let count = 0;

    for (let value = 1; value < maxValue; value++) {
        if (minUnits[value] <= 6) {
            totalUnits += minUnits[value];
            count++;
        }
    }

    // Calculate the average
    const averageUnits = totalUnits / count;

    console.log(`Average of units = ${averageUnits.toFixed(1)}`);
}

// Execute the function
optimizedUnits();
