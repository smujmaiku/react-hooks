# React Timing Hooks

This is a collection of react hooks that involve timing based events.
These are useful from input forms and canvas rendering.

## Usage

### useDebounce

Debounce a value

```ts
const [value, setValue] = useState('');
const debouncedValue = useDebounce(value, 500);
useEffect(() => {
  bigFunction(debounceValue);
}, [debouncedValue])
```

### useAnimationFrame

Call a function on animation frames

```ts
useAnimationFrame(({ count }) => {
  console.log(count);
});
```

### useInterval

Call a function on an interval

```ts
useInterval(({ count }) => {
	console.log(count);
}, 1000);
```

### useTimedCallback

Creates a function that tracks time and other useful things in the callback

```ts
const callback = useTimedCallback(({count}) => {
	console.log(count);
});

useEffect(() => {
	setInterval(callback, 1000);
}, []);
```
