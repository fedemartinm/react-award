/**
 * Remove null and undefined from T
 */
export type NotNull<T> = Exclude<T, null | undefined>;

/**
 * Get argument type from function
 */
export type ArgumentType<F extends Function> = F extends (
  ...args: infer Args
) => any
  ? Args[0]
  : never;
