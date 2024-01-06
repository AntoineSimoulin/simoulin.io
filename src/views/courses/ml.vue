<script>
import { marked } from 'marked';
import MarkdownIt from 'markdown-it';
import Code from "../../components/Code.vue";
import Toc from "../../components/Toc.vue";
import PageCourse from "../../components/PageCourse.vue";
import tocPlugin from "markdown-it-table-of-contents";
// import { preWrapperPlugin } from '../../markdown/plugins/preWrapper'

import sortingString from '../../../courses/code-101/sorting.md?raw';
import { h } from 'vue'


const md = MarkdownIt();
md.use(tocPlugin);

function findHeadlineElements(levels, tokens) {
  const headings = [];
  let currentHeading = null;
  
  tokens.forEach(token => {
    if (token.type === 'heading_open') {
      const id = findExistingIdAttr(token);
      const level = parseInt(token.tag.toLowerCase().replace('h', ''), 10);
      if (levels.indexOf(level) >= 0) {
        currentHeading = {
          level: level,
          text: null,
          anchor: id || null
        };
      }
    }
    else if (currentHeading && token.type === 'inline') {
      const textContent = token.children
        .filter((childToken) => childToken.type === 'text' || childToken.type === 'code_inline')
        .reduce((acc, t) => acc + t.content, '');
      currentHeading.text = textContent;

    }
    else if (token.type === 'heading_close') {
      if (currentHeading) {
        headings.push(currentHeading);
      }
      currentHeading = null;
    }
  });

  return headings;
}

function structureHeadings(headings) {
  const structuredHeadings = [];
  let currentHeading = null;
  let currentHeadingLevel = 0;

  // console.log('test');

  headings.forEach((heading, index, arr) => {
    // console.log(heading);
    if (currentHeading === null) {
      // first heading
      currentHeading = heading;
      currentHeading.subheadings = []
      // console.log('first');
    } 
    else if (heading.level >= currentHeadingLevel) {
      currentHeading.subheadings.push(heading);
      // console.log('second');
    } 
    else if (heading.level < currentHeadingLevel) {
      structuredHeadings.push(heading);
      currentHeading = heading;
      // console.log('next');
    }
    currentHeadingLevel = heading.level;
    if (index === arr.length - 1) {
      // console.log('last');
      structuredHeadings.push(currentHeading);
    }
  });

  return structuredHeadings;
}

function findExistingIdAttr(token) {
  if (token && token.attrs && token.attrs.length > 0) {
    const idAttr = token.attrs.find( (attr) => {
      if (Array.isArray(attr) && attr.length >= 2) {
        return attr[0] === 'id';
      }
      return false;
    });
    if (idAttr && Array.isArray(idAttr) && idAttr.length >= 2) {
      const [key, val] = idAttr;
      return val;
    }
  }
  return null;
}


// Override function
// const renderer = {
//   code(code, infostring, escaped) {
//     const lang = (infostring || '').match(/\S*/)[0];
//     console.log(lang);
//     console.log(this.options.highlight);
//     if (this.options.highlight) {
//       const out = this.options.highlight(code, lang);
//       if (out != null && out !== code) {
//         escaped = true;
//         code = out;
//       }
//     }

//     code = code.replace(/\n$/, '') + '\n';

//     // if (!lang) {
//     //   return '<pre><code>'
//     //     + (escaped ? code : escape(code, true))
//     //     + '</code></pre>\n';
//     // }

//     return `<Code :code=\"${code}\" \/>\n`;
//     // return '<pre><code class="'
//     //   + this.options.langPrefix
//     //   + escape(lang)
//     //   + '">'
//     //   + (escaped ? code : escape(code, true))
//     //   + '</code></pre>\n';
//   }
// };

// marked.use({ renderer });

// md.use(preWrapperPlugin)

export default {
  data() {
    return {
      bib: sortingString,
    };
  },
  components: {
    Code,
    Toc,
    PageCourse
  },
  methods: {
    markdowntoHtml(mdString) {
      return marked(mdString);
    },
    lexerMarkdown(mdString) {
      // return marked.lexer(mdString);
      return md.parse(mdString)
    },
    parserMarkdown(tokens) {
      // return marked.parser(tokens);
      return md.render(tokens);
    },
    getToc(tokens) {
      const toc = findHeadlineElements([1, 2], tokens);
      return structureHeadings(toc);
    }
  },
  beforeMount () {
    // console.log(sortingString);
    const tokens = this.lexerMarkdown(sortingString);
    console.log(tokens);
    this.toc = this.getToc(tokens);
    // console.log(this.toc);
    // this.dfdfd = this.parserMarkdown(sortingString);
    console.log(this.dfdfd);
    // this.structuredToc  = this.strcutreHeadings(toc);
    // console.log(structuredToc);
  }
}
</script>

<template>
<section class="pb-0 py-lg-5">
        <div class="container">
            <div class="row">
  <Toc :headlines="this.toc" />
 

  <PageCourse :content="this.dfdfd"/>
  </div>
        </div>
    </section>
</template>