/* modules-agtm-b1.js — AGTM Academy B1 Modules v1.0
 * 19 modules complets B1 avec contenu riche et quiz (10 questions chacun)
 * Basé sur les PDFs AGTM : MonGuideBEPC, ObjectifBac, Listening/Speaking, Pronouns
 */
;(function () {
'use strict'

window._AGTM_B1_MODS = [
  // ── GRAMMAIRE B1 ──────────────────────────────────────────────────

  {
    id:'gram_b1_m3',
    titre:'Les Pronoms en Anglais — Partie 2',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Distinguer adjectifs possessifs et pronoms possessifs",
      "Utiliser les pronoms réfléchis correctement",
      "Maîtriser les pronoms relatifs who/which/that/whose",
      "Employer les pronoms interrogatifs et indéfinis"
    ],
    contenu:[
      {type:'intro',texte:"Cette partie couvre les pronoms avancés qui permettent d'exprimer la possession, l'autoréférence, les relations entre propositions et l'indétermination. Indispensables pour atteindre le niveau B1."},
      {type:'tableau',titre:'Pronoms Possessifs (Possessive Pronouns)',headers:['Adjectif possessif','Pronom possessif'],rows:[
        ['my','mine (le mien / la mienne)'],['your','yours (le tien / le vôtre)'],
        ['his','his (le sien — masc.)'],['her','hers (le sien — fém.)'],
        ['its','its (le sien — neutre)'],['our','ours (le nôtre)'],['their','theirs (le leur)']
      ]},
      {type:'regle',texte:"Le pronom possessif REMPLACE un groupe nominal. Il s'utilise SEUL, sans nom après lui. Ex : This is my book → This book is mine. / Is that her coat? No, it's hers."},
      {type:'tableau',titre:'Pronoms Réfléchis (Reflexive Pronouns)',headers:['Sujet','Réfléchi'],rows:[
        ['I','myself'],['You (sg)','yourself'],['He','himself'],['She','herself'],
        ['It','itself'],['We','ourselves'],['You (pl)','yourselves'],['They','themselves']
      ]},
      {type:'regle',texte:"Les pronoms réfléchis s'utilisent quand le sujet et le complément sont la même personne. Ex : She hurt herself. / He taught himself guitar. / We enjoyed ourselves at the party."},
      {type:'conseil',texte:"💡 Intensificateurs : les pronoms réfléchis peuvent aussi renforcer le sujet. Ex : I myself wrote the report (= moi-même). / The president himself attended the meeting."},
      {type:'tableau',titre:'Pronoms Relatifs (Relative Pronouns)',headers:['Pronom','Usage'],rows:[
        ['who','pour les personnes (sujet)'],['whom','pour les personnes (complément, formel)'],
        ['which','pour les choses et les animaux'],['that','pour les personnes et les choses (propositions restrictives)'],
        ['whose','possession (de qui / dont)']
      ]},
      {type:'exemples',liste:[
        "The teacher who taught me English was excellent.",
        "The book which I bought yesterday is fascinating.",
        "The man whose car was stolen called the police.",
        "That is the film that everyone is talking about."
      ]},
      {type:'tableau',titre:'Pronoms Interrogatifs (Interrogative Pronouns)',headers:['Pronom','Usage','Exemple'],rows:[
        ['Who','sujet, personnes','Who called you?'],['Whom','complément, personnes (formel)','Whom did you see?'],
        ['Which','choix limité','Which do you prefer?'],['What','choses, informations','What is your name?'],
        ['Whose','possession','Whose bag is this?']
      ]},
      {type:'tableau',titre:'Pronoms Indéfinis (Indefinite Pronouns)',headers:['Personnes','Choses','Lieux'],rows:[
        ['someone / somebody','something','somewhere'],['everyone / everybody','everything','everywhere'],
        ['no one / nobody','nothing','nowhere'],['anyone / anybody','anything','anywhere']
      ]},
      {type:'regle',texte:"Règle clé des indéfinis : someone/everyone/no one prennent un verbe au singulier. Ex : Everyone IS ready. Nobody HAS arrived. Something IS wrong."}
    ],
    quiz:[
      {q:"This is not your coat. It is ___. (belonging to her)",opts:["A) her","B) hers","C) herself","D) she"],rep:'B',expl:"Seul, sans nom après = pronom possessif. 'hers' = le sien (féminin)."},
      {q:"He cooked the meal ___. (without help from anyone)",opts:["A) him","B) his","C) himself","D) hisself"],rep:'C',expl:"Sujet = complément → pronom réfléchi. 'hisself' n'existe pas en anglais standard."},
      {q:"The woman ___ called is my aunt.",opts:["A) which","B) whose","C) who","D) whom"],rep:'C',expl:"Pour une personne (sujet de la relative) → who."},
      {q:"The car ___ he drives belongs to his father.",opts:["A) who","B) whom","C) whose","D) which"],rep:'D',expl:"Pour une chose → which (ou that). 'who' et 'whom' sont réservés aux personnes."},
      {q:"The student ___ notes I borrowed got an A.",opts:["A) who","B) which","C) whose","D) that"],rep:'C',expl:"Relation de possession → whose."},
      {q:"___ is calling at this hour?",opts:["A) What","B) Which","C) Whose","D) Who"],rep:'D',expl:"On demande l'identité d'une personne → Who."},
      {q:"She looked at ___ in the mirror.",opts:["A) her","B) hers","C) herself","D) she"],rep:'C',expl:"Sujet (she) = complément → pronom réfléchi herself."},
      {q:"___ has arrived yet. The hall is empty.",opts:["A) Someone","B) Anyone","C) Everyone","D) No one"],rep:'D',expl:"Phrase négative avec un sens de 'personne' → No one."},
      {q:"Is this bag yours or ___? (belonging to me)",opts:["A) my","B) me","C) mine","D) myself"],rep:'C',expl:"Pronom possessif utilisé seul (sans nom après) → mine."},
      {q:"___ do you prefer — the red one or the blue one?",opts:["A) What","B) Who","C) Which","D) Whose"],rep:'C',expl:"Choix entre deux options définies → Which (pas What)."}
    ]
  },

  {
    id:'gram_b1_m4',
    titre:'Les Conditionnels — Types 0, 1 et 2',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Maîtriser les conditionnels Type 0, 1 et 2",
      "Utiliser 'if' et 'unless' correctement",
      "Exprimer des hypothèses réelles et imaginaires"
    ],
    contenu:[
      {type:'intro',texte:"Les conditionnels expriment des hypothèses et leurs conséquences. Au niveau B1, vous devez maîtriser les trois premiers types."},
      {type:'tableau',titre:'Les 3 Types de Conditionnels',headers:["Type","If-clause","Main clause","Usage","Exemple"],rows:[
        ["Type 0","If + présent simple","Présent simple","Vérité générale","If you heat water to 100°C, it boils."],
        ["Type 1","If + présent simple","will + base","Situation réelle, probable","If it rains, we will stay home."],
        ["Type 2","If + past simple","would + base","Situation imaginaire","If I won the lottery, I would travel."]
      ]},
      {type:'regle',titre:'Unless = If... not',texte:"Unless signifie 'sauf si' ou 'si... pas'.\n• Unless you study, you will fail. = If you don't study, you will fail.\n• I won't go unless you come with me. = I won't go if you don't come with me."},
      {type:'regle',titre:'Règles importantes',texte:"• JAMAIS de 'will' dans la clause 'if' : If it will rain ✗ → If it rains ✓\n• Type 2 : If I were (pas 'was') dans le registre formel : If I were you...\n• La virgule sépare les deux clauses SI 'if' vient en premier : If it rains, we will stay."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Type 0: If you mix red and blue, you get purple.",fr:"Vérité générale → présent + présent."},
        {en:"Type 1: If she studies hard, she will pass the exam.",fr:"Situation réelle → présent + will."},
        {en:"Type 2: If I had more time, I would learn Japanese.",fr:"Situation imaginaire → past simple + would."},
        {en:"Unless you hurry, you'll miss the bus.",fr:"Sauf si tu te dépêches, tu rateras le bus."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Type 0 = faits scientifiques. Type 1 = plans futurs réels. Type 2 = rêves et situations imaginaires."}
    ],
    quiz:[
      {q:"If you heat ice, it ___.",opts:["A) melts","B) will melt","C) would melt","D) melted"],rep:'A',expl:"Type 0 (vérité générale) → présent simple."},
      {q:"If it rains tomorrow, we ___ at home.",opts:["A) stay","B) will stay","C) would stay","D) stayed"],rep:'B',expl:"Type 1 (situation réelle) → will + base."},
      {q:"If I ___ rich, I would travel the world.",opts:["A) am","B) was","C) were","D) be"],rep:'C',expl:"Type 2 → past simple. 'Were' pour tous les sujets (formel)."},
      {q:"___ you study, you will fail.",opts:["A) If","B) Unless","C) When","D) Because"],rep:'B',expl:"Unless = si... pas (sauf si)."},
      {q:"If she ___ harder, she would get better grades.",opts:["A) studies","B) studied","C) will study","D) study"],rep:'B',expl:"Type 2 → past simple dans la clause 'if'."},
      {q:"If I ___ you, I would apologise.",opts:["A) am","B) was","C) were","D) be"],rep:'C',expl:"If I were you = conseil (Type 2)."},
      {q:"We will go to the beach if the weather ___ good.",opts:["A) is","B) will be","C) would be","D) was"],rep:'A',expl:"Jamais de 'will' dans la clause 'if' → présent simple."},
      {q:"If they ___ more money, they would buy a house.",opts:["A) have","B) had","C) will have","D) has"],rep:'B',expl:"Type 2 → past simple (had)."},
      {q:"Unless he ___, he won't pass.",opts:["A) studies","B) will study","C) would study","D) studied"],rep:'A',expl:"Unless + présent simple (Type 1)."},
      {q:"If you mix yellow and blue, you ___ green.",opts:["A) get","B) will get","C) would get","D) got"],rep:'A',expl:"Type 0 (vérité) → présent simple."}
    ]
  },

  {
    id:'gram_b1_m5',
    titre:'Le Discours Rapporté — Reported Speech',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Rapporter des paroles et pensées en anglais",
      "Appliquer la concordance des temps (backshift)",
      "Transformer questions et ordres au discours indirect"
    ],
    contenu:[
      {type:'intro',texte:"Le discours rapporté (Reported Speech) permet de retranscrire ce que quelqu'un a dit sans le citer directement."},
      {type:'tableau',titre:'Concordance des Temps',headers:["Direct Speech","Reported Speech","Exemple"],rows:[
        ["Present Simple","Past Simple","'I work here.' → He said he worked there."],
        ["Present Continuous","Past Continuous","'I am studying.' → She said she was studying."],
        ["Past Simple","Past Perfect","'I went.' → He said he had gone."],
        ["Present Perfect","Past Perfect","'I have finished.' → She said she had finished."],
        ["Will","Would","'I will call.' → He said he would call."],
        ["Can","Could","'I can help.' → She said she could help."],
        ["Must","Had to","'You must leave.' → He said I had to leave."]
      ]},
      {type:'regle',titre:'Questions Indirectes',texte:"• Questions Yes/No → if/whether : 'Are you ready?' → He asked if I was ready.\n• Questions Wh- → wh + ordre normal : 'Where do you live?' → She asked where I lived.\n• IMPORTANT : pas d'inversion sujet-verbe dans la question indirecte."},
      {type:'regle',titre:'Ordres et Demandes (Imperatives)',texte:"• Ordres → told + to-infinitif : 'Open the window!' → He told me to open the window.\n• Ordres négatifs → told + not + to-infinitif : 'Don't be late!' → She told me not to be late."},
      {type:'tableau',titre:'Changements de temps et pronoms',headers:["Direct","Indirect"],rows:[
        ["now","then / at that moment"],["today","that day"],["yesterday","the day before"],
        ["tomorrow","the next day"],["last week","the week before"],["here","there"],["this","that"]
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"'I am tired.' She said that she was tired.",fr:"'Je suis fatiguée.' Elle a dit qu'elle était fatiguée."},
        {en:"'Where do you live?' He asked me where I lived.",fr:"'Où habites-tu ?' Il m'a demandé où j'habitais."},
        {en:"'Don't touch that!' She told me not to touch that.",fr:"'Ne touche pas ça !' Elle m'a dit de ne pas toucher ça."},
        {en:"'I will call you tomorrow.' He said he would call me the next day.",fr:"'Je te téléphonerai demain.' Il a dit qu'il me téléphonerait le lendemain."}
      ]},
      {type:'conseil',texte:"Attention : SAY → pas de complément direct (He said that...). TELL → toujours + personne (He told me that...)."}
    ],
    quiz:[
      {q:"'I am happy.' She said she ___ happy.",opts:["A) is","B) was","C) were","D) has been"],rep:'B',expl:"Present Simple → Past Simple (is → was)."},
      {q:"'I have finished.' He said he ___ finished.",opts:["A) has","B) had","C) have","D) was"],rep:'B',expl:"Present Perfect → Past Perfect (have → had)."},
      {q:"'Where do you live?' She asked where I ___.",opts:["A) do live","B) lived","C) living","D) live"],rep:'B',expl:"Question indirecte → ordre normal + backshift : lived."},
      {q:"'Open the door!' He told me ___ the door.",opts:["A) open","B) to open","C) opening","D) opened"],rep:'B',expl:"Ordre → told + to-infinitif."},
      {q:"'Don't be late!' She told me ___ late.",opts:["A) not to be","B) to not be","C) don't be","D) not be"],rep:'A',expl:"Ordre négatif → told + not + to-infinitif."},
      {q:"'I will call you.' He said he ___ call me.",opts:["A) will","B) would","C) can","D) should"],rep:'B',expl:"Will → Would en discours rapporté."},
      {q:"'I can swim.' She said she ___ swim.",opts:["A) can","B) could","C) can't","D) will"],rep:'B',expl:"Can → Could en discours rapporté."},
      {q:"'I saw the movie yesterday.' He said he had seen it ___.",opts:["A) yesterday","B) the day before","C) tomorrow","D) today"],rep:'B',expl:"Yesterday → the day before."},
      {q:"He said ___ he was tired.",opts:["A) to me","B) me","C) that","D) for me"],rep:'C',expl:"SAY + that (ou rien). TELL + personne."},
      {q:"'Are you ready?' He asked ___ I was ready.",opts:["A) that","B) if","C) what","D) which"],rep:'B',expl:"Question Yes/No → if/whether."}
    ]
  },

  {
    id:'gram_b1_m6',
    titre:'Used to / Would / Be used to',
    niveau:'B1',
    duree:30,
    objectifs:[
      "Utiliser 'used to' pour les habitudes passées",
      "Distinguer 'used to' et 'would'",
      "Maîtriser 'be used to' et 'get used to'"
    ],
    contenu:[
      {type:'intro',texte:"Ces structures expriment les habitudes passées et l'adaptation. Elles sont essentielles pour raconter son passé et décrire des changements."},
      {type:'tableau',titre:'Comparaison des trois structures',headers:["Structure","Sens","Emploi","Exemple"],rows:[
        ["used to + base","habitude passée révolue","états ET actions","I used to live in Bouaké."],
        ["would + base","action répétée passée","actions seulement","He would walk to school."],
        ["be used to + -ing","être habitué à (maintenant)","tout temps","She is used to working late."],
        ["get used to + -ing","s'habituer à (processus)","tout temps","He got used to the heat."]
      ]},
      {type:'regle',titre:'Différence clé : used to vs would',texte:"• Used to → états ET actions : I used to be shy. (état) / I used to play football. (action)\n• Would → actions SEULEMENT : He would play football. ✓ / He would be shy. ✗\n• Would nécessite un contexte temporel clair."},
      {type:'regle',titre:'Be used to vs Get used to',texte:"• Be used to + -ing = être habitué à (état) : I am used to waking up early.\n• Get used to + -ing = s'habituer à (processus) : I got used to the noise.\n• ATTENTION : 'used to' (habitude passée) ≠ 'be used to' (être habitué). Le premier est suivi du verbe BASE, le second de -ING."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"I used to play football every Saturday.",fr:"Je jouais au football chaque samedi (avant)."},
        {en:"We would visit our grandparents on Sundays.",fr:"Nous rendions visite à nos grands-parents le dimanche."},
        {en:"She is used to speaking in public.",fr:"Elle est habituée à parler en public."},
        {en:"It took time, but I got used to driving on the right.",fr:"Ça a pris du temps, mais je me suis habitué à conduire à droite."}
      ]},
      {type:'conseil',texte:"Négation de 'used to' : I didn't use to (pas 'used'). Question : Did you use to...? (pas 'used')."}
    ],
    quiz:[
      {q:"I ___ play football every day when I was young.",opts:["A) use to","B) used to","C) was used to","D) got used to"],rep:'B',expl:"Habitude passée → used to + base."},
      {q:"She ___ living alone now. It's not a problem.",opts:["A) used to","B) would","C) is used to","D) got used to"],rep:'C',expl:"Être habitué maintenant → is used to + -ing."},
      {q:"He ___ walk to school every morning. (past habit)",opts:["A) used to","B) would","C) is used to","D) was used to"],rep:'B',expl:"Action répétée passée → would."},
      {q:"I didn't ___ like vegetables.",opts:["A) used to","B) use to","C) using to","D) uses to"],rep:'B',expl:"Négation : didn't use to (pas 'used')."},
      {q:"She ___ the noise after a few weeks.",opts:["A) used to","B) would","C) got used to","D) is used to"],rep:'C',expl:"Processus d'adaptation → got used to."},
      {q:"I ___ be shy, but now I'm outgoing.",opts:["A) would","B) used to","C) am used to","D) got used to"],rep:'B',expl:"État passé → used to (would ne s'utilise pas avec les états)."},
      {q:"He is used to ___ early.",opts:["A) wake up","B) waking up","C) woke up","D) wakes up"],rep:'B',expl:"Be used to → toujours + -ing."},
      {q:"___ you use to live in Abidjan?",opts:["A) Did","B) Do","C) Were","D) Are"],rep:'A',expl:"Question : Did + sujet + use to...?"},
      {q:"She would ___ to the market every Sunday.",opts:["A) go","B) going","C) went","D) goes"],rep:'A',expl:"Would + verbe BASE."},
      {q:"I'm not used to ___ in this climate.",opts:["A) live","B) living","C) lived","D) lives"],rep:'B',expl:"Be used to → -ing : living."}
    ]
  },

  {
    id:'gram_b1_m7',
    titre:'Le Passif — Tous les Temps',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Former la voix passive à tous les temps",
      "Transformer des phrases actives en passives",
      "Comprendre quand utiliser la voix passive"
    ],
    contenu:[
      {type:'intro',texte:"La voix passive met en avant le RÉSULTAT de l'action plutôt que l'auteur. Elle est très utilisée en anglais formel, scientifique et journalistique."},
      {type:'tableau',titre:'Voix passive aux temps principaux',headers:["Temps","Actif","Passif","Formule"],rows:[
        ["Présent simple","They make cocoa.","Cocoa is made.","am/is/are + PP"],
        ["Passé simple","She wrote the report.","The report was written.","was/were + PP"],
        ["Futur (will)","They will build a bridge.","A bridge will be built.","will be + PP"],
        ["Present Perfect","He has signed it.","It has been signed.","has/have been + PP"],
        ["Présent continu","They are filming it.","It is being filmed.","am/is/are being + PP"],
        ["Modal","You must complete it.","It must be completed.","modal + be + PP"]
      ]},
      {type:'regle',titre:"Quand omettre 'by + agent' ?",texte:"On omet l'agent quand :\n1. Il est inconnu → My bike was stolen.\n2. Il est évident → He was arrested. (par la police)\n3. Il n'est pas important → The report was submitted on time."},
      {type:'regle',titre:'Transformation active → passive',texte:"1. L'objet de la phrase active devient le SUJET de la passive.\n2. Le verbe BE se conjugue au même temps que le verbe actif.\n3. Le verbe principal devient participe passé (PP).\n4. Le sujet actif devient 'by + agent' (optionnel)."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"English is spoken all over the world.",fr:"L'anglais est parlé dans le monde entier."},
        {en:"The letter was written by the director.",fr:"La lettre a été écrite par le directeur."},
        {en:"The contract has been signed.",fr:"Le contrat a été signé."},
        {en:"Cocoa is exported from Côte d'Ivoire.",fr:"Le cacao est exporté de Côte d'Ivoire."}
      ]},
      {type:'conseil',texte:"La voix passive est fréquente au BAC et TOEIC — maîtrisez les transformations des 6 temps principaux."}
    ],
    quiz:[
      {q:"English ___ all over the world. (speak)",opts:["A) speaks","B) is spoken","C) is speaking","D) was spoke"],rep:'B',expl:"Présent simple passif : is + spoken."},
      {q:"The Eiffel Tower ___ in 1889. (build)",opts:["A) was built","B) is built","C) built","D) has been build"],rep:'A',expl:"Passé simple passif : was + built."},
      {q:"A new hospital ___ next year. (open)",opts:["A) is opened","B) opened","C) will be opened","D) has been opened"],rep:'C',expl:"Futur passif : will be + opened."},
      {q:"The report ___ already ___. (send)",opts:["A) has / been sent","B) was / sent","C) is / sending","D) has / sent"],rep:'A',expl:"Present Perfect passif : has been + sent."},
      {q:"The room ___ being cleaned right now.",opts:["A) is","B) was","C) has","D) will"],rep:'A',expl:"Présent continu passif : is being + cleaned."},
      {q:"The form ___ be completed by Friday. (must)",opts:["A) must","B) must be","C) must been","D) must being"],rep:'B',expl:"Modal passif : must be + completed."},
      {q:"My bike ___. I can't find it. (steal)",opts:["A) stole","B) was stolen","C) is stolen","D) has been stolen"],rep:'D',expl:"Résultat présent → Present Perfect passif."},
      {q:"They make cars in Germany. → Cars ___ in Germany.",opts:["A) are made","B) is made","C) were made","D) make"],rep:'A',expl:"Présent passif pluriel : are + made."},
      {q:"The cake ___ by my mother. (bake)",opts:["A) baked","B) was baked","C) is baking","D) was baking"],rep:'B',expl:"Passé passif : was + baked."},
      {q:"The decision ___ taken without consulting us.",opts:["A) is","B) was","C) were","D) be"],rep:'B',expl:"Passé passif singulier : was + taken."}
    ]
  },

  // ── VOCABULAIRE B1 ────────────────────────────────────────────────

  {
    id:'voc_b1_m1',
    titre:"L'Environnement et l'Écologie",
    niveau:'B1',
    duree:25,
    objectifs:[
      "Maîtriser le vocabulaire environnemental clé",
      "Discuter des problèmes écologiques et solutions",
      "Utiliser ce vocabulaire dans l'expression écrite"
    ],
    contenu:[
      {type:'intro',texte:"L'environnement est un thème central dans les examens BEPC, BAC et TOEIC. Ce module vous donne le vocabulaire indispensable."},
      {type:'lexique',titre:'Problèmes Environnementaux',items:[
        {en:"climate change",fr:"changement climatique"},{en:"global warming",fr:"réchauffement climatique"},
        {en:"greenhouse effect",fr:"effet de serre"},{en:"carbon footprint",fr:"empreinte carbone"},
        {en:"pollution (air/water/soil)",fr:"pollution (air/eau/sol)"},{en:"deforestation",fr:"déforestation"},
        {en:"drought",fr:"sécheresse"},{en:"flood",fr:"inondation"},
        {en:"endangered species",fr:"espèces en voie de disparition"},{en:"toxic waste",fr:"déchets toxiques"}
      ]},
      {type:'lexique',titre:'Solutions et Actions',items:[
        {en:"renewable energy",fr:"énergie renouvelable"},{en:"solar / wind power",fr:"énergie solaire / éolienne"},
        {en:"recycling",fr:"recyclage"},{en:"sustainable development",fr:"développement durable"},
        {en:"biodiversity",fr:"biodiversité"},{en:"reforestation",fr:"reboisement"},
        {en:"eco-friendly",fr:"respectueux de l'environnement"},{en:"carbon-neutral",fr:"neutre en carbone"}
      ]},
      {type:'collocations',titre:'Collocations essentielles',items:[
        "tackle climate change (lutter contre le changement climatique)",
        "reduce carbon emissions (réduire les émissions de carbone)",
        "protect the environment (protéger l'environnement)",
        "raise awareness (sensibiliser)",
        "take action against (agir contre)",
        "switch to renewable energy (passer à l'énergie renouvelable)"
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Côte d'Ivoire faces serious deforestation due to cocoa farming.",fr:"La CI fait face à une grave déforestation due à la culture du cacao."},
        {en:"We need sustainable solutions to combat climate change.",fr:"Nous avons besoin de solutions durables pour lutter contre le changement climatique."},
        {en:"Renewable energy sources like solar and wind are the future.",fr:"Les sources d'énergie renouvelables comme le solaire et l'éolien sont l'avenir."},
        {en:"Every citizen must work to reduce their carbon footprint.",fr:"Chaque citoyen doit travailler à réduire son empreinte carbone."}
      ]},
      {type:'conseil',texte:"Vocabulaire clé pour essais BAC/C1 : fossil fuels, greenhouse effect, carbon dioxide (CO2), ozone layer, habitat loss, endangered species."}
    ],
    quiz:[
      {q:"The gradual increase in Earth's temperature is called:",opts:["A) climate change","B) global warming","C) greenhouse effect","D) deforestation"],rep:'B',expl:"L'augmentation graduelle de la température = global warming."},
      {q:"Cutting down forests on a large scale is:",opts:["A) recycling","B) deforestation","C) pollution","D) reforestation"],rep:'B',expl:"Déforestation = deforestation."},
      {q:"'Renewable energy' includes:",opts:["A) coal and oil","B) solar and wind","C) nuclear","D) gas"],rep:'B',expl:"Énergie renouvelable = solaire et éolien."},
      {q:"'Carbon footprint' means:",opts:["A) trace de carbone","B) empreinte carbone","C) pollution de l'air","D) effet de serre"],rep:'B',expl:"Carbon footprint = empreinte carbone."},
      {q:"To 'tackle climate change' means:",opts:["A) ignore it","B) fight against it","C) cause it","D) study it"],rep:'B',expl:"Tackle = lutter contre / affronter."},
      {q:"'Endangered species' are:",opts:["A) common animals","B) animals at risk of extinction","C) domestic animals","D) extinct animals"],rep:'B',expl:"Endangered = en danger (d'extinction)."},
      {q:"'Sustainable development' means:",opts:["A) développement rapide","B) développement durable","C) développement industriel","D) développement urbain"],rep:'B',expl:"Sustainable = durable."},
      {q:"A 'drought' is:",opts:["A) inondation","B) sécheresse","C) tempête","D) tremblement de terre"],rep:'B',expl:"Drought = sécheresse."},
      {q:"'Eco-friendly' products are:",opts:["A) harmful to nature","B) good for the environment","C) expensive only","D) made of plastic"],rep:'B',expl:"Eco-friendly = respectueux de l'environnement."},
      {q:"'Raise awareness' means:",opts:["A) baisser la conscience","B) sensibiliser","C) ignorer","D) détruire"],rep:'B',expl:"Raise awareness = sensibiliser."}
    ]
  },

  {
    id:'voc_b1_m2',
    titre:'La Technologie et le Monde Numérique',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Utiliser le vocabulaire informatique et numérique",
      "Discuter des avantages et inconvénients de la technologie",
      "Exprimer des opinions sur l'impact du numérique"
    ],
    contenu:[
      {type:'intro',texte:"Le monde numérique fait partie de notre vie quotidienne. Ce module couvre le vocabulaire essentiel de la technologie et d'internet."},
      {type:'lexique',titre:'Vocabulaire Numérique Essentiel',items:[
        {en:"artificial intelligence (AI)",fr:"intelligence artificielle (IA)"},{en:"social media",fr:"réseaux sociaux"},
        {en:"cyberbullying",fr:"cyberharcèlement"},{en:"data privacy",fr:"confidentialité des données"},
        {en:"online learning / e-learning",fr:"apprentissage en ligne"},{en:"smartphone / device",fr:"smartphone / appareil"},
        {en:"digital divide",fr:"fracture numérique"},{en:"cybersecurity",fr:"cybersécurité"},
        {en:"algorithm",fr:"algorithme"},{en:"cloud storage",fr:"stockage en nuage"}
      ]},
      {type:'collocations',titre:"Expressions utiles pour l'expression écrite",items:[
        "access the internet (accéder à internet)",
        "upload / download a file (téléverser / télécharger un fichier)",
        "protect personal data (protéger les données personnelles)",
        "spread (fake) news (diffuser des (fausses) informations)",
        "be addicted to social media (être accro aux réseaux sociaux)",
        "bridge the digital divide (combler la fracture numérique)"
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Mobile internet usage in Africa is growing rapidly.",fr:"L'utilisation d'internet mobile en Afrique croît rapidement."},
        {en:"Young people in Abidjan are very active on social media.",fr:"Les jeunes à Abidjan sont très actifs sur les réseaux sociaux."},
        {en:"Artificial intelligence is changing how we learn English.",fr:"L'IA change notre façon d'apprendre l'anglais."},
        {en:"Always use a strong password to protect your accounts.",fr:"Utilisez toujours un mot de passe fort pour protéger vos comptes."}
      ]},
      {type:'conseil',texte:"Verbes clés du numérique : download, upload, stream, browse, scroll, search, share, post, like, follow, block, log in/out, sign up, hack."}
    ],
    quiz:[
      {q:"AI stands for:",opts:["A) Automated Interface","B) Artificial Intelligence","C) Advanced Internet","D) Applied Informatics"],rep:'B',expl:"AI = Artificial Intelligence."},
      {q:"Using technology to harass someone online is:",opts:["A) hacking","B) spamming","C) cyberbullying","D) phishing"],rep:'C',expl:"Harcèlement en ligne = cyberbullying."},
      {q:"The gap between those with and without internet access is the:",opts:["A) tech gap","B) digital divide","C) internet barrier","D) access problem"],rep:'B',expl:"La fracture numérique = the digital divide."},
      {q:"To put a file on the internet/cloud is to ___ it.",opts:["A) download","B) upload","C) stream","D) install"],rep:'B',expl:"Mettre en ligne = upload."},
      {q:"'Data privacy' means:",opts:["A) vitesse des données","B) confidentialité des données","C) stockage cloud","D) algorithme"],rep:'B',expl:"Data privacy = confidentialité des données."},
      {q:"'Cybersecurity' protects:",opts:["A) physical buildings","B) computer systems and data","C) social media accounts only","D) smartphones only"],rep:'B',expl:"Cybersécurité = protection des systèmes informatiques."},
      {q:"To 'scroll' means:",opts:["A) faire défiler","B) télécharger","C) partager","D) bloquer"],rep:'A',expl:"Scroll = faire défiler (l'écran)."},
      {q:"'Cloud storage' means:",opts:["A) stockage physique","B) stockage en nuage (en ligne)","C) stockage USB","D) stockage papier"],rep:'B',expl:"Cloud storage = stockage en ligne."},
      {q:"'Fake news' refers to:",opts:["A) real news","B) false information spread online","C) scientific articles","D) government reports"],rep:'B',expl:"Fake news = fausses informations."},
      {q:"'E-learning' means:",opts:["A) apprentissage en ligne","B) apprentissage traditionnel","C) apprentissage rapide","D) apprentissage facile"],rep:'A',expl:"E-learning = apprentissage en ligne."}
    ]
  },

  {
    id:'voc_b1_m3',
    titre:'Les Émotions et les Sentiments',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Exprimer une gamme variée d'émotions en anglais",
      "Distinguer les adjectifs en -ed et -ing",
      "Utiliser les collocations émotionnelles"
    ],
    contenu:[
      {type:'intro',texte:"Exprimer ses émotions avec précision est une compétence clé du niveau B1. Ce module vous donne le vocabulaire pour décrire ce que vous ressentez."},
      {type:'tableau',titre:'Émotions par intensité',headers:["Émotion","Faible","Moyen","Fort"],rows:[
        ["Bonheur","content","happy","elated / thrilled"],
        ["Tristesse","sad","upset","devastated"],
        ["Colère","annoyed","angry","furious / livid"],
        ["Peur","nervous","scared","terrified"],
        ["Surprise","surprised","astonished","shocked"],
        ["Fierté","pleased","proud","overjoyed"]
      ]},
      {type:'regle',titre:'-ed vs -ing — Règle essentielle',texte:"• Adjectifs en -ED = ce que VOUS ressentez : I am bored. (je m'ennuie)\n• Adjectifs en -ING = ce qui CAUSE ce sentiment : The class is boring. (le cours est ennuyeux)\n• I am interested in English. (je suis intéressé) / English is interesting. (l'anglais est intéressant)"},
      {type:'tableau',titre:'Collocations émotionnelles',headers:["Émotion","Préposition","Exemple"],rows:[
        ["proud","of","I'm proud of you."],
        ["afraid / scared","of","She's scared of spiders."],
        ["interested","in","He's interested in science."],
        ["worried","about","I'm worried about the exam."],
        ["excited","about","We're excited about the trip."],
        ["angry","with/about","She's angry with him."],
        ["ashamed","of","He's ashamed of his behavior."],
        ["jealous","of","She's jealous of her sister."]
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"She felt proud when her son graduated from university.",fr:"Elle se sentait fière quand son fils a obtenu son diplôme."},
        {en:"I was so excited before the final exam results!",fr:"J'étais tellement excité avant les résultats de l'examen final !"},
        {en:"He was disappointed when he didn't get the scholarship.",fr:"Il était déçu quand il n'a pas obtenu la bourse."},
        {en:"She was relieved to hear that everyone was safe.",fr:"Elle était soulagée d'apprendre que tout le monde était sauf."}
      ]},
      {type:'conseil',texte:"Ne confondez jamais boring (ennuyeux — la chose) et bored (qui s'ennuie — la personne). I am boring ✗ (je suis ennuyeux) → I am bored ✓ (je m'ennuie)."}
    ],
    quiz:[
      {q:"I am very ___. This movie is so boring.",opts:["A) boring","B) bored","C) bore","D) bores"],rep:'B',expl:"La personne ressent → -ed : bored."},
      {q:"The movie is very ___. I'm falling asleep.",opts:["A) bored","B) boring","C) bore","D) bores"],rep:'B',expl:"La chose cause l'ennui → -ing : boring."},
      {q:"She is proud ___ her daughter.",opts:["A) for","B) about","C) of","D) with"],rep:'C',expl:"Proud OF."},
      {q:"He is worried ___ the exam.",opts:["A) of","B) for","C) about","D) with"],rep:'C',expl:"Worried ABOUT."},
      {q:"I am ___ in learning English.",opts:["A) interesting","B) interested","C) interest","D) interests"],rep:'B',expl:"La personne est intéressée → interested."},
      {q:"The news was ___. Everyone was shocked.",opts:["A) shocking","B) shocked","C) shock","D) shocks"],rep:'A',expl:"La nouvelle cause le choc → shocking."},
      {q:"She is angry ___ her brother.",opts:["A) about","B) for","C) with","D) of"],rep:'C',expl:"Angry WITH someone."},
      {q:"I'm ___ about the trip next week!",opts:["A) excited","B) exciting","C) excite","D) excites"],rep:'A',expl:"La personne ressent → excited."},
      {q:"He felt ___ when he lost his wallet.",opts:["A) upset","B) upsetting","C) upsets","D) upsetted"],rep:'A',expl:"Upset = bouleversé/triste."},
      {q:"She was ___ to hear she passed the exam.",opts:["A) relieved","B) relieving","C) relieve","D) relieves"],rep:'A',expl:"Relieved = soulagé."}
    ]
  },

  {
    id:'voc_b1_m4',
    titre:'La Santé et le Bien-être Avancé',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Utiliser le vocabulaire avancé de la santé",
      "Discuter de santé mentale et de bien-être",
      "Comprendre les termes médicaux courants"
    ],
    contenu:[
      {type:'intro',texte:"La santé est un thème important dans les examens et la vie quotidienne. Ce module couvre le vocabulaire avancé de la santé physique et mentale."},
      {type:'lexique',titre:'Santé et bien-être',items:[
        {en:"well-being",fr:"bien-être"},{en:"mental health",fr:"santé mentale"},
        {en:"stress",fr:"stress"},{en:"anxiety",fr:"anxiété"},
        {en:"depression",fr:"dépression"},{en:"lifestyle",fr:"mode de vie"},
        {en:"diet",fr:"alimentation / régime"},{en:"exercise",fr:"exercice"},
        {en:"prevention",fr:"prévention"},{en:"vaccination",fr:"vaccination"},
        {en:"surgeon",fr:"chirurgien(ne)"},{en:"prescription",fr:"ordonnance"}
      ]},
      {type:'collocations',titre:'Collocations essentielles',items:[
        "maintain a healthy lifestyle (maintenir un mode de vie sain)",
        "suffer from stress/anxiety (souffrir de stress/anxiété)",
        "seek medical advice (chercher un avis médical)",
        "follow a balanced diet (suivre une alimentation équilibrée)",
        "raise awareness about mental health (sensibiliser à la santé mentale)",
        "take regular exercise (faire de l'exercice régulièrement)"
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"Regular exercise and a balanced diet are essential for good health.",fr:"L'exercice régulier et une alimentation équilibrée sont essentiels pour une bonne santé."},
        {en:"Many students suffer from stress during exam periods.",fr:"Beaucoup d'étudiants souffrent de stress pendant les périodes d'examens."},
        {en:"Mental health is just as important as physical health.",fr:"La santé mentale est aussi importante que la santé physique."},
        {en:"The doctor prescribed medicine for her anxiety.",fr:"Le médecin a prescrit des médicaments pour son anxiété."}
      ]},
      {type:'conseil',texte:"Au BAC, le thème de la santé est fréquent. Apprenez les collocations : suffer from, recover from, prevent disease, promote well-being."}
    ],
    quiz:[
      {q:"'Well-being' means:",opts:["A) mal-être","B) bien-être","C) maladie","D) stress"],rep:'B',expl:"Well-being = bien-être."},
      {q:"She ___ from anxiety during exams.",opts:["A) suffers","B) recovers","C) prevents","D) promotes"],rep:'A',expl:"Suffer from = souffrir de."},
      {q:"'Prescription' in French is:",opts:["A) description","B) ordonnance","C) subscription","D) inscription"],rep:'B',expl:"Prescription = ordonnance."},
      {q:"A 'balanced diet' includes:",opts:["A) only meat","B) only vegetables","C) a variety of foods","D) no food"],rep:'C',expl:"Alimentation équilibrée = variété d'aliments."},
      {q:"'Mental health' refers to:",opts:["A) physical fitness","B) emotional and psychological well-being","C) financial status","D) social status"],rep:'B',expl:"Santé mentale = bien-être émotionnel et psychologique."},
      {q:"To 'recover from' an illness means:",opts:["A) to get sick","B) to get better","C) to prevent","D) to diagnose"],rep:'B',expl:"Recover from = se remettre de / guérir."},
      {q:"'Surgeon' is a doctor who:",opts:["A) prescribes medicine","B) performs operations","C) diagnoses diseases","D) treats teeth"],rep:'B',expl:"Surgeon = chirurgien (fait des opérations)."},
      {q:"'Prevention' is better than:",opts:["A) exercise","B) diet","C) cure","D) stress"],rep:'C',expl:"La prévention vaut mieux que le traitement (cure)."},
      {q:"'Lifestyle' means:",opts:["A) mode de vie","B) style de vie","C) type de vie","D) qualité de vie"],rep:'A',expl:"Lifestyle = mode de vie."},
      {q:"To 'raise awareness' about health means:",opts:["A) to ignore health issues","B) to make people aware","C) to treat diseases","D) to prescribe medicine"],rep:'B',expl:"Raise awareness = sensibiliser."}
    ]
  },

  {
    id:'voc_b1_m5',
    titre:"L'Éducation et la Formation",
    niveau:'B1',
    duree:25,
    objectifs:[
      "Maîtriser le vocabulaire du système éducatif",
      "Parler des études et de la formation",
      "Utiliser les termes académiques courants"
    ],
    contenu:[
      {type:'intro',texte:"L'éducation est un thème central dans les examens et les conversations. Ce module couvre le vocabulaire du système éducatif et de la formation."},
      {type:'lexique',titre:'Le système éducatif',items:[
        {en:"primary school",fr:"école primaire"},{en:"secondary school",fr:"école secondaire"},
        {en:"university",fr:"université"},{en:"college",fr:"université / collège"},
        {en:"degree",fr:"diplôme / licence"},{en:"master's degree",fr:"master"},
        {en:"PhD / doctorate",fr:"doctorat"},{en:"scholarship",fr:"bourse"},
        {en:"tuition fees",fr:"frais de scolarité"},{en:"curriculum",fr:"programme scolaire"},
        {en:"semester / term",fr:"semestre / trimestre"},{en:"graduation",fr:"remise de diplômes"}
      ]},
      {type:'lexique',titre:'Verbes académiques',items:[
        {en:"enroll / register",fr:"s'inscrire"},{en:"attend classes",fr:"assister aux cours"},
        {en:"study for an exam",fr:"réviser pour un examen"},{en:"pass / fail an exam",fr:"réussir / rater un examen"},
        {en:"graduate",fr:"obtenir son diplôme"},{en:"major in",fr:"se spécialiser en"},
        {en:"research",fr:"rechercher / faire de la recherche"},{en:"write a thesis",fr:"rédiger une thèse"}
      ]},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"She enrolled at the University of Abidjan to study medicine.",fr:"Elle s'est inscrite à l'Université d'Abidjan pour étudier la médecine."},
        {en:"He received a scholarship to study abroad.",fr:"Il a obtenu une bourse pour étudier à l'étranger."},
        {en:"After graduation, she plans to pursue a master's degree.",fr:"Après l'obtention de son diplôme, elle prévoit de poursuivre un master."},
        {en:"The curriculum includes both theoretical and practical courses.",fr:"Le programme inclut des cours théoriques et pratiques."}
      ]},
      {type:'conseil',texte:"Au BAC, le thème de l'éducation est TOUJOURS présent. Apprenez : access to education, quality of education, dropout rate, literacy rate."}
    ],
    quiz:[
      {q:"'Primary school' in French is:",opts:["A) école secondaire","B) école primaire","C) université","D) collège"],rep:'B',expl:"Primary school = école primaire."},
      {q:"She received a ___ to study abroad.",opts:["A) tuition","B) scholarship","C) degree","D) curriculum"],rep:'B',expl:"Scholarship = bourse."},
      {q:"To 'enroll' means:",opts:["A) to graduate","B) to register","C) to fail","D) to teach"],rep:'B',expl:"Enroll = s'inscrire."},
      {q:"A 'master's degree' comes after:",opts:["A) primary school","B) a bachelor's degree","C) a PhD","D) secondary school"],rep:'B',expl:"Master = après la licence (bachelor's)."},
      {q:"'Tuition fees' are:",opts:["A) frais de scolarité","B) frais de transport","C) frais médicaux","D) frais alimentaires"],rep:'A',expl:"Tuition fees = frais de scolarité."},
      {q:"He ___ the exam with flying colors.",opts:["A) failed","B) passed","C) enrolled","D) graduated"],rep:'B',expl:"Pass an exam = réussir un examen."},
      {q:"'Graduation' is when you:",opts:["A) start school","B) receive your degree","C) fail an exam","D) enroll in a course"],rep:'B',expl:"Graduation = obtention du diplôme."},
      {q:"To 'major in' means:",opts:["A) to teach","B) to specialize in","C) to fail","D) to skip"],rep:'B',expl:"Major in = se spécialiser en."},
      {q:"'Curriculum' means:",opts:["A) programme scolaire","B) examen","C) diplôme","D) bourse"],rep:'A',expl:"Curriculum = programme scolaire."},
      {q:"A 'PhD' is the highest:",opts:["A) primary degree","B) secondary degree","C) academic degree","D) scholarship"],rep:'C',expl:"PhD = doctorat (plus haut diplôme)."}
    ]
  },

  // ── LISTENING & SPEAKING B1 ───────────────────────────────────────

  {
    id:'listen_b1_m1',
    titre:'Listening — Comprendre des Annonces',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Comprendre les annonces publiques en anglais",
      "Identifier les informations clés (heure, lieu, action)",
      "Suivre des instructions orales"
    ],
    contenu:[
      {type:'intro',texte:"Les annonces publiques (aéroport, gare, école, magasin) utilisent un langage spécifique. Ce module vous entraîne à les comprendre rapidement."},
      {type:'tableau',titre:"Types d'annonces",headers:["Contexte","Expressions clés","Exemple"],rows:[
        ["Aéroport","boarding, gate, delayed, departure","Flight BA 204 to London is now boarding at gate B12."],
        ["Gare","platform, departing, arriving, cancelled","The 10:30 train to Paris is departing from platform 5."],
        ["École","assembly, notice, deadline, exam","All students must submit their assignments by Friday."],
        ["Magasin","sale, clearance, special offer","Attention shoppers: 50% off on all electronics."],
        ["Médecin","appointment, waiting room, doctor","Mr. Koné, please proceed to room 3 for your appointment."]
      ]},
      {type:'regle',titre:'Stratégies de compréhension',texte:"1. Écoutez les mots-clés : nombres, lieux, actions\n2. Identifiez le contexte (où êtes-vous ?)\n3. Notez les changements : delayed, cancelled, moved\n4. Repérez les instructions : please proceed, go to, wait"},
      {type:'exemples',titre:'Annonces types',items:[
        {en:"Attention please. Flight AF 123 to Paris has been delayed by 45 minutes. The new departure time is 3:15 p.m. We apologise for the inconvenience.",fr:"Attention s'il vous plaît. Le vol AF 123 pour Paris a été retardé de 45 minutes. La nouvelle heure de départ est 15h15. Nous nous excusons pour le désagrément."},
        {en:"Ladies and gentlemen, the museum will close in 30 minutes. Please make your way to the exit. Thank you for visiting.",fr:"Mesdames et messieurs, le musée fermera dans 30 minutes. Veuillez vous diriger vers la sortie. Merci de votre visite."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les annonces utilisent souvent le passif (has been delayed, will be closed) et des formules polies (please, we apologise)."}
    ],
    quiz:[
      {q:"'Flight BA 204 is now boarding' means:",opts:["A) The flight is cancelled","B) Passengers can get on the plane","C) The flight is delayed","D) The flight has landed"],rep:'B',expl:"Boarding = les passagers peuvent monter dans l'avion."},
      {q:"'Delayed by 45 minutes' means:",opts:["A) 45 minutes early","B) 45 minutes late","C) 45 minutes fast","D) cancelled"],rep:'B',expl:"Delayed = en retard."},
      {q:"'Please proceed to room 3' means:",opts:["A) Go to room 3","B) Leave room 3","C) Wait in room 3","D) Avoid room 3"],rep:'A',expl:"Proceed to = allez à / dirigez-vous vers."},
      {q:"'The museum will close in 30 minutes' means:",opts:["A) It just opened","B) It's closing soon","C) It's closed","D) It's open 24 hours"],rep:'B',expl:"Will close in 30 minutes = fermera bientôt."},
      {q:"'Departing from platform 5' refers to:",opts:["A) a flight","B) a train","C) a bus","D) a ship"],rep:'B',expl:"Platform = quai (train)."},
      {q:"'We apologise for the inconvenience' is:",opts:["A) a complaint","B) an apology","C) an order","D) a question"],rep:'B',expl:"Apologise = s'excuser."},
      {q:"'50% off' means:",opts:["A) double price","B) half price","C) free","D) full price"],rep:'B',expl:"50% off = moitié prix."},
      {q:"'Submit your assignments by Friday' means:",opts:["A) after Friday","B) before or on Friday","C) on Saturday","D) never"],rep:'B',expl:"By Friday = avant ou le vendredi."},
      {q:"'Cancelled' means:",opts:["A) confirmed","B) called off","C) delayed","D) rescheduled"],rep:'B',expl:"Cancelled = annulé."},
      {q:"'Make your way to the exit' means:",opts:["A) stay where you are","B) go to the exit","C) enter the building","D) sit down"],rep:'B',expl:"Make your way to = dirigez-vous vers."}
    ]
  },

  {
    id:'listen_b1_m2',
    titre:'Listening — Interviews et Discussions',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Comprendre des interviews en anglais",
      "Suivre des discussions avec plusieurs interlocuteurs",
      "Identifier les opinions et les arguments"
    ],
    contenu:[
      {type:'intro',texte:"Les interviews et discussions sont courantes dans les examens d'écoute et la vie réelle. Ce module vous aide à suivre des échanges plus complexes."},
      {type:'tableau',titre:'Expressions pour exprimer une opinion',headers:["Expression","Sens","Exemple"],rows:[
        ["In my opinion...","À mon avis...","In my opinion, education is key."],
        ["I believe that...","Je crois que...","I believe that technology helps."],
        ["From my point of view...","De mon point de vue...","From my point of view, it's too expensive."],
        ["I agree / I disagree","Je suis d'accord / pas d'accord","I agree with you on that point."],
        ["That's a good point, but...","C'est un bon argument, mais...","That's a good point, but I think..."],
        ["I see what you mean, however...","Je comprends, cependant...","I see what you mean, however..."]
      ]},
      {type:'regle',titre:'Stratégies de compréhension',texte:"1. Identifiez les interlocuteurs (qui parle ?)\n2. Notez les opinions de chacun (agree/disagree)\n3. Repérez les arguments (because, since, for example)\n4. Identifiez la conclusion ou le consensus"},
      {type:'exemples',titre:"Discussion type — L'éducation en ligne",items:[
        {en:"Interviewer: What do you think about online learning?\nStudent A: In my opinion, it's very convenient. You can study from anywhere.\nStudent B: I agree, but I think it lacks interaction. In a classroom, you can ask questions directly.\nStudent A: That's a good point, but with video calls, you can still interact.\nStudent B: True, but it's not the same as being face-to-face.\nInterviewer: So both of you see advantages and disadvantages?",fr:"Intervieweur : Que pensez-vous de l'apprentissage en ligne ?\nÉtudiant A : À mon avis, c'est très pratique. On peut étudier de n'importe où.\nÉtudiant B : Je suis d'accord, mais je pense qu'il manque l'interaction. En classe, on peut poser des questions directement.\nÉtudiant A : C'est un bon argument, mais avec les appels vidéo, on peut quand même interagir.\nÉtudiant B : C'est vrai, mais ce n'est pas la même chose qu'en face à face.\nIntervieweur : Donc vous voyez tous les deux des avantages et des inconvénients ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans les discussions, repérez les marqueurs d'opinion : I think, In my opinion, I believe, From my perspective. Ils indiquent le point de vue de chaque personne."}
    ],
    quiz:[
      {q:"'In my opinion' expresses:",opts:["A) a fact","B) a personal view","C) a question","D) an order"],rep:'B',expl:"In my opinion = à mon avis (opinion personnelle)."},
      {q:"'I agree with you' means:",opts:["A) I disagree","B) I share your view","C) I don't understand","D) I'm confused"],rep:'B',expl:"Agree = être d'accord."},
      {q:"'That's a good point, but...' is used to:",opts:["A) fully agree","B) acknowledge and counter","C) end the conversation","D) ask a question"],rep:'B',expl:"Reconnaître un argument puis le contredire."},
      {q:"'From my point of view' means:",opts:["A) de mon point de vue","B) de loin","C) en général","D) objectivement"],rep:'A',expl:"From my point of view = de mon point de vue."},
      {q:"'I see what you mean, however...' is:",opts:["A) full agreement","B) partial agreement with a counter","C) disagreement","D) confusion"],rep:'B',expl:"Comprendre mais ajouter un contre-argument."},
      {q:"In a discussion, 'because' introduces:",opts:["A) a question","B) a reason","C) a conclusion","D) a greeting"],rep:'B',expl:"Because = parce que (raison)."},
      {q:"'I believe that...' is similar to:",opts:["A) I know that","B) I think that","C) I forget that","D) I deny that"],rep:'B',expl:"I believe = I think (je crois/je pense)."},
      {q:"A 'consensus' is:",opts:["A) a disagreement","B) a general agreement","C) a question","D) an argument"],rep:'B',expl:"Consensus = accord général."},
      {q:"'However' is used to:",opts:["A) add information","B) show contrast","C) give an example","D) conclude"],rep:'B',expl:"However = cependant (contraste)."},
      {q:"In an interview, the 'interviewer' is the person who:",opts:["A) answers questions","B) asks questions","C) watches","D) leaves"],rep:'B',expl:"Interviewer = celui qui pose les questions."}
    ]
  },

  {
    id:'speak_b1_m1',
    titre:'Speaking — Débats et Discussions',
    niveau:'B1',
    duree:25,
    objectifs:[
      "Participer à un débat en anglais",
      "Exprimer et défendre son opinion",
      "Utiliser des arguments structurés"
    ],
    contenu:[
      {type:'intro',texte:"Les débats sont une compétence clé du niveau B1. Savoir exprimer et défendre son opinion est essentiel pour les examens oraux et la vie professionnelle."},
      {type:'tableau',titre:'Structure d\'un argument',headers:["Étape","Expression","Exemple"],rows:[
        ["1. Opinion","In my opinion, I think...","In my opinion, social media has more advantages."],
        ["2. Raison","because, since, as","because it connects people worldwide."],
        ["3. Exemple","For example, for instance","For example, students use it to share knowledge."],
        ["4. Contre-argument","On the other hand, however","However, it can also be a source of distraction."],
        ["5. Conclusion","Therefore, all in all","Therefore, the benefits outweigh the drawbacks."]
      ]},
      {type:'regle',titre:'Phrases pour le débat',texte:"• Ouvrir : I'd like to start by saying...\n• Ajouter : Furthermore, Moreover, In addition\n• Contredire poliment : I see your point, but... / I respectfully disagree because...\n• Conclure : To sum up, In conclusion, All things considered"},
      {type:'exemples',titre:'Débat type — Les réseaux sociaux',items:[
        {en:"In my opinion, social media has transformed communication. Firstly, it allows people to stay connected regardless of distance. For example, families separated by borders can video call each other daily. Furthermore, social media is a powerful tool for education and awareness. However, I acknowledge that excessive use can lead to addiction and mental health issues. All in all, I believe the benefits outweigh the drawbacks if used responsibly.",fr:"À mon avis, les réseaux sociaux ont transformé la communication. Premièrement, ils permettent aux gens de rester connectés malgré la distance. Par exemple, les familles séparées par les frontières peuvent se faire des appels vidéo quotidiens. De plus, les réseaux sociaux sont un outil puissant pour l'éducation et la sensibilisation. Cependant, je reconnais qu'une utilisation excessive peut mener à l'addiction et aux problèmes de santé mentale. Dans l'ensemble, je crois que les avantages l'emportent sur les inconvénients si utilisés de manière responsable."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Dans un débat, écoutez activement l'autre personne. Répondez à ses arguments, ne les ignorez pas. Utilisez 'I see your point, but...' pour contredire poliment."}
    ],
    quiz:[
      {q:"'Firstly' is used to:",opts:["A) conclude","B) introduce the first point","C) contradict","D) give an example"],rep:'B',expl:"Firstly = premièrement (premier point)."},
      {q:"'However' introduces:",opts:["A) agreement","B) a contrasting point","C) an example","D) a conclusion"],rep:'B',expl:"However = cependant (contraste)."},
      {q:"'All in all' is used to:",opts:["A) start","B) add","C) conclude","D) contradict"],rep:'C',expl:"All in all = dans l'ensemble (conclusion)."},
      {q:"'I respectfully disagree' is:",opts:["A) rude","B) polite disagreement","C) agreement","D) confusion"],rep:'B',expl:"Respectfully disagree = désaccord poli."},
      {q:"'Furthermore' means:",opts:["A) however","B) in addition","C) therefore","D) for example"],rep:'B',expl:"Furthermore = de plus (addition)."},
      {q:"'For instance' introduces:",opts:["A) a conclusion","B) a reason","C) an example","D) a contradiction"],rep:'C',expl:"For instance = par exemple."},
      {q:"'The benefits outweigh the drawbacks' means:",opts:["A) disadvantages are greater","B) advantages are greater","C) there are no advantages","D) there are no disadvantages"],rep:'B',expl:"Outweigh = l'emporter sur (avantages > inconvénients)."},
      {q:"'To sum up' means:",opts:["A) to add more","B) to summarize","C) to start","D) to contradict"],rep:'B',expl:"To sum up = pour résumer."},
      {q:"'I see your point, but...' is used to:",opts:["A) fully agree","B) acknowledge and counter","C) end the debate","D) ask a question"],rep:'B',expl:"Reconnaître puis contredire."},
      {q:"'Therefore' shows:",opts:["A) contrast","B) cause","C) consequence","D) example"],rep:'C',expl:"Therefore = par conséquent (conséquence)."}
    ]
  },

  // ── WRITING B1 ────────────────────────────────────────────────────

  {
    id:'write_b1_m1',
    titre:'Writing — Essais Argumentatifs',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Structurer un essai argumentatif en anglais",
      "Présenter des arguments et contre-arguments",
      "Utiliser des connecteurs logiques avancés"
    ],
    contenu:[
      {type:'intro',texte:"L'essai argumentatif est un exercice clé du BAC. Il demande une structure claire, des arguments solides et une conclusion bien formulée."},
      {type:'tableau',titre:'Structure d\'un essai argumentatif',headers:["Partie","Contenu","Connecteurs"],rows:[
        ["Introduction","Présenter le sujet + thèse","Nowadays, It is often debated whether..."],
        ["Paragraphe 1","Argument 1 + exemple","First of all, For example, Furthermore"],
        ["Paragraphe 2","Argument 2 + exemple","Moreover, In addition, Besides"],
        ["Paragraphe 3","Contre-argument + réfutation","However, On the other hand, Nevertheless"],
        ["Conclusion","Résumé + opinion finale","In conclusion, To sum up, All things considered"]
      ]},
      {type:'regle',titre:'Connecteurs avancés',texte:"• Addition : Moreover, Furthermore, In addition, Besides\n• Opposition : However, Nevertheless, On the other hand, Although\n• Cause : Due to, Owing to, Since, As\n• Conséquence : Therefore, Consequently, As a result, Thus\n• Exemple : For instance, Such as, Namely\n• Conclusion : In conclusion, To sum up, All in all"},
      {type:'exemples',titre:'Essai type — La technologie dans l\'éducation',items:[
        {en:"Nowadays, the use of technology in education is widely debated. In my opinion, technology has significantly improved learning.\n\nFirst of all, technology provides access to unlimited information. For example, students can research any topic online and find resources from around the world. Furthermore, educational apps and videos make learning more interactive and engaging.\n\nOn the other hand, some argue that technology can be distracting. However, this can be managed with proper guidelines and supervision.\n\nIn conclusion, while technology has some drawbacks, its benefits in education are undeniable.",fr:"Aujourd'hui, l'utilisation de la technologie dans l'éducation est largement débattue. À mon avis, la technologie a considérablement amélioré l'apprentissage.\n\nD'abord, la technologie donne accès à une information illimitée. Par exemple, les étudiants peuvent rechercher n'importe quel sujet en ligne et trouver des ressources du monde entier. De plus, les applications éducatives et les vidéos rendent l'apprentissage plus interactif et engageant.\n\nD'un autre côté, certains soutiennent que la technologie peut être distrayante. Cependant, cela peut être géré avec des directives et une supervision appropriées.\n\nEn conclusion, bien que la technologie ait quelques inconvénients, ses avantages dans l'éducation sont indéniables."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, utilisez au moins 3 connecteurs différents par paragraphe. Variez entre addition, opposition et conséquence."}
    ],
    quiz:[
      {q:"The introduction of an argumentative essay should include:",opts:["A) the conclusion","B) the topic and thesis","C) examples only","D) counter-arguments"],rep:'B',expl:"L'introduction présente le sujet et la thèse."},
      {q:"'Moreover' is a connector of:",opts:["A) opposition","B) addition","C) conclusion","D) example"],rep:'B',expl:"Moreover = de plus (addition)."},
      {q:"'On the other hand' introduces:",opts:["A) agreement","B) a contrasting point","C) an example","D) a conclusion"],rep:'B',expl:"On the other hand = d'un autre côté (contraste)."},
      {q:"'Therefore' shows:",opts:["A) cause","B) consequence","C) opposition","D) example"],rep:'B',expl:"Therefore = par conséquent (conséquence)."},
      {q:"A counter-argument is:",opts:["A) your main argument","B) an opposing view you address","C) the conclusion","D) an example"],rep:'B',expl:"Un contre-argument = un point de vue opposé que vous adressez."},
      {q:"'Due to' introduces:",opts:["A) a result","B) a cause","C) an example","D) a contrast"],rep:'B',expl:"Due to = dû à (cause)."},
      {q:"'In conclusion' is used in:",opts:["A) the introduction","B) the body","C) the conclusion","D) the title"],rep:'C',expl:"In conclusion = dans la conclusion."},
      {q:"'Such as' introduces:",opts:["A) a conclusion","B) a cause","C) an example","D) a contrast"],rep:'C',expl:"Such as = tels que (exemple)."},
      {q:"A 'thesis' is:",opts:["A) a question","B) your main argument/position","C) an example","D) a counter-argument"],rep:'B',expl:"Thesis = votre position principale."},
      {q:"'Nevertheless' means:",opts:["A) therefore","B) however","C) moreover","D) for example"],rep:'B',expl:"Nevertheless = néanmoins (cependant)."}
    ]
  },

  {
    id:'write_b1_m2',
    titre:'Writing — Rapports et Comptes Rendus',
    niveau:'B1',
    duree:30,
    objectifs:[
      "Rédiger un rapport ou compte rendu en anglais",
      "Utiliser un registre formel et objectif",
      "Structurer les informations de manière claire"
    ],
    contenu:[
      {type:'intro',texte:"Les rapports et comptes rendus sont essentiels dans le monde professionnel et académique. Ce module vous donne les structures et le vocabulaire nécessaires."},
      {type:'tableau',titre:'Structure d\'un rapport',headers:["Partie","Contenu","Exemple"],rows:[
        ["Titre","Sujet du rapport","Report on the School Cleanliness Campaign"],
        ["Introduction","Contexte et objectif","This report aims to evaluate..."],
        ["Findings","Résultats / observations","The survey revealed that..."],
        ["Analysis","Interprétation","This suggests that..."],
        ["Recommendations","Suggestions","It is recommended that..."],
        ["Conclusion","Résumé","In summary, the campaign was successful."]
      ]},
      {type:'regle',titre:'Registre formel',texte:"• Évitez les contractions : do not (pas don't), cannot (pas can't)\n• Utilisez le passif pour l'objectivité : It was observed that...\n• Évitez la 1ère personne : The data shows (pas I think)\n• Utilisez des verbes formels : demonstrate, indicate, reveal, suggest"},
      {type:'exemples',titre:'Rapport type',items:[
        {en:"Report on the School Cleanliness Campaign\n\nIntroduction: This report aims to evaluate the effectiveness of the cleanliness campaign conducted at AGTM Academy in March 2025.\n\nFindings: The survey revealed that 85% of students participated in the campaign. The majority of classrooms were found to be cleaner than before.\n\nAnalysis: This suggests that awareness campaigns can significantly improve school hygiene.\n\nRecommendations: It is recommended that similar campaigns be conducted regularly.\n\nConclusion: In summary, the campaign was successful and should be continued.",fr:"Rapport sur la Campagne de Propreté de l'École\n\nIntroduction : Ce rapport vise à évaluer l'efficacité de la campagne de propreté menée à AGTM Academy en mars 2025.\n\nRésultats : Le sondage a révélé que 85% des étudiants ont participé à la campagne. La majorité des salles de classe étaient plus propres qu'avant.\n\nAnalyse : Cela suggère que les campagnes de sensibilisation peuvent améliorer significativement l'hygiène scolaire.\n\nRecommandations : Il est recommandé que des campagnes similaires soient menées régulièrement.\n\nConclusion : En résumé, la campagne a été un succès et devrait être continuée."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Les rapports utilisent TOUJOURS le registre formel. Pas de contractions, pas de langage familier, pas d'opinions personnelles non fondées."}
    ],
    quiz:[
      {q:"A report should use:",opts:["A) informal language","B) formal and objective language","C) slang","D) contractions"],rep:'B',expl:"Un rapport utilise un langage formel et objectif."},
      {q:"'This report aims to...' is used in:",opts:["A) the conclusion","B) the introduction","C) the findings","D) the recommendations"],rep:'B',expl:"Présenter l'objectif = introduction."},
      {q:"'The survey revealed that...' is part of:",opts:["A) the introduction","B) the findings","C) the recommendations","D) the title"],rep:'B',expl:"Résultats du sondage = findings."},
      {q:"'It is recommended that...' is used in:",opts:["A) the introduction","B) the findings","C) the recommendations","D) the title"],rep:'C',expl:"Recommandations = recommendations."},
      {q:"In a formal report, you should:",opts:["A) use contractions","B) avoid contractions","C) use slang","D) write in first person"],rep:'B',expl:"Pas de contractions dans un rapport formel."},
      {q:"'Demonstrate' is a ___ verb.",opts:["A) informal","B) formal","C) slang","D) casual"],rep:'B',expl:"Demonstrate = verbe formel."},
      {q:"'In summary' is used in:",opts:["A) the introduction","B) the findings","C) the conclusion","D) the recommendations"],rep:'C',expl:"In summary = en résumé (conclusion)."},
      {q:"The passive voice in reports creates:",opts:["A) subjectivity","B) objectivity","C) confusion","D) informality"],rep:'B',expl:"Le passif crée l'objectivité."},
      {q:"'This suggests that...' is part of:",opts:["A) the findings","B) the analysis","C) the recommendations","D) the title"],rep:'B',expl:"Interprétation = analysis."},
      {q:"A report title should be:",opts:["A) funny","B) clear and descriptive","C) vague","D) informal"],rep:'B',expl:"Le titre doit être clair et descriptif."}
    ]
  },

  // ── CULTURE B1 ────────────────────────────────────────────────────

  {
    id:'cult_b1_m1',
    titre:'Culture — Le Système Éducatif Anglophone',
    niveau:'B1',
    duree:20,
    objectifs:[
      "Comprendre les systèmes éducatifs des pays anglophones",
      "Comparer avec le système ivoirien",
      "Utiliser le vocabulaire académique anglophone"
    ],
    contenu:[
      {type:'intro',texte:"Les systèmes éducatifs varient selon les pays. Connaître les systèmes anglophones vous aide à comprendre les références culturelles et à préparer des études à l'étranger."},
      {type:'tableau',titre:'Systèmes éducatifs comparés',headers:["Niveau","UK","USA","Côte d'Ivoire"],rows:[
        ["Primaire","Primary (5-11)","Elementary (5-11)","Primaire (6-11)"],
        ["Secondaire 1","Secondary (11-16)","Middle School (11-14)","Collège (11-15)"],
        ["Secondaire 2","Sixth Form / College (16-18)","High School (14-18)","Lycée (15-18)"],
        ["Examen final","GCSE / A-Levels","SAT / AP","BEPC / BAC"],
        ["Université","University (3-4 ans)","College/University (4 ans)","Université (3-5 ans)"],
        ["Diplôme","Bachelor's (3 ans)","Bachelor's (4 ans)","Licence (3 ans)"]
      ]},
      {type:'regle',titre:'Différences clés',texte:"• UK : GCSE à 16 ans, A-Levels à 18 ans (spécialisation)\n• USA : High School diploma + SAT pour l'université\n• UK : université = 3 ans. USA : université = 4 ans\n• Les deux systèmes utilisent le système de notes A-F (UK) ou GPA (USA)"},
      {type:'exemples',titre:'Faits culturels',items:[
        {en:"In the UK, students take GCSE exams at age 16 and A-Levels at 18.",fr:"Au Royaume-Uni, les étudiants passent les GCSE à 16 ans et les A-Levels à 18 ans."},
        {en:"In the USA, the SAT is a standardized test for college admission.",fr:"Aux USA, le SAT est un test standardisé pour l'admission à l'université."},
        {en:"Ivy League universities (Harvard, Yale, Princeton) are the most prestigious in the USA.",fr:"Les universités Ivy League (Harvard, Yale, Princeton) sont les plus prestigieuses aux USA."},
        {en:"Oxford and Cambridge are the oldest and most prestigious universities in the UK.",fr:"Oxford et Cambridge sont les universités les plus anciennes et prestigieuses du Royaume-Uni."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Si vous postulez pour des études à l'étranger, connaissez les équivalences : BAC = High School Diploma = A-Levels."}
    ],
    quiz:[
      {q:"GCSE exams are taken in:",opts:["A) USA","B) UK","C) France","D) Nigeria"],rep:'B',expl:"GCSE = Royaume-Uni."},
      {q:"The SAT is a test for:",opts:["A) primary school","B) college admission","C) driving","D) cooking"],rep:'B',expl:"SAT = test d'admission à l'université (USA)."},
      {q:"Ivy League universities are in:",opts:["A) UK","B) USA","C) France","D) Ghana"],rep:'B',expl:"Ivy League = universités prestigieuses américaines."},
      {q:"Oxford and Cambridge are in:",opts:["A) USA","B) UK","C) Canada","D) Australia"],rep:'B',expl:"Oxford et Cambridge = Royaume-Uni."},
      {q:"A bachelor's degree in the UK takes:",opts:["A) 2 years","B) 3 years","C) 4 years","D) 5 years"],rep:'B',expl:"Licence UK = 3 ans."},
      {q:"A-Levels are taken at age:",opts:["A) 14","B) 16","C) 18","D) 20"],rep:'C',expl:"A-Levels = 18 ans."},
      {q:"'High School' in the UK is called:",opts:["A) Elementary","B) Secondary / Sixth Form","C) College","D) University"],rep:'B',expl:"High School (US) = Secondary/Sixth Form (UK)."},
      {q:"GPA stands for:",opts:["A) General Performance Average","B) Grade Point Average","C) Global Performance Assessment","D) Grade Progress Average"],rep:'B',expl:"GPA = Grade Point Average."},
      {q:"The BEPC is equivalent to:",opts:["A) GCSE","B) A-Levels","C) SAT","D) PhD"],rep:'A',expl:"BEPC ≈ GCSE (niveau intermédiaire)."},
      {q:"The BAC is equivalent to:",opts:["A) GCSE","B) A-Levels / High School Diploma","C) SAT","D) PhD"],rep:'B',expl:"BAC ≈ A-Levels / High School Diploma."}
    ]
  },

  {
    id:'cult_b1_m2',
    titre:'Culture — Les Médias et la Presse Anglophone',
    niveau:'B1',
    duree:20,
    objectifs:[
      "Connaître les grands médias anglophones",
      "Comprendre le vocabulaire journalistique",
      "Analyser des articles de presse en anglais"
    ],
    contenu:[
      {type:'intro',texte:"Les médias anglophones jouent un rôle majeur dans l'information mondiale. Connaître les principaux journaux, chaînes et leur vocabulaire est essentiel."},
      {type:'tableau',titre:'Grands médias anglophones',headers:["Média","Type","Pays","Orientation"],rows:[
        ["BBC","TV/Radio/Online","UK","Public, neutre"],
        ["The Guardian","Newspaper/Online","UK","Centre-gauche"],
        ["The Times","Newspaper/Online","UK","Centre-droit"],
        ["CNN","TV/Online","USA","Centre"],
        ["The New York Times","Newspaper/Online","USA","Centre-gauche"],
        ["Al Jazeera English","TV/Online","Qatar","International"],
        ["Reuters","News Agency","UK","Neutre"],
        ["The Washington Post","Newspaper/Online","USA","Centre-gauche"]
      ]},
      {type:'lexique',titre:'Vocabulaire journalistique',items:[
        {en:"headline",fr:"titre de l'article"},{en:"article",fr:"article"},
        {en:"breaking news",fr:"dernière heure"},{en:"editorial",fr:"éditorial"},
        {en:"interview",fr:"interview"},{en:"report",fr:"reportage"},
        {en:"source",fr:"source"},{en:"bias",fr:"biais / partialité"},
        {en:"fake news",fr:"fausses informations"},{en:"fact-check",fr:"vérification des faits"}
      ]},
      {type:'exemples',titre:'Structure d\'un article',items:[
        {en:"Headline: 'Climate Summit Reaches Historic Agreement'\nLead: World leaders have agreed to reduce carbon emissions by 50% by 2030.\nBody: The agreement, signed by 195 countries, marks a turning point in the fight against climate change...",fr:"Titre : 'Le Sommet Climat atteint un accord historique'\nChapô : Les dirigeants mondiaux ont convenu de réduire les émissions de carbone de 50% d'ici 2030.\nCorps : L'accord, signé par 195 pays, marque un tournant dans la lutte contre le changement climatique..."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Lisez un article BBC ou CNN par jour. Notez 5 nouveaux mots. C'est la meilleure façon d'améliorer votre anglais ET votre culture générale."}
    ],
    quiz:[
      {q:"The BBC is based in:",opts:["A) USA","B) UK","C) France","D) Nigeria"],rep:'B',expl:"BBC = British Broadcasting Corporation (UK)."},
      {q:"'Breaking news' means:",opts:["A) vieille nouvelle","B) dernière heure","C) fausse information","D) publicité"],rep:'B',expl:"Breaking news = dernière heure / info urgente."},
      {q:"A 'headline' is:",opts:["A) the body of the article","B) the title of the article","C) the author","D) the date"],rep:'B',expl:"Headline = titre de l'article."},
      {q:"'Fake news' refers to:",opts:["A) real news","B) false information","C) editorials","D) interviews"],rep:'B',expl:"Fake news = fausses informations."},
      {q:"CNN is based in:",opts:["A) UK","B) USA","C) France","D) Ghana"],rep:'B',expl:"CNN = Cable News Network (USA)."},
      {q:"An 'editorial' expresses:",opts:["A) facts only","B) the newspaper's opinion","C) breaking news","D) weather"],rep:'B',expl:"Éditorial = opinion du journal."},
      {q:"'Bias' in journalism means:",opts:["A) neutrality","B) partiality","C) accuracy","D) objectivity"],rep:'B',expl:"Bias = partialité / biais."},
      {q:"Reuters is a:",opts:["A) TV channel","B) news agency","C) newspaper","D) radio station"],rep:'B',expl:"Reuters = agence de presse."},
      {q:"'Fact-check' means:",opts:["A) créer des faits","B) vérifier les faits","C) ignorer les faits","D) inventer des faits"],rep:'B',expl:"Fact-check = vérification des faits."},
      {q:"The 'lead' of an article is:",opts:["A) the conclusion","B) the opening paragraph","C) the headline","D) the author"],rep:'B',expl:"Lead = chapô / premier paragraphe."}
    ]
  },

  // ── EXAM PREP B1 ──────────────────────────────────────────────────

  {
    id:'exam_b1_m1',
    titre:'BAC Prep — Text Analysis Avancé',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Analyser des textes authentiques de niveau BAC",
      "Identifier le ton, le registre et le public cible",
      "Commenter les choix stylistiques de l'auteur"
    ],
    contenu:[
      {type:'intro',texte:"L'analyse de texte au BAC demande une approche méthodique. Ce module vous donne les outils pour analyser tout type de texte anglais."},
      {type:'tableau',titre:'Méthode d\'analyse en 5 étapes',headers:["Étape","Action","Questions à se poser"],rows:[
        ["1. Identifier","Type, thème, ton","Narratif? Argumentatif? Ton sérieux? Ironique?"],
        ["2. Comprendre","Idée principale","De quoi parle le texte? Quel est le message?"],
        ["3. Analyser","Structures, vocabulaire","Quels temps? Quels connecteurs? Quel registre?"],
        ["4. Interpréter","Sous-texte, intentions","Que veut dire l'auteur? Quel est l'effet recherché?"],
        ["5. Commenter","Votre opinion argumentée","Êtes-vous d'accord? Pourquoi?"]
      ]},
      {type:'regle',titre:'Vocabulaire d\'analyse',texte:"• The author argues that... (l'auteur soutient que)\n• The text highlights... (le texte met en évidence)\n• The tone is... (le ton est...)\n• The author uses... to emphasize... (l'auteur utilise... pour souligner)\n• This suggests that... (cela suggère que)\n• The target audience is... (le public cible est...)"},
      {type:'exemples',titre:'Analyse type BAC',items:[
        {en:"Text: 'Education is not the filling of a pail, but the lighting of a fire.' — W.B. Yeats\n\nType: Argumentative (metaphor + opinion)\nTheme: The nature of education\nTone: Inspiring, philosophical\nMain idea: Education should inspire, not just transmit information.\nAnalysis: The author uses a metaphor (fire vs pail) to contrast two approaches to education. 'Filling a pail' represents passive learning, while 'lighting a fire' represents active, inspiring education.",fr:"Texte : 'L'éducation n'est pas le remplissage d'un seau, mais l'allumage d'un feu.' — W.B. Yeats\n\nType : Argumentatif (métaphore + opinion)\nThème : La nature de l'éducation\nTon : Inspirant, philosophique\nIdée principale : L'éducation devrait inspirer, pas seulement transmettre.\nAnalyse : L'auteur utilise une métaphore (feu vs seau) pour contraster deux approches de l'éducation."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, citez TOUJOURS le texte. 'The author says...' + citation + explication = réponse complète."}
    ],
    quiz:[
      {q:"The first step in text analysis is:",opts:["A) comment","B) identify","C) translate","D) summarize"],rep:'B',expl:"1ère étape : identifier (type, thème, ton)."},
      {q:"'The author argues that...' introduces:",opts:["A) a fact","B) the author's position","C) a question","D) a conclusion"],rep:'B',expl:"Argues that = soutient que (position de l'auteur)."},
      {q:"'The tone is inspiring' refers to:",opts:["A) the length","B) the author's attitude","C) the font","D) the topic"],rep:'B',expl:"Tone = attitude de l'auteur."},
      {q:"A metaphor is:",opts:["A) a literal comparison","B) a figurative comparison","C) a question","D) a fact"],rep:'B',expl:"Métaphore = comparaison figurée."},
      {q:"'The target audience is...' refers to:",opts:["A) the author","B) the intended readers","C) the publisher","D) the title"],rep:'B',expl:"Target audience = public cible / lecteurs visés."},
      {q:"'This suggests that...' introduces:",opts:["A) a fact","B) an inference","C) a question","D) a title"],rep:'B',expl:"Suggests that = suggère que (inférence)."},
      {q:"The 'theme' of a text is:",opts:["A) the title","B) the main subject","C) the author","D) the date"],rep:'B',expl:"Theme = sujet principal."},
      {q:"'The text highlights...' means:",opts:["A) the text hides","B) the text emphasizes","C) the text ignores","D) the text deletes"],rep:'B',expl:"Highlights = met en évidence / souligne."},
      {q:"In text analysis, you should always:",opts:["A) translate","B) quote the text","C) copy","D) ignore"],rep:'B',expl:"Citez TOUJOURS le texte."},
      {q:"The 'comment' step requires:",opts:["A) copying the text","B) your argued opinion","C) translating","D) summarizing only"],rep:'B',expl:"Commenter = donner votre opinion argumentée."}
    ]
  },

  {
    id:'exam_b1_m2',
    titre:'BAC Prep — Grammar Avancé',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Maîtriser les exercices de grammaire de niveau BAC",
      "Transformer des phrases complexes",
      "Utiliser les temps et structures avancés"
    ],
    contenu:[
      {type:'intro',texte:"La grammaire du BAC teste votre maîtrise des structures avancées : conditionnels, passif, discours indirect, pronoms relatifs et plus."},
      {type:'tableau',titre:'Points grammaticaux testés au BAC',headers:["Point","Exemple","Règle"],rows:[
        ["Conditionnels","If I had studied, I would have passed.","Type 3 : If + past perfect / would have + PP"],
        ["Passif avancé","The report is being reviewed.","Present Continuous passif"],
        ["Discours indirect","She asked where I lived.","Backshift + ordre normal"],
        ["Pronoms relatifs","The man whose car was stolen...","whose = possession"],
        ["Used to","I used to live in Bouaké.","Habitude passée → used to + base"],
        ["Present Perfect","I have lived here since 2020.","have/has + PP + since/for"]
      ]},
      {type:'exemples',titre:'Exercices types BAC',items:[
        {en:"Exercise 1: Put the verb in the correct tense.\nIf she ___ (study) harder, she ___ (pass) the exam. → had studied / would have passed\nThe letter ___ (write) by the director. → was written\nShe said she ___ (be) tired. → was",fr:"Exercice 1 : Mettez le verbe au bon temps.\nSi elle avait étudié plus dur, elle aurait réussi. → had studied / would have passed\nLa lettre a été écrite par le directeur. → was written\nElle a dit qu'elle était fatiguée. → was"},
        {en:"Exercise 2: Transform to reported speech.\n'Where do you live?' → He asked me where I lived.\n'Don't be late!' → She told me not to be late.",fr:"Exercice 2 : Transformez au discours indirect.\n'Où habites-tu ?' → Il m'a demandé où j'habitais.\n'Ne sois pas en retard !' → Elle m'a dit de ne pas être en retard."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Révisez les verbes irréguliers chaque semaine. Ils reviennent dans TOUS les exercices de grammaire du BAC."}
    ],
    quiz:[
      {q:"If she ___ harder, she would have passed.",opts:["A) studied","B) had studied","C) studies","D) has studied"],rep:'B',expl:"Type 3 → If + past perfect (had studied)."},
      {q:"The letter ___ by the director.",opts:["A) wrote","B) was written","C) is writing","D) writes"],rep:'B',expl:"Passé passif → was written."},
      {q:"She said she ___ tired.",opts:["A) is","B) was","C) were","D) has been"],rep:'B',expl:"Discours indirect : present → past (was)."},
      {q:"The man ___ car was stolen called the police.",opts:["A) who","B) which","C) whose","D) that"],rep:'C',expl:"Possession → whose."},
      {q:"I ___ live in Bouaké, but now I live in Abidjan.",opts:["A) use to","B) used to","C) was used to","D) got used to"],rep:'B',expl:"Habitude passée → used to."},
      {q:"She ___ here since 2020.",opts:["A) lives","B) lived","C) has lived","D) is living"],rep:'C',expl:"Since + point de départ → Present Perfect."},
      {q:"'Don't be late!' → She told me ___ late.",opts:["A) not to be","B) to not be","C) don't be","D) not be"],rep:'A',expl:"Ordre négatif → told + not + to-infinitif."},
      {q:"If I ___ you, I would apologise.",opts:["A) am","B) was","C) were","D) be"],rep:'C',expl:"Type 2 → were (formel)."},
      {q:"The room ___ being cleaned right now.",opts:["A) is","B) was","C) has","D) will"],rep:'A',expl:"Présent continu passif → is being cleaned."},
      {q:"He asked ___ I was ready.",opts:["A) that","B) if","C) what","D) which"],rep:'B',expl:"Question Yes/No → if/whether."}
    ]
  },

  {
    id:'exam_b1_m3',
    titre:'BAC Prep — Writing Avancé',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Rédiger des textes de niveau BAC (15-20 lignes)",
      "Utiliser des structures grammaticales variées",
      "Argumenter avec des exemples pertinents"
    ],
    contenu:[
      {type:'intro',texte:"L'écriture du BAC demande des textes longs (15-20 lignes), une argumentation solide et un vocabulaire riche. Ce module vous prépare à cet exercice."},
      {type:'tableau',titre:'Types d\'écriture au BAC',headers:["Type","Structure","Points clés"],rows:[
        ["Essai argumentatif","Intro → Arguments → Contre → Conclusion","Thèse claire, 2-3 arguments, connecteurs variés"],
        ["Lettre formelle","En-tête → Salutation → Corps → Clôture","Registre formel, formules appropriées"],
        ["Article","Titre → Intro → Développement → Conclusion","Titre accrocheur, ton adapté au public"],
        ["Discours","Salutation → Intro → Corps → Conclusion","Ton engageant, appels au public"],
        ["Compte rendu","Titre → Intro → Findings → Recommendations","Registre formel, objectif, structuré"]
      ]},
      {type:'regle',titre:'Critères de correction BAC',texte:"• Contenu (4 pts) : Répondez au sujet, développez vos idées\n• Grammaire (4 pts) : Structures variées, peu d'erreurs\n• Vocabulaire (4 pts) : Riche, précis, pas de répétitions\n• Organisation (4 pts) : Paragraphes, connecteurs, cohérence\n• Total : 16 points (ramené à 20)"},
      {type:'exemples',titre:'Essai type BAC — L\'impact des réseaux sociaux',items:[
        {en:"Nowadays, social media has become an integral part of our daily lives. While some argue that it has negative effects, I believe that its benefits outweigh its drawbacks.\n\nFirst of all, social media allows people to stay connected regardless of distance. For example, families separated by borders can video call each other daily. Furthermore, it is a powerful tool for education and awareness. Students use platforms like YouTube to access tutorials and lectures from around the world.\n\nHowever, I acknowledge that excessive use can lead to addiction and mental health issues. Nevertheless, these problems can be managed with proper guidelines and parental supervision.\n\nIn conclusion, social media has transformed the way we communicate and learn. If used responsibly, it is a valuable tool for personal and professional development.",fr:"Aujourd'hui, les réseaux sociaux sont devenus une partie intégrante de notre vie quotidienne. Bien que certains soutiennent qu'ils ont des effets négatifs, je crois que leurs avantages l'emportent sur leurs inconvénients.\n\nD'abord, les réseaux sociaux permettent aux gens de rester connectés malgré la distance. Par exemple, les familles séparées par les frontières peuvent se faire des appels vidéo quotidiens. De plus, c'est un outil puissant pour l'éducation et la sensibilisation. Les étudiants utilisent des plateformes comme YouTube pour accéder à des tutoriels et des cours du monde entier.\n\nCependant, je reconnais qu'une utilisation excessive peut mener à l'addiction et aux problèmes de santé mentale. Néanmoins, ces problèmes peuvent être gérés avec des directives appropriées et une supervision parentale.\n\nEn conclusion, les réseaux sociaux ont transformé notre façon de communiquer et d'apprendre. Utilisés de manière responsable, ils sont un outil précieux pour le développement personnel et professionnel."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Écrivez 15-20 lignes MINIMUM. Utilisez au moins 5 connecteurs différents. Relisez-vous pour corriger les erreurs de grammaire et d'orthographe."}
    ],
    quiz:[
      {q:"The BAC Writing section is worth:",opts:["A) 10 points","B) 16 points (ramené à 20)","C) 20 points","D) 8 points"],rep:'B',expl:"16 points ramené à 20."},
      {q:"The 'Content' criterion is worth:",opts:["A) 2 pts","B) 4 pts","C) 6 pts","D) 8 pts"],rep:'B',expl:"Contenu = 4 points."},
      {q:"Minimum lines for BAC Writing:",opts:["A) 5","B) 10","C) 15","D) 25"],rep:'C',expl:"15-20 lignes minimum."},
      {q:"'Furthermore' is a connector of:",opts:["A) opposition","B) addition","C) conclusion","D) example"],rep:'B',expl:"Furthermore = de plus (addition)."},
      {q:"A formal letter ends with:",opts:["A) Cheers","B) Yours sincerely/faithfully","C) Best wishes","D) See you"],rep:'B',expl:"Lettre formelle → Yours sincerely/faithfully."},
      {q:"The 'Grammar' criterion is worth:",opts:["A) 2 pts","B) 4 pts","C) 6 pts","D) 8 pts"],rep:'B',expl:"Grammaire = 4 points."},
      {q:"'Nevertheless' means:",opts:["A) therefore","B) however","C) moreover","D) for example"],rep:'B',expl:"Nevertheless = néanmoins."},
      {q:"An article should have:",opts:["A) no title","B) a catchy title","C) only one paragraph","D) no conclusion"],rep:'B',expl:"Un article doit avoir un titre accrocheur."},
      {q:"The 'Vocabulary' criterion is worth:",opts:["A) 2 pts","B) 4 pts","C) 6 pts","D) 8 pts"],rep:'B',expl:"Vocabulaire = 4 points."},
      {q:"You should use at least ___ different connectors in a BAC essay.",opts:["A) 1","B) 3","C) 5","D) 10"],rep:'C',expl:"Au moins 5 connecteurs différents."}
    ]
  },

  {
    id:'exam_b1_m4',
    titre:'TOEIC Prep — Reading Comprehension',
    niveau:'B1',
    duree:35,
    objectifs:[
      "Comprendre des textes professionnels de type TOEIC",
      "Répondre aux questions de lecture rapidement",
      "Maîtriser le vocabulaire des affaires"
    ],
    contenu:[
      {type:'intro',texte:"Le TOEIC Reading teste votre capacité à comprendre des textes professionnels : emails, annonces, articles, rapports. Ce module vous entraîne à ces exercices."},
      {type:'tableau',titre:'Types de textes TOEIC',headers:["Type","Caractéristiques","Questions typiques"],rows:[
        ["Email professionnel","Court, formel, action requise","What is the purpose? What should the reader do?"],
        ["Annonce/Mémo","Information, date, lieu","When? Where? Who is the audience?"],
        ["Article de presse","Informatif, objectif","What is the main idea? What can be inferred?"],
        ["Rapport","Données, analyse, recommandations","What does the data show? What is recommended?"],
        ["Publicité","Promotionnelle, persuasive","What is being advertised? What is the offer?"]
      ]},
      {type:'regle',titre:'Stratégies TOEIC Reading',texte:"1. Lisez la question D'ABORD, puis le texte\n2. Cherchez les mots-clés de la question dans le texte\n3. Éliminez les réponses clairement fausses\n4. Attention aux pièges : mots similaires mais sens différent\n5. Gérez votre temps : 75 minutes pour 100 questions"},
      {type:'exemples',titre:'Email type TOEIC',items:[
        {en:"To: All Staff\nFrom: HR Department\nSubject: Office Renovation Schedule\n\nDear Colleagues,\n\nPlease be informed that the 3rd floor will be closed for renovation from March 15 to March 30. During this period, all employees working on the 3rd floor should relocate to the 5th floor. Temporary desks have been assigned. Please contact the HR department for your new desk number.\n\nWe apologise for any inconvenience.\n\nBest regards,\nHR Department",fr:"À : Tout le personnel\nDe : Département RH\nObjet : Calendrier de rénovation du bureau\n\nChers collègues,\n\nVeuillez être informés que le 3e étage sera fermé pour rénovation du 15 au 30 mars. Pendant cette période, tous les employés du 3e étage doivent se relocaliser au 5e étage. Des bureaux temporaires ont été attribués. Veuillez contacter le département RH pour votre nouveau numéro de bureau.\n\nNous nous excusons pour tout désagrément.\n\nCordialement,\nDépartement RH"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au TOEIC, les réponses sont TOUJOURS dans le texte. Ne supposez rien. Si ce n'est pas écrit, ce n'est pas la réponse."}
    ],
    quiz:[
      {q:"The purpose of the email is to:",opts:["A) invite to a party","B) inform about office renovation","C) fire employees","D) announce a promotion"],rep:'B',expl:"L'email informe sur la rénovation du bureau."},
      {q:"The 3rd floor will be closed:",opts:["A) permanently","B) from March 15 to 30","C) for one day","D) never"],rep:'B',expl:"Du 15 au 30 mars."},
      {q:"Employees should relocate to:",opts:["A) the 2nd floor","B) the 4th floor","C) the 5th floor","D) home"],rep:'C',expl:"Se relocaliser au 5e étage."},
      {q:"For desk numbers, contact:",opts:["A) the manager","B) the HR department","C) the CEO","D) the cleaning staff"],rep:'B',expl:"Contacter le département RH."},
      {q:"'We apologise for any inconvenience' is:",opts:["A) a complaint","B) a polite closing","C) an order","D) a question"],rep:'B',expl:"Formule de politesse."},
      {q:"TOEIC Reading has ___ minutes for 100 questions.",opts:["A) 45","B) 60","C) 75","D) 90"],rep:'C',expl:"75 minutes pour 100 questions."},
      {q:"The best strategy is to:",opts:["A) read the text first","B) read the question first","C) guess all answers","D) skip all questions"],rep:'B',expl:"Lire la question d'abord."},
      {q:"In TOEIC, answers are:",opts:["A) outside the text","B) always in the text","C) based on opinion","D) random"],rep:'B',expl:"Les réponses sont toujours dans le texte."},
      {q:"'Relocate' means:",opts:["A) stay","B) move to a new place","C) leave the company","D) renovate"],rep:'B',expl:"Relocate = se déplacer / se relocaliser."},
      {q:"A 'memo' is:",opts:["A) a long report","B) a short internal message","C) a public advertisement","D) a personal letter"],rep:'B',expl:"Memo = message interne court."}
    ]
  },

  {
    id:'exam_b1_m5',
    titre:'TOEIC Prep — Listening Comprehension',
    niveau:'B1',
    duree:30,
    objectifs:[
      "Comprendre des conversations professionnelles",
      "Identifier les informations clés dans des annonces",
      "Répondre aux questions d'écoute TOEIC"
    ],
    contenu:[
      {type:'intro',texte:"Le TOEIC Listening teste votre capacité à comprendre l'anglais parlé dans un contexte professionnel. Ce module vous prépare aux 3 parties de l'écoute."},
      {type:'tableau',titre:'Parties du TOEIC Listening',headers:["Partie","Contenu","Nombre"],rows:[
        ["Part 1: Photos","Décrivez une photo","6 questions"],
        ["Part 2: Questions-Réponses","Répondez à une question","25 questions"],
        ["Part 3: Conversations","Compréhension de dialogues","39 questions"],
        ["Part 4: Annonces","Compréhension d'annonces","30 questions"]
      ]},
      {type:'regle',titre:'Stratégies d\'écoute',texte:"1. Lisez les questions AVANT l'audio\n2. Identifiez le contexte (qui parle ? où ?)\n3. Notez les mots-clés (noms, verbes, nombres)\n4. Ne paniquez pas si vous manquez un mot — concentrez-vous sur le sens global\n5. Répondez immédiatement — pas de temps pour revenir en arrière"},
      {type:'exemples',titre:'Conversation type TOEIC',items:[
        {en:"M: Excuse me, could you tell me where the meeting room is?\nW: Sure. It's on the 3rd floor, room 305. Take the elevator and turn left.\nM: Thank you. Is the meeting at 2 p.m.?\nW: Actually, it's been moved to 3 p.m. The manager sent an email this morning.\nM: Oh, I didn't see it. Thanks for letting me know.\n\nQ1: Where is the meeting room?\nQ2: What time is the meeting?\nQ3: How did the man learn about the time change?",fr:"H : Excusez-moi, pourriez-vous me dire où est la salle de réunion ?\nF : Bien sûr. C'est au 3e étage, salle 305. Prenez l'ascenseur et tournez à gauche.\nH : Merci. La réunion est à 14h ?\nF : En fait, elle a été déplacée à 15h. Le manager a envoyé un email ce matin.\nH : Ah, je ne l'ai pas vu. Merci de me le dire.\n\nQ1 : Où est la salle de réunion ?\nQ2 : À quelle heure est la réunion ?\nQ3 : Comment l'homme a-t-il appris le changement d'heure ?"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Entraînez-vous avec des podcasts anglais (BBC Learning English, TED Talks). Écoutez 15 minutes par jour minimum."}
    ],
    quiz:[
      {q:"TOEIC Listening has ___ parts.",opts:["A) 2","B) 3","C) 4","D) 5"],rep:'C',expl:"4 parties : Photos, Q-R, Conversations, Annonces."},
      {q:"Part 2 tests:",opts:["A) photo description","B) question-response","C) conversations","D) announcements"],rep:'B',expl:"Part 2 = Questions-Réponses."},
      {q:"The best strategy before listening is to:",opts:["A) close your eyes","B) read the questions","C) write notes","D) sleep"],rep:'B',expl:"Lire les questions avant l'audio."},
      {q:"'Actually, it's been moved to 3 p.m.' means:",opts:["A) it's cancelled","B) the time changed","C) it's at 2 p.m.","D) it's tomorrow"],rep:'B',expl:"Moved to 3 p.m. = l'heure a changé."},
      {q:"'Take the elevator and turn left' gives:",opts:["A) a time","B) directions","C) a name","D) a price"],rep:'B',expl:"Directions = instructions de direction."},
      {q:"In TOEIC Listening, you can:",opts:["A) replay the audio","B) go back to questions","C) only listen once","D) read a transcript"],rep:'C',expl:"On ne peut écouter qu'une seule fois."},
      {q:"'Thanks for letting me know' means:",opts:["A) I don't care","B) Thank you for informing me","C) I already knew","D) I'm angry"],rep:'B',expl:"Merci de m'avoir informé."},
      {q:"Part 3 tests:",opts:["A) photos","B) question-response","C) conversations","D) announcements"],rep:'C',expl:"Part 3 = Conversations."},
      {q:"Part 4 tests:",opts:["A) photos","B) question-response","C) conversations","D) announcements"],rep:'D',expl:"Part 4 = Annonces."},
      {q:"The best way to improve listening is to:",opts:["A) avoid English","B) listen to English daily","C) only read","D) only write"],rep:'B',expl:"Écouter de l'anglais quotidiennement."}
    ]
  }
]

console.log('[AGTM B1 Modules] Loaded', window._AGTM_B1_MODS.length, 'B1 modules')

})()
