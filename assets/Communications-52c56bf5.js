import{_ as b,o as a,c as o,a as n,t as r,g as h,F as d,h as s,i as w,r as f,e as p,b as y,p as S,d as C}from"./index-d3942a41.js";const k={props:["citation"],methods:{concatFirstAndLastName(e){let t=[];for(let i of e)t.push(i.firstName+" "+i.lastName);return t},getAuthorsList(e){e=this.concatFirstAndLastName(e);let t="";e[0]=="Antoine Simoulin"?(t+="<strong>",t+=e[0],t+="</strong>"):t+=e[0];for(let i=1;i<e.length-1;i++)t+=", ",e[i]=="Antoine Simoulin"?(t+="<strong>",t+=e[i],t+="</strong>"):t+=e[i];return e.length>1&&(t+='<span class="text-lowercase"> and </span>',e[e.length-1]=="Antoine Simoulin"?(t+="<strong>",t+=e[e.length-1],t+="</strong>"):t+=e[e.length-1]),t}}},L=["href"],P=["href"],N=n("i",{class:"fas fa-file-alt text-primary ms-2","aria-hidden":"true"},null,-1),M=[N],x=["href"],R=n("i",{class:"fa-brands fa-youtube text-danger ms-2","aria-hidden":"true"},null,-1),T=[R],D=["href"],B=n("i",{class:"fa-brands fa-github text-dark ms-2","aria-hidden":"true"},null,-1),F=[B],I={key:3,class:"fa-solid fa-star text-warning mx-1","aria-hidden":"true"},$=["innerHTML"];function E(e,t,i,c,l,g){return a(),o(d,null,[n("a",{href:this.citation.fields.url,class:"text-decoration-none",target:"_blank"},r(this.citation.fields.title[0]),9,L),"pdf"in this.citation.fields?(a(),o("a",{key:0,href:this.citation.fields.pdf,class:"text-decoration-none",target:"_blank"},M,8,P)):h("",!0),"youtube"in this.citation.fields?(a(),o("a",{key:1,href:this.citation.fields.youtube,class:"text-decoration-none",target:"_blank"},T,8,x)):h("",!0),"github"in this.citation.fields?(a(),o("a",{key:2,href:this.citation.fields.github,class:"text-decoration-none",target:"_blank"},F,8,D)):h("",!0),"award"in this.citation.fields?(a(),o("i",I,"Best Paper Award")):h("",!0),n("div",{innerHTML:this.getAuthorsList(this.citation.creators.author)},null,8,$),n("div",null,r("booktitle"in this.citation.fields?this.citation.fields.booktitle[0].split(",").length>=4?`${this.citation.fields.booktitle[0].split(",")[1]}${`${this.citation.fields.booktitle[0].toLowerCase().includes("student")?" (Student)":""}`}`:`${this.citation.fields.booktitle[0]}, ${this.citation.fields.year[0]}`:"journal"in this.citation.fields?`${this.citation.fields.journal[0]}, ${this.citation.fields.year[0]}`:this.citation.type=="phdthesis"?`PhD Thesis, ${this.citation.fields.school[0]}, ${this.citation.fields.year[0]}`:`Undefined, ${this.citation.fields.year[0]}`),1)],64)}const J=b(k,[["render",E]]),j={props:["citation"]},G=["href"],H=["href"],O=n("i",{class:"fas fa-file-alt text-primary ms-1","aria-hidden":"true"},null,-1),U=[O];function X(e,t,i,c,l,g){return a(),o(d,null,[n("a",{href:this.citation.fields.url[0],class:"text-decoration-none text-capitalize"},r(this.citation.fields.title[0]),9,G),s(" ("+r(this.citation.fields.month[0])+". "+r(this.citation.fields.year[0])+") ",1),"slides"in this.citation.fields?(a(),o("a",{key:0,href:this.citation.fields.slides,class:"text-decoration-none",target:"_blank"},U,8,H)):h("",!0),n("div",null,[n("strong",null,r(this.citation.fields.venue[0])+", "+r(this.citation.fields.address[0]),1)]),n("div",null,r(this.citation.fields.abstract[0]),1)],64)}const Y=b(j,[["render",X]]),z=`@article{DBLP:journals/corr/abs-2504-08725,
  author       = {Dayu Yang and
                  Antoine Simoulin and
                  Xin Qian and
                  Xiaoyi Liu and
                  Yuwei Cao and
                  Zhaopu Teng and
                  Grey Yang},
  title        = {DocAgent: {A} Multi-Agent System for Automated Code Documentation
                  Generation},
  journal      = {CoRR},
  volume       = {abs/2504.08725},
  year         = {2025},
  url          = {https://doi.org/10.48550/arXiv.2504.08725},
  doi          = {10.48550/ARXIV.2504.08725},
  eprinttype    = {arXiv},
  eprint       = {2504.08725},
  pdf = {https://arxiv.org/pdf/2504.08725},
  github = {https://github.com/facebookresearch/DocAgent}
}

@article{DBLP:journals/corr/abs-2502-19411,
  author       = {Dayu Yang and
                  Tianyang Liu and
                  Daoan Zhang and
                  Antoine Simoulin and
                  Xiaoyi Liu and
                  Yuwei Cao and
                  Zhaopu Teng and
                  Xin Qian and
                  Grey Yang and
                  Jiebo Luo and
                  Julian J. McAuley},
  title        = {Code to Think, Think to Code: {A} Survey on Code-Enhanced Reasoning
                  and Reasoning-Driven Code Intelligence in LLMs},
  journal      = {CoRR},
  volume       = {abs/2502.19411},
  year         = {2025},
  url          = {https://doi.org/10.48550/arXiv.2502.19411},
  doi          = {10.48550/ARXIV.2502.19411},
  eprinttype    = {arXiv},
  eprint       = {2502.19411},
  pdf = {https://arxiv.org/pdf/2502.19411}
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
  award     = {},
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
}`,W=`% String.raw\`\`
@misc{Simoulin23,
  author    = {Antoine Simoulin},
  title     = {Enhancing compositional properties of neural networks by incorporating linguistic insights into their structures},
  year      = {2023},
  month     = {Jan}
  abstract  = {Presentation at the university resesarch colloquium about my PhD research. Around 25 researchers attended the presentation.}
  address   = {Heinrich Heine Universit\\"{a}t, D\\"{u}sseldorf, Deutschland},
  venue     = {University resesarch colloquium},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/Research%20Colloquium%20of%20my%20University%20in%20Du%CC%88sseldorf.pdf}
}

@misc{Simoulin22A,
  author    = {Antoine Simoulin},
  title     = {From Text To Image, Multimodality In Deep Learning},
  year      = {2022},
  month     = {Nov}
  abstract  = {This presentation focused on the emergence of large unified models processing simultaneously multiple modalities such as text, images, video, and speech.}
  address   = {Boston, US},
  venue     = {Quantumblack DS Coffee},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/presentation-mck.pdf}
}

@misc{Simoulin22B,
  author    = {Antoine Simoulin},
  title     = {Sentence embeddings and their relation with sentence structures},
  year      = {2022},
  month     = {Juil}
  abstract  = {PhD Defense.}
  address   = {Paris, France},
  venue     = {Universit{\\'{e}} Paris Cit{\\'{e}}},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/soutenance\\_these\\_v5.pdf}
}

@misc{Simoulin21,
  author    = {Antoine Simoulin},
  title     = {Pre-Trained Neural Networks For Text Generation And Their Implications},
  year      = {2021},
  month     = {Apr}
  abstract  = {Around 30 students and professionals in the field of data science attended the talk. I presented my paper about the first large pre-trained generative model in French.}
  address   = {Nantes, France},
  venue     = {Machine Learning Meetup, Epitech engineering school},
  url       = {https://simoulin.io/communications.html},
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/Meetup\\_Nantes.pdf}
}

@misc{Simoulin20,
  author    = {Antoine Simoulin},
  title     = {DisSent: Learning Sentence Representations From Explicit Discourse Relations},
  year      = {2020},
  month     = {Apr}
  abstract  = {Presentation of the dissent paper at the PhD students INRIA working group.}
  address   = {Paris, France},
  venue     = {Working Group, INRIA},
  url       = {hhttps://simoulin.io/communications.html}
  slides    = {https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/INRIA\\_23\\_04\\_2020\\_Dissent.pdf}
}

@misc{Simoulin19A,
  author    = {Antoine Simoulin},
  title     = {Implementing And Deploying Natural Language Processing Projects},
  year      = {2019},
  month     = {Dec}
  abstract  = {Around 800 professionals in the field of data science attended the presentation. We presented the project of emails classification at MAIF and the challenges to deploy a project in production.}
  address   = {France},
  venue     = {AI Paris},
  url       = {https://www.bigdataparis.com/}
}

@misc{Simoulin19,
  author    = {Antoine Simoulin},
  title     = {Melusine Open-Source Release},
  year      = {2019},
  month     = {Dec}
  abstract  = {Open Source Release Of Melusine, A Library For Emails Processing. Around 80 Professionals In The Field Of Data Science Attended The Presentation.}
  address   = {France},
  venue     = {BigData Paris},
  url       = {https://www.bigdataparis.com/}
}

@misc{Simoulin19,
  author    = {Antoine Simoulin},
  title     = {Senometry Project: Analysis Of Textual Medical Records For Structured Data Extraction},
  year      = {2018},
  month     = {May}
  abstract  = {Presentation to around 40 professionals in the field of data science. The research project consists in using NLP methods to automatically analyze data from medical records.}
  address   = {France},
  venue     = {NLP Meetup},
  url       = {https://www.meetup.com/fr-FR/Paris-NLP/events/vzdvxlywhbgc/}
}`,V={components:{Citation:J,Talk:Y},data(){return{bib:z,talks:W}},methods:{getBibEntries(e){return w.parse(e)},groupByYear(e){return e.entries.reduce((i,c)=>{const l=c.fields.year[0];return i[l]=i[l]??[],i[l].push(c),i},{})},citeBibEntry(){}},beforeMount(){this.bib=this.getBibEntries(this.bib),this.bib=this.groupByYear(this.bib),this.talks=this.getBibEntries(this.talks),this.talks=this.groupByYear(this.talks)}},A=e=>(S("data-v-30cec80b"),e=e(),C(),e),q={class:"pb-0 py-lg-5"},K={class:"container"},Q={class:"row"},Z={class:"col-lg-12"},nn={class:"card shadow-sm border-0 rounded-2 p-0"},en=A(()=>n("div",{class:"card-header px-4 py-3 bg-white"},[n("ul",{class:"nav nav-pills nav-tabs-line py-0",id:"course-pills-tab",role:"tablist"},[n("li",{class:"nav-item me-2 me-sm-4",role:"presentation"},[n("button",{class:"nav-link mb-2 mb-md-0 active",id:"course-pills-tab-1","data-bs-toggle":"pill","data-bs-target":"#course-pills-1",type:"button",role:"tab","aria-controls":"course-pills-1","aria-selected":"true"}," Publications ")]),n("li",{class:"nav-item me-2 me-sm-4",role:"presentation"},[n("button",{class:"nav-link mb-2 mb-md-0",id:"course-pills-tab-2","data-bs-toggle":"pill","data-bs-target":"#course-pills-2",type:"button",role:"tab","aria-controls":"course-pills-2","aria-selected":"false"}," Talks and Presentations ")]),n("li",{class:"nav-item me-2 me-sm-4",role:"presentation"},[n("button",{class:"nav-link mb-2 mb-md-0",id:"course-pills-tab-3","data-bs-toggle":"pill","data-bs-target":"#course-pills-3",type:"button",role:"tab","aria-controls":"course-pills-3","aria-selected":"false"}," Awards and Services ")])])],-1)),tn={class:"card-body p-4 bg-white"},an={class:"tab-content pt-2",id:"course-pills-tabContent"},on={class:"tab-pane fade show active",id:"course-pills-1",role:"tabpanel","aria-labelledby":"course-pills-tab-1"},sn={class:"mb-3"},rn={class:"mb-3"},ln={class:"text-sm font-weight-bold text-capitalize mb-4"},dn={class:"tab-pane fade",id:"course-pills-2",role:"tabpanel","aria-labelledby":"course-pills-tab-2"},cn={class:"mb-3"},un={class:"mb-3"},hn={class:"text-sm font-weight-bold text-capitalize mb-4"},pn=A(()=>n("div",{class:"tab-pane fade",id:"course-pills-3",role:"tabpanel","aria-labelledby":"course-pills-tab-3"},[n("ul",null,[n("li",null,[s("Reviewer ACL-SRW 2025 ("),n("a",{class:"text-decoration-none text-capitalize",href:"https://openreview.net/group?id=aclweb.org/ACL/2025/SRW"},"ACL-SRW 2025"),s(");")]),n("li",null,[s("Reviewer EMNLP 2024 ("),n("a",{class:"text-decoration-none text-capitalize",href:"https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/June"},"ACL June 2024 ARR"),s(");")]),n("li",null,[s("Reviewer "),n("a",{class:"text-decoration-none text-capitalize",href:"https://openreview.net/group?id=ICML.cc/2024/Workshop/ES-FoMo-II"},"ES-FOMO-II 2024"),s(";")]),n("li",null,[s("Reviewer ACL 2024 ("),n("a",{class:"text-decoration-none text-capitalize",href:"https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/February"},"ACL February 2024 ARR"),s(");")]),n("li",null,[s("Reviewer "),n("a",{class:"text-decoration-none text-capitalize",href:"https://openreview.net/group?id=NeurIPS.cc/2023/Track/Datasets_and_Benchmarks"},"Neurips Datasets and Benchmarks 2023"),s(";")]),n("li",null,"Reviewer ACL 2020;"),n("li",null,"Reviewer EMNLP 2020;"),n("li",null,[s(" Hackathon Winner. PyTree, a PyTorch package for recursive neural networks. "),n("a",{class:"text-decoration-none text-capitalize",href:"https://devpost.com/software/pytree"},"PyTorch Annual Hackathon 2021")]),n("li",null,[s(" Hackathon Winner. Train the Best Sentence Embedding Model Ever with 1B Training Pairs. "),n("a",{class:"text-decoration-none text-capitalize",href:"https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354"},"Hugging Face Community week using JAX/Flax for NLP & CV 2021")])])],-1));function mn(e,t,i,c,l,g){const v=f("Citation"),_=f("Talk");return a(),o("section",q,[n("div",K,[n("div",Q,[n("div",Z,[n("div",nn,[en,n("div",tn,[n("div",an,[n("div",on,[(a(!0),o(d,null,p(Object.keys(this.bib).reverse(),u=>(a(),o("div",sn,[n("h5",rn,r(u),1),(a(!0),o(d,null,p(this.bib[u],m=>(a(),o("div",ln,[y(v,{citation:m},null,8,["citation"])]))),256))]))),256))]),n("div",dn,[(a(!0),o(d,null,p(Object.keys(this.talks).reverse(),u=>(a(),o("div",cn,[n("h5",un,r(u),1),(a(!0),o(d,null,p(this.talks[u],m=>(a(),o("div",hn,[y(_,{citation:m},null,8,["citation"])]))),256))]))),256))]),pn])])])])])])])}const gn=b(V,[["render",mn],["__scopeId","data-v-30cec80b"]]);export{gn as default};
