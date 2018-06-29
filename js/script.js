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
        codes.forEach(e => {
            const fn = `(function() {${e.textContent}\n}())`;
            this.write_results( eval(fn), e );
        });
    }

    write_results(result, el) {
        let parent = el.parentNode;
        if ( parent === null ) return;
        if ( result === undefined ) return;
        if ( parent.tagName === 'PRE' ) {
            // render tags in new P tag if surround by PRE tag
            let display = document.createElement('p');
            display.classList.add('result');
            display.innerHTML = `Result: ${result}`;
            parent.append(display);
        } else {
            // render inline
            el.classList.add('result');
            el.setAttribute('data-code', el.textContent);
            el.innerHTML = `${result}`;
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
                        return '<pre class="hljs"><code>' +
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