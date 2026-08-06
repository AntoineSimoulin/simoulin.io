import{L as f}from"./Bz8mGU7o.js";import{f as w,p as x}from"./ArINHTJU.js";import{_ as b,c as r,a as e,f as _,n as l,t as o,b as y,r as v,o as i,d,F as k,g as A,h as S}from"./DlOpilZR.js";const L={props:["citation","index"],components:{LinkIcon:f},computed:{isWide(){return this.index%4===0},badgeColorClass(){const t=["bg-yellow-300","bg-pink-300","bg-purple-300","bg-blue-300","bg-emerald-300"];return t[this.index%t.length]},btnColorClass(){const t=["bg-yellow-300 hover:bg-yellow-400","bg-pink-300 hover:bg-pink-400","bg-purple-300 hover:bg-purple-400","bg-blue-300 hover:bg-blue-400","bg-emerald-300 hover:bg-emerald-400"];return t[this.index%t.length]}},methods:{formatMonth:w,getCleanUrl(t){return t.replace(/(^\w+:|^)\/\/(?:www\.)?/,"").split("/")[0]}}},q={class:"w-full min-w-0 bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full overflow-hidden"},C={class:"flex items-center justify-between gap-2 mb-3"},N=["href"],P={key:0,class:"text-black/80 text-sm font-medium leading-relaxed my-3 break-words"},j={class:"pt-4 flex items-center min-w-0"},B=["href"],T={class:"truncate"};function I(t,a,n,p,u,s){const c=v("LinkIcon");return i(),r("div",{class:l(["flex w-full min-w-0",s.isWide?"col-span-1 md:col-span-2 lg:col-span-2":"col-span-1"])},[e("div",q,[e("div",null,[e("div",C,[e("span",{class:l(["text-black border-2 border-black px-3 py-1 rounded-xl text-xs font-black shadow-[1.5px_1.5px_0px_#000]",s.badgeColorClass])},o(s.formatMonth(n.citation.fields.month))+" "+o(n.citation.fields.year),3)]),e("a",{target:"_blank",href:n.citation.fields.url,class:"no-underline text-black hover:text-blue-600"},[e("h2",{class:l(["font-black tracking-tight leading-snug mb-3 break-words",s.isWide?"text-2xl lg:text-3xl":"text-xl"])},o(n.citation.fields.title),3)],8,N),"abstract"in n.citation.fields?(i(),r("p",P,o(n.citation.fields.abstract),1)):_("",!0)]),e("div",j,[e("a",{href:n.citation.fields.url,target:"_blank",class:l(["inline-flex items-center gap-1.5 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-black text-xs transition-all no-underline max-w-full overflow-hidden",s.btnColorClass])},[y(c,{class:"w-3.5 h-3.5 fill-current text-black shrink-0"}),e("span",T,o(s.getCleanUrl(n.citation.fields.url)),1)],10,B)])])],2)}const h=Object.assign(b(L,[["render",I]]),{__name:"BlogPost"}),E=`% String.raw\`\`
@misc{Simoulin22,
  author    = {Antoine Simoulin},
  title     = {My thoughts about NAACL 2022},
  year      = {2022},
  month     = {July},
  abstract  = {I just assisted NAACL 2022, the North American chapter of the famous ACL conference. Here is a compilation of my thoughts and my personal analysis of the current trends in computational linguistics.},
  thumbnail = {https://miro.medium.com/max/1400/0*LJPTgq7U7c9W7jxM},
  url       = {https://medium.com/@antoine.simoulin/my-thoughts-about-naacl-2022-c1f36c6da9b8},
}

@misc{Simoulin21D,
  author    = {Antoine Simoulin},
  title     = {Train a Sentence Embedding Model with 1 Billion Training Pairs},
  year      = {2021},
  month     = {September},
  url       = {https://huggingface.co/blog/1b-sentence-embeddings},
}

@misc{Simoulin21C,
  author    = {Antoine Simoulin},
  title     = {Créer rapidement une IA business, c'est possible},
  year      = {2021},
  month     = {June},
  abstract  = {Plusieurs techniques existent pour accélérer le développement d'un modèle de machine learning orienté business : des algorithmes "tout en un" au transfert learning en passant par l'auto ML.},
  thumbnail = {https://img-0.journaldunet.com/6g01\\_frZHxXLrNh7qDAZJiAi4T4=/1500x/smart/930b1c5b8b954a88b6a940da2864c647/ccmcms-jdn/25874343.jpg},
  url       = {https://www.journaldunet.com/solutions/dsi/1503559-creer-rapidement-une-ia-verticale-c-est-possible/},
}

@misc{Simoulin21B,
  author    = {Antoine Simoulin},
  title     = {EACL 2021 - Revue des dernières innovations en NLP},
  year      = {2021},
  month     = {May},
  abstract  = {Résumé des interventions à la conférence EACL 2021, les dernières innovations dans le monde de la linguistique informatique et du NLP...},
  thumbnail = {https://www.quantmetry.com/wp-content/uploads/2021/05/kane-reinholdtsen-letdkk7whqk-unsplash-scaled.jpg.webp},
  url       = {https://www.quantmetry.com/blog/eacl-2021-resume-conferences/},
}

@misc{Simoulin21A,
  author    = {Antoine Simoulin},
  title     = {GPT-3, la dernière révolution du NLP ?},
  year      = {2021},
  month     = {February},
  abstract  = {Nous analysons les relations entre la recherche en intelligence artificielle et ses applications commerciales. Nous illustrons notre propos par GPT-3...},
  thumbnail = {https://www.quantmetry.com/wp-content/uploads/2021/02/nlp.png.webp},
  url       = {https://www.quantmetry.com/blog/analyse-gt3/},
}

@misc{Simoulin20,
  author    = {Antoine Simoulin},
  title     = {Synthétiser vos emails en quelques mots},
  year      = {2020},
  month     = {June},
  abstract  = {Au delà d’une épreuve de langue, le résumé automatique représente une vraie opportunité pour de nombreux secteurs...},
  thumbnail = {https://quantmetry.com/wp-content/uploads/2020/06/email.jpg.webp},
  url       = {https://www.quantmetry.com/blog/synthetiser-emails/},
}

@misc{Simoulin19C,
  author    = {Antoine Simoulin},
  title     = {Evolution de l'IA : transformation des cas d'usages et futurs défis},
  year      = {2019},
  month     = {November},
  abstract  = {L’intelligence artificielle (IA) connaît une impressionnante expansion, nourrie par de formidables promesses et des progrès technologiques constants.},
  thumbnail = {https://www.soft-concept.com/surveymag/images/posts/evolution-ia.jpg},
  url       = {https://www.soft-concept.com/surveymag/evolution-ia-transformation-cas-usages-futurs-defis.html},
}

@misc{Simoulin19B,
  author    = {Antoine Simoulin},
  title     = {Le BERT NLP de Google AI sur le banc de test !},
  year      = {2019},
  month     = {November},
  abstract  = {Nombreuses sont les problématiques auxquelles on peut aujourd’hui répondre grâce à l’Analyse de Données Textuelles (ADT) et au Traitement Automatique du Langage...},
  thumbnail = {https://quantmetry.com/wp-content/uploads/2019/11/article-bert-sur-le-banc-de-test-min.png.webp},
  url       = {https://www.quantmetry.com/blog/bert-google-ai-banc-de-test/},
}

@misc{Simoulin19A,
  author    = {Antoine Simoulin},
  title     = {La labellisation pour du NLP à forte valeur ajoutée},
  year      = {2019},
  month     = {November},
  url       = {https://www.quantmetry.com/blog/labellisation-nlp/},
}
`,M={components:{BlogPost:h},data(){return{blogPosts:E}},methods:{getBibEntries(t){return x(t)}},created(){this.blogPosts=this.getBibEntries(this.blogPosts)}},D={class:"pb-0 lg:py-6 w-full min-w-0"},J={class:"w-full min-w-0"},V={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense mb-8 w-full min-w-0"};function W(t,a,n,p,u,s){const c=h;return i(),r("section",D,[e("div",J,[a[0]||(a[0]=e("div",{class:"w-full mb-6"},[e("h1",{class:"font-extrabold text-3xl sm:text-4xl pb-3 text-black tracking-tight leading-tight"},[d(" Articles & thoughts on "),e("mark",{class:"bg-purple-100 text-black px-2.5 py-0.5 border-2 border-black rounded-xl inline-block rotate-1"},"AI, NLP & Tech"),d(". ")])],-1)),e("div",V,[(i(!0),r(k,null,A(u.blogPosts.entries,(m,g)=>(i(),S(c,{key:m.id,citation:m,index:g},null,8,["citation","index"]))),128))])])])}const U=b(M,[["render",W]]);export{U as default};
