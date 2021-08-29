/**
 * This is a type guard that determines whether the given unknown value
 * is an object with a property of a certain type.
 * @param value
 * @param propName
 */
export function hasProperty<P extends PropertyKey>(value: unknown, propName: P): value is { [key in P]: unknown } {
    return typeof value === "object" && value !== null && propName in value;
}
