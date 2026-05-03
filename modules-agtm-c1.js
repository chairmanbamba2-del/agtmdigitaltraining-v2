/* modules-agtm-c1.js — AGTM Academy C1 Modules v1.0
 * 20 modules complets C1 avec contenu riche et quiz (10 questions chacun)
 * Niveau avance : grammaire complexe, vocabulaire academique, competences professionnelles
 */
;(function () {
'use strict'

window._AGTM_C1_MODS = [
  // ── GRAMMAIRE C1 ──────────────────────────────────────────────────

  {
    id:'gram_c1_m1',
    titre:'Inversion Avancee et Structures Formelles',
    niveau:'C1',
    duree:40,
    objectifs:[
      "Maitriser toutes les formes d'inversion en anglais formel",
      "Utiliser l'inversion apres les adverbes negatifs et restrictifs",
      "Employer l'inversion dans les ecrits academiques et professionnels"
    ],
    contenu:[
      {type:'intro',texte:"L'inversion avancee est une caracteristique du niveau C1. Elle implique de placer l'auxiliaire avant le sujet apres certains adverbes ou expressions, creant un effet stylistique formel et emphatique."},
      {type:'tableau',titre:'Types d\'inversion avancee',headers:["Type","Structure","Exemple"],rows:[
        ["Adverbe negatif","Never/Rarely/Seldom + aux + S + V","Never have I witnessed such incompetence."],
        ["Not only...but","Not only + aux + S, but S also...","Not only did she win, but she also broke the record."],
        ["No sooner...than","No sooner + had + S + V + than...","No sooner had the meeting ended than the crisis began."],
        ["Hardly...when","Hardly + had + S + V + when...","Hardly had the results been published when controversy erupted."],
        ["Under no circumstances","Under no circumstances + aux + S + V","Under no circumstances should this data be shared."],
        ["On no account","On no account + aux + S + V","On no account are visitors permitted after hours."],
        ["Only after/when","Only after/when + clause + aux + S + V","Only when the evidence was reviewed did the truth emerge."],
        ["Only by","Only by + -ing/noun + aux + S + V","Only by implementing reforms can we address the issue."]
      ]},
      {type:'regle',titre:'Points cles',texte:"• L'inversion se produit UNIQUEMENT quand l'adverbe negatif est en TETE de phrase.\n• Comparez : I have never seen this. (normal) vs. Never have I seen this. (inversion)\n• Apres 'Not only', l'inversion est dans la premiere clause seulement.\n• 'No sooner...than' et 'Hardly...when' utilisent TOUJOURS le past perfect.\n• Les inversions sont formelles — evitez-les dans le langage courant."},
      {type:'exemples',titre:'Exemples en contexte formel',items:[
        {en:"Little did the researchers know that their discovery would revolutionize medicine.",fr:"Les chercheurs ne savaient pas que leur decouverte revolutionnerait la medecine."},
        {en:"Should you require further information, please do not hesitate to contact us.",fr:"Si vous avez besoin de plus d'informations, n'hesitez pas a nous contacter."},
        {en:"Were it not for the funding, the project would have been abandoned.",fr:"Sans le financement, le projet aurait ete abandonne."},
        {en:"So compelling was the evidence that the jury reached a verdict in minutes.",fr:"Les preuves etaient si convaincantes que le jury a rendu un verdict en quelques minutes."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : L'inversion est un marqueur de niveau C1 dans les essais et les rapports. Utilisez-la avec parcimonie pour l'impact, pas dans chaque phrase."}
    ],
    quiz:[
      {q:"Never ___ I encountered such a complex problem.",opts:["A) have","B) did","C) had","D) was"],rep:'A',expl:"Never + present perfect → have I encountered."},
      {q:"No sooner ___ the results been published than controversy erupted.",opts:["A) did","B) had","C) have","D) was"],rep:'B',expl:"No sooner...than → past perfect : had the results been."},
      {q:"Only by implementing reforms ___ we address the issue.",opts:["A) can","B) could","C) will","D) would"],rep:'A',expl:"Only by + -ing → inversion avec can."},
      {q:"Little ___ the team know about the upcoming changes.",opts:["A) did","B) do","C) does","D) had"],rep:'A',expl:"Little did + S + know = ne pas savoir du tout."},
      {q:"Under no circumstances ___ this information be shared.",opts:["A) should","B) shouldn't","C) can","D) must"],rep:'A',expl:"Under no circumstances + should (positif)."},
      {q:"So impressive ___ her presentation that everyone applauded.",opts:["A) was","B) were","C) did","D) had"],rep:'A',expl:"So + adj + was/were → inversion."},
      {q:"Not only ___ she pass, but she also excelled.",opts:["A) did","B) does","C) had","D) was"],rep:'A',expl:"Not only + did + S + V."},
      {q:"Hardly ___ I arrived when the meeting began.",opts:["A) did","B) had","C) have","D) was"],rep:'B',expl:"Hardly...when → past perfect : had I arrived."},
      {q:"___ it not for your support, we would have failed.",opts:["A) Were","B) Was","C) Had","D) If"],rep:'A',expl:"Were it not for = If it were not for (inversion formelle)."},
      {q:"On no account ___ visitors enter this area.",opts:["A) should","B) can","C) may","D) all of the above"],rep:'D',expl:"On no account accepte should/can/may pour l'interdiction."}
    ]
  },

  {
    id:'gram_c1_m2',
    titre:'Subjonctif et Structures Hypothetiques Avancees',
    niveau:'C1',
    duree:40,
    objectifs:[
      "Maitriser le subjonctif present en anglais formel",
      "Utiliser les structures hypothetiques mixtes complexes",
      "Employer les conditionnels implicites et les alternatives a 'if'"
    ],
    contenu:[
      {type:'intro',texte:"Le subjonctif en anglais survit dans des contextes formels specifiques. Les structures hypothetiques avancees vont au-dela des Types 1-3, incluant des formes implicites et des alternatives sophistiquees a 'if'."},
      {type:'tableau',titre:'Subjonctif present en anglais',headers:["Contexte","Structure","Exemple"],rows:[
        ["Suggestion/Recommendation","suggest/recommend that S + base verb","I suggest that he attend the meeting."],
        ["Demande/Exigence","demand/insist/require that S + base","They demanded that the report be submitted."],
        ["Necessite","essential/vital/important that S + base","It is essential that she be present."],
        ["Proposition","propose that S + base verb","He proposed that the committee review the policy."],
        ["Souhait","wish that S + past/past perfect","I wish that I were more confident."],
        ["If only","if only + past/past perfect","If only I had known earlier."]
      ]},
      {type:'tableau',titre:'Alternatives a "if"',headers:["Expression","Structure","Exemple"],rows:[
        ["Should","Should + S + V = If S should V","Should you need assistance, call me."],
        ["Were","Were + S + to V = If S were to V","Were I to accept, I would need time."],
        ["Had","Had + S + PP = If S had PP","Had they known, they would have acted."],
        ["Provided that","Provided that + clause","Provided that you agree, we can proceed."],
        ["Assuming (that)","Assuming (that) + clause","Assuming the data is accurate, the conclusion holds."],
        ["Supposing (that)","Supposing (that) + clause","Supposing you won, what would you do?"]
      ]},
      {type:'regle',titre:'Subjonctif vs Indicatif',texte:"• Le subjonctif utilise la forme de BASE du verbe (sans 's' a la 3e personne) :\n  I suggest that he ATTEND (pas attends).\n  They insist that she BE present (pas is).\n• En anglais britannique informel, on utilise souvent l'indicatif ou 'should' :\n  I suggest that he should attend / attends.\n• Le subjonctif est OBLIGATOIRE dans l'anglais formel americain."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The judge ordered that the evidence be excluded from the trial.",fr:"Le juge a ordonne que les preuves soient exclues du proces."},
        {en:"Were the government to implement these reforms, the economy would improve.",fr:"Si le gouvernement mettait en oeuvre ces reformes, l'economie s'ameliorerait."},
        {en:"It is imperative that every student complete the assignment by Friday.",fr:"Il est imperatif que chaque etudiant termine le travail avant vendredi."},
        {en:"Had the committee reviewed the proposal more carefully, they would have approved it.",fr:"Si le comite avait examine la proposition plus attentivement, il l'aurait approuvee."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Le subjonctif est frequent dans les textes juridiques, academiques et formels. 'That he be' et 'that she attend' sont des marqueurs C1."}
    ],
    quiz:[
      {q:"I suggest that he ___ the meeting. (subjunctive)",opts:["A) attends","B) attend","C) attended","D) attending"],rep:'B',expl:"Subjonctif → base verb (attend)."},
      {q:"They demanded that the report ___ submitted.",opts:["A) is","B) be","C) was","D) being"],rep:'B',expl:"Subjonctif → be (forme de base)."},
      {q:"___ you need assistance, please call me.",opts:["A) Should","B) Would","C) Could","D) Might"],rep:'A',expl:"Should + S + V = If you should need."},
      {q:"___ I to accept, I would need more time.",opts:["A) Were","B) Was","C) Had","D) If"],rep:'A',expl:"Were I to accept = If I were to accept."},
      {q:"It is essential that she ___ present.",opts:["A) is","B) be","C) was","D) being"],rep:'B',expl:"Subjonctif apres essential → be."},
      {q:"Had they known, they ___ acted differently.",opts:["A) would have","B) will have","C) would","D) had"],rep:'A',expl:"Had + PP → would have + PP (Type 3)."},
      {q:"Provided that you ___, we can proceed.",opts:["A) agree","B) agreed","C) will agree","D) would agree"],rep:'A',expl:"Provided that + present (condition reelle)."},
      {q:"The court ordered that the witness ___ testimony.",opts:["A) gives","B) give","C) gave","D) given"],rep:'B',expl:"Subjonctif apres ordered → give."},
      {q:"Supposing you ___ the lottery, what would you do?",opts:["A) win","B) won","C) will win","D) have won"],rep:'B',expl:"Supposing + past simple (hypothese irreelle)."},
      {q:"I wish that I ___ more confident.",opts:["A) am","B) were","C) will be","D) being"],rep:'B',expl:"Wish + were (subjonctif irreel)."}
    ]
  },

  {
    id:'gram_c1_m3',
    titre:'Participes et Structures Reduites',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Maitriser les participes presents et passes comme modificateurs",
      "Utiliser les structures reduites (reduced clauses)",
      "Employer les participes absolus (absolute constructions)"
    ],
    contenu:[
      {type:'intro',texte:"Les structures participiales permettent de condenser l'information et de creer des phrases plus sophistiquees. Essentielles pour l'ecriture academique et professionnelle de niveau C1."},
      {type:'tableau',titre:'Types de structures participiales',headers:["Type","Structure","Exemple"],rows:[
        ["Participe present","-ing phrase","Walking down the street, she noticed a crowd."],
        ["Participe passe","-ed/PP phrase","Exhausted by the journey, they collapsed."],
        ["Participe parfait","Having + PP","Having finished the report, she submitted it."],
        ["Participe parfait passif","Having been + PP","Having been warned, they took precautions."],
        ["Absolute construction","S + participe, clause","The meeting over, everyone left."],
        ["Reduced relative","Noun + participe","The man standing there is my boss."]
      ]},
      {type:'regle',titre:'Regles essentielles',texte:"• Le sujet du participe DOIT etre le meme que le sujet de la clause principale.\n  Walking down the street, SHE noticed a crowd. (SHE = walking ✓)\n  Walking down the street, a crowd caught her attention. (a crowd ≠ walking ✗)\n• Le participe parfait (Having + PP) indique une action ANTERIEURE.\n  Having studied for weeks, she felt confident.\n• L'absolute construction a SON PROPRE sujet :\n  The work completed, the team celebrated. (The work ≠ the team)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Located in the heart of the city, the museum attracts millions of visitors annually.",fr:"Situé au coeur de la ville, le musee attire des millions de visiteurs chaque annee."},
        {en:"Having analyzed the data, the researchers published their findings.",fr:"Apres avoir analyse les donnees, les chercheurs ont publie leurs resultats."},
        {en:"The negotiations concluded, both parties expressed satisfaction.",fr:"Les negociations terminees, les deux parties ont exprime leur satisfaction."},
        {en:"Students completing the advanced course receive a certificate.",fr:"Les etudiants qui terminent le cours avance recoivent un certificat."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les structures participiales rendent votre ecriture plus concise et elegante. Remplacez 'Because he was tired, he went to bed' par 'Exhausted, he went to bed'."}
    ],
    quiz:[
      {q:"___ down the street, she noticed a crowd.",opts:["A) Walked","B) Walking","C) Having walked","D) Walk"],rep:'B',expl:"Participe present = Walking."},
      {q:"___ by the journey, they collapsed.",opts:["A) Exhausting","B) Exhausted","C) Exhaust","D) Having exhausting"],rep:'B',expl:"Participe passe = Exhausted (etat passif)."},
      {q:"Having ___ the report, she submitted it.",opts:["A) finish","B) finishing","C) finished","D) finishes"],rep:'C',expl:"Having + PP = Having finished."},
      {q:"The meeting ___, everyone left.",opts:["A) over","B) was over","C) is over","D) being"],rep:'A',expl:"Absolute construction : The meeting over."},
      {q:"___ in the city center, the hotel is convenient.",opts:["A) Located","B) Locating","C) Locate","D) Locates"],rep:'A',expl:"Participe passe = Located (situé)."},
      {q:"___ the data, the team drew conclusions.",opts:["A) Analyzed","B) Analyzing","C) Having analyzed","D) Both B and C"],rep:'D',expl:"Analyzing ou Having analyzed sont corrects."},
      {q:"The man ___ there is my boss.",opts:["A) stand","B) stood","C) standing","D) stands"],rep:'C',expl:"Reduced relative = standing (qui se tient)."},
      {q:"Having been ___, they took precautions.",opts:["A) warn","B) warned","C) warning","D) warns"],rep:'B',expl:"Having been + PP = Having been warned."},
      {q:"___ the exam, she felt relieved.",opts:["A) Finish","B) Finishing","C) Having finished","D) Both B and C"],rep:'D',expl:"Finishing ou Having finished sont corrects."},
      {q:"Weather ___, the event will proceed outdoors.",opts:["A) permits","B) permitting","C) permitted","D) permit"],rep:'B',expl:"Absolute construction : Weather permitting."}
    ]
  },

  {
    id:'gram_c1_m4',
    titre:'Cohesion Textuelle et Anaphore Avancee',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Maitriser les techniques de cohesion textuelle avancee",
      "Utiliser l'anaphore et la cataphore efficacement",
      "Employer les substituts et les ellipses pour eviter la repetition"
    ],
    contenu:[
      {type:'intro',texte:"La cohesion textuelle est l'art de lier les idees dans un texte. Au niveau C1, on utilise des techniques sophistiquees pour creer un flux logique et eviter les repetitions."},
      {type:'tableau',titre:'Techniques de cohesion',headers:["Technique","Description","Exemple"],rows:[
        ["Anaphore","Reference a ce qui precede","The policy was controversial. This caused debate."],
        ["Cataphore","Reference a ce qui suit","Here's the truth: education transforms lives."],
        ["Substitution","Remplacement par un terme generique","I need a pen. Do you have one?"],
        ["Ellipsis","Omission d'elements sous-entendus","She can swim. I can too. (can swim)"],
        ["Lexical chains","Repetition de champs lexicaux","The disease spread. The illness affected thousands. The epidemic..."],
        ["Conjonctions","Liens logiques explicites","However, Furthermore, Consequently"]
      ]},
      {type:'regle',titre:'This / That / These / Those comme substituts',texte:"• This/These = reference proche (dans le texte ou dans l'esprit)\n  The government raised taxes. This decision was unpopular.\n• That/Those = reference plus distante ou contrastive\n  Some support the policy; others oppose it. That division is understandable.\n• 'This/That + nom' est plus clair que 'This/That' seul :\n  This APPROACH, That FINDING, These RESULTS"},
      {type:'exemples',titre:'Exemples de cohesion avancee',items:[
        {en:"The study revealed significant findings. These results challenge existing theories and suggest a paradigm shift.",fr:"L'etude a revele des resultats significatifs. Ces resultats remettent en question les theories existantes."},
        {en:"Consider the following scenario: a company faces declining profits. This situation requires immediate action.",fr:"Considerez le scenario suivant : une entreprise fait face a des profits en baisse. Cette situation necessite une action immediate."},
        {en:"Some argue for reform; others resist change. This tension between progress and tradition is universal.",fr:"Certains plaident pour la reforme ; d'autres resistent au changement. Cette tension entre progres et tradition est universelle."},
        {en:"The data was inconclusive. Further research is needed to validate these preliminary findings.",fr:"Les donnees etaient peu concluantes. Des recherches supplementaires sont necessaires pour valider ces resultats preliminaires."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans les essais C1, utilisez 'this/that + nom' au lieu de 'this/that' seul pour plus de clarte. Variez les techniques de cohesion pour un texte fluide."}
    ],
    quiz:[
      {q:"Anaphora refers to:",opts:["A) reference to what follows","B) reference to what precedes","C) repetition of words","D) omission"],rep:'B',expl:"Anaphore = reference a ce qui precede."},
      {q:"Cataphora refers to:",opts:["A) reference to what precedes","B) reference to what follows","C) substitution","D) ellipsis"],rep:'B',expl:"Cataphore = reference a ce qui suit."},
      {q:"'I need a pen. Do you have one?' 'one' is:",opts:["A) anaphora","B) cataphora","C) substitution","D) ellipsis"],rep:'C',expl:"Substitution = remplacement par un terme generique."},
      {q:"'She can swim. I can too.' The omitted words are:",opts:["A) can swim","B) swim","C) can","D) too"],rep:'A',expl:"Ellipsis = omission de 'can swim'."},
      {q:"'This decision was unpopular.' 'This' is:",opts:["A) cataphoric","B) anaphoric","C) substitutive","D) elliptical"],rep:'B',expl:"This reference a ce qui precede = anaphorique."},
      {q:"'Consider the following: education transforms lives.' This is:",opts:["A) anaphora","B) cataphora","C) substitution","D) ellipsis"],rep:'B',expl:"Cataphore = reference a ce qui suit."},
      {q:"'The disease spread. The illness affected thousands.' This is:",opts:["A) anaphora","B) lexical chain","C) substitution","D) ellipsis"],rep:'B',expl:"Chaine lexicale = mots du meme champ semantique."},
      {q:"'This approach' is clearer than 'This' alone because:",opts:["A) it's shorter","B) it specifies the reference","C) it's more formal","D) it's less formal"],rep:'B',expl:"This + nom = reference plus claire."},
      {q:"'Some argue for reform; others resist.' 'Others' is:",opts:["A) anaphoric","B) cataphoric","C) substitutive","D) conjunctive"],rep:'C',expl:"Others = substitution pour 'other people'."},
      {q:"'Furthermore' is a:",opts:["A) pronoun","B) conjunction/linker","C) noun","D) verb"],rep:'B',expl:"Furthermore = conjonction/liens logique."}
    ]
  },

  {
    id:'gram_c1_m5',
    titre:'Modaux Avances et Nuances de Sens',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Maitriser les modaux pour exprimer des nuances subtiles",
      "Utiliser les modaux passes pour la deduction et le regret",
      "Employer les modaux semi-auxiliaires (needn't, dare, ought to)"
    ],
    contenu:[
      {type:'intro',texte:"Les modaux avances permettent d'exprimer des nuances de certitude, d'obligation, de permission et de deduction avec une grande precision. Essentiels pour le niveau C1."},
      {type:'tableau',titre:'Modaux passes pour la deduction',headers:["Modal + have + PP","Sens","Exemple"],rows:[
        ["must have + PP","Deduction certaine (passe)","She must have forgotten the meeting."],
        ["can't/couldn't have + PP","Impossible (passe)","He can't have stolen it — he was abroad."],
        ["may/might have + PP","Possibilite (passe)","They might have missed the train."],
        ["should have + PP","Regret / critique","You should have told me earlier."],
        ["needn't have + PP","Action inutile (mais faite)","You needn't have brought food — we have plenty."],
        ["would have + PP","Action non realisee","I would have helped, but I was busy."]
      ]},
      {type:'tableau',titre:'Modaux semi-auxiliaires',headers:["Modal","Usage","Exemple"],rows:[
        ["ought to","Conseil / obligation morale","You ought to apologize."],
        ["needn't","Absence de necessite","You needn't worry about it."],
        ["dare","Oser (negatif/interrogatif)","How dare you speak to me like that?"],
        ["used to","Habitude passe","I used to play tennis every weekend."],
        ["be supposed to","Attente / obligation","The train is supposed to arrive at 9."],
        ["had better","Conseil fort / avertissement","You'd better leave now or you'll be late."]
      ]},
      {type:'regle',titre:'Nuances de certitude',texte:"• must have = presque certain (>90%)\n• should have = attendu mais pas arrive\n• may/might have = possible (50%)\n• can't have = impossible (<5%)\n• needn't have = fait mais inutile\n• didn't need to = pas necessaire (et probablement pas fait)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The lights are off. They must have gone out.",fr:"Les lumieres sont eteintes. Ils doivent etre sortis."},
        {en:"She can't have said that — she's too professional.",fr:"Elle n'a pas pu dire ca — elle est trop professionnelle."},
        {en:"You needn't have cooked — I was going to order pizza.",fr:"Tu n'avais pas besoin de cuisiner — j'allais commander une pizza."},
        {en:"You'd better submit the report today, or the deadline will be missed.",fr:"Tu ferais mieux de soumettre le rapport aujourd'hui, sinon la date limite sera manquee."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : 'Must have' vs 'should have' — must = deduction logique, should = regret/critique. Confondre les deux est une erreur frequente."}
    ],
    quiz:[
      {q:"She's not answering. She ___ her phone.",opts:["A) must have lost","B) should have lost","C) needn't have lost","D) would have lost"],rep:'A',expl:"Must have = deduction certaine."},
      {q:"He ___ stolen it — he was abroad that day.",opts:["A) must have","B) can't have","C) might have","D) should have"],rep:'B',expl:"Can't have = impossible."},
      {q:"You ___ told me earlier! (criticism)",opts:["A) must have","B) should have","C) might have","D) can't have"],rep:'B',expl:"Should have = regret/critique."},
      {q:"You ___ have cooked — we have plenty of food.",opts:["A) mustn't","B) shouldn't","C) needn't","D) can't"],rep:'C',expl:"Needn't have = action inutile mais faite."},
      {q:"You ___ leave now or you'll miss the train.",opts:["A) should","B) had better","C) must","D) ought"],rep:'B',expl:"Had better = conseil fort/avertissement."},
      {q:"How ___ you speak to me like that?",opts:["A) should","B) dare","C) must","D) ought"],rep:'B',expl:"How dare you = Comment osez-vous."},
      {q:"The train ___ arrive at 9. (expectation)",opts:["A) is supposed to","B) must","C) should have","D) needn't"],rep:'A',expl:"Be supposed to = attente."},
      {q:"They ___ missed the train — they're late.",opts:["A) must have","B) should have","C) needn't have","D) can't have"],rep:'A',expl:"Must have = deduction logique."},
      {q:"I ___ play tennis every weekend. (past habit)",opts:["A) use to","B) used to","C) was used to","D) am used to"],rep:'B',expl:"Used to = habitude passee."},
      {q:"You ___ worry about it. (no necessity)",opts:["A) mustn't","B) shouldn't","C) needn't","D) can't"],rep:'C',expl:"Needn't = pas necessaire."}
    ]
  },

  // ── VOCABULAIRE C1 ────────────────────────────────────────────────

  {
    id:'voc_c1_m1',
    titre:'Vocabulaire Academique Avance',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Maitriser le vocabulaire academique de niveau C1",
      "Utiliser des termes precis pour l'analyse et la discussion",
      "Employer le langage de la recherche et de l'argumentation"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire academique C1 va au-dela des termes courants. Il inclut des mots precis pour l'analyse, la critique, la synthese et l'argumentation — essentiels pour les essais universitaires."},
      {type:'lexique',titre:'Analyse et Evaluation',items:[
        {en:"scrutinize",fr:"examiner minutieusement"},{en:"delineate",fr:"delimiter/decrire"},
        {en:"corroborate",fr:"corroborer/confirmer"},{en:"substantiate",fr:"etayer/prouver"},
        {en:"refute",fr:"refuter"},{en:"undermine",fr:"saper/affaiblir"},
        {en:"elucidate",fr:"elucider/eclaircir"},{en:"extrapolate",fr:"extrapoler"},
        {en:"synthesize",fr:"synthetiser"},{en:"juxtapose",fr:"juxtaposer"}
      ]},
      {type:'lexique',titre:'Argumentation et Rhetorique',items:[
        {en:"premise",fr:"premisse"},{en:"contention",fr:"affirmation/these"},
        {en:"rebuttal",fr:"refutation"},{en:"concession",fr:"concession"},
        {en:"fallacy",fr:"sophisme/erreur logique"},{en:"paradigm",fr:"paradigme"},
        {en:"discourse",fr:"discours"},{en:"rhetoric",fr:"rhetorique"},
        {en:"propensity",fr:"propension/tendance"},{en:"implication",fr:"implication/consequence"}
      ]},
      {type:'exemples',titre:'Exemples en contexte academique',items:[
        {en:"The study's findings corroborate earlier research on the topic.",fr:"Les resultats de l'etude corroborent des recherches anterieures sur le sujet."},
        {en:"Critics refute the premise that economic growth ensures social progress.",fr:"Les critiques refutent la premisse selon laquelle la croissance economique assure le progres social."},
        {en:"The author juxtaposes two contrasting theories to elucidate the phenomenon.",fr:"L'auteur juxtapose deux theories contrastees pour elucider le phenomene."},
        {en:"The argument is undermined by a fundamental logical fallacy.",fr:"L'argument est sape par une erreur logique fondamentale."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Ces mots sont des marqueurs C1 dans les essais. Utilisez 'corroborate' au lieu de 'support', 'refute' au lieu de 'disagree', 'elucidate' au lieu de 'explain'."}
    ],
    quiz:[
      {q:"'Scrutinize' means:",opts:["A) ignore","B) examine carefully","C) destroy","D) create"],rep:'B',expl:"Scrutinize = examiner minutieusement."},
      {q:"'Corroborate' means:",opts:["A) contradict","B) confirm/support","C) deny","D) question"],rep:'B',expl:"Corroborate = corroborer/confirmer."},
      {q:"'Refute' means:",opts:["A) agree","B) support","C) prove wrong","D) ignore"],rep:'C',expl:"Refute = refuter/prouver faux."},
      {q:"'Undermine' means:",opts:["A) strengthen","B) weaken/subvert","C) build","D) support"],rep:'B',expl:"Undermine = saper/affaiblir."},
      {q:"'Elucidate' means:",opts:["A) confuse","B) clarify/explain","C) hide","D) complicate"],rep:'B',expl:"Elucidate = elucider/eclaircir."},
      {q:"'Juxtapose' means:",opts:["A) separate","B) place side by side for comparison","C) mix","D) destroy"],rep:'B',expl:"Juxtapose = juxtaposer."},
      {q:"A 'premise' is:",opts:["A) a conclusion","B) a foundational assumption","C) a result","D) a question"],rep:'B',expl:"Premise = premisse/hypothese de base."},
      {q:"A 'fallacy' is:",opts:["A) a truth","B) a logical error","C) a fact","D) a theory"],rep:'B',expl:"Fallacy = sophisme/erreur logique."},
      {q:"'Extrapolate' means:",opts:["A) guess randomly","B) infer from known data","C) ignore","D) memorize"],rep:'B',expl:"Extrapolate = extrapoler/deduire de donnees connues."},
      {q:"'Synthesize' means:",opts:["A) separate","B) combine elements into a whole","C) destroy","D) analyze separately"],rep:'B',expl:"Synthesize = synthetiser/combiner."}
    ]
  },

  {
    id:'voc_c1_m2',
    titre:'Vocabulaire Juridique et Ethique',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Maitriser le vocabulaire juridique de base",
      "Discuter des questions ethiques en anglais",
      "Comprendre le langage des droits et des obligations"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire juridique et ethique est essentiel pour les debats, les essais et les contextes professionnels. Ce module couvre les termes cles."},
      {type:'lexique',titre:'Juridique',items:[
        {en:"legislation",fr:"legislation"},{en:"jurisdiction",fr:"juridiction"},
        {en:"plaintiff",fr:"plaignant"},{en:"defendant",fr:"defendeur"},
        {en:"verdict",fr:"verdict"},{en:"prosecution",fr:"accusation"},
        {en:"acquittal",fr:"acquittement"},{en:"liability",fr:"responsabilite"},
        {en:"compliance",fr:"conformite"},{en:"arbitration",fr:"arbitrage"}
      ]},
      {type:'lexique',titre:'Ethique et Morale',items:[
        {en:"integrity",fr:"integrite"},{en:"accountability",fr:"responsabilite (morale)"},
        {en:"transparency",fr:"transparence"},{en:"conflict of interest",fr:"conflit d'interets"},
        {en:"whistleblower",fr:"lanceur d'alerte"},{en:"ethical dilemma",fr:"dilemme ethique"},
        {en:"moral obligation",fr:"obligation morale"},{en:"human dignity",fr:"dignite humaine"},
        {en:"social responsibility",fr:"responsabilite sociale"},{en:"due diligence",fr:"diligence raisonnable"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The defendant was acquitted due to insufficient evidence.",fr:"Le defendeur a ete acquitte faute de preuves suffisantes."},
        {en:"The company faces liability for the environmental damage.",fr:"L'entreprise fait face a une responsabilite pour les dommages environnementaux."},
        {en:"The whistleblower exposed the corruption despite personal risk.",fr:"Le lanceur d'alerte a expose la corruption malgre le risque personnel."},
        {en:"Transparency and accountability are pillars of good governance.",fr:"La transparence et la responsabilite sont les piliers de la bonne gouvernance."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les themes juridiques et ethiques sont frequents dans les examens C1. Apprenez : liability, compliance, acquittal, accountability, transparency."}
    ],
    quiz:[
      {q:"'Legislation' refers to:",opts:["A) court decisions","B) laws enacted by a governing body","C) legal advice","D) court buildings"],rep:'B',expl:"Legislation = lois enacted par un corps gouvernant."},
      {q:"A 'plaintiff' is:",opts:["A) the accused","B) the person bringing a lawsuit","C) the judge","D) the lawyer"],rep:'B',expl:"Plaintiff = plaignant/personne qui porte plainte."},
      {q:"'Acquittal' means:",opts:["A) conviction","B) being found not guilty","C) sentencing","D) arrest"],rep:'B',expl:"Acquittal = acquitte/non coupable."},
      {q:"'Liability' means:",opts:["A) freedom","B) legal responsibility","C) innocence","D) privilege"],rep:'B',expl:"Liability = responsabilite legale."},
      {q:"'Compliance' means:",opts:["A) rebellion","B) following rules/regulations","C) ignoring","D) questioning"],rep:'B',expl:"Compliance = conformite aux regles."},
      {q:"A 'whistleblower' is:",opts:["A) a musician","B) someone who exposes wrongdoing","C) a referee","D) a spy"],rep:'B',expl:"Whistleblower = lanceur d'alerte."},
      {q:"'Integrity' means:",opts:["A) dishonesty","B) moral uprightness","C) weakness","D) flexibility"],rep:'B',expl:"Integrity = integrite morale."},
      {q:"A 'conflict of interest' is:",opts:["A) a physical fight","B) a situation where personal interests clash with professional duties","C) a legal case","D) a debate"],rep:'B',expl:"Conflit d'interets = interets personnels vs devoirs professionnels."},
      {q:"'Due diligence' means:",opts:["A) laziness","B) careful investigation before a decision","C) a court order","D) a legal penalty"],rep:'B',expl:"Due diligence = diligence raisonnable/investigation prudente."},
      {q:"'Accountability' means:",opts:["A) avoiding responsibility","B) being responsible for one's actions","C) counting","D) delegation"],rep:'B',expl:"Accountability = responsabilite morale."}
    ]
  },

  {
    id:'voc_c1_m3',
    titre:'Vocabulaire Economique et Financier',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Maitriser le vocabulaire economique avance",
      "Comprendre les termes financiers et boursiers",
      "Discuter des politiques economiques en anglais"
    ],
    contenu:[
      {type:'intro',texte:"Le vocabulaire economique et financier est essentiel pour le TOEIC, les etudes de commerce et la comprehension des actualites economiques."},
      {type:'lexique',titre:'Macroeconomie',items:[
        {en:"inflation",fr:"inflation"},{en:"deflation",fr:"deflation"},
        {en:"recession",fr:"recession"},{en:"depression",fr:"depression"},
        {en:"GDP (Gross Domestic Product)",fr:"PIB"},{en:"fiscal policy",fr:"politique fiscale"},
        {en:"monetary policy",fr:"politique monetaire"},{en:"interest rate",fr:"taux d'interet"},
        {en:"trade deficit",fr:"deficit commercial"},{en:"economic growth",fr:"croissance economique"}
      ]},
      {type:'lexique',titre:'Finance et Marches',items:[
        {en:"stock/share",fr:"action"},{en:"bond",fr:"obligation"},
        {en:"dividend",fr:"dividende"},{en:"portfolio",fr:"portefeuille"},
        {en:"volatility",fr:"volatilite"},{en:"bull market",fr:"marche haussier"},
        {en:"bear market",fr:"marche baissier"},{en:"liquidity",fr:"liquidite"},
        {en:"asset",fr:"actif"},{en:"liability",fr:"passif"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"The central bank raised interest rates to combat inflation.",fr:"La banque centrale a augmente les taux d'interet pour combattre l'inflation."},
        {en:"The stock market experienced significant volatility last quarter.",fr:"Le marche boursier a connu une volatilite significative le trimestre dernier."},
        {en:"The country's GDP grew by 3.2% despite the global recession.",fr:"Le PIB du pays a augmente de 3,2% malgre la recession mondiale."},
        {en:"Investors diversified their portfolios to reduce risk.",fr:"Les investisseurs ont diversifie leurs portefeuilles pour reduire le risque."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au TOEIC, le vocabulaire economique est omnipresent. Apprenez : inflation, recession, interest rate, GDP, asset, liability, portfolio."}
    ],
    quiz:[
      {q:"'Inflation' means:",opts:["A) falling prices","B) rising prices","C) stable prices","D) no prices"],rep:'B',expl:"Inflation = hausse des prix."},
      {q:"A 'recession' is:",opts:["A) economic growth","B) economic decline","C) stable economy","D) boom"],rep:'B',expl:"Recession = declin economique."},
      {q:"'GDP' stands for:",opts:["A) General Domestic Price","B) Gross Domestic Product","C) Global Development Plan","D) Government Debt Percentage"],rep:'B',expl:"GDP = Gross Domestic Product (PIB)."},
      {q:"A 'bond' is:",opts:["A) a stock","B) a debt security","C) a currency","D) a commodity"],rep:'B',expl:"Bond = obligation (titre de dette)."},
      {q:"'Volatility' refers to:",opts:["A) stability","B) rapid and unpredictable change","C) predictability","D) slowness"],rep:'B',expl:"Volatility = changement rapide et imprevisible."},
      {q:"A 'bull market' is:",opts:["A) falling market","B) rising market","C) stable market","D) closed market"],rep:'B',expl:"Bull market = marche haussier."},
      {q:"'Liquidity' means:",opts:["A) water content","B) ease of converting to cash","C) debt","D) profit"],rep:'B',expl:"Liquidite = facilite de conversion en cash."},
      {q:"An 'asset' is:",opts:["A) a debt","B) something of value owned","C) a loss","D) an expense"],rep:'B',expl:"Asset = actif/chose de valeur possedee."},
      {q:"'Fiscal policy' relates to:",opts:["A) military spending","B) government taxation and spending","C) foreign policy","D) education"],rep:'B',expl:"Fiscal policy = politique fiscale (taxes et depenses)."},
      {q:"A 'dividend' is:",opts:["A) a tax","B) a share of profits paid to shareholders","C) a loan","D) a fee"],rep:'B',expl:"Dividend = part des profits versee aux actionnaires."}
    ]
  },

  {
    id:'voc_c1_m4',
    titre:'Expressions Idiomatiques Avancees',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Maitriser les expressions idiomatiques de niveau C1",
      "Comprendre les expressions figurees en contexte",
      "Utiliser les idiomes avec precision et naturel"
    ],
    contenu:[
      {type:'intro',texte:"Les expressions idiomatiques sont des phrases dont le sens ne peut pas etre deduit des mots individuels. Au niveau C1, on attend une comprehension et une utilisation naturelle des idiomes."},
      {type:'lexique',titre:'Idiomes courants C1',items:[
        {en:"read between the lines",fr:"lire entre les lignes"},{en:"play devil's advocate",fr:"jouer l'avocat du diable"},
        {en:"the tip of the iceberg",fr:"la partie visible de l'iceberg"},{en:"a double-edged sword",fr:"une arme a double tranchant"},
        {en:"bite off more than you can chew",fr:"voir trop grand"},{en:"burn your bridges",fr:"bruler ses vaisseaux"},
        {en:"cut corners",fr:"faire des compromis sur la qualite"},{en:"hit the nail on the head",fr:"mettre le doigt dessus"},
        {en:"the ball is in your court",fr:"c'est a votre tour de jouer"},{en:"think outside the box",fr:"penser differemment"}
      ]},
      {type:'lexique',titre:'Idiomes professionnels',items:[
        {en:"get the ball rolling",fr:"lancer le processus"},{en:"on the same page",fr:"sur la meme longueur d'onde"},
        {en:"back to the drawing board",fr:"recommencer a zero"},{en:"call it a day",fr:"arreter pour aujourd'hui"},
        {en:"go the extra mile",fr:"faire un effort supplementaire"},{en:"keep someone in the loop",fr:"tenir quelqu'un informe"},
        {en:"put all your eggs in one basket",fr:"mettre tous ses oeufs dans le meme panier"},{en:"the bottom line",fr:"l'essentiel / le resultat final"},
        {en:"touch base",fr:"faire un point rapide"},{en:"up in the air",fr:"incertain / en suspens"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Technology is a double-edged sword — it connects us but also isolates us.",fr:"La technologie est une arme a double tranchant — elle nous connecte mais nous isole aussi."},
        {en:"We've only seen the tip of the iceberg; the real problems are yet to emerge.",fr:"Nous n'avons vu que la partie visible de l'iceberg ; les vrais problemes sont a venir."},
        {en:"Let me play devil's advocate: what if the data is flawed?",fr:"Laissez-moi jouer l'avocat du diable : et si les donnees etaient fausses ?"},
        {en:"The project is still up in the air pending budget approval.",fr:"Le projet est encore en suspens en attendant l'approbation du budget."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : N'utilisez les idiomes que si vous etes sur de leur sens et de leur contexte. Un idiome mal utilise est pire que pas d'idiome du tout."}
    ],
    quiz:[
      {q:"'Read between the lines' means:",opts:["A) read carefully","B) understand the hidden meaning","C) skip text","D) read aloud"],rep:'B',expl:"Lire entre les lignes = comprendre le sens cache."},
      {q:"'Play devil's advocate' means:",opts:["A) be evil","B) argue against something to test it","C) support everything","D) stay silent"],rep:'B',expl:"Jouer l'avocat du diable = argumenter contre pour tester."},
      {q:"'The tip of the iceberg' means:",opts:["A) the whole problem","B) a small visible part of a larger issue","C) something cold","D) nothing"],rep:'B',expl:"La partie visible d'un probleme plus grand."},
      {q:"'A double-edged sword' means:",opts:["A) only positive","B) only negative","C) both positive and negative","D) neutral"],rep:'C',expl:"Arme a double tranchant = avantages et inconvenients."},
      {q:"'Cut corners' means:",opts:["A) save time efficiently","B) do something poorly to save time/money","C) be precise","D) be creative"],rep:'B',expl:"Cut corners = faire des compromis sur la qualite."},
      {q:"'Hit the nail on the head' means:",opts:["A) miss the point","B) be exactly right","C) be violent","D) be confused"],rep:'B',expl:"Mettre le doigt dessus = etre exactement correct."},
      {q:"'The ball is in your court' means:",opts:["A) it's your decision/action","B) you lost","C) the game is over","D) you're playing"],rep:'A',expl:"C'est a votre tour de decider/agir."},
      {q:"'Burn your bridges' means:",opts:["A) build connections","B) destroy future options","C) travel","D) be careful"],rep:'B',expl:"Bruler ses vaisseaux = detruire les options futures."},
      {q:"'Go the extra mile' means:",opts:["A) walk far","B) make extra effort","C) be lazy","D) give up"],rep:'B',expl:"Faire un effort supplementaire."},
      {q:"'Up in the air' means:",opts:["A) flying","B) uncertain/unresolved","C) decided","D) finished"],rep:'B',expl:"Up in the air = incertain/en suspens."}
    ]
  },

  {
    id:'voc_c1_m5',
    titre:'Vocabulaire Environnemental et Scientifique',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Maitriser le vocabulaire environnemental avance",
      "Discuter des changements climatiques et de la durabilite",
      "Comprendre le langage scientifique de l'ecologie"
    ],
    contenu:[
      {type:'intro',texte:"Les questions environnementales sont au coeur des debats contemporains. Ce module couvre le vocabulaire essentiel pour discuter de ces enjeux complexes."},
      {type:'lexique',titre:'Changement climatique',items:[
        {en:"global warming",fr:"rechauffement climatique"},{en:"greenhouse gases",fr:"gaz a effet de serre"},
        {en:"carbon footprint",fr:"empreinte carbone"},{en:"emissions",fr:"emissions"},
        {en:"fossil fuels",fr:"combustibles fossiles"},{en:"renewable energy",fr:"energie renouvelable"},
        {en:"deforestation",fr:"deforestation"},{en:"biodiversity",fr:"biodiversite"},
        {en:"ecosystem",fr:"ecosysteme"},{en:"sustainability",fr:"durabilite"}
      ]},
      {type:'lexique',titre:'Politique environnementale',items:[
        {en:"carbon tax",fr:"taxe carbone"},{en:"cap and trade",fr:"plafonnement et echange"},
        {en:"environmental impact assessment",fr:"etude d'impact environnemental"},{en:"conservation",fr:"conservation"},
        {en:"mitigation",fr:"attenuation"},{en:"adaptation",fr:"adaptation"},
        {en:"circular economy",fr:"economie circulaire"},{en:"greenwashing",fr:"ecoblanchiment"},
        {en:"net zero",fr:"zero net"},{en:"Paris Agreement",fr:"Accord de Paris"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Reducing our carbon footprint requires both individual and collective action.",fr:"Reduire notre empreinte carbone necessite une action individuelle et collective."},
        {en:"The company was accused of greenwashing after making false environmental claims.",fr:"L'entreprise a ete accusee d'ecoblanchiment apres avoir fait de fausses declarations environnementales."},
        {en:"Deforestation threatens biodiversity and accelerates global warming.",fr:"La deforestation menace la biodiversite et accelere le rechauffement climatique."},
        {en:"The transition to a circular economy aims to eliminate waste.",fr:"La transition vers une economie circulaire vise a eliminer les dechets."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les themes environnementaux sont TOUJOURS presents dans les examens C1. Apprenez : carbon footprint, sustainability, biodiversity, emissions, mitigation."}
    ],
    quiz:[
      {q:"'Carbon footprint' refers to:",opts:["A) a physical mark","B) total greenhouse gas emissions caused by an entity","C) a type of fuel","D) a measurement tool"],rep:'B',expl:"Empreinte carbone = total des emissions de GES."},
      {q:"'Deforestation' means:",opts:["A) planting trees","B) clearing forests","C) building forests","D) protecting forests"],rep:'B',expl:"Deforestation = deforestation/abattage de forets."},
      {q:"'Biodiversity' refers to:",opts:["A) one species","B) variety of life in an ecosystem","C) extinction","D) pollution"],rep:'B',expl:"Biodiversite = variete de la vie dans un ecosysteme."},
      {q:"'Greenwashing' means:",opts:["A) cleaning with green products","B) making false environmental claims","C) recycling","D) planting trees"],rep:'B',expl:"Greenwashing = ecoblanchiment/fausses declarations ecologiques."},
      {q:"'Mitigation' in climate context means:",opts:["A) making worse","B) reducing severity","C) ignoring","D) adapting"],rep:'B',expl:"Mitigation = attenuation/reduction de la gravite."},
      {q:"'Fossil fuels' include:",opts:["A) solar energy","B) coal, oil, and natural gas","C) wind energy","D) nuclear energy"],rep:'B',expl:"Combustibles fossiles = charbon, petrole, gaz naturel."},
      {q:"'Net zero' means:",opts:["A) no energy use","B) balancing emissions with removals","C) zero population","D) zero growth"],rep:'B',expl:"Net zero = equilibre entre emissions et absorptions."},
      {q:"'Circular economy' aims to:",opts:["A) increase waste","B) eliminate waste through reuse","C) use more resources","D) stop production"],rep:'B',expl:"Economie circulaire = eliminer les dechets par le reemploi."},
      {q:"'Emissions' refers to:",opts:["A) absorption","B) release of gases into the atmosphere","C) conservation","D) recycling"],rep:'B',expl:"Emissions = rejet de gaz dans l'atmosphere."},
      {q:"'Sustainability' means:",opts:["A) short-term thinking","B) meeting present needs without compromising the future","C) rapid growth","D) exploitation"],rep:'B',expl:"Durabilite = repondre aux besoins presents sans compromettre le futur."}
    ]
  },

  // ── LISTENING & SPEAKING C1 ───────────────────────────────────────

  {
    id:'listen_c1_m1',
    titre:'Listening — Cours Universitaires et Seminaires',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Comprendre des cours universitaires complexes en anglais",
      "Identifier les arguments principaux et secondaires",
      "Prendre des notes structurees pendant un cours"
    ],
    contenu:[
      {type:'intro',texte:"Les cours universitaires utilisent un langage academique dense avec des references, des arguments complexes et un vocabulaire specialise. Ce module vous prepare a ces ecoutes exigeantes."},
      {type:'tableau',titre:'Signaux discursifs academiques',headers:["Signal","Fonction","Exemple"],rows:[
        ["Let me begin by...","Introduction du sujet","Let me begin by outlining the theoretical framework."],
        ["The crux of the matter is...","Point central","The crux of the matter is whether the data supports the hypothesis."],
        ["Conversely...","Contraste","Conversely, some scholars argue the opposite."],
        ["It follows that...","Consequence logique","It follows that the policy must be reconsidered."],
        ["To contextualize this...","Mise en contexte","To contextualize this, we need to look at the historical background."],
        ["This begs the question...","Question soulevee","This begs the question: what are the ethical implications?"],
        ["In light of this...","Conclusion partielle","In light of this, we must revise our approach."]
      ]},
      {type:'regle',titre:'Strategies de prise de notes avancee',texte:"1. Utilisez le systeme Cornell : divisez votre page en 3 zones (notes, mots-cles, resume)\n2. Notez les signaux discursifs (however, therefore, conversely)\n3. Utilisez des symboles : ∴ = therefore, ∵ = because, ≠ = different, ≈ = similar\n4. Notez les noms de chercheurs et les dates\n5. Identifiez la these principale et les sous-arguments"},
      {type:'exemples',titre:'Extrait de cours universitaire',items:[
        {en:"Let me begin by outlining the theoretical framework. The crux of the matter is whether economic growth is compatible with environmental sustainability. Conversely, some scholars argue that green technology can reconcile these objectives. It follows that the policy must be reconsidered. In light of this, we must revise our approach to development.",fr:"Permettez-moi de commencer par exposer le cadre theorique. Le coeur du sujet est de savoir si la croissance economique est compatible avec la durabilite environnementale. Inversement, certains chercheurs soutiennent que la technologie verte peut reconcilier ces objectifs. Il s'ensuit que la politique doit etre reconsideree. A la lumiere de cela, nous devons reviser notre approche du developpement."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Ecoutez des cours en ligne (Coursera, edX, MIT OpenCourseWare). Commencez avec les sous-titres, puis sans. Prenez des notes avec le systeme Cornell."}
    ],
    quiz:[
      {q:"'The crux of the matter' means:",opts:["A) the introduction","B) the central point","C) the conclusion","D) an example"],rep:'B',expl:"Crux = point central/coeur du sujet."},
      {q:"'Conversely' signals:",opts:["A) agreement","B) contrast/opposition","C) addition","D) conclusion"],rep:'B',expl:"Conversely = inversement (contraste)."},
      {q:"'It follows that' signals:",opts:["A) a question","B) a logical consequence","C) an example","D) a contrast"],rep:'B',expl:"It follows that = il s'ensuit que (consequence logique)."},
      {q:"'This begs the question' means:",opts:["A) this answers the question","B) this raises a question","C) this is irrelevant","D) this is obvious"],rep:'B',expl:"Begs the question = souleve une question."},
      {q:"'In light of this' means:",opts:["A) ignoring this","B) considering this","C) before this","D) after this"],rep:'B',expl:"In light of this = a la lumiere de cela (en considerant)."},
      {q:"The Cornell note-taking system uses:",opts:["A) one section","B) three zones","C) only drawings","D) no structure"],rep:'B',expl:"Cornell = 3 zones (notes, mots-cles, resume)."},
      {q:"'To contextualize this' means:",opts:["A) to ignore context","B) to provide background","C) to conclude","D) to summarize"],rep:'B',expl:"Contextualize = fournir le contexte."},
      {q:"'∴' in notes means:",opts:["A) because","B) therefore","C) different","D) similar"],rep:'B',expl:"∴ = therefore (donc)."},
      {q:"'≠' in notes means:",opts:["A) equal","B) different","C) similar","D) approximately"],rep:'B',expl:"≠ = different (different)."},
      {q:"'Some scholars argue' indicates:",opts:["A) universal agreement","B) a debated viewpoint","C) a fact","D) a conclusion"],rep:'B',expl:"Some scholars argue = un point de vue debattu."}
    ]
  },

  {
    id:'listen_c1_m2',
    titre:'Listening — Debats Academiques et Controverses',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Suivre des debats complexes avec multiples perspectives",
      "Identifier les positions, les arguments et les contre-arguments",
      "Comprendre le langage de la controverse academique"
    ],
    contenu:[
      {type:'intro',texte:"Les debats academiques impliquent des positions nuancees, des arguments complexes et des refutations sophistiquees. Ce module vous prepare a ces echanges intellectuels."},
      {type:'tableau',titre:'Langage du debat academique',headers:["Expression","Fonction","Exemple"],rows:[
        ["Proponents argue that...","Presenter un camp","Proponents argue that globalization benefits all."],
        ["Critics counter that...","Presenter l'opposition","Critics counter that it exacerbates inequality."],
        ["The evidence suggests...","Presenter des donnees","The evidence suggests a correlation, not causation."],
        ["This view is untenable because...","Refuter","This view is untenable because it ignores key data."],
        ["A more nuanced perspective would be...","Nuancer","A more nuanced perspective would acknowledge both sides."],
        ["The consensus among scholars is...","Consensus","The consensus among scholars is that climate change is real."],
        ["The debate remains unresolved...","Impasse","The debate remains unresolved due to conflicting evidence."]
      ]},
      {type:'regle',titre:'Identifier la structure d\'un debat',texte:"1. These principale : quelle est la question centrale ?\n2. Position A : quels sont les arguments principaux ?\n3. Position B : quels sont les contre-arguments ?\n4. Evidence : quelles donnees soutiennent chaque camp ?\n5. Conclusion : y a-t-il un consensus ou une impasse ?"},
      {type:'exemples',titre:'Extrait de debat',items:[
        {en:"Proponents argue that artificial intelligence will revolutionize healthcare. Critics counter that it raises ethical concerns about privacy and autonomy. The evidence suggests both positions have merit. A more nuanced perspective would acknowledge the potential benefits while addressing the risks. The debate remains unresolved, but the consensus among scholars is that regulation is necessary.",fr:"Les partisans soutiennent que l'IA revolutionnera la sante. Les critiques retorquent que cela souleve des preoccupations ethiques sur la vie privee et l'autonomie. Les preuves suggerent que les deux positions ont du merite. Une perspective plus nuancee reconnaitrait les avantages potentiels tout en abordant les risques. Le debat reste irresolu, mais le consensus parmi les chercheurs est que la reglementation est necessaire."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans les debats, notez TOUJOURS les deux camps et leurs arguments. Le mot-cle 'however' ou 'conversely' signale souvent le changement de camp."}
    ],
    quiz:[
      {q:"'Proponents argue' introduces:",opts:["A) the opposition","B) the supporting side","C) the conclusion","D) a question"],rep:'B',expl:"Proponents = partisans/camp favorable."},
      {q:"'Critics counter' introduces:",opts:["A) agreement","B) the opposing view","C) the conclusion","D) an example"],rep:'B',expl:"Critics counter = les critiques retorquent (opposition)."},
      {q:"'Untenable' means:",opts:["A) defensible","B) impossible to defend","C) popular","D) proven"],rep:'B',expl:"Untenable = impossible a defendre."},
      {q:"'A more nuanced perspective' suggests:",opts:["A) a simplistic view","B) a more complex and balanced view","C) no view","D) the same view"],rep:'B',expl:"Nuanced = plus complexe et equilibre."},
      {q:"'Consensus' means:",opts:["A) disagreement","B) general agreement","C) confusion","D) debate"],rep:'B',expl:"Consensus = accord general."},
      {q:"'The debate remains unresolved' means:",opts:["A) settled","B) no conclusion reached","C) won","D) ignored"],rep:'B',expl:"Unresolved = pas de conclusion atteinte."},
      {q:"'Correlation, not causation' means:",opts:["A) one causes the other","B) they are related but one doesn't cause the other","C) no relationship","D) both are false"],rep:'B',expl:"Correlation ≠ causalite."},
      {q:"'The evidence suggests' indicates:",opts:["A) certainty","B) tentative support","C) refutation","D) irrelevance"],rep:'B',expl:"Suggests = support provisoire (pas certitude)."},
      {q:"'Ethical concerns' relate to:",opts:["A) financial issues","B) moral questions","C) technical problems","D) legal matters"],rep:'B',expl:"Ethical concerns = questions morales."},
      {q:"'Regulation' in this context means:",opts:["A) freedom","B) rules and oversight","C) chaos","D) innovation"],rep:'B',expl:"Regulation = regles et supervision."}
    ]
  },

  {
    id:'speak_c1_m1',
    titre:'Speaking — Presentations Academiques et Professionnelles',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Structurer une presentation academique ou professionnelle de niveau C1",
      "Utiliser un langage persuasif et nuance",
      "Gerer les questions difficiles avec elegance"
    ],
    contenu:[
      {type:'intro',texte:"Les presentations de niveau C1 exigent non seulement une maitrise du contenu, mais aussi une capacite a nuancer, a anticiper les objections et a engager l'auditoire."},
      {type:'tableau',titre:'Structure d\'une presentation C1',headers:["Partie","Expressions","Exemple"],rows:[
        ["Hook","Let me start with a provocative question...","Let me start with a provocative question: what if everything we know is wrong?"],
        ["Roadmap","I'll structure my presentation around three key points...","I'll structure my presentation around three key points."],
        ["Signposting","Moving on to my second point...","Moving on to my second point, let's examine the data."],
        ["Nuance","It's worth noting that...","It's worth noting that these findings are preliminary."],
        ["Anticipating objections","Some might argue that... However...","Some might argue that the sample is too small. However..."],
        ["Conclusion","To bring this full circle...","To bring this full circle, let me reiterate my central argument."],
        ["Q&A","I welcome any questions or challenges...","I welcome any questions or challenges to this analysis."]
      ]},
      {type:'regle',titre:'Gerer les questions difficiles',texte:"• 'That's an excellent question. Let me address that...' (gagner du temps)\n• 'I'm glad you raised that point. The evidence suggests...' (reconnaitre)\n• 'That's beyond the scope of this presentation, but...' (devier poliment)\n• 'I don't have the data to answer that definitively, but...' (honnetete)\n• 'Let me reframe your question to make sure I understand...' (clarifier)"},
      {type:'exemples',titre:'Exemple de presentation C1',items:[
        {en:"Let me start with a provocative question: can economic growth coexist with environmental sustainability? I'll structure my presentation around three key points. First, the theoretical framework. Second, the empirical evidence. Third, the policy implications. It's worth noting that these findings are preliminary. Some might argue that the data is inconclusive. However, the trend is clear. To bring this full circle, let me reiterate my central argument: sustainable development is not just possible — it's imperative.",fr:"Permettez-moi de commencer par une question provocatrice : la croissance economique peut-elle coexister avec la durabilite environnementale ? Je structurerai ma presentation autour de trois points cles. Premierement, le cadre theorique. Deuxiemement, les preuves empiriques. Troisiemement, les implications politiques. Il convient de noter que ces resultats sont preliminaires. Certains pourraient soutenir que les donnees sont peu concluantes. Cependant, la tendance est claire. Pour boucler la boucle, permettez-moi de reiterer mon argument central : le developpement durable n'est pas seulement possible — il est imperatif."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Une presentation C1 ne se contente pas de presenter des faits — elle les analyse, les nuance et anticipe les objections."}
    ],
    quiz:[
      {q:"A 'hook' in a presentation is:",opts:["A) the conclusion","B) an attention-grabbing opening","C) a summary","D) a question at the end"],rep:'B',expl:"Hook = ouverture accrocheuse."},
      {q:"'Signposting' means:",opts:["A) putting up signs","B) guiding the audience through your structure","C) confusing the audience","D) ending abruptly"],rep:'B',expl:"Signposting = guider l'auditoire dans la structure."},
      {q:"'It's worth noting that' is used to:",opts:["A) dismiss a point","B) highlight an important detail","C) conclude","D) introduce"],rep:'B',expl:"Worth noting = souligner un detail important."},
      {q:"'Some might argue that... However...' is:",opts:["A) ignoring objections","B) anticipating and addressing objections","C) agreeing with everyone","D) avoiding the topic"],rep:'B',expl:"Anticiper et repondre aux objections."},
      {q:"'To bring this full circle' means:",opts:["A) to start over","B) to connect back to the beginning","C) to end abruptly","D) to confuse"],rep:'B',expl:"Boucler la boucle = revenir au debut."},
      {q:"'That's beyond the scope of this presentation' is:",opts:["A) rude","B) a polite way to defer a question","C) an admission of ignorance","D) an insult"],rep:'B',expl:"Maniere polie de reporter une question."},
      {q:"'Let me reframe your question' is used to:",opts:["A) ignore","B) clarify understanding","C) argue","D) dismiss"],rep:'B',expl:"Reformuler pour clarifier la comprehension."},
      {q:"'Empirical evidence' means:",opts:["A) theoretical","B) based on observation/data","C) fictional","D) anecdotal"],rep:'B',expl:"Empirical = base sur l'observation/les donnees."},
      {q:"'Imperative' means:",opts:["A) optional","B) absolutely necessary","C) interesting","D) irrelevant"],rep:'B',expl:"Imperative = absolument necessaire."},
      {q:"'Preliminary findings' are:",opts:["A) final results","B) initial/early results","C) false results","D) no results"],rep:'B',expl:"Preliminary = resultats initiaux/precoces."}
    ]
  },

  {
    id:'speak_c1_m2',
    titre:'Speaking — Negotiations et Diplomatie',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Maitriser le langage des negotiations complexes",
      "Utiliser des strategies de persuasion avancees",
      "Gerer les conflits et trouver des compromis"
    ],
    contenu:[
      {type:'intro',texte:"Les negotiations de niveau C1 exigent un langage sophistique, une capacite a lire entre les lignes et une maitrise des strategies de persuasion."},
      {type:'tableau',titre:'Strategies de negotiation avancee',headers:["Strategie","Expression","Exemple"],rows:[
        ["Ancrage","Our starting position is...","Our starting position is a 20% reduction in costs."],
        ["Concession conditionnelle","We could consider X, provided that Y...","We could consider extending the deadline, provided that the budget is increased."],
        ["Reformulation","If I understand correctly, you're saying...","If I understand correctly, you're saying the timeline is the main concern."],
        ["Desamorcer","I appreciate your perspective, and...","I appreciate your perspective, and I'd like to offer an alternative."],
        ["Proposition creative","What if we approached this from a different angle?","What if we approached this from a different angle?"],
        ["Fermeture","Shall we consider this agreed?","Shall we consider this agreed and move forward?"],
        ["Sauvegarder la face","That's a valid point, and it leads us to...","That's a valid point, and it leads us to a mutually beneficial solution."]
      ]},
      {type:'regle',titre:'Principes de negotiation C1',texte:"1. Separez les personnes du probleme\n2. Concentrez-vous sur les interets, pas les positions\n3. Inventez des options pour un gain mutuel\n4. Insistez sur des criteres objectifs\n5. Connaissez votre BATNA (Best Alternative To a Negotiated Agreement)"},
      {type:'exemples',titre:'Negotiation complexe',items:[
        {en:"A: Our starting position is a 15% price reduction.\nB: I appreciate your perspective, and I'd like to offer an alternative. What if we maintained the current price but added a 2-year warranty?\nA: If I understand correctly, you're saying the value proposition is more important than the price.\nB: Exactly. We could consider a 5% reduction, provided that you commit to a 3-year contract.\nA: That's a valid point, and it leads us to a mutually beneficial solution. Shall we consider this agreed?",fr:"A : Notre position de depart est une reduction de prix de 15%.\nB : J'apprecie votre perspective, et j'aimerais offrir une alternative. Et si nous maintenions le prix actuel mais ajoutions une garantie de 2 ans ?\nA : Si je comprends bien, vous dites que la proposition de valeur est plus importante que le prix.\nB : Exactement. Nous pourrions considerer une reduction de 5%, a condition que vous vous engagiez sur un contrat de 3 ans.\nA : C'est un point valide, et cela nous mene a une solution mutuellement benefique. Pouvons-nous considerer cela comme convenu ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : En negotiation, le langage est un outil. Utilisez 'I appreciate your perspective' pour desamorcer, 'What if' pour proposer, et 'Shall we consider this agreed?' pour fermer."}
    ],
    quiz:[
      {q:"'BATNA' stands for:",opts:["A) Best Alternative To a Negotiated Agreement","B) Bad Agreement","C) Best Action","D) Basic Alternative"],rep:'A',expl:"BATNA = Meilleure Alternative a un Accord Negocie."},
      {q:"'Our starting position' is used for:",opts:["A) closing","B) anchoring","C) conceding","D) reframing"],rep:'B',expl:"Ancrage = position de depart."},
      {q:"'Provided that' introduces:",opts:["A) a fact","B) a condition","C) a conclusion","D) a question"],rep:'B',expl:"Provided that = a condition que."},
      {q:"'If I understand correctly' is used to:",opts:["A) confuse","B) reframe/confirm understanding","C) argue","D) dismiss"],rep:'B',expl:"Reformuler/confirmer la comprehension."},
      {q:"'I appreciate your perspective' is used to:",opts:["A) agree completely","B) defuse tension","C) disagree rudely","D) ignore"],rep:'B',expl:"Desamorcer la tension."},
      {q:"'What if we approached this differently?' is:",opts:["A) a demand","B) a creative proposal","C) a refusal","D) a conclusion"],rep:'B',expl:"Proposition creative."},
      {q:"'Shall we consider this agreed?' is used for:",opts:["A) starting","B) closing","C) arguing","D) questioning"],rep:'B',expl:"Fermeture de la negotiation."},
      {q:"'That's a valid point' is used to:",opts:["A) dismiss","B) acknowledge and save face","C) argue","D) ignore"],rep:'B',expl:"Reconnaitre et sauvegarder la face."},
      {q:"'Value proposition' refers to:",opts:["A) the price only","B) the overall benefit offered","C) the cost","D) the risk"],rep:'B',expl:"Value proposition = benefice global offert."},
      {q:"'Mutually beneficial' means:",opts:["A) one-sided","B) advantageous to both parties","C) harmful","D) neutral"],rep:'B',expl:"Mutuellement benefique = avantageux pour les deux parties."}
    ]
  },

  // ── WRITING C1 ────────────────────────────────────────────────────

  {
    id:'write_c1_m1',
    titre:'Writing — Essais Academiques Avances',
    niveau:'C1',
    duree:40,
    objectifs:[
      "Structurer un essai academique de niveau C1",
      "Developper des arguments nuances et bien etayes",
      "Utiliser un registre formel et un vocabulaire precis"
    ],
    contenu:[
      {type:'intro',texte:"L'essai academique C1 exige une structure rigoureuse, des arguments nuances, une utilisation precise du vocabulaire et une maitrise du registre formel."},
      {type:'tableau',titre:'Structure d\'un essai C1',headers:["Section","Contenu","Exemple"],rows:[
        ["Introduction","Hook + contexte + these","While technology has transformed education, its impact on critical thinking remains debatable."],
        ["Body 1","Argument principal + preuve","Proponents argue that digital tools enhance access to information."],
        ["Body 2","Contre-argument + refutation","However, critics contend that overreliance on technology diminishes analytical skills."],
        ["Body 3","Nuance / perspective alternative","A more nuanced view acknowledges both benefits and risks."],
        ["Conclusion","Synthese + ouverture","In conclusion, the key lies not in rejecting technology but in using it judiciously."]
      ]},
      {type:'regle',titre:'Registre formel C1',texte:"• Evitez les contractions (don't → do not, can't → cannot)\n• Evitez les pronoms personnels (I, you, we) — utilisez le passif ou 'one'\n• Evitez les mots vagues (things, stuff, a lot) — soyez precis\n• Utilisez des structures complexes (subordonnees, participes, inversions)\n• Variez les connecteurs (however, nevertheless, conversely, furthermore)"},
      {type:'exemples',titre:'Exemple de paragraphe C1',items:[
        {en:"While proponents of digital learning argue that technology democratizes access to education, critics contend that it exacerbates existing inequalities. The evidence suggests both positions have merit: while online platforms have indeed expanded educational opportunities, the digital divide remains a significant barrier. A more nuanced perspective would acknowledge that technology is neither inherently beneficial nor detrimental — its impact depends on how it is implemented and who has access to it.",fr:"Alors que les partisans de l'apprentissage numerique soutiennent que la technologie democratise l'acces a l'education, les critiques affirment qu'elle exacerbe les inegalites existantes. Les preuves suggerent que les deux positions ont du merite : alors que les plateformes en ligne ont effectivement elargi les opportunites educatives, la fracture numerique reste un obstacle significatif. Une perspective plus nuancee reconnaitrait que la technologie n'est ni intrinsequement benefique ni nuisible — son impact depend de la maniere dont elle est mise en oeuvre et de qui y a acces."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un essai C1 ne presente pas juste un cote — il explore les nuances, reconnait les contre-arguments et arrive a une conclusion equilibree."}
    ],
    quiz:[
      {q:"A C1 essay introduction should include:",opts:["A) just the thesis","B) a hook, context, and thesis","C) only examples","D) the conclusion"],rep:'B',expl:"Introduction = hook + contexte + these."},
      {q:"In formal writing, 'I think' should be replaced by:",opts:["A) I feel","B) impersonal structures (It is argued that...)", "C) you know","D) like"],rep:'B',expl:"Registre formel = structures impersonnelles."},
      {q:"'However' is used to:",opts:["A) add","B) contrast","C) conclude","D) exemplify"],rep:'B',expl:"However = contraste."},
      {q:"A 'nuanced perspective' means:",opts:["A) a simple view","B) a complex and balanced view","C) no view","D) an extreme view"],rep:'B',expl:"Nuanced = complexe et equilibre."},
      {q:"In formal writing, contractions should be:",opts:["A) used freely","B) avoided","C) required","D) optional"],rep:'B',expl:"Registre formel = pas de contractions."},
      {q:"'The evidence suggests' is:",opts:["A) informal","B) formal and tentative","C) too certain","D) irrelevant"],rep:'B',expl:"Formel et prudent (pas trop certain)."},
      {q:"A body paragraph should contain:",opts:["A) only examples","B) argument + evidence + analysis","C) only opinions","D) only quotes"],rep:'B',expl:"Paragraphe = argument + preuve + analyse."},
      {q:"'Furthermore' is used to:",opts:["A) contrast","B) add information","C) conclude","D) question"],rep:'B',expl:"Furthermore = addition."},
      {q:"The conclusion should:",opts:["A) introduce new ideas","B) synthesize and provide closure","C) repeat the introduction","D) be longer than the body"],rep:'B',expl:"Conclusion = synthese et fermeture."},
      {q:"'Judiciously' means:",opts:["A) carelessly","B) with good judgment","C) randomly","D) quickly"],rep:'B',expl:"Judiciously = avec bon jugement."}
    ]
  },

  {
    id:'write_c1_m2',
    titre:'Writing — Rapports et Propositions',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Rediger des rapports professionnels structures",
      "Formuler des propositions convaincantes",
      "Utiliser le langage des recommandations et des conclusions"
    ],
    contenu:[
      {type:'intro',texte:"Les rapports et propositions professionnels exigent une structure claire, des donnees precises et des recommandations actionnables."},
      {type:'tableau',titre:'Structure d\'un rapport C1',headers:["Section","Contenu","Exemple"],rows:[
        ["Executive Summary","Resume des points cles","This report examines the impact of remote work on productivity."],
        ["Introduction","Contexte + objectifs","The purpose of this report is to assess..."],
        ["Methodology","Approche + sources","Data was collected through surveys and interviews."],
        ["Findings","Resultats + donnees","72% of respondents reported increased satisfaction."],
        ["Analysis","Interpretation","These findings suggest a positive correlation between..."],
        ["Recommendations","Actions proposees","It is recommended that the organization implement..."],
        ["Conclusion","Synthese","In light of the findings, the evidence supports..."]
      ]},
      {type:'regle',titre:'Langage des recommandations',texte:"• 'It is recommended that...' (formel)\n• 'The data suggests that implementing X would yield Y...' (base sur les donnees)\n• 'Given the findings, it would be prudent to...' (prudent)\n• 'We strongly advise...' (fort)\n• 'Consideration should be given to...' (suggestion douce)"},
      {type:'exemples',titre:'Exemple de recommandation',items:[
        {en:"In light of the findings, it is recommended that the organization implement a hybrid work model. The data suggests that this approach would yield a 15% increase in employee satisfaction while maintaining productivity levels. Given the positive outcomes observed in pilot programs, it would be prudent to roll out this initiative across all departments by Q3.",fr:"A la lumiere des resultats, il est recommande que l'organisation mette en place un modele de travail hybride. Les donnees suggerent que cette approche entrainerait une augmentation de 15% de la satisfaction des employes tout en maintenant les niveaux de productivite. Compte tenu des resultats positifs observes dans les programmes pilotes, il serait prudent de deployer cette initiative dans tous les departements d'ici le T3."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un rapport C1 est concis, base sur les donnees, et oriente vers l'action. Chaque recommandation doit etre justifiee par les resultats."}
    ],
    quiz:[
      {q:"An 'Executive Summary' is:",opts:["A) the full report","B) a brief overview of key points","C) the conclusion","D) the methodology"],rep:'B',expl:"Executive Summary = resume des points cles."},
      {q:"'Methodology' refers to:",opts:["A) the results","B) the approach and methods used","C) the recommendations","D) the conclusion"],rep:'B',expl:"Methodology = approche et methodes utilisees."},
      {q:"'It is recommended that' is:",opts:["A) informal","B) formal language for suggestions","C) a question","D) a fact"],rep:'B',expl:"Langage formel pour les suggestions."},
      {q:"'The data suggests' indicates:",opts:["A) certainty","B) evidence-based inference","C) opinion","D) guess"],rep:'B',expl:"Inference basee sur les donnees."},
      {q:"'Given the findings' means:",opts:["A) ignoring the results","B) based on the results","C) before the results","D) after the report"],rep:'B',expl:"Compte tenu des resultats."},
      {q:"'Prudent' means:",opts:["A) reckless","B) careful and wise","C) fast","D) lazy"],rep:'B',expl:"Prudent = prudent et sage."},
      {q:"'Roll out' in this context means:",opts:["A) cancel","B) implement/deploy","C) delay","D) hide"],rep:'B',expl:"Roll out = deployer/mettre en oeuvre."},
      {q:"'Pilot programs' are:",opts:["A) final programs","B) small-scale test programs","C) failed programs","D) large programs"],rep:'B',expl:"Pilot programs = programmes tests a petite echelle."},
      {q:"'Hybrid work model' means:",opts:["A) only office work","B) combination of office and remote work","C) only remote work","D) no work"],rep:'B',expl:"Hybride = combinaison bureau et teletravail."},
      {q:"'In light of' means:",opts:["A) ignoring","B) considering","C) before","D) after"],rep:'B',expl:"In light of = en considerant."}
    ]
  },

  {
    id:'write_c1_m3',
    titre:'Writing — Syntheses et Reviews Critiques',
    niveau:'C1',
    duree:35,
    objectifs:[
      "Rediger des syntheses de plusieurs sources",
      "Formuler des critiques constructives et nuancees",
      "Evaluer la credibilite des sources"
    ],
    contenu:[
      {type:'intro',texte:"La synthese et la critique exigent une capacite a analyser, comparer et evaluer plusieurs sources de maniere objective et nuancee."},
      {type:'tableau',titre:'Evaluation des sources',headers:["Critere","Question","Exemple"],rows:[
        ["Autorite","Qui est l'auteur ?","Smith, a professor at Oxford, argues that..."],
        ["Actualite","Quand a-t-il ete publie ?","Published in 2024, this study reflects recent developments."],
        ["Objectivite","Y a-t-il un biais ?","While the study is well-conducted, it was funded by the industry."],
        ["Methodologie","Comment la recherche a-t-elle ete menee ?","Using a sample of 10,000 participants, the study..."],
        ["Pertinence","Est-ce pertinent pour mon sujet ?","This article directly addresses the research question."],
        ["Coherence","Les conclusions sont-elles logiques ?","The conclusions follow logically from the data."]
      ]},
      {type:'regle',titre:'Structurer une synthese',texte:"1. Introduisez le theme et les sources\n2. Comparez les positions (similitudes et differences)\n3. Evaluez la credibilite de chaque source\n4. Identifiez les lacunes dans la litterature\n5. Concluez avec votre propre analyse"},
      {type:'exemples',titre:'Exemple de synthese',items:[
        {en:"Three recent studies address the impact of remote work on productivity. Smith (2024) found a 12% increase in output, while Johnson (2023) reported no significant change. Conversely, Lee (2024) identified a 5% decrease in collaborative tasks. While all three studies employed robust methodologies, Smith's larger sample size (n=5,000) lends greater weight to its findings. The discrepancy may be attributed to differences in industry and job type. Overall, the evidence suggests that remote work benefits individual tasks but may hinder collaboration.",fr:"Trois etudes recentes abordent l'impact du teletravail sur la productivite. Smith (2024) a constate une augmentation de 12% de la production, tandis que Johnson (2023) n'a rapporte aucun changement significatif. Inversement, Lee (2024) a identifie une diminution de 5% des taches collaboratives. Bien que les trois etudes aient employe des methodologies robustes, la taille d'echantillon plus importante de Smith (n=5 000) donne plus de poids a ses resultats. L'ecart peut etre attribue aux differences de secteur et de type de poste. Dans l'ensemble, les preuves suggerent que le teletravail beneficie aux taches individuelles mais peut entraver la collaboration."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Une synthese C1 ne resume pas juste les sources — elle les compare, les evalue et tire des conclusions originales."}
    ],
    quiz:[
      {q:"A 'synthesis' combines:",opts:["A) one source","B) multiple sources into a coherent analysis","C) no sources","D) only opinions"],rep:'B',expl:"Synthese = combinaison de plusieurs sources."},
      {q:"'Authority' in source evaluation refers to:",opts:["A) the publisher","B) the author's credentials","C) the length","D) the price"],rep:'B',expl:"Autorite = qualifications de l'auteur."},
      {q:"'Objectivity' means:",opts:["A) bias","B) lack of bias","C) opinion","D) emotion"],rep:'B',expl:"Objectivite = absence de biais."},
      {q:"'Conversely' signals:",opts:["A) agreement","B) contrast","C) addition","D) conclusion"],rep:'B',expl:"Conversely = inversement (contraste)."},
      {q:"'Robust methodology' means:",opts:["A) weak methods","B) strong and reliable methods","C) no methods","D) random methods"],rep:'B',expl:"Robuste = solide et fiable."},
      {q:"'Sample size' refers to:",opts:["A) the number of participants","B) the size of the paper","C) the length","D) the font"],rep:'A',expl:"Sample size = nombre de participants."},
      {q:"'Discrepancy' means:",opts:["A) agreement","B) inconsistency/difference","C) similarity","D) conclusion"],rep:'B',expl:"Discrepancy = incoherence/difference."},
      {q:"'Lends greater weight to' means:",opts:["A) makes lighter","B) makes more credible/important","C) ignores","D) reduces"],rep:'B',expl:"Donne plus de poids/credibilite."},
      {q:"'Overall' in a synthesis is used to:",opts:["A) start","B) conclude/summarize","C) add","D) question"],rep:'B',expl:"Overall = pour conclure/resumer."},
      {q:"A 'critical review' should:",opts:["A) only praise","B) evaluate strengths and weaknesses","C) only criticize","D) ignore the content"],rep:'B',expl:"Critique = evaluer forces et faiblesses."}
    ]
  },

  {
    id:'write_c1_m4',
    titre:'Writing — Lettres Formelles et Emails Professionnels',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Rediger des lettres formelles et des emails professionnels",
      "Utiliser le registre approprie pour chaque contexte",
      "Formuler des demandes, des plaintes et des remerciements"
    ],
    contenu:[
      {type:'intro',texte:"La communication professionnelle ecrite exige un registre formel, une structure claire et un ton approprie au contexte."},
      {type:'tableau',titre:'Formules de politesse formelles',headers:["Type","Ouverture","Fermeture"],rows:[
        ["Lettre formelle","Dear Sir/Madam,","Yours faithfully,"],
        ["Email formel (nom connu)","Dear Mr. Smith,","Yours sincerely,"],
        ["Email professionnel","Dear Dr. Johnson,","Best regards,"],
        ["Demande","I am writing to inquire about...","I would be grateful if you could..."],
        ["Plainte","I am writing to express my dissatisfaction with...","I trust this matter will be resolved promptly."],
        ["Remerciement","I would like to express my sincere gratitude for...","Thank you once again for your assistance."],
        ["Suivi","Further to our previous correspondence...","I look forward to your prompt response."]
      ]},
      {type:'regle',titre:'Registre formel dans les emails',texte:"• Utilisez des phrases completes (pas de fragments)\n• Evitez les abbreviations informelles (lol, btw, ASAP → as soon as possible)\n• Utilisez le passif pour les situations delicates (It has come to our attention that...)\n• Soyez concis mais complet\n• Relisez avant d'envoyer — les erreurs de grammaire nuisent a la credibilite"},
      {type:'exemples',titre:'Email formel de demande',items:[
        {en:"Dear Dr. Johnson,\n\nI am writing to inquire about the possibility of collaborating on the upcoming research project. Given your expertise in environmental policy, I believe your insights would be invaluable to our study.\n\nI would be grateful if you could spare some time for a brief meeting next week. Please let me know your availability.\n\nThank you in advance for your consideration.\n\nYours sincerely,\n[Name]",fr:"Cher Dr. Johnson,\n\nJe vous ecris pour m'enquerir de la possibilite de collaborer sur le projet de recherche a venir. Compte tenu de votre expertise en politique environnementale, je crois que vos idees seraient inestimables pour notre etude.\n\nJe vous serais reconnaissant de bien vouloir accorder un peu de temps pour une breve reunion la semaine prochaine. Veuillez me faire part de vos disponibilites.\n\nJe vous remercie par avance de votre consideration.\n\nCordialement,\n[Nom]"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans les emails formels, le ton est aussi important que le contenu. Soyez poli, direct et professionnel."}
    ],
    quiz:[
      {q:"'Dear Sir/Madam' is used when:",opts:["A) you know the name","B) you don't know the recipient's name","C) writing to a friend","D) writing casually"],rep:'B',expl:"Dear Sir/Madam = quand on ne connait pas le nom."},
      {q:"'Yours faithfully' is paired with:",opts:["A) Dear [Name]","B) Dear Sir/Madam","C) Hi","D) Hey"],rep:'B',expl:"Yours faithfully = avec Dear Sir/Madam."},
      {q:"'I am writing to inquire about' is:",opts:["A) informal","B) a formal request for information","C) a complaint","D) a greeting"],rep:'B',expl:"Demande formelle d'information."},
      {q:"'I would be grateful if you could' is:",opts:["A) a demand","B) a polite request","C) a complaint","D) a threat"],rep:'B',expl:"Demande polie."},
      {q:"'Further to our previous correspondence' means:",opts:["A) ignoring previous emails","B) following up on previous communication","C) starting fresh","D) ending communication"],rep:'B',expl:"Suivi de la communication precedente."},
      {q:"'I trust this matter will be resolved promptly' is:",opts:["A) a threat","B) a polite expectation","C) a question","D) a joke"],rep:'B',expl:"Attente polie de resolution."},
      {q:"'ASAP' in formal writing should be:",opts:["A) used freely","B) avoided (use 'as soon as possible')","C) required","D) capitalized"],rep:'B',expl:"Eviter les abbreviations informelles."},
      {q:"'It has come to our attention that' is:",opts:["A) informal","B) a formal way to raise an issue","C) a greeting","D) a conclusion"],rep:'B',expl:"Maniere formelle de soulever un probleme."},
      {q:"'Thank you in advance' is used:",opts:["A) at the beginning","B) before a request is fulfilled","C) after receiving","D) never"],rep:'B',expl:"Avant que la demande ne soit satisfaite."},
      {q:"'Best regards' is:",opts:["A) too formal","B) a standard professional closing","C) too casual","D) rude"],rep:'B',expl:"Fermeture professionnelle standard."}
    ]
  },

  {
    id:'write_c1_m5',
    titre:'Writing — Resumes et Abstracts Academiques',
    niveau:'C1',
    duree:30,
    objectifs:[
      "Rediger des resumes concis et precis",
      "Formuler des abstracts academiques structures",
      "Synthetiser des textes longs en quelques paragraphes"
    ],
    contenu:[
      {type:'intro',texte:"Les resumes et abstracts academiques exigent une capacite a condenser l'information essentielle tout en preservant le sens et la structure du texte original."},
      {type:'tableau',titre:'Structure d\'un abstract academique',headers:["Section","Contenu","Mots typiques"],rows:[
        ["Contexte","Pourquoi ce sujet ?","Recent developments in... have prompted..."],
        ["Objectif","Que cherche l'etude ?","This study aims to examine..."],
        ["Methode","Comment ?","Using a mixed-methods approach, we..."],
        ["Resultats","Qu'a-t-on trouve ?","The findings reveal that..."],
        ["Conclusion","Qu'est-ce que ca signifie ?","These results suggest that..."]
      ]},
      {type:'regle',titre:'Regles de resume C1',texte:"1. Ne depassez pas 10-15% de la longueur du texte original\n2. Utilisez vos propres mots (pas de copier-coller)\n3. Incluez les points cles : these, arguments, conclusions\n4. Omettez les exemples, les details mineurs et les repetitions\n5. Restez objectif — pas d'opinion personnelle"},
      {type:'exemples',titre:'Exemple d\'abstract',items:[
        {en:"Recent developments in artificial intelligence have prompted debates about its impact on employment. This study aims to examine the relationship between AI adoption and job displacement across five industries. Using a mixed-methods approach, we analyzed employment data from 2015-2024 and conducted interviews with 200 industry professionals. The findings reveal that while AI has displaced certain routine jobs, it has simultaneously created new roles in technology management and data analysis. These results suggest that the net impact of AI on employment is sector-dependent, and that reskilling programs are essential for workforce adaptation.",fr:"Les developpements recents en intelligence artificielle ont suscite des debats sur son impact sur l'emploi. Cette etude vise a examiner la relation entre l'adoption de l'IA et le deplacement d'emplois dans cinq secteurs. En utilisant une approche a methodes mixtes, nous avons analyse les donnees d'emploi de 2015 a 2024 et mene des entretiens avec 200 professionnels du secteur. Les resultats revelent que bien que l'IA ait deplace certains emplois routiniers, elle a simultanement cree de nouveaux roles dans la gestion technologique et l'analyse de donnees. Ces resultats suggerent que l'impact net de l'IA sur l'emploi depend du secteur et que les programmes de reconversion sont essentiels pour l'adaptation de la main-d'oeuvre."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Un bon abstract C1 est autonome — le lecteur doit comprendre l'essentiel sans lire le texte complet."}
    ],
    quiz:[
      {q:"An 'abstract' should be:",opts:["A) longer than the original","B) 10-15% of the original length","C) the same length","D) half the length"],rep:'B',expl:"Abstract = 10-15% de la longueur originale."},
      {q:"'This study aims to examine' introduces:",opts:["A) the context","B) the objective","C) the method","D) the results"],rep:'B',expl:"Introduit l'objectif."},
      {q:"'Mixed-methods approach' means:",opts:["A) one method","B) combining qualitative and quantitative methods","C) no method","D) random method"],rep:'B',expl:"Mixte = qualitatif + quantitatif."},
      {q:"'The findings reveal' introduces:",opts:["A) the context","B) the objective","C) the results","D) the conclusion"],rep:'C',expl:"Introduit les resultats."},
      {q:"'These results suggest' introduces:",opts:["A) the context","B) the method","C) the results","D) the conclusion/implication"],rep:'D',expl:"Introduit la conclusion/implication."},
      {q:"A summary should include:",opts:["A) all examples","B) key points only","C) personal opinions","D) every detail"],rep:'B',expl:"Resume = points cles uniquement."},
      {q:"A summary should be:",opts:["A) subjective","B) objective","C) emotional","D) biased"],rep:'B',expl:"Resume = objectif."},
      {q:"'Reskilling' means:",opts:["A) firing workers","B) training workers with new skills","C) hiring new workers","D) reducing wages"],rep:'B',expl:"Reskilling = formation avec nouvelles competences."},
      {q:"'Sector-dependent' means:",opts:["A) the same for all","B) varies by industry","C) not important","D) universal"],rep:'B',expl:"Depend du secteur/industrie."},
      {q:"An abstract should be:",opts:["A) vague","B) self-contained and clear","C) full of jargon","D) emotional"],rep:'B',expl:"Autonome et clair."}
    ]
  }
]

})()
