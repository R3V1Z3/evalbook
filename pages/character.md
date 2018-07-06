# Character Sheet

Your name is `js return ['Heimrich', 'Flockdechle', 'Yan'][Math.floor(Math.random() * 3)]`.

Your Strength is:
```js
thispage.random = (lo, hi) => {
    return Math.floor(Math.random() * hi) + lo;
}

thispage.roll_attribute = (i) => {
    let total = 0;
    for ( var x = 0; x < i; x++ ) {
        total += thispage.random(1, 6);
    }
    return total;
}

return thispage.roll_attribute(3);
```

Your Dexterity is:
```js
return thispage.roll_attribute(3);
```

Your Constitution is:
```js
return thispage.roll_attribute(3);
```

Your Intelligence is:
```js
return thispage.roll_attribute(3);
```
Your Wisdom is:
```js
return thispage.roll_attribute(3);
```