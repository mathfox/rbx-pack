export function pack<TValue>(value: TValue): LuaTuple<[number, [TValue]]>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function pack<TValues extends ReadonlyArray<any>>(
	...values: TValues
): LuaTuple<[number, TValues]>;
