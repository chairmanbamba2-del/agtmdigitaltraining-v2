/* modules-agtm-a2.js — AGTM Academy A2 Modules v1.0
 * 19 modules complets A2 avec contenu riche et quiz (10 questions chacun)
 * Basé sur les PDFs AGTM : MonGuideBEPC, ObjectifBac, Listening/Speaking, Pronouns
 */
;(function () {
'use strict'

window._AGTM_A2_MODS = [
  // ── GRAMMAIRE A2 ──────────────────────────────────────────────────

  {
    id:'gram_a2_m4',
    titre:'Le Futur — Will vs Going to',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Utiliser WILL pour les décisions spontanées et promesses",
      "Utiliser GOING TO pour les intentions planifiées",
      "Distinguer les deux formes dans le contexte"
    ],
    contenu:[
      {type:'intro',texte:"En anglais, il existe plusieurs façons de parler du futur. Les deux plus courantes sont WILL et GOING TO. La différence principale réside dans le degré de planification."},
      {type:'tableau',titre:'Will vs Going to',headers:["Critère","WILL","GOING TO"],rows:[
        ["Décision","Spontanée (au moment de parler)","Planifiée (décidée avant)"],
        ["Structure","will + verbe base","am/is/are + going to + verbe base"],
        ["Exemple","I'll help you carry that.","I'm going to study medicine."],
        ["Négatif","will not (won't)","am/is/are not going to"],
        ["Question","Will you come?","Are you going to travel?"]
      ]},
      {type:'regle',titre:'Quand utiliser WILL',texte:"• Décisions spontanées : I'll have a coffee, please.\n• Promesses : I will call you tonight.\n• Prédictions (opinion) : I think it will rain.\n• Offres : I'll help you with your bags."},
      {type:'regle',titre:'Quand utiliser GOING TO',texte:"• Intentions planifiées : I'm going to visit my grandmother this weekend.\n• Prédictions (évidence visible) : Look at those clouds — it's going to rain.\n• Plans futurs : She's going to start a new job next month."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"I'll answer the phone. — I'm going to study law at university.",fr:"Je vais répondre au téléphone. (spontané) — Je vais étudier le droit. (planifié)"},
        {en:"She won't pass if she doesn't study. — He's going to travel to London next year.",fr:"Il ne réussira pas s'il n'étudie pas. — Il va voyager à Londres l'an prochain."},
        {en:"Will you come to my wedding? — Are you going to buy a new car?",fr:"Viendras-tu à mon mariage ? — Vas-tu acheter une nouvelle voiture ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Si tu viens de décider → WILL. Si tu avais déjà prévu → GOING TO. Le présent continu peut aussi exprimer un arrangement fixé : We're meeting at 3 p.m."}
    ],
    quiz:[
      {q:"I ___ help you — don't worry! (spontaneous decision)",opts:["A) am going to","B) will","C) am","D) do"],rep:'B',expl:"Décision spontanée → will."},
      {q:"She ___ travel to London next year. (planned)",opts:["A) will","B) is going to","C) goes","D) went"],rep:'B',expl:"Intention planifiée → is going to."},
      {q:"Look at those clouds! It ___ rain.",opts:["A) will","B) is going to","C) rains","D) rained"],rep:'B',expl:"Prédiction basée sur une évidence → going to."},
      {q:"I think she ___ pass the exam.",opts:["A) is going to","B) will","C) goes","D) is"],rep:'B',expl:"Prédiction basée sur une opinion (I think) → will."},
      {q:"___ you come to my party? (invitation)",opts:["A) Are","B) Do","C) Will","D) Have"],rep:'C',expl:"Invitation future → Will you come?"},
      {q:"He ___ not buy a new car. He doesn't have money.",opts:["A) will","B) is going to","C) does","D) has"],rep:'B',expl:"Intention → is going to (négatif : is not going to)."},
      {q:"We ___ meeting at 3 p.m. tomorrow. (arrangement)",opts:["A) will","B) are","C) go","D) do"],rep:'B',expl:"Arrangement fixé → présent continu : We are meeting."},
      {q:"I promise I ___ tell anyone. (promise)",opts:["A) am going to","B) won't","C) don't","D) isn't"],rep:'B',expl:"Promesse négative → won't (will not)."},
      {q:"They ___ start a new business next month.",opts:["A) will","B) are going to","C) go","D) went"],rep:'B',expl:"Plan futur → are going to."},
      {q:"'I'll' is the contraction of:",opts:["A) I am","B) I will","C) I have","D) I do"],rep:'B',expl:"I'll = I will."}
    ]
  },

  {
    id:'gram_a2_m5',
    titre:'Comparatifs et Superlatifs',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Former les comparatifs (-er than / more ... than)",
      "Former les superlatifs (the -est / the most ...)",
      "Maîtriser les formes irrégulières (good→better→best)"
    ],
    contenu:[
      {type:'intro',texte:"Les comparatifs et superlatifs permettent de comparer des personnes, des objets ou des situations. C'est essentiel pour exprimer des opinions et des préférences."},
      {type:'tableau',titre:'Règles de formation',headers:["Type d'adjectif","Comparatif","Superlatif","Exemple"],rows:[
        ["1 syllabe","-er than","the -est","tall → taller → tallest"],
        ["1 syllabe (CVC)","doubler + -er","doubler + -est","big → bigger → biggest"],
        ["2 syllabes en -y","-ier than","the -iest","happy → happier → happiest"],
        ["2+ syllabes","more ... than","the most ...","expensive → more expensive → most expensive"],
        ["Irréguliers","—","—","good → better → best / bad → worse → worst"]
      ]},
      {type:'tableau',titre:'Formes irrégulières essentielles',headers:["Adjectif","Comparatif","Superlatif"],rows:[
        ["good","better than","the best"],
        ["bad","worse than","the worst"],
        ["far","farther/further than","the farthest/furthest"],
        ["little (quantity)","less than","the least"],
        ["much/many","more than","the most"]
      ]},
      {type:'regle',titre:"L'égalité — as ... as",texte:"Pour exprimer l'égalité : as + adjectif + as\n• She is as tall as her brother.\n• This book is as interesting as that one.\n• Négation : not as ... as → This car is not as fast as that one."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Abidjan is bigger than Bouaké.",fr:"Abidjan est plus grande que Bouaké."},
        {en:"English is more difficult than French for some.",fr:"L'anglais est plus difficile que le français pour certains."},
        {en:"She is the best student in the class.",fr:"Elle est la meilleure étudiante de la classe."},
        {en:"This phone is not as expensive as that one.",fr:"Ce téléphone n'est pas aussi cher que celui-là."}
      ]},
      {type:'conseil',texte:"Attention ! Ne doublez jamais la forme : She is more taller ✗ → She is taller ✓. Et n'utilisez pas 'most' avec les irréguliers : the most best ✗ → the best ✓."}
    ],
    quiz:[
      {q:"She is ___ than her sister. (tall)",opts:["A) more tall","B) taller","C) tallest","D) most tall"],rep:'B',expl:"1 syllabe → -er : taller."},
      {q:"This is the ___ movie I've ever seen. (good)",opts:["A) goodest","B) most good","C) best","D) better"],rep:'C',expl:"Irrégulier : good → best."},
      {q:"English is ___ difficult than math.",opts:["A) more","B) most","C) -er","D) as"],rep:'A',expl:"2+ syllabes → more + adjectif."},
      {q:"He is the ___ student in the school. (intelligent)",opts:["A) most intelligent","B) intelligenter","C) more intelligent","D) intelligentest"],rep:'A',expl:"2+ syllabes → the most + adjectif."},
      {q:"My house is ___ as yours. (big)",opts:["A) as big","B) bigger","C) biggest","D) more big"],rep:'A',expl:"Égalité → as big as."},
      {q:"This exercise is ___ than the last one. (bad)",opts:["A) badder","B) more bad","C) worse","D) worst"],rep:'C',expl:"Irrégulier : bad → worse."},
      {q:"She runs ___ than me. (fast)",opts:["A) more fast","B) faster","C) fastest","D) most fast"],rep:'B',expl:"1 syllabe → -er : faster."},
      {q:"This is the ___ day of my life. (happy)",opts:["A) happiest","B) most happy","C) happier","D) happyest"],rep:'A',expl:"2 syllabes en -y → -iest : happiest."},
      {q:"A car is ___ than a bicycle.",opts:["A) expensive","B) more expensive","C) most expensive","D) expensiver"],rep:'B',expl:"Comparatif long → more expensive."},
      {q:"The Nile is the ___ river in the world.",opts:["A) long","B) longer","C) longest","D) more long"],rep:'C',expl:"Superlatif court → -est : longest."}
    ]
  },

  {
    id:'gram_a2_m6',
    titre:'Les Questions — Formation et Types',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Former les questions Yes/No avec do/does/did",
      "Former les questions WH- (What, Where, When, Why, How)",
      "Utiliser les question tags correctement"
    ],
    contenu:[
      {type:'intro',texte:"Poser des questions est essentiel pour communiquer. En anglais, les questions se forment par inversion du sujet et de l'auxiliaire, ou avec do/does/did au présent et passé simple."},
      {type:'tableau',titre:'Mots interrogatifs WH-',headers:["Mot","Traduction","Exemple"],rows:[
        ["What","Quoi / Quel","What is your name?"],
        ["Where","Où","Where do you live?"],
        ["When","Quand","When did she arrive?"],
        ["Why","Pourquoi","Why are you late?"],
        ["Who","Qui (sujet)","Who called you?"],
        ["Which","Lequel","Which bag is yours?"],
        ["How","Comment","How are you?"],
        ["How much/many","Combien","How much does it cost?"]
      ]},
      {type:'tableau',titre:'Formation des questions',headers:["Type","Structure","Exemple"],rows:[
        ["Yes/No (présent)","Do/Does + sujet + verbe ?","Do you speak English?"],
        ["Yes/No (passé)","Did + sujet + verbe base ?","Did you go yesterday?"],
        ["Yes/No (BE)","BE + sujet ?","Are you happy?"],
        ["WH-","WH + aux + sujet + verbe ?","Where do you live?"],
        ["Who (sujet)","Who + verbe ?","Who called you?"]
      ]},
      {type:'regle',titre:'Question tags',texte:"Phrase affirmative → tag négatif : You're from Abidjan, aren't you?\nPhrase négative → tag positif : She doesn't like coffee, does she?\nI am → aren't I? (exception) : I'm late, aren't I?"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Do you speak English? — Yes, I do.",fr:"Parlez-vous anglais ? — Oui."},
        {en:"What time does the bus leave?",fr:"À quelle heure part le bus ?"},
        {en:"Why didn't she come yesterday?",fr:"Pourquoi n'est-elle pas venue hier ?"},
        {en:"You're a student, aren't you?",fr:"Tu es étudiant, n'est-ce pas ?"}
      ]},
      {type:'conseil',texte:"Quand Who est sujet de la question, pas besoin d'auxiliaire : Who came? / Who called? Mais quand Who est objet : Who did you see?"}
    ],
    quiz:[
      {q:"___ you speak French?",opts:["A) Does","B) Do","C) Are","D) Is"],rep:'B',expl:"Présent simple avec you → Do."},
      {q:"___ she go to school yesterday?",opts:["A) Does","B) Do","C) Did","D) Was"],rep:'C',expl:"Passé simple → Did."},
      {q:"___ is your name?",opts:["A) Where","B) When","C) What","D) Who"],rep:'C',expl:"Demander le nom → What."},
      {q:"___ do you live?",opts:["A) What","B) Where","C) When","D) Who"],rep:'B',expl:"Demander le lieu → Where."},
      {q:"___ called you last night?",opts:["A) Who","B) Whom","C) Which","D) What"],rep:'A',expl:"Qui (sujet) → Who."},
      {q:"She is your sister, ___?",opts:["A) is she","B) isn't she","C) does she","D) doesn't she"],rep:'B',expl:"Affirmative avec is → tag négatif : isn't she?"},
      {q:"They don't like coffee, ___?",opts:["A) do they","B) don't they","C) are they","D) aren't they"],rep:'A',expl:"Négative → tag positif : do they?"},
      {q:"___ much does this cost?",opts:["A) What","B) Where","C) How","D) When"],rep:'C',expl:"Combien (prix) → How much."},
      {q:"___ did she arrive? — At 3 p.m.",opts:["A) What","B) Where","C) When","D) Who"],rep:'C',expl:"Demander le moment → When."},
      {q:"'Why are you late?' asks for:",opts:["A) a place","B) a reason","C) a time","D) a person"],rep:'B',expl:"Why = pourquoi (raison)."}
    ]
  },

  {
    id:'gram_a2_m7',
    titre:'Adverbes de Fréquence et de Manière',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Utiliser les adverbes de fréquence (always, usually, often, sometimes, rarely, never)",
      "Former les adverbes de manière en -ly",
      "Placer les adverbes correctement dans la phrase"
    ],
    contenu:[
      {type:'intro',texte:"Les adverbes précisent comment, quand et avec quelle fréquence une action se produit. Ils enrichissent vos phrases et rendent votre anglais plus naturel."},
      {type:'tableau',titre:'Adverbes de fréquence',headers:["Adverbe","Fréquence","Position","Exemple"],rows:[
        ["always","100%","avant verbe / après BE","I always study."],
        ["usually","80%","avant verbe / après BE","She usually arrives early."],
        ["often","60%","avant verbe / après BE","They often travel."],
        ["sometimes","40%","début/milieu/fin","Sometimes I cook."],
        ["rarely","15%","avant verbe / après BE","He rarely eats out."],
        ["never","0%","avant verbe / après BE","I never skip breakfast."]
      ]},
      {type:'tableau',titre:'Formation des adverbes de manière',headers:["Adjectif","Règle","Adverbe","Exemple"],rows:[
        ["slow","+ ly","slowly","She speaks slowly."],
        ["quick","+ ly","quickly","He runs quickly."],
        ["careful","+ ly","carefully","Drive carefully."],
        ["easy","y → ily","easily","She easily passed."],
        ["good","irrégulier","well","She sings well."],
        ["fast","même forme","fast","He runs fast."],
        ["hard","même forme","hard","She works hard."]
      ]},
      {type:'regle',titre:'Pièges à éviter',texte:"• hard (adverbe = avec effort) ≠ hardly (adverbe = à peine)\n• late (adverbe = en retard) ≠ lately (adverbe = récemment)\n• good (adjectif) ≠ well (adverbe) : She is good. / She sings well."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"She always arrives on time.",fr:"Elle arrive toujours à l'heure."},
        {en:"The student answered correctly.",fr:"L'étudiant a répondu correctement."},
        {en:"She speaks English fluently.",fr:"Elle parle anglais couramment."},
        {en:"He rarely eats meat.",fr:"Il mange rarement de la viande."}
      ]},
      {type:'conseil',texte:"Position : Les adverbes de manière se placent APRÈS le verbe ou le complément. Jamais entre le verbe et son objet direct : She speaks English well ✓ (pas 'She speaks well English')."}
    ],
    quiz:[
      {q:"She ___ arrives on time. (100%)",opts:["A) usually","B) always","C) sometimes","D) rarely"],rep:'B',expl:"100% = always."},
      {q:"He speaks English very ___.",opts:["A) good","B) well","C) goodly","D) fine"],rep:'B',expl:"Adverbe de good → well."},
      {q:"She answered the question ___.",opts:["A) correct","B) correctly","C) correctness","D) correctness"],rep:'B',expl:"Adverbe de manière → correctly."},
      {q:"I ___ eat fast food. (0%)",opts:["A) always","B) usually","C) often","D) never"],rep:'D',expl:"0% = never."},
      {q:"She works ___. (avec effort)",opts:["A) hardly","B) hard","C) hardy","D) hardly"],rep:'B',expl:"Travailler dur = work hard (pas hardly = à peine)."},
      {q:"He ___ goes to the cinema. (15%)",opts:["A) always","B) often","C) sometimes","D) rarely"],rep:'D',expl:"15% = rarely."},
      {q:"Drive ___ — it's raining.",opts:["A) careful","B) carefully","C) carefull","D) care"],rep:'B',expl:"Adverbe de manière → carefully."},
      {q:"She ___ is late for class.",opts:["A) never","B) is never","C) never is","D) does never"],rep:'B',expl:"Avec BE, l'adverbe va APRÈS : is never."},
      {q:"'Lately' means:",opts:["A) en retard","B) récemment","C) tard","D) lentement"],rep:'B',expl:"Lately = récemment."},
      {q:"He runs very ___.",opts:["A) fastly","B) fast","C) faster","D) fastest"],rep:'B',expl:"Fast = même forme en adverbe (pas 'fastly')."}
    ]
  },

  {
    id:'gram_a2_m8',
    titre:'Introduction au Present Perfect',
    niveau:'A2',
    duree:30,
    objectifs:[
      "Former le Present Perfect (have/has + participe passé)",
      "Utiliser ever, never, just, already, yet",
      "Distinguer Present Perfect et Passé Simple"
    ],
    contenu:[
      {type:'intro',texte:"Le Present Perfect est un temps qui relie le passé au présent. Il exprime des expériences de vie, des actions récentes avec conséquence présente, ou des actions commencées dans le passé et encore vraies."},
      {type:'tableau',titre:'Formation',headers:["Forme","Structure","Exemple"],rows:[
        ["Affirmatif","sujet + have/has + PP","I have visited Paris."],
        ["Négatif","sujet + have/has + not + PP","She hasn't finished yet."],
        ["Interrogatif","Have/Has + sujet + PP ?","Have you ever been to London?"],
        ["Avec since/for","have/has + PP + since/for","I have lived here since 2020."]
      ]},
      {type:'regle',titre:'Signal words du Present Perfect',texte:"• ever (dans les questions) : Have you ever eaten sushi?\n• never : I have never been to America.\n• just (action très récente) : She has just arrived.\n• already (déjà fait) : I have already done my homework.\n• yet (dans questions/négations) : Have you eaten yet? / I haven't eaten yet.\n• for + durée : I have lived here for 3 years.\n• since + point de départ : I have lived here since 2020."},
      {type:'tableau',titre:'Present Perfect vs Passé Simple',headers:["Present Perfect","Passé Simple"],rows:[
        ["Expérience de vie (sans date précise)","Moment précis dans le passé"],
        ["Action récente avec résultat présent","Action terminée, coupée du présent"],
        ["Depuis/pendant (for, since)","Hier, la semaine dernière, en 2020"],
        ["I've lost my keys. (je ne les ai toujours pas)","I lost my keys yesterday."]
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"I have never been to London.",fr:"Je ne suis jamais allé à Londres."},
        {en:"She has just finished her homework.",fr:"Elle vient de finir ses devoirs."},
        {en:"They moved to Abidjan in 2015. (passé simple — date précise)",fr:"Ils ont déménagé à Abidjan en 2015."},
        {en:"I've lived here for three years.",fr:"J'habite ici depuis trois ans."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Si vous voyez une date précise (yesterday, in 2020, last week) → Passé Simple. Si vous parlez d'une expérience sans date → Present Perfect."}
    ],
    quiz:[
      {q:"I ___ never ___ sushi before.",opts:["A) have / eaten","B) did / eat","C) have / ate","D) had / eaten"],rep:'A',expl:"Experience de vie → Present Perfect: have + eaten."},
      {q:"She ___ just ___ her homework.",opts:["A) has / finished","B) did / finish","C) have / finished","D) is / finishing"],rep:'A',expl:"Action récente avec she → has + finished."},
      {q:"Have you ___ been to Paris?",opts:["A) never","B) ever","C) yet","D) already"],rep:'B',expl:"Dans les questions → ever."},
      {q:"I haven't finished ___.",opts:["A) already","B) just","C) yet","D) ever"],rep:'C',expl:"Négation → yet."},
      {q:"She has lived here ___ 2018.",opts:["A) for","B) since","C) ago","D) before"],rep:'B',expl:"Point de départ → since."},
      {q:"I have worked here ___ five years.",opts:["A) since","B) for","C) ago","D) before"],rep:'B',expl:"Durée → for."},
      {q:"They ___ already ___ the movie.",opts:["A) have / watched","B) did / watch","C) has / watched","D) are / watching"],rep:'A',expl:"Already + Present Perfect: have + watched."},
      {q:"She ___ to London last year.",opts:["A) has gone","B) went","C) have gone","D) goes"],rep:'B',expl:"Date précise (last year) → Passé Simple: went."},
      {q:"___ you ever ___ a horse?",opts:["A) Have / ridden","B) Did / ride","C) Have / rode","D) Do / ride"],rep:'A',expl:"Experience → Have + participe passé (ridden)."},
      {q:"The train ___ just ___.",opts:["A) has / arrived","B) did / arrive","C) have / arrived","D) is / arriving"],rep:'A',expl:"Action très récente → has just arrived."}
    ]
  },

  // ── VOCABULAIRE A2 ────────────────────────────────────────────────

  {
    id:'voc_a2_m1',
    titre:'Les Vêtements et la Mode',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Nommer les vêtements courants en anglais",
      "Parler de tailles, couleurs et styles",
      "Utiliser les verbes wear, put on, take off"
    ],
    contenu:[
      {type:'intro',texte:"Les vêtements font partie de la vie quotidienne. Savoir en parler en anglais est utile pour le shopping, les descriptions et les conversations informelles."},
      {type:'lexique',titre:'Vêtements essentiels',items:[
        {en:"shirt",fr:"chemise"},{en:"blouse",fr:"chemisier"},
        {en:"trousers / pants",fr:"pantalon"},{en:"jeans",fr:"jean"},
        {en:"dress",fr:"robe"},{en:"skirt",fr:"jupe"},
        {en:"suit",fr:"costume/tailleur"},{en:"jacket",fr:"veste"},
        {en:"shoes",fr:"chaussures"},{en:"boots",fr:"bottes"},
        {en:"sandals",fr:"sandales"},{en:"hat",fr:"chapeau"},
        {en:"tie",fr:"cravate"},{en:"scarf",fr:"écharpe"}
      ]},
      {type:'tableau',titre:'Verbes liés aux vêtements',headers:["Verbe","Sens","Exemple"],rows:[
        ["wear","porter (être habillé)","She wears a red dress."],
        ["put on","mettre (action)","Put on your coat."],
        ["take off","enlever","Take off your shoes."],
        ["get dressed","s'habiller","Get dressed quickly!"],
        ["try on","essayer","Can I try this on?"],
        ["fit","aller à la taille","These shoes don't fit."],
        ["suit","aller (style/couleur)","That colour suits you."]
      ]},
      {type:'exemples',titre:'Au magasin',items:[
        {en:"Can I try on this dress?",fr:"Puis-je essayer cette robe ?"},
        {en:"What size do you wear?",fr:"Quelle taille portez-vous ?"},
        {en:"It's too big / too small.",fr:"C'est trop grand / trop petit."},
        {en:"That colour suits you perfectly.",fr:"Cette couleur te va parfaitement."}
      ]},
      {type:'conseil',texte:"Wear = état (on est habillé). Put on = action (on s'habille). She is wearing a hat (état) vs She is putting on her hat (action)."}
    ],
    quiz:[
      {q:"She ___ a beautiful dress to the party.",opts:["A) put on","B) wore","C) took off","D) tried on"],rep:'B',expl:"Porter (état) → wore (passé de wear)."},
      {q:"Can I ___ this dress on?",opts:["A) wear","B) try","C) put","D) take"],rep:'B',expl:"Essayer → try on."},
      {q:"These shoes don't ___ me.",opts:["A) suit","B) fit","C) wear","D) put"],rep:'B',expl:"Aller à la taille → fit."},
      {q:"That colour ___ you perfectly.",opts:["A) fits","B) suits","C) wears","D) puts"],rep:'B',expl:"Aller (style/couleur) → suit."},
      {q:"'Trousers' in American English is:",opts:["A) shorts","B) pants","C) jeans","D) suits"],rep:'B',expl:"Trousers (UK) = pants (US)."},
      {q:"___ off your shoes before entering.",opts:["A) Put","B) Take","C) Wear","D) Try"],rep:'B',expl:"Enlever → take off."},
      {q:"What ___ do you wear?",opts:["A) colour","B) size","C) style","D) brand"],rep:'B',expl:"Quelle taille = What size."},
      {q:"A 'scarf' is worn around the:",opts:["A) head","B) neck","C) waist","D) feet"],rep:'B',expl:"Une écharpe se porte autour du cou (neck)."},
      {q:"'Get dressed' means:",opts:["A) se déshabiller","B) s'habiller","C) essayer","D) retirer"],rep:'B',expl:"Get dressed = s'habiller."},
      {q:"She ___ her coat because it was cold.",opts:["A) took off","B) put on","C) tried on","D) wore off"],rep:'B',expl:"Mettre (action) → put on."}
    ]
  },

  {
    id:'voc_a2_m2',
    titre:'Les Transports et Voyages',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Nommer les moyens de transport en anglais",
      "Vocabulaire de l'aéroport et du voyage",
      "Demander et donner des directions"
    ],
    contenu:[
      {type:'intro',texte:"Savoir se déplacer et voyager en anglais est essentiel. Ce module couvre le vocabulaire des transports, de l'aéroport et des directions."},
      {type:'tableau',titre:'Moyens de transport',headers:["Anglais","Français","Verbe d'usage"],rows:[
        ["bus","bus","take the bus"],
        ["taxi","taxi","call / take a taxi"],
        ["motorbike","moto","ride a motorbike"],
        ["car","voiture","drive a car"],
        ["train","train","catch the train"],
        ["plane / aircraft","avion","take / board the plane"],
        ["boat / ferry","bateau / ferry","cross by ferry"],
        ["bicycle / bike","vélo","ride a bike"],
        ["on foot","à pied","walk on foot"]
      ]},
      {type:'tableau',titre:"À l'aéroport",headers:["Anglais","Français","Exemple"],rows:[
        ["airport","aéroport","The airport is 40 km away."],
        ["boarding pass","carte d'embarquement","Show your boarding pass."],
        ["departure","départ","Departure at 6 a.m."],
        ["arrival","arrivée","Estimated arrival: 2 p.m."],
        ["delay","retard","There is a 30-minute delay."],
        ["luggage / baggage","bagages","Check in your luggage."],
        ["customs","douane","Go through customs."],
        ["gate","porte d'embarquement","Gate B12"]
      ]},
      {type:'exemples',titre:'Demander des directions',items:[
        {en:"Could you tell me where the nearest bus stop is?",fr:"Pourriez-vous me dire où se trouve l'arrêt de bus le plus proche ?"},
        {en:"How do I get to the airport?",fr:"Comment aller à l'aéroport ?"},
        {en:"Go straight, then turn left at the traffic lights.",fr:"Allez tout droit, puis tournez à gauche aux feux."},
        {en:"His flight was delayed by two hours due to bad weather.",fr:"Son vol a été retardé de deux heures à cause du mauvais temps."}
      ]},
      {type:'conseil',texte:"Prépositions : by bus, by car, by plane (sans article). Mais on foot (à pied), in the car (passager), on the bus (à bord)."}
    ],
    quiz:[
      {q:"I ___ the bus to work every morning.",opts:["A) drive","B) take","C) ride","D) walk"],rep:'B',expl:"Prendre le bus → take the bus."},
      {q:"How do I get ___ the airport?",opts:["A) at","B) in","C) to","D) on"],rep:'C',expl:"Aller à → get to."},
      {q:"His flight was ___ by two hours.",opts:["A) arrived","B) delayed","C) departed","D) boarded"],rep:'B',expl:"Retardé → delayed."},
      {q:"'Boarding pass' in French is:",opts:["A) billet","B) carte d'embarquement","C) passeport","D) visa"],rep:'B',expl:"Boarding pass = carte d'embarquement."},
      {q:"Go straight, then turn ___ at the lights.",opts:["A) left","B) on","C) off","D) up"],rep:'A',expl:"Tourner à gauche → turn left."},
      {q:"I prefer travelling ___ train.",opts:["A) in","B) on","C) by","D) with"],rep:'C',expl:"Moyen de transport → by train."},
      {q:"'Luggage' means:",opts:["A) billet","B) bagages","C) passeport","D) douane"],rep:'B',expl:"Luggage = bagages."},
      {q:"You need to show your ___ at the gate.",opts:["A) luggage","B) boarding pass","C) customs","D) delay"],rep:'B',expl:"Carte d'embarquement = boarding pass."},
      {q:"'On foot' means:",opts:["A) en voiture","B) en bus","C) à pied","D) à vélo"],rep:'C',expl:"On foot = à pied."},
      {q:"'Ride a bike' uses the verb:",opts:["A) drive","B) take","C) ride","D) walk"],rep:'C',expl:"Faire du vélo → ride a bike."}
    ]
  },

  {
    id:'voc_a2_m3',
    titre:'Les Métiers et Professions',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Nommer les professions courantes en anglais",
      "Parler du travail et de la carrière",
      "Utiliser le vocabulaire du recrutement"
    ],
    contenu:[
      {type:'intro',texte:"Parler de son métier et du monde professionnel est essentiel pour les conversations et les examens. Ce module couvre les professions et le vocabulaire du travail."},
      {type:'lexique',titre:'Professions courantes',items:[
        {en:"teacher",fr:"enseignant(e)"},{en:"doctor",fr:"médecin"},
        {en:"nurse",fr:"infirmier/infirmière"},{en:"engineer",fr:"ingénieur(e)"},
        {en:"lawyer",fr:"avocat(e)"},{en:"accountant",fr:"comptable"},
        {en:"farmer",fr:"agriculteur/trice"},{en:"driver",fr:"chauffeur"},
        {en:"police officer",fr:"policier/policière"},{en:"journalist",fr:"journaliste"},
        {en:"architect",fr:"architecte"},{en:"chef / cook",fr:"cuisinier/cuisinière"},
        {en:"businessman/woman",fr:"homme/femme d'affaires"},{en:"civil servant",fr:"fonctionnaire"}
      ]},
      {type:'tableau',titre:'Le monde du travail',headers:["Expression","Français","Exemple"],rows:[
        ["apply for a job","postuler à un emploi","She applied for a teaching job."],
        ["be hired / get the job","être embauché","He got the job after the interview."],
        ["be fired","être licencié","He was fired for misconduct."],
        ["resign / quit","démissionner","She resigned to start her own business."],
        ["salary / wage","salaire","The salary is paid monthly."],
        ["promotion","promotion","He got a promotion last year."],
        ["colleague","collègue","My colleagues are very supportive."],
        ["boss / manager","patron / directeur","My manager is strict but fair."]
      ]},
      {type:'exemples',titre:'Se présenter professionnellement',items:[
        {en:"She is a doctor and works at a hospital in Abidjan.",fr:"Elle est médecin et travaille dans un hôpital à Abidjan."},
        {en:"What do you do for a living?",fr:"Que faites-vous dans la vie ?"},
        {en:"He applied for an engineering position and got the job.",fr:"Il a postulé à un poste d'ingénieur et a obtenu le poste."},
        {en:"She was promoted to Head of Department after five years.",fr:"Elle a été promue chef de département après cinq ans."}
      ]},
      {type:'conseil',texte:"Pour présenter son métier : I am a + métier (sans article pour la profession en général, mais avec article pour une personne spécifique). I am a teacher ✓ / She is a doctor ✓."}
    ],
    quiz:[
      {q:"She ___ at a hospital. (doctor)",opts:["A) teaches","B) works","C) drives","D) cooks"],rep:'B',expl:"Un médecin travaille (works) à l'hôpital."},
      {q:"What do you do ___ a living?",opts:["A) as","B) with","C) for","D) by"],rep:'C',expl:"Que faites-vous dans la vie ? = What do you do for a living?"},
      {q:"He ___ for a teaching position.",opts:["A) applied","B) worked","C) hired","D) fired"],rep:'A',expl:"Postuler → apply for."},
      {q:"'Colleague' means:",opts:["A) patron","B) collègue","C) client","D) élève"],rep:'B',expl:"Colleague = collègue."},
      {q:"She ___ to start her own business.",opts:["A) was fired","B) resigned","C) was hired","D) applied"],rep:'B',expl:"Démissionner → resign."},
      {q:"He got a ___ last year.",opts:["A) salary","B) promotion","C) colleague","D) boss"],rep:'B',expl:"Promotion = promotion."},
      {q:"'Salary' is paid:",opts:["A) daily","B) weekly","C) monthly","D) yearly"],rep:'C',expl:"Le salaire est généralement payé mensuellement."},
      {q:"A 'lawyer' works in:",opts:["A) a hospital","B) a school","C) a court","D) a farm"],rep:'C',expl:"Un avocat travaille dans un tribunal (court)."},
      {q:"'Civil servant' means:",opts:["A) homme d'affaires","B) fonctionnaire","C) agriculteur","D) chauffeur"],rep:'B',expl:"Civil servant = fonctionnaire."},
      {q:"He was ___ for misconduct.",opts:["A) hired","B) promoted","C) fired","D) applied"],rep:'C',expl:"Licencié → fired."}
    ]
  },

  {
    id:'voc_a2_m4',
    titre:'Les Loisirs et Sports',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Nommer les sports et loisirs en anglais",
      "Parler de ses hobbies et activités",
      "Utiliser le vocabulaire du divertissement"
    ],
    contenu:[
      {type:'intro',texte:"Les loisirs et sports sont des sujets de conversation universels. Ce module vous donne le vocabulaire pour parler de vos activités préférées."},
      {type:'lexique',titre:'Sports populaires',items:[
        {en:"football / soccer",fr:"football"},{en:"basketball",fr:"basketball"},
        {en:"tennis",fr:"tennis"},{en:"athletics / track and field",fr:"athlétisme"},
        {en:"swimming",fr:"natation"},{en:"cycling",fr:"cyclisme"},
        {en:"boxing",fr:"boxe"},{en:"wrestling",fr:"catch/lutte"},
        {en:"volleyball",fr:"volleyball"},{en:"rugby",fr:"rugby"},
        {en:"martial arts",fr:"arts martiaux"},{en:"gymnastics",fr:"gymnastique"}
      ]},
      {type:'lexique',titre:'Loisirs et divertissement',items:[
        {en:"reading",fr:"lecture"},{en:"listening to music",fr:"écouter de la musique"},
        {en:"watching movies/TV",fr:"regarder des films/la télé"},{en:"playing video games",fr:"jouer aux jeux vidéo"},
        {en:"cooking",fr:"cuisine"},{en:"gardening",fr:"jardinage"},
        {en:"painting / drawing",fr:"peinture / dessin"},{en:"dancing",fr:"danse"},
        {en:"travelling",fr:"voyage"},{en:"shopping",fr:"shopping"}
      ]},
      {type:'tableau',titre:'Expressions liées aux loisirs',headers:["Expression","Français","Exemple"],rows:[
        ["I'm into...","Je suis passionné par...","I'm into football."],
        ["I'm keen on...","J'adore...","She's keen on dancing."],
        ["I enjoy...","J'apprécie...","I enjoy reading."],
        ["I'm a fan of...","Je suis fan de...","He's a fan of basketball."],
        ["In my free time...","Pendant mon temps libre...","In my free time, I cook."],
        ["My hobby is...","Mon hobby est...","My hobby is gardening."]
      ]},
      {type:'exemples',titre:'Parler de ses loisirs',items:[
        {en:"In my free time, I enjoy playing football with my friends.",fr:"Pendant mon temps libre, j'aime jouer au football avec mes amis."},
        {en:"She is keen on dancing — she takes classes twice a week.",fr:"Elle adore la danse — elle prend des cours deux fois par semaine."},
        {en:"I'm a big fan of basketball. I watch every NBA game.",fr:"Je suis un grand fan de basketball. Je regarde chaque match NBA."},
        {en:"My hobby is painting. I paint landscapes and portraits.",fr:"Mon hobby est la peinture. Je peins des paysages et des portraits."}
      ]},
      {type:'conseil',texte:"En anglais, après enjoy/like/love, on utilise le gérondif (-ing) : I enjoy playing football. Pas 'I enjoy to play'."}
    ],
    quiz:[
      {q:"'Football' in American English is:",opts:["A) rugby","B) soccer","C) basketball","D) tennis"],rep:'B',expl:"Football (UK) = soccer (US)."},
      {q:"I'm ___ football. (passionné)",opts:["A) into","B) on","C) at","D) for"],rep:'A',expl:"I'm into = je suis passionné par."},
      {q:"She enjoys ___ to music.",opts:["A) listen","B) listening","C) to listen","D) listened"],rep:'B',expl:"After enjoy → -ing: listening."},
      {q:"'In my free time' means:",opts:["A) au travail","B) pendant mon temps libre","C) en vacances","D) le week-end"],rep:'B',expl:"In my free time = pendant mon temps libre."},
      {q:"'Swimming' is a:",opts:["A) team sport","B) individual sport","C) board game","D) hobby only"],rep:'B',expl:"La natation est un sport individuel."},
      {q:"He's a big ___ of basketball.",opts:["A) fan","B) player","C) coach","D) team"],rep:'A',expl:"Fan = fan/supporter."},
      {q:"'Martial arts' in French is:",opts:["A) sports collectifs","B) arts martiaux","C) jeux vidéo","D) sports nautiques"],rep:'B',expl:"Martial arts = arts martiaux."},
      {q:"I enjoy ___ in my garden.",opts:["A) gardening","B) garden","C) gardener","D) gardens"],rep:'A',expl:"After enjoy → -ing: gardening."},
      {q:"'Cycling' means:",opts:["A) natation","B) cyclisme","C) course","D) boxe"],rep:'B',expl:"Cycling = cyclisme."},
      {q:"My ___ is painting.",opts:["A) job","B) hobby","C) sport","D) work"],rep:'B',expl:"Hobby = passe-temps/loisir."}
    ]
  },

  // ── LISTENING & SPEAKING A2 ───────────────────────────────────────

  {
    id:'listen_a2_m1',
    titre:'Listening — Conversations au Quotidien',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Comprendre des dialogues de la vie quotidienne",
      "Identifier les expressions idiomatiques simples",
      "Suivre des conversations avec plusieurs interlocuteurs"
    ],
    contenu:[
      {type:'intro',texte:"Les conversations quotidiennes en anglais utilisent des expressions et des structures que vous devez reconnaître rapidement. Ce module vous entraîne à comprendre des échanges réels."},
      {type:'tableau',titre:'Expressions courantes',headers:["Expression","Sens","Exemple"],rows:[
        ["How's it going?","Comment ça va ?","How's it going? — Pretty good!"],
        ["What's up?","Quoi de neuf ?","Hey! What's up? — Not much."],
        ["No worries","Pas de souci","Thanks! — No worries."],
        ["Sounds good","Ça me va","Let's meet at 5. — Sounds good."],
        ["I'm running late","Je suis en retard","Sorry, I'm running late."],
        ["Take your time","Prends ton temps","No rush — take your time."],
        ["See you later","À plus tard","Bye! — See you later!"],
        ["That makes sense","Ça a du sens","Yes, that makes sense."]
      ]},
      {type:'exemples',titre:'Dialogue type — Entre amis',items:[
        {en:"— Hey Awa! How's it going?\n— Pretty good! What's up?\n— Not much. Do you want to grab lunch?\n— Sounds good! Where should we go?\n— How about that new restaurant near the school?\n— I'm fine with that. Let's meet at noon.\n— Perfect! See you then.\n— See you!",fr:"— Salut Awa ! Comment ça va ?\n— Ça va bien ! Quoi de neuf ?\n— Pas grand-chose. Tu veux aller déjeuner ?\n— Ça me va ! Où on va ?\n— Et ce nouveau restaurant près de l'école ?\n— Ça me va. Retrouvons-nous à midi.\n— Parfait ! À tout à l'heure.\n— À plus !"}
      ]},
      {type:'regle',titre:'Compréhension orale — Stratégies',texte:"1. Écoutez d'abord pour le sens général (gist)\n2. Écoutez une deuxième fois pour les détails\n3. Notez les mots-clés (noms, verbes, nombres)\n4. Ne paniquez pas si vous ne comprenez pas tout — concentrez-vous sur l'essentiel"},
      {type:'conseil',texte:"Astuce AGTM : Regardez des séries en anglais avec sous-titres anglais. Commencez par des programmes simples (dessins animés, sitcoms) avant de passer à des contenus plus complexes."}
    ],
    quiz:[
      {q:"'How's it going?' means:",opts:["A) Comment vas-tu ?","B) Où vas-tu ?","C) Que fais-tu ?","D) Qui est-ce ?"],rep:'A',expl:"How's it going? = Comment ça va ?"},
      {q:"'No worries' is used to say:",opts:["A) I'm worried","B) No problem","C) I'm sorry","D) Goodbye"],rep:'B',expl:"No worries = Pas de souci."},
      {q:"'Sounds good' expresses:",opts:["A) disagreement","B) agreement","C) confusion","D) anger"],rep:'B',expl:"Sounds good = Ça me va (accord)."},
      {q:"'I'm running late' means:",opts:["A) Je cours vite","B) Je suis en retard","C) Je cours tard","D) Je suis fatigué"],rep:'B',expl:"Running late = en retard."},
      {q:"'Take your time' means:",opts:["A) Dépêche-toi","B) Prends ton temps","C) Regarde l'heure","D) Va vite"],rep:'B',expl:"Take your time = Prends ton temps."},
      {q:"'See you later' is:",opts:["A) a greeting","B) a farewell","C) a question","D) a complaint"],rep:'B',expl:"See you later = À plus tard (au revoir)."},
      {q:"'That makes sense' means:",opts:["A) C'est absurde","B) Ça a du sens","C) C'est drôle","D) C'est triste"],rep:'B',expl:"That makes sense = Ça a du sens."},
      {q:"'What's up?' is:",opts:["A) formal","B) informal","C) very formal","D) rude"],rep:'B',expl:"What's up? = informel."},
      {q:"'How about...' is used to:",opts:["A) ask a question","B) make a suggestion","C) give an order","D) complain"],rep:'B',expl:"How about... = Et si on... (suggestion)."},
      {q:"'Let's meet at noon.' 'Noon' is:",opts:["A) 6 a.m.","B) 12 p.m.","C) 6 p.m.","D) 12 a.m."],rep:'B',expl:"Noon = midi (12 p.m.)."}
    ]
  },

  {
    id:'listen_a2_m2',
    titre:'Listening — Au Restaurant et au Magasin',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Comprendre des conversations commerciales",
      "Commander au restaurant en anglais",
      "Gérer les plaintes et les retours"
    ],
    contenu:[
      {type:'intro',texte:"Les situations commerciales (restaurant, magasin) sont parmi les plus courantes quand on voyage ou qu'on parle anglais. Ce module vous prépare à ces échanges."},
      {type:'tableau',titre:'Au restaurant',headers:["Anglais","Français"],rows:[
        ["A table for two, please.","Une table pour deux, s'il vous plaît."],
        ["Can I see the menu, please?","Puis-je voir le menu ?"],
        ["I'd like the chicken with rice.","Je voudrais le poulet avec du riz."],
        ["Can I have a glass of water?","Puis-je avoir un verre d'eau ?"],
        ["How much is the bill?","Combien coûte l'addition ?"],
        ["Can I pay by card?","Puis-je payer par carte ?"],
        ["The food was delicious!","La nourriture était délicieuse !"],
        ["Keep the change.","Gardez la monnaie."]
      ]},
      {type:'tableau',titre:'Au magasin',headers:["Anglais","Français"],rows:[
        ["Can I help you?","Puis-je vous aider ?"],
        ["I'm just looking, thank you.","Je regarde seulement, merci."],
        ["How much does this cost?","Combien ça coûte ?"],
        ["Do you have this in a larger size?","Avez-vous ceci en plus grand ?"],
        ["Can I try this on?","Puis-je l'essayer ?"],
        ["I'd like to return this.","Je voudrais retourner ceci."],
        ["Where is the fitting room?","Où est la cabine d'essayage ?"],
        ["It's on sale.","C'est en promotion."]
      ]},
      {type:'exemples',titre:'Dialogue — Au restaurant',items:[
        {en:"— Good evening! A table for two, please.\n— Of course. Follow me, please.\n— Can I see the menu?\n— Here you go. Are you ready to order?\n— Yes, I'd like the grilled fish with rice.\n— And to drink?\n— A glass of water, please.\n— Excellent choice! Your order will be ready in 15 minutes.",fr:"— Bonsoir ! Une table pour deux, s'il vous plaît.\n— Bien sûr. Suivez-moi.\n— Puis-je voir le menu ?\n— Le voici. Êtes-vous prêt à commander ?\n— Oui, je voudrais le poisson grillé avec du riz.\n— Et comme boisson ?\n— Un verre d'eau, s'il vous plaît.\n— Excellent choix ! Votre commande sera prête dans 15 minutes."}
      ]},
      {type:'conseil',texte:"Formules de politesse essentielles : Please, Thank you, Could you..., I'd like..., Excuse me. Toujours les utiliser dans les situations commerciales."}
    ],
    quiz:[
      {q:"'A table for two, please.' is said at:",opts:["A) a shop","B) a restaurant","C) a school","D) a hospital"],rep:'B',expl:"Une table pour deux = au restaurant."},
      {q:"'Can I see the menu?' means:",opts:["A) Puis-je voir le menu ?","B) Puis-je voir l'addition ?","C) Puis-je voir la carte ?","D) Puis-je voir le chef ?"],rep:'A',expl:"Menu = menu/carte du restaurant."},
      {q:"'How much is the bill?' asks for:",opts:["A) the time","B) the price","C) the menu","D) the address"],rep:'B',expl:"The bill = l'addition (le prix)."},
      {q:"'I'm just looking' is said in:",opts:["A) a restaurant","B) a shop","C) a school","D) a hospital"],rep:'B',expl:"Je regarde seulement = au magasin."},
      {q:"'Can I try this on?' is asked in:",opts:["A) a restaurant","B) a fitting room","C) a classroom","D) a hospital"],rep:'B',expl:"Puis-je l'essayer ? = cabine d'essayage."},
      {q:"'It's on sale' means:",opts:["A) C'est cher","B) C'est en promotion","C) C'est gratuit","D) C'est cassé"],rep:'B',expl:"On sale = en promotion."},
      {q:"'Keep the change.' is said when:",opts:["A) paying","B) ordering","C) leaving a tip","D) returning"],rep:'C',expl:"Gardez la monnaie = pourboire."},
      {q:"'I'd like to return this.' is said in:",opts:["A) a restaurant","B) a shop","C) a school","D) a bank"],rep:'B',expl:"Retourner un article = au magasin."},
      {q:"'Where is the fitting room?' asks for:",opts:["A) the toilet","B) the cashier","C) the changing area","D) the exit"],rep:'C',expl:"Fitting room = cabine d'essayage."},
      {q:"'Your order will be ready in 15 minutes.' means:",opts:["A) It's ready now","B) Wait 15 minutes","C) It's cancelled","D) It's free"],rep:'B',expl:"Ready in 15 minutes = attendre 15 minutes."}
    ]
  },

  {
    id:'speak_a2_m1',
    titre:'Speaking — Raconter des Événements Passés',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Raconter des événements passés de manière cohérente",
      "Utiliser les connecteurs temporels (first, then, after that, finally)",
      "Employer les temps du passé correctement"
    ],
    contenu:[
      {type:'intro',texte:"Raconter des événements passés est une compétence essentielle. Ce module vous aide à structurer vos récits et à utiliser les bons temps verbaux."},
      {type:'tableau',titre:'Connecteurs temporels',headers:["Connecteur","Sens","Exemple"],rows:[
        ["First","D'abord","First, we woke up early."],
        ["Then","Ensuite","Then we had breakfast."],
        ["After that","Après cela","After that, we went to school."],
        ["Later","Plus tard","Later, we played football."],
        ["Finally","Enfin","Finally, we went home."],
        ["Meanwhile","Pendant ce temps","Meanwhile, my mother was cooking."],
        ["Suddenly","Soudain","Suddenly, it started raining."],
        ["In the end","Finalement","In the end, we had a great day."]
      ]},
      {type:'regle',titre:'Temps du passé à utiliser',texte:"• Passé simple (Past Simple) : actions terminées → I went to the market.\n• Passé continu (Past Continuous) : actions en cours dans le passé → I was studying when...\n• Present Perfect : expériences → I have visited Paris twice."},
      {type:'exemples',titre:'Récit type — Ma journée d\'hier',items:[
        {en:"Yesterday was a busy day. First, I woke up at 6 a.m. and took a shower. Then I had breakfast — bread and coffee. After that, I went to school by bus. During the break, I played football with my friends. After school, I came home and did my homework. In the evening, I watched TV with my family. Finally, I went to bed at 10 p.m. It was a good day.",fr:"Hier était une journée chargée. D'abord, je me suis réveillé à 6h et j'ai pris une douche. Ensuite j'ai pris le petit-déjeuner — pain et café. Après cela, je suis allé à l'école en bus. Pendant la récréation, j'ai joué au football avec mes amis. Après l'école, je suis rentré et j'ai fait mes devoirs. Le soir, j'ai regardé la télé avec ma famille. Enfin, je me suis couché à 22h. C'était une bonne journée."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Pour raconter un événement, utilisez TOUJOURS les connecteurs temporels. Ils rendent votre récit clair et facile à suivre."}
    ],
    quiz:[
      {q:"'First' means:",opts:["A) Enfin","B) D'abord","C) Ensuite","D) Plus tard"],rep:'B',expl:"First = d'abord."},
      {q:"'After that' means:",opts:["A) Avant cela","B) Après cela","C) Pendant cela","D) Soudain"],rep:'B',expl:"After that = après cela."},
      {q:"'Suddenly' means:",opts:["A) Lentement","B) Soudain","C) Enfin","D) D'abord"],rep:'B',expl:"Suddenly = soudain."},
      {q:"'In the end' means:",opts:["A) Au début","B) Au milieu","C) Finalement","D) Soudain"],rep:'C',expl:"In the end = finalement."},
      {q:"'Yesterday, I ___ to school.' (go)",opts:["A) go","B) goes","C) went","D) going"],rep:'C',expl:"Passé simple de go → went."},
      {q:"'I ___ studying when the phone rang.'",opts:["A) am","B) was","C) were","D) is"],rep:'B',expl:"Passé continu avec I → was."},
      {q:"'Then' is used to:",opts:["A) start a story","B) show the next action","C) end a story","D) show contrast"],rep:'B',expl:"Then = ensuite (prochaine action)."},
      {q:"'Meanwhile' means:",opts:["A) Pendant ce temps","B) Soudain","C) Enfin","D) D'abord"],rep:'A',expl:"Meanwhile = pendant ce temps."},
      {q:"'Finally' is used to:",opts:["A) start","B) continue","C) end","D) interrupt"],rep:'C',expl:"Finally = enfin (pour terminer)."},
      {q:"'Later' means:",opts:["A) Plus tôt","B) Plus tard","C) Maintenant","D) Jamais"],rep:'B',expl:"Later = plus tard."}
    ]
  },

  // ── WRITING A2 ────────────────────────────────────────────────────

  {
    id:'write_a2_m1',
    titre:'Writing — Lettres Formelles et Emails Pro',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Rédiger une lettre formelle en anglais",
      "Utiliser les formules d'ouverture et de clôture appropriées",
      "Adapter le registre au contexte professionnel"
    ],
    contenu:[
      {type:'intro',texte:"Les lettres et emails formels sont essentiels dans le monde professionnel. Ce module vous donne les structures et formules pour communiquer efficacement."},
      {type:'tableau',titre:'Structure d\'une lettre formelle',headers:["Partie","Expression","Exemple"],rows:[
        ["En-tête","Your address + Date","12 Rue des Fleurs, Abidjan\n15 April 2025"],
        ["Destinataire","Dear Mr/Ms [Name],","Dear Mr. Koné,"],
        ["Objet","Re: / Subject:","Subject: Application for English Teacher"],
        ["Ouverture","I am writing to...","I am writing to apply for..."],
        ["Corps","Détails, qualifications","I have a degree in English and..."],
        ["Clôture","I look forward to...","I look forward to hearing from you."],
        ["Formule","Yours sincerely / faithfully","Yours sincerely,"],
        ["Signature","[Your name]","Fatou Diallo"]
      ]},
      {type:'tableau',titre:'Formules clés',headers:["Situation","Expression"],rows:[
        ["Postuler","I am writing to apply for the position of..."],
        ["Demander","I would like to request information about..."],
        ["Plainte","I am writing to express my dissatisfaction with..."],
        ["Remercier","Thank you for your prompt response."],
        ["Joindre un document","Please find attached my resume."],
        ["Demander un rendez-vous","I would like to schedule a meeting to discuss..."]
      ]},
      {type:'exemples',titre:'Lettre de candidature',items:[
        {en:"12 Rue des Fleurs, Abidjan\n15 April 2025\n\nDear Mr. Koné,\n\nSubject: Application for English Teacher Position\n\nI am writing to apply for the English teacher position at your school, as advertised on your website. I have a degree in English Literature from the University of Abidjan and two years of teaching experience.\n\nI am passionate about education and I believe I can make a valuable contribution to your team. Please find attached my resume and references.\n\nI look forward to hearing from you.\n\nYours sincerely,\nFatou Diallo",fr:"12 Rue des Fleurs, Abidjan\n15 avril 2025\n\nCher M. Koné,\n\nObjet : Candidature au poste de professeur d'anglais\n\nJe vous écris pour postuler au poste de professeur d'anglais dans votre école, tel qu'annoncé sur votre site. J'ai un diplôme en littérature anglaise de l'Université d'Abidjan et deux ans d'expérience en enseignement.\n\nJe suis passionnée par l'éducation et je crois pouvoir apporter une contribution précieuse à votre équipe. Veuillez trouver ci-joint mon CV et mes références.\n\nDans l'attente de votre réponse.\n\nCordialement,\nFatou Diallo"}
      ]},
      {type:'conseil',texte:"Yours sincerely = quand vous connaissez le nom du destinataire. Yours faithfully = quand vous ne le connaissez pas (Dear Sir/Madam)."}
    ],
    quiz:[
      {q:"'Yours sincerely' is used when:",opts:["A) you don't know the name","B) you know the name","C) writing to a friend","D) writing an email"],rep:'B',expl:"Yours sincerely = quand on connaît le nom."},
      {q:"'I am writing to apply for...' is used to:",opts:["A) complain","B) apply for a job","C) thank someone","D) invite someone"],rep:'B',expl:"Postuler = apply for."},
      {q:"'Please find attached...' is used to:",opts:["A) ask a question","B) send a document","C) make a complaint","D) give an address"],rep:'B',expl:"Veuillez trouver ci-joint = envoyer un document."},
      {q:"'Dear Sir/Madam' is:",opts:["A) informal","B) formal (unknown recipient)","C) for friends","D) for family"],rep:'B',expl:"Dear Sir/Madam = formel, destinataire inconnu."},
      {q:"'I look forward to hearing from you' means:",opts:["A) I'm listening","B) I'm waiting for your reply","C) I'm calling you","D) I'm meeting you"],rep:'B',expl:"Dans l'attente de votre réponse."},
      {q:"'Yours faithfully' is used with:",opts:["A) Dear Mr. Koné","B) Dear Sir/Madam","C) Hi Awa","D) Dear friend"],rep:'B',expl:"Yours faithfully = avec Dear Sir/Madam."},
      {q:"'Subject:' in a formal letter indicates:",opts:["A) the date","B) the topic","C) the sender","D) the recipient"],rep:'B',expl:"Subject = objet/sujet de la lettre."},
      {q:"'I would like to request...' is:",opts:["A) a complaint","B) a request","C) an order","D) a greeting"],rep:'B',expl:"Request = demande."},
      {q:"'I am writing to express my dissatisfaction' is:",opts:["A) a thank you","B) a complaint","C) an application","D) an invitation"],rep:'B',expl:"Exprimer son mécontentement = plainte."},
      {q:"'Resume' in a job application is:",opts:["A) a letter","B) a CV","C) a photo","D) a certificate"],rep:'B',expl:"Resume = CV."}
    ]
  },

  {
    id:'write_a2_m2',
    titre:'Writing — Récits Narratifs',
    niveau:'A2',
    duree:25,
    objectifs:[
      "Structurer un récit narratif en anglais",
      "Utiliser les temps du passé de manière cohérente",
      "Ajouter des détails descriptifs pour enrichir le texte"
    ],
    contenu:[
      {type:'intro',texte:"Le récit narratif est un exercice clé du BEPC et du BAC. Il demande une structure claire, des temps verbaux corrects et des détails vivants."},
      {type:'tableau',titre:'Structure d\'un récit',headers:["Partie","Contenu","Temps verbal"],rows:[
        ["Introduction","Situation initiale (qui, où, quand)","Past Simple / Past Continuous"],
        ["Développement","Événements principaux","Past Simple + Past Continuous"],
        ["Climax","Moment crucial","Past Simple + Suddenly"],
        ["Résolution","Comment ça s'est terminé","Past Simple"],
        ["Conclusion","Sentiment ou leçon","Past Simple / Present"]
      ]},
      {type:'regle',titre:'Temps du passé dans un récit',texte:"• Past Simple : actions principales → I went, I saw, I said\n• Past Continuous : contexte, actions en cours → It was raining, I was walking\n• Past Perfect : action antérieure → I had never seen such a thing\n• Suddenly : pour introduire un événement surprise"},
      {type:'exemples',titre:'Récit type — Un jour inoubliable',items:[
        {en:"Last Saturday was the most exciting day of my life. It was a sunny morning when I woke up. My family and I were going to the beach in Grand-Bassam. We left home at 7 a.m. and arrived at 9 a.m.\n\nWhen we got there, the beach was already crowded. Children were playing in the water and adults were relaxing under the trees. Suddenly, I saw a dolphin near the shore! Everyone was amazed.\n\nWe spent the whole day swimming, eating, and taking photos. In the evening, we returned home tired but happy. It was truly an unforgettable day.",fr:"Samedi dernier était le jour le plus excitant de ma vie. C'était un matin ensoleillé quand je me suis réveillé. Ma famille et moi allions à la plage de Grand-Bassam. Nous sommes partis à 7h et arrivés à 9h.\n\nQuand nous sommes arrivés, la plage était déjà bondée. Les enfants jouaient dans l'eau et les adultes se reposaient sous les arbres. Soudain, j'ai vu un dauphin près de la côte ! Tout le monde était émerveillé.\n\nNous avons passé toute la journée à nager, manger et prendre des photos. Le soir, nous sommes rentrés fatigués mais heureux. C'était vraiment un jour inoubliable."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Utilisez des adjectifs descriptifs (sunny, crowded, amazing, unforgettable) pour rendre votre récit vivant. Les examinateurs adorent les détails !"}
    ],
    quiz:[
      {q:"The introduction of a narrative should include:",opts:["A) the conclusion","B) who, where, when","C) the climax","D) the moral"],rep:'B',expl:"L'introduction présente qui, où, quand."},
      {q:"'Suddenly' is used to introduce:",opts:["A) the beginning","B) a surprise event","C) the end","D) a description"],rep:'B',expl:"Suddenly = pour un événement surprise."},
      {q:"'It was raining' is:",opts:["A) Past Simple","B) Past Continuous","C) Present Perfect","D) Future"],rep:'B',expl:"Was/were + -ing = Past Continuous."},
      {q:"'I had never seen' is:",opts:["A) Past Simple","B) Past Continuous","C) Past Perfect","D) Present Perfect"],rep:'C',expl:"Had + participe passé = Past Perfect."},
      {q:"The climax of a story is:",opts:["A) the beginning","B) the most exciting moment","C) the end","D) the introduction"],rep:'B',expl:"Le climax = le moment le plus excitant."},
      {q:"'Last Saturday' requires:",opts:["A) Present Simple","B) Past Simple","C) Future","D) Present Perfect"],rep:'B',expl:"Date passée précise → Past Simple."},
      {q:"'We spent the whole day' uses:",opts:["A) Past Simple","B) Past Continuous","C) Present Perfect","D) Future"],rep:'A',expl:"Action terminée → Past Simple (spent)."},
      {q:"'Unforgettable' means:",opts:["A) ennuyeux","B) inoubliable","C) ordinaire","D) triste"],rep:'B',expl:"Unforgettable = inoubliable."},
      {q:"A narrative should use:",opts:["A) only present tense","B) past tenses","C) only future tense","D) no tenses"],rep:'B',expl:"Un récit utilise les temps du passé."},
      {q:"'When we got there' is:",opts:["A) Past Simple","B) Past Continuous","C) Present Perfect","D) Future"],rep:'A',expl:"Got = Past Simple de get."}
    ]
  },

  // ── CULTURE A2 ────────────────────────────────────────────────────

  {
    id:'cult_a2_m1',
    titre:'Culture — Le Monde Anglophone Africain',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Connaître les pays anglophones d'Afrique",
      "Comprendre la diversité culturelle africaine anglophone",
      "Comparer les cultures francophones et anglophones"
    ],
    contenu:[
      {type:'intro',texte:"L'Afrique anglophone est riche et diversifiée. Connaître ces pays et leur culture élargit votre compréhension du continent et du monde anglophone."},
      {type:'tableau',titre:'Pays anglophones d\'Afrique',headers:["Pays","Capitale","Population","Langues locales"],rows:[
        ["Nigeria","Abuja","200+ millions","Hausa, Yoruba, Igbo"],
        ["Ghana","Accra","31 millions","Akan, Ewe, Ga"],
        ["Kenya","Nairobi","53 millions","Swahili, Kikuyu, Luo"],
        ["South Africa","Pretoria/Cape Town","60 millions","Zulu, Xhosa, Afrikaans"],
        ["Uganda","Kampala","45 millions","Luganda, Swahili"],
        ["Tanzania","Dodoma","60 millions","Swahili"],
        ["Rwanda","Kigali","13 millions","Kinyarwanda, French"],
        ["Liberia","Monrovia","5 millions","Kpelle, Bassa"]
      ]},
      {type:'regle',titre:'Faits culturels essentiels',texte:"• Nigeria : Nollywood (2e industrie cinématographique mondiale)\n• Ghana : Independence Day (6 mars 1957) — premier pays d'Afrique subsaharienne indépendant\n• Kenya : Safari, Maasai culture, Mount Kenya\n• South Africa : 11 langues officielles, Nelson Mandela, Rainbow Nation\n• Swahili : langue la plus parlée en Afrique de l'Est"},
      {type:'exemples',titre:'Comparaisons culturelles',items:[
        {en:"Nigeria is the most populous country in Africa. Its film industry, Nollywood, is the second largest in the world.",fr:"Le Nigeria est le pays le plus peuplé d'Afrique. Son industrie cinématographique, Nollywood, est la 2e au monde."},
        {en:"Ghana was the first sub-Saharan African country to gain independence in 1957.",fr:"Le Ghana a été le premier pays d'Afrique subsaharienne à obtenir l'indépendance en 1957."},
        {en:"South Africa has 11 official languages and is known as the Rainbow Nation.",fr:"L'Afrique du Sud a 11 langues officielles et est connue comme la Nation Arc-en-ciel."},
        {en:"Swahili is the most widely spoken language in East Africa.",fr:"Le swahili est la langue la plus parlée en Afrique de l'Est."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : La CEDEAO (ECOWAS) inclut des pays francophones et anglophones. Connaître les deux cultures est un atout majeur en Afrique de l'Ouest."}
    ],
    quiz:[
      {q:"The most populous African country is:",opts:["A) South Africa","B) Nigeria","C) Ghana","D) Kenya"],rep:'B',expl:"Le Nigeria a 200+ millions d'habitants."},
      {q:"Nollywood is the film industry of:",opts:["A) Ghana","B) Kenya","C) Nigeria","D) South Africa"],rep:'C',expl:"Nollywood = industrie cinématographique nigériane."},
      {q:"The first sub-Saharan African country to gain independence was:",opts:["A) Nigeria","B) Kenya","C) Ghana","D) South Africa"],rep:'C',expl:"Ghana, 1957."},
      {q:"South Africa is known as the:",opts:["A) Giant of Africa","B) Rainbow Nation","C) Star of Africa","D) Pearl of Africa"],rep:'B',expl:"Rainbow Nation = Nation Arc-en-ciel."},
      {q:"Swahili is spoken mainly in:",opts:["A) West Africa","B) East Africa","C) North Africa","D) South Africa"],rep:'B',expl:"Le swahili est parlé en Afrique de l'Est."},
      {q:"The capital of Kenya is:",opts:["A) Lagos","B) Accra","C) Nairobi","D) Kampala"],rep:'C',expl:"Nairobi = capitale du Kenya."},
      {q:"How many official languages does South Africa have?",opts:["A) 2","B) 5","C) 11","D) 20"],rep:'C',expl:"11 langues officielles."},
      {q:"'ECOWAS' in English is:",opts:["A) ECOWAS","B) AU","C) UN","D) EU"],rep:'A',expl:"ECOWAS = Economic Community of West African States."},
      {q:"The capital of Ghana is:",opts:["A) Lagos","B) Accra","C) Abuja","D) Monrovia"],rep:'B',expl:"Accra = capitale du Ghana."},
      {q:"Nelson Mandela was the president of:",opts:["A) Nigeria","B) Ghana","C) Kenya","D) South Africa"],rep:'D',expl:"Nelson Mandela = président de l'Afrique du Sud."}
    ]
  },

  {
    id:'cult_a2_m2',
    titre:'Culture — Traditions et Fêtes Anglophones',
    niveau:'A2',
    duree:20,
    objectifs:[
      "Connaître les fêtes principales du monde anglophone",
      "Comprendre les traditions associées",
      "Comparer avec les fêtes ivoiriennes"
    ],
    contenu:[
      {type:'intro',texte:"Les fêtes et traditions font partie intégrante de la culture. Connaître les célébrations anglophones vous aide à comprendre le monde anglophone et à communiquer avec des natifs."},
      {type:'tableau',titre:'Fêtes principales',headers:["Fête","Date","Traditions","Pays"],rows:[
        ["Christmas","25 December","Tree, gifts, family dinner","UK, USA, Canada, Australia"],
        ["Thanksgiving","4th Thursday in November","Turkey, family, gratitude","USA, Canada"],
        ["Easter","March/April (variable)","Easter eggs, bunny, church","UK, USA, Canada, Australia"],
        ["Halloween","31 October","Costumes, trick-or-treat, pumpkins","USA, UK, Canada"],
        ["New Year's Day","1 January","Fireworks, parties, resolutions","All"],
        ["Valentine's Day","14 February","Cards, flowers, chocolates","All"],
        ["Mother's Day","2nd Sunday in May","Gifts, cards, family","USA, UK"],
        ["Independence Day","4 July (USA)","Fireworks, BBQ, parades","USA"]
      ]},
      {type:'exemples',titre:'Traditions en détail',items:[
        {en:"Christmas is celebrated on December 25th. Families gather, exchange gifts, and have a special dinner with turkey or ham.",fr:"Christmas est célébré le 25 décembre. Les familles se réunissent, échangent des cadeaux et ont un dîner spécial avec dinde ou jambon."},
        {en:"Thanksgiving is an American holiday where families give thanks and eat turkey, cranberry sauce, and pumpkin pie.",fr:"Thanksgiving est une fête américaine où les familles rendent grâce et mangent de la dinde, de la sauce aux canneberges et de la tarte à la citrouille."},
        {en:"Halloween is on October 31st. Children dress in costumes and go trick-or-treating.",fr:"Halloween est le 31 octobre. Les enfants se déguisent et font du porte-à-porte pour des bonbons."},
        {en:"In Côte d'Ivoire, Tabaski and Christmas are major celebrations, similar to how Christmas and Easter are celebrated in English-speaking countries.",fr:"En CI, Tabaski et Noël sont des célébrations majeures, similaires à Christmas et Easter dans les pays anglophones."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BEPC et au BAC, on vous demande parfois de comparer les fêtes ivoiriennes et anglophones. Apprenez les dates et traditions principales !"}
    ],
    quiz:[
      {q:"Christmas is celebrated on:",opts:["A) December 1st","B) December 25th","C) January 1st","D) November 30th"],rep:'B',expl:"Christmas = 25 décembre."},
      {q:"Thanksgiving is celebrated in:",opts:["A) UK","B) USA","C) France","D) Nigeria"],rep:'B',expl:"Thanksgiving = fête américaine."},
      {q:"Halloween is on:",opts:["A) December 31st","B) October 31st","C) November 1st","D) January 1st"],rep:'B',expl:"Halloween = 31 octobre."},
      {q:"'Trick-or-treat' is associated with:",opts:["A) Christmas","B) Easter","C) Halloween","D) Thanksgiving"],rep:'C',expl:"Trick-or-treat = Halloween."},
      {q:"Thanksgiving food includes:",opts:["A) sushi","B) turkey","C) pizza","D) rice"],rep:'B',expl:"La dinde (turkey) est le plat principal."},
      {q:"Easter is associated with:",opts:["A) pumpkins","B) Easter eggs","C) fireworks","D) turkey"],rep:'B',expl:"Easter = oeufs de Pâques."},
      {q:"New Year's resolutions are:",opts:["A) gifts","B) promises for the new year","C) decorations","D) food"],rep:'B',expl:"Résolutions du Nouvel An = promesses."},
      {q:"Valentine's Day is on:",opts:["A) February 14th","B) March 8th","C) December 25th","D) July 4th"],rep:'A',expl:"Valentine's Day = 14 février."},
      {q:"Independence Day in the USA is:",opts:["A) July 4th","B) December 25th","C) January 1st","D) November 11th"],rep:'A',expl:"4 juillet = Independence Day (USA)."},
      {q:"'Mother's Day' is to honor:",opts:["A) fathers","B) mothers","C) teachers","D) children"],rep:'B',expl:"Mother's Day = fête des mères."}
    ]
  },

  // ── EXAM PREP A2 ──────────────────────────────────────────────────

  {
    id:'exam_a2_m1',
    titre:'BEPC Prep — Reading Avancé',
    niveau:'A2',
    duree:30,
    objectifs:[
      "Comprendre des textes plus longs et complexes",
      "Faire des inférences à partir du texte",
      "Trouver le vocabulaire en contexte"
    ],
    contenu:[
      {type:'intro',texte:"Au niveau A2, les textes du BEPC sont plus longs et demandent une compréhension plus approfondie. Ce module vous entraîne à lire, analyser et répondre à des questions complexes."},
      {type:'tableau',titre:'Stratégies de lecture avancée',headers:["Stratégie","Action","Exemple"],rows:[
        ["Skimming","Lire rapidement pour l'idée générale","Lire le titre, la première et dernière phrase"],
        ["Scanning","Chercher des informations spécifiques","Chercher des noms, dates, nombres"],
        ["Inférence","Déduire ce qui n'est pas dit explicitement","'She was crying' → elle est triste"],
        ["Contexte","Deviner le sens d'un mot inconnu","'The arid desert' → arid = sec"]
      ]},
      {type:'regle',titre:'Types de questions avancées',texte:"• True/False/Not Given : Vrai, Faux, ou Non Mentionné\n• Inférence : Que peut-on déduire du texte ?\n• Référence : À quoi renvoie un pronom ?\n• Vocabulaire en contexte : Que signifie ce mot DANS CE TEXTE ?\n• Titre : Quel est le meilleur titre pour ce texte ?"},
      {type:'exemples',titre:'Texte type BEPC A2',items:[
        {en:"Kofi is a 16-year-old student from Ghana. He moved to Abidjan two years ago when his father got a new job. At first, Kofi found it difficult because he didn't speak French well. But he worked hard, made new friends, and now he speaks French fluently. He still misses his home in Accra, but he loves his new school and the opportunities it offers. His dream is to become a doctor and help people in both Ghana and Côte d'Ivoire.",fr:"Kofi est un étudiant ghanéen de 16 ans. Il a déménagé à Abidjan il y a deux ans quand son père a obtenu un nouveau travail. Au début, Kofi a trouvé cela difficile car il ne parlait pas bien français. Mais il a travaillé dur, s'est fait de nouveaux amis, et maintenant il parle français couramment. Il lui manque toujours sa maison à Accra, mais il aime sa nouvelle école et les opportunités qu'elle offre. Son rêve est de devenir médecin et d'aider les gens au Ghana et en CI."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Pour les questions True/False/Not Given, si l'information n'est PAS dans le texte → Not Given. Ne supposez rien !"}
    ],
    quiz:[
      {q:"'Skimming' means:",opts:["A) reading every word","B) reading quickly for the main idea","C) looking for specific info","D) translating"],rep:'B',expl:"Skimming = lecture rapide pour l'idée générale."},
      {q:"'Scanning' means:",opts:["A) reading carefully","B) looking for specific information","C) summarizing","D) translating"],rep:'B',expl:"Scanning = recherche d'informations spécifiques."},
      {q:"'She was crying.' We can infer she is:",opts:["A) happy","B) sad","C) angry","D) hungry"],rep:'B',expl:"Pleurer → triste (inférence)."},
      {q:"'The arid desert.' 'Arid' probably means:",opts:["A) wet","B) dry","C) cold","D) green"],rep:'B',expl:"Arid = sec (contexte : desert)."},
      {q:"True/False/Not Given: The text doesn't mention it →",opts:["A) True","B) False","C) Not Given","D) Both"],rep:'C',expl:"Non mentionné = Not Given."},
      {q:"'He still misses his home.' 'He' refers to:",opts:["A) his father","B) Kofi","C) a friend","D) a doctor"],rep:'B',expl:"He = Kofi (sujet du texte)."},
      {q:"Kofi moved to Abidjan:",opts:["A) last year","B) two years ago","C) three years ago","D) yesterday"],rep:'B',expl:"Le texte dit : two years ago."},
      {q:"Kofi's dream is to become:",opts:["A) a teacher","B) a doctor","C) a lawyer","D) an engineer"],rep:'B',expl:"Le texte dit : become a doctor."},
      {q:"The best title for this text is:",opts:["A) Kofi's Dream","B) How to Learn French","C) Life in Accra","D) Ghana's History"],rep:'A',expl:"Le texte parle du rêve et du parcours de Kofi."},
      {q:"Kofi speaks French:",opts:["A) poorly","B) not at all","C) fluently","D) only at school"],rep:'C',expl:"Le texte dit : speaks French fluently."}
    ]
  },

  {
    id:'exam_a2_m2',
    titre:'BEPC Prep — Grammar Avancé',
    niveau:'A2',
    duree:30,
    objectifs:[
      "Maîtriser les exercices de grammaire de niveau A2",
      "Transformer des phrases (comparatifs, passif, discours indirect)",
      "Utiliser les temps mixtes correctement"
    ],
    contenu:[
      {type:'intro',texte:"La grammaire du BEPC au niveau A2 demande une maîtrise des temps mixtes, des comparatifs, du passif simple et du discours indirect de base."},
      {type:'tableau',titre:'Points grammaticaux testés',headers:["Point","Exemple","Règle"],rows:[
        ["Present Perfect","I have lived here since 2020.","have/has + PP + since/for"],
        ["Comparatifs","She is taller than her sister.","-er than / more ... than"],
        ["Superlatifs","He is the best student.","the -est / the most ..."],
        ["Passif simple","The letter was written.","was/were + PP"],
        ["Discours indirect","She said she was tired.","backshift des temps"],
        ["Futur","I will help you. / I'm going to travel.","will / going to"]
      ]},
      {type:'exemples',titre:'Exercices types',items:[
        {en:"Exercise 1: Put the verb in the correct tense.\nShe ___ (live) here since 2020. → has lived\nThey ___ (go) to the beach last weekend. → went\nRight now, he ___ (study) for the exam. → is studying",fr:"Exercice 1 : Mettez le verbe au bon temps.\nElle habite ici depuis 2020. → has lived\nIls sont allés à la plage le week-end dernier. → went\nEn ce moment, il étudie pour l'examen. → is studying"},
        {en:"Exercise 2: Transform to comparative.\nThis book is interesting. That book is more interesting. → That book is more interesting than this one.",fr:"Exercice 2 : Transformez au comparatif.\nCe livre est intéressant. Ce livre est plus intéressant que celui-ci."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Révisez les verbes irréguliers chaque semaine. Ils reviennent dans TOUS les exercices de grammaire du BEPC."}
    ],
    quiz:[
      {q:"She ___ here since 2020. (live)",opts:["A) lives","B) lived","C) has lived","D) is living"],rep:'C',expl:"Since + point de départ → Present Perfect."},
      {q:"This book is ___ than that one. (interesting)",opts:["A) interestinger","B) more interesting","C) most interesting","D) interesting"],rep:'B',expl:"Adjectif long → more interesting."},
      {q:"The letter ___ written by the teacher.",opts:["A) is","B) was","C) were","D) be"],rep:'B',expl:"Passé passif singulier → was."},
      {q:"'I am happy,' she said. → She said she ___ happy.",opts:["A) is","B) was","C) were","D) am"],rep:'B',expl:"Discours indirect : present → past."},
      {q:"She is the ___ student in the class. (good)",opts:["A) goodest","B) most good","C) best","D) better"],rep:'C',expl:"Irrégulier : good → best."},
      {q:"I ___ help you with your homework.",opts:["A) am going","B) will","C) go","D) am"],rep:'B',expl:"Offre spontanée → will."},
      {q:"They ___ to the cinema last night. (go)",opts:["A) go","B) goes","C) went","D) gone"],rep:'C',expl:"Passé simple de go → went."},
      {q:"He runs ___ than me. (fast)",opts:["A) more fast","B) faster","C) fastest","D) most fast"],rep:'B',expl:"Comparatif court → -er : faster."},
      {q:"The cake ___ eaten by the children.",opts:["A) is","B) was","C) were","D) been"],rep:'B',expl:"Passé passif → was eaten."},
      {q:"She ___ already ___ her homework. (finish)",opts:["A) has / finished","B) did / finish","C) have / finished","D) is / finishing"],rep:'A',expl:"Already + Present Perfect → has finished."}
    ]
  },

  {
    id:'exam_a2_m3',
    titre:'BEPC Prep — Writing Avancé',
    niveau:'A2',
    duree:35,
    objectifs:[
      "Rédiger des textes plus longs et structurés",
      "Utiliser des connecteurs logiques variés",
      "Adapter le registre au type d'écriture"
    ],
    contenu:[
      {type:'intro',texte:"Au niveau A2, l'écriture du BEPC demande des textes plus longs (12-15 lignes), une structure claire et un vocabulaire varié."},
      {type:'tableau',titre:'Types d\'écriture au BEPC A2',headers:["Type","Structure","Connecteurs"],rows:[
        ["Lettre formelle","En-tête → Salutation → Corps → Clôture","I am writing to..., I would like to..."],
        ["Lettre informelle","Salutation → Corps → Clôture","Hi..., How are you?, Write back soon!"],
        ["Dialogue","Personne A → Personne B → ...","— Hello! / — Hi! / — How are you?"],
        ["Récit narratif","Intro → Événements → Conclusion","First, Then, After that, Finally"],
        ["Article court","Titre → Intro → Détails → Conclusion","Nowadays, Furthermore, In conclusion"]
      ]},
      {type:'regle',titre:'Connecteurs logiques A2',texte:"• Addition : and, also, moreover, in addition\n• Opposition : but, however, on the other hand\n• Cause : because, since, as\n• Conséquence : so, therefore, as a result\n• Temps : first, then, after that, meanwhile, finally\n• Exemple : for example, for instance, such as"},
      {type:'tableau',titre:'Grille de correction BEPC',headers:["Critère","Points","Conseil A2"],rows:[
        ["Contenu","2 pts","12-15 lignes, répondez au sujet"],
        ["Grammaire","2 pts","Temps variés, phrases complexes"],
        ["Vocabulaire","1 pt","Mots précis, pas de répétitions"],
        ["Organisation","1 pt","Paragraphes, connecteurs variés"]
      ]},
      {type:'exemples',titre:'Lettre informelle type',items:[
        {en:"Dear Awa,\n\nHow are you? I hope you and your family are well. I'm writing to tell you about my new school. It's much better than my old one! The teachers are kind and the students are friendly.\n\nMy favourite subject is English because we do lots of interesting activities. Last week, we had a debate about the environment. It was amazing!\n\nI miss you very much. Please write back soon and tell me about your life.\n\nBest wishes,\nFatou",fr:"Chère Awa,\n\nComment vas-tu ? J'espère que toi et ta famille allez bien. Je t'écris pour te parler de ma nouvelle école. Elle est bien meilleure que mon ancienne ! Les professeurs sont gentils et les élèves sont sympas.\n\nMa matière préférée est l'anglais parce que nous faisons beaucoup d'activités intéressantes. La semaine dernière, nous avons eu un débat sur l'environnement. C'était incroyable !\n\nTu me manques beaucoup. Écris-moi bientôt et parle-moi de ta vie.\n\nMeilleures amitiés,\nFatou"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Variez vos connecteurs ! N'utilisez pas toujours 'and' et 'but'. Essayez 'moreover', 'however', 'furthermore' pour impressionner les correcteurs."}
    ],
    quiz:[
      {q:"A formal letter starts with:",opts:["A) Hi!","B) Dear Mr/Ms [Name],","C) Hey!","D) What's up?"],rep:'B',expl:"Lettre formelle → Dear Mr/Ms [Name]."},
      {q:"'However' shows:",opts:["A) addition","B) opposition","C) cause","D) time"],rep:'B',expl:"However = cependant (opposition)."},
      {q:"'Moreover' shows:",opts:["A) opposition","B) addition","C) cause","D) conclusion"],rep:'B',expl:"Moreover = de plus (addition)."},
      {q:"How many lines minimum for BEPC Writing A2?",opts:["A) 5","B) 8","C) 12","D) 20"],rep:'C',expl:"12-15 lignes au niveau A2."},
      {q:"'First, then, after that, finally' are:",opts:["A) cause connectors","B) time connectors","C) opposition connectors","D) addition connectors"],rep:'B',expl:"Connecteurs de temps/séquence."},
      {q:"An informal letter ends with:",opts:["A) Yours sincerely","B) Best wishes","C) Yours faithfully","D) To whom it may concern"],rep:'B',expl:"Lettre informelle → Best wishes."},
      {q:"'As a result' shows:",opts:["A) cause","B) consequence","C) opposition","D) addition"],rep:'B',expl:"As a result = par conséquent (conséquence)."},
      {q:"A dialogue uses:",opts:["A) paragraphs","B) dashes (—)","C) bullet points","D) numbers"],rep:'B',expl:"Un dialogue utilise des tirets (—)."},
      {q:"'For instance' means:",opts:["A) par exemple","B) en conclusion","C) cependant","D) de plus"],rep:'A',expl:"For instance = par exemple."},
      {q:"The 'Content' criterion in BEPC Writing is worth:",opts:["A) 1 pt","B) 2 pts","C) 3 pts","D) 4 pts"],rep:'B',expl:"Contenu = 2 points."}
    ]
  }
]

console.log('[AGTM A2 Modules] Loaded', window._AGTM_A2_MODS.length, 'A2 modules')

})()
