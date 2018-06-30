# Character Sheet

Your name is `return ['Heimrich', 'Flockdechle', 'Yan'][Math.floor(Math.random() * 3)]`.

Your Strength is:
```javascript
q.random = (lo, hi) => {
    return Math.floor(Math.random() * hi) + lo;
}
q.roll_attribute = (i) => {
    let total = 0;
    for ( var x = 0; x < i; x++ ) {
        total += q.random(1, 6);
    }
    return total;
}
return q.roll_attribute(3);
```

Your Dexterity is:
```javascript
return q.roll_attribute(3);
```

Your Constitution is:
```javascript
return q.roll_attribute(3);
```

Your Intelligence is:
```javascript
return q.roll_attribute(3);
```
Your Wisdom is:
```javascript
return q.roll_attribute(3);
```