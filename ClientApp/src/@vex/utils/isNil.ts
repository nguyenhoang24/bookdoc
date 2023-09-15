/**
 * @param value
 */
export function isNil<T>(value: T): value is null | undefined {
  return value == null;
}
