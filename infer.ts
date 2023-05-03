// 'infer' used only in conditional typing

type ElementType<T> = T extends unknown[] ? T[number] : T;
type A = ElementType<string[]>; // string

type ElementType2<T> = T extends (infer U)[] ? U : T;
type B = ElementType2<string[]>; // string

// Usage

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;

type F = (typeof Array)["prototype"]["slice"];
type AA = SecondArg<F>; // number | undefined

export {};
