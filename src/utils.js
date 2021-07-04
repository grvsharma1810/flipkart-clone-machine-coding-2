export function getDiscountedPrice(price, discount) {
    return Math.round(price - (discount * price / 100))
}