export function pack<TValue>(value: TValue): LuaTuple<[number, [TValue]]>;

/**
 * Packs a number of arguments into a table and returns its length.
 *
 * Used to cajole varargs without dropping sparse values.
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function pack<TValues extends ReadonlyArray<any>>(...values: TValues): LuaTuple<[number, TValues]>;

/**
 * Returns first value (success), and packs all following values.
 *
 * This function will not throw an error in case the `success` argument was not a boolean at the runtime.
 */
export function packResult<
	TSuccess extends boolean,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	TValues extends ReadonlyArray<any>,
>(success: TSuccess, ...values: TValues): LuaTuple<[TSuccess, number, TValues]>;
