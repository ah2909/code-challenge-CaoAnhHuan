// Assumption: n is a positive integer

// Time complexity: O(n) (for loop -> not efficient if n is large)
// Space complexity: O(1) (use 1 variable to store the sum)

function sum_to_n_a(n: number): number {
    let sum = 0;
	for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Time complexity: O(1) (fastest if n is large)
// Space complexity: O(1)

function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}

// Time complexity: O(n) (also iterate through n elements)
// Space complexity: O(n) (create an array of size n)

function sum_to_n_c(n: number): number {
	return [...Array(n)].map((_, i) => i + 1).reduce((a, b) => a + b);
}

console.log(sum_to_n_a(10)); // 55 
console.log(sum_to_n_b(10)); // 55
console.log(sum_to_n_c(10)); // 55 