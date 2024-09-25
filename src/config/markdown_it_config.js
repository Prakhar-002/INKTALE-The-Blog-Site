/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// Node module

const MarkdownIt = require('markdown-it');
const hljs =  require('highlight.js').default;



const markdown = new MarkdownIt({

      // Convert '\n' in paragraph into <br>
      breaks: true,

      // AutoConvert URL-lint text to link (e.g. github.com/Prakhar-002)
      linkify: true,

      // Highlighter function. should return escaped HTML
      // or '' if the source string is not changed 
      // and should be escaped externally
      // If result starts with <pre ... internal wrapper is skipped
      highlight: (str, lang) => {

            if (!lang && !hljs.getLanguage(lang)) return '';

            try {

                  return hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true
                  }).value;

            } catch (error) {
                  console.error("Error highlighting language: ", error.message);
                  throw error;
            }

      }

});


module.exports = markdown;