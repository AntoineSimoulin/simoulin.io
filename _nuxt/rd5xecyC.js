import{L as p}from"./-b1yj8eX.js";import{f,p as g}from"./ArINHTJU.js";import{_ as d,c as i,a as t,f as _,t as n,b as m,d as w,r as y,o as s,F as x,g as v,h as A}from"./GhXg3bVB.js";const S={props:["citation"],components:{LinkIcon:p},methods:{formatMonth:f,getCleanUrl(o){return o.replace(/(^\w+:|^)\/\/(?:www\.)?/,"").split("/")[0]}}},q={key:0,class:"w-full md:w-1/2 lg:w-1/3 flex p-4","data-aos":"fade-up","data-aos-delay":"400"},L={class:"card w-full bg-base-100 shadow-sm hover:shadow-xl transition-shadow duration-200 h-full border border-base-200"},k=["href"],N={class:"px-4 pt-4"},P=["src"],j={class:"card-body"},B={class:"text-xs text-base-content/60 flex mb-2"},C=["href"],T={class:"card-title text-lg font-bold"},I={key:0,class:"text-base-content/70 text-sm line-clamp-3 mb-4"},E={class:"card-actions justify-end mt-auto"},M=["href"],D={class:"opacity-70 text-xs"},J={key:1,class:"w-full md:w-1/2 lg:w-1/3 flex p-4","data-aos":"fade-up","data-aos-delay":"400"},U={class:"card w-full bg-primary text-primary-content shadow-sm hover:shadow-xl transition-shadow duration-200 h-full"},V={class:"card-body justify-between"},F={class:"text-xs text-primary-content/80 flex mb-2"},G=["href"],R={class:"card-title text-xl font-bold mb-2"},H={class:"card-actions justify-start"},Z={class:"flex items-center gap-2 text-sm opacity-90"};function O(o,r,e,b,c,a){const l=y("LinkIcon");return"thumbnail"in e.citation.fields?(s(),i("div",q,[t("div",L,[t("a",{target:"_blank",href:e.citation.fields.url,class:"block group"},[t("figure",N,[t("img",{src:e.citation.fields.thumbnail,alt:"Image",class:"rounded-xl h-48 w-full object-cover group-hover:opacity-90 transition-opacity"},null,8,P)])],8,k),t("div",j,[t("div",B,[t("span",null,n(a.formatMonth(e.citation.fields.month))+" "+n(e.citation.fields.year),1)]),t("a",{class:"no-underline hover:link hover:link-primary",target:"_blank",href:e.citation.fields.url},[t("h2",T,n(e.citation.fields.title),1)],8,C),"abstract"in e.citation.fields?(s(),i("p",I,n(e.citation.fields.abstract),1)):_("",!0),t("div",E,[t("a",{href:e.citation.fields.url,target:"_blank",class:"btn btn-xs btn-ghost gap-2 pl-0 hover:bg-transparent hover:text-primary normal-case font-normal"},[m(l,{class:"w-3 h-3"}),t("span",D,n(a.getCleanUrl(e.citation.fields.url)),1)],8,M)])])])])):(s(),i("div",J,[t("div",U,[t("div",V,[t("div",null,[t("div",F,[t("span",null,n(a.formatMonth(e.citation.fields.month))+" "+n(e.citation.fields.year),1)]),t("a",{target:"_blank",href:e.citation.fields.url,class:"no-underline hover:text-white/90 transition-colors"},[t("h2",R,n(e.citation.fields.title),1)],8,G)]),t("div",H,[t("div",Z,[m(l,{class:"w-4 h-4 fill-current"}),w(" "+n(a.getCleanUrl(e.citation.fields.url)),1)])])])])]))}const h=Object.assign(d(S,[["render",O]]),{__name:"BlogPost"}),W=`% String.raw\`\`
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
`,X={components:{BlogPost:h},data(){return{blogPosts:W}},methods:{getBibEntries(o){return g(o)}},created(){this.blogPosts=this.getBibEntries(this.blogPosts)}},z={class:"pb-0 lg:py-6"},K={class:"flex flex-wrap -mx-2 mb-4"};function Q(o,r,e,b,c,a){const l=h;return s(),i("section",z,[t("div",null,[t("div",K,[(s(!0),i(x,null,v(c.blogPosts.entries,u=>(s(),A(l,{key:u.id,citation:u},null,8,["citation"]))),128))])])])}const et=d(X,[["render",Q]]);export{et as default};
