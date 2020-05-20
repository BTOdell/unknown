/**
 * This is a type guard that determines whether the given unknown value
 * is an object with a property of a certain type.
 * @param value
 * @param propName
 */
export function hasProperty<U extends unknown, P extends PropertyKey>(value: U, propName: P): value is U & { [key in P]: unknown } {
    return typeof value === "object" && value !== null && propName in value;
}
