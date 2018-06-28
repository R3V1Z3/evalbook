# EvalBook
All the evil of JavaScript's eval() in a Markdown-powered notebook for GitHub Pages.

EvalBook is a Markdown notebook that executes JavaScript code blocks. Being hosted through GitHub Pages makes it super simple to fork and create a publicly accessible JavaScript notebook with eval powers.

## How's it work?
Dead simple, just fork the repo and edit this Markdown file. Any code blocks containing JavaScript will be executed/evaluated.

## Code Examples

Get return values rendered:
```javascript
const weird = 'weird.';
return 'This is ' + weird;
```

Full scope is available:
```javascript
return Math.floor( Math.random() * (18 - 3) + 3 );
```

Access URL parameters:
```javascript
const params = (new URL(location)).searchParams;
const params_string = params.toString();
return params_string;
```

Inline execution is easily possible too. Check `return 'this'` out.

Create objects too:
```javascript
const i = {
  think: e => { return true; },
  am: e => { return 'I exist.' ; }
}
if ( i.think() ) return i.am();

```
