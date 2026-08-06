import{_ as k,c as i,a as t,f as c,n as m,t as p,d as b,o,F as x,g,i as C,b as y}from"./DZ7E-WN5.js";import{f as S,p as _}from"./D6m6wodq.js";const L={props:["citation"],computed:{venueColorClass(){const a=this.getVenueName(this.citation),e=["bg-yellow-300","bg-pink-300","bg-emerald-300","bg-purple-300","bg-blue-300"];let n=0;for(let r=0;r<a.length;r++)n=a.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]}},methods:{concatFirstAndLastName(a){let e=[];for(let n of a)e.push(n.firstName+" "+n.lastName);return e},getAuthorsList(a){a=this.concatFirstAndLastName(a);let e="";a[0]=="Antoine Simoulin"?(e+="<strong>",e+=a[0],e+="</strong>"):e+=a[0];for(let n=1;n<a.length-1;n++)e+=", ",a[n]=="Antoine Simoulin"?(e+="<strong>",e+=a[n],e+="</strong>"):e+=a[n];return a.length>1&&(e+='<span class="text-lowercase"> and </span>',a[a.length-1]=="Antoine Simoulin"?(e+="<strong>",e+=a[a.length-1],e+="</strong>"):e+=a[a.length-1]),e},getVenueName(a){if(a.fields.venue)return a.fields.venue;const e=a.fields.booktitle||"",n=a.fields.journal||"",r=a.fields.year||"";if(a.type==="phdthesis")return`PhD Thesis (${r})`;if(e){const u=e.match(/\{(RecSys|ACL|EMNLP|NAACL|EACL|ICLR|NeurIPS|CVPR|ECCV|ICML|KDD|TALN|ES-FoMo)\}/i)||e.match(/\b(RecSys|ACL|EMNLP|NAACL|EACL|ICLR|NeurIPS|CVPR|ECCV|ICML|KDD|TALN|ES-FoMo)\b/i);if(u){let d=u[1];const s=d.toUpperCase();s.includes("RECSYS")?d="RecSys":s.includes("NEURIPS")?d="NeurIPS":s.includes("ES-FOMO")?d="ES-FoMo @ ICML":s.includes("NAACL")?d="NAACL":s.includes("EACL")?d="EACL":s.includes("EMNLP")?d="EMNLP":s.includes("ACL")?d="ACL":s.includes("ICLR")?d="ICLR":s.includes("TALN")&&(d="TALN");const h=e.toLowerCase().includes("demonstration")||e.toLowerCase().includes("demo"),A=e.toLowerCase().includes("student")||e.toLowerCase().includes("srw");return h?d+=" (Demo)":A&&(d+=" (SRW)"),`${d} ${r}`}const f=e.replace(/[\{\}]/g,"").split(",");return f.length>=2&&f[1].trim().length<35?`${f[1].trim()} ${r}`:`${f[0].trim()} ${r}`}if(n){const u=n.replace(/[\{\}]/g,"");return u.toLowerCase().includes("arxiv")?`arXiv ${r}`:`${u} ${r}`}return r?`${r}`:""}}},N={class:"bg-white border-2 border-black hover:shadow-[3.5px_3.5px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-5 text-black font-medium"},P={class:"flex flex-wrap items-center justify-between gap-3 mb-3"},M={class:"hidden sm:flex flex-wrap items-center gap-2 ml-auto"},T={key:0,class:"inline-flex items-center gap-1.5 bg-yellow-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3 py-1 rounded-xl text-xs font-black"},R=["href"],E=["href"],D=["href"],I={class:"mb-2"},F=["href"],B={class:"flex sm:hidden flex-wrap items-center gap-2 my-2.5"},J={key:0,class:"inline-flex items-center gap-1.5 bg-yellow-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3 py-1 rounded-xl text-xs font-black"},V=["href"],j=["href"],H=["href"],G=["innerHTML"];function O(a,e,n,r,u,l){return o(),i("div",N,[t("div",P,[l.getVenueName(n.citation)?(o(),i("mark",{key:0,class:m(["text-black font-black text-sm sm:text-base px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] rounded-xl inline-block -rotate-1",l.venueColorClass])},p(l.getVenueName(n.citation)),3)):c("",!0),t("div",M,["award"in n.citation.fields?(o(),i("span",T,[...e[0]||(e[0]=[t("i",{class:"fa-solid fa-star text-black","aria-hidden":"true"},null,-1),b(" Best Paper Award ",-1)])])):c("",!0),"pdf"in n.citation.fields?(o(),i("a",{key:1,href:n.citation.fields.pdf,class:"inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[1]||(e[1]=[t("i",{class:"fas fa-file-alt text-black","aria-hidden":"true"},null,-1),b(" PDF ",-1)])],8,R)):c("",!0),"youtube"in n.citation.fields?(o(),i("a",{key:2,href:n.citation.fields.youtube,class:"inline-flex items-center gap-1.5 bg-pink-300 hover:bg-pink-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[2]||(e[2]=[t("i",{class:"fa-brands fa-youtube text-black","aria-hidden":"true"},null,-1),b(" Video ",-1)])],8,E)):c("",!0),"github"in n.citation.fields?(o(),i("a",{key:3,href:n.citation.fields.github,class:"inline-flex items-center gap-1.5 bg-purple-300 hover:bg-purple-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[3]||(e[3]=[t("i",{class:"fa-brands fa-github text-black","aria-hidden":"true"},null,-1),b(" Code ",-1)])],8,D)):c("",!0)])]),t("div",I,[t("a",{href:n.citation.fields.url,class:"font-black text-lg sm:text-xl text-black hover:text-blue-600 no-underline leading-snug",target:"_blank"},p(n.citation.fields.title),9,F)]),t("div",B,["award"in n.citation.fields?(o(),i("span",J,[...e[4]||(e[4]=[t("i",{class:"fa-solid fa-star text-black","aria-hidden":"true"},null,-1),b(" Best Paper Award ",-1)])])):c("",!0),"pdf"in n.citation.fields?(o(),i("a",{key:1,href:n.citation.fields.pdf,class:"inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[5]||(e[5]=[t("i",{class:"fas fa-file-alt text-black","aria-hidden":"true"},null,-1),b(" PDF ",-1)])],8,V)):c("",!0),"youtube"in n.citation.fields?(o(),i("a",{key:2,href:n.citation.fields.youtube,class:"inline-flex items-center gap-1.5 bg-pink-300 hover:bg-pink-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[6]||(e[6]=[t("i",{class:"fa-brands fa-youtube text-black","aria-hidden":"true"},null,-1),b(" Video ",-1)])],8,j)):c("",!0),"github"in n.citation.fields?(o(),i("a",{key:3,href:n.citation.fields.github,class:"inline-flex items-center gap-1.5 bg-purple-300 hover:bg-purple-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[7]||(e[7]=[t("i",{class:"fa-brands fa-github text-black","aria-hidden":"true"},null,-1),b(" Code ",-1)])],8,H)):c("",!0)]),t("div",{class:"text-sm text-black/90 mb-1 font-medium",innerHTML:l.getAuthorsList(n.citation.fields.author)},null,8,G)])}const v=Object.assign(k(L,[["render",O]]),{__name:"Citation"}),U={props:["citation"],methods:{formatMonth:S}},W={class:"bg-white border-2 border-black hover:shadow-[3.5px_3.5px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-5 text-black font-medium"},Y={class:"flex flex-wrap items-center justify-between gap-3 mb-2.5"},X=["href"],q={key:1,class:"font-black text-lg sm:text-xl text-black leading-snug flex-1 min-w-[200px]"},z={class:"flex flex-wrap items-center gap-2 shrink-0"},K=["href"],Q=["href"],Z=["href"],$={class:"flex flex-wrap items-center gap-2.5 my-2.5"},ee={key:0,class:"inline-flex items-center gap-1.5 bg-yellow-200 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-2.5 py-1 rounded-lg text-xs font-black"},ne={key:1,class:"inline-flex items-center gap-1.5 bg-pink-200 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-2.5 py-1 rounded-lg text-xs font-black"},te={key:0,class:"text-sm font-medium text-black/80 mt-2 leading-relaxed"};function ae(a,e,n,r,u,l){return o(),i("div",W,[t("div",Y,[n.citation.fields?.slides||n.citation.fields?.url?(o(),i("a",{key:0,href:n.citation.fields?.slides||n.citation.fields?.url,class:"font-black text-lg sm:text-xl text-black hover:text-blue-600 no-underline leading-snug flex-1 min-w-[200px]",target:"_blank"},p(n.citation.fields?.title),9,X)):(o(),i("span",q,p(n.citation.fields?.title),1)),t("div",z,[n.citation.fields?.slides?(o(),i("a",{key:0,href:n.citation.fields.slides,class:"inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[0]||(e[0]=[t("i",{class:"fas fa-desktop text-black","aria-hidden":"true"},null,-1),b(" Slides ",-1)])],8,K)):c("",!0),n.citation.fields?.pdf?(o(),i("a",{key:1,href:n.citation.fields.pdf,class:"inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[1]||(e[1]=[t("i",{class:"fas fa-file-pdf text-black","aria-hidden":"true"},null,-1),b(" PDF ",-1)])],8,Q)):c("",!0),!n.citation.fields?.slides&&!n.citation.fields?.pdf&&n.citation.fields?.url?(o(),i("a",{key:2,href:n.citation.fields.url,class:"inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all",target:"_blank"},[...e[2]||(e[2]=[t("i",{class:"fas fa-external-link-alt text-black","aria-hidden":"true"},null,-1),b(" Link ",-1)])],8,Z)):c("",!0)])]),t("div",$,[n.citation.fields?.year?(o(),i("span",ee,[e[3]||(e[3]=t("i",{class:"fa-regular fa-calendar text-black"},null,-1)),t("span",null,p(l.formatMonth(n.citation.fields?.month))+" "+p(n.citation.fields?.year),1)])):c("",!0),n.citation.fields?.venue||n.citation.fields?.address?(o(),i("span",ne,[e[4]||(e[4]=t("i",{class:"fa-solid fa-location-dot text-black"},null,-1)),t("span",null,p(n.citation.fields?.venue)+p(n.citation.fields?.address?`, ${n.citation.fields?.address}`:""),1)])):c("",!0)]),n.citation.fields?.abstract?(o(),i("p",te,p(n.citation.fields?.abstract),1)):c("",!0)])}const w=Object.assign(k(U,[["render",ae]]),{__name:"Talk"}),ie=`@inproceedings{goel-etal-2026-text,
    title = "The Text on the Creative: An Under-Exploited Ranking Modality for Short-Form Video Ads",
    author = "Goel, Shubham  and
      Liu, Angli  and
      Simoulin, Antoine  and
      Thakur, Himanshu  and
      Huang, Qin  and
      Au, Benjamin  and
      Lebanon, Guy  and
      Chordia, Sagar  and
      Treadway, Andrew  and
      Jiang, Wendy  and
      Wen, Yiding  and
      Fu, Jianing  and
      Li, Alan  and
      Zhang, Haibo  and
      Akkas, Selahattin  and
      Ma, Calvin  and
      Zeng, Zhen  and
      He, Yunyu",
    booktitle = "Proceedings of the 20th ACM Conference on Recommender Systems, {RecSys} 2026, Minneapolis, Minnesota, USA, September 28--October 2, 2026",
    month = sep,
    year = "2026",
    address = "Minneapolis, Minnesota, USA",
    publisher = "Association for Computing Machinery",
    url = "https://recsys.acm.org/recsys26/contributions/#content-tab-1-5-tab"
}

@inproceedings{yang-etal-2025-docagent,
    title = "{D}oc{A}gent: A Multi-Agent System for Automated Code Documentation Generation",
    author = "Yang, Dayu  and
      Simoulin, Antoine  and
      Qian, Xin  and
      Liu, Xiaoyi  and
      Cao, Yuwei  and
      Teng, Zhaopu  and
      Yang, Grey",
    editor = "Mishra, Pushkar  and
      Muresan, Smaranda  and
      Yu, Tao",
    booktitle = "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 3: System Demonstrations), {ACL} 2025 (Demonstration), Vienna, Austria, Jul 27, 2025",
    month = jul,
    year = "2025",
    address = "Vienna, Austria",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.acl-demo.44/",
    pages = "460--471",
    ISBN = "979-8-89176-253-4",
    pdf = {https://aclanthology.org/2025.acl-demo.44.pdf},
  github = {https://github.com/facebookresearch/DocAgent}
}

@inproceedings{yang-etal-2025-code,
    title = "Code to Think, Think to Code: A Survey on Code-Enhanced Reasoning and Reasoning-Driven Code Intelligence in {LLM}s",
    author = "Yang, Dayu  and
      Liu, Tianyang  and
      Zhang, Daoan  and
      Simoulin, Antoine  and
      Liu, Xiaoyi  and
      Cao, Yuwei  and
      Teng, Zhaopu  and
      Qian, Xin  and
      Yang, Grey  and
      Luo, Jiebo  and
      McAuley, Julian",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, {EMNLP} 2025, Suzhou, China, Nov 12, 2025",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.emnlp-main.130/",
    doi = "10.18653/v1/2025.emnlp-main.130",
    pages = "2586--2616",
    ISBN = "979-8-89176-332-6",
    pdf = {https://aclanthology.org/2025.emnlp-main.130.pdf}
}

@inproceedings{simoulin-etal-2024-memory,
    title = "Memory-Efficient Fine-Tuning of Transformers via Token Selection",
    author = "Simoulin, Antoine  and
      Park, Namyong  and
      Liu, Xiaoyi  and
      Yang, Grey",
    editor = "Al-Onaizan, Yaser  and
      Bansal, Mohit  and
      Chen, Yun-Nung",
    booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, {EMNLP} 2024, Miami, Florida, USA, Nov 12, 2024",
    month = nov,
    year = "2024",
    address = "Miami, Florida, USA",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.emnlp-main.1202",
    pages = "21565--21580",
    pdf = {https://aclanthology.org/2024.emnlp-main.1202.pdf},
    github = {https://github.com/facebookresearch/tokentune}
}

@article{SABAH2024100022,
title = {Advancements in Managing Pure Ductal Carcinoma In Situ: An 18-Year Artificial Intelligence-Aided Analysis of 998 Patients},
journal = {Innovative Practice in Breast Health},
pages = {100022},
year = {2024},
issn = {2950-2128},
doi = {https://doi.org/10.1016/j.ibreh.2024.100022},
url = {https://www.sciencedirect.com/science/article/pii/S2950212824000228},
author = {Jonathan Sabah and Charmène Cruchet and Mousselim Gharbi and Marie-Pierre Chenard and Alexis Marouk and Antoine Simoulin and Nicolas Thiebaut and Karl Neuberger and Sébastien Molière and Carole Mathelin},
}

@inproceedings{adamcuvillier:hal-04623013,
  title = {{Les repr{\\'e}sentations contextuelles st{\\'e}r{\\'e}otyp{\\'e}es dans les mod{\\\`e}les de langue fran{\\c c}ais : mieux les identifier pour ne pas les reproduire}},
  author = {Adam-Cuvillier, L{\\'e}andre and Larpin, Pierre-Jean and Simoulin, Antoine},
  url = {https://aclanthology.org/2024.jeptalnrecital-taln.9/},
  booktitle = {Actes de la 31e Conf{\\'{e}}rence sur le Traitement Automatique
               des Langues Naturelles,
               {TALN} 2024, Toulouse, France, July, 2024},    
  address = {Toulouse, France},
  editor = {BALAGUER and Mathieu and BENDAHMAN and Nihed and HO-DAC and Lydia-Mai and MAUCLAIR and Julie and MORENO and Jose G and PINQUIER and Julien},
  publisher = {{ATALA \\& AFPC}},
  pages = {130-143},
  year = {2024},
  month = Jul,
  pdf = {https://aclanthology.org/2024.jeptalnrecital-taln.9.pdf},
}

@inproceedings{park2024forward,
  title={Forward Learning of Graph Neural Networks},
  author={Namyong Park and Xing Wang and Antoine Simoulin and Shuai Yang and Grey Yang and Ryan A. Rossi and Puja Trivedi and Nesreen K. Ahmed},
  booktitle={The Twelfth International Conference on Learning Representations, {ICLR} 2024, Vienna, Austria, May 07, 2024},
  year={2024},
  url={https://openreview.net/forum?id=Abr7dU98ME}
  pdf       = { https://openreview.net/pdf?id=Abr7dU98ME},
}

@inproceedings{anonymous2023glemos,
  title     = {{GLEMOS}: Benchmark for Instantaneous Graph Learning Model Selection},
  author    = {Namyong Park and Ryan Rossi and Xing Wang and Antoine Simoulin and Nesreen Ahmed and Christos Faloutsos},
  booktitle = {Advances in Neural Information Processing Systems, {NeurIPS} 2023, New Orleans, USA, Dec 10, 2023},
  year      = {2023},
  url       = {https://openreview.net/forum?id=5HisVXnx0n}
  pdf       = { https://openreview.net/pdf?id=5HisVXnx0n},
}

@article{DBLP:journals/corr/abs-1712-02259,
  author    = {Antoine Simoulin and
               Namyong Park and
               Xiaoyi Liu and
               Grey Yang},
  title     = {Memory-Efficient Selective Fine-Tuning},
  booktitle = {Efficient Systems for Foundation Models Workshop at ICML 2023, {ES-FoMo} 2023, Honolulu, Hawaii, USA, July 29, 2023},
  year      = {2023},
  url       = {https://openreview.net/forum?id=zaNbLceVwm},
  pdf       = {https://openreview.net/pdf?id=zaNbLceVwm},
  award     = {Best Paper Award},
  youtube   = {https://icml.cc/virtual/2023/workshop/21479}
}

@phdthesis{DBLP:phd/hal/Simoulin22,
  author    = {Antoine Simoulin},
  title     = {Sentence embeddings and their relation with sentence structures},
  school    = {Universit{\\'{e}} Paris Cit{\\'{e}}, France},
  year      = {2022},
  url       = {https://tel.archives-ouvertes.fr/tel-03791935},
  pdf       = {https://hal.archives-ouvertes.fr/tel-03791935/document},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/soutenance\\_these\\_v5.pdf},
}

@inproceedings{DBLP:conf/naacl/SimoulinC22,
  author    = {Antoine Simoulin and
               Beno{\\^{\\i}}t Crabb{\\'{e}}},
  editor    = {Daphne Ippolito and
               Liunian Harold Li and
               Maria Leonor Pacheco and
               Danqi Chen and
               Nianwen Xue},
  title     = {Unifying Parsing and Tree-Structured Models for Generating Sentence
               Semantic Representations},
  booktitle = {Proceedings of the 2022 Conference of the North American Chapter of
               the Association for Computational Linguistics: Human Language Technologies:
               Student Research Workshop, {NAACL-HLT} 2022, Hybrid Event / Seattle,
               WA, USA, July 10-15, 2022},
  pages     = {267--276},
  publisher = {Association for Computational Linguistics},
  year      = {2022},
  url       = {https://doi.org/10.18653/v1/2022.naacl-srw.33},
  doi       = {10.18653/v1/2022.naacl-srw.33},
  pdf       = {https://aclanthology.org/2022.naacl-srw.33.pdf},
  youtube   = {https://www.youtube.com/watch?v=luafhEAQ\\_mQ&t}
}

@inproceedings{DBLP:conf/acl/SimoulinC21,
  author    = {Antoine Simoulin and
               Beno{\\^{\\i}}t Crabb{\\'{e}}},
  editor    = {Jad Kabbara and
               Haitao Lin and
               Amandalynne Paullada and
               Jannis Vamvas},
  title     = {How Many Layers and Why? An Analysis of the Model Depth in Transformers},
  booktitle = {Proceedings of the {ACL-IJCNLP} 2021 Student Research Workshop, {ACL}
               2021, Online, July 5-10, 2021},
  pages     = {221--228},
  publisher = {Association for Computational Linguistics},
  year      = {2021},
  url       = {https://doi.org/10.18653/v1/2021.acl-srw.23},
  doi       = {10.18653/v1/2021.acl-srw.23},
  pdf       = {https://aclanthology.org/2021.acl-srw.23.pdf},
  youtube   = {https://www.youtube.com/watch?v=wLho6ZIAwrM},
  github    = {https://github.com/AntoineSimoulin/adaptive-depth-transformers},
}

@inproceedings{DBLP:conf/taln/SimoulinC21,
  author    = {Antoine Simoulin and
               Beno{\\^{\\i}}t Crabb{\\'{e}}},
  editor    = {Pascal Denis and
               Natalia Grabar and
               Amel Fraisse and
               R{\\'{e}}mi Cardon and
               Bernard Jacquemin and
               Eric Kergosien and
               Antonio Balvet},
  title     = {Un mod{\\\`{e}}le Transformer G{\\'{e}}n{\\'{e}}ratif Pr{\\'{e}}-entrain{\\'{e}}
               pour le {\\_}{\\_}{\\_}{\\_}{\\_}{\\_} Fran{\\c{c}}ais},
  booktitle = {Actes de la 28e Conf{\\'{e}}rence sur le Traitement Automatique
               des Langues Naturelles. Volume 1 : conf{\\'{e}}rence principale,
               {TALN} 2021, Lille, France, June 28 - July 2, 2021},
  pages     = {246--255},
  publisher = {{ATALA}},
  year      = {2021},
  url       = {https://aclanthology.org/2021.jeptalnrecital-taln.24},
  pdf       = {https://aclanthology.org/2021.jeptalnrecital-taln.24.pdf},
  youtube   = {https://www.youtube.com/watch?v=tN_NF68QvOs&t},
  github    = {https://github.com/AntoineSimoulin/gpt-fr},
}
@inproceedings{DBLP:conf/eacl/SimoulinC21,
  author    = {Antoine Simoulin and
               Beno{\\^{\\i}}t Crabb{\\'{e}}},
  editor    = {Ionut{-}Teodor Sorodoc and
               Madhumita Sushil and
               Ece Takmaz and
               Eneko Agirre},
  title     = {Contrasting distinct structured views to learn sentence embeddings},
  booktitle = {Proceedings of the 16th Conference of the European Chapter of the
               Association for Computational Linguistics: Student Research Workshop,
               {EACL} 2021, Online, April 19-23, 2021},
  pages     = {71--79},
  publisher = {Association for Computational Linguistics},
  year      = {2021},
  url       = {https://doi.org/10.18653/v1/2021.eacl-srw.11},
  doi       = {10.18653/v1/2021.eacl-srw.11},
  pdf       = {https://www.aclweb.org/anthology/2021.eacl-srw.11.pdf},
}

@article{adon2020deep,
  title   = {Deep Learning: des usages contrast{\\'e}s Une contextualisation de l’ouvrage de Goodfellow, Bengio et Courville},
  author  = {Adon, R{\\'e}mi and
             Gherbi, Abdellah Kaid and
             Arthur, Florian and
             N{\\\`e}gre, Aur{\\'e}lia and
             Basquiast, Guillaume and
             Simoulin, Antoine and
             Hochard, Guillaume and
             Talaouit-Mockli, Fouad and
             Bousquet, Nicolas},
  journal = {Statistique et Soci{\\'e}t{\\'e}},
  volume  = {8},
  number  = {3},
  pages   = {55--108},
  year    = {2020}
  url     = {https://statistique-et-societe.fr/index.php/stat_soc/article/view/802},
}

@article{DBLP:journals/corr/abs-1712-02259,
  author    = {Antoine Simoulin and
               Nicolas Thiebaut and
               Karl Neuberger and
               Issam Ibnouhsein and
               Nicolas Brunel and
               Raphaël Viné and
               Nicolas Bousquet and
               Jules Latapy and
               Nathalie Reix and
               S{\\'{e}}bastien Moli{\\\`{e}}re and
               Massimo Lodi and
               Carole Mathelin},
  title     = {From free‐text electronic health records to structured cohorts: Onconum, an innovative methodology for real‐world data mining in breast cancer},
  journal   = {Computer Methods and Programs in Biomedicine},
  volume    = {240},
  year      = {2023},
  url       = {https://doi.org/10.1016/j.cmpb.2023.107693},
  eprinttype = {arXiv},
  eprint    = {0169-2607},
}

@article{Mathelin17,
  author    = {Carole Mathelin and
               Jules Colin and
               S{\\'{e}}bastien Moli{\\\`{e}}re and
               Audrey Fleury and
               Christelle Linck and
               Marie Pat{\\'{e}} and
               Catherine Guldenfels and
               Antoine Simoulin and
               Karl Neuberger and
               Jeremie J{\\'{e}}gu},
  isbn      = {9782711404322},
  title     = {Impact Du Dépistage : Une Expérience Française},
  booktitle = {Mise À Jour Du Collège National Des Gynécologues Et Obstétriciens Français},
  pages     = {315--328},
  publisher = {Israël Nisan and
               Philippe Deruelle and
               Olivier Graesslin},
  year      = {2017},
  url       = {https://www.ibrahimaidibe.com/medias/draidibe/pro/mise-a-jour_2017_tome_2.pdf},
  pdf       = {https://www.ibrahimaidibe.com/medias/draidibe/pro/mise-a-jour_2017_tome_2.pdf},
}`,oe=`% String.raw\`\`
@misc{Simoulin23,
  author    = {Antoine Simoulin},
  title     = {Enhancing compositional properties of neural networks by incorporating linguistic insights into their structures},
  year      = {2023},
  month     = {Jan},
  abstract  = {Presentation at the university resesarch colloquium about my PhD research. Around 25 researchers attended the presentation.},
  address   = {Heinrich Heine Universit\\"{a}t, D\\"{u}sseldorf, Deutschland},
  venue     = {University resesarch colloquium},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/Research\\%20Colloquium\\%20of\\%20my\\%20University\\%20in\\%20Du\\%CC\\%88sseldorf.pdf}
}

@misc{Simoulin22A,
  author    = {Antoine Simoulin},
  title     = {From Text To Image, Multimodality In Deep Learning},
  year      = {2022},
  month     = {Nov},
  abstract  = {This presentation focused on the emergence of large unified models processing simultaneously multiple modalities such as text, images, video, and speech.},
  address   = {Boston, US},
  venue     = {Quantumblack DS Coffee},
  url       = {https://simoulin.io/communications.html},
  slides    = {/slides/deck1/},
  pdf       = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/presentation-mck.pdf}
}

@misc{Simoulin22B,
  author    = {Antoine Simoulin},
  title     = {Sentence embeddings and their relation with sentence structures},
  year      = {2022},
  month     = {Juil},
  abstract  = {PhD Defense.},
  address   = {Paris, France},
  venue     = {Universit{\\'{e}} Paris Cit{\\'{e}}},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/soutenance\\_these\\_v5.pdf}
}

@misc{Simoulin21,
  author    = {Antoine Simoulin},
  title     = {Pre-Trained Neural Networks For Text Generation And Their Implications},
  year      = {2021},
  month     = {Apr},
  abstract  = {Around 30 students and professionals in the field of data science attended the talk. I presented my paper about the first large pre-trained generative model in French.},
  address   = {Nantes, France},
  venue     = {Machine Learning Meetup, Epitech engineering school},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/Meetup\\_Nantes.pdf}
}

@misc{Simoulin20,
  author    = {Antoine Simoulin},
  title     = {DisSent: Learning Sentence Representations From Explicit Discourse Relations},
  year      = {2020},
  month     = {Apr},
  abstract  = {Presentation of the dissent paper at the PhD students INRIA working group.},
  address   = {Paris, France},
  venue     = {Working Group, INRIA},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/INRIA\\_23\\_04\\_2020\\_Dissent.pdf}
}

@misc{Simoulin19A,
  author    = {Antoine Simoulin},
  title     = {Implementing And Deploying Natural Language Processing Projects},
  year      = {2019},
  month     = {Dec},
  abstract  = {Around 800 professionals in the field of data science attended the presentation. We presented the project of emails classification at MAIF and the challenges to deploy a project in production.},
  address   = {France},
  venue     = {AI Paris},
  url       = {https://www.bigdataparis.com/}
}

@misc{Simoulin19,
  author    = {Antoine Simoulin},
  title     = {Melusine Open-Source Release},
  year      = {2019},
  month     = {Dec},
  abstract  = {Open Source Release Of Melusine, A Library For Emails Processing. Around 80 Professionals In The Field Of Data Science Attended The Presentation.},
  address   = {France},
  venue     = {BigData Paris},
  url       = {https://www.bigdataparis.com/}
}

@misc{Simoulin19,
  author    = {Antoine Simoulin},
  title     = {Senometry Project: Analysis Of Textual Medical Records For Structured Data Extraction},
  year      = {2018},
  month     = {May},
  abstract  = {Presentation to around 40 professionals in the field of data science. The research project consists in using NLP methods to automatically analyze data from medical records.},
  address   = {France},
  venue     = {NLP Meetup},
  url       = {https://www.meetup.com/fr-FR/Paris-NLP/events/vzdvxlywhbgc/}
}`,re={components:{Citation:v,Talk:w},data(){return{activeTab:"publications"}},computed:{bibEntries(){return _(ie).entries.reduce((e,n)=>{const r=n.fields.year;return e[r]=e[r]??[],e[r].push(n),e},{})},talksEntries(){return _(oe).entries.reduce((e,n)=>{const r=n.fields.year;return e[r]=e[r]??[],e[r].push(n),e},{})}},methods:{setActiveTab(a){this.activeTab=a}}},se={class:"pb-0 lg:py-6"},le={class:"w-full"},de={class:"bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-2xl overflow-hidden"},ce={role:"tablist",class:"flex flex-wrap gap-2 bg-yellow-100 p-4 border-b-2 border-black"},ue={class:"p-6 bg-white min-h-[400px]"},be={class:"inline-block bg-blue-300 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[2px_2px_0px_#000] mb-4 -rotate-1"},pe={class:"inline-block bg-pink-300 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[2px_2px_0px_#000] mb-4 rotate-1"};function he(a,e,n,r,u,l){const f=v,d=w;return o(),i("section",se,[t("div",null,[t("div",le,[t("div",de,[t("div",ce,[t("button",{role:"tab",class:m(["px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer",u.activeTab==="publications"?"bg-yellow-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5":"bg-white hover:bg-yellow-200 shadow-[1px_1px_0px_#000]"]),onClick:e[0]||(e[0]=s=>l.setActiveTab("publications"))}," 📄 Publications ",2),t("button",{role:"tab",class:m(["px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer",u.activeTab==="talks"?"bg-pink-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5":"bg-white hover:bg-pink-200 shadow-[1px_1px_0px_#000]"]),onClick:e[1]||(e[1]=s=>l.setActiveTab("talks"))}," 🎤 Talks & Presentations ",2),t("button",{role:"tab",class:m(["px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer",u.activeTab==="awards"?"bg-purple-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5":"bg-white hover:bg-purple-200 shadow-[1px_1px_0px_#000]"]),onClick:e[2]||(e[2]=s=>l.setActiveTab("awards"))}," 🏆 Awards & Services ",2)]),t("div",ue,[t("div",{class:m(u.activeTab==="publications"?"":"hidden")},[(o(!0),i(x,null,g(Object.keys(l.bibEntries).reverse(),s=>(o(),i("div",{class:"mb-8",key:s},[t("div",be,p(s),1),(o(!0),i(x,null,g(l.bibEntries[s],h=>(o(),i("div",{class:"text-sm text-black mb-4",key:h.key},[y(f,{citation:h},null,8,["citation"])]))),128))]))),128))],2),t("div",{class:m(u.activeTab==="talks"?"":"hidden")},[(o(!0),i(x,null,g(Object.keys(l.talksEntries).reverse(),s=>(o(),i("div",{class:"mb-8",key:s},[t("div",pe,p(s),1),(o(!0),i(x,null,g(l.talksEntries[s],h=>(o(),i("div",{class:"text-sm text-black mb-4",key:h.key},[y(d,{citation:h},null,8,["citation"])]))),128))]))),128))],2),t("div",{class:m(u.activeTab==="awards"?"space-y-6":"hidden space-y-6")},[...e[3]||(e[3]=[C('<div class="p-6 bg-emerald-50 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]"><h3 class="text-xl font-black text-black mb-4 flex items-center gap-2"> 🎓 Academic Reviewing Services </h3><div class="flex flex-wrap gap-2.5"><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=thecvf.com/ECCV/2026/Conference" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> ECCV 2026 </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=NeurIPS.cc/2025/Conference#tab-your-consoles" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> NeurIPS 2025 </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/2025/SRW" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> ACL-SRW 2025 </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/June" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> EMNLP 2024 (ACL ARR) </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=ICML.cc/2024/Workshop/ES-FoMo-II" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> ES-FOMO-II 2024 </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/February" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> ACL 2024 (ACL ARR) </a><a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=NeurIPS.cc/2023/Track/Datasets_and_Benchmarks" target="_blank"><span class="font-black text-emerald-700">Reviewer:</span> NeurIPS 2023 Datasets </a><span class="inline-flex items-center gap-1.5 bg-white text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3.5 py-2 rounded-xl text-sm font-bold"><span class="font-black text-emerald-700">Reviewer:</span> ACL 2020 &amp; EMNLP 2020 </span></div></div><div class="p-6 bg-yellow-100 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]"><h3 class="text-xl font-black text-black mb-4 flex items-center gap-2"> 🏆 Hackathon Awards </h3><div class="space-y-3"><div class="p-4 bg-white border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000]"><div class="font-black text-black text-base mb-1"> PyTree: PyTorch Package for Recursive Neural Networks </div><p class="text-sm font-medium text-black/80 mb-2"> PyTree implements tree-structured neural networks in PyTorch with generic implementations and efficient batching methods. </p><a class="inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-3 py-1 rounded-lg font-bold text-xs no-underline transition-all" href="https://devpost.com/software/pytree" target="_blank"> 🏆 Winner — PyTorch Annual Hackathon 2021 </a></div><div class="p-4 bg-white border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000]"><div class="font-black text-black text-base mb-1"> 1B Sentence Pair Embedding Model </div><p class="text-sm font-medium text-black/80 mb-2"> Train the Best Sentence Embedding Model Ever with 1B Training Pairs during Hugging Face Community Week (JAX/Flax). </p><a class="inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-3 py-1 rounded-lg font-bold text-xs no-underline transition-all" href="https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354" target="_blank"> 🏆 Winner — Hugging Face Community Week 2021 </a></div></div></div>',2)])],2)])])])])])}const xe=k(re,[["render",he]]);export{xe as default};
