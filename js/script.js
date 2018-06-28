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
        this.get(this.md)
            .then(data => this.process(data))
            .catch(reason => console.log(reason.message));

        this.do_eval();
        if ( typeof this.callback === 'function' ) {
            this.callback.call();
        }
    }

    process(data) {
        this.render( data, this.wrapper );
        this.do_eval(this.wrapper);
    }

    do_eval(el) {
        const container = document.querySelector(el);
        if ( container === null ) return false;
        const codes = container.querySelectorAll('code');
        codes.forEach(e => {
            eval(e.textContent);
        });
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