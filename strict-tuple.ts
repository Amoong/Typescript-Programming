function tuple<T extends unknown[]>(...args: T) {
  return args;
}

const tp = tuple(1, "a", true); // [number, string, boolean]
