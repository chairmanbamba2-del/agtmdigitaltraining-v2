/* modules-agtm-a1.js — AGTM Academy A1 Modules v1.0
 * 20 modules complets A1 avec contenu riche et quiz (10 questions chacun)
 * Basé sur les PDFs AGTM : MonGuideBEPC, ObjectifBac, Listening/Speaking, Pronouns
 */
;(function () {
'use strict'

window._AGTM_A1_MODS = [
  // ── GRAMMAIRE A1 ──────────────────────────────────────────────────

  {
    id:'gram_a1_m5',
    titre:'Prépositions de Lieu et de Temps — IN, ON, AT',
    niveau:'A1',
    duree:25,
    objectifs:[
      "Utiliser IN, ON, AT pour le lieu",
      "Utiliser IN, ON, AT pour le temps",
      "Éviter les erreurs fréquentes de prépositions"
    ],
    contenu:[
      {type:'intro',texte:"Les prépositions IN, ON, AT sont parmi les mots les plus utilisés en anglais. Leur maîtrise est essentielle pour communiquer avec précision."},
      {type:'tableau',titre:'IN / ON / AT — Lieu',headers:["Préposition","Usage","Exemples"],rows:[
        ["IN","Espace fermé, pays, villes","in a room, in Abidjan, in Côte d'Ivoire, in Africa"],
        ["ON","Surface, rue, étage","on the table, on the wall, on the 2nd floor, on Boulevard de la République"],
        ["AT","Point précis, adresse complète","at the door, at school, at home, at 12 Rue des Fleurs"]
      ]},
      {type:'tableau',titre:'IN / ON / AT — Temps',headers:["Préposition","Usage","Exemples"],rows:[
        ["IN","Mois, années, saisons, périodes","in January, in 2025, in summer, in the morning"],
        ["ON","Jours, dates précises","on Monday, on 15 April, on Christmas Day, on my birthday"],
        ["AT","Heures, moments précis","at 8 o'clock, at noon, at midnight, at the weekend"]
      ]},
      {type:'regle',titre:'Exceptions importantes',texte:"• AT night (pas in night) • AT the weekend (UK) / ON the weekend (US)\n• IN the morning/afternoon/evening MAIS AT night\n• ON Monday morning (jour + moment = ON)"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"I was born in Abidjan in 1998.",fr:"Je suis né à Abidjan en 1998."},
        {en:"The meeting is on Friday at 9 a.m.",fr:"La réunion est vendredi à 9h."},
        {en:"She lives at 12 Rue des Fleurs, Cocody.",fr:"Elle habite au 12 rue des Fleurs, Cocody."},
        {en:"We study English in the morning.",fr:"Nous étudions l'anglais le matin."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Visualisez un entonnoir — IN (large : pays, années) → ON (moyen : jours, surfaces) → AT (précis : heures, points)."}
    ],
    quiz:[
      {q:"She was born ___ 1995.",opts:["A) on","B) in","C) at","D) to"],rep:'B',expl:"Années → IN."},
      {q:"The class is ___ Monday morning.",opts:["A) in","B) at","C) on","D) by"],rep:'C',expl:"Jours (même avec moment) → ON."},
      {q:"I'll meet you ___ 3 o'clock.",opts:["A) in","B) on","C) at","D) during"],rep:'C',expl:"Heures précises → AT."},
      {q:"He lives ___ Paris.",opts:["A) at","B) on","C) in","D) to"],rep:'C',expl:"Villes → IN."},
      {q:"The book is ___ the table.",opts:["A) in","B) at","C) on","D) under"],rep:'C',expl:"Surfaces → ON."},
      {q:"We sleep ___ night.",opts:["A) in","B) on","C) at","D) during"],rep:'C',expl:"Exception : AT night (pas in night)."},
      {q:"She arrived ___ the airport ___ 6 p.m.",opts:["A) in / at","B) at / at","C) at / in","D) on / at"],rep:'B',expl:"Point précis (airport) → AT. Heure → AT."},
      {q:"My birthday is ___ March 15th.",opts:["A) in","B) at","C) on","D) by"],rep:'C',expl:"Dates précises → ON."},
      {q:"The cat is hiding ___ the bed.",opts:["A) on","B) in","C) under","D) at"],rep:'C',expl:"Sous le lit → under."},
      {q:"We usually go to church ___ Sunday.",opts:["A) in","B) at","C) on","D) during"],rep:'C',expl:"Jours de la semaine → ON."}
    ]
  },

  {
    id:'gram_a1_m6',
    titre:'There is / There are — Existence et Présence',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Exprimer l'existence avec There is / There are",
      "Former les phrases négatives et interrogatives",
      "Utiliser some / any correctement"
    ],
    contenu:[
      {type:'intro',texte:"There is / There are sert à dire 'il y a' en anglais. C'est l'une des structures les plus utiles pour décrire des lieux, des situations et des quantités."},
      {type:'tableau',titre:'Structure complète',headers:["Forme","Singulier","Pluriel"],rows:[
        ["Affirmatif","There is (There's) a book.","There are three books."],
        ["Négatif","There isn't any water.","There aren't many students."],
        ["Interrogatif","Is there a bank nearby?","Are there any seats?"],
        ["Réponse courte","Yes, there is. / No, there isn't.","Yes, there are. / No, there aren't."]
      ]},
      {type:'regle',titre:'Some vs Any',texte:"• SOME → phrases affirmatives : There are some chairs.\n• ANY → questions et négations : Are there any chairs? / There aren't any chairs.\n• ANY avec singulier = 'n'importe quel' : Any student can answer."},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"There is a market near my house.",fr:"Il y a un marché près de chez moi."},
        {en:"There are many opportunities in Abidjan.",fr:"Il y a beaucoup d'opportunités à Abidjan."},
        {en:"Is there a hospital in this town?",fr:"Y a-t-il un hôpital dans cette ville ?"},
        {en:"There isn't any milk in the fridge.",fr:"Il n'y a pas de lait dans le réfrigérateur."}
      ]},
      {type:'conseil',texte:"Attention : Ne confondez pas There is (existence) et It is (description). There is a problem. (il y a un problème) vs It is a big problem. (c'est un grand problème)."}
    ],
    quiz:[
      {q:"___ a cat in the garden.",opts:["A) There are","B) There is","C) There be","D) Is there"],rep:'B',expl:"Singulier → There is."},
      {q:"___ many students in the classroom.",opts:["A) There is","B) There has","C) There are","D) There be"],rep:'C',expl:"Pluriel → There are."},
      {q:"___ any water in the bottle?",opts:["A) Is there","B) Are there","C) There is","D) There are"],rep:'A',expl:"Water = indénombrable (singulier) → Is there?"},
      {q:"There aren't ___ chairs in the room.",opts:["A) some","B) any","C) a","D) the"],rep:'B',expl:"Négation → any."},
      {q:"There are ___ apples on the table.",opts:["A) any","B) some","C) a","D) an"],rep:'B',expl:"Affirmation pluriel → some."},
      {q:"___ a pen and two books on the desk.",opts:["A) There are","B) There is","C) Are there","D) Is there"],rep:'B',expl:"Avec une liste, on suit le premier élément (a pen = singulier) → There is."},
      {q:"___ any mistakes in your exercise?",opts:["A) Is there","B) Are there","C) There is","D) There are"],rep:'B',expl:"Mistakes = pluriel → Are there?"},
      {q:"There is ___ milk in my coffee.",opts:["A) any","B) some","C) a","D) many"],rep:'B',expl:"Affirmation avec indénombrable → some."},
      {q:"There ___ no excuse for being late.",opts:["A) are","B) is","C) be","D) have"],rep:'B',expl:"No excuse = singulier → There is."},
      {q:"Are there ___ parks near here? — Yes, ___.",opts:["A) some / there are","B) any / there are","C) any / there is","D) some / there is"],rep:'B',expl:"Question → any. Réponse affirmative pluriel → there are."}
    ]
  },

  // ── VOCABULAIRE A1 ────────────────────────────────────────────────

  {
    id:'voc_a1_m3',
    titre:'La Nourriture et les Boissons',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Nommer les aliments et boissons courants",
      "Commander au restaurant en anglais",
      "Utiliser les quantificateurs (some, a lot of, a glass of)"
    ],
    contenu:[
      {type:'intro',texte:"La nourriture est un thème universel. Ce module vous donne le vocabulaire pour parler de vos plats préférés, commander au restaurant et discuter de cuisine."},
      {type:'lexique',titre:'Aliments de base',items:[
        {en:"rice",fr:"riz"},{en:"bread",fr:"pain"},{en:"plantain",fr:"banane plantain"},
        {en:"cassava",fr:"manioc"},{en:"yam",fr:"igname"},{en:"chicken",fr:"poulet"},
        {en:"fish",fr:"poisson"},{en:"beef",fr:"boeuf"},{en:"tomato",fr:"tomate"},
        {en:"onion",fr:"oignon"},{en:"mango",fr:"mangue"},{en:"pineapple",fr:"ananas"}
      ]},
      {type:'lexique',titre:'Boissons',items:[
        {en:"water",fr:"eau"},{en:"juice",fr:"jus"},{en:"milk",fr:"lait"},
        {en:"coffee",fr:"café"},{en:"tea",fr:"thé"},{en:"soda / soft drink",fr:"soda / boisson gazeuse"}
      ]},
      {type:'tableau',titre:'Quantificateurs',headers:["Quantité","Expression","Exemple"],rows:[
        ["Un verre de","a glass of","a glass of water"],
        ["Une tasse de","a cup of","a cup of coffee"],
        ["Un morceau de","a piece of","a piece of bread"],
        ["Un bol de","a bowl of","a bowl of rice"],
        ["Une assiette de","a plate of","a plate of attiéké"],
        ["Beaucoup de","a lot of / lots of","a lot of fruit"],
        ["Un peu de","a little / a few","a little sugar / a few eggs"]
      ]},
      {type:'exemples',titre:'Au restaurant',items:[
        {en:"Can I have a glass of water, please?",fr:"Puis-je avoir un verre d'eau, s'il vous plaît ?"},
        {en:"I'd like the chicken with rice.",fr:"Je voudrais le poulet avec du riz."},
        {en:"How much is the menu?",fr:"Combien coûte le menu ?"},
        {en:"The food is delicious!",fr:"La nourriture est délicieuse !"}
      ]},
      {type:'conseil',texte:"Goûts en anglais : delicious (délicieux), tasty (savoureux), spicy (épicé), sweet (sucré), bitter (amer), salty (salé), sour (acide)."}
    ],
    quiz:[
      {q:"What do you call 'eau' in English?",opts:["A) juice","B) water","C) milk","D) soda"],rep:'B',expl:"Eau = water."},
      {q:"I'd like ___ cup of coffee, please.",opts:["A) a","B) an","C) some","D) any"],rep:'A',expl:"Une tasse = a cup of."},
      {q:"Rice is ___ in Côte d'Ivoire.",opts:["A) a drink","B) a staple food","C) a fruit","D) a dessert"],rep:'B',expl:"Le riz est un aliment de base (staple food)."},
      {q:"Can I have ___ water?",opts:["A) a","B) an","C) some","D) many"],rep:'C',expl:"Water = indénombrable → some."},
      {q:"'Spicy' means:",opts:["A) sweet","B) salty","C) hot/épicé","D) bitter"],rep:'C',expl:"Spicy = épicé/pimenté."},
      {q:"A ___ of bread.",opts:["A) glass","B) cup","C) piece","D) bowl"],rep:'C',expl:"Un morceau de pain = a piece of bread."},
      {q:"My favourite ___ is attiéké with fish.",opts:["A) drink","B) dish","C) fruit","D) dessert"],rep:'B',expl:"Attiéké avec poisson = un plat (dish)."},
      {q:"She drinks coffee ___ breakfast.",opts:["A) in","B) on","C) at","D) for"],rep:'D',expl:"Pour le petit-déjeuner = for breakfast."},
      {q:"'Pineapple' in French is:",opts:["A) mangue","B) ananas","C) papaye","D) goyave"],rep:'B',expl:"Pineapple = ananas."},
      {q:"I'm ___ — I need something to eat.",opts:["A) thirsty","B) hungry","C) tired","D) full"],rep:'B',expl:"Qui a besoin de manger = hungry (affamé)."}
    ]
  },

  {
    id:'voc_a1_m4',
    titre:'Le Corps Humain et la Santé',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Nommer les parties du corps en anglais",
      "Décrire des symptômes et des douleurs",
      "Communiquer chez le médecin"
    ],
    contenu:[
      {type:'intro',texte:"Savoir parler de son corps et de sa santé en anglais est essentiel, surtout en voyage ou dans un contexte médical."},
      {type:'tableau',titre:'Les parties du corps',headers:["Anglais","Français","Anglais","Français"],rows:[
        ["head","tête","neck","cou"],["eye (eyes)","oeil (yeux)","arm","bras"],
        ["ear","oreille","hand","main"],["nose","nez","finger","doigt"],
        ["mouth","bouche","chest","poitrine"],["tooth (teeth)","dent(s)","back","dos"],
        ["hair","cheveux","knee","genou"],["leg","jambe","foot (feet)","pied(s)"]
      ]},
      {type:'lexique',titre:'Douleurs et symptômes',items:[
        {en:"headache",fr:"mal de tête"},{en:"fever",fr:"fièvre"},
        {en:"cough",fr:"toux"},{en:"cold",fr:"rhume"},
        {en:"stomachache",fr:"mal d'estomac"},{en:"sore throat",fr:"mal de gorge"},
        {en:"runny nose",fr:"nez qui coule"},{en:"backache",fr:"mal de dos"}
      ]},
      {type:'tableau',titre:'Chez le médecin',headers:["Anglais","Français"],rows:[
        ["I have a headache.","J'ai mal à la tête."],
        ["I need to see a doctor.","J'ai besoin de voir un médecin."],
        ["The doctor prescribed medicine.","Le médecin a prescrit des médicaments."],
        ["Take this medicine twice a day.","Prenez ce médicament deux fois par jour."],
        ["I feel better now.","Je me sens mieux maintenant."]
      ]},
      {type:'conseil',texte:"Pour une douleur : I have a + ache (headache, stomachache) OU My + body part + hurts (My head hurts)."}
    ],
    quiz:[
      {q:"The plural of 'tooth' is:",opts:["A) tooths","B) teeth","C) toothes","D) teeths"],rep:'B',expl:"Pluriel irrégulier : tooth → teeth."},
      {q:"I have a pain in my head. I have a ___.",opts:["A) stomachache","B) headache","C) backache","D) toothache"],rep:'B',expl:"Douleur à la tête = headache."},
      {q:"She has a high temperature. She has a ___.",opts:["A) cold","B) cough","C) fever","D) headache"],rep:'C',expl:"Température élevée = fever (fièvre)."},
      {q:"'Knee' in French is:",opts:["A) coude","B) genou","C) cheville","D) poignet"],rep:'B',expl:"Knee = genou."},
      {q:"I need to see a ___.",opts:["A) teacher","B) doctor","C) driver","D) farmer"],rep:'B',expl:"Pour un problème de santé → doctor."},
      {q:"My throat is painful. I have a sore ___.",opts:["A) head","B) throat","C) back","D) stomach"],rep:'B',expl:"Mal de gorge = sore throat."},
      {q:"'Fingers' are part of your ___.",opts:["A) leg","B) head","C) hand","D) foot"],rep:'C',expl:"Les doigts font partie de la main (hand)."},
      {q:"Take this medicine ___ a day.",opts:["A) twice","B) two","C) second","D) twice times"],rep:'A',expl:"Deux fois par jour = twice a day."},
      {q:"The plural of 'foot' is:",opts:["A) foots","B) feets","C) feet","D) footes"],rep:'C',expl:"Pluriel irrégulier : foot → feet."},
      {q:"I feel ___ now — thank you, doctor!",opts:["A) worse","B) better","C) sicker","D) painful"],rep:'B',expl:"Après traitement → feel better (se sentir mieux)."}
    ]
  },

  {
    id:'voc_a1_m5',
    titre:'Les Nombres, Dates et Heures',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Compter de 1 à 1 000 000 en anglais",
      "Dire la date et l'heure",
      "Utiliser les nombres ordinaux"
    ],
    contenu:[
      {type:'intro',texte:"Les nombres sont fondamentaux pour la vie quotidienne : acheter, donner son âge, dire l'heure, fixer un rendez-vous."},
      {type:'tableau',titre:'Nombres cardinaux essentiels',headers:["Nombre","Anglais","Ordinal","Anglais"],rows:[
        ["1","one","1er","first (1st)"],["2","two","2e","second (2nd)"],
        ["3","three","3e","third (3rd)"],["4","four","4e","fourth (4th)"],
        ["5","five","5e","fifth (5th)"],["10","ten","10e","tenth (10th)"],
        ["11","eleven","11e","eleventh (11th)"],["12","twelve","12e","twelfth (12th)"],
        ["20","twenty","20e","twentieth (20th)"],["100","one hundred","100e","hundredth"]
      ]},
      {type:'tableau',titre:"Dire l'heure",headers:["Heure","Anglais (UK)","Anglais (US)"],rows:[
        ["3:00","It's three o'clock.","It's three."],
        ["3:15","It's quarter past three.","It's three fifteen."],
        ["3:30","It's half past three.","It's three thirty."],
        ["3:45","It's quarter to four.","It's three forty-five."],
        ["3:50","It's ten to four.","It's three fifty."]
      ]},
      {type:'regle',titre:'Les mois et jours',texte:"• Mois : January, February, March, April, May, June, July, August, September, October, November, December\n• Jours : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n• Toujours avec une MAJUSCULE en anglais !"},
      {type:'exemples',titre:'Exemples en contexte',items:[
        {en:"My birthday is on the 3rd of March.",fr:"Mon anniversaire est le 3 mars."},
        {en:"The exam starts at quarter past eight.",fr:"L'examen commence à huit heures et quart."},
        {en:"There are about 27 million people in Côte d'Ivoire.",fr:"Il y a environ 27 millions de personnes en CI."},
        {en:"She arrived on Monday, 7th January 2025.",fr:"Elle est arrivée le lundi 7 janvier 2025."}
      ]}
    ],
    quiz:[
      {q:"How do you say 12 in English?",opts:["A) twelf","B) twelve","C) twelv","D) twelth"],rep:'B',expl:"12 = twelve."},
      {q:"What time is 4:30?",opts:["A) half past four","B) half to four","C) four and half","D) half four"],rep:'A',expl:"4h30 = half past four."},
      {q:"The 3rd ordinal is:",opts:["A) three","B) third","C) threeth","D) three-eth"],rep:'B',expl:"3e = third (irrégulier)."},
      {q:"'Wednesday' is spelled:",opts:["A) Wensday","B) Wednsday","C) Wednesday","D) Wenesday"],rep:'C',expl:"Wednesday — le 'd' est muet mais s'écrit."},
      {q:"What time is 6:15?",opts:["A) quarter to six","B) quarter past six","C) half past six","D) six and fifteen"],rep:'B',expl:"6h15 = quarter past six."},
      {q:"1,000 in English:",opts:["A) one thousand","B) one million","C) ten hundred","D) one kilo"],rep:'A',expl:"1 000 = one thousand."},
      {q:"'August' is the ___ month.",opts:["A) 6th","B) 7th","C) 8th","D) 9th"],rep:'C',expl:"August = août = 8e mois."},
      {q:"What time is 9:45?",opts:["A) quarter past nine","B) quarter to ten","C) half past nine","D) nine forty"],rep:'B',expl:"9h45 = quarter to ten (dans 15 min = 10h)."},
      {q:"The 1st of January is:",opts:["A) New Year's Day","B) Christmas","C) Easter","D) Independence Day"],rep:'A',expl:"1er janvier = New Year's Day."},
      {q:"21 in English:",opts:["A) twenty one","B) twenty-one","C) two one","D) twenty first"],rep:'B',expl:"21 = twenty-one (avec trait d'union)."}
    ]
  },

  {
    id:'voc_a1_m6',
    titre:'La Maison et la Vie Quotidienne',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Nommer les pièces et le mobilier",
      "Décrire sa routine quotidienne",
      "Utiliser les verbes du quotidien"
    ],
    contenu:[
      {type:'intro',texte:"Décrire sa maison et sa routine quotidienne sont des compétences essentielles pour les conversations de tous les jours."},
      {type:'tableau',titre:'Les pièces de la maison',headers:["Pièce","Anglais","Mobilier clé"],rows:[
        ["Salon","living room","sofa, armchair, TV, coffee table"],
        ["Chambre","bedroom","bed, wardrobe, desk, lamp"],
        ["Cuisine","kitchen","fridge, cooker, sink, cupboard"],
        ["Salle de bain","bathroom","shower, bath, mirror, sink"],
        ["Salle à manger","dining room","dining table, chairs"],
        ["Jardin","garden","plants, lawn, outdoor furniture"]
      ]},
      {type:'lexique',titre:'Verbes de la routine quotidienne',items:[
        {en:"wake up",fr:"se réveiller"},{en:"get up",fr:"se lever"},
        {en:"take a shower",fr:"prendre une douche"},{en:"get dressed",fr:"s'habiller"},
        {en:"have breakfast",fr:"prendre le petit-déjeuner"},{en:"go to work/school",fr:"aller au travail/à l'école"},
        {en:"have lunch",fr:"déjeuner"},{en:"come home",fr:"rentrer chez soi"},
        {en:"have dinner",fr:"dîner"},{en:"go to bed",fr:"se coucher"}
      ]},
      {type:'exemples',titre:'Ma routine',items:[
        {en:"I wake up at 6 a.m. every day.",fr:"Je me réveille à 6h tous les jours."},
        {en:"She takes a shower and gets dressed.",fr:"Elle prend une douche et s'habille."},
        {en:"We have dinner together at 8 p.m.",fr:"Nous dînons ensemble à 20h."},
        {en:"Our living room is large with comfortable sofas.",fr:"Notre salon est grand avec des canapés confortables."}
      ]},
      {type:'conseil',texte:"Home vs House : house = le bâtiment physique. home = le lieu de vie affectif. I live in a house. / I'm going home."}
    ],
    quiz:[
      {q:"Where do you sleep?",opts:["A) kitchen","B) bathroom","C) bedroom","D) living room"],rep:'C',expl:"On dort dans la chambre (bedroom)."},
      {q:"Where do you cook?",opts:["A) bedroom","B) kitchen","C) garden","D) bathroom"],rep:'B',expl:"On cuisine dans la cuisine (kitchen)."},
      {q:"I ___ up at 6 a.m. every day.",opts:["A) wake","B) sleep","C) go","D) eat"],rep:'A',expl:"Se réveiller = wake up."},
      {q:"The opposite of 'wake up' is:",opts:["A) get up","B) go to bed","C) get dressed","D) have breakfast"],rep:'B',expl:"L'opposé de se réveiller = se coucher (go to bed)."},
      {q:"'Fridge' is short for:",opts:["A) freezer","B) refrigerator","C) fresh food","D) food bridge"],rep:'B',expl:"Fridge = réfrigérateur (refrigerator)."},
      {q:"I ___ a shower every morning.",opts:["A) make","B) do","C) take","D) have"],rep:'C',expl:"Prendre une douche = take a shower."},
      {q:"The sofa is in the ___.",opts:["A) kitchen","B) bedroom","C) living room","D) bathroom"],rep:'C',expl:"Le canapé est dans le salon (living room)."},
      {q:"'Get dressed' means:",opts:["A) se déshabiller","B) s'habiller","C) se doucher","D) se coiffer"],rep:'B',expl:"Get dressed = s'habiller."},
      {q:"We eat dinner in the ___.",opts:["A) bathroom","B) dining room","C) garden","D) bedroom"],rep:'B',expl:"On dîne dans la salle à manger (dining room)."},
      {q:"'Wardrobe' in French is:",opts:["A) lit","B) armoire","C) bureau","D) table"],rep:'B',expl:"Wardrobe = armoire."}
    ]
  },

  // ── LISTENING & SPEAKING A1 ───────────────────────────────────────

  {
    id:'listen_a1_m1',
    titre:'Listening — Salutations et Présentations',
    niveau:'A1',
    duree:25,
    objectifs:[
      "Comprendre les salutations formelles et informelles",
      "Se présenter et présenter quelqu'un",
      "Répondre aux questions de base sur soi"
    ],
    contenu:[
      {type:'intro',texte:"Les salutations sont la première étape de toute conversation. Savoir saluer correctement en anglais est essentiel pour créer une bonne première impression."},
      {type:'tableau',titre:'Salutations courantes',headers:["Anglais","Français","Registre"],rows:[
        ["Hello / Hi","Bonjour / Salut","neutre / informel"],
        ["Good morning","Bonjour (matin)","formel"],
        ["Good afternoon","Bonjour (après-midi)","formel"],
        ["Good evening","Bonsoir","formel"],
        ["Good night","Bonne nuit","formel (au coucher)"],
        ["How are you?","Comment allez-vous ?","neutre"],
        ["How's it going?","Comment ça va ?","informel"],
        ["Nice to meet you","Enchanté","formel"]
      ]},
      {type:'tableau',titre:'Se présenter',headers:["Expression","Usage"],rows:[
        ["My name is... / I'm...","Donner son nom"],
        ["I'm from... / I come from...","Dire d'où on vient"],
        ["I'm ... years old.","Donner son âge"],
        ["I'm a student at AGTM Academy.","Dire ce qu'on fait"],
        ["I live in Abidjan.","Dire où on habite"],
        ["Nice to meet you! / Pleased to meet you.","Formule de politesse"]
      ]},
      {type:'exemples',titre:'Dialogue type',items:[
        {en:"— Hello! My name is Awa. What's your name?\n— Hi Awa! I'm Moussa. Nice to meet you.\n— Nice to meet you too, Moussa. Where are you from?\n— I'm from Bouaké. And you?\n— I'm from Abidjan. I'm a student at AGTM.",fr:"— Bonjour ! Je m'appelle Awa. Comment tu t'appelles ?\n— Salut Awa ! Je suis Moussa. Enchanté.\n— Enchantée aussi, Moussa. Tu viens d'où ?\n— Je viens de Bouaké. Et toi ?\n— Je viens d'Abidjan. Je suis étudiante à AGTM."}
      ]},
      {type:'conseil',texte:"En anglais, on ne dit pas 'I have 17 years' pour l'âge. On dit 'I am 17 years old' (JE SUIS âgé de 17 ans)."}
    ],
    quiz:[
      {q:"'Good evening' is used:",opts:["A) in the morning","B) in the afternoon","C) at night (before bed)","D) when you go to sleep"],rep:'C',expl:"Good evening = bonsoir (quand il fait nuit, avant de dormir)."},
      {q:"How do you say 'Enchanté'?",opts:["A) Nice to meet you","B) Nice to see you","C) Nice to know you","D) Nice to hear you"],rep:'A',expl:"Enchanté = Nice to meet you."},
      {q:"I ___ 18 years old.",opts:["A) have","B) am","C) do","D) make"],rep:'B',expl:"En anglais : I am ... years old (pas 'I have')."},
      {q:"'How's it going?' is:",opts:["A) formal","B) informal","C) very formal","D) rude"],rep:'B',expl:"How's it going? = informel (entre amis)."},
      {q:"Where are you ___?",opts:["A) come","B) from","C) to","D) at"],rep:'B',expl:"D'où viens-tu ? = Where are you from?"},
      {q:"'Good night' is used:",opts:["A) when you arrive","B) when you meet someone","C) when you go to bed","D) in the morning"],rep:'C',expl:"Good night = bonne nuit (au coucher)."},
      {q:"My name ___ Issa.",opts:["A) am","B) is","C) are","D) be"],rep:'B',expl:"My name = 3e personne singulier → is."},
      {q:"I come ___ Côte d'Ivoire.",opts:["A) to","B) in","C) from","D) at"],rep:'C',expl:"Je viens de = I come from."},
      {q:"'Hi' is more ___ than 'Hello'.",opts:["A) formal","B) informal","C) polite","D) serious"],rep:'B',expl:"Hi = plus informel que Hello."},
      {q:"— Nice to meet you. — ___",opts:["A) Nice to meet you too.","B) I'm fine.","C) Goodbye.","D) Thank you."],rep:'A',expl:"Réponse à 'Nice to meet you' = Nice to meet you too."}
    ]
  },

  {
    id:'listen_a1_m2',
    titre:'Listening — Routines Quotidiennes',
    niveau:'A1',
    duree:25,
    objectifs:[
      "Comprendre des descriptions de routines",
      "Identifier les heures et les activités",
      "Poser des questions sur les habitudes"
    ],
    contenu:[
      {type:'intro',texte:"Les routines quotidiennes sont un thème central du niveau A1. Ce module vous aide à comprendre et décrire ce que les gens font chaque jour."},
      {type:'lexique',titre:'Activités quotidiennes',items:[
        {en:"wake up at 6 a.m.",fr:"se réveiller à 6h"},{en:"brush my teeth",fr:"me brosser les dents"},
        {en:"take a shower",fr:"prendre une douche"},{en:"have breakfast",fr:"prendre le petit-déjeuner"},
        {en:"go to school/work",fr:"aller à l'école/au travail"},{en:"have lunch",fr:"déjeuner"},
        {en:"come back home",fr:"rentrer chez soi"},{en:"do my homework",fr:"faire mes devoirs"},
        {en:"watch TV",fr:"regarder la télé"},{en:"go to bed",fr:"se coucher"}
      ]},
      {type:'tableau',titre:'Adverbes de fréquence',headers:["Adverbe","Fréquence","Exemple"],rows:[
        ["always","100%","I always wake up early."],
        ["usually","80%","I usually take the bus."],
        ["often","60%","I often study in the evening."],
        ["sometimes","40%","I sometimes cook dinner."],
        ["rarely","15%","I rarely eat fast food."],
        ["never","0%","I never skip breakfast."]
      ]},
      {type:'exemples',titre:'Écoute — Ma journée typique',items:[
        {en:"I always wake up at 6 a.m. I brush my teeth and take a shower. Then I have breakfast — usually bread and coffee. I go to school at 7:30. After school, I come home at 4 p.m. I do my homework and sometimes watch TV. I go to bed at 10 p.m.",fr:"Je me réveille toujours à 6h. Je me brosse les dents et je prends une douche. Ensuite je prends le petit-déjeuner — généralement du pain et du café. Je vais à l'école à 7h30. Après l'école, je rentre à 16h. Je fais mes devoirs et je regarde parfois la télé. Je me couche à 22h."}
      ]},
      {type:'conseil',texte:"Position des adverbes de fréquence : AVANT le verbe principal (I always eat), mais APRÈS le verbe BE (She is always late)."}
    ],
    quiz:[
      {q:"I ___ eat breakfast. (100%)",opts:["A) usually","B) always","C) sometimes","D) rarely"],rep:'B',expl:"100% = always."},
      {q:"She ___ late for class. (0%)",opts:["A) always is","B) is never","C) never is","D) is always"],rep:'B',expl:"Avec BE, l'adverbe va APRÈS : is never."},
      {q:"What do you do ___ school?",opts:["A) after","B) before","C) during","D) at"],rep:'A',expl:"Après l'école = after school."},
      {q:"I ___ my teeth every morning.",opts:["A) wash","B) brush","C) clean","D) scrub"],rep:'B',expl:"Se brosser les dents = brush my teeth."},
      {q:"He ___ watches TV. (only 15% of the time)",opts:["A) always","B) often","C) sometimes","D) rarely"],rep:'D',expl:"15% = rarely."},
      {q:"I go to bed ___ 10 p.m.",opts:["A) in","B) on","C) at","D) during"],rep:'C',expl:"Heures → at."},
      {q:"'Have lunch' means:",opts:["A) prendre le petit-déjeuner","B) déjeuner","C) dîner","D) goûter"],rep:'B',expl:"Have lunch = déjeuner."},
      {q:"I ___ do my homework in the evening.",opts:["A) always","B) usually","C) often","D) sometimes"],rep:'B',expl:"80% = usually."},
      {q:"She ___ gets up at 5 a.m. (80%)",opts:["A) always","B) usually","C) sometimes","D) never"],rep:'B',expl:"80% = usually."},
      {q:"'Come back home' means:",opts:["A) aller à l'école","B) rentrer chez soi","C) sortir","D) partir"],rep:'B',expl:"Come back home = rentrer chez soi."}
    ]
  },

  {
    id:'speak_a1_m1',
    titre:'Speaking — Décrire les Gens et les Lieux',
    niveau:'A1',
    duree:25,
    objectifs:[
      "Décrire l'apparence physique d'une personne",
      "Décrire un lieu (maison, ville, école)",
      "Utiliser les adjectifs descriptifs correctement"
    ],
    contenu:[
      {type:'intro',texte:"Savoir décrire les gens et les lieux est une compétence clé pour la communication orale. Ce module vous donne les outils pour peindre des images avec des mots."},
      {type:'tableau',titre:'Apparence physique',headers:["Caractéristique","Adjectifs","Exemples"],rows:[
        ["Taille","tall, short, medium height","She is tall. / He is short."],
        ["Corpulence","thin, slim, fat, overweight, muscular","He is muscular. / She is slim."],
        ["Cheveux","long, short, curly, straight, blonde, brown, black","She has long curly hair."],
        ["Yeux","blue, brown, green, black, big, small","He has big brown eyes."],
        ["Âge","young, old, middle-aged","She is young. / He is middle-aged."],
        ["Beauté","beautiful, handsome, pretty, ugly","She is beautiful. / He is handsome."]
      ]},
      {type:'tableau',titre:'Décrire un lieu',headers:["Aspect","Adjectifs","Exemples"],rows:[
        ["Taille","big, large, small, tiny, huge","Abidjan is a big city."],
        ["État","clean, dirty, new, old, modern","The school is modern."],
        ["Ambiance","quiet, noisy, busy, peaceful","The market is very busy."],
        ["Couleur","colorful, bright, dark","The garden is colorful."],
        ["Confort","comfortable, uncomfortable, cozy","Our living room is cozy."]
      ]},
      {type:'exemples',titre:'Descriptions',items:[
        {en:"My teacher is tall and slim. She has long black hair and brown eyes. She is very kind.",fr:"Mon professeur est grand et mince. Elle a de longs cheveux noirs et des yeux marron. Elle est très gentille."},
        {en:"Abidjan is a large, modern city. It is very busy and colorful. The Plateau district has tall buildings.",fr:"Abidjan est une grande ville moderne. Elle est très animée et colorée. Le quartier du Plateau a de grands immeubles."}
      ]},
      {type:'conseil',texte:"En anglais, les adjectifs se placent AVANT le nom : a tall student (pas 'a student tall'). Ordre : Opinion → Taille → Âge → Forme → Couleur → Origine → Matière."}
    ],
    quiz:[
      {q:"She has long ___ hair.",opts:["A) black","B) blacks","C) a black","D) the black"],rep:'A',expl:"Adjectif de couleur avant le nom, sans article : long black hair."},
      {q:"He is very ___. He plays sports every day.",opts:["A) fat","B) muscular","C) short","D) old"],rep:'B',expl:"Qui fait du sport = muscular."},
      {q:"The market is very ___. There are many people.",opts:["A) quiet","B) busy","C) empty","D) peaceful"],rep:'B',expl:"Beaucoup de monde = busy (animé)."},
      {q:"'Handsome' describes:",opts:["A) a beautiful woman","B) a good-looking man","C) a big city","D) a small room"],rep:'B',expl:"Handsome = beau (pour un homme)."},
      {q:"The classroom is ___ and clean.",opts:["A) noisy","B) dirty","C) bright","D) old"],rep:'C',expl:"Bright = lumineux (positif avec clean)."},
      {q:"She ___ blue eyes.",opts:["A) is","B) has","C) have","D) does"],rep:'B',expl:"Avoir les yeux bleus = has blue eyes."},
      {q:"The village is ___ — no cars, no noise.",opts:["A) busy","B) noisy","C) peaceful","D) modern"],rep:'C',expl:"Sans bruit = peaceful (paisible)."},
      {q:"'Curly' hair means:",opts:["A) raide","B) bouclé","C) long","D) court"],rep:'B',expl:"Curly = bouclé/frisé."},
      {q:"The Basilica of Yamoussoukro is ___.",opts:["A) tiny","B) huge","C) dirty","D) old"],rep:'B',expl:"La Basilique est immense = huge."},
      {q:"He is ___ — only 20 years old.",opts:["A) old","B) middle-aged","C) young","D) elderly"],rep:'C',expl:"20 ans = young."}
    ]
  },

  // ── WRITING A1 ────────────────────────────────────────────────────

  {
    id:'write_a1_m1',
    titre:'Writing — Phrases Simples et Paragraphes',
    niveau:'A1',
    duree:30,
    objectifs:[
      "Construire des phrases simples correctes",
      "Former un paragraphe cohérent",
      "Utiliser la ponctuation de base"
    ],
    contenu:[
      {type:'intro',texte:"L'écriture en anglais commence par des phrases simples. Un paragraphe bien structuré suit une logique : idée principale + détails + conclusion."},
      {type:'tableau',titre:"Structure d'une phrase simple",headers:["Type","Structure","Exemple"],rows:[
        ["Affirmative","Sujet + Verbe + Complément","I study English every day."],
        ["Négative","Sujet + don't/doesn't + Verbe","She doesn't like coffee."],
        ["Interrogative","Do/Does + Sujet + Verbe ?","Do you speak French?"],
        ["Avec BE","Sujet + BE + Adjectif/Nom","He is a good student."]
      ]},
      {type:'regle',titre:'Règles de ponctuation',texte:"• Majuscule au début de chaque phrase.\n• Point (.) à la fin d'une phrase affirmative.\n• Point d'interrogation (?) à la fin d'une question.\n• Virgule (,) pour séparer des éléments dans une liste.\n• Apostrophe (') pour les contractions : I'm, don't, she's."},
      {type:'tableau',titre:"Structure d'un paragraphe",headers:["Partie","Rôle","Exemple"],rows:[
        ["Idée principale","De quoi parle le paragraphe","My daily routine is very regular."],
        ["Détail 1","Première information","I wake up at 6 a.m. every day."],
        ["Détail 2","Deuxième information","I go to school at 7:30."],
        ["Détail 3","Troisième information","After school, I do my homework."],
        ["Conclusion","Résumé ou sentiment","I like my routine because it helps me succeed."]
      ]},
      {type:'exemples',titre:'Paragraphe modèle',items:[
        {en:"My name is Fatou and I am 16 years old. I live in Abidjan with my family. I am a student at AGTM Academy. I study English because I want to travel and work in an international company. My favourite subject is English because it is interesting and useful. In my free time, I like reading and listening to music.",fr:"Je m'appelle Fatou et j'ai 16 ans. Je vis à Abidjan avec ma famille. Je suis étudiante à AGTM Academy. J'étudie l'anglais parce que je veux voyager et travailler dans une entreprise internationale. Ma matière préférée est l'anglais parce que c'est intéressant et utile. Pendant mon temps libre, j'aime lire et écouter de la musique."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Pour le BEPC et le BAC, écrivez toujours 3-5 phrases minimum. Utilisez des connecteurs simples : and, but, because, so, then."}
    ],
    quiz:[
      {q:"Which sentence is correct?",opts:["A) i study english.","B) I study English.","C) i Study english.","D) I study english."],rep:'B',expl:"Majuscule au début + nom de langue avec majuscule."},
      {q:"She ___ like coffee.",opts:["A) don't","B) doesn't","C) isn't","D) aren't"],rep:'B',expl:"She (3e pers.) → doesn't."},
      {q:"Which punctuation ends a question?",opts:["A) . (point)","B) ! (exclamation)","C) ? (interrogation)","D) , (virgule)"],rep:'C',expl:"Les questions se terminent par un point d'interrogation (?)."},
      {q:"I like reading ___ listening to music.",opts:["A) but","B) and","C) so","D) because"],rep:'B',expl:"Deux idées positives qui s'ajoutent → and."},
      {q:"I study English ___ I want to travel.",opts:["A) and","B) but","C) so","D) because"],rep:'D',expl:"On donne une raison → because."},
      {q:"Which is a correct negative sentence?",opts:["A) She not like tea.","B) She doesn't likes tea.","C) She doesn't like tea.","D) She don't like tea."],rep:'C',expl:"She + doesn't + verbe BASE."},
      {q:"The first word of a sentence must start with:",opts:["A) a lowercase letter","B) a capital letter","C) a number","D) a punctuation mark"],rep:'B',expl:"Toujours une majuscule au début."},
      {q:"I'm tired, ___ I will sleep.",opts:["A) but","B) because","C) so","D) and"],rep:'C',expl:"Conséquence → so."},
      {q:"'I don't' is the contraction of:",opts:["A) I does not","B) I do not","C) I am not","D) I did not"],rep:'B',expl:"I don't = I do not."},
      {q:"How many sentences minimum for a BEPC paragraph?",opts:["A) 1","B) 2","C) 3-5","D) 10"],rep:'C',expl:"3-5 phrases minimum pour un paragraphe BEPC."}
    ]
  },

  {
    id:'write_a1_m2',
    titre:'Writing — Emails Courts et Messages',
    niveau:'A1',
    duree:25,
    objectifs:[
      "Rédiger un email simple en anglais",
      "Utiliser les formules d'ouverture et de clôture",
      "Écrire un message SMS/WhatsApp en anglais"
    ],
    contenu:[
      {type:'intro',texte:"Les emails et messages sont omniprésents dans la vie quotidienne et professionnelle. Savoir les rédiger en anglais est une compétence pratique essentielle."},
      {type:'tableau',titre:"Structure d'un email simple",headers:["Partie","Expression","Exemple"],rows:[
        ["Objet (Subject)","About... / Regarding...","Subject: English class tomorrow"],
        ["Salutation","Dear [Name], / Hi [Name],","Dear Mr. Koné,"],
        ["Ouverture","I hope you are well.","I hope you are well."],
        ["Message principal","I am writing to... / I want to...","I am writing to tell you that..."],
        ["Clôture","Thank you. / Best regards,","Thank you. Best regards,"],
        ["Signature","[Your name]","Fatou Diallo"]
      ]},
      {type:'exemples',titre:'Email type — Absence',items:[
        {en:"Subject: Absence from class\n\nDear Mr. Koné,\n\nI hope you are well. I am writing to tell you that I cannot come to English class tomorrow because I am sick. I will come back on Monday. Please send me the homework.\n\nThank you.\nBest regards,\nAwa Traoré",fr:"Objet : Absence du cours\n\nCher M. Koné,\n\nJ'espère que vous allez bien. Je vous écris pour vous dire que je ne peux pas venir au cours d'anglais demain parce que je suis malade. Je reviendrai lundi. Merci de m'envoyer les devoirs.\n\nMerci.\nCordialement,\nAwa Traoré"}
      ]},
      {type:'tableau',titre:'Messages courts (SMS/WhatsApp)',headers:["Français","Anglais"],rows:[
        ["Salut ! Ça va ?","Hi! How are you?"],
        ["On se voit demain ?","See you tomorrow?"],
        ["Je suis en retard.","I'm running late."],
        ["OK, parfait !","OK, perfect!"],
        ["Merci beaucoup !","Thanks a lot!"],
        ["À tout à l'heure !","See you later!"]
      ]},
      {type:'conseil',texte:"Email formel : Dear + nom, Yours sincerely. Email informel : Hi + prénom, Best / Cheers. Ne mélangez jamais les registres !"}
    ],
    quiz:[
      {q:"What goes in the 'Subject' line?",opts:["A) Your name","B) A short description of the email topic","C) The date","D) A greeting"],rep:'B',expl:"L'objet décrit brièvement le sujet de l'email."},
      {q:"'Dear Mr. Koné,' is:",opts:["A) informal","B) formal","C) rude","D) a closing"],rep:'B',expl:"Dear + titre + nom = formel."},
      {q:"How do you close a formal email?",opts:["A) Cheers,","B) Bye,","C) Yours sincerely,","D) See you,"],rep:'C',expl:"Yours sincerely = formule de clôture formelle."},
      {q:"'I'm running late' means:",opts:["A) Je cours vite","B) Je suis en retard","C) Je cours tard","D) Je suis fatigué"],rep:'B',expl:"Running late = en retard."},
      {q:"'See you tomorrow!' is:",opts:["A) formal","B) informal","C) very formal","D) a subject line"],rep:'B',expl:"See you = informel."},
      {q:"'I hope you are well.' is used:",opts:["A) at the beginning","B) at the end","C) in the subject","D) in the signature"],rep:'A',expl:"Formule d'ouverture standard."},
      {q:"'Thanks a lot!' is:",opts:["A) formal","B) informal","C) rude","D) incorrect"],rep:'B',expl:"Thanks a lot = informel."},
      {q:"Which is correct for a formal email?",opts:["A) Hi boss,","B) Dear Mr. Director,","C) Hey you,","D) Yo!"],rep:'B',expl:"Dear + titre = formel."},
      {q:"'Please send me the homework.' is:",opts:["A) a greeting","B) a request","C) a closing","D) a subject"],rep:'B',expl:"C'est une demande (request)."},
      {q:"The signature of an email includes:",opts:["A) The subject","B) Your name","C) The date","D) The recipient's name"],rep:'B',expl:"La signature = votre nom."}
    ]
  },

  // ── CULTURE A1 ────────────────────────────────────────────────────

  {
    id:'cult_a1_m1',
    titre:'Culture — Les Pays Anglophones',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Identifier les principaux pays anglophones",
      "Connaître les capitales et symboles",
      "Comprendre la diversité de l'anglais"
    ],
    contenu:[
      {type:'intro',texte:"L'anglais est parlé dans plus de 50 pays. Connaître ces pays et leur culture enrichit votre apprentissage et votre compréhension du monde."},
      {type:'tableau',titre:'Les grands pays anglophones',headers:["Pays","Capitale","Population","Symbole"],rows:[
        ["United Kingdom (UK)","London","67 millions","Big Ben, Union Jack"],
        ["United States (USA)","Washington D.C.","331 millions","Statue of Liberty"],
        ["Canada","Ottawa","38 millions","Maple leaf (feuille d'érable)"],
        ["Australia","Canberra","25 millions","Kangaroo, Opera House"],
        ["Nigeria","Abuja","200+ millions","Green-white-green flag"],
        ["Ghana","Accra","31 millions","Black Star"],
        ["South Africa","Pretoria/Cape Town","60 millions","Rainbow Nation"],
        ["New Zealand","Wellington","5 millions","Kiwi, Silver Fern"]
      ]},
      {type:'regle',titre:'Variantes de l\'anglais',texte:"• British English (UK) : colour, centre, organise\n• American English (USA) : color, center, organize\n• Les deux sont corrects — choisissez une variante et restez cohérent !\n• L'anglais africain (Nigeria, Ghana, Kenya) a ses propres expressions."},
      {type:'exemples',titre:'Faits culturels',items:[
        {en:"English is the official language of 67 countries.",fr:"L'anglais est la langue officielle de 67 pays."},
        {en:"The UK has four nations: England, Scotland, Wales, Northern Ireland.",fr:"Le Royaume-Uni a quatre nations : Angleterre, Écosse, Pays de Galles, Irlande du Nord."},
        {en:"Nigeria is the most populous English-speaking country in Africa.",fr:"Le Nigeria est le pays anglophone le plus peuplé d'Afrique."},
        {en:"Côte d'Ivoire is a Francophone country, but English is taught in schools.",fr:"La CI est francophone, mais l'anglais est enseigné dans les écoles."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Regardez des films en anglais avec sous-titres anglais. C'est l'une des meilleures façons d'améliorer votre compréhension orale."}
    ],
    quiz:[
      {q:"What is the capital of the USA?",opts:["A) New York","B) Washington D.C.","C) Los Angeles","D) London"],rep:'B',expl:"La capitale des USA est Washington D.C."},
      {q:"'Big Ben' is in:",opts:["A) USA","B) Canada","C) UK","D) Australia"],rep:'C',expl:"Big Ben est à Londres (UK)."},
      {q:"Which country has the most English speakers in Africa?",opts:["A) Ghana","B) South Africa","C) Nigeria","D) Kenya"],rep:'C',expl:"Le Nigeria a 200+ millions d'habitants."},
      {q:"'Colour' (UK) vs 'Color' (US) — which is American?",opts:["A) Colour","B) Color","C) Both","D) Neither"],rep:'B',expl:"Color = orthographe américaine."},
      {q:"The symbol of Canada is:",opts:["A) Kangaroo","B) Maple leaf","C) Black Star","D) Kiwi"],rep:'B',expl:"La feuille d'érable (maple leaf) = symbole du Canada."},
      {q:"How many nations are in the UK?",opts:["A) 2","B) 3","C) 4","D) 5"],rep:'C',expl:"4 nations : England, Scotland, Wales, Northern Ireland."},
      {q:"English is spoken in ___ countries.",opts:["A) 10","B) 25","C) 50+","D) 67+"],rep:'D',expl:"67+ pays ont l'anglais comme langue officielle."},
      {q:"The capital of Australia is:",opts:["A) Sydney","B) Melbourne","C) Canberra","D) Perth"],rep:'C',expl:"Canberra est la capitale (pas Sydney !)."},
      {q:"'The Rainbow Nation' refers to:",opts:["A) USA","B) Nigeria","C) South Africa","D) Ghana"],rep:'C',expl:"South Africa = Rainbow Nation."},
      {q:"Côte d'Ivoire is primarily:",opts:["A) Anglophone","B) Francophone","C) Lusophone","D) Hispanophone"],rep:'B',expl:"La CI est francophone (langue française)."}
    ]
  },

  {
    id:'cult_a1_m2',
    titre:'Culture — La Côte d\'Ivoire en Anglais',
    niveau:'A1',
    duree:20,
    objectifs:[
      "Présenter la Côte d'Ivoire en anglais",
      "Parler de la géographie, culture et économie",
      "Utiliser le vocabulaire spécifique au pays"
    ],
    contenu:[
      {type:'intro',texte:"Savoir présenter son propre pays en anglais est une compétence essentielle. Ce module vous donne les mots et phrases pour parler de la Côte d'Ivoire avec fierté."},
      {type:'tableau',titre:'Faits essentiels sur la CI — Key Facts',headers:["Français","English"],rows:[
        ["Nom officiel","Republic of Côte d'Ivoire"],
        ["Capitale politique","Yamoussoukro"],
        ["Capitale économique","Abidjan"],
        ["Population","About 27 million people"],
        ["Langue officielle","French"],
        ["Monnaie","CFA franc (XOF)"],
        ["Indépendance","August 7, 1960"],
        ["Premier Président","Félix Houphouët-Boigny"]
      ]},
      {type:'lexique',titre:'Géographie et culture',items:[
        {en:"basin / river",fr:"fleuve / rivière"},{en:"forest",fr:"forêt"},
        {en:"savanna",fr:"savane"},{en:"lagoon",fr:"lagune"},
        {en:"mountain",fr:"montagne"},{en:"beach / coast",fr:"plage / côte"},
        {en:"market",fr:"marché"},{en:"mosque / church",fr:"mosquée / église"},
        {en:"traditional clothing",fr:"vêtements traditionnels"},{en:"music and dance",fr:"musique et danse"}
      ]},
      {type:'exemples',titre:'Présenter la CI',items:[
        {en:"Côte d'Ivoire is a country in West Africa. The capital is Yamoussoukro, but the biggest city is Abidjan.",fr:"La CI est un pays en Afrique de l'Ouest. La capitale est Yamoussoukro, mais la plus grande ville est Abidjan."},
        {en:"The country is famous for cocoa, coffee, and its diverse culture.",fr:"Le pays est célèbre pour le cacao, le café et sa culture diverse."},
        {en:"People speak French and many local languages like Baoulé, Dioula, and Bété.",fr:"Les gens parlent français et beaucoup de langues locales comme le Baoulé, le Dioula et le Bété."},
        {en:"The Basilica of Our Lady of Peace in Yamoussoukro is one of the largest churches in the world.",fr:"La Basilique Notre-Dame de la Paix à Yamoussoukro est l'une des plus grandes églises du monde."}
      ]},
      {type:'conseil',texte:"Au BEPC et au BAC, on vous demande souvent de parler de votre pays. Apprenez ce paragraphe par coeur !"}
    ],
    quiz:[
      {q:"The political capital of Côte d'Ivoire is:",opts:["A) Abidjan","B) Yamoussoukro","C) Bouaké","D) Korhogo"],rep:'B',expl:"Yamoussoukro = capitale politique."},
      {q:"The economic capital is:",opts:["A) Yamoussoukro","B) Abidjan","C) Daloa","D) San-Pédro"],rep:'B',expl:"Abidjan = capitale économique."},
      {q:"Côte d'Ivoire is in ___ Africa.",opts:["A) East","B) North","C) West","D) South"],rep:'C',expl:"La CI est en Afrique de l'Ouest (West Africa)."},
      {q:"The country is famous for:",opts:["A) oil","B) cocoa and coffee","C) diamonds","D) gold"],rep:'B',expl:"Le cacao et le café sont les produits phares."},
      {q:"Independence Day is:",opts:["A) January 1","B) August 7","C) December 25","D) March 8"],rep:'B',expl:"7 août 1960 = Independence Day."},
      {q:"The currency is:",opts:["A) Euro","B) Dollar","C) CFA franc","D) Pound"],rep:'C',expl:"CFA franc (XOF)."},
      {q:"The first President was:",opts:["A) Alassane Ouattara","B) Henri Konan Bédié","C) Félix Houphouët-Boigny","D) Laurent Gbagbo"],rep:'C',expl:"Félix Houphouët-Boigny = 1er Président."},
      {q:"'Lagoon' in French is:",opts:["A) lac","B) lagune","C) rivière","D) océan"],rep:'B',expl:"Lagoon = lagune (la lagune Ébrié à Abidjan)."},
      {q:"Local languages include Baoulé, Dioula, and:",opts:["A) English","B) Bété","C) Arabic","D) Spanish"],rep:'B',expl:"Bété est une langue locale de la CI."},
      {q:"The Basilica of Yamoussoukro is one of the largest ___ in the world.",opts:["A) mosques","B) churches","C) schools","D) markets"],rep:'B',expl:"La Basilique = une église (church)."}
    ]
  },

  // ── EXAM PREP A1 ──────────────────────────────────────────────────

  {
    id:'exam_a1_m1',
    titre:'BEPC Prep — Reading Comprehension Basics',
    niveau:'A1',
    duree:30,
    objectifs:[
      "Comprendre la structure de la Part One (Reading) du BEPC",
      "Identifier les informations clés dans un texte",
      "Répondre aux questions de compréhension"
    ],
    contenu:[
      {type:'intro',texte:"La Part One du BEPC (Reading) vaut 8 points. Elle comprend un texte de 12-15 lignes suivi de questions de compréhension et de vocabulaire."},
      {type:'tableau',titre:'Stratégie de lecture',headers:["Étape","Action","Temps"],rows:[
        ["1","Lire les questions D'ABORD","2 min"],
        ["2","Lire le texte une première fois (compréhension globale)","5 min"],
        ["3","Relire le texte en cherchant les réponses","10 min"],
        ["4","Répondre aux questions de vocabulaire","8 min"],
        ["5","Vérifier les réponses","5 min"]
      ]},
      {type:'regle',titre:'Types de questions Reading',texte:"• True/False : Vrai ou Faux (justifiez avec le texte)\n• Wh- questions : Who, What, Where, When, Why, How\n• Vocabulary : Trouvez le synonyme/antonyme dans le texte\n• Reference : À quoi renvoie un pronom (he, it, they) ?"},
      {type:'exemples',titre:'Texte type BEPC',items:[
        {en:"Aminata is a 15-year-old student in Abidjan. She lives with her parents and her two younger brothers. Every morning, she wakes up at 5:30 a.m., takes a shower, and has breakfast. Then she takes the bus to school. Her favourite subject is English because she dreams of becoming a translator. After school, she helps her mother cook dinner and does her homework. On weekends, she visits her grandmother in the village.",fr:"Aminata est une élève de 15 ans à Abidjan. Elle vit avec ses parents et ses deux petits frères. Chaque matin, elle se réveille à 5h30, prend une douche et prend le petit-déjeuner. Ensuite elle prend le bus pour l'école. Sa matière préférée est l'anglais parce qu'elle rêve de devenir traductrice. Après l'école, elle aide sa mère à cuisiner le dîner et fait ses devoirs. Le week-end, elle rend visite à sa grand-mère au village."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Pour les questions True/False, citez TOUJOURS une phrase du texte comme justification. C'est obligatoire au BEPC !"}
    ],
    quiz:[
      {q:"What should you do FIRST in the Reading section?",opts:["A) Read the text","B) Read the questions","C) Write your answers","D) Check your work"],rep:'B',expl:"Lire les questions d'abord pour savoir quoi chercher."},
      {q:"'She dreams of becoming a translator.' What does 'translator' mean?",opts:["A) teacher","B) doctor","C) someone who translates languages","D) driver"],rep:'C',expl:"Translator = traducteur/traductrice."},
      {q:"What time does Aminata wake up?",opts:["A) 6:00 a.m.","B) 5:30 a.m.","C) 7:00 a.m.","D) 5:00 a.m."],rep:'B',expl:"Le texte dit : she wakes up at 5:30 a.m."},
      {q:"True or False: Aminata has one brother.",opts:["A) True","B) False — she has two brothers","C) False — she has no brothers","D) False — she has three brothers"],rep:'B',expl:"Le texte dit : her two younger brothers."},
      {q:"Why is English her favourite subject?",opts:["A) It's easy","B) She dreams of becoming a translator","C) Her teacher is nice","D) It's fun"],rep:'B',expl:"Le texte dit : because she dreams of becoming a translator."},
      {q:"'She helps her mother cook dinner.' 'She' refers to:",opts:["A) her mother","B) her grandmother","C) Aminata","D) her brother"],rep:'C',expl:"'She' = Aminata (le sujet de la phrase)."},
      {q:"Where does her grandmother live?",opts:["A) in Abidjan","B) at school","C) in the village","D) in the city"],rep:'C',expl:"Le texte dit : in the village."},
      {q:"What does Aminata do on weekends?",opts:["A) She studies","B) She visits her grandmother","C) She watches TV","D) She plays football"],rep:'B',expl:"On weekends, she visits her grandmother."},
      {q:"How many points is the Reading section worth?",opts:["A) 6 pts","B) 8 pts","C) 10 pts","D) 4 pts"],rep:'B',expl:"Part One (Reading) = 8 points."},
      {q:"For True/False questions, you must:",opts:["A) just write True or False","B) justify with a quote from the text","C) write a paragraph","D) translate the text"],rep:'B',expl:"Justifiez TOUJOURS avec une phrase du texte."}
    ]
  },

  {
    id:'exam_a1_m2',
    titre:'BEPC Prep — Grammar Exercises (Part Two)',
    niveau:'A1',
    duree:30,
    objectifs:[
      "Maîtriser les exercices de grammaire du BEPC",
      "Conjuguer les verbes aux temps demandés",
      "Transformer des phrases (actif/passif, direct/indirect)"
    ],
    contenu:[
      {type:'intro',texte:"La Part Two du BEPC (Language in Use) vaut 6 points. Elle teste votre maîtrise de la grammaire à travers des QCM, des textes à trous et des transformations."},
      {type:'tableau',titre:'Types d\'exercices fréquents',headers:["Type","Exemple","Points"],rows:[
        ["QCM grammatical","She ___ to school. (go/goes/going)","1-2 pts"],
        ["Texte à trous","Complétez avec le bon temps verbal","2 pts"],
        ["Transformation","Mettez à la voix passive / au discours indirect","1-2 pts"],
        ["Mots croisés / vocabulaire","Trouvez le synonyme/antonyme","1 pt"]
      ]},
      {type:'regle',titre:'Temps verbaux les plus testés',texte:"• Présent simple (habitudes, vérités générales)\n• Passé simple (actions terminées dans le passé)\n• Présent continu (actions en cours)\n• Futur avec will (décisions, promesses)\n• Verbes irréguliers (go→went, see→saw, take→took)"},
      {type:'exemples',titre:'Exercices types',items:[
        {en:"Exercise 1: Put the verb in the correct tense.\nShe ___ (go) to school every day. → goes\nYesterday, she ___ (go) to the market. → went\nRight now, she ___ (study) English. → is studying",fr:"Exercice 1 : Mettez le verbe au bon temps.\nElle va à l'école chaque jour. → goes\nHier, elle est allée au marché. → went\nEn ce moment, elle étudie l'anglais. → is studying"},
        {en:"Exercise 2: Transform to passive.\nThey build houses. → Houses are built.\nShe wrote a letter. → A letter was written.",fr:"Exercice 2 : Transformez au passif.\nIls construisent des maisons. → Des maisons sont construites.\nElle a écrit une lettre. → Une lettre a été écrite."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Apprenez 20 verbes irréguliers par semaine. La Part Two teste TOUJOURS les verbes irréguliers au passé simple."}
    ],
    quiz:[
      {q:"She ___ to school every day. (go)",opts:["A) go","B) goes","C) going","D) went"],rep:'B',expl:"Présent simple, 3e personne → goes."},
      {q:"Yesterday, they ___ football. (play)",opts:["A) play","B) plays","C) played","D) playing"],rep:'C',expl:"Passé simple → played (régulier)."},
      {q:"Look! The children ___ in the garden. (play)",opts:["A) play","B) plays","C) played","D) are playing"],rep:'D',expl:"'Look!' → action en cours → présent continu."},
      {q:"They build houses. → Houses ___ built.",opts:["A) is","B) are","C) were","D) be"],rep:'B',expl:"Présent passif pluriel → are built."},
      {q:"She ___ a letter last night. (write)",opts:["A) write","B) writes","C) wrote","D) written"],rep:'C',expl:"Passé simple de write → wrote (irrégulier)."},
      {q:"'I am happy,' she said. → She said she ___ happy.",opts:["A) is","B) was","C) were","D) am"],rep:'B',expl:"Discours indirect : present → past (is → was)."},
      {q:"He ___ not like coffee. (do)",opts:["A) do","B) does","C) did","D) doing"],rep:'B',expl:"Présent simple, 3e personne → does not."},
      {q:"If I ___ rich, I would travel. (be)",opts:["A) am","B) was","C) were","D) be"],rep:'C',expl:"Conditionnel type 2 → were (formel)."},
      {q:"She has ___ her homework. (finish)",opts:["A) finish","B) finishes","C) finished","D) finishing"],rep:'C',expl:"Present Perfect → have/has + participe passé."},
      {q:"The passive of 'They eat rice' is:",opts:["A) Rice is eaten.","B) Rice are eaten.","C) Rice was eaten.","D) Rice eaten."],rep:'A',expl:"Présent passif singulier → is eaten."}
    ]
  },

  {
    id:'exam_a1_m3',
    titre:'BEPC Prep — Writing Practice (Part Three)',
    niveau:'A1',
    duree:35,
    objectifs:[
      "Rédiger une lettre ou un dialogue de 10-12 lignes",
      "Structurer son écrit avec introduction, corps et conclusion",
      "Utiliser des connecteurs logiques simples"
    ],
    contenu:[
      {type:'intro',texte:"La Part Three du BEPC (Writing) vaut 6 points. Vous devez écrire un texte de 10-12 lignes sur un thème donné : lettre, dialogue, récit ou article."},
      {type:'tableau',titre:'Types d\'écriture au BEPC',headers:["Type","Structure","Exemple de sujet"],rows:[
        ["Lettre personnelle","Salutation → Corps → Clôture","Écrivez une lettre à un ami"],
        ["Dialogue","Personne A → Personne B → ...","Dialogue entre un élève et un professeur"],
        ["Récit narratif","Introduction → Événements → Conclusion","Racontez votre journée typique"],
        ["Article court","Titre → Introduction → Détails → Conclusion","Écrivez un article sur votre école"]
      ]},
      {type:'regle',titre:'Connecteurs essentiels pour le BEPC',texte:"• Addition : and, also, moreover\n• Opposition : but, however\n• Cause : because, since\n• Conséquence : so, therefore\n• Temps : first, then, after that, finally\n• Exemple : for example, for instance"},
      {type:'tableau',titre:'Grille de correction BEPC',headers:["Critère","Points","Conseil"],rows:[
        ["Contenu","2 pts","Répondez au sujet, 10-12 lignes minimum"],
        ["Grammaire","2 pts","Phrases correctes, temps verbaux appropriés"],
        ["Vocabulaire","1 pt","Mots variés et précis"],
        ["Organisation","1 pt","Paragraphes, connecteurs logiques"]
      ]},
      {type:'exemples',titre:'Modèle de lettre',items:[
        {en:"Dear friend,\n\nI hope you are well. I am writing to tell you about my new school. It is very nice and the teachers are kind. My favourite subject is English because it is interesting. I have many new friends and we study together after class.\n\nI miss you very much. Please write back soon.\n\nBest wishes,\nYour friend",fr:"Cher ami,\n\nJ'espère que tu vas bien. Je t'écris pour te parler de ma nouvelle école. Elle est très belle et les professeurs sont gentils. Ma matière préférée est l'anglais parce que c'est intéressant. J'ai beaucoup de nouveaux amis et nous étudions ensemble après les cours.\n\nTu me manques beaucoup. Écris-moi bientôt.\n\nMeilleures amitiés,\nTon ami"}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Comptez vos lignes ! 10 lignes minimum. Si vous écrivez moins, vous perdez des points automatiquement."}
    ],
    quiz:[
      {q:"How many lines minimum for BEPC Writing?",opts:["A) 5","B) 8","C) 10","D) 15"],rep:'C',expl:"10-12 lignes minimum."},
      {q:"How many points is the Writing section worth?",opts:["A) 4 pts","B) 6 pts","C) 8 pts","D) 10 pts"],rep:'B',expl:"Part Three (Writing) = 6 points."},
      {q:"Which connector shows opposition?",opts:["A) and","B) because","C) but","D) so"],rep:'C',expl:"But = mais (opposition)."},
      {q:"Which connector shows cause?",opts:["A) so","B) but","C) and","D) because"],rep:'D',expl:"Because = parce que (cause)."},
      {q:"'First, then, after that, finally' are:",opts:["A) cause connectors","B) time connectors","C) opposition connectors","D) addition connectors"],rep:'B',expl:"Ce sont des connecteurs de temps/séquence."},
      {q:"A personal letter starts with:",opts:["A) Dear [name],","B) To whom it may concern,","C) Subject:","D) Hello everyone,"],rep:'A',expl:"Lettre personnelle → Dear + nom."},
      {q:"How many criteria are in the BEPC Writing rubric?",opts:["A) 2","B) 3","C) 4","D) 5"],rep:'C',expl:"4 critères : Contenu, Grammaire, Vocabulaire, Organisation."},
      {q:"'Moreover' is a connector of:",opts:["A) opposition","B) addition","C) cause","D) time"],rep:'B',expl:"Moreover = de plus (addition)."},
      {q:"For a dialogue, you need:",opts:["A) one speaker","B) two or more speakers","C) no speakers","D) a narrator only"],rep:'B',expl:"Un dialogue nécessite au moins deux personnes."},
      {q:"The conclusion of a narrative should:",opts:["A) introduce new ideas","B) summarize or give a final thought","C) be very long","D) repeat the introduction"],rep:'B',expl:"La conclusion résume ou donne une réflexion finale."}
    ]
  },

  {
    id:'exam_a1_m4',
    titre:'BAC Prep — Text Analysis Basics',
    niveau:'A1',
    duree:35,
    objectifs:[
      "Identifier le type et le thème d'un texte",
      "Trouver l'idée principale et les idées secondaires",
      "Analyser le vocabulaire en contexte"
    ],
    contenu:[
      {type:'intro',texte:"Le BAC teste votre capacité à analyser des textes authentiques. Ce module vous donne les outils de base pour comprendre et commenter tout texte anglais."},
      {type:'tableau',titre:'Types de textes au BAC',headers:["Type","Caractéristiques","Indices"],rows:[
        ["Narratif","Raconte une histoire","Past tense, characters, plot"],
        ["Descriptif","Décrit une personne/lieu","Adjectives, spatial order"],
        ["Argumentatif","Défend une opinion","Connectors, examples, thesis"],
        ["Informatif","Donne des faits","Neutral tone, data, statistics"],
        ["Lettre","Communication écrite","Dear..., Yours sincerely"]
      ]},
      {type:'regle',titre:'Méthode d\'analyse en 4 étapes',texte:"1. IDENTIFIER : Type, thème, ton, public cible\n2. COMPRENDRE : Idée principale, idées secondaires\n3. ANALYSER : Vocabulaire, structures grammaticales, figures de style\n4. COMMENTER : Votre opinion personnelle (en anglais !)"},
      {type:'exemples',titre:'Analyse type',items:[
        {en:"Text: 'Education is the most powerful weapon which you can use to change the world.' — Nelson Mandela\n\nType: Argumentative (quote + opinion)\nTheme: The power of education\nTone: Inspiring, serious\nMain idea: Education can transform the world.",fr:"Texte : 'L'éducation est l'arme la plus puissante pour changer le monde.' — Nelson Mandela\n\nType : Argumentatif (citation + opinion)\nThème : Le pouvoir de l'éducation\nTon : Inspirant, sérieux\nIdée principale : L'éducation peut transformer le monde."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, citez TOUJOURS le texte pour justifier vos réponses. 'The author says...' est votre meilleur ami."}
    ],
    quiz:[
      {q:"A text that tells a story is:",opts:["A) descriptive","B) narrative","C) argumentative","D) informative"],rep:'B',expl:"Un texte qui raconte = narratif."},
      {q:"A text that defends an opinion is:",opts:["A) narrative","B) descriptive","C) argumentative","D) informative"],rep:'C',expl:"Un texte qui défend une opinion = argumentatif."},
      {q:"The 'tone' of a text refers to:",opts:["A) the length","B) the author's attitude","C) the number of paragraphs","D) the font size"],rep:'B',expl:"Le ton = l'attitude de l'auteur."},
      {q:"'Education is the most powerful weapon...' is:",opts:["A) a narrative","B) a quote","C) a dialogue","D) a poem"],rep:'B',expl:"C'est une citation (quote) de Nelson Mandela."},
      {q:"The main idea of a text is:",opts:["A) the first sentence","B) the most important point","C) the last word","D) the title"],rep:'B',expl:"L'idée principale = le point le plus important."},
      {q:"At the BAC, you should always:",opts:["A) translate the text","B) quote the text to justify","C) write in French","D) copy the text"],rep:'B',expl:"Citez le texte pour justifier vos réponses."},
      {q:"A descriptive text uses many:",opts:["A) verbs","B) adjectives","C) questions","D) numbers"],rep:'B',expl:"Un texte descriptif utilise beaucoup d'adjectifs."},
      {q:"'The author says...' is used to:",opts:["A) introduce a quote","B) end a paragraph","C) ask a question","D) give a title"],rep:'A',expl:"'The author says...' introduit une citation."},
      {q:"An informative text is usually:",opts:["A) emotional","B) neutral and factual","C) opinionated","D) fictional"],rep:'B',expl:"Un texte informatif est neutre et factuel."},
      {q:"The first step in text analysis is:",opts:["A) comment","B) identify","C) translate","D) summarize"],rep:'B',expl:"1ère étape : identifier (type, thème, ton)."}
    ]
  },

  {
    id:'exam_a1_m5',
    titre:'BAC Prep — Essay Writing',
    niveau:'A1',
    duree:35,
    objectifs:[
      "Structurer un essai en anglais (introduction, corps, conclusion)",
      "Utiliser des connecteurs logiques avancés",
      "Exprimer son opinion avec des arguments"
    ],
    contenu:[
      {type:'intro',texte:"L'essai (essay) est un exercice clé du BAC. Il demande une structure claire, des arguments solides et un vocabulaire varié."},
      {type:'tableau',titre:'Structure d\'un essai',headers:["Partie","Contenu","Connecteurs"],rows:[
        ["Introduction","Présenter le sujet + thèse","Nowadays, ... / It is often said that..."],
        ["Paragraphe 1","Argument 1 + exemple","First of all, ... / For example, ..."],
        ["Paragraphe 2","Argument 2 + exemple","Furthermore, ... / Moreover, ..."],
        ["Paragraphe 3","Contre-argument (optionnel)","However, ... / On the other hand, ..."],
        ["Conclusion","Résumé + opinion personnelle","In conclusion, ... / To sum up, ..."]
      ]},
      {type:'regle',titre:'Connecteurs pour l\'essai',texte:"• Introduction : Nowadays, It is widely believed that, In recent years\n• Addition : Furthermore, Moreover, In addition, Besides\n• Opposition : However, Nevertheless, On the other hand, Although\n• Exemple : For example, For instance, Such as\n• Conclusion : In conclusion, To sum up, All in all, Overall"},
      {type:'exemples',titre:'Essai type — L\'éducation',items:[
        {en:"Nowadays, education is considered essential for success. In my opinion, education opens many doors.\n\nFirst of all, education gives people knowledge and skills. For example, learning English allows you to work in international companies.\n\nFurthermore, education helps people think critically. Students who study different subjects develop a broader view of the world.\n\nHowever, some people say that experience is more important than education. While this is true in some cases, education provides a solid foundation.\n\nIn conclusion, I believe that education is the key to a better future.",fr:"Aujourd'hui, l'éducation est considérée comme essentielle pour réussir. À mon avis, l'éducation ouvre beaucoup de portes.\n\nD'abord, l'éducation donne des connaissances et des compétences. Par exemple, apprendre l'anglais permet de travailler dans des entreprises internationales.\n\nDe plus, l'éducation aide à penser de manière critique. Les étudiants qui étudient différentes matières développent une vision plus large du monde.\n\nCependant, certains disent que l'expérience est plus importante que l'éducation. Bien que ce soit vrai dans certains cas, l'éducation fournit une base solide.\n\nEn conclusion, je crois que l'éducation est la clé d'un avenir meilleur."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Au BAC, écrivez au moins 3 paragraphes. Utilisez 2-3 connecteurs par paragraphe. Relisez-vous pour corriger les erreurs de grammaire."}
    ],
    quiz:[
      {q:"The introduction of an essay should:",opts:["A) give your conclusion","B) present the topic and thesis","C) list examples","D) ask questions"],rep:'B',expl:"L'introduction présente le sujet et la thèse."},
      {q:"'Furthermore' is a connector of:",opts:["A) opposition","B) addition","C) conclusion","D) example"],rep:'B',expl:"Furthermore = de plus (addition)."},
      {q:"'On the other hand' shows:",opts:["A) agreement","B) addition","C) opposition","D) conclusion"],rep:'C',expl:"On the other hand = d'un autre côté (opposition)."},
      {q:"How many paragraphs minimum for a BAC essay?",opts:["A) 1","B) 2","C) 3","D) 5"],rep:'C',expl:"3 paragraphes minimum : intro, corps, conclusion."},
      {q:"'For instance' is used to:",opts:["A) conclude","B) give an example","C) oppose","D) introduce"],rep:'B',expl:"For instance = par exemple."},
      {q:"The conclusion should:",opts:["A) introduce new ideas","B) summarize and give final opinion","C) be very long","D) repeat the introduction exactly"],rep:'B',expl:"La conclusion résume et donne l'opinion finale."},
      {q:"'Nowadays' is used in:",opts:["A) the conclusion","B) the introduction","C) the middle","D) the title"],rep:'B',expl:"Nowadays = aujourd'hui (introduction)."},
      {q:"'In my opinion' expresses:",opts:["A) a fact","B) a personal view","C) a question","D) a command"],rep:'B',expl:"In my opinion = à mon avis (opinion personnelle)."},
      {q:"'Although' introduces:",opts:["A) agreement","B) a concession","C) a conclusion","D) an example"],rep:'B',expl:"Although = bien que (concession)."},
      {q:"'To sum up' means:",opts:["A) to add more","B) to summarize","C) to oppose","D) to question"],rep:'B',expl:"To sum up = pour résumer."}
    ]
  },

  {
    id:'exam_a1_m6',
    titre:'TOEIC Prep — Business English Basics',
    niveau:'A1',
    duree:30,
    objectifs:[
      "Comprendre le vocabulaire de base du monde professionnel",
      "Rédiger des emails professionnels simples",
      "Se présenter dans un contexte professionnel"
    ],
    contenu:[
      {type:'intro',texte:"Le TOEIC teste votre anglais professionnel. Même au niveau A1, vous pouvez commencer à apprendre le vocabulaire essentiel du monde du travail."},
      {type:'tableau',titre:'Vocabulaire professionnel de base',headers:["Anglais","Français","Exemple"],rows:[
        ["company / firm","entreprise","I work for a big company."],
        ["office","bureau","The office is on the 5th floor."],
        ["meeting","réunion","We have a meeting at 10 a.m."],
        ["manager","directeur","My manager is very supportive."],
        ["colleague","collègue","My colleagues are friendly."],
        ["salary","salaire","The salary is paid monthly."],
        ["interview","entretien","I have a job interview tomorrow."],
        ["resume / CV","CV","Please send your resume."],
        ["customer / client","client","The customer is always right."],
        ["product","produit","Our new product is very popular."]
      ]},
      {type:'tableau',titre:'Expressions professionnelles',headers:["Anglais","Français","Contexte"],rows:[
        ["I'm calling about...","Je vous appelle concernant...","Téléphone"],
        ["Could you please...","Pourriez-vous s'il vous plaît...","Demande polie"],
        ["I'd like to schedule...","Je voudrais planifier...","Rendez-vous"],
        ["Please find attached...","Veuillez trouver ci-joint...","Email"],
        ["Thank you for your time.","Merci de votre temps.","Clôture"],
        ["I look forward to hearing from you.","Dans l'attente de votre réponse.","Email formel"]
      ]},
      {type:'exemples',titre:'Se présenter professionnellement',items:[
        {en:"Good morning. My name is Koné Awa. I am a recent graduate from AGTM Academy. I am interested in the marketing position at your company. I have strong communication skills and I am fluent in French and English.",fr:"Bonjour. Je m'appelle Koné Awa. Je suis récemment diplômée de AGTM Academy. Je suis intéressée par le poste de marketing dans votre entreprise. J'ai de bonnes compétences en communication et je parle couramment français et anglais."}
      ]},
      {type:'conseil',texte:"Astuce AGTM : Le TOEIC a 2 parties (Listening + Reading). Commencez par le vocabulaire de base — il revient dans chaque examen !"}
    ],
    quiz:[
      {q:"A 'meeting' is:",opts:["A) a meal","B) a gathering for discussion","C) a holiday","D) a product"],rep:'B',expl:"Meeting = réunion."},
      {q:"'Please find attached...' is used in:",opts:["A) phone calls","B) emails","C) meetings","D) interviews"],rep:'B',expl:"Veuillez trouver ci-joint = dans un email."},
      {q:"A 'colleague' is:",opts:["A) a boss","B) a customer","C) a coworker","D) a client"],rep:'C',expl:"Colleague = collègue (coworker)."},
      {q:"'I look forward to hearing from you' means:",opts:["A) I'm waiting for your reply","B) I'm listening to music","C) I'm calling you","D) I'm meeting you"],rep:'A',expl:"Dans l'attente de votre réponse."},
      {q:"A 'resume' is:",opts:["A) a letter","B) a CV","C) a meeting","D) a product"],rep:'B',expl:"Resume = CV (curriculum vitae)."},
      {q:"'Could you please...' is:",opts:["A) rude","B) a polite request","C) a command","D) informal"],rep:'B',expl:"Could you please = demande polie."},
      {q:"The person who manages a team is the:",opts:["A) customer","B) manager","C) product","D) salary"],rep:'B',expl:"Manager = directeur/gestionnaire."},
      {q:"'Salary' is paid:",opts:["A) daily","B) weekly","C) monthly","D) yearly"],rep:'C',expl:"Le salaire est généralement payé mensuellement."},
      {q:"A 'customer' is:",opts:["A) someone who works","B) someone who buys","C) someone who manages","D) someone who teaches"],rep:'B',expl:"Customer = client (quelqu'un qui achète)."},
      {q:"'I am fluent in English' means:",opts:["A) I can't speak English","B) I speak English well","C) I'm learning English","D) I hate English"],rep:'B',expl:"Fluent = couramment (je parle bien)."}
    ]
  }
]

console.log('[AGTM A1 Modules] Loaded', window._AGTM_A1_MODS.length, 'A1 modules')

})()
