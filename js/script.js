/**
 * EvalBook does many great evals.
 * @param {string} el HTML element
 * @param {object} options options object
 * @returns {object} a new GitDown object
 */
class EvalBook {
    
    constructor( el, options ) {
        const eb = this;
        this.wrapper = el;
        this.md = options['content'];
        this.callback = options['callback'];
        eb.main();
    }

    main() {
        // check if user provided a content url parameter
        let params = (new URL(location)).searchParams;
        if (params.has('content') ) this.md = params.get('content');
        // TODO: need error handler here to handle user providing content param that doesn't exist

        // get content through promise
        this.get(this.md)
            .then(data => this.process(data))
            .catch(reason => console.log(reason.message));
    }

    process(data) {
        // render the markdown
        this.render( data, this.wrapper );
        // eval code blocks
        this.do_eval(this.wrapper);
        // finally call user provided callback
        if ( typeof this.callback === 'function' ) {
            this.callback.call();
        }
    }

    do_eval(el) {
        const container = document.querySelector(el);
        if ( container === null ) return false;
        const codes = container.querySelectorAll('code');
        codes.forEach(i => {
            this.write_results(i);
        });
    }

    write_results(el) {
        let parent = el.parentNode;
        if ( parent === null ) return;
        if ( parent.tagName === 'PRE' ) {
            // ensure parent has .hljs and .js classes
            if ( !parent.classList.contains('hljs') ) return;
            if ( !parent.classList.contains('js') ) return;
            // render tags in new P tag
            let display = document.createElement('p');
            display.classList.add('result');
            // create new function for code block
            const fn = `(function() {${el.textContent}\n}())`;
            display.innerHTML = `Result: ${eval(fn)}`;
            parent.append(display);
        } else {
            // only act if inline code block begins with 'js '
            let code = el.textContent;
            if ( !code.startsWith('js ') ) return;
            // strip 'js ' from start
            code = code.substr(3);
            // render inline
            el.classList.add('result');
            // create new function for code block
            const fn = `(function() {${code}\n}())`;
            // store original code in data element in html
            el.setAttribute('data-code', code);
            el.innerHTML = `${eval(fn)}`;
        }
        return;
    }

    async get (file) {
        // await response of fetch call
        let response = await fetch(file);
        // only proceed once promise is resolved
        return await response.text();
    }

    render( content, container ) {

        // markdownit options
        var md = window.markdownit({
            html: false, // Enable HTML - Keep as false for security
            xhtmlOut: true, // Use '/' to close single tags (<br />).
            breaks: true, // Convert '\n' in paragraphs into <br>
            langPrefix: 'language-', // CSS language prefix for fenced blocks.
            linkify: true,
            typographer: true,
            quotes: '“”‘’',
            highlight: function(str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs ' + lang + '"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                    }
                    catch (__) {}
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
            }
        });
        
        var c = document.querySelector(container);
        if ( c !== null ) c.innerHTML = md.render(content);
    };

}