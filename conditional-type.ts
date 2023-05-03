type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

/**
 * Distributive Law
 */

type ToArray<T> = T[];
type AA = ToArray<number>; // number[]
type BB = ToArray<number | string>; // (number | string)[]

type ToArray2<T> = T extends unknown ? T[] : T[];
type AAA = ToArray2<number>; // number[]
type BBB = ToArray2<number | string>; // number[] | string[]

// Usage

type Without<T, U> = T extends U ? never : T;

type w1 = Without<number | string | boolean, number>; // string | boolean
type w2 = Without<number | string | boolean, number | string>; // boolean
