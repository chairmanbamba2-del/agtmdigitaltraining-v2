/* modules-agtm-c2.js — AGTM Academy C2 Modules v1.0
 * 18 modules complets C2 avec contenu riche et quiz (10 questions chacun)
 * Niveau maîtrise : grammaire stylistique, vocabulaire littéraire, compétences expertes
 */
;(function () {
'use strict'

window._AGTM_C2_MODS = [
  // ── GRAMMAIRE C2 ──────────────────────────────────────────────────

  {
    id:'gram_c2_m1',
    titre:'Structures Cleft et Focalisation Avancée',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Maîtriser toutes les formes de phrases clivées (cleft sentences)",
      "Utiliser la focalisation pour l'emphase stylistique",
      "Employer les structures pseudo-clivées et les variantes avancées"
    ],
    contenu:[
      {type:'intro',texte:"Les structures cleft (clivées) permettent de focaliser l'attention sur un élément spécifique de la phrase. Au niveau C2, on utilise des formes sophistiquées pour l'emphase rhétorique et stylistique."},
      {type:'tableau',titre:'Types de structures cleft',headers:["Type","Structure","Exemple"],rows:[
        ["It-cleft","It + be + X + that/who/which...","It was courage that won the battle."],
        ["Wh-cleft (basic)","What + clause + be + X","What I need is more time."],
        ["Wh-cleft (reversed)","X + be + what + clause","More time is what I need."],
        ["All-cleft","All + clause + be + to-inf/noun","All I want is to succeed."],
        ["The thing cleft","The thing (that) + clause + be + X","The thing that surprised me was her calm."],
        ["The reason cleft","The reason (why) + clause + be + X","The reason why he left was unclear."],
        ["The place cleft","The place (where) + clause + be + X","The place where it happened is unknown."]
      ]},
      {type:'regle',titre:'Nuances et subtilités C2',texte:"• It-cleft : met l'emphase sur le sujet, l'objet ou le complément\n  It was JOHN who called. (sujet) vs. It was JOHN that I called. (objet)\n• Wh-cleft inversé : plus formel et littéraire\n  A complete overhaul is what the system requires.\n• 'All' cleft avec 'to-infinitif' : exprime un désir ou une nécessité unique\n  All you need to do is ask.\n• 'The thing/reason/place' cleft : plus spécifique que 'what'\n  The reason why she resigned remains a mystery."},
      {type:'exemples',titre:'Exemples en contexte littéraire/académique',items:[
        {en:"It was not the lack of resources that doomed the project, but rather the absence of leadership.",fr:"Ce n'était pas le manque de ressources qui a condamné le projet, mais plutôt l'absence de leadership."},
        {en:"What the data reveals, perhaps more than anything else, is the complexity of human behavior.",fr:"Ce que les données révèlent, peut-être plus que toute autre chose, c'est la complexité du comportement humain."},
        {en:"A fundamental shift in perspective is what the field desperately needs.",fr:"Un changement fondamental de perspective est ce dont le domaine a désespérément besoin."},
        {en:"The reason why traditional models fail is that they assume rational actors.",fr:"La raison pour laquelle les modèles traditionnels échouent est qu'ils supposent des acteurs rationnels."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les structures cleft sont des outils rhétoriques puissants. Utilisez-les pour créer de l'emphase dans les essais et les discours, mais avec parcimonie."}
    ],
    quiz:[
      {q:"'It was courage that won the battle' is an:",opts:["A) wh-cleft","B) it-cleft","C) all-cleft","D) inversion"],rep:'B',expl:"It + be + X + that = it-cleft."},
      {q:"'What I need is more time' is a:",opts:["A) it-cleft","B) wh-cleft","C) all-cleft","D) inversion"],rep:'B',expl:"What + clause + be + X = wh-cleft."},
      {q:"'All I want is to succeed' is an:",opts:["A) it-cleft","B) wh-cleft","C) all-cleft","D) inversion"],rep:'C',expl:"All + clause + be + to-inf = all-cleft."},
      {q:"'The reason why he left was unclear' is a:",opts:["A) it-cleft","B) wh-cleft","C) reason cleft","D) inversion"],rep:'C',expl:"The reason why + clause = reason cleft."},
      {q:"In 'It was JOHN who called', the emphasis is on:",opts:["A) the action","B) the person (John)","C) the time","D) the place"],rep:'B',expl:"It-cleft met l'emphase sur l'élément après 'be'."},
      {q:"'A complete overhaul is what the system requires' is:",opts:["A) basic wh-cleft","B) reversed wh-cleft","C) it-cleft","D) all-cleft"],rep:'B',expl:"X + be + what + clause = wh-cleft inversé."},
      {q:"'The thing that surprised me was her calm' emphasizes:",opts:["A) the thing","B) what surprised (her calm)","C) the time","D) the place"],rep:'B',expl:"The thing cleft = ce qui a surpris."},
      {q:"Cleft sentences are used primarily for:",opts:["A) simplicity","B) emphasis/focus","C) confusion","D) brevity"],rep:'B',expl:"Cleft = emphase/focalisation."},
      {q:"'All you need to do is ask' uses:",opts:["A) it-cleft","B) wh-cleft","C) all-cleft with to-infinitive","D) inversion"],rep:'C',expl:"All + clause + be + to-inf = all-cleft."},
      {q:"'It was not X but Y that...' is used to:",opts:["A) agree","B) contrast two possibilities","C) conclude","D) question"],rep:'B',expl:"Contraste entre deux possibilités."}
    ]
  },

  {
    id:'gram_c2_m2',
    titre:'Ellipsis et Substitution Avancées',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser l'ellipsis (omission) dans les contextes formels",
      "Utiliser la substitution pour éviter la répétition",
      "Employer les structures ellipitiques dans l'écriture académique"
    ],
    contenu:[
      {type:'intro',texte:"L'ellipsis est l'omission d'éléments sous-entendus. Au niveau C2, on utilise l'ellipsis de manière sophistiquée pour créer des phrases plus élégantes et concises."},
      {type:'tableau',titre:'Types d\'ellipsis',headers:["Type","Exemple complet","Forme ellipitique"],rows:[
        ["Verb phrase","She can swim, and I can swim too.","She can swim, and I can too."],
        ["Gapping","John bought a book, and Mary bought a magazine.","John bought a book, and Mary, a magazine."],
        ["Stripping","I love coffee, and Mary loves coffee too.","I love coffee, and Mary too."],
        ["Sluicing","Someone called, but I don't know who called.","Someone called, but I don't know who."],
        ["Comparative","She runs faster than he runs.","She runs faster than he."],
        ["After auxiliary","Have you finished? Yes, I have finished.","Have you finished? Yes, I have."],
        ["After modal","She will come, and he will come too.","She will come, and he will too."]
      ]},
      {type:'regle',titre:'Règles C2',texte:"• Gapping : on omet le verbe dans la seconde clause (formel/littéraire)\n  Some chose to stay; others, to leave.\n• Sluicing : on omet tout sauf le mot interrogatif\n  She said something, but I couldn't hear what.\n• Stripping : on ne garde qu'un élément dans la seconde clause\n  I love this movie, and you too.\n• L'ellipsis comparative peut être ambiguë :\n  She loves him more than I. (more than I love him)\n  She loves him more than me. (more than she loves me)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Some chose to stay; others, to leave.",fr:"Certains ont choisi de rester ; d'autres, de partir."},
        {en:"She has already completed the assignment, and he will soon.",fr:"Elle a déjà terminé le travail, et il le fera bientôt."},
        {en:"I don't know who said it, but someone did.",fr:"Je ne sais pas qui l'a dit, mais quelqu'un l'a fait."},
        {en:"The results were more significant than we had anticipated.",fr:"Les résultats étaient plus significatifs que nous l'avions anticipé."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : L'ellipsis est un marqueur de style C2. Utilisez-la pour rendre votre écriture plus élégante, mais assurez-vous que le sens reste clair."}
    ],
    quiz:[
      {q:"'She can swim, and I can too' uses:",opts:["A) gapping","B) verb phrase ellipsis","C) sluicing","D) stripping"],rep:'B',expl:"Omission du verbe phrase = verb phrase ellipsis."},
      {q:"'John bought a book, and Mary, a magazine' uses:",opts:["A) gapping","B) sluicing","C) stripping","D) ellipsis comparative"],rep:'A',expl:"Gapping = omission du verbe dans la seconde clause."},
      {q:"'I don't know who' (after 'Someone called') uses:",opts:["A) gapping","B) sluicing","C) stripping","D) verb phrase ellipsis"],rep:'B',expl:"Sluicing = tout sauf le mot interrogatif."},
      {q:"'I love this movie, and you too' uses:",opts:["A) gapping","B) sluicing","C) stripping","D) verb phrase ellipsis"],rep:'C',expl:"Stripping = un seul élément conservé."},
      {q:"'She runs faster than he' is:",opts:["A) ambiguous","B) comparative ellipsis","C) incorrect","D) gapping"],rep:'B',expl:"Ellipsis comparative."},
      {q:"'Some chose to stay; others, to leave' uses:",opts:["A) gapping","B) sluicing","C) stripping","D) verb phrase ellipsis"],rep:'A',expl:"Gapping = verbe omis dans la seconde clause."},
      {q:"'Have you finished? Yes, I have' uses:",opts:["A) gapping","B) ellipsis after auxiliary","C) sluicing","D) stripping"],rep:'B',expl:"Ellipsis après auxiliaire."},
      {q:"Ellipsis makes writing more:",opts:["A) verbose","B) concise","C) confusing","D) repetitive"],rep:'B',expl:"Ellipsis = concision."},
      {q:"'She will come, and he will too' omits:",opts:["A) the subject","B) the verb 'come'","C) the modal","D) the object"],rep:'B',expl:"Omission de 'come' après le modal."},
      {q:"In formal writing, ellipsis should be:",opts:["A) avoided","B) used carefully for clarity","C) overused","D) random"],rep:'B',expl:"Utilisée avec soin pour la clarté."}
    ]
  },

  {
    id:'gram_c2_m3',
    titre:'Noms Composés et Structures Nominales Complexes',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser la formation des noms composés en anglais",
      "Utiliser les chaînes nominales (noun strings) dans l'écriture académique",
      "Comprendre les conventions de pluriel dans les noms composés"
    ],
    contenu:[
      {type:'intro',texte:"Les noms composés et les chaînes nominales sont omniprésents dans l'anglais académique et professionnel. Leur maîtrise est essentielle pour le niveau C2."},
      {type:'tableau',titre:'Types de noms composés',headers:["Type","Structure","Exemple"],rows:[
        ["Noun + noun","N + N","toothpaste, classroom, bookstore"],
        ["Adjective + noun","Adj + N","blackboard, greenhouse, software"],
        ["Verb + noun","V + N","breakfast, pickpocket, cutthroat"],
        ["Noun + verb","N + V","sunrise, rainfall, heartbeat"],
        ["Gerund + noun","-ing + N","swimming pool, reading room, washing machine"],
        ["Noun + gerund","N + -ing","birdwatching, sunbathing, shoplifting"],
        ["Prepositional","N + prep + N","mother-in-law, passer-by, hanger-on"]
      ]},
      {type:'tableau',titre:'Chaînes nominales (Noun strings)',headers:["Chaîne","Sens","Analyse"],rows:[
        ["climate change impact assessment","évaluation de l'impact du changement climatique","assessment of impact of climate change"],
        ["employee satisfaction survey","enquête sur la satisfaction des employés","survey of employee satisfaction"],
        ["government policy reform proposal","proposition de réforme de la politique gouvernementale","proposal for reform of government policy"],
        ["artificial intelligence research center","centre de recherche en intelligence artificielle","research center for artificial intelligence"]
      ]},
      {type:'regle',titre:'Pluriel des noms composés',texte:"• Le pluriel se forme généralement sur le NOYAU (head noun) :\n  mothers-in-law ✓ (pas mother-in-laws)\n  passers-by ✓ (pas passer-bys)\n  editors-in-chief ✓\n• Pour les noms composés fermés (un seul mot) : pluriel régulier\n  toothpaste → toothpastes\n  greenhouse → greenhouses\n• Pour les chaînes nominales : seul le dernier nom prend le pluriel\n  climate change impact assessments ✓"},
      {type:'exemples',titre:'Exemples en contexte académique',items:[
        {en:"The employee satisfaction survey revealed significant concerns about work-life balance.",fr:"L'enquête sur la satisfaction des employés a révélé des préoccupations significatives concernant l'équilibre travail-vie personnelle."},
        {en:"The government policy reform proposal was met with mixed reactions.",fr:"La proposition de réforme de la politique gouvernementale a reçu des réactions mitigées."},
        {en:"Several editors-in-chief attended the conference.",fr:"Plusieurs rédacteurs en chef ont assisté à la conférence."},
        {en:"The artificial intelligence research center published groundbreaking findings.",fr:"Le centre de recherche en intelligence artificielle a publié des résultats révolutionnaires."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les chaînes nominales sont courantes dans l'écriture académique. Décomposez-les de droite à gauche pour comprendre le sens."}
    ],
    quiz:[
      {q:"The plural of 'mother-in-law' is:",opts:["A) mother-in-laws","B) mothers-in-law","C) mothers-in-laws","D) mother-in-law"],rep:'B',expl:"Pluriel sur le noyau : mothers-in-law."},
      {q:"'Climate change impact assessment' means:",opts:["A) assessment that changes climate impact","B) assessment of the impact of climate change","C) climate that changes impact","D) impact that assesses climate"],rep:'B',expl:"Décomposer de droite à gauche."},
      {q:"The plural of 'passer-by' is:",opts:["A) passer-bys","B) passers-by","C) passers-bys","D) passer-by"],rep:'B',expl:"Pluriel sur le noyau : passers-by."},
      {q:"'Employee satisfaction survey' means:",opts:["A) survey that satisfies employees","B) survey of employee satisfaction","C) employee who surveys satisfaction","D) satisfaction that surveys employees"],rep:'B',expl:"Survey of employee satisfaction."},
      {q:"In noun strings, the plural goes on:",opts:["A) the first noun","B) the last noun","C) all nouns","D) no noun"],rep:'B',expl:"Seul le dernier nom prend le pluriel."},
      {q:"'Breakfast' is a compound of:",opts:["A) noun + noun","B) verb + noun","C) adjective + noun","D) noun + verb"],rep:'B',expl:"Break (verb) + fast (noun)."},
      {q:"'Swimming pool' is a compound of:",opts:["A) noun + noun","B) gerund + noun","C) verb + noun","D) adjective + noun"],rep:'B',expl:"Swimming (gerund) + pool (noun)."},
      {q:"The plural of 'editor-in-chief' is:",opts:["A) editor-in-chiefs","B) editors-in-chief","C) editors-in-chiefs","D) editor-in-chief"],rep:'B',expl:"Pluriel sur le noyau : editors-in-chief."},
      {q:"'Birdwatching' is a compound of:",opts:["A) noun + noun","B) noun + gerund","C) verb + noun","D) gerund + noun"],rep:'B',expl:"Bird (noun) + watching (gerund)."},
      {q:"Noun strings are common in:",opts:["A) casual speech","B) academic/professional writing","C) poetry","D) songs"],rep:'B',expl:"Courantes dans l'écriture académique/professionnelle."}
    ]
  },

  {
    id:'gram_c2_m4',
    titre:'Prépositions Avancées et Collocations',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser les prépositions dans les contextes idiomatiques",
      "Utiliser les collocations verbales et adjectivales",
      "Comprendre les nuances de sens selon la préposition"
    ],
    contenu:[
      {type:'intro',texte:"Les prépositions et les collocations sont parmi les aspects les plus difficiles de l'anglais avancé. Une maîtrise C2 exige une connaissance précise des combinaisons naturelles."},
      {type:'tableau',titre:'Collocations verbales clés',headers:["Verbe + Préposition","Sens","Exemple"],rows:[
        ["abide by","respecter","Citizens must abide by the law."],
        ["acquiesce in","accepter passivement","She acquiesced in the decision."],
        ["adhere to","adhérer à","We must adhere to the guidelines."],
        ["allude to","faire allusion à","He alluded to the scandal without naming names."],
        ["amount to","équivaloir à","The evidence amounts to proof."],
        ["aspire to","aspirer à","She aspires to become a scientist."],
        ["attribute to","attribuer à","He attributed his success to hard work."],
        ["comply with","se conformer à","Companies must comply with regulations."],
        ["contend with","faire face à","We must contend with limited resources."],
        ["deviate from","s'écarter de","The results deviate from the expected pattern."]
      ]},
      {type:'tableau',titre:'Collocations adjectivales',headers:["Adjectif + Préposition","Sens","Exemple"],rows:[
        ["akin to","similaire à","His approach is akin to meditation."],
        ["amenable to","ouvert à","She is amenable to suggestions."],
        ["antithetical to","contraire à","Violence is antithetical to our values."],
        ["conducive to","favorable à","A quiet environment is conducive to study."],
        ["congruent with","cohérent avec","The findings are congruent with previous research."],
        ["devoid of","dépourvu de","The argument is devoid of merit."],
        ["implicit in","implicite dans","The assumption is implicit in the theory."],
        ["inherent in","inhérent à","Risk is inherent in any investment."],
        ["tantamount to","équivalent à","His silence was tantamount to admission."],
        ["unprecedented in","sans précédent dans","This discovery is unprecedented in the field."]
      ]},
      {type:'regle',titre:'Nuances selon la préposition',texte:"• differ FROM (être différent de) vs. differ IN (différer dans un aspect)\n  They differ from each other. / They differ in size.\n• agree WITH (une personne) vs. agree TO (un plan) vs. agree ON (un sujet)\n  I agree with you. / I agree to the terms. / We agree on the price.\n• angry WITH (une personne) vs. angry ABOUT/AT (une situation)\n  I'm angry with him. / I'm angry about the situation."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The findings are congruent with previous research, yet they deviate from the expected pattern in one crucial aspect.",fr:"Les résultats sont cohérents avec les recherches antérieures, mais ils s'écartent du modèle attendu sur un aspect crucial."},
        {en:"His silence was tantamount to an admission of guilt, and the jury interpreted it as such.",fr:"Son silence équivalait à un aveu de culpabilité, et le jury l'a interprété comme tel."},
        {en:"A collaborative environment is conducive to innovation, while a competitive one may stifle creativity.",fr:"Un environnement collaboratif est favorable à l'innovation, tandis qu'un environnement compétitif peut étouffer la créativité."},
        {en:"The argument is devoid of merit and fails to address the core issues.",fr:"L'argument est dépourvu de fondement et ne parvient pas à aborder les questions centrales."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les collocations ne se traduisent pas littéralement. Apprenez-les par cœur dans leur contexte naturel."}
    ],
    quiz:[
      {q:"'Abide by' means:",opts:["A) ignore","B) respect/follow","C) change","D) create"],rep:'B',expl:"Abide by = respecter/suivre."},
      {q:"'Adhere to' means:",opts:["A) stick to/follow","B) reject","C) ignore","D) change"],rep:'A',expl:"Adhere to = adhérer à/suivre."},
      {q:"'Allude to' means:",opts:["A) directly state","B) refer indirectly","C) ignore","D) deny"],rep:'B',expl:"Allude to = faire allusion à."},
      {q:"'Tantamount to' means:",opts:["A) different from","B) equivalent to","C) opposite to","D) unrelated to"],rep:'B',expl:"Tantamount to = équivalent à."},
      {q:"'Conducive to' means:",opts:["A) harmful to","B) favorable to","C) irrelevant to","D) opposite to"],rep:'B',expl:"Conducive to = favorable à."},
      {q:"'Devoid of' means:",opts:["A) full of","B) lacking/completely without","C) similar to","D) related to"],rep:'B',expl:"Devoid of = dépourvu de."},
      {q:"'Congruent with' means:",opts:["A) contradictory to","B) consistent with","C) unrelated to","D) opposite to"],rep:'B',expl:"Congruent with = cohérent avec."},
      {q:"'Inherent in' means:",opts:["A) external to","B) built-in/essential to","C) accidental","D) optional"],rep:'B',expl:"Inherent in = inhérent à."},
      {q:"'Comply with' means:",opts:["A) ignore","B) conform to/follow","C) reject","D) question"],rep:'B',expl:"Comply with = se conformer à."},
      {q:"'Antithetical to' means:",opts:["A) similar to","B) directly opposed to","C) related to","D) supportive of"],rep:'B',expl:"Antithetical to = contraire à/opposé à."}
    ]
  },

  {
    id:'gram_c2_m5',
    titre:'Style Indirect et Reporting Avancé',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser le discours indirect avec des structures complexes",
      "Utiliser les verbes de reporting sophistiqués",
      "Employer le discours indirect libre (free indirect speech)"
    ],
    contenu:[
      {type:'intro',texte:"Le discours indirect avancé va bien au-delà de la simple transformation 'He said that...'. Il inclut des verbes de reporting nuancés, des structures infinitives et le discours indirect libre."},
      {type:'tableau',titre:'Verbes de reporting avancés',headers:["Verbe","Structure","Exemple"],rows:[
        ["allege","allege that / allege + to-inf","He alleged that the data was fabricated."],
        ["assert","assert that","She asserted that the findings were conclusive."],
        ["claim","claim that / claim to + inf","They claimed to have discovered a cure."],
        ["contend","contend that","Critics contend that the methodology is flawed."],
        ["maintain","maintain that","He maintained that he was innocent."],
        ["purport","purport to + inf","The document purports to be an official record."],
        ["reiterate","reiterate that","She reiterated that the deadline was firm."],
        ["speculate","speculate that / speculate about","Researchers speculate that the effect is temporary."]
      ]},
      {type:'tableau',titre:'Structures de reporting complexes',headers:["Type","Structure","Exemple"],rows:[
        ["Infinitif parfait","claim/allege/purport to have + PP","He claimed to have seen the suspect."],
        ["Passif impersonnel","It is alleged/reported/believed that...","It is alleged that the funds were misused."],
        ["Sujet + passif","He is said/believed/reported to...","He is believed to be hiding abroad."],
        ["Sujet + passif parfait","He is said to have + PP","She is said to have resigned last week."],
        ["Gérondif parfait","He denied having + PP","He denied having received the email."],
        ["Discours indirect libre","Pas de verbe introducteur","She was late. The traffic had been terrible."]
      ]},
      {type:'regle',titre:'Concordance des temps C2',texte:"• Present reporting verb → pas de changement de temps :\n  She says: 'I am tired.' → She says that she is tired.\n• Past reporting verb → backshift :\n  She said: 'I am tired.' → She said that she was tired.\n• Vérité générale → pas de backshift :\n  He said: 'The Earth orbits the Sun.' → He said that the Earth orbits the Sun.\n• Discours indirect libre : pas de verbe introducteur, le ton du personnage se mêle au narrateur"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The CEO is alleged to have misappropriated funds, a claim she vehemently denies.",fr:"Le PDG est accusé d'avoir détourné des fonds, une accusation qu'elle nie vigoureusement."},
        {en:"It is widely believed that the decision was influenced by political pressure.",fr:"On croit largement que la décision a été influencée par la pression politique."},
        {en:"She was exhausted. The meeting had dragged on for hours, and the tension was palpable.",fr:"Elle était épuisée. La réunion s'était prolongée pendant des heures, et la tension était palpable."},
        {en:"The report purports to offer a comprehensive analysis, but critics contend it is deeply flawed.",fr:"Le rapport prétend offrir une analyse complète, mais les critiques soutiennent qu'il est profondément flawed."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Le discours indirect libre est une technique littéraire puissante. Il crée une intimité entre le lecteur et le personnage."}
    ],
    quiz:[
      {q:"'He alleged that' introduces:",opts:["A) a fact","B) an unproven claim","C) a question","D) a conclusion"],rep:'B',expl:"Allege = alléguer (non prouvé)."},
      {q:"'He claimed to have seen' uses:",opts:["A) simple infinitive","B) perfect infinitive","C) gerund","D) participle"],rep:'B',expl:"To have + PP = perfect infinitive."},
      {q:"'It is alleged that' is:",opts:["A) active","B) impersonal passive","C) direct speech","D) a question"],rep:'B',expl:"Impersonal passive = structure impersonnelle."},
      {q:"'He is believed to be hiding' uses:",opts:["A) direct speech","B) subject + passive + infinitive","C) gerund","D) participle"],rep:'B',expl:"Sujet + passif + infinitif."},
      {q:"'She is said to have resigned' uses:",opts:["A) simple infinitive","B) perfect infinitive passive","C) gerund","D) participle"],rep:'B',expl:"To have + PP = perfect infinitive."},
      {q:"'He denied having received' uses:",opts:["A) infinitive","B) perfect gerund","C) participle","D) simple gerund"],rep:'B',expl:"Having + PP = perfect gerund."},
      {q:"Free indirect speech has:",opts:["A) a reporting verb","B) no reporting verb","C) quotation marks","D) a question"],rep:'B',expl:"Pas de verbe introducteur."},
      {q:"'Purport to' means:",opts:["A) deny","B) claim (often falsely)","C) confirm","D) question"],rep:'B',expl:"Purport = prétendre (souvent faussement)."},
      {q:"'Reiterate' means:",opts:["A) say once","B) repeat/emphasize","C) deny","D) question"],rep:'B',expl:"Reiterate = répéter/souligner."},
      {q:"'Contend' means:",opts:["A) agree","B) argue/assert","C) deny","D) ignore"],rep:'B',expl:"Contend = soutenir/affirmer."}
    ]
  },

  // ── VOCABULAIRE C2 ────────────────────────────────────────────────

  {
    id:'voc_c2_m1',
    titre:'Vocabulaire Littéraire et Stylistique',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Maîtriser le vocabulaire de l'analyse littéraire",
      "Utiliser des termes stylistiques précis",
      "Comprendre les procédés littéraires avancés"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire littéraire C2 permet d'analyser des textes avec une grande précision. Il couvre les procédés stylistiques, les techniques narratives et les concepts littéraires avancés."},
      {type:'lexique',titre:'Procédés stylistiques',items:[
        {en:"allegory",fr:"allégorie"},{en:"ambiguity",fr:"ambiguïté"},
        {en:"anachronism",fr:"anachronisme"},{en:"anaphora",fr:"anaphore (rhétorique)"},
        {en:"denouement",fr:"dénouement"},{en:"dichotomy",fr:"dichotomie"},
        {en:"euphemism",fr:"euphémisme"},{en:"foreshadowing",fr:"prémonition/annonce"},
        {en:"irony (dramatic/verbal/situational)",fr:"ironie"},{en:"juxtaposition",fr:"juxtaposition"}
      ]},
      {type:'lexique',titre:'Techniques narratives',items:[
        {en:"stream of consciousness",fr:"flux de conscience"},{en:"unreliable narrator",fr:"narrateur peu fiable"},
        {en:"frame narrative",fr:"narration cadre"},{en:"non-linear narrative",fr:"narration non linéaire"},
        {en:"omniscient narrator",fr:"narrateur omniscient"},{en:"first-person perspective",fr:"perspective à la première personne"},
        {en:"flashback",fr:"retour en arrière"},{en:"in medias res",fr:"in medias res (au milieu de l'action)"},
        {en:"pacing",fr:"rythme narratif"},{en:"subplot",fr:"intrigue secondaire"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The novel's denouement reveals that the unreliable narrator has been deceiving the reader throughout.",fr:"Le dénouement du roman révèle que le narrateur peu fiable a trompé le lecteur tout au long."},
        {en:"The author employs stream of consciousness to capture the character's inner turmoil.",fr:"L'auteur utilise le flux de conscience pour capturer le tourment intérieur du personnage."},
        {en:"The allegory of the cave represents the journey from ignorance to enlightenment.",fr:"L'allégorie de la caverne représente le voyage de l'ignorance à l'illumination."},
        {en:"Foreshadowing in the early chapters hints at the tragic denouement.",fr:"La prémonition dans les premiers chapitres laisse présager le dénouement tragique."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Ces termes sont essentiels pour l'analyse littéraire C2. Utilisez-les avec précision dans vos essais."}
    ],
    quiz:[
      {q:"'Allegory' means:",opts:["A) a literal story","B) a story with hidden moral/political meaning","C) a joke","D) a fact"],rep:'B',expl:"Allégorie = histoire avec sens caché."},
      {q:"'Denouement' refers to:",opts:["A) the beginning","B) the resolution/outcome","C) the middle","D) the setting"],rep:'B',expl:"Dénouement = résolution/dénouement."},
      {q:"'Stream of consciousness' is:",opts:["A) a river","B) a narrative technique mimicking thought flow","C) a dialogue","D) a description"],rep:'B',expl:"Flux de conscience = technique narrative."},
      {q:"An 'unreliable narrator' is:",opts:["A) always truthful","B) a narrator whose credibility is compromised","C) a character","D) the author"],rep:'B',expl:"Narrateur dont la crédibilité est compromise."},
      {q:"'Foreshadowing' means:",opts:["A) revealing the ending","B) hinting at future events","C) describing the past","D) ignoring the plot"],rep:'B',expl:"Foreshadowing = annoncer des événements futurs."},
      {q:"'In medias res' means:",opts:["A) at the beginning","B) in the middle of the action","C) at the end","D) outside the story"],rep:'B',expl:"In medias res = au milieu de l'action."},
      {q:"'Dichotomy' means:",opts:["A) unity","B) a division into two contrasting parts","C) similarity","D) confusion"],rep:'B',expl:"Dichotomie = division en deux parties contrastées."},
      {q:"'Euphemism' means:",opts:["A) a harsh term","B) a mild term replacing a harsh one","C) a literal term","D) a scientific term"],rep:'B',expl:"Euphémisme = terme doux remplaçant un terme dur."},
      {q:"'Juxtaposition' means:",opts:["A) separating","B) placing side by side for contrast","C) mixing","D) ignoring"],rep:'B',expl:"Juxtaposition = placer côte à côte pour contraster."},
      {q:"'Omniscient narrator' means:",opts:["A) limited knowledge","B) all-knowing narrator","C) no narrator","D) first-person narrator"],rep:'B',expl:"Narrateur omniscient = narrateur qui sait tout."}
    ]
  },

  {
    id:'voc_c2_m2',
    titre:'Vocabulaire Philosophique et Conceptuel',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser le vocabulaire philosophique de base",
      "Discuter des concepts abstraits en anglais",
      "Utiliser le langage de la logique et de l'épistémologie"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire philosophique est essentiel pour les essais C2 qui traitent de questions abstraites, éthiques et conceptuelles."},
      {type:'lexique',titre:'Concepts philosophiques',items:[
        {en:"epistemology",fr:"épistémologie"},{en:"ontology",fr:"ontologie"},
        {en:"metaphysics",fr:"métaphysique"},{en:"ethics/morality",fr:"éthique/morale"},
        {en:"aesthetics",fr:"esthétique"},{en:"logic",fr:"logique"},
        {en:"dialectic",fr:"dialectique"},{en:"empiricism",fr:"empirisme"},
        {en:"rationalism",fr:"rationalisme"},{en:"existentialism",fr:"existentialisme"}
      ]},
      {type:'lexique',titre:'Termes argumentatifs',items:[
        {en:"axiom",fr:"axiome"},{en:"postulate",fr:"postulat"},
        {en:"paradigm",fr:"paradigme"},{en:"thesis/antithesis/synthesis",fr:"thèse/antithèse/synthèse"},
        {en:"deduction",fr:"déduction"},{en:"induction",fr:"induction"},
        {en:"syllogism",fr:"syllogisme"},{en:"categorical imperative",fr:"impératif catégorique"},
        {en:"utilitarianism",fr:"utilitarisme"},{en:"determinism",fr:"déterminisme"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The epistemological question of how we know what we know has puzzled philosophers for centuries.",fr:"La question épistémologique de comment nous savons ce que nous savons a intrigué les philosophes pendant des siècles."},
        {en:"Kant's categorical imperative dictates that we should act only according to maxims that could become universal laws.",fr:"L'impératif catégorique de Kant dicte que nous devrions agir uniquement selon des maximes qui pourraient devenir des lois universelles."},
        {en:"The dialectic process involves thesis, antithesis, and synthesis.",fr:"Le processus dialectique implique thèse, antithèse et synthèse."},
        {en:"From an existentialist perspective, existence precedes essence.",fr:"D'une perspective existentialiste, l'existence précède l'essence."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les concepts philosophiques enrichissent les essais C2. Utilisez-les pour donner de la profondeur à vos arguments."}
    ],
    quiz:[
      {q:"'Epistemology' is the study of:",opts:["A) being","B) knowledge","C) beauty","D) logic"],rep:'B',expl:"Epistemology = étude de la connaissance."},
      {q:"'Ontology' is the study of:",opts:["A) knowledge","B) being/existence","C) ethics","D) aesthetics"],rep:'B',expl:"Ontology = étude de l'être/l'existence."},
      {q:"'Axiom' means:",opts:["A) a question","B) a self-evident truth","C) a conclusion","D) a theory"],rep:'B',expl:"Axiom = vérité évidente en soi."},
      {q:"'Dialectic' involves:",opts:["A) one viewpoint","B) thesis, antithesis, and synthesis","C) no argument","D) only emotion"],rep:'B',expl:"Dialectique = thèse, antithèse, synthèse."},
      {q:"'Empiricism' relies on:",opts:["A) pure reason","B) sensory experience","C) faith","D) tradition"],rep:'B',expl:"Empirisme = expérience sensorielle."},
      {q:"'Rationalism' relies on:",opts:["A) sensory experience","B) reason and logic","C) emotion","D) tradition"],rep:'B',expl:"Rationalisme = raison et logique."},
      {q:"'Utilitarianism' advocates:",opts:["A) individual rights","B) the greatest good for the greatest number","C) absolute rules","D) chaos"],rep:'B',expl:"Utilitarisme = le plus grand bien pour le plus grand nombre."},
      {q:"'Determinism' is the belief that:",opts:["A) everything is random","B) all events are determined by causes","C) free will exists","D) nothing matters"],rep:'B',expl:"Déterminisme = tous les événements sont déterminés par des causes."},
      {q:"'Syllogism' is:",opts:["A) a type of poem","B) a form of logical reasoning","C) a painting","D) a song"],rep:'B',expl:"Syllogisme = forme de raisonnement logique."},
      {q:"'Existence precedes essence' is a key idea of:",opts:["A) rationalism","B) existentialism","C) empiricism","D) utilitarianism"],rep:'B',expl:"Existentialisme = l'existence précède l'essence."}
    ]
  },

  {
    id:'voc_c2_m3',
    titre:'Nuances et Gradations de Sens',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser les nuances subtiles entre mots similaires",
      "Utiliser des intensifieurs et des atténuateurs avec précision",
      "Comprendre les connotations et les registres de langue"
    ],
    contenu:[
      {type:'intro',texte:"Au niveau C2, la maîtrise de la langue exige une compréhension fine des nuances entre mots apparemment similaires et une capacité à moduler l'intensité du discours."},
      {type:'tableau',titre:'Gradations d\'intensité',headers:["Faible","Moyen","Fort","Très fort"],rows:[
        ["dislike","disapprove","condemn","abhor"],
        ["like","admire","revere","worship"],
        ["big","large","enormous","colossal"],
        ["small","tiny","minute","microscopic"],
        ["happy","elated","ecstatic","euphoric"],
        ["sad","unhappy","despondent","devastated"],
        ["angry","irritated","furious","incensed"],
        ["afraid","anxious","terrified","petrified"]
      ]},
      {type:'tableau',titre:'Atténuateurs (Hedging)',headers:["Expression","Niveau de prudence","Exemple"],rows:[
        ["It could be argued that...","Fort","It could be argued that the policy is flawed."],
        ["It seems/appears that...","Modéré","It appears that the data supports this view."],
        ["To some extent...","Modéré","To some extent, the theory holds."],
        ["Arguably...","Modéré","Arguably, this is the most significant finding."],
        ["Presumably...","Modéré","Presumably, the results will be published soon."],
        ["It is conceivable that...","Fort","It is conceivable that alternative approaches exist."]
      ]},
      {type:'regle',titre:'Connotations et registres',texte:"• Thin (neutre) vs. Skinny (négatif) vs. Slim (positif)\n• Stubborn (négatif) vs. Determined (positif) vs. Tenacious (très positif)\n• Cheap (négatif) vs. Inexpensive (neutre) vs. Affordable (positif)\n• Le choix du mot révèle votre attitude envers le sujet"},
      {type:'exemples',titre:'Exemples de nuances',items:[
        {en:"While some might describe the policy as controversial, others would condemn it as fundamentally unjust.",fr:"Alors que certains pourraient qualifier la politique de controversée, d'autres la condamneraient comme fondamentalement injuste."},
        {en:"The findings are arguably significant, though it could be argued that the sample size limits their generalizability.",fr:"Les résultats sont sans doute significatifs, bien qu'on puisse soutenir que la taille de l'échantillon limite leur généralisabilité."},
        {en:"She was not merely unhappy; she was devastated by the betrayal.",fr:"Elle n'était pas simplement malheureuse ; elle était dévastée par la trahison."},
        {en:"The building was not just large; it was colossal, towering over the entire cityscape.",fr:"Le bâtiment n'était pas juste grand ; il était colossal, dominant tout le paysage urbain."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au niveau C2, chaque mot compte. Choisissez des mots qui reflètent précisément votre intention et votre attitude."}
    ],
    quiz:[
      {q:"'Abhor' is stronger than:",opts:["A) love","B) dislike","C) enjoy","D) appreciate"],rep:'B',expl:"Abhor = détester fortement (plus fort que dislike)."},
      {q:"'Euphoric' is stronger than:",opts:["A) sad","B) happy","C) angry","D) afraid"],rep:'B',expl:"Euphoric = extatique (plus fort que happy)."},
      {q:"'It could be argued that' is:",opts:["A) certain","B) a cautious claim","C) a fact","D) a question"],rep:'B',expl:"Affirmation prudente."},
      {q:"'Presumably' means:",opts:["A) certainly","B) probably/assumedly","C) definitely","D) never"],rep:'B',expl:"Presumably = probablement/présumément."},
      {q:"'Skinny' has a ___ connotation compared to 'slim'.",opts:["A) more positive","B) more negative","C) neutral","D) same"],rep:'B',expl:"Skinny = connotation négative vs slim = positif."},
      {q:"'Tenacious' is ___ than 'stubborn'.",opts:["A) more negative","B) more positive","C) the same","D) weaker"],rep:'B',expl:"Tenacious = plus positif que stubborn."},
      {q:"'Colossal' is stronger than:",opts:["A) tiny","B) big","C) small","D) microscopic"],rep:'B',expl:"Colossal = plus fort que big."},
      {q:"'To some extent' is used to:",opts:["A) fully agree","B) partially agree","C) fully disagree","D) ignore"],rep:'B',expl:"Accord partiel."},
      {q:"'Affordable' has a ___ connotation compared to 'cheap'.",opts:["A) more negative","B) more positive","C) same","D) neutral"],rep:'B',expl:"Affordable = plus positif que cheap."},
      {q:"'Arguably' means:",opts:["A) undoubtedly","B) it can be argued","C) certainly","D) never"],rep:'B',expl:"Arguably = on peut soutenir que."}
    ]
  },

  {
    id:'voc_c2_m4',
    titre:'Vocabulaire Psychologique et Comportemental',
    niveau:'C2',
    duree:30,
    objectifs:[
      "Maîtriser le vocabulaire de la psychologie",
      "Décrire des comportements et des états mentaux",
      "Comprendre le langage des sciences cognitives"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire psychologique est essentiel pour discuter du comportement humain, des émotions et des processus cognitifs."},
      {type:'lexique',titre:'Processus cognitifs',items:[
        {en:"cognition",fr:"cognition"},{en:"perception",fr:"perception"},
        {en:"memory consolidation",fr:"consolidation de la mémoire"},{en:"attention",fr:"attention"},
        {en:"problem-solving",fr:"résolution de problèmes"},{en:"decision-making",fr:"prise de décision"},
        {en:"cognitive bias",fr:"biais cognitif"},{en:"heuristic",fr:"heuristique"},
        {en:"metacognition",fr:"métacognition"},{en:"neuroplasticity",fr:"neuroplasticité"}
      ]},
      {type:'lexique',titre:'États émotionnels et comportementaux',items:[
        {en:"resilience",fr:"résilience"},{en:"empathy",fr:"empathie"},
        {en:"cognitive dissonance",fr:"dissonance cognitive"},{en:"self-efficacy",fr:"auto-efficacité"},
        {en:"intrinsic motivation",fr:"motivation intrinsèque"},{en:"extrinsic motivation",fr:"motivation extrinsèque"},
        {en:"confirmation bias",fr:"biais de confirmation"},{en:"groupthink",fr:"pensée de groupe"},
        {en:"emotional intelligence",fr:"intelligence émotionnelle"},{en:"behavioral conditioning",fr:"conditionnement comportemental"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Cognitive dissonance occurs when a person holds two contradictory beliefs simultaneously.",fr:"La dissonance cognitive se produit lorsqu'une personne détient deux croyances contradictoires simultanément."},
        {en:"Confirmation bias leads people to seek information that supports their existing views.",fr:"Le biais de confirmation pousse les gens à chercher des informations qui soutiennent leurs opinions existantes."},
        {en:"Resilience is the ability to bounce back from adversity.",fr:"La résilience est la capacité à se remettre de l'adversité."},
        {en:"Metacognition — thinking about thinking — is a key component of effective learning.",fr:"La métacognition — penser à la pensée — est un composant clé de l'apprentissage efficace."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les concepts psychologiques sont fréquents dans les essais C2. Apprenez : cognitive bias, resilience, empathy, intrinsic motivation."}
    ],
    quiz:[
      {q:"'Cognitive dissonance' is:",opts:["A) harmony","B) mental discomfort from contradictory beliefs","C) agreement","D) clarity"],rep:'B',expl:"Dissonance cognitive = inconfort mental de croyances contradictoires."},
      {q:"'Confirmation bias' means:",opts:["A) seeking opposing views","B) seeking information that confirms existing beliefs","C) being neutral","D) being open-minded"],rep:'B',expl:"Biais de confirmation = chercher ce qui confirme ses croyances."},
      {q:"'Resilience' means:",opts:["A) weakness","B) ability to recover from adversity","C) stubbornness","D) fragility"],rep:'B',expl:"Résilience = capacité à se remettre de l'adversité."},
      {q:"'Metacognition' means:",opts:["A) thinking","B) thinking about thinking","C) memory","D) perception"],rep:'B',expl:"Métacognition = penser à la pensée."},
      {q:"'Intrinsic motivation' comes from:",opts:["A) external rewards","B) internal satisfaction","C) pressure","D) money"],rep:'B',expl:"Motivation intrinsèque = satisfaction interne."},
      {q:"'Heuristic' means:",opts:["A) a complex algorithm","B) a mental shortcut","C) a rule","D) a fact"],rep:'B',expl:"Heuristique = raccourci mental."},
      {q:"'Groupthink' refers to:",opts:["A) individual thinking","B) conformity in group decision-making","C) creativity","D) independence"],rep:'B',expl:"Pensée de groupe = conformisme dans les décisions de groupe."},
      {q:"'Neuroplasticity' is:",opts:["A) brain damage","B) the brain's ability to reorganize itself","C) aging","D) disease"],rep:'B',expl:"Neuroplasticité = capacité du cerveau à se réorganiser."},
      {q:"'Self-efficacy' means:",opts:["A) self-doubt","B) belief in one's ability to succeed","C) arrogance","D) weakness"],rep:'B',expl:"Auto-efficacité = croyance en sa capacité à réussir."},
      {q:"'Empathy' means:",opts:["A) indifference","B) understanding and sharing others' feelings","C) sympathy only","D) pity"],rep:'B',expl:"Empathie = comprendre et partager les sentiments des autres."}
    ]
  },

  {
    id:'voc_c2_m5',
    titre:'Vocabulaire de la Rhétorique et de la Persuasion',
    niveau:'C2',
    duree:30,
    objectifs:[
      "Maîtriser les termes de la rhétorique classique",
      "Identifier les techniques de persuasion",
      "Utiliser le langage de l'argumentation avancée"
    ],
    contenu:[
      {type:'intro',texte:"La rhétorique est l'art de la persuasion. Au niveau C2, on utilise des techniques rhétoriques sophistiquées pour convaincre, émouvoir et engager l'auditoire."},
      {type:'lexique',titre:'Figures de rhétorique',items:[
        {en:"ethos/pathos/logos",fr:"éthos/pathos/logos"},{en:"rhetorical question",fr:"question rhétorique"},
        {en:"hyperbole",fr:"hyperbole"},{en:"litotes",fr:"litote"},
        {en:"metonymy",fr:"métonymie"},{en:"synecdoche",fr:"synecdoque"},
        {en:"chiasmus",fr:"chiasme"},{en:"antithesis",fr:"antithèse"},
        {en:"parallelism",fr:"parallélisme"},{en:"anaphora (rhétorique)",fr:"anaphore"}
      ]},
      {type:'lexique',titre:'Techniques de persuasion',items:[
        {en:"appeal to authority",fr:"appel à l'autorité"},{en:"appeal to emotion",fr:"appel à l'émotion"},
        {en:"straw man fallacy",fr:"homme de paille"},{en:"slippery slope",fr:"pente glissante"},
        {en:"false dilemma",fr:"faux dilemme"},{en:"ad hominem",fr:"argument ad hominem"},
        {en:"bandwagon fallacy",fr:"appel à la popularité"},{en:"circular reasoning",fr:"raisonnement circulaire"},
        {en:"red herring",fr:"hareng rouge ( diversion)"},{en:"loaded language",fr:"langage chargé"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The speaker employed ethos by citing her decades of experience in the field.",fr:"L'orateur a utilisé l'éthos en citant ses décennies d'expérience dans le domaine."},
        {en:"The argument was a straw man: it misrepresented the opponent's position to make it easier to attack.",fr:"L'argument était un homme de paille : il déformait la position de l'adversaire pour le rendre plus facile à attaquer."},
        {en:"'Ask not what your country can do for you — ask what you can do for your country.' This chiasmus is unforgettable.",fr:"'Ne demandez pas ce que votre pays peut faire pour vous — demandez ce que vous pouvez faire pour votre pays.' Ce chiasme est inoubliable."},
        {en:"The politician used loaded language to evoke fear and urgency.",fr:"Le politicien a utilisé un langage chargé pour évoquer la peur et l'urgence."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Reconnaître les techniques de persuasion vous rend plus critique face aux discours et plus efficace dans vos propres arguments."}
    ],
    quiz:[
      {q:"'Ethos' appeals to:",opts:["A) emotion","B) credibility/character","C) logic","D) fear"],rep:'B',expl:"Ethos = crédibilité/caractère."},
      {q:"'Pathos' appeals to:",opts:["A) logic","B) credibility","C) emotion","D) authority"],rep:'C',expl:"Pathos = émotion."},
      {q:"'Logos' appeals to:",opts:["A) emotion","B) credibility","C) logic/reason","D) fear"],rep:'C',expl:"Logos = logique/raison."},
      {q:"A 'straw man' fallacy:",opts:["A) addresses the real argument","B) misrepresents the opponent's position","C) is valid","D) is logical"],rep:'B',expl:"Homme de paille = déformer la position adverse."},
      {q:"'Chiasmus' is:",opts:["A) repetition","B) reversed parallel structure","C) a question","D) a metaphor"],rep:'B',expl:"Chiasme = structure parallèle inversée."},
      {q:"'Ad hominem' attacks:",opts:["A) the argument","B) the person","C) the evidence","D) the logic"],rep:'B',expl:"Ad hominem = attaque la personne."},
      {q:"'Slippery slope' argues that:",opts:["A) one step leads to extreme consequences","B) nothing changes","C) the middle is best","D) both sides are right"],rep:'A',expl:"Pente glissante = une étape mène à des conséquences extrêmes."},
      {q:"'Loaded language' uses:",opts:["A) neutral words","B) emotionally charged words","C) technical terms","D) simple words"],rep:'B',expl:"Langage chargé = mots émotionnellement chargés."},
      {q:"'False dilemma' presents:",opts:["A) many options","B) only two options when more exist","C) no options","D) all options"],rep:'B',expl:"Faux dilemme = seulement deux options alors qu'il y en a plus."},
      {q:"'Circular reasoning' means:",opts:["A) the conclusion proves the premise","B) the premise proves the conclusion","C) logical argument","D) valid reasoning"],rep:'A',expl:"Raisonnement circulaire = la conclusion prouve la prémisse."}
    ]
  },

  // ── LISTENING & SPEAKING C2 ───────────────────────────────────────

  {
    id:'listen_c2_m1',
    titre:'Listening — Conférences Interdisciplinaires',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Comprendre des conférences qui croisent plusieurs disciplines",
      "Suivre des arguments complexes avec des références multiples",
      "Synthétiser des informations de sources variées"
    ],
    contenu:[
      {type:'intro',texte:"Les conférences interdisciplinaires combinent des concepts de plusieurs domaines, exigeant une capacité à suivre des références croisées et des arguments complexes."},
      {type:'tableau',titre:'Signaux interdisciplinaires',headers:["Signal","Fonction","Exemple"],rows:[
        ["Drawing from both X and Y...","Croisement disciplinaire","Drawing from both psychology and economics, we can understand..."],
        ["This intersects with...","Connexion entre domaines","This intersects with recent findings in neuroscience."],
        ["From a different lens...","Changement de perspective","From a sociological lens, the same phenomenon appears differently."],
        ["The implications span...","Impact multidisciplinaire","The implications span economics, ethics, and public policy."],
        ["Bridging the gap between...","Intégration","Bridging the gap between theory and practice, this study..."],
        ["A holistic approach would...","Approche intégrée","A holistic approach would consider biological, social, and economic factors."]
      ]},
      {type:'regle',titre:'Stratégies d\'écoute C2',texte:"1. Identifiez les disciplines impliquées\n2. Notez les connexions entre les domaines\n3. Repérez les emprunts conceptuels (un domaine借用 un concept d'un autre)\n4. Identifiez la thèse centrale et comment chaque discipline la soutient\n5. Notez les implications interdisciplinaires"},
      {type:'exemples',titre:'Extrait de conférence interdisciplinaire',items:[
        {en:"Drawing from both behavioral economics and cognitive psychology, we can understand why people make irrational financial decisions. This intersects with recent findings in neuroscience, which reveal that the brain's reward system overrides logical reasoning. From a sociological lens, the same phenomenon appears as a product of cultural norms around consumption. The implications span economics, ethics, and public policy. A holistic approach would consider biological, social, and economic factors simultaneously.",fr:"En puisant dans l'économie comportementale et la psychologie cognitive, nous pouvons comprendre pourquoi les gens prennent des décisions financières irrationnelles. Cela croise les découvertes récentes en neurosciences, qui révèlent que le système de récompense du cerveau supplante le raisonnement logique. D'un point de vue sociologique, le même phénomène apparaît comme un produit des normes culturelles autour de la consommation. Les implications s'étendent à l'économie, l'éthique et la politique publique. Une approche holistique considérerait simultanément les facteurs biologiques, sociaux et économiques."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les conférences C2 croisent souvent 3+ disciplines. Notez les connexions, pas juste les faits isolés."}
    ],
    quiz:[
      {q:"'Drawing from both X and Y' signals:",opts:["A) one discipline","B) interdisciplinary approach","C) no connection","D) contradiction"],rep:'B',expl:"Approche interdisciplinaire."},
      {q:"'This intersects with' means:",opts:["A) this ignores","B) this connects with","C) this contradicts","D) this ends"],rep:'B',expl:"Intersects with = se connecte avec."},
      {q:"'From a different lens' means:",opts:["A) same perspective","B) different perspective","C) no perspective","D) visual lens"],rep:'B',expl:"Différent point de vue/perspective."},
      {q:"'The implications span' means:",opts:["A) limited to one area","B) extend across multiple areas","C) no implications","D) end"],rep:'B',expl:"S'étendent à plusieurs domaines."},
      {q:"'Bridging the gap between' means:",opts:["A) separating","B) connecting/integrating","C) ignoring","D) widening"],rep:'B',expl:"Connecter/intégrer."},
      {q:"'A holistic approach' considers:",opts:["A) one factor","B) all relevant factors","C) no factors","D) only economic factors"],rep:'B',expl:"Approche holistique = tous les facteurs pertinents."},
      {q:"Interdisciplinary conferences require:",opts:["A) knowledge of one field","B) ability to connect multiple fields","C) no knowledge","D) only memorization"],rep:'B',expl:"Capacité à connecter plusieurs domaines."},
      {q:"'Behavioral economics' combines:",opts:["A) biology and chemistry","B) psychology and economics","C) physics and math","D) history and art"],rep:'B',expl:"Psychologie et économie."},
      {q:"'Neuroscience' studies:",opts:["A) society","B) the brain and nervous system","C) economics","D) literature"],rep:'B',expl:"Neurosciences = cerveau et système nerveux."},
      {q:"'Cultural norms' refers to:",opts:["A) individual habits","B) shared societal expectations","C) laws","D) personal preferences"],rep:'B',expl:"Normes sociétales partagées."}
    ]
  },

  {
    id:'speak_c2_m1',
    titre:'Speaking — Discussions Philosophiques et Débats Complexes',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Participer à des discussions philosophiques en anglais",
      "Articuler des arguments abstraits avec clarté",
      "Gérer les nuances et les contre-arguments avec élégance"
    ],
    contenu:[
      {type:'intro',texte:"Les discussions philosophiques C2 exigent une capacité à articuler des concepts abstraits, à nuancer ses positions et à engager avec des perspectives opposées de manière constructive."},
      {type:'tableau',titre:'Langage de la discussion philosophique',headers:["Expression","Fonction","Exemple"],rows:[
        ["Let me posit that...","Proposer une thèse","Let me posit that free will is an illusion."],
        ["One might object that...","Anticiper une objection","One might object that this leads to moral relativism."],
        ["The crux of the issue lies in...","Identifier le cœur du problème","The crux of the issue lies in the definition of consciousness."],
        ["To play devil's advocate...","Explorer un contre-argument","To play devil's advocate, what if the opposite were true?"],
        ["I would qualify that by saying...","Nuancer sa position","I would qualify that by saying it depends on the context."],
        ["The underlying assumption here is...","Révéler une prémisse cachée","The underlying assumption here is that rationality is universal."],
        ["Let me steelman the opposing view...","Présenter la version la plus forte de l'opposition","Let me steelman the opposing view before I critique it."]
      ]},
      {type:'regle',titre:'Principes de discussion C2',texte:"1. Définissez les termes clés avant de débattre\n2. Identifiez les prémisses sous-jacentes de chaque argument\n3. Utilisez le 'steelman' (version la plus forte de l'opposition) plutôt que le 'straw man'\n4. Nuancez vos positions avec des qualifications\n5. Reconaissez les limites de votre argument"},
      {type:'exemples',titre:'Exemple de discussion philosophique',items:[
        {en:"Let me posit that moral responsibility requires free will. One might object that determinism undermines this notion. The crux of the issue lies in how we define 'free will.' To play devil's advocate, what if moral responsibility can exist even in a deterministic framework? I would qualify that by saying compatibilism offers a middle ground. The underlying assumption here is that freedom and determinism are mutually exclusive — an assumption I would challenge.",fr:"Permettez-moi de postuler que la responsabilité morale exige le libre arbitre. On pourrait objecter que le déterminisme sape cette notion. Le cœur du problème réside dans la façon dont nous définissons le 'libre arbitre'. Pour jouer l'avocat du diable, et si la responsabilité morale pouvait exister même dans un cadre déterministe ? Je nuancerais en disant que le compatibilisme offre un terrain d'entente. L'hypothèse sous-jacente ici est que la liberté et le déterminisme sont mutuellement exclusifs — une hypothèse que je remettrais en question."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Le 'steelman' est plus puissant que le 'straw man'. Présentez la version la plus forte de l'opposition avant de la critiquer."}
    ],
    quiz:[
      {q:"'Let me posit that' is used to:",opts:["A) conclude","B) propose a thesis","C) ask a question","D) agree"],rep:'B',expl:"Proposer une thèse."},
      {q:"'One might object that' is used to:",opts:["A) ignore objections","B) anticipate an objection","C) agree","D) conclude"],rep:'B',expl:"Anticiper une objection."},
      {q:"'The crux of the issue' means:",opts:["A) the edge","B) the central point","C) the conclusion","D) an example"],rep:'B',expl:"Le point central."},
      {q:"'To play devil's advocate' means:",opts:["A) to be evil","B) to argue against to test the argument","C) to agree","D) to ignore"],rep:'B',expl:"Argumenter contre pour tester."},
      {q:"'I would qualify that by saying' is used to:",opts:["A) strengthen absolutely","B) add nuance/conditions","C) weaken","D) ignore"],rep:'B',expl:"Ajouter des nuances/conditions."},
      {q:"'The underlying assumption' refers to:",opts:["A) stated premise","B) hidden/unstated premise","C) conclusion","D) evidence"],rep:'B',expl:"Prémisse cachée/non déclarée."},
      {q:"'Steelman' means:",opts:["A) weak version of opposition","B) strongest version of opposition","C) ignoring opposition","D) agreeing with opposition"],rep:'B',expl:"Version la plus forte de l'opposition."},
      {q:"'Compatibilism' is the view that:",opts:["A) free will and determinism are incompatible","B) free will and determinism can coexist","C) free will doesn't exist","D) determinism doesn't exist"],rep:'B',expl:"Compatibilisme = libre arbitre et déterminisme peuvent coexister."},
      {q:"'Moral relativism' is the view that:",opts:["A) morality is universal","B) morality depends on context/culture","C) morality doesn't exist","D) morality is scientific"],rep:'B',expl:"Relativisme moral = la morale dépend du contexte/culture."},
      {q:"'Determinism' is the belief that:",opts:["A) everything is random","B) all events are causally determined","C) free will exists","D) nothing is real"],rep:'B',expl:"Déterminisme = tous les événements sont causalement déterminés."}
    ]
  },

  {
    id:'speak_c2_m2',
    titre:'Speaking — Médiation et Résolution de Conflits',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Maîtriser le langage de la médiation professionnelle",
      "Faciliter la résolution de conflits complexes",
      "Utiliser des techniques de communication non violente"
    ],
    contenu:[
      {type:'intro',texte:"La médiation C2 exige une maîtrise du langage diplomatique, une capacité à reformuler les positions de manière constructive et une compréhension des dynamiques de conflit."},
      {type:'tableau',titre:'Techniques de médiation',headers:["Technique","Expression","Exemple"],rows:[
        ["Reformulation","What I hear you saying is...","What I hear you saying is that you feel undervalued."],
        ["Validation","It's understandable that you feel...","It's understandable that you feel frustrated by the delay."],
        ["Neutralisation","Let's focus on the issue, not the person.","Let's focus on the issue, not the person."],
        ["Reframing","Rather than seeing this as a conflict, let's see it as...","Rather than seeing this as a conflict, let's see it as an opportunity to improve."],
        ["Common ground","Where we seem to agree is...","Where we seem to agree is that quality is the priority."],
        ["Forward-looking","Moving forward, what would success look like?","Moving forward, what would success look like for both parties?"],
        ["Closing the gap","What would it take for you to feel comfortable with...?","What would it take for you to feel comfortable with this arrangement?"]
      ]},
      {type:'regle',titre:'Communication non violente (CNV)',texte:"1. Observation (sans jugement) : 'When I see...'\n2. Sentiment : 'I feel...'\n3. Besoin : 'Because I need...'\n4. Demande : 'Would you be willing to...?'\n• Évitez : 'You always...', 'You never...', 'You should...'\n• Remplacez par : 'I notice...', 'I feel...', 'I would appreciate...'"},
      {type:'exemples',titre:'Exemple de médiation',items:[
        {en:"What I hear you saying is that the current workload is unsustainable. It's understandable that you feel overwhelmed. Rather than seeing this as a management failure, let's see it as an opportunity to redesign our processes. Where we seem to agree is that quality matters. Moving forward, what would it take for you to feel comfortable with a revised timeline?",fr:"Ce que j'entends, c'est que la charge de travail actuelle est insoutenable. Il est compréhensible que vous vous sentiez dépassé. Plutôt que de voir cela comme un échec de gestion, voyons-le comme une opportunité de redessiner nos processus. Là où nous semblons d'accord, c'est que la qualité compte. Pour aller de l'avant, que faudrait-il pour que vous soyez à l'aise avec un calendrier révisé ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : La médiation C2 ne consiste pas à prendre parti, mais à faciliter la compréhension mutuelle et à trouver des solutions créatives."}
    ],
    quiz:[
      {q:"'What I hear you saying is' is used for:",opts:["A) ignoring","B) reformulating/confirming understanding","C) arguing","D) dismissing"],rep:'B',expl:"Reformuler/confirmer la compréhension."},
      {q:"'It's understandable that you feel' is used for:",opts:["A) dismissing","B) validating emotions","C) arguing","D) ignoring"],rep:'B',expl:"Valider les émotions."},
      {q:"'Let's focus on the issue, not the person' is:",opts:["A) personal attack","B) neutralization","C) agreement","D) dismissal"],rep:'B',expl:"Neutralisation = se concentrer sur le problème."},
      {q:"'Reframing' means:",opts:["A) keeping the same view","B) changing the perspective","C) ignoring","D) agreeing"],rep:'B',expl:"Reframing = changer de perspective."},
      {q:"'Common ground' refers to:",opts:["A) differences","B) areas of agreement","C) conflict","D) disagreement"],rep:'B',expl:"Terrain d'entente = zones d'accord."},
      {q:"'Moving forward' is used to:",opts:["A) look back","B) focus on future solutions","C) stop","D) argue"],rep:'B',expl:"Se concentrer sur les solutions futures."},
      {q:"CNV stands for:",opts:["A) Central Nervous Virus","B) Nonviolent Communication","C) New Communication Version","D) National Communication Vehicle"],rep:'B',expl:"Communication Non Violente."},
      {q:"In CNV, 'You always...' should be replaced by:",opts:["A) 'You never...'","B) 'I notice...','I feel...'","C) 'You should...'","D) silence"],rep:'B',expl:"CNV = 'Je remarque...', 'Je ressens...'."},
      {q:"'What would it take for you to feel comfortable' is:",opts:["A) a demand","B) an exploratory question","C) a threat","D) a dismissal"],rep:'B',expl:"Question exploratoire."},
      {q:"A mediator should:",opts:["A) take sides","B) remain neutral","C) ignore both parties","D) decide for them"],rep:'B',expl:"Le médiateur reste neutre."}
    ]
  },

  // ── WRITING C2 ────────────────────────────────────────────────────

  {
    id:'write_c2_m1',
    titre:'Writing — Articles de Recherche et Papers Académiques',
    niveau:'C2',
    duree:45,
    objectifs:[
      "Structurer un article de recherche académique",
      "Rédiger une revue de littérature critique",
      "Formuler des contributions originales"
    ],
    contenu:[
      {type:'intro',texte:"L'article de recherche C2 exige une structure rigoureuse (IMRaD), une revue de littérature critique, une méthodologie claire et une discussion des implications."},
      {type:'tableau',titre:'Structure IMRaD',headers:["Section","Contenu","Exemple"],rows:[
        ["Introduction","Contexte + gap + objectif","Despite extensive research on X, little is known about Y."],
        ["Methods","Design + participants + procédures","A mixed-methods design was employed with 500 participants."],
        ["Results","Findings + statistiques","The analysis revealed a significant correlation (r = .72, p < .001)."],
        ["and Discussion","Interprétation + limites + implications","These findings suggest that... However, several limitations warrant caution."]
      ]},
      {type:'regle',titre:'Revue de littérature C2',texte:"• Ne résumez pas les études une par une — SYNTHÉTISEZ par thème\n• Identifiez les GAP dans la littérature\n• Positionnez votre recherche par rapport aux travaux existants\n• Utilisez des verbes de reporting variés (demonstrate, suggest, challenge, extend)\n• Critiquez les méthodologies, pas juste les résultats"},
      {type:'exemples',titre:'Exemple d\'introduction de recherche',items:[
        {en:"Despite extensive research on the impact of technology on education, little is known about how AI-driven personalization affects long-term learning outcomes. While Smith (2023) demonstrated short-term gains in test scores, and Johnson (2024) suggested improved engagement, neither study addressed retention beyond six months. This gap is significant because... The present study aims to bridge this gap by examining...",fr:"Malgré des recherches extensives sur l'impact de la technologie sur l'éducation, on sait peu comment la personnalisation basée sur l'IA affecte les résultats d'apprentissage à long terme. Alors que Smith (2023) a démontré des gains à court terme dans les scores de test, et Johnson (2024) a suggéré un engagement amélioré, aucune étude n'a abordé la rétention au-delà de six mois. Cette lacune est significative car... La présente étude vise à combler cette lacune en examinant..."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un article C2 ne se contente pas de rapporter des résultats — il les interprète, discute leurs limites et propose des implications pour la recherche future."}
    ],
    quiz:[
      {q:"IMRaD stands for:",opts:["A) Introduction, Methods, Results, and Discussion","B) Ideas, Methods, Results, and Data","C) Introduction, Materials, Reports, and Data","D) Ideas, Materials, Results, and Discussion"],rep:'A',expl:"IMRaD = Introduction, Methods, Results, and Discussion."},
      {q:"A literature review should:",opts:["A) summarize each study","B) synthesize by theme","C) list all studies","D) ignore previous research"],rep:'B',expl:"Synthétiser par thème."},
      {q:"'Despite extensive research on X, little is known about Y' identifies:",opts:["A) a conclusion","B) a research gap","C) a method","D) a result"],rep:'B',expl:"Identifier une lacune de recherche."},
      {q:"'The present study aims to bridge this gap' states:",opts:["A) the method","B) the objective","C) the result","D) the limitation"],rep:'B',expl:"Énoncer l'objectif."},
      {q:"'Several limitations warrant caution' acknowledges:",opts:["A) strengths","B) limitations","C) results","D) methods"],rep:'B',expl:"Reconnaître les limites."},
      {q:"In a literature review, you should:",opts:["A) only praise","B) critically evaluate methodologies","C) ignore methods","D) only summarize"],rep:'B',expl:"Évaluer crítiquement les méthodologies."},
      {q:"'r = .72, p < .001' indicates:",opts:["A) no correlation","B) a strong significant correlation","C) a weak correlation","D) an error"],rep:'B',expl:"Corrélation forte et significative."},
      {q:"The Discussion section should:",opts:["A) repeat results","B) interpret results and discuss implications","C) introduce new data","D) ignore limitations"],rep:'B',expl:"Interpréter les résultats et discuter les implications."},
      {q:"'Mixed-methods design' means:",opts:["A) one method","B) combining qualitative and quantitative","C) no method","D) random method"],rep:'B',expl:"Mixte = qualitatif + quantitatif."},
      {q:"A research paper's contribution should be:",opts:["A) irrelevant","B) original and significant","C) repetitive","D) trivial"],rep:'B',expl:"Originale et significative."}
    ]
  },

  {
    id:'write_c2_m2',
    titre:'Writing — Essais Argumentatifs Sophistiqués',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Construire des arguments multi-couches",
      "Intégrer des contre-arguments et des réfutations",
      "Utiliser un registre stylistique avancé"
    ],
    contenu:[
      {type:'intro',texte:"L'essai argumentatif C2 va au-delà de la structure basique. Il exige des arguments nuancés, des contre-arguments intégrés, et un style rhétorique sophistiqué."},
      {type:'tableau',titre:'Structure d\'un essai C2',headers:["Section","Contenu","Technique"],rows:[
        ["Introduction","Hook paradoxal + contexte + thèse nuancée","While X seems intuitive, a closer examination reveals Y."],
        ["Body 1","Argument principal + preuve + analyse","The evidence overwhelmingly supports..."],
        ["Body 2","Contre-argument + concession + réfutation","Admittedly, one might argue... However, this view overlooks..."],
        ["Body 3","Nuance / perspective alternative","A more sophisticated understanding would acknowledge..."],
        ["Conclusion","Synthèse + implication + ouverture","Ultimately, the question is not whether X or Y, but how..."]
      ]},
      {type:'regle',titre:'Techniques rhétoriques C2',texte:"• Anaphore rhétorique : répétition d'un mot en début de phrase pour l'emphase\n  We shall fight on the beaches, we shall fight on the landing grounds...\n• Antithèse : contraste entre deux idées\n  It was the best of times, it was the worst of times.\n• Chiasme : structure inversée\n  Ask not what your country can do for you — ask what you can do for your country.\n• Litote : affirmation par la négation du contraire\n  It is not uncommon = It is common"},
      {type:'exemples',titre:'Exemple de paragraphe argumentatif C2',items:[
        {en:"Admittedly, one might argue that technological progress inevitably leads to social progress. This view, while intuitively appealing, overlooks the complex relationship between innovation and inequality. History demonstrates that technological advancement, without deliberate policy intervention, often exacerbates existing disparities. The industrial revolution, for all its benefits, initially widened the gap between capital and labor. A more sophisticated understanding would acknowledge that technology is a tool — its impact depends on the social structures that govern its deployment.",fr:"Certes, on pourrait soutenir que le progrès technologique conduit inévitablement au progrès social. Cette vision, bien qu'intuitivement séduisante, néglige la relation complexe entre innovation et inégalité. L'histoire démontre que l'avancement technologique, sans intervention politique délibérée, exacerbe souvent les disparités existantes. La révolution industrielle, malgré tous ses bénéfices, a initialement creusé l'écart entre le capital et le travail. Une compréhension plus sophistiquée reconnaîtrait que la technologie est un outil — son impact dépend des structures sociales qui régissent son déploiement."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un essai C2 ne dit pas juste 'X est bon' — il dit 'X est bon DANS CES CONDITIONS, mais PAS DANS CELLES-LÀ, et voici POURQUOI'."}
    ],
    quiz:[
      {q:"A C2 essay thesis should be:",opts:["A) simple","B) nuanced and qualified","C) absolute","D) emotional"],rep:'B',expl:"Thèse nuancée et qualifiée."},
      {q:"'Admittedly, one might argue...' introduces:",opts:["A) the main argument","B) a counterargument","C) the conclusion","D) a fact"],rep:'B',expl:"Introduit un contre-argument."},
      {q:"'However, this view overlooks...' is used to:",opts:["A) agree","B) refute the counterargument","C) conclude","D) ignore"],rep:'B',expl:"Réfuter le contre-argument."},
      {q:"Anaphora is:",opts:["A) repetition at the end","B) repetition at the beginning","C) no repetition","D) random repetition"],rep:'B',expl:"Répétition en début de phrase."},
      {q:"Antithesis is:",opts:["A) similarity","B) contrast between two ideas","C) repetition","D) question"],rep:'B',expl:"Contraste entre deux idées."},
      {q:"Chiasmus is:",opts:["A) parallel structure","B) reversed parallel structure","C) no structure","D) random structure"],rep:'B',expl:"Structure parallèle inversée."},
      {q:"Litotes is:",opts:["A) exaggeration","B) affirmation by negating the opposite","C) denial","D) question"],rep:'B',expl:"Affirmation en niant le contraire."},
      {q:"'It is not uncommon' means:",opts:["A) rare","B) common","C) impossible","D) unique"],rep:'B',expl:"Litote = common."},
      {q:"A C2 conclusion should:",opts:["A) repeat the introduction","B) synthesize and open to broader implications","C) introduce new arguments","D) be emotional"],rep:'B',expl:"Synthétiser et ouvrir à des implications plus larges."},
      {q:"'Ultimately, the question is not whether X or Y, but how...' is:",opts:["A) a simple conclusion","B) a sophisticated reframing","C) a question","D) an introduction"],rep:'B',expl:"Reformulation sophistiquée."}
    ]
  },

  {
    id:'write_c2_m3',
    titre:'Writing — Critiques Littéraires et Analyses de Textes',
    niveau:'C2',
    duree:40,
    objectifs:[
      "Rédiger des critiques littéraires sophistiquées",
      "Analyser des textes avec des perspectives critiques multiples",
      "Utiliser le langage de la théorie littéraire"
    ],
    contenu:[
      {type:'intro',texte:"La critique littéraire C2 exige une capacité à analyser des textes à travers des lentilles théoriques multiples, à identifier des couches de sens et à formuler des interprétations originales."},
      {type:'tableau',titre:'Perspectives critiques',headers:["Perspective","Focus","Questions clés"],rows:[
        ["Formalisme","Structure, style, forme","How does the text's structure create meaning?"],
        ["Historicisme","Contexte historique","How does the text reflect its historical moment?"],
        ["Féminisme","Genre et pouvoir","How does the text represent gender and power dynamics?"],
        ["Postcolonialisme","Colonialisme et identité","How does the text address colonial legacies?"],
        ["Psychanalytique","Inconscient et désir","What unconscious desires drive the characters?"],
        ["Marxisme","Classe et économie","How does the text reflect class struggle?"],
        ["Écocritique","Nature et environnement","How does the text represent the human-nature relationship?"]
      ]},
      {type:'regle',titre:'Structurer une critique C2',texte:"1. Introduction : présentez le texte, l'auteur, et votre thèse interprétative\n2. Analyse formelle : style, structure, techniques narratives\n3. Analyse thématique : thèmes principaux et leur traitement\n4. Perspective critique : appliquez une ou plusieurs lentilles théoriques\n5. Conclusion : synthèse de votre interprétation et son importance"},
      {type:'exemples',titre:'Exemple d\'analyse critique',items:[
        {en:"Through a postcolonial lens, the novel's depiction of the 'exotic' landscape reveals more about the colonizer's gaze than the land itself. The protagonist's journey mirrors the colonial narrative of discovery and conquest, yet the text subtly undermines this perspective through the voices of marginalized characters. The formalist reading — focusing on the fragmented narrative structure — reinforces this interpretation: the broken chronology mirrors the disruption of indigenous temporalities by colonial imposition.",fr:"À travers une lentille postcoloniale, la dépeinte du paysage 'exotique' du roman révèle plus sur le regard du colonisateur que sur la terre elle-même. Le voyage du protagoniste reflète le narratif colonial de découverte et de conquête, mais le texte sape subtilement cette perspective à travers les voix des personnages marginalisés. La lecture formaliste — se concentrant sur la structure narrative fragmentée — renforce cette interprétation : la chronologie brisée reflète la perturbation des temporalités indigènes par l'imposition coloniale."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Une critique C2 ne dit pas juste 'ce que le texte signifie' — elle dit 'comment le texte signifie' et 'pourquoi cela importe'."}
    ],
    quiz:[
      {q:"Formalism focuses on:",opts:["A) historical context","B) structure, style, and form","C) author's biography","D) reader's response"],rep:'B',expl:"Formalisme = structure, style, forme."},
      {q:"Postcolonial criticism examines:",opts:["A) nature","B) colonial legacies and identity","C) class struggle","D) gender only"],rep:'B',expl:"Postcolonialisme = héritages coloniaux et identité."},
      {q:"Feminist criticism examines:",opts:["A) only women","B) gender and power dynamics","C) economics","D) nature"],rep:'B',expl:"Féminisme = genre et dynamiques de pouvoir."},
      {q:"Psychoanalytic criticism explores:",opts:["A) conscious thoughts","B) unconscious desires and motivations","C) historical facts","D) economic factors"],rep:'B',expl:"Psychanalytique = désirs et motivations inconscients."},
      {q:"Marxist criticism focuses on:",opts:["A) gender","B) class and economic struggle","C) nature","D) form"],rep:'B',expl:"Marxisme = classe et lutte économique."},
      {q:"Ecocriticism examines:",opts:["A) economics","B) human-nature relationship","C) gender","D) form"],rep:'B',expl:"Écocritique = relation homme-nature."},
      {q:"A C2 literary critique should:",opts:["A) only summarize","B) analyze how the text creates meaning","C) only praise","D) only criticize"],rep:'B',expl:"Analyser comment le texte crée du sens."},
      {q:"'The colonizer's gaze' refers to:",opts:["A) literal sight","B) the way colonizers perceive and represent the colonized","C) a medical term","D) a painting technique"],rep:'B',expl:"Regard du colonisateur = perception et représentation des colonisés."},
      {q:"'Fragmented narrative structure' means:",opts:["A) linear story","B) non-linear, broken chronology","C) no story","D) simple story"],rep:'B',expl:"Structure narrative fragmentée = chronologie non linéaire."},
      {q:"A critical lens is:",opts:["A) a physical object","B) a theoretical perspective for analysis","C) a camera","D) a mirror"],rep:'B',expl:"Lentille théorique = perspective d'analyse."}
    ]
  },

  {
    id:'write_c2_m4',
    titre:'Writing — Discours et Présentations Rhétoriques',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Rédiger des discours persuasifs de niveau C2",
      "Utiliser des techniques rhétoriques classiques",
      "Structurer un discours pour l'impact maximal"
    ],
    contenu:[
      {type:'intro',texte:"Le discours rhétorique C2 combine la persuasion aristotélicienne (ethos, pathos, logos) avec des techniques stylistiques avancées pour créer un impact mémorable."},
      {type:'tableau',titre:'Structure d\'un discours C2',headers:["Partie","Technique","Exemple"],rows:[
        ["Exordium (ouverture)","Hook émotionnel ou intellectuel","We stand at a crossroads that will define our generation."],
        ["Narratio (contexte)","Poser le contexte","For decades, we have ignored the warning signs."],
        ["Propositio (thèse)","Énoncer la position","The time for incremental change has passed."],
        ["Confirmatio (preuves)","Arguments + preuves","The data is unequivocal. The science is settled."],
        ["Refutatio (réfutation)","Anticiper et réfuter","Some will say this is too costly. But what is the cost of inaction?"],
        ["Peroratio (conclusion)","Appel à l'action + émotion","Let us be the generation that chose courage over comfort."]
      ]},
      {type:'regle',titre:'Techniques rhétoriques clés',headers:["Technique","Description","Exemple"],rows:[
        ["Tricolon","Trois éléments parallèles","Government of the people, by the people, for the people."],
        ["Anaphora","Répétition en début de phrase","We shall fight on the beaches, we shall fight on the landing grounds..."],
        ["Epistrophe","Répétition en fin de phrase","...of the people, by the people, for the people."],
        ["Rhetorical question","Question sans réponse attendue","If not us, then who? If not now, then when?"],
        ["Antithesis","Contraste","One small step for man, one giant leap for mankind."],
        ["Allusion","Référence culturelle","We must not be the Nero who fiddles while Rome burns."]
      ]},
      {type:'exemples',titre:'Exemple de discours C2',items:[
        {en:"We stand at a crossroads that will define our generation. For decades, we have ignored the warning signs — the rising temperatures, the vanishing species, the displaced communities. The time for incremental change has passed. The data is unequivocal. The science is settled. Some will say this is too costly. But what is the cost of inaction? What is the price of a livable planet? Let us be the generation that chose courage over comfort, action over apathy, and hope over despair.",fr:"Nous nous tenons à un carrefour qui définira notre génération. Pendant des décennies, nous avons ignoré les signes avant-coureurs — les températures montantes, les espèces disparaissantes, les communautés déplacées. Le temps du changement incrémental est passé. Les données sont sans équivoque. La science est établie. Certains diront que c'est trop coûteux. Mais quel est le coût de l'inaction ? Quel est le prix d'une planète vivable ? Soyons la génération qui a choisi le courage plutôt que le confort, l'action plutôt que l'apathie, et l'espoir plutôt que le désespoir."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un discours C2 utilise le rythme (tricolon), la répétition (anaphore), et le contraste (antithèse) pour créer un impact mémorable."}
    ],
    quiz:[
      {q:"'Exordium' is the:",opts:["A) conclusion","B) opening","C) middle","D) evidence"],rep:'B',expl:"Exordium = ouverture."},
      {q:"'Peroratio' is the:",opts:["A) opening","B) conclusion","C) evidence","D) context"],rep:'B',expl:"Peroratio = conclusion."},
      {q:"Tricolon uses:",opts:["A) two elements","B) three parallel elements","C) four elements","D) no elements"],rep:'B',expl:"Tricolon = trois éléments parallèles."},
      {q:"Anaphora repeats at the:",opts:["A) end","B) beginning","C) middle","D) randomly"],rep:'B',expl:"Anaphore = répétition en début de phrase."},
      {q:"Epistrophe repeats at the:",opts:["A) beginning","B) end","C) middle","D) randomly"],rep:'B',expl:"Epistrophe = répétition en fin de phrase."},
      {q:"A rhetorical question:",opts:["A) expects an answer","B) does not expect an answer","C) is a command","D) is a statement"],rep:'B',expl:"Question rhétorique = pas de réponse attendue."},
      {q:"Antithesis uses:",opts:["A) similarity","B) contrast","C) repetition","D) no structure"],rep:'B',expl:"Antithèse = contraste."},
      {q:"'If not us, then who? If not now, then when?' uses:",opts:["A) tricolon","B) rhetorical question + parallelism","C) epistrophe","D) allusion"],rep:'B',expl:"Question rhétorique + parallélisme."},
      {q:"'Government of the people, by the people, for the people' uses:",opts:["A) anaphora","B) epistrophe","C) tricolon","D) all of the above"],rep:'D',expl:"Les trois techniques sont présentes."},
      {q:"Ethos, pathos, logos are:",opts:["A) types of food","B) modes of persuasion","C) types of essays","D) literary genres"],rep:'B',expl:"Modes de persuasion aristotéliciens."}
    ]
  },

  {
    id:'write_c2_m5',
    titre:'Writing — Polémiques et Essais d\'Opinion',
    niveau:'C2',
    duree:35,
    objectifs:[
      "Rédiger des essais d'opinion persuasifs et nuancés",
      "Argumenter sur des sujets controversés avec équilibre",
      "Utiliser le langage de la persuasion éthique"
    ],
    contenu:[
      {type:'intro',texte:"Les essais d'opinion C2 exigent une capacité à argumenter avec force tout en reconnaissant la complexité des questions controversées."},
      {type:'tableau',titre:'Stratégies argumentatives',headers:["Stratégie","Technique","Exemple"],rows:[
        ["Concession stratégique","Reconnaître un point valide de l'opposition","Critics are right to point out that..."],
        ["Reframing","Reformuler le débat","The question is not whether X, but how X."],
        ["Appeal to shared values","Invoquer des valeurs communes","We all agree that..."],
        ["Historical analogy","Utiliser des précédents historiques","History teaches us that..."],
        ["Future projection","Projeter les conséquences","If we continue on this path, future generations will..."],
        ["Moral imperative","Invoquer l'obligation morale","We have a duty to..."],
        ["Call to action","Appel à l'action concret","The time has come to..."]
      ]},
      {type:'regle',titre:'Éthique de l\'argumentation C2',texte:"• Ne caricaturez pas l'opposition (évitez le straw man)\n• Reconnaissez les zones grises\n• Basez vos arguments sur des faits, pas sur des émotions seules\n• Distinguez correlation et causation\n• Admettez les limites de votre position"},
      {type:'exemples',titre:'Exemple d\'essai d\'opinion C2',items:[
        {en:"Critics are right to point out that regulation can stifle innovation. But the question is not whether to regulate, but how to regulate intelligently. History teaches us that unregulated markets, left to their own devices, tend toward concentration and abuse. We all agree that innovation drives progress. We also agree that progress without guardrails leads to disaster. We have a duty to future generations to build systems that harness innovation while protecting the vulnerable. The time has come to move beyond the false dichotomy of regulation versus innovation.",fr:"Les critiques ont raison de souligner que la réglementation peut étouffer l'innovation. Mais la question n'est pas de savoir s'il faut réglementer, mais comment réglementer intelligemment. L'histoire nous enseigne que les marchés non réglementés, livrés à eux-mêmes, tendent vers la concentration et l'abus. Nous sommes tous d'accord que l'innovation stimule le progrès. Nous sommes également d'accord que le progrès sans garde-fous mène au désastre. Nous avons le devoir envers les générations futures de construire des systèmes qui exploitent l'innovation tout en protégeant les vulnérables. Le temps est venu de dépasser la fausse dichotomie entre réglementation et innovation."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un essai d'opinion C2 persuade en reconnaissant la complexité, pas en la niant."}
    ],
    quiz:[
      {q:"A 'straw man' is:",opts:["A) a strong argument","B) a misrepresented version of the opposition","C) a valid point","D) a conclusion"],rep:'B',expl:"Homme de paille = version déformée de l'opposition."},
      {q:"'Reframing' means:",opts:["A) keeping the same view","B) changing how the issue is presented","C) ignoring","D) agreeing"],rep:'B',expl:"Reformuler la présentation du problème."},
      {q:"'False dichotomy' means:",opts:["A) two real options","B) presenting only two options when more exist","C) no options","D) all options"],rep:'B',expl:"Faux dilemme = seulement deux options alors qu'il y en a plus."},
      {q:"'History teaches us that' uses:",opts:["A) future projection","B) historical analogy","C) moral imperative","D) call to action"],rep:'B',expl:"Analogie historique."},
      {q:"'We have a duty to' invokes:",opts:["A) logic","B) moral imperative","C) emotion","D) data"],rep:'B',expl:"Impératif moral."},
      {q:"'The time has come to' is:",opts:["A) a question","B) a call to action","C) a conclusion","D) a fact"],rep:'B',expl:"Appel à l'action."},
      {q:"Ethical argumentation requires:",opts:["A) caricaturing the opposition","B) acknowledging complexity","C) ignoring facts","D) emotional appeals only"],rep:'B',expl:"Reconnaître la complexité."},
      {q:"'Correlation is not causation' means:",opts:["A) everything causes everything","B) two things being related doesn't mean one causes the other","C) nothing is related","D) everything is random"],rep:'B',expl:"Corrélation ≠ causalité."},
      {q:"'Guardrails' in this context means:",opts:["A) physical barriers","B) protective measures/regulations","C) roads","D) fences"],rep:'B',expl:"Mesures protectrices/réglementations."},
      {q:"A C2 opinion essay should:",opts:["A) ignore nuance","B) argue with strength while acknowledging complexity","C) only use emotion","D) only use data"],rep:'B',expl:"Argumenter avec force tout en reconnaissant la complexité."}
    ]
  }
]

})()