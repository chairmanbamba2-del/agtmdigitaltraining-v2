/* modules-agtm-b2.js — AGTM Academy B2 Modules v1.0
 * 22 modules complets B2 avec contenu riche et quiz (10 questions chacun)
 * Basé sur les PDFs AGTM : MonGuideBEPC, ObjectifBac, Listening/Speaking, Pronouns
 */
;(function () {
'use strict'

window._AGTM_B2_MODS = [
  // ── GRAMMAIRE B2 ──────────────────────────────────────────────────

  {
    id:'gram_b2_m1',
    titre:'Les Conditionnels — Type 3 et Mixed',
    niveau:'B2',
    duree:40,
    objectifs:[
      "Maîtriser le conditionnel Type 3 (irréel du passé)",
      "Utiliser le conditionnel mixte (mixed conditional)",
      "Exprimer des regrets et des hypothèses passées"
    ],
    contenu:[
      {type:'intro',texte:"Le conditionnel Type 3 exprime des situations irréelles dans le passé — des regrets, des choses qui auraient pu être différentes. Le mixed conditional combine une condition passée avec une conséquence présente."},
      {type:'tableau',titre:'Type 3 et Mixed Conditional',headers:["Type","If-clause","Main clause","Usage","Exemple"],rows:[
        ["Type 3","If + past perfect","would have + PP","Regret sur le passé","If I had studied, I would have passed."],
        ["Mixed (past→present)","If + past perfect","would + base","Cause passée, conséquence présente","If I had studied, I would be a doctor now."],
        ["Mixed (present→past)","If + past simple","would have + PP","État présent, conséquence passée","If I were rich, I would have bought it."]
      ]},
      {type:'regle',titre:'Formation du Type 3',texte:"If + sujet + had + participe passé, sujet + would have + participe passé\n• If she had known, she would have come.\n• If they had left earlier, they wouldn't have missed the train.\n• Had she known, she would have come. (inversion formelle)"},
      {type:'regle',titre:'Mixed Conditional',texte:"• Past → Present : If I had taken the job (past), I would be living in London now (present).\n• Present → Past : If I spoke French (present state), I would have applied for that job (past action)."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"If she had studied harder, she would have passed the BAC.",fr:"Si elle avait étudié plus dur, elle aurait réussi le BAC."},
        {en:"If I had taken that job, I would be living in Paris now.",fr:"Si j'avais accepté ce travail, je vivrais à Paris maintenant."},
        {en:"Had they known about the danger, they would have stayed home.",fr:"S'ils avaient su le danger, ils seraient restés chez eux."},
        {en:"If he weren't so shy, he would have asked her out.",fr:"S'il n'était pas si timide, il l'aurait invitée à sortir."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, le Type 3 est souvent testé dans les exercices de transformation. 'If I had known' = Si j'avais su. 'I would have done' = j'aurais fait."}
    ],
    quiz:[
      {q:"If she ___ harder, she would have passed.",opts:["A) studied","B) had studied","C) has studied","D) studies"],rep:'B',expl:"Type 3 → If + past perfect (had studied)."},
      {q:"If I had taken the job, I ___ in London now.",opts:["A) would have lived","B) would live","C) will live","D) lived"],rep:'B',expl:"Mixed (past→present) → would + base."},
      {q:"___ they known, they would have stayed.",opts:["A) If","B) Had","C) Have","D) Has"],rep:'B',expl:"Inversion formelle : Had they known = If they had known."},
      {q:"If he ___ so shy, he would have asked her.",opts:["A) weren't","B) hadn't been","C) isn't","D) wasn't being"],rep:'A',expl:"Mixed (present→past) → If + past simple (weren't)."},
      {q:"If we ___ earlier, we wouldn't have missed the bus.",opts:["A) leave","B) left","C) had left","D) have left"],rep:'C',expl:"Type 3 → If + past perfect (had left)."},
      {q:"She would have called if she ___ your number.",opts:["A) has","B) had","C) had had","D) has had"],rep:'C',expl:"Type 3 → had had (past perfect de have)."},
      {q:"If I ___ French, I would have applied.",opts:["A) speak","B) spoke","C) had spoken","D) have spoken"],rep:'B',expl:"Mixed (present→past) → If + past simple (spoke)."},
      {q:"If they ___ the news, they would have been shocked.",opts:["A) hear","B) heard","C) had heard","D) have heard"],rep:'C',expl:"Type 3 → If + past perfect (had heard)."},
      {q:"I would have helped you if you ___ me.",opts:["A) ask","B) asked","C) had asked","D) have asked"],rep:'C',expl:"Type 3 → If + past perfect (had asked)."},
      {q:"If she ___ the training, she would be promoted by now.",opts:["A) completed","B) had completed","C) has completed","D) completes"],rep:'B',expl:"Mixed (past→present) → If + past perfect."}
    ]
  },

  {
    id:'gram_b2_m2',
    titre:'Subjonctif et Souhaits — Wish / If only',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Utiliser WISH pour exprimer des souhaits irréels",
      "Maîtriser IF ONLY pour l'emphase",
      "Employer le subjonctif en anglais formel"
    ],
    contenu:[
      {type:'intro',texte:"En anglais, le subjonctif survit dans des structures figées. WISH et IF ONLY expriment des souhaits irréels ou des regrets. La structure rappelle les conditionnels."},
      {type:'tableau',titre:'Structures des souhaits',headers:["Structure","Emploi","Exemple"],rows:[
        ["wish + past simple","Souhait présent irréel","I wish I spoke French perfectly."],
        ["wish + past perfect","Regret sur le passé","I wish I had studied harder."],
        ["wish + would + base","Souhait futur / plainte","I wish he would stop shouting."],
        ["if only + past/past perf.","Emphase sur souhait/regret","If only I had more time!"],
        ["it's time + past simple","Il est temps que…","It's time you went to bed."],
        ["would rather + past simple","préférence irréelle","I'd rather you stayed."]
      ]},
      {type:'regle',titre:'Règles essentielles',texte:"• Wish + past simple = souhait présent irréel (comme Type 2)\n• Wish + past perfect = regret sur le passé (comme Type 3)\n• Wish + would = souhait que quelqu'un CHANGE son comportement\n• On ne peut PAS utiliser wish + would pour soi-même (pas 'I wish I would')"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"I wish I could speak English like a native.",fr:"Je souhaite pouvoir parler anglais comme un natif."},
        {en:"She wishes she hadn't said that.",fr:"Elle regrette d'avoir dit ça."},
        {en:"I wish the government would invest in education.",fr:"Je souhaite que le gouvernement investisse dans l'éducation."},
        {en:"If only I had listened to my parents!",fr:"Si seulement j'avais écouté mes parents !"}
      ]},
      {type:'conseil',texte:"Attention : I wish + would exprime une plainte ou un souhait de changement. 'I wish it would stop raining' = J'aimerais qu'il arrête de pleuvoir (mais il continue)."}
    ],
    quiz:[
      {q:"I wish I ___ French perfectly. (present wish)",opts:["A) speak","B) spoke","C) had spoken","D) will speak"],rep:'B',expl:"Souhait présent → past simple (spoke)."},
      {q:"I wish I ___ harder for the exam. (past regret)",opts:["A) study","B) studied","C) had studied","D) will study"],rep:'C',expl:"Regret passé → past perfect (had studied)."},
      {q:"I wish he ___ shouting. (complaint)",opts:["A) stops","B) stopped","C) would stop","D) had stopped"],rep:'C',expl:"Souhait de changement → wish + would."},
      {q:"If only I ___ more time!",opts:["A) have","B) had","C) would have","D) will have"],rep:'B',expl:"If only + past simple = souhait présent."},
      {q:"It's time you ___ to bed.",opts:["A) go","B) went","C) have gone","D) will go"],rep:'B',expl:"It's time + past simple."},
      {q:"I'd rather you ___ here.",opts:["A) stay","B) stayed","C) will stay","D) have stayed"],rep:'B',expl:"Would rather + past simple."},
      {q:"She wishes she ___ that comment.",opts:["A) didn't make","B) hadn't made","C) wouldn't make","D) doesn't make"],rep:'B',expl:"Regret passé → hadn't made."},
      {q:"I wish it ___ raining. (it's still raining)",opts:["A) stops","B) stopped","C) would stop","D) had stopped"],rep:'C',expl:"Souhait de changement → would stop."},
      {q:"'If only' is ___ than 'wish'.",opts:["A) weaker","B) stronger/more emphatic","C) the same","D) informal"],rep:'B',expl:"If only = plus emphatique que wish."},
      {q:"You CANNOT say 'I wish I would' because:",opts:["A) it's rude","B) wish + would is for others' behavior","C) it's correct","D) it's too formal"],rep:'B',expl:"Wish + would = pour le comportement des autres, pas le sien."}
    ]
  },

  {
    id:'gram_b2_m3',
    titre:'Les Phrasal Verbs Essentiels',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Maîtriser les phrasal verbs les plus courants",
      "Distinguer les phrasal verbs séparables et inséparables",
      "Utiliser les phrasal verbs en contexte"
    ],
    contenu:[
      {type:'intro',texte:"Les phrasal verbs sont des verbes composés d'un verbe et d'une ou deux particules. Leur sens est souvent idiomatique. Ils sont omniprésents en anglais courant et professionnel."},
      {type:'tableau',titre:'Phrasal verbs essentiels par thème',headers:["Phrasal Verb","Sens","Exemple","Type"],rows:[
        ["give up","abandonner","Don't give up studying!","séparable"],
        ["look up","chercher (dico)","Look up the word.","séparable"],
        ["take off","décoller/enlever","The plane took off.","inséparable"],
        ["put off","remettre","Don't put off your work.","séparable"],
        ["turn down","refuser/baisser","He turned down the offer.","séparable"],
        ["run into","rencontrer par hasard","I ran into my teacher.","inséparable"],
        ["carry on","continuer","Carry on with your work.","inséparable"],
        ["find out","découvrir","I found out the truth.","séparable"],
        ["get on with","bien s'entendre","She gets on with everyone.","inséparable"],
        ["bring up","soulever/élever","He brought up an important point.","séparable"]
      ]},
      {type:'regle',titre:'Séparable vs Inséparable',texte:"• Séparable : on peut placer un nom ou pronom entre le verbe et la particule.\n  Turn the TV off ✓ / Turn off the TV ✓ / Turn it off ✓ (pronom OBLIGATOIREMENT entre les deux)\n• Inséparable : la particule ne peut pas être séparée du verbe.\n  Run into him ✓ / Run him into ✗"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"She gave up smoking last year.",fr:"Elle a arrêté de fumer l'année dernière."},
        {en:"Look it up if you don't know the word.",fr:"Cherche-le si tu ne connais pas le mot."},
        {en:"The meeting was put off until next week.",fr:"La réunion a été reportée à la semaine prochaine."},
        {en:"He turned down the job offer.",fr:"Il a refusé l'offre d'emploi."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Apprenez les phrasal verbs en contexte et par thème. Ne les mémorisez pas par liste isolée. Utilisez-les dans des phrases personnelles."}
    ],
    quiz:[
      {q:"'Give up' means:",opts:["A) continuer","B) abandonner","C) commencer","D) réussir"],rep:'B',expl:"Give up = abandonner."},
      {q:"'Look up' means:",opts:["A) regarder en bas","B) chercher (dans un dictionnaire)","C) ignorer","D) oublier"],rep:'B',expl:"Look up = chercher (dans un dictionnaire ou en ligne)."},
      {q:"'Take off' can mean:",opts:["A) atterrir","B) décoller","C) mettre","D) construire"],rep:'B',expl:"Take off = décoller (avion) ou enlever (vêtement)."},
      {q:"'Put off' means:",opts:["A) avancer","B) remettre à plus tard","C) annuler","D) commencer"],rep:'B',expl:"Put off = remettre à plus tard."},
      {q:"'Turn down' means:",opts:["A) accepter","B) refuser","C) augmenter","D) allumer"],rep:'B',expl:"Turn down = refuser ou baisser (volume)."},
      {q:"'Run into' means:",opts:["A) courir dans","B) rencontrer par hasard","C) éviter","D) poursuivre"],rep:'B',expl:"Run into = rencontrer par hasard."},
      {q:"'Carry on' means:",opts:["A) s'arrêter","B) continuer","C) commencer","D) abandonner"],rep:'B',expl:"Carry on = continuer."},
      {q:"'Find out' means:",opts:["A) perdre","B) oublier","C) découvrir","D) cacher"],rep:'C',expl:"Find out = découvrir."},
      {q:"With separable phrasal verbs, pronouns go:",opts:["A) after the particle","B) between verb and particle","C) before the verb","D) anywhere"],rep:'B',expl:"Pronom OBLIGATOIREMENT entre verbe et particule."},
      {q:"'Get on with' means:",opts:["A) se disputer avec","B) bien s'entendre avec","C) ignorer","D) suivre"],rep:'B',expl:"Get on with = bien s'entendre avec."}
    ]
  },

  {
    id:'gram_b2_m4',
    titre:'Inversions et Emphases',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Maîtriser les inversions stylistiques en anglais formel",
      "Utiliser les structures clivées (cleft sentences)",
      "Employer des structures d'emphase"
    ],
    contenu:[
      {type:'intro',texte:"L'inversion en anglais avancé s'utilise quand un adverbe négatif ou restrictif est placé en tête de phrase pour l'emphase. Les cleft sentences mettent un élément en évidence."},
      {type:'tableau',titre:'Adverbes déclenchant l\'inversion',headers:["Adverbe / Expression","Exemple inversé","Sens"],rows:[
        ["Never","Never have I seen such a thing.","Jamais je n'ai vu..."],
        ["Rarely / Seldom","Rarely does she make mistakes.","Rarement elle fait..."],
        ["Not only … but also","Not only did he lie, but he also stole.","Non seulement il a menti..."],
        ["No sooner … than","No sooner had I left than it rained.","Je venais juste de partir quand..."],
        ["Hardly / Scarcely … when","Hardly had she arrived when the phone rang.","Elle venait d'arriver quand..."],
        ["Under no circumstances","Under no circumstances should you sign.","En aucun cas tu ne dois..."],
        ["Only then / Only when","Only then did I understand.","Ce n'est qu'alors que j'ai compris."]
      ]},
      {type:'tableau',titre:'Cleft Sentences',headers:["Type","Structure","Exemple"],rows:[
        ["It-cleft","It is/was + X + that/who...","It was courage that won the battle."],
        ["Wh-cleft","What + clause + is/was + X","What I need is more practice."],
        ["All-cleft","All + clause + is/was + to-inf","All I want is to pass this exam."]
      ]},
      {type:'regle',titre:'Emphase avec DO/DOES/DID',texte:"On peut utiliser do/does/did pour insister dans une phrase affirmative :\n• I DO care about this! (Je m'en soucie VRAIMENT !)\n• She DID pass the exam! (Elle A BIEN réussi !)\n• He DOES speak English well! (Il parle VRAIMENT bien anglais !)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Never have I been so proud of my students.",fr:"Jamais je n'ai été aussi fier de mes étudiants."},
        {en:"It was Issa Bamba who founded AGTM Academy.",fr:"C'est Issa Bamba qui a fondé AGTM Academy."},
        {en:"What surprised me was her calm reaction.",fr:"Ce qui m'a surpris, c'était sa réaction calme."},
        {en:"Not only did she pass, but she also got the highest score.",fr:"Non seulement elle a réussi, mais elle a aussi eu la meilleure note."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : L'inversion après adverbe négatif est une marque stylistique de niveau B2/C1 — très valorisée dans les essais et écrits académiques."}
    ],
    quiz:[
      {q:"Never ___ I seen such dedication.",opts:["A) have","B) had","C) has","D) did"],rep:'A',expl:"Inversion après Never → have I seen."},
      {q:"Not only ___ she pass, but she also won.",opts:["A) did","B) does","C) was","D) had"],rep:'A',expl:"Not only → inversion avec did."},
      {q:"Hardly ___ I arrived when it started raining.",opts:["A) did","B) had","C) have","D) was"],rep:'B',expl:"Hardly... when → past perfect : had I arrived."},
      {q:"It was courage ___ won the battle.",opts:["A) which","B) that","C) who","D) what"],rep:'B',expl:"It-cleft avec chose → that."},
      {q:"What I need ___ more practice.",opts:["A) are","B) is","C) were","D) have"],rep:'B',expl:"Wh-cleft → is (singulier)."},
      {q:"Under no circumstances ___ you sign this.",opts:["A) should","B) shouldn't","C) can","D) will"],rep:'A',expl:"Under no circumstances → inversion avec should."},
      {q:"Only then ___ I understand.",opts:["A) did","B) do","C) was","D) had"],rep:'A',expl:"Only then → inversion avec did."},
      {q:"I DO care about this! 'DO' expresses:",opts:["A) negation","B) emphasis","C) question","D) doubt"],rep:'B',expl:"DO = emphase (insistance)."},
      {q:"No sooner ___ I left than it rained.",opts:["A) did","B) had","C) have","D) was"],rep:'B',expl:"No sooner... than → past perfect : had I left."},
      {q:"All I want ___ to succeed.",opts:["A) are","B) is","C) were","D) have"],rep:'B',expl:"All-cleft → is (singulier)."}
    ]
  },

  {
    id:'gram_b2_m5',
    titre:'Connecteurs Logiques Avancés',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Maîtriser les connecteurs logiques de niveau B2",
      "Structurer des arguments complexes",
      "Varier les connecteurs dans l'écriture académique"
    ],
    contenu:[
      {type:'intro',texte:"Les connecteurs logiques structurent le discours et expriment les relations entre les idées. Un bon usage des connecteurs est indispensable pour les essais de niveau B2/C1."},
      {type:'tableau',titre:'Connecteurs par fonction',headers:["Fonction","Connecteurs","Exemple"],rows:[
        ["Addition","furthermore, moreover, in addition, besides","Furthermore, technology has changed education."],
        ["Opposition","however, nevertheless, on the other hand, yet","The plan is expensive; however, it is necessary."],
        ["Concession","although, even though, despite, in spite of","Despite the rain, the event continued."],
        ["Cause","because of, due to, owing to, since, as","Due to heavy traffic, she was late."],
        ["Conséquence","therefore, consequently, as a result, hence","He studied hard; therefore, he passed."],
        ["Illustration","for instance, for example, such as, namely","Some countries, such as Japan, invest heavily."],
        ["Conclusion","in conclusion, to sum up, overall, all in all","In conclusion, education is key."]
      ]},
      {type:'regle',titre:'Despite vs Although',texte:"• Despite / In spite of + NOM ou GÉRONDIF : Despite the rain, we went out.\n• Although / Even though + CLAUSE (sujet + verbe) : Although it rained, we went out.\n• Despite of ✗ → Despite ✓ (jamais 'of' après despite)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Despite his busy schedule, he found time to help.",fr:"Malgré son emploi du temps chargé, il a trouvé le temps d'aider."},
        {en:"The project failed; consequently, funding was withdrawn.",fr:"Le projet a échoué ; par conséquent, le financement a été retiré."},
        {en:"Moreover, studies show that reading improves focus.",fr:"De plus, des études montrent que la lecture améliore la concentration."},
        {en:"Although it was difficult, she succeeded.",fr:"Bien que ce soit difficile, elle a réussi."}
      ]},
      {type:'conseil',texte:"Variez vos connecteurs dans les essais — utiliser toujours 'but' ou 'so' trahit un niveau faible. Utilisez 'however', 'nevertheless', 'consequently', 'furthermore'."}
    ],
    quiz:[
      {q:"'Furthermore' expresses:",opts:["A) opposition","B) addition","C) cause","D) conclusion"],rep:'B',expl:"Furthermore = de plus (addition)."},
      {q:"'Despite' is followed by:",opts:["A) a clause","B) a noun/gerund","C) a verb","D) an adjective"],rep:'B',expl:"Despite + nom ou gérondif."},
      {q:"'Consequently' expresses:",opts:["A) cause","B) consequence","C) opposition","D) addition"],rep:'B',expl:"Consequently = par conséquent."},
      {q:"'Although' is followed by:",opts:["A) a noun","B) a clause","C) a gerund","D) an adverb"],rep:'B',expl:"Although + clause (sujet + verbe)."},
      {q:"'Nevertheless' means:",opts:["A) therefore","B) however","C) moreover","D) because"],rep:'B',expl:"Nevertheless = néanmoins (cependant)."},
      {q:"'Due to' introduces:",opts:["A) a result","B) a cause","C) an example","D) a contrast"],rep:'B',expl:"Due to = dû à (cause)."},
      {q:"'In conclusion' is used to:",opts:["A) start","B) add","C) conclude","D) contradict"],rep:'C',expl:"In conclusion = pour conclure."},
      {q:"'Such as' introduces:",opts:["A) a conclusion","B) a cause","C) an example","D) a contrast"],rep:'C',expl:"Such as = tels que (exemple)."},
      {q:"'On the other hand' expresses:",opts:["A) agreement","B) addition","C) contrast","D) conclusion"],rep:'C',expl:"On the other hand = d'un autre côté (contraste)."},
      {q:"'Owing to' is similar to:",opts:["A) however","B) because of","C) therefore","D) although"],rep:'B',expl:"Owing to = dû à / à cause de (cause)."}
    ]
  },

  // ── VOCABULAIRE B2 ────────────────────────────────────────────────

  {
    id:'voc_b2_m1',
    titre:'Le Monde du Travail Avancé',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Maîtriser le vocabulaire professionnel avancé",
      "Comprendre les termes de gestion et de leadership",
      "Utiliser le langage des réunions et négociations"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire professionnel de niveau B2 couvre la gestion, le leadership, les réunions et les négociations. Essentiel pour le TOEIC et le monde du travail."},
      {type:'lexique',titre:'Gestion et Leadership',items:[
        {en:"strategy",fr:"stratégie"},{en:"objective / goal",fr:"objectif"},
        {en:"deadline",fr:"date limite"},{en:"budget",fr:"budget"},
        {en:"revenue",fr:"revenu"},{en:"profit / loss",fr:"bénéfice / perte"},
        {en:"stakeholder",fr:"partie prenante"},{en:"benchmark",fr:"référence / benchmark"},
        {en:"KPI (Key Performance Indicator)",fr:"indicateur clé de performance"},{en:"ROI (Return on Investment)",fr:"retour sur investissement"}
      ]},
      {type:'lexique',titre:'Réunions et Négociations',items:[
        {en:"agenda",fr:"ordre du jour"},{en:"minutes",fr:"procès-verbal"},
        {en:"chairperson",fr:"président de séance"},{en:"action item",fr:"action à entreprendre"},
        {en:"consensus",fr:"consensus"},{en:"compromise",fr:"compromis"},
        {en:"concession",fr:"concession"},{en:"deal / agreement",fr:"accord"}
      ]},
      {type:'exemples',titre:'En contexte professionnel',items:[
        {en:"The CEO outlined the company's strategy for the next fiscal year.",fr:"Le PDG a présenté la stratégie de l'entreprise pour le prochain exercice."},
        {en:"We need to reach a consensus before the deadline.",fr:"Nous devons atteindre un consensus avant la date limite."},
        {en:"The ROI on this project exceeds our expectations.",fr:"Le ROI de ce projet dépasse nos attentes."},
        {en:"Let's table this item and come back to it after lunch.",fr:"Mettons ce point de côté et revenons-y après le déjeuner."}
      ]},
      {type:'conseil',texte:"Au TOEIC, le vocabulaire de gestion est très fréquent. Apprenez : revenue, profit, deadline, budget, stakeholder, consensus."}
    ],
    quiz:[
      {q:"'Revenue' means:",opts:["A) dépense","B) revenu","C) perte","D) budget"],rep:'B',expl:"Revenue = revenu."},
      {q:"A 'deadline' is:",opts:["A) a meeting","B) a date limit","C) a budget","D) a strategy"],rep:'B',expl:"Deadline = date limite."},
      {q:"'Stakeholder' means:",opts:["A) actionnaire uniquement","B) partie prenante","C) employé","D) client"],rep:'B',expl:"Stakeholder = partie prenante."},
      {q:"'ROI' stands for:",opts:["A) Rate of Interest","B) Return on Investment","C) Risk of Inflation","D) Revenue of Income"],rep:'B',expl:"ROI = Return on Investment."},
      {q:"An 'agenda' is:",opts:["A) a report","B) an order of topics","C) a budget","D) a contract"],rep:'B',expl:"Agenda = ordre du jour."},
      {q:"'Consensus' means:",opts:["A) disagreement","B) general agreement","C) conflict","D) negotiation"],rep:'B',expl:"Consensus = accord général."},
      {q:"'Minutes' in a meeting context are:",opts:["A) time units","B) meeting notes","C) deadlines","D) budgets"],rep:'B',expl:"Minutes = procès-verbal / notes de réunion."},
      {q:"A 'compromise' is:",opts:["A) a conflict","B) a mutual concession","C) a deadline","D) a strategy"],rep:'B',expl:"Compromise = compromis / concession mutuelle."},
      {q:"'KPI' stands for:",opts:["A) Key Performance Indicator","B) Key Project Index","C) Key Profit Income","D) Key Process Integration"],rep:'A',expl:"KPI = Key Performance Indicator."},
      {q:"'To table an item' means:",opts:["A) to discuss it now","B) to postpone it","C) to cancel it","D) to approve it"],rep:'B',expl:"Table an item = reporter/mettre de côté."}
    ]
  },

  {
    id:'voc_b2_m2',
    titre:'Politique et Société',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Maîtriser le vocabulaire politique et social",
      "Discuter des questions de société en anglais",
      "Utiliser le vocabulaire des droits et de la justice"
    ],
    contenu:[
      {type:'intro',texte:"La politique et la société sont des thèmes fréquents dans les examens et les débats. Ce module couvre le vocabulaire essentiel."},
      {type:'lexique',titre:'Politique et Gouvernance',items:[
        {en:"democracy",fr:"démocratie"},{en:"government",fr:"gouvernement"},
        {en:"parliament / congress",fr:"parlement / congrès"},{en:"election",fr:"élection"},
        {en:"policy",fr:"politique (mesure)"},{en:"law / legislation",fr:"loi / législation"},
        {en:"constitution",fr:"constitution"},{en:"citizen",fr:"citoyen"},
        {en:"human rights",fr:"droits de l'homme"},{en:"freedom of speech",fr:"liberté d'expression"}
      ]},
      {type:'lexique',titre:'Questions de Société',items:[
        {en:"inequality",fr:"inégalité"},{en:"poverty",fr:"pauvreté"},
        {en:"unemployment",fr:"chômage"},{en:"discrimination",fr:"discrimination"},
        {en:"gender equality",fr:"égalité des genres"},{en:"social justice",fr:"justice sociale"},
        {en:"immigration",fr:"immigration"},{en:"refugee",fr:"réfugié"},
        {en:"sustainable development",fr:"développement durable"},{en:"public health",fr:"santé publique"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Democracy requires active citizen participation.",fr:"La démocratie nécessite une participation active des citoyens."},
        {en:"Gender equality is a fundamental human right.",fr:"L'égalité des genres est un droit fondamental de l'homme."},
        {en:"The government introduced a new policy to reduce unemployment.",fr:"Le gouvernement a introduit une nouvelle politique pour réduire le chômage."},
        {en:"Poverty and inequality remain major challenges in many countries.",fr:"La pauvreté et l'inégalité restent des défis majeurs dans de nombreux pays."}
      ]},
      {type:'conseil',texte:"Au BAC, les thèmes de société sont TOUJOURS présents. Apprenez : inequality, poverty, discrimination, human rights, sustainable development."}
    ],
    quiz:[
      {q:"'Democracy' means:",opts:["A) dictatorship","B) rule by the people","C) monarchy","D) anarchy"],rep:'B',expl:"Democracy = gouvernement par le peuple."},
      {q:"'Human rights' are:",opts:["A) privileges","B) fundamental freedoms","C) laws","D) policies"],rep:'B',expl:"Human rights = droits fondamentaux / libertés."},
      {q:"'Inequality' means:",opts:["A) equality","B) unequal treatment","C) justice","D) freedom"],rep:'B',expl:"Inequality = inégalité."},
      {q:"'Gender equality' refers to:",opts:["A) male superiority","B) equal rights for all genders","C) female superiority","D) no rights"],rep:'B',expl:"Gender equality = égalité des genres."},
      {q:"'Unemployment' means:",opts:["A) having a job","B) not having a job","C) being retired","D) being a student"],rep:'B',expl:"Unemployment = chômage."},
      {q:"'Discrimination' means:",opts:["A) fair treatment","B) unfair treatment based on characteristics","C) equality","D) freedom"],rep:'B',expl:"Discrimination = traitement injuste basé sur des caractéristiques."},
      {q:"'Sustainable development' means:",opts:["A) rapid growth","B) development that meets present needs without compromising the future","C) industrial growth only","D) no development"],rep:'B',expl:"Développement durable."},
      {q:"A 'refugee' is:",opts:["A) a tourist","B) someone forced to flee their country","C) a citizen","D) a politician"],rep:'B',expl:"Refugee = personne forcée de fuir son pays."},
      {q:"'Freedom of speech' means:",opts:["A) censorship","B) the right to express opinions","C) silence","D) control"],rep:'B',expl:"Freedom of speech = liberté d'expression."},
      {q:"'Public health' refers to:",opts:["A) private hospitals","B) the health of the population","C) individual health only","D) medicine sales"],rep:'B',expl:"Public health = santé de la population."}
    ]
  },

  {
    id:'voc_b2_m3',
    titre:'Sciences et Innovation',
    niveau:'B2',
    duree:25,
    objectifs:[
      "Maîtriser le vocabulaire scientifique et technologique",
      "Discuter des avancées scientifiques en anglais",
      "Utiliser le langage de la recherche et de l'innovation"
    ],
    contenu:[
      {type:'intro',texte:"Les sciences et l'innovation sont des thèmes majeurs du 21e siècle. Ce module couvre le vocabulaire essentiel pour discuter de ces sujets."},
      {type:'lexique',titre:'Sciences et Recherche',items:[
        {en:"research",fr:"recherche"},{en:"experiment",fr:"expérience"},
        {en:"hypothesis",fr:"hypothèse"},{en:"data",fr:"données"},
        {en:"analysis",fr:"analyse"},{en:"discovery",fr:"découverte"},
        {en:"breakthrough",fr:"percée"},{en:"innovation",fr:"innovation"},
        {en:"technology",fr:"technologie"},{en:"artificial intelligence",fr:"intelligence artificielle"}
      ]},
      {type:'lexique',titre:'Innovation et Futur',items:[
        {en:"automation",fr:"automatisation"},{en:"robotics",fr:"robotique"},
        {en:"biotechnology",fr:"biotechnologie"},{en:"renewable energy",fr:"énergie renouvelable"},
        {en:"space exploration",fr:"exploration spatiale"},{en:"gene editing",fr:"édition génétique"},
        {en:"virtual reality",fr:"réalité virtuelle"},{en:"blockchain",fr:"blockchain"},
        {en:"nanotechnology",fr:"nanotechnologie"},{en:"quantum computing",fr:"informatique quantique"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Scientists have made a breakthrough in renewable energy.",fr:"Les scientifiques ont fait une percée dans l'énergie renouvelable."},
        {en:"Artificial intelligence is transforming many industries.",fr:"L'intelligence artificielle transforme de nombreuses industries."},
        {en:"The experiment confirmed the hypothesis.",fr:"L'expérience a confirmé l'hypothèse."},
        {en:"Space exploration has led to many technological advances.",fr:"L'exploration spatiale a conduit à de nombreuses avancées technologiques."}
      ]},
      {type:'conseil',texte:"Au BAC et au TOEIC, les thèmes scientifiques sont fréquents. Apprenez : research, breakthrough, innovation, data, analysis, hypothesis."}
    ],
    quiz:[
      {q:"'Research' means:",opts:["A) teaching","B) systematic investigation","C) guessing","D) copying"],rep:'B',expl:"Research = recherche / investigation systématique."},
      {q:"A 'hypothesis' is:",opts:["A) a fact","B) a proposed explanation","C) a conclusion","D) a result"],rep:'B',expl:"Hypothesis = hypothèse / explication proposée."},
      {q:"'Breakthrough' means:",opts:["A) failure","B) major discovery/advance","C) routine","D) problem"],rep:'B',expl:"Breakthrough = percée / avancée majeure."},
      {q:"'Data' refers to:",opts:["A) opinions","B) facts and statistics","C) feelings","D) stories"],rep:'B',expl:"Data = données / faits et statistiques."},
      {q:"'Automation' means:",opts:["A) manual work","B) using machines to do tasks","C) stopping work","D) hiring more people"],rep:'B',expl:"Automation = automatisation."},
      {q:"'Gene editing' is related to:",opts:["A) cooking","B) modifying DNA","C) building houses","D) writing books"],rep:'B',expl:"Gene editing = édition génétique (modification de l'ADN)."},
      {q:"'Virtual reality' creates:",opts:["A) real experiences","B) simulated environments","C) physical objects","D) natural landscapes"],rep:'B',expl:"Virtual reality = environnements simulés."},
      {q:"'Renewable energy' includes:",opts:["A) coal","B) oil","C) solar and wind","D) gas"],rep:'C',expl:"Énergie renouvelable = solaire et éolien."},
      {q:"'Quantum computing' is:",opts:["A) old technology","B) advanced computing using quantum mechanics","C) simple math","D) basic programming"],rep:'B',expl:"Quantum computing = informatique quantique avancée."},
      {q:"'Space exploration' means:",opts:["A) ocean diving","B) exploring outer space","C) mountain climbing","D) desert crossing"],rep:'B',expl:"Space exploration = exploration spatiale."}
    ]
  },

  {
    id:'voc_b2_m4',
    titre:'Arts et Littérature',
    niveau:'B2',
    duree:25,
    objectifs:[
      "Maîtriser le vocabulaire des arts et de la littérature",
      "Analyser des œuvres artistiques en anglais",
      "Discuter des mouvements artistiques"
    ],
    contenu:[
      {type:'intro',texte:"Les arts et la littérature sont des thèmes riches pour les essais et les discussions. Ce module couvre le vocabulaire essentiel."},
      {type:'lexique',titre:'Arts visuels',items:[
        {en:"painting",fr:"peinture"},{en:"sculpture",fr:"sculpture"},
        {en:"photography",fr:"photographie"},{en:"architecture",fr:"architecture"},
        {en:"exhibition",fr:"exposition"},{en:"gallery",fr:"galerie"},
        {en:"masterpiece",fr:"chef-d'œuvre"},{en:"portrait",fr:"portrait"},
        {en:"landscape",fr:"paysage"},{en:"abstract art",fr:"art abstrait"}
      ]},
      {type:'lexique',titre:'Littérature',items:[
        {en:"novel",fr:"roman"},{en:"poetry",fr:"poésie"},
        {en:"drama / play",fr:"pièce de théâtre"},{en:"short story",fr:"nouvelle"},
        {en:"fiction",fr:"fiction"},{en:"non-fiction",fr:"non-fiction"},
        {en:"biography",fr:"biographie"},{en:"metaphor",fr:"métaphore"},
        {en:"symbolism",fr:"symbolisme"},{en:"narrative",fr:"narration"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Shakespeare's plays are considered masterpieces of English literature.",fr:"Les pièces de Shakespeare sont considérées comme des chefs-d'œuvre de la littérature anglaise."},
        {en:"The exhibition featured contemporary African artists.",fr:"L'exposition présentait des artistes africains contemporains."},
        {en:"The novel uses symbolism to explore themes of identity.",fr:"Le roman utilise le symbolisme pour explorer les thèmes de l'identité."},
        {en:"Her poetry captures the beauty of everyday life.",fr:"Sa poésie capture la beauté de la vie quotidienne."}
      ]},
      {type:'conseil',texte:"Au BAC, l'analyse de texte littéraire est fréquente. Apprenez : metaphor, symbolism, narrative, theme, character, plot."}
    ],
    quiz:[
      {q:"A 'masterpiece' is:",opts:["A) a bad work","B) an outstanding work of art","C) a copy","D) a sketch"],rep:'B',expl:"Masterpiece = chef-d'œuvre."},
      {q:"'Poetry' is:",opts:["A) prose","B) verse writing","C) drama","D) fiction"],rep:'B',expl:"Poetry = poésie / écriture en vers."},
      {q:"A 'metaphor' is:",opts:["A) a literal statement","B) a figurative comparison","C) a question","D) a fact"],rep:'B',expl:"Metaphor = comparaison figurée."},
      {q:"'Symbolism' means:",opts:["A) literal meaning","B) using symbols to represent ideas","C) direct speech","D) simple writing"],rep:'B',expl:"Symbolism = utilisation de symboles pour représenter des idées."},
      {q:"A 'biography' is:",opts:["A) a fictional story","B) a life story written by someone else","C) a poem","D) a play"],rep:'B',expl:"Biography = biographie."},
      {q:"'Abstract art' does not:",opts:["A) use colors","B) represent reality directly","C) exist","D) have meaning"],rep:'B',expl:"L'art abstrait ne représente pas la réalité directement."},
      {q:"'Fiction' means:",opts:["A) real events","B) invented stories","C) news","D) history"],rep:'B',expl:"Fiction = histoires inventées."},
      {q:"An 'exhibition' is:",opts:["A) a sale","B) a public display of art","C) a concert","D) a movie"],rep:'B',expl:"Exhibition = exposition d'art."},
      {q:"'Narrative' refers to:",opts:["A) a song","B) a story or account","C) a painting","D) a sculpture"],rep:'B',expl:"Narrative = narration / histoire."},
      {q:"A 'portrait' is:",opts:["A) a landscape","B) a depiction of a person","C) an abstract work","D) a sculpture only"],rep:'B',expl:"Portrait = représentation d'une personne."}
    ]
  },

  {
    id:'voc_b2_m5',
    titre:'Médias et Communication Avancés',
    niveau:'B2',
    duree:25,
    objectifs:[
      "Maîtriser le vocabulaire des médias et de la communication",
      "Analyser des articles et des reportages",
      "Comprendre le langage journalistique avancé"
    ],
    contenu:[
      {type:'intro',texte:"Les médias et la communication sont au cœur de la société moderne. Ce module couvre le vocabulaire avancé pour analyser et discuter des médias."},
      {type:'lexique',titre:'Médias et Journalisme',items:[
        {en:"journalism",fr:"journalisme"},{en:"broadcast",fr:"diffusion"},
        {en:"headline",fr:"titre"},{en:"editorial",fr:"éditorial"},
        {en:"investigation",fr:"investigation"},{en:"coverage",fr:"couverture"},
        {en:"censorship",fr:"censure"},{en:"freedom of the press",fr:"liberté de la presse"},
        {en:"misinformation",fr:"désinformation"},{en:"fact-checking",fr:"vérification des faits"}
      ]},
      {type:'lexique',titre:'Communication Avancée',items:[
        {en:"persuasion",fr:"persuasion"},{en:"negotiation",fr:"négociation"},
        {en:"mediation",fr:"médiation"},{en:"diplomacy",fr:"diplomatie"},
        {en:"public relations",fr:"relations publiques"},{en:"branding",fr:"image de marque"},
        {en:"target audience",fr:"public cible"},{en:"campaign",fr:"campagne"},
        {en:"messaging",fr:"message / communication"},{en:"engagement",fr:"engagement"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Freedom of the press is essential for democracy.",fr:"La liberté de la presse est essentielle pour la démocratie."},
        {en:"The journalist conducted a thorough investigation.",fr:"Le journaliste a mené une investigation approfondie."},
        {en:"Misinformation spreads faster than facts on social media.",fr:"La désinformation se propage plus vite que les faits sur les réseaux sociaux."},
        {en:"The company launched a new branding campaign.",fr:"L'entreprise a lancé une nouvelle campagne d'image de marque."}
      ]},
      {type:'conseil',texte:"Au BAC et au TOEIC, les thèmes médiatiques sont fréquents. Apprenez : journalism, investigation, censorship, misinformation, freedom of the press."}
    ],
    quiz:[
      {q:"'Journalism' is:",opts:["A) fiction writing","B) the practice of reporting news","C) poetry","D) advertising"],rep:'B',expl:"Journalism = pratique du reportage d'actualités."},
      {q:"'Censorship' means:",opts:["A) freedom","B) suppression of information","C) publication","D) broadcasting"],rep:'B',expl:"Censorship = censure / suppression d'information."},
      {q:"'Misinformation' is:",opts:["A) correct information","B) false or inaccurate information","C) news","D) facts"],rep:'B',expl:"Misinformation = désinformation / informations fausses."},
      {q:"'Fact-checking' means:",opts:["A) creating facts","B) verifying information","C) ignoring facts","D) inventing stories"],rep:'B',expl:"Fact-checking = vérification des faits."},
      {q:"'Persuasion' means:",opts:["A) forcing","B) convincing someone","C) ignoring","D) asking"],rep:'B',expl:"Persuasion = convaincre."},
      {q:"'Diplomacy' is:",opts:["A) war","B) managing international relations","C) trade","D) tourism"],rep:'B',expl:"Diplomacy = gestion des relations internationales."},
      {q:"'Target audience' refers to:",opts:["A) everyone","B) the specific group a message is aimed at","C) the author","D) the publisher"],rep:'B',expl:"Target audience = public cible."},
      {q:"'Broadcast' means:",opts:["A) to receive","B) to transmit (radio/TV)","C) to write","D) to print"],rep:'B',expl:"Broadcast = diffuser (radio/télévision)."},
      {q:"'Coverage' in journalism means:",opts:["A) insurance","B) reporting on an event","C) hiding","D) ignoring"],rep:'B',expl:"Coverage = couverture médiatique."},
      {q:"'Freedom of the press' means:",opts:["A) government control","B) the right to publish without censorship","C) no news","D) only state media"],rep:'B',expl:"Liberté de la presse = droit de publier sans censure."}
    ]
  },

  // ── LISTENING & SPEAKING B2 ───────────────────────────────────────

  {
    id:'listen_b2_m1',
    titre:'Listening — Conférences et Présentations',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Comprendre des conférences académiques en anglais",
      "Identifier la structure d'une présentation",
      "Prendre des notes efficacement"
    ],
    contenu:[
      {type:'intro',texte:"Les conférences et présentations académiques utilisent un langage structuré et formel. Ce module vous entraîne à suivre et comprendre ce type de discours."},
      {type:'tableau',titre:'Structure d\'une présentation',headers:["Partie","Expressions clés","Fonction"],rows:[
        ["Introduction","Today I'd like to talk about...","Présenter le sujet"],
        ["Outline","First, I'll cover... Then we'll look at...","Annoncer le plan"],
        ["Point 1","Let's start with... / The first point is...","Développer le premier point"],
        ["Point 2","Moving on to... / Next, let's consider...","Développer le second point"],
        ["Transition","This brings me to... / As you can see...","Transition entre points"],
        ["Conclusion","To sum up... / In conclusion...","Résumer et conclure"],
        ["Q&A","I'd be happy to take any questions.","Ouvrir aux questions"]
      ]},
      {type:'regle',titre:'Stratégies de prise de notes',texte:"1. Notez les mots-clés, pas les phrases complètes\n2. Utilisez des abréviations (gov = government, edu = education)\n3. Notez les chiffres et les noms propres\n4. Utilisez des flèches et des symboles (→ = leads to, ↑ = increase)\n5. Structurez avec des tirets et des numéros"},
      {type:'exemples',titre:'Extrait de conférence',items:[
        {en:"Good morning. Today I'd like to talk about the impact of technology on education. First, I'll cover how digital tools have transformed the classroom. Then, we'll look at the challenges of online learning. Finally, I'll discuss the future of education in the digital age.",fr:"Bonjour. Aujourd'hui, j'aimerais parler de l'impact de la technologie sur l'éducation. D'abord, je couvrirai comment les outils numériques ont transformé la salle de classe. Ensuite, nous examinerons les défis de l'apprentissage en ligne. Enfin, je discuterai du futur de l'éducation dans l'ère numérique."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Écoutez des TED Talks en anglais. Commencez avec les sous-titres, puis sans. Notez 5 mots nouveaux par vidéo."}
    ],
    quiz:[
      {q:"'Today I'd like to talk about...' is used in:",opts:["A) the conclusion","B) the introduction","C) the middle","D) the Q&A"],rep:'B',expl:"Présenter le sujet = introduction."},
      {q:"'Moving on to...' is a:",opts:["A) conclusion","B) transition","C) greeting","D) question"],rep:'B',expl:"Moving on to = transition entre points."},
      {q:"'To sum up...' is used to:",opts:["A) start","B) add","C) conclude","D) question"],rep:'C',expl:"To sum up = conclure."},
      {q:"'I'd be happy to take any questions' opens:",opts:["A) the introduction","B) the Q&A session","C) the conclusion","D) the outline"],rep:'B',expl:"Ouvrir aux questions = session Q&A."},
      {q:"In note-taking, '→' typically means:",opts:["A) stops","B) leads to / results in","C) equals","D) is different from"],rep:'B',expl:"Flèche → = mène à / résulte en."},
      {q:"'First, I'll cover...' is part of:",opts:["A) the conclusion","B) the outline","C) the Q&A","D) the greeting"],rep:'B',expl:"Annoncer le plan = outline."},
      {q:"'As you can see...' is used to:",opts:["A) introduce a new topic","B) refer to evidence/data","C) conclude","D) greet"],rep:'B',expl:"Se référer à des preuves/données."},
      {q:"A TED Talk is typically:",opts:["A) a song","B) a short presentation","C) a movie","D) a book"],rep:'B',expl:"TED Talk = courte présentation."},
      {q:"'Finally, I'll discuss...' signals:",opts:["A) the first point","B) the last point","C) a question","D) a break"],rep:'B',expl:"Finally = dernier point."},
      {q:"Good note-taking uses:",opts:["A) full sentences","B) keywords and abbreviations","C) only drawings","D) nothing"],rep:'B',expl:"Prise de notes efficace = mots-clés et abréviations."}
    ]
  },

  {
    id:'listen_b2_m2',
    titre:'Listening — Débats et Négociations',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Comprendre des débats complexes en anglais",
      "Suivre des négociations professionnelles",
      "Identifier les positions et les compromis"
    ],
    contenu:[
      {type:'intro',texte:"Les débats et négociations utilisent un langage sophistiqué avec des arguments, des contre-arguments et des compromis. Ce module vous prépare à ces échanges."},
      {type:'tableau',titre:'Expressions de négociation',headers:["Expression","Sens","Exemple"],rows:[
        ["We'd be willing to... if you could...","Proposition conditionnelle","We'd be willing to lower the price if you increase the order."],
        ["That's not quite what we had in mind.","Désaccord poli","That's not quite what we had in mind. Could we explore other options?"],
        ["We could meet you halfway.","Proposition de compromis","We could meet you halfway on the delivery date."],
        ["I'm afraid that's our final offer.","Dernière offre","I'm afraid that's our final offer."],
        ["Let's explore other options.","Chercher des alternatives","Let's explore other options before we decide."],
        ["We have a deal.","Accord conclu","We have a deal. Let's sign the contract."]
      ]},
      {type:'regle',titre:'Stratégies de compréhension',texte:"1. Identifiez les positions de chaque partie\n2. Notez les concessions et les compromis\n3. Repérez les points de blocage\n4. Identifiez l'accord final ou l'impasse"},
      {type:'exemples',titre:'Négociation type',items:[
        {en:"A: We'd like to order 500 units, but we need a 15% discount.\nB: I'm afraid 15% is too high. We could offer 10% for that quantity.\nA: That's not quite what we had in mind. We could meet you halfway at 12.5%.\nB: Let me check with my team... OK, we can do 12.5% if you commit to a yearly contract.\nA: We have a deal. Let's sign the contract.",fr:"A : Nous aimerions commander 500 unités, mais nous avons besoin d'une remise de 15%.\nB : Je crains que 15% soit trop élevé. Nous pourrions offrir 10% pour cette quantité.\nA : Ce n'est pas tout à fait ce que nous avions en tête. Nous pourrions nous rencontrer à mi-chemin à 12,5%.\nB : Laissez-moi vérifier avec mon équipe... OK, nous pouvons faire 12,5% si vous vous engagez sur un contrat annuel.\nA : Nous avons un accord. Signons le contrat."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans les négociations, repérez les marqueurs de compromis : meet halfway, willing to, could offer, let's explore."}
    ],
    quiz:[
      {q:"'We'd be willing to...' expresses:",opts:["A) refusal","B) conditional agreement","C) anger","D) confusion"],rep:'B',expl:"Willing to = disposé à (accord conditionnel)."},
      {q:"'Meet you halfway' means:",opts:["A) travel to meet","B) compromise","C) refuse","D) argue"],rep:'B',expl:"Meet halfway = faire un compromis."},
      {q:"'That's our final offer' means:",opts:["A) negotiation continues","B) no further negotiation possible","C) new offer coming","D) agreement reached"],rep:'B',expl:"Final offer = dernière offre, pas de négociation supplémentaire."},
      {q:"'We have a deal' means:",opts:["A) negotiation failed","B) agreement reached","C) offer rejected","D) discussion starting"],rep:'B',expl:"We have a deal = accord conclu."},
      {q:"'Let's explore other options' suggests:",opts:["A) agreement","B) looking for alternatives","C) ending discussion","D) accepting offer"],rep:'B',expl:"Explorer d'autres options = chercher des alternatives."},
      {q:"'I'm afraid that's too high' is:",opts:["A) agreement","B) polite disagreement","C) anger","D) confusion"],rep:'B',expl:"I'm afraid = désaccord poli."},
      {q:"A 'concession' in negotiation is:",opts:["A) a demand","B) something you give up to reach agreement","C) a refusal","D) a threat"],rep:'B',expl:"Concession = quelque chose qu'on cède pour arriver à un accord."},
      {q:"'Could we explore other options?' is:",opts:["A) a demand","B) a suggestion","C) an order","D) a refusal"],rep:'B',expl:"Suggestion d'explorer d'autres options."},
      {q:"An 'impasse' in negotiation means:",opts:["A) agreement","B) deadlock / no progress","C) success","D) compromise"],rep:'B',expl:"Impasse = blocage / pas de progrès."},
      {q:"'Let me check with my team' is used to:",opts:["A) agree immediately","B) buy time / consult","C) refuse","D) end negotiation"],rep:'B',expl:"Acheter du temps / consulter l'équipe."}
    ]
  },

  {
    id:'speak_b2_m1',
    titre:'Speaking — Présentations Professionnelles',
    niveau:'B2',
    duree:30,
    objectifs:[
      "Structurer une présentation professionnelle en anglais",
      "Utiliser un langage formel et persuasif",
      "Gérer les questions du public"
    ],
    contenu:[
      {type:'intro',texte:"Les présentations professionnelles sont essentielles dans le monde du travail et les études. Ce module vous donne les outils pour présenter avec confiance."},
      {type:'tableau',titre:'Structure d\'une présentation',headers:["Partie","Expressions","Exemple"],rows:[
        ["Ouverture","Good morning/afternoon. Thank you for being here.","Good morning. Thank you for joining us today."],
        ["Introduction","Today I'd like to present/discuss...","Today I'd like to present our new marketing strategy."],
        ["Plan","I'll divide my presentation into three parts.","I'll divide my presentation into three parts."],
        ["Développement","Let's move on to... / As you can see from this chart...","Let's move on to our sales figures."],
        ["Transition","This brings me to my next point...","This brings me to my next point: customer feedback."],
        ["Conclusion","To sum up... / In conclusion...","To sum up, our strategy focuses on three key areas."],
        ["Q&A","I'd now like to open the floor to questions.","I'd now like to open the floor to questions."]
      ]},
      {type:'regle',titre:'Langage persuasif',texte:"• Utilisez des données : According to our research, 75% of...\n• Utilisez des exemples : For instance, our pilot program showed...\n• Utilisez des comparaisons : Compared to last year, we've seen a 20% increase.\n• Utilisez des appels à l'action : I recommend that we..."},
      {type:'exemples',titre:'Présentation type',items:[
        {en:"Good morning. Thank you for being here. Today I'd like to present our new digital strategy. I'll divide my presentation into three parts. First, I'll review our current performance. Then, I'll present our proposed changes. Finally, I'll outline the expected results.\n\nLet's start with our current performance. As you can see from this chart, our online sales have increased by 30% compared to last year. This brings me to my next point: our proposed changes.\n\nTo sum up, our strategy focuses on three key areas: digital marketing, customer engagement, and data analysis. I'd now like to open the floor to questions.",fr:"Bonjour. Merci d'être ici. Aujourd'hui, j'aimerais présenter notre nouvelle stratégie numérique. Je diviserai ma présentation en trois parties. D'abord, je passerai en revue notre performance actuelle. Ensuite, je présenterai nos changements proposés. Enfin, je décrirai les résultats attendus.\n\nCommençons par notre performance actuelle. Comme vous pouvez le voir sur ce graphique, nos ventes en ligne ont augmenté de 30% par rapport à l'année dernière. Cela m'amène à mon prochain point : nos changements proposés.\n\nPour résumer, notre stratégie se concentre sur trois axes clés : le marketing numérique, l'engagement client et l'analyse de données. J'aimerais maintenant ouvrir la floor aux questions."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Pratiquez votre présentation au moins 3 fois avant de la donner. Enregistrez-vous pour identifier les points à améliorer."}
    ],
    quiz:[
      {q:"'Thank you for being here' is used in:",opts:["A) the conclusion","B) the opening","C) the middle","D) the Q&A"],rep:'B',expl:"Remerciement d'ouverture."},
      {q:"'I'll divide my presentation into three parts' is:",opts:["A) the conclusion","B) the outline","C) the Q&A","D) the data"],rep:'B',expl:"Annoncer le plan = outline."},
      {q:"'As you can see from this chart' refers to:",opts:["A) a person","B) visual data","C) a question","D) a conclusion"],rep:'B',expl:"Se référer à des données visuelles."},
      {q:"'This brings me to my next point' is a:",opts:["A) conclusion","B) transition","C) greeting","D) question"],rep:'B',expl:"Transition entre points."},
      {q:"'To sum up' is used to:",opts:["A) start","B) add","C) conclude","D) question"],rep:'C',expl:"To sum up = conclure."},
      {q:"'I'd now like to open the floor to questions' opens:",opts:["A) the presentation","B) the Q&A session","C) the conclusion","D) the outline"],rep:'B',expl:"Ouvrir aux questions = session Q&A."},
      {q:"'According to our research' introduces:",opts:["A) an opinion","B) data/evidence","C) a question","D) a greeting"],rep:'B',expl:"Introduire des données/preuves."},
      {q:"'Compared to last year' is used for:",opts:["A) greeting","B) comparison","C) conclusion","D) question"],rep:'B',expl:"Comparison = comparaison."},
      {q:"'I recommend that we...' is:",opts:["A) a question","B) a call to action","C) a greeting","D) a conclusion"],rep:'B',expl:"Appel à l'action / recommandation."},
      {q:"A good presentation should be practiced:",opts:["A) never","B) once","C) at least 3 times","D) 100 times"],rep:'C',expl:"Au moins 3 fois."}
    ]
  },

  // ── WRITING B2 ────────────────────────────────────────────────────

  {
    id:'write_b2_m1',
    titre:'Writing — Essais Académiques Avancés',
    niveau:'B2',
    duree:40,
    objectifs:[
      "Rédiger des essais académiques de niveau B2/C1",
      "Utiliser des structures grammaticales complexes",
      "Intégrer des citations et des références"
    ],
    contenu:[
      {type:'intro',texte:"L'essai académique de niveau B2 demande une argumentation sophistiquée, des structures complexes et un vocabulaire riche. Ce module vous prépare à cet exercice."},
      {type:'tableau',titre:'Structure d\'un essai académique avancé',headers:["Partie","Contenu","Structures clés"],rows:[
        ["Introduction","Hook + contexte + thèse","It is widely argued that... This essay will examine..."],
        ["Paragraphe 1","Argument principal + preuve","The primary reason is... According to research..."],
        ["Paragraphe 2","Argument secondaire + exemple","Furthermore, evidence suggests that..."],
        ["Paragraphe 3","Contre-argument + réfutation","Admittedly, ... However, this argument fails to consider..."],
        ["Conclusion","Synthèse + ouverture","In light of the above, it is evident that..."]
      ]},
      {type:'regle',titre:'Structures grammaticales avancées',texte:"• Inversion : Not only does technology improve education, but it also...\n• Participe passé : Having considered both sides, it is clear that...\n• Subjonctif : It is essential that every student have access to...\n• Relative complexe : The students, who had studied for months, passed with flying colors."},
      {type:'exemples',titre:'Essai type B2 — L\'impact de la mondialisation',items:[
        {en:"It is widely argued that globalisation has transformed the world economy. This essay will examine both the benefits and drawbacks of this phenomenon.\n\nThe primary reason globalisation is beneficial is that it promotes economic growth. According to the World Bank, countries that have embraced global trade have seen significant increases in GDP. Furthermore, globalisation facilitates cultural exchange, which enriches societies and fosters mutual understanding.\n\nAdmittedly, globalisation has led to job losses in certain sectors. However, this argument fails to consider that new industries and opportunities emerge as a result of global integration.\n\nIn light of the above, it is evident that globalisation, despite its challenges, has brought more benefits than drawbacks to the world economy.",fr:"Il est largement soutenu que la mondialisation a transformé l'économie mondiale. Cet essai examinera les avantages et les inconvénients de ce phénomène.\n\nLa raison principale pour laquelle la mondialisation est bénéfique est qu'elle favorise la croissance économique. Selon la Banque mondiale, les pays qui ont embrassé le commerce mondial ont connu des augmentations significatives du PIB. De plus, la mondialisation facilite les échanges culturels, ce qui enrichit les sociétés et favorise la compréhension mutuelle.\n\nCertes, la mondialisation a entraîné des pertes d'emplois dans certains secteurs. Cependant, cet argument ne tient pas compte du fait que de nouvelles industries et opportunités émergent grâce à l'intégration mondiale.\n\nÀ la lumière de ce qui précède, il est évident que la mondialisation, malgré ses défis, a apporté plus d'avantages que d'inconvénients à l'économie mondiale."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, utilisez au moins une structure avancée (inversion, participe, subjonctif) par paragraphe pour impressionner les correcteurs."}
    ],
    quiz:[
      {q:"'It is widely argued that...' is used to:",opts:["A) state a personal opinion","B) introduce a common debate","C) conclude","D) ask a question"],rep:'B',expl:"Introduire un débat commun."},
      {q:"'Not only does... but it also...' is an example of:",opts:["A) simple sentence","B) inversion","C) question","D) command"],rep:'B',expl:"Inversion stylistique."},
      {q:"'Having considered both sides' uses:",opts:["A) simple present","B) past participle","C) future","D) imperative"],rep:'B',expl:"Participe passé pour introduire une conclusion."},
      {q:"'Admittedly' introduces:",opts:["A) your main argument","B) a counter-argument you acknowledge","C) a conclusion","D) a question"],rep:'B',expl:"Admittedly = certes (reconnaître un contre-argument)."},
      {q:"'In light of the above' is used in:",opts:["A) the introduction","B) the body","C) the conclusion","D) the title"],rep:'C',expl:"In light of the above = à la lumière de ce qui précède (conclusion)."},
      {q:"'According to research' introduces:",opts:["A) an opinion","B) evidence","C) a question","D) a greeting"],rep:'B',expl:"Introduire des preuves."},
      {q:"'This essay will examine...' is part of:",opts:["A) the conclusion","B) the introduction","C) the body","D) the title"],rep:'B',expl:"Annoncer le plan = introduction."},
      {q:"'However, this argument fails to consider...' is:",opts:["A) agreement","B) refutation","C) conclusion","D) greeting"],rep:'B',expl:"Réfutation d'un contre-argument."},
      {q:"A 'hook' in an introduction is:",opts:["A) the conclusion","B) an attention-grabbing opening","C) a reference","D) a summary"],rep:'B',expl:"Hook = ouverture accrocheuse."},
      {q:"'Furthermore' is a connector of:",opts:["A) opposition","B) addition","C) conclusion","D) example"],rep:'B',expl:"Furthermore = de plus (addition)."}
    ]
  },

  {
    id:'write_b2_m2',
    titre:'Writing — Lettres de Motivation et CV',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Rédiger une lettre de motivation en anglais",
      "Structurer un CV en format anglophone",
      "Utiliser le vocabulaire du recrutement"
    ],
    contenu:[
      {type:'intro',texte:"La lettre de motivation et le CV sont essentiels pour postuler à un emploi ou une formation. Ce module vous donne les structures et le vocabulaire nécessaires."},
      {type:'tableau',titre:'Structure d\'une lettre de motivation',headers:["Partie","Contenu","Exemple"],rows:[
        ["En-tête","Vos coordonnées + date","12 Rue des Fleurs, Abidjan\n15 April 2025"],
        ["Destinataire","Nom et titre du recruteur","Dear Mr. Koné, Hiring Manager"],
        ["Ouverture","Poste visé + source","I am writing to apply for the Marketing Manager position advertised on your website."],
        ["Paragraphe 1","Vos qualifications","With a degree in Marketing and 3 years of experience..."],
        ["Paragraphe 2","Vos réalisations","In my previous role, I increased sales by 25%..."],
        ["Paragraphe 3","Pourquoi cette entreprise","I am particularly drawn to your company because..."],
        ["Clôture","Disponibilité + remerciement","I would welcome the opportunity to discuss my application in an interview."],
        ["Formule","Yours sincerely + signature","Yours sincerely, Fatou Diallo"]
      ]},
      {type:'regle',titre:'Verbes d\'action pour le CV',texte:"• Managed a team of 10 employees\n• Increased sales by 25%\n• Developed a new marketing strategy\n• Implemented a customer feedback system\n• Led a cross-functional project\n• Achieved a 95% customer satisfaction rate"},
      {type:'exemples',titre:'Lettre de motivation type',items:[
        {en:"Dear Mr. Koné,\n\nI am writing to apply for the Marketing Manager position at AGTM Academy, as advertised on your website. With a degree in Marketing from the University of Abidjan and three years of experience in digital marketing, I am confident that I can make a valuable contribution to your team.\n\nIn my previous role at Digital Solutions CI, I managed a team of five and increased online engagement by 40% through targeted social media campaigns. I also developed a content strategy that resulted in a 25% increase in website traffic.\n\nI am particularly drawn to AGTM Academy because of its commitment to innovation in education. I would welcome the opportunity to discuss how my skills and experience align with your needs.\n\nThank you for considering my application. I look forward to hearing from you.\n\nYours sincerely,\nFatou Diallo",fr:"Cher M. Koné,\n\nJe vous écris pour postuler au poste de Responsable Marketing à AGTM Academy, tel qu'annoncé sur votre site. Avec un diplôme en Marketing de l'Université d'Abidjan et trois ans d'expérience en marketing numérique, je suis convaincue de pouvoir apporter une contribution précieuse à votre équipe.\n\nDans mon rôle précédent chez Digital Solutions CI, j'ai géré une équipe de cinq personnes et augmenté l'engagement en ligne de 40% grâce à des campagnes ciblées sur les réseaux sociaux. J'ai également développé une stratégie de contenu qui a entraîné une augmentation de 25% du trafic du site.\n\nJe suis particulièrement attirée par AGTM Academy en raison de son engagement pour l'innovation dans l'éducation. Je serais ravie de discuter de la manière dont mes compétences et mon expérience correspondent à vos besoins.\n\nMerci de considérer ma candidature. Dans l'attente de votre réponse.\n\nCordialement,\nFatou Diallo"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Utilisez des verbes d'action au passé pour vos expériences passées (managed, increased, developed). Utilisez le présent pour vos compétences actuelles."}
    ],
    quiz:[
      {q:"A cover letter should start with:",opts:["A) Hi!","B) Dear [Name],","C) Hey!","D) What's up?"],rep:'B',expl:"Lettre formelle → Dear [Name]."},
      {q:"'I am writing to apply for...' is used to:",opts:["A) complain","B) apply for a position","C) thank","D) invite"],rep:'B',expl:"Postuler = apply for."},
      {q:"'Managed a team' uses a(n):",opts:["A) passive verb","B) action verb","C) adjective","D) noun"],rep:'B',expl:"Managed = verbe d'action."},
      {q:"'Increased sales by 25%' shows:",opts:["A) a problem","B) an achievement","C) a weakness","D) a hobby"],rep:'B',expl:"Achievement = réalisation."},
      {q:"'Yours sincerely' is used when:",opts:["A) you don't know the name","B) you know the name","C) writing to a friend","D) writing an email"],rep:'B',expl:"Yours sincerely = quand on connaît le nom."},
      {q:"'I look forward to hearing from you' means:",opts:["A) I'm listening","B) I'm waiting for your reply","C) I'm calling you","D) I'm meeting you"],rep:'B',expl:"Dans l'attente de votre réponse."},
      {q:"A CV in the US is called a:",opts:["A) letter","B) resume","C) report","D) memo"],rep:'B',expl:"CV (US) = resume."},
      {q:"'Developed a new strategy' uses:",opts:["A) present tense","B) past tense action verb","C) future tense","D) passive voice"],rep:'B',expl:"Developed = verbe d'action au passé."},
      {q:"'I am particularly drawn to...' expresses:",opts:["A) dislike","B) strong interest","C) confusion","D) anger"],rep:'B',expl:"Drawn to = attiré par / intéressé par."},
      {q:"A cover letter should be:",opts:["A) 5 pages","B) 1 page","C) 10 pages","D) no limit"],rep:'B',expl:"Une lettre de motivation = 1 page maximum."}
    ]
  },

  // ── CULTURE B2 ────────────────────────────────────────────────────

  {
    id:'cult_b2_m1',
    titre:'Littérature Anglophone — Grands Auteurs',
    niveau:'B2',
    duree:25,
    objectifs:[
      "Connaître les grands auteurs de la littérature anglophone",
      "Comprendre les mouvements littéraires majeurs",
      "Analyser des extraits littéraires en anglais"
    ],
    contenu:[
      {type:'intro',texte:"La littérature anglophone est riche et diversifiée. Connaître les grands auteurs et leurs œuvres est essentiel pour la culture générale et les examens."},
      {type:'tableau',titre:'Grands auteurs anglophones',headers:["Auteur","Nationalité","Œuvres majeures","Thèmes"],rows:[
        ["William Shakespeare","UK","Hamlet, Romeo and Juliet","Amour, pouvoir, trahison"],
        ["Charles Dickens","UK","Oliver Twist, A Tale of Two Cities","Injustice sociale, pauvreté"],
        ["Jane Austen","UK","Pride and Prejudice","Classe sociale, mariage, amour"],
        ["Mark Twain","USA","The Adventures of Tom Sawyer","Liberté, enfance, société"],
        ["Ernest Hemingway","USA","The Old Man and the Sea","Courage, nature, solitude"],
        ["Chinua Achebe","Nigeria","Things Fall Apart","Colonialisme, tradition vs modernité"],
        ["Maya Angelou","USA","I Know Why the Caged Bird Sings","Race, identité, résilience"],
        ["Wole Soyinka","Nigeria","Death and the King's Horseman","Tradition, pouvoir, sacrifice"]
      ]},
      {type:'regle',titre:'Mouvements littéraires',texte:"• Renaissance (16e-17e) : Shakespeare, Marlowe — théâtre, poésie\n• Romanticisme (18e-19e) : Wordsworth, Keats — nature, émotion\n• Réalisme (19e) : Dickens, Austen — société, classes sociales\n• Modernisme (20e) : Hemingway, Woolf — fragmentation, conscience\n• Postcolonialisme (20e-21e) : Achebe, Soyinka — identité, décolonisation"},
      {type:'exemples',titre:'Citations célèbres',items:[
        {en:"'To be or not to be, that is the question.' — Shakespeare, Hamlet",fr:"Être ou ne pas être, telle est la question."},
        {en:"'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.' — Jane Austen, Pride and Prejudice",fr:"C'est une vérité universellement reconnue qu'un célibataire disposant d'une belle fortune doit avoir besoin d'une femme."},
        {en:"'Until the lions have their own historians, the history of the hunt will always glorify the hunter.' — Chinua Achebe",fr:"Jusqu'à ce que les lions aient leurs propres historiens, l'histoire de la chasse glorifiera toujours le chasseur."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, on vous demande parfois d'analyser un extrait littéraire. Apprenez à identifier le thème, le ton et les procédés stylistiques."}
    ],
    quiz:[
      {q:"'To be or not to be' is from:",opts:["A) Romeo and Juliet","B) Hamlet","C) Macbeth","D) Othello"],rep:'B',expl:"Hamlet de Shakespeare."},
      {q:"Charles Dickens wrote about:",opts:["A) space","B) social injustice","C) science","D) sports"],rep:'B',expl:"Dickens = injustice sociale, pauvreté."},
      {q:"Chinua Achebe is from:",opts:["A) USA","B) UK","C) Nigeria","D) Ghana"],rep:'C',expl:"Achebe = Nigeria."},
      {q:"'Things Fall Apart' deals with:",opts:["A) science","B) colonialism and tradition","C) sports","D) technology"],rep:'B',expl:"Thèmes : colonialisme, tradition vs modernité."},
      {q:"Maya Angelou wrote about:",opts:["A) war","B) race, identity, resilience","C) science","D) business"],rep:'B',expl:"Race, identité, résilience."},
      {q:"Jane Austen's 'Pride and Prejudice' is about:",opts:["A) war","B) class, marriage, love","C) science","D) politics"],rep:'B',expl:"Classe sociale, mariage, amour."},
      {q:"The Romanticism movement focused on:",opts:["A) technology","B) nature and emotion","C) business","D) politics"],rep:'B',expl:"Romantisme = nature et émotion."},
      {q:"Wole Soyinka won the:",opts:["A) Oscar","B) Nobel Prize in Literature","C) Grammy","D) Pulitzer"],rep:'B',expl:"Prix Nobel de littérature 1986."},
      {q:"Ernest Hemingway is known for:",opts:["A) long sentences","B) short, direct prose","C) poetry","D) plays"],rep:'B',expl:"Style : prose courte et directe."},
      {q:"Postcolonial literature deals with:",opts:["A) science fiction","B) identity and decolonization","C) romance","D) horror"],rep:'B',expl:"Identité et décolonisation."}
    ]
  },

  {
    id:'cult_b2_m2',
    titre:'Cinéma et Médias Anglophones',
    niveau:'B2',
    duree:25,
    objectifs:[
      "Connaître les grands films et réalisateurs anglophones",
      "Comprendre l'industrie du cinéma (Hollywood, Nollywood)",
      "Utiliser le vocabulaire cinématographique"
    ],
    contenu:[
      {type:'intro',texte:"Le cinéma anglophone est une industrie mondiale majeure. Connaître les films, les réalisateurs et le vocabulaire cinématographique enrichit votre culture générale."},
      {type:'tableau',titre:'Grands films et réalisateurs',headers:["Réalisateur","Nationalité","Films majeurs","Style"],rows:[
        ["Steven Spielberg","USA","Schindler's List, Jaws","Blockbuster, émotion"],
        ["Martin Scorsese","USA","Goodfellas, The Departed","Crime, morale"],
        ["Christopher Nolan","UK","Inception, The Dark Knight","Complexité narrative"],
        ["Ava DuVernay","USA","Selma, 13th","Justice sociale"],
        ["Steve McQueen","UK","12 Years a Slave, Shame","Histoire, identité"],
        ["Ryan Coogler","USA","Black Panther, Creed","Culture, identité"],
        ["Kasi Lemmons","USA","Eve's Bayou, Harriet","Histoire afro-américaine"],
        ["Bong Joon-ho","Corée/UK collab","Parasite","Satire sociale"]
      ]},
      {type:'lexique',titre:'Vocabulaire cinématographique',items:[
        {en:"director",fr:"réalisateur"},{en:"screenplay",fr:"scénario"},
        {en:"plot",fr:"intrigue"},{en:"character",fr:"personnage"},
        {en:"setting",fr:"cadre / lieu"},{en:"theme",fr:"thème"},
        {en:"cinematography",fr:"photographie cinématographique"},{en:"soundtrack",fr:"bande originale"},
        {en:"sequel",fr:"suite"},{en:"blockbuster",fr:"succès commercial"}
      ]},
      {type:'exemples',titre:'Analyse cinématographique',items:[
        {en:"'Black Panther' explores themes of identity, responsibility, and cultural heritage.",fr:"Black Panther explore les thèmes de l'identité, de la responsabilité et du patrimoine culturel."},
        {en:"'12 Years a Slave' is a powerful depiction of the brutality of slavery.",fr:"12 Years a Slave est une représentation puissante de la brutalité de l'esclavage."},
        {en:"Nollywood, Nigeria's film industry, produces over 2,500 films per year.",fr:"Nollywood, l'industrie cinématographique nigériane, produit plus de 2 500 films par an."},
        {en:"Hollywood remains the world's largest film industry in terms of revenue.",fr:"Hollywood reste la plus grande industrie cinématographique mondiale en termes de revenus."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Regardez des films en anglais avec sous-titres anglais. C'est l'une des meilleures façons d'améliorer votre compréhension orale ET votre vocabulaire."}
    ],
    quiz:[
      {q:"'Schindler's List' was directed by:",opts:["A) Scorsese","B) Spielberg","C) Nolan","D) DuVernay"],rep:'B',expl:"Steven Spielberg."},
      {q:"'Nollywood' is the film industry of:",opts:["A) USA","B) UK","C) Nigeria","D) Ghana"],rep:'C',expl:"Nollywood = Nigeria."},
      {q:"A 'screenplay' is:",opts:["A) the music","B) the script","C) the camera","D) the actors"],rep:'B',expl:"Screenplay = scénario."},
      {q:"'Plot' means:",opts:["A) music","B) story/intrigue","C) actors","D) camera"],rep:'B',expl:"Plot = intrigue / histoire."},
      {q:"'Blockbuster' means:",opts:["A) a small film","B) a major commercial success","C) a documentary","D) a short film"],rep:'B',expl:"Blockbuster = succès commercial majeur."},
      {q:"'Cinematography' refers to:",opts:["A) the script","B) the visual photography of a film","C) the music","D) the acting"],rep:'B',expl:"Cinématographie = photographie visuelle du film."},
      {q:"'12 Years a Slave' is about:",opts:["A) space","B) slavery","C) sports","D) technology"],rep:'B',expl:"Esclavage."},
      {q:"A 'sequel' is:",opts:["A) the first film","B) a follow-up film","C) a documentary","D) a short film"],rep:'B',expl:"Sequel = suite (film suivant)."},
      {q:"Hollywood is located in:",opts:["A) New York","B) Los Angeles","C) London","D) Lagos"],rep:'B',expl:"Hollywood = Los Angeles."},
      {q:"'Theme' in a film refers to:",opts:["A) the music","B) the central idea/message","C) the actors","D) the camera"],rep:'B',expl:"Theme = thème / idée centrale."}
    ]
  },

  // ── EXAM PREP B2 ──────────────────────────────────────────────────

  {
    id:'exam_b2_m1',
    titre:'BAC Prep — Analyse Littéraire Avancée',
    niveau:'B2',
    duree:40,
    objectifs:[
      "Analyser des textes littéraires complexes",
      "Identifier les procédés stylistiques avancés",
      "Commenter les choix de l'auteur avec précision"
    ],
    contenu:[
      {type:'intro',texte:"L'analyse littéraire au BAC demande une approche méthodique et une connaissance des procédés stylistiques. Ce module vous donne les outils pour analyser tout texte littéraire."},
      {type:'tableau',titre:'Procédés stylistiques',headers:["Procédé","Définition","Exemple"],rows:[
        ["Métaphore","Comparaison sans 'like/as'","Life is a journey."],
        ["Simile","Comparaison avec 'like/as'","She is like a rose."],
        ["Allitération","Répétition de consonnes","Peter Piper picked a peck."],
        ["Assonance","Répétition de voyelles","The rain in Spain stays mainly."],
        ["Ironie","Dire le contraire de ce qu'on pense","What a beautiful day! (during a storm)"],
        ["Hyperbole","Exagération","I've told you a million times."],
        ["Oxymore","Deux mots contradictoires","Bittersweet, living death"],
        ["Anaphore","Répétition en début de phrase","We shall fight on the beaches..."]
      ]},
      {type:'regle',titre:'Méthode d\'analyse littéraire',texte:"1. IDENTIFIER le procédé (métaphore, ironie, etc.)\n2. CITER le texte (la phrase exacte)\n3. EXPLIQUER l'effet (pourquoi l'auteur l'utilise)\n4. INTERPRÉTER le sens (ce que cela révèle)\n5. COMMENTER votre réaction (votre opinion argumentée)"},
      {type:'exemples',titre:'Analyse type BAC',items:[
        {en:"Text: 'All the world's a stage, and all the men and women merely players.' — Shakespeare, As You Like It\n\nDevice: Metaphor\nQuote: 'All the world's a stage'\nEffect: Compares life to a theatrical performance\nMeaning: Life is temporary, we play roles, and eventually we exit\nComment: This metaphor captures the transient nature of human existence.",fr:"Texte : 'Le monde entier est un théâtre, et tous les hommes et femmes ne sont que des acteurs.' — Shakespeare\n\nProcédé : Métaphore\nCitation : 'Le monde entier est un théâtre'\nEffet : Compare la vie à une performance théâtrale\nSens : La vie est temporaire, nous jouons des rôles, et finalement nous sortons\nCommentaire : Cette métaphore capture la nature transitoire de l'existence humaine."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, citez TOUJOURS le texte avant de commenter. 'The author uses [device] in [quote] to [effect].' = réponse complète."}
    ],
    quiz:[
      {q:"A metaphor is:",opts:["A) a comparison with like/as","B) a comparison without like/as","C) a question","D) a fact"],rep:'B',expl:"Métaphore = comparaison sans like/as."},
      {q:"'She is like a rose' is a:",opts:["A) metaphor","B) simile","C) irony","D) hyperbole"],rep:'B',expl:"Simile = comparaison avec like/as."},
      {q:"Alliteration is:",opts:["A) repetition of vowels","B) repetition of consonant sounds","C) a question","D) a fact"],rep:'B',expl:"Allitération = répétition de sons consonnes."},
      {q:"Irony means:",opts:["A) saying exactly what you mean","B) saying the opposite of what you mean","C) exaggeration","D) repetition"],rep:'B',expl:"Ironie = dire le contraire de ce qu'on pense."},
      {q:"Hyperbole is:",opts:["A) understatement","B) exaggeration","C) literal statement","D) question"],rep:'B',expl:"Hyperbole = exagération."},
      {q:"An oxymore combines:",opts:["A) similar words","B) contradictory words","C) numbers","D) questions"],rep:'B',expl:"Oxymore = deux mots contradictoires."},
      {q:"Anaphora is:",opts:["A) repetition at the end","B) repetition at the beginning","C) a question","D) a metaphor"],rep:'B',expl:"Anaphore = répétition en début de phrase."},
      {q:"'What a beautiful day!' during a storm is:",opts:["A) literal","B) ironic","C) hyperbolic","D) metaphorical"],rep:'B',expl:"Ironie (dire le contraire de la réalité)."},
      {q:"Assonance is:",opts:["A) repetition of consonants","B) repetition of vowel sounds","C) a question","D) a fact"],rep:'B',expl:"Assonance = répétition de sons voyelles."},
      {q:"In literary analysis, you should always:",opts:["A) translate","B) quote the text","C) copy","D) ignore"],rep:'B',expl:"Citez TOUJOURS le texte."}
    ]
  },

  {
    id:'exam_b2_m2',
    titre:'BAC Prep — Dissertation Avancée',
    niveau:'B2',
    duree:40,
    objectifs:[
      "Rédiger une dissertation de niveau BAC (20+ lignes)",
      "Structurer une argumentation complexe",
      "Utiliser des références culturelles et littéraires"
    ],
    contenu:[
      {type:'intro',texte:"La dissertation du BAC demande une argumentation approfondie, des références culturelles et une structure rigoureuse. Ce module vous prépare à cet exercice exigeant."},
      {type:'tableau',titre:'Structure d\'une dissertation BAC',headers:["Partie","Contenu","Longueur"],rows:[
        ["Introduction","Hook + contexte + problématique + annonce du plan","3-4 phrases"],
        ["Partie 1","Thèse + arguments + exemples","5-7 phrases"],
        ["Partie 2","Antithèse + arguments + exemples","5-7 phrases"],
        ["Partie 3","Synthèse + dépassement","5-7 phrases"],
        ["Conclusion","Bilan + réponse à la problématique + ouverture","3-4 phrases"]
      ]},
      {type:'regle',titre:'Critères de correction BAC avancés',texte:"• Contenu (5 pts) : Répondez au sujet, arguments solides, références\n• Grammaire (4 pts) : Structures variées, peu d'erreurs\n• Vocabulaire (4 pts) : Riche, précis, registres variés\n• Organisation (4 pts) : Plan clair, connecteurs, cohérence\n• Style (3 pts) : Originalité, procédés stylistiques, fluidité\n• Total : 20 points"},
      {type:'exemples',titre:'Dissertation type — La technologie rend-elle l\'homme plus libre ?',items:[
        {en:"Introduction: In the 21st century, technology has become an integral part of our daily lives. While some argue that it liberates us from constraints, others claim it creates new forms of dependency. To what extent does technology make us freer?\n\nPart 1: On the one hand, technology has undoubtedly increased our freedom. The internet provides access to unlimited information, enabling people to learn, communicate, and work from anywhere. Social media allows us to connect with people across the globe, breaking geographical barriers.\n\nPart 2: On the other hand, technology can also be a source of new constraints. Social media addiction, data privacy concerns, and the pressure to be constantly connected can limit our freedom. Moreover, the digital divide excludes those without access to technology.\n\nPart 3: Ultimately, technology is neither inherently liberating nor enslaving. Its impact depends on how we use it. With proper education and regulation, technology can be a powerful tool for empowerment.\n\nConclusion: In conclusion, technology has the potential to make us freer, but this freedom is not automatic. It requires conscious use, critical thinking, and ethical guidelines.",fr:"Introduction : Au 21e siècle, la technologie est devenue une partie intégrante de notre vie quotidienne. Alors que certains soutiennent qu'elle nous libère des contraintes, d'autres affirment qu'elle crée de nouvelles formes de dépendance. Dans quelle mesure la technologie nous rend-elle plus libres ?\n\nPartie 1 : D'un côté, la technologie a indéniablement augmenté notre liberté. Internet donne accès à une information illimitée, permettant aux gens d'apprendre, communiquer et travailler de n'importe où.\n\nPartie 2 : D'un autre côté, la technologie peut aussi être une source de nouvelles contraintes. L'addiction aux réseaux sociaux, les préoccupations de confidentialité des données et la pression d'être constamment connecté peuvent limiter notre liberté.\n\nPartie 3 : En fin de compte, la technologie n'est ni intrinsèquement libératrice ni asservissante. Son impact dépend de comment nous l'utilisons.\n\nConclusion : En conclusion, la technologie a le potentiel de nous rendre plus libres, mais cette liberté n'est pas automatique."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Écrivez 20+ lignes MINIMUM. Utilisez au moins 7 connecteurs différents. Intégrez des références culturelles (auteurs, films, événements historiques)."}
    ],
    quiz:[
      {q:"A BAC dissertation should have:",opts:["A) no introduction","B) intro, thesis, antithesis, synthesis, conclusion","C) only one paragraph","D) no conclusion"],rep:'B',expl:"Structure : intro, thèse, antithèse, synthèse, conclusion."},
      {q:"The 'problematic' (problématique) is:",opts:["A) the title","B) the central question","C) the conclusion","D) an example"],rep:'B',expl:"Problématique = question centrale."},
      {q:"The 'antithesis' presents:",opts:["A) your main argument","B) the opposing view","C) the conclusion","D) an example"],rep:'B',expl:"Antithèse = point de vue opposé."},
      {q:"The 'synthesis' aims to:",opts:["A) repeat the thesis","B) go beyond the debate","C) summarize only","D) introduce new arguments"],rep:'B',expl:"Synthèse = dépasser le débat."},
      {q:"The BAC Writing total is:",opts:["A) 10 points","B) 16 points","C) 20 points","D) 25 points"],rep:'C',expl:"20 points au total."},
      {q:"The 'Style' criterion is worth:",opts:["A) 1 pt","B) 3 pts","C) 5 pts","D) 8 pts"],rep:'B',expl:"Style = 3 points."},
      {q:"Minimum lines for a BAC dissertation:",opts:["A) 5","B) 10","C) 15","D) 20+"],rep:'D',expl:"20+ lignes minimum."},
      {q:"Cultural references in a dissertation:",opts:["A) are not allowed","B) strengthen your argument","C) waste space","D) are only for the introduction"],rep:'B',expl:"Les références culturelles renforcent l'argumentation."},
      {q:"The 'opening' (ouverture) in a conclusion:",opts:["A) repeats the introduction","B) broadens the perspective","C) introduces new arguments","D) is optional"],rep:'B',expl:"Ouverture = élargir la perspective."},
      {q:"A good dissertation uses:",opts:["A) only one connector","B) varied connectors","C) no connectors","D) only 'and' and 'but'"],rep:'B',expl:"Connecteurs variés."}
    ]
  },

  {
    id:'exam_b2_m3',
    titre:'TOEIC Prep — Business Reading Avancé',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Comprendre des textes professionnels complexes",
      "Analyser des documents commerciaux multiples",
      "Répondre aux questions TOEIC de niveau avancé"
    ],
    contenu:[
      {type:'intro',texte:"Le TOEIC Reading avancé teste votre capacité à comprendre des textes professionnels complexes : contrats, rapports, articles de presse spécialisée."},
      {type:'tableau',titre:'Types de textes TOEIC avancés',headers:["Type","Caractéristiques","Questions typiques"],rows:[
        ["Contrat","Formel, juridique, conditions","What are the terms? What is the penalty?"],
        ["Rapport financier","Données, tendances, projections","What is the trend? What is projected?"],
        ["Article spécialisé","Technique, sectoriel","What is the main finding? What is recommended?"],
        ["Email multiple","Chaîne d'emails, plusieurs auteurs","Who sent what? What was the response?"],
        ["Politique d'entreprise","Règles, procédures, droits","What is the policy? Who is eligible?"]
      ]},
      {type:'regle',titre:'Stratégies avancées',texte:"1. Lisez les questions D'ABORD pour chaque texte\n2. Identifiez le type de document et son objectif\n3. Cherchez les informations spécifiques (noms, dates, montants)\n4. Attention aux pièges : informations partiellement vraies\n5. Gérez votre temps : 45 minutes pour la partie Reading"},
      {type:'exemples',titre:'Document type TOEIC avancé',items:[
        {en:"MEMORANDUM\nTo: All Department Heads\nFrom: Chief Financial Officer\nDate: April 15, 2025\nSubject: Q1 Financial Results and Budget Adjustments\n\nThe first quarter results show a 12% increase in revenue compared to Q1 2024, reaching $4.2 million. However, operating expenses have risen by 8%, primarily due to increased marketing costs and technology investments.\n\nEffective immediately, all departments must submit their revised budgets by May 1. Departments exceeding their allocated budget by more than 5% will require CFO approval for additional spending.\n\nPlease direct any questions to the Finance Department.",fr:"MÉMORANDUM\nÀ : Tous les chefs de département\nDe : Directeur Financier\nDate : 15 avril 2025\nObjet : Résultats T1 et ajustements budgétaires\n\nLes résultats du premier trimestre montrent une augmentation de 12% des revenus par rapport au T1 2024, atteignant 4,2 millions de dollars. Cependant, les dépenses opérationnelles ont augmenté de 8%, principalement dues aux coûts marketing et aux investissements technologiques.\n\nEffectif immédiatement, tous les départements doivent soumettre leurs budgets révisés avant le 1er mai. Les départements dépassant leur budget alloué de plus de 5% nécessiteront l'approbation du CFO pour des dépenses supplémentaires."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au TOEIC, les documents multiples (chaîne d'emails, mémo + réponse) sont de plus en plus fréquents. Entraînez-vous à suivre plusieurs documents liés."}
    ],
    quiz:[
      {q:"The memo shows revenue increased by:",opts:["A) 8%","B) 10%","C) 12%","D) 15%"],rep:'C',expl:"12% increase in revenue."},
      {q:"Operating expenses rose by:",opts:["A) 5%","B) 8%","C) 12%","D) 15%"],rep:'B',expl:"Operating expenses risen by 8%."},
      {q:"Budgets must be submitted by:",opts:["A) April 15","B) April 30","C) May 1","D) May 15"],rep:'C',expl:"By May 1."},
      {q:"Departments exceeding budget by more than ___ need CFO approval.",opts:["A) 3%","B) 5%","C) 8%","D) 10%"],rep:'B',expl:"More than 5%."},
      {q:"The memo is from:",opts:["A) CEO","B) CFO","C) HR","D) IT"],rep:'B',expl:"Chief Financial Officer = CFO."},
      {q:"Revenue reached:",opts:["A) $2.4 million","B) $3.8 million","C) $4.2 million","D) $5.0 million"],rep:'C',expl:"$4.2 million."},
      {q:"The primary reason for increased expenses is:",opts:["A) salaries","B) rent","C) marketing and technology","D) travel"],rep:'C',expl:"Marketing costs and technology investments."},
      {q:"Questions should be directed to:",opts:["A) CEO","B) HR","C) Finance Department","D) IT"],rep:'C',expl:"Finance Department."},
      {q:"'Effective immediately' means:",opts:["A) in the future","B) starting now","C) never","D) later"],rep:'B',expl:"Effective immediately = à partir de maintenant."},
      {q:"A 'memorandum' is:",opts:["A) a personal letter","B) an internal business document","C) a contract","D) an advertisement"],rep:'B',expl:"Memo = document interne d'entreprise."}
    ]
  },

  {
    id:'exam_b2_m4',
    titre:'TOEIC Prep — Advanced Listening',
    niveau:'B2',
    duree:35,
    objectifs:[
      "Comprendre des conversations professionnelles complexes",
      "Suivre des présentations et des annonces multiples",
      "Répondre aux questions d'écoute TOEIC avancées"
    ],
    contenu:[
      {type:'intro',texte:"Le TOEIC Listening avancé teste votre capacité à comprendre des échanges professionnels complexes avec plusieurs interlocuteurs et des informations implicites."},
      {type:'tableau',titre:'Parties avancées du TOEIC Listening',headers:["Partie","Contenu","Difficulté"],rows:[
        ["Part 3: Conversations","Dialogues avec 3 personnes","Questions d'inférence, ton, intention"],
        ["Part 4: Annonces","Annonces multiples liées","Questions de synthèse, comparaison"],
        ["Part 3-4: Tables","Associer info à un document","Lecture + écoute combinées"]
      ]},
      {type:'regle',titre:'Stratégies avancées',texte:"1. Lisez TOUTES les questions avant l'audio\n2. Identifiez le contexte et les interlocuteurs\n3. Notez les informations implicites (ton, hésitation, sous-entendu)\n4. Attention aux paraphrases : la réponse n'utilise pas les mêmes mots que l'audio\n5. Éliminez les réponses trop évidentes — ce sont souvent des pièges"},
      {type:'exemples',titre:'Conversation avancée type',items:[
        {en:"M1: Sarah, have you reviewed the Q3 projections?\nW: Yes, but I'm concerned about the marketing budget. It's 15% over what we allocated.\nM2: I noticed that too. Let's schedule a meeting with the marketing team to discuss reallocation.\nW: Good idea. I'll send out a calendar invite for Thursday at 2 p.m.\nM1: Make sure to include the CFO. We'll need his approval for any budget changes.\n\nQ1: What is the main concern?\nQ2: What will the woman do next?\nQ3: Who needs to approve budget changes?",fr:"H1 : Sarah, avez-vous examiné les projections T3 ?\nF : Oui, mais je suis préoccupée par le budget marketing. Il est 15% au-dessus de ce que nous avions alloué.\nH2 : J'ai remarqué ça aussi. Planifions une réunion avec l'équipe marketing pour discuter de la réallocation.\nF : Bonne idée. J'enverrai une invitation calendrier pour jeudi à 14h.\nH1 : Assurez-vous d'inclure le CFO. Nous aurons besoin de son approbation pour tout changement budgétaire.\n\nQ1 : Quelle est la préoccupation principale ?\nQ2 : Que fera la femme ensuite ?\nQ3 : Qui doit approuver les changements budgétaires ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les réponses TOEIC sont souvent des paraphrases. Si l'audio dit 'concerned about the budget', la réponse dira 'worried about spending' — pas les mêmes mots mais le même sens."}
    ],
    quiz:[
      {q:"The main concern in the conversation is:",opts:["A) the sales figures","B) the marketing budget","C) the HR policy","D) the office location"],rep:'B',expl:"Le budget marketing est 15% au-dessus."},
      {q:"The woman will next:",opts:["A) call the CEO","B) send a calendar invite","C) cancel the meeting","D) write a report"],rep:'B',expl:"Elle enverra une invitation calendrier."},
      {q:"Budget changes need approval from:",opts:["A) the CEO","B) the CFO","C) the HR manager","D) the marketing team"],rep:'B',expl:"Le CFO doit approuver."},
      {q:"The meeting is scheduled for:",opts:["A) Monday","B) Tuesday","C) Thursday","D) Friday"],rep:'C',expl:"Thursday at 2 p.m."},
      {q:"The marketing budget is ___ over allocation.",opts:["A) 5%","B) 10%","C) 15%","D) 20%"],rep:'C',expl:"15% over."},
      {q:"In TOEIC, answers are often:",opts:["A) exact words from the audio","B) paraphrases","C) random","D) not in the audio"],rep:'B',expl:"Les réponses sont des paraphrases."},
      {q:"'Q3' refers to:",opts:["A) Question 3","B) Quarter 3","C) Queue 3","D) Quality 3"],rep:'B',expl:"Q3 = Quarter 3 (3e trimestre)."},
      {q:"'Reallocation' means:",opts:["A) removing budget","B) redistributing budget","C) increasing budget","D) ignoring budget"],rep:'B',expl:"Reallocation = redistribution."},
      {q:"The conversation involves:",opts:["A) 1 person","B) 2 people","C) 3 people","D) 4 people"],rep:'C',expl:"3 personnes : M1, W, M2."},
      {q:"'I'm concerned about' expresses:",opts:["A) happiness","B) worry","C) anger","D) excitement"],rep:'B',expl:"Concerned = préoccupé / inquiet."}
    ]
  },

  {
    id:'exam_b2_m5',
    titre:'IELTS Prep — Writing Task 2',
    niveau:'B2',
    duree:40,
    objectifs:[
      "Rédiger un essai IELTS Task 2 (250+ mots)",
      "Structurer une argumentation selon les critères IELTS",
      "Utiliser un vocabulaire académique varié"
    ],
    contenu:[
      {type:'intro',texte:"L'IELTS Writing Task 2 demande un essai de 250 mots minimum sur un sujet de société. Ce module vous prépare à cet exercice avec les critères de correction IELTS."},
      {type:'tableau',titre:'Critères de correction IELTS',headers:["Critère","Poids","Description"],rows:[
        ["Task Response","25%","Répondez au sujet, position claire, arguments développés"],
        ["Coherence & Cohesion","25%","Structure logique, connecteurs variés, paragraphes clairs"],
        ["Lexical Resource","25%","Vocabulaire riche, précis, collocations naturelles"],
        ["Grammatical Range","25%","Structures variées, peu d'erreurs, complexité"]
      ]},
      {type:'regle',titre:'Types de questions IELTS',texte:"• Opinion (Agree/Disagree) : To what extent do you agree or disagree?\n• Discussion (Discuss both views) : Discuss both views and give your opinion.\n• Problem/Solution : What are the problems and what are the solutions?\n• Advantage/Disadvantage : Do the advantages outweigh the disadvantages?\n• Two-part question : Answer both questions."},
      {type:'tableau',titre:'Structure IELTS Task 2',headers:["Partie","Contenu","Mots"],rows:[
        ["Introduction","Paraphrase du sujet + thèse","40-50"],
        ["Body 1","Argument 1 + exemple + explication","80-90"],
        ["Body 2","Argument 2 + exemple + explication","80-90"],
        ["Conclusion","Résumé + réaffirmation de la thèse","30-40"]
      ]},
      {type:'exemples',titre:'Essai type IELTS',items:[
        {en:"Question: Some people believe that social media has a negative impact on society. To what extent do you agree or disagree?\n\nIn recent years, social media has become an integral part of daily life. While some argue that it has detrimental effects on society, I partially agree with this view, as social media presents both advantages and disadvantages.\n\nOn the one hand, social media can have negative consequences. Excessive use has been linked to mental health issues, particularly among young people. Furthermore, the spread of misinformation on platforms like Facebook and Twitter has led to social polarization and distrust.\n\nOn the other hand, social media has undeniable benefits. It enables instant communication across the globe, facilitates access to information, and provides a platform for marginalized voices. For example, social media campaigns have raised awareness about important social issues such as climate change and gender equality.\n\nIn conclusion, while social media has certain drawbacks, its benefits in terms of communication and awareness-raising are significant. I believe that with proper regulation and digital literacy education, the negative impacts can be minimized.",fr:"Question : Certains pensent que les réseaux sociaux ont un impact négatif sur la société. Dans quelle mesure êtes-vous d'accord ou pas ?\n\nCes dernières années, les réseaux sociaux sont devenus une partie intégrante de la vie quotidienne. Bien que certains soutiennent qu'ils ont des effets néfastes, je suis partiellement d'accord, car les réseaux sociaux présentent à la fois des avantages et des inconvénients.\n\nD'un côté, les réseaux sociaux peuvent avoir des conséquences négatives. Une utilisation excessive a été liée à des problèmes de santé mentale, particulièrement chez les jeunes. De plus, la propagation de la désinformation a conduit à la polarisation sociale et à la méfiance.\n\nD'un autre côté, les réseaux sociaux ont des avantages indéniables. Ils permettent une communication instantanée à travers le monde, facilitent l'accès à l'information et offrent une plateforme aux voix marginalisées.\n\nEn conclusion, bien que les réseaux sociaux aient certains inconvénients, leurs avantages en termes de communication et de sensibilisation sont significatifs."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Écrivez 270-300 mots (pas trop court, pas trop long). Utilisez au moins 5 connecteurs avancés. Variez les structures grammaticales."}
    ],
    quiz:[
      {q:"IELTS Writing Task 2 requires a minimum of:",opts:["A) 150 words","B) 200 words","C) 250 words","D) 300 words"],rep:'C',expl:"250 mots minimum."},
      {q:"'Task Response' is worth:",opts:["A) 10%","B) 15%","C) 25%","D) 50%"],rep:'C',expl:"25% de la note."},
      {q:"An 'Agree/Disagree' essay asks:",opts:["A) to describe","B) to what extent you agree","C) to list facts","D) to translate"],rep:'B',expl:"Dans quelle mesure êtes-vous d'accord."},
      {q:"'Coherence & Cohesion' refers to:",opts:["A) vocabulary","B) logical structure and connectors","C) grammar","D) spelling"],rep:'B',expl:"Structure logique et connecteurs."},
      {q:"'Lexical Resource' assesses:",opts:["A) grammar","B) vocabulary range and accuracy","C) structure","D) handwriting"],rep:'B',expl:"Richesse et précision du vocabulaire."},
      {q:"A 'Discussion' essay requires:",opts:["A) one view only","B) both views + your opinion","C) no opinion","D) only facts"],rep:'B',expl:"Discuter les deux vues + donner votre opinion."},
      {q:"The introduction should include:",opts:["A) examples","B) paraphrase + thesis","C) conclusion","D) references"],rep:'B',expl:"Paraphrase du sujet + thèse."},
      {q:"'Grammatical Range' assesses:",opts:["A) vocabulary","B) variety and accuracy of structures","C) spelling","D) handwriting"],rep:'B',expl:"Variété et précision des structures grammaticales."},
      {q:"A good IELTS essay should be:",opts:["A) 150 words","B) 270-300 words","C) 500 words","D) 1000 words"],rep:'B',expl:"270-300 mots (idéalement)."},
      {q:"'Problem/Solution' essays require:",opts:["A) only problems","B) only solutions","C) both problems and solutions","D) no analysis"],rep:'C',expl:"Problèmes ET solutions."}
    ]
  }
]

console.log('[AGTM B2 Modules] Loaded', window._AGTM_B2_MODS.length, 'B2 modules')

})()
