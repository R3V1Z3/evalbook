# EvalBook
All the evil of JavaScript's eval() in a Markdown-powered notebook for GitHub Pages.

EvalBook is a Markdown notebook that executes JavaScript code blocks. Being hosted through GitHub Pages makes it super simple to fork and create a publicly accessible JavaScript notebook with eval powers.

## Code Examples

Get return values rendered:
```js
var weird = 'weird.';
return 'This is ' + weird;
```

Log messages to the console. If nothing is returned, nothing more is rendered.
```javascript
console.log('Read this in the console.');
```

Access URL parameters:
```js
const params = (new URL(location)).searchParams;
const params_string = params.toString();
return params_string === '' ? "No query string found." : params_string;
```

Inline execution is easily possible too. Check `js return 'this';` out.

Global 'thispage' object persists throughout code blocks:
```js ohyeah
thispage.wow = 'Wow!';
return 'Wait for it...';
```

Store data in 'thispage' and access it in other blocks:
```js
return thispage.wow;
```

Only JavaScript code blocks are executed:
```
dummy stuff here
no execution
```

## How do I use it?
Dead simple, just fork [the repo](https://github.com/Ugotsta/evalbook) and edit this Markdown file. Any code blocks containing JavaScript will be executed/evaluated.

### Can I create multiple pages?

Yes. Create new Markdown files and access them using the 'content=_yourfile_' url parameter.

Alternatively, a custom 404.html page resolves the url and redirects as needed. So you can create files in the /pages/ folder and access them with a bare url slug, for example: _ugotsta.github.io/evalbook/character_.

### Hasn't this been done before?

Possibly. In fact, after getting started, I realized it uses a very similar approach to [Kajero](https://github.com/JoelOtter/kajero/). Kajero is far more sophisticated, though EvalBook can still be helpful for anyone looking for a simple way to use JavaScript notebooks on GitHub Pags. EvalBook requires no build process; just fork the project, create and edit Markdown documents.