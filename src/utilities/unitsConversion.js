export function celciusToFahrenheit(c) {
    return Math.round(c * (9 / 5) + 32);
}

export function fahrenheitToCelcius(f) {
    return Math.round(((f - 32) * 5) / 9);
}
