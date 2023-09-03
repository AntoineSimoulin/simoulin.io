import{L as g}from"./iconLink-722cd25c.js";import{_ as c,r as u,o as n,c as o,a as t,t as e,g as f,b as l,h as r,i as _,F as y,e as w,f as x}from"./index-a4b4d36d.js";const v={props:["citation"],components:{LinkIcon:g},methods:{getCleanUrl(s){return s.replace(/(^\w+:|^)\/\/(?:www\.)?/,"").split("/")[0]}}},A={key:0,class:"col-md-6 col-lg-4 d-flex aos-init aos-animate article","data-aos":"fade-up","data-aos-delay":"400"},S={class:"card mb-3 shadow border-0 rounded-2"},q=["href"],L=["src"],N={class:"card-body d-flex flex-column"},P={class:"d-flex justify-content-between mb-3"},k={class:"text-small d-flex"},j={class:"text-muted"},B={class:"text-decoration-none",target:"_blank",href:"https://huggingface.co/blog/1b-sentence-embeddings"},C={class:"text-dark"},$={key:0,class:"flex-grow-1"},T={class:"text-small opacity-70"},I={key:1,class:"col-md-6 col-lg-4 d-flex aos-init aos-animate article","data-aos":"fade-up","data-aos-delay":"400"},E=["href"],M={class:"d-flex justify-content-between mb-3"},D={class:"text-small d-flex"},J={class:"opacity-70"},U={class:"text-small opacity-70"};function V(s,a,d,m,h,p){const i=u("LinkIcon");return"thumbnail"in this.citation.fields?(n(),o("div",A,[t("div",S,[t("a",{target:"_blank",href:this.citation.fields.url},[t("img",{src:this.citation.fields.thumbnail[0],alt:"Image",class:"card-img-top"},null,8,L)],8,q),t("div",N,[t("div",P,[t("div",k,[t("span",j,e(this.citation.fields.month[0])+" "+e(this.citation.fields.year[0]),1)])]),t("a",B,[t("h4",C,e(this.citation.fields.title[0]),1)]),"abstract"in this.citation.fields?(n(),o("p",$,e(this.citation.fields.abstract[0]),1)):f("",!0),t("div",null,[l(i),r(),t("span",T,e(this.getCleanUrl(this.citation.fields.url[0])),1)])])])])):(n(),o("div",I,[t("a",{target:"_blank",href:this.citation.fields.url,class:"text-decoration-none card card-body justify-content-between bg-primary text-light mb-3 shadow border-0 rounded-2"},[t("div",M,[t("div",D,[t("span",J,e(this.citation.fields.month[0])+" "+e(this.citation.fields.year[0]),1)])]),t("div",null,[t("h2",null,e(this.citation.fields.title[0]),1),l(i,{fill:"white"}),r(),t("span",U,e(this.getCleanUrl(this.citation.fields.url[0])),1)])],8,E)]))}const F=c(v,[["render",V]]),G=`% String.raw\`\`
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
  thumbnail = {https://quantmetry.b-cdn.net/wp-content/uploads/2021/05/kane-reinholdtsen-letdkk7whqk-unsplash-scaled.jpg.webp},
  url       = {https://www.quantmetry.com/blog/eacl-2021-resume-conferences/},
}

@misc{Simoulin21A,
  author    = {Antoine Simoulin},
  title     = {GPT-3, la dernière révolution du NLP ?},
  year      = {2021},
  month     = {February},
  abstract  = {Nous analysons les relations entre la recherche en intelligence artificielle et ses applications commerciales. Nous illustrons notre propos par GPT-3...},
  thumbnail = {https://quantmetry.b-cdn.net/wp-content/uploads/2021/02/nlp.png.webp},
  url       = {https://www.quantmetry.com/blog/analyse-gt3/},
}

@misc{Simoulin20,
  author    = {Antoine Simoulin},
  title     = {Synthétiser vos emails en quelques mots},
  year      = {2020},
  month     = {June},
  abstract  = {Au delà d’une épreuve de langue, le résumé automatique représente une vraie opportunité pour de nombreux secteurs...},
  thumbnail = {https://quantmetry.b-cdn.net/wp-content/uploads/2020/06/email.jpg.webp},
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
  thumbnail = {https://quantmetry.b-cdn.net/wp-content/uploads/2019/11/article-bert-sur-le-banc-de-test-min.png.webp},
  url       = {https://www.quantmetry.com/blog/bert-google-ai-banc-de-test/},
}

@misc{Simoulin19A,
  author    = {Antoine Simoulin},
  title     = {La labellisation pour du NLP à forte valeur ajoutée},
  year      = {2019},
  month     = {November},
  url       = {https://www.quantmetry.com/blog/labellisation-nlp/},
}
`,R={components:{BlogPost:F},data(){return{blogPosts:G}},methods:{getBibEntries(s){return _.parse(s)}},beforeMount(){this.blogPosts=this.getBibEntries(this.blogPosts)}},H={class:"pb-0 py-lg-5"},Z={class:"container"},W={class:"row mb-4"};function X(s,a,d,m,h,p){const i=u("BlogPost");return n(),o("section",H,[t("div",Z,[t("div",W,[(n(!0),o(y,null,w(this.blogPosts.entries,b=>(n(),x(i,{citation:b},null,8,["citation"]))),256))])])])}const O=c(R,[["render",X]]);export{O as default};
