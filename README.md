# EvalBook
All the evil of JavaScript's eval() in a Markdown-powered notebook for GitHub Pages.

EvalBook is a Markdown notebook that executes JavaScript code blocks. Being hosted through GitHub Pages makes it super simple to fork and create a publicly accessible JavaScript notebook with eval powers.

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

Global 'q' object persists throughout code blocks:
```javascript
q.wow = 'Wow!';
return 'Wait for it...';
```

Store data in 'q' and access it other blocks:
```javascript
return q.wow;
```

## How do I use it?
Dead simple, just fork [the repo](github.com/Ugotsta/evalbook) and edit this Markdown file. Any code blocks containing JavaScript will be executed/evaluated.

### Can I create multiple pages?

Yes. Create new Markdown files and access them using the 'content=_yourfile_' url parameter.

Alternatively, a custom 404.html page resolves the url and redirects as needed. So you can create files in the /pages/ folder and access them with a bare url slug, for example: _ugotsta.github.io/evalbook/character_.
