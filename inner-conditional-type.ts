// Exclude

type A = number | string;
type B = string;
type C = Exclude<A, B>; // number

// Extract

type AA = number | string;
type BB = string;
type CC = Extract<AA, BB>; // string

// NonNullable

type AAA = { a?: number | null };
type BBB = NonNullable<AAA["a"]>; // number

// ReturnType

type F = (a: number) => string;
type R = ReturnType<F>; // string

// InstanceType

type AAAA = { new (): BBBB };
type BBBB = { b: number };
type I = InstanceType<AAAA>;
