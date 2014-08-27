# stream-data-range

Get the minimun and maximum of the attributes of a stream of objects.
It will try to parse values as Numbers, but if this results to `NaN` it will
stick with the String.

Install with
```
npm install stream-data-range
```

## Example

```js
var range = require('stream-data-range')
producer.pipe(range(function (metadata) {
   console.dir(metadata)
}))
```

## Global Usage
You can also install it global with
```js
npm install stream-data-range -g
```

Assuming a `data.ldjson`
```
  {a: 1, b:100}
  {a: 2, b:10}
  {a: 3, b:1}
```

result will be
```
$ data-range < data.ldjson
{a: {min: 1, max: 3}, b: {min: 1, max: 100}}
```