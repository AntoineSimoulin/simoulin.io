<script>
// import { marked } from 'marked';
import MarkdownIt from 'markdown-it';
import Code from "../../components/Code.vue";
import Toc from "../../components/Toc.vue";
import PageCourse from "../../components/PageCourse.vue";
import tocPlugin from "markdown-it-table-of-contents";

// import { preWrapperPlugin } from '../../markdown/plugins/preWrapper'
// import { isProxy, toRaw } from 'vue';
// import { defineAsyncComponent } from 'vue'

// const Toc = defineAsyncComponent(() =>
//   import('../../components/Toc.vue')
// )
// const PageCourse = defineAsyncComponent(() =>
//   import('../../components/PageCourse.vue')
// )

// import MdiStore24Hour from 'virtual:icons/mdi/store-24-hour'
// import sortingString from '../../../courses/code-101/sorting.md';
// console.log(sortingString)


// import { h } from 'vue';
import Shikiji from 'markdown-it-shikiji';

// const testFolder = '../../../courses/code-101/';
// import fs from 'fs'

// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
// });

// import Astro from 'astro';
// const posts = await Astro.glob('../../../courses/code-101/*.md');
// console.log(posts);

const posts = import.meta.glob('../../content/courses/1.code-101/*.md', { as: 'raw' });
console.log("posts", posts);
// for (const path in posts) {
//   posts[path]().then((mod) => {
//     console.log(path, mod)
//   })
// }

const md = MarkdownIt();
md.use(await Shikiji({
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }
}))
md.use(tocPlugin);

// function getToc(tokens) {
//   const toc = findHeadlineElements([1, 2], tokens);
//   return structureHeadings(toc);
// }

// const arr = [];
// const toc = [];

// for (const path in posts) {
//   posts[path]().then((mod) => {
//     toc.push(getToc(md.parse(mod)));
//     arr.push({"content": md.render(mod)});
//   })
// }
// console.log(arr);



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
    const idAttr = token.attrs.find((attr) => {
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

function lexerMarkdown(mdString) {
  return md.parse(mdString)
}

function parserMarkdown(tokens) {
  return md.render(tokens);
}

function getToc(tokens) {
  const toc = findHeadlineElements([1, 2], tokens);
  return structureHeadings(toc);
}

async function getPostContent(posts) {
  let arr = [];
  // // let idx = 0;
  for (const path in posts) {
    posts[path]().then((mod) => {
      const tokens_parsed = parserMarkdown(mod);
      const tokens = lexerMarkdown(mod);
      const toc_a = getToc(tokens);
      arr.push({ "content": tokens_parsed, "toc": toc_a });
    })
  }
  return arr;
}

const a = await posts[Object.keys(posts)[0]]();
console.log(a);


const arr = Object.keys(posts);
for (const b in arr) {
  const aa = await posts[arr[b]]();
  // console.log(aa);
}
console.log(arr);

async function youhou(b) {
  const post = await posts[b]();
  console.log(post);
  const tokens_parsed = parserMarkdown(post);
  const tokens = lexerMarkdown(post);
  const toc_a = getToc(tokens);
  return tokens_parsed;
}

async function youhou2(b) {
  const post = await posts[b]();
  const tokens = lexerMarkdown(post);
  const toc_a = getToc(tokens);
  return toc_a[0];
}

// arr.map(youhou)
const asyncarr = await Promise.all(arr.map(async (i) => {
  return youhou(i);
}));

const asynctoc = await Promise.all(arr.map(async (i) => {
  return youhou2(i);
}));

console.log(asyncarr);
console.log(asynctoc);

// const popo = await getPostContent(posts)
// console.log(popo);

// const post_content = getPostContent(posts)
// console.log(post_content);
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
      posts: asyncarr,
      toc: asynctoc
      // posts: this.getPostContent(posts),
      // toc: this.getPostToc(posts)
      // bib: sortingString,
    };
  },
  components: {
    Code,
    Toc,
    PageCourse,
    // MdiStore24Hour
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
    },
    getPostToc(posts) {
      let toc = [];
      for (const path in posts) {
        posts[path]().then((mod) => {
          const tokens = this.lexerMarkdown(mod);
          const toc_a = this.getToc(tokens);
          toc.push(toc_a[0]);
        })
      }
      return toc;
    },
    collapse_id(prefix, thread_ref) {
      const i = thread_ref + 1
      return prefix + i
    },
    collapse_first_id(prefix, thread_ref) {
      if (thread_ref == 0) {
        //  block of code to be executed if the condition is true
        return prefix + " active"
      } else {
        return prefix
      }
    },
    getPostContent(posts) {
      // const arr = Object.keys(posts);

      // arr = arr.map(youhou)
      // const arr = Promise.all(Object.keys(posts).map((x) => posts[x]())).then((mod) => {
      //   console.log("promise", mod);
      //   var a = mod;
      // })
      // console.log("arrrrr", a);
      let arr = [];
      // // let idx = 0;
      for (const path in posts) {
        posts[path]().then((mod) => {
          const tokens_parsed = this.parserMarkdown(mod);
          const tokens = this.lexerMarkdown(mod);
          const toc_a = this.getToc(tokens);
          arr.push({ "content": tokens_parsed, "toc": toc_a });
          // //     // arr[idx] = {"content": tokens_parsed, "toc": toc_a};
          // //     // idx += 1;
        })
      }
      console.log("arrrrr", arr);
      return arr;
    }
  },
  // async created(){
  //   // this.posts = await getPostContent(this.posts);
  //   // console.log("async created", this.posts)
  //   // this.users = await this.getUsers();
  //   // this.toc = await this.getPostToc(this.posts);
  // },
  beforeMount() {
    // this.toc = this.getPostToc(this.posts);
    // console.log(typeof this.posts);
    // console.log(this.posts.keys());

    // this.toc = this.posts
    // this.toc = [
    //   {text: "Course Description"},
    //   {text: "Course Description"}
    // ]
    // this.posts = getPostContent(this.posts);
    // this.posts = this.posts
    console.log(this.posts);
    console.log("this.posts  %O", this.posts);

    // console.log("this.posts", this.posts);
    console.log("this.toc  %O", this.toc);
    console.log(this.toc.length);
    // this.arr = [];
    // this.toc = [];

    // for (const path in posts) {
    //   posts[path]().then((mod) => {
    //     // console.log(path, mod)
    //     const tokens = this.lexerMarkdown(mod);
    //     // console.log(tokens);
    //     const tokens_parsed = this.parserMarkdown(mod);
    //     // console.log(tokens_parsed);
    //     const toc = this.getToc(tokens);
    //     console.log(toc)
    //     this.toc.push(toc[0]);
    //     this.arr.push({"content": tokens_parsed, "toc": toc});
    //   })
  }


  // console.log(this.arr);
  // console.log(this.toc);
  // // console.log(sortingString);
  // const tokens = this.lexerMarkdown(sortingString);
  // console.log(tokens);

  // // console.log(this.toc);
  // this.dfdfd = this.parserMarkdown(sortingString);
  // console.log(this.dfdfd);
  // // this.structuredToc  = this.strcutreHeadings(toc);
  // // console.log(structuredToc);
  // }
}
</script>

<template>
  <!-- <p>Home icon: <MdiStore24Hour /></p> -->
  <section class="pb-0 py-lg-5">
    <div class="container">
      <div class="row">
        
        <Toc :headlines="this.toc" />
        <div class="col-xl-8 col-lg-8 col-md-12 col-12 mb-4 mb-xl-0">
          <div class="card shadow-sm border-0 rounded-2 p-0">
            <div class="card-body p-4 bg-white">
              <PageCourse v-for="(p, index) in this.posts" :content="p" :id="collapse_id('course-pills-', index)"
                :labelledby="collapse_id('course-pills-tab-', index)"
                :class="collapse_first_id('tab-pane fade show', index)" />
            </div>
          </div>
        </div>
          <!-- <PageCourse :content="this.dfdfd"/> -->
        </div>
      </div>
  </section>
</template>