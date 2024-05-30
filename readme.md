# React Timing Hooks

This is a collection of react hooks that involve timing based events.
These are useful from input forms and canvas rendering.

## Usage

### useAnimationFrame

Call a function on animation frames

```ts
useAnimationFrame(({ count }) => {
  console.log(count);
});
```

### useBlink

Flips between true and false on a delay

```ts
const blink = useBlink(500, true);
```

### useDebounce

Debounce a value

```ts
const [value, setValue] = useState('');
const debouncedValue = useDebounce(value, 500);
useEffect(() => {
  bigFunction(debounceValue);
}, [debouncedValue])
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

Callback event includes the following values:

* `first`: True when this is the first call
* `count`: Callback count
* `start`: Inital time
* `previous`: Previous time
* `now`: Now time
* `duration`: Duration since last callback
* `userData`: Mutatable user defined data

```ts
const callback = useTimedCallback(({count}) => {
	console.log(count);
});

useEffect(() => {
	setInterval(callback, 1000);
}, []);
```
