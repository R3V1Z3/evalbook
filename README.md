# EvalBook
All the evil of JavaScript's eval() in a Markdown-powered notebook for GitHub Pages.

EvalBook is a Markdown notebook that executes JavaScript code blocks. Being hosted through GitHub Pages makes it super simple to fork and create a publicly accessible JavaScript notebook with eval powers.

## How's it work?
Dead simple, just fork the repo and edit this Markdown file. Any code blocks containing JavaScript will be executed/evaluated.

### Can I create multiple notebooks?

Yes. Create new Markdown files in the /pages/ folder and access them using the 'content=' url parameter. Or just access the file like so _ugotsta.github.io/evalbook/character_. A custom 404.html page will resolve the url and redirect it as needed.

## Code Examples

Get return values rendered:
```javascript
var weird = 'weird.';
return 'This is ' + weird;
```

Log messages to the console. If nothing is returned, nothing more is rendered.
```javascript
console.log('This was sent through second example.');
```

Access URL parameters:
```javascript
const params = (new URL(location)).searchParams;
const params_string = params.toString();
return params_string === '' ? "No query string found." : params_string;
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
