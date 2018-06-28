# EvalBook
All the evil of JavaScript's eval() in a Markdown-powered notebook for GitHub Pages.

EvalBook is a Markdown notebook that executes JavaScript code blocks. Being hosted through GitHub Pages makes it super simple to fork and create a publicly accessible JavaScript notebook with eval super powers.

## How's it work?
Dead simple, just fork the repo and edit this Markdown file. Any code blocks containing JavaScript will be rendered.

For example:
```
var weird = 'weird.'
console.log('This is ' + weird);
```

Check the console and you'll see that code was executed (evaluated).
