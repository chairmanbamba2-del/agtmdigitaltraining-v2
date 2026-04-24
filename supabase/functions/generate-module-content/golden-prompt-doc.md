# GOLDEN PROMPT v2.0 - Documentation Technique
## AGTM Digital Academy - Edge Function ESL Expert

**Version :** 2.0.0-golden-esl  
**Modèle IA :** claude-3-5-sonnet-20241022  
**Date :** 22 avril 2026

---

## 📋 DESCRIPTION

L'Edge Function `generate-module-content` utilise le **Golden Prompt v2.0** pour générer des modules pédagogiques ESL (English as a Second Language) structurés, prêts à l'emploi pour la plateforme AGTM Digital Academy.

---

## 🎯 FORMAT DE SORTIE JSON

La fonction retourne un JSON structuré avec les 5 champs obligatoires :

### 1. `Focus_Title` (string)
Titre accrocheur et professionnel du module.

**Exemple :**
```json
"Focus_Title": "Mastering the Present Perfect in Business Meetings"
```

### 2. `Learning_Objectives` (array)
3 objectifs d'apprentissage mesurables minimum.

**Exemple :**
```json
"Learning_Objectives": [
  "Maîtriser le Present Perfect dans un contexte de réunion professionnelle",
  "Distinguer le Present Perfect du Simple Past dans des situations concrètes",
  "Utiliser les marqueurs temporels appropriés (already, yet, just, ever, never)"
]
```

### 3. `Core_Content` (object)
Contenu principal divisé en 3 sections :

#### `Introduction`
- `text` : Texte d'introduction (150-200 mots)
- `key_concept` : Concept central en une phrase

#### `Key_Grammar_Vocabulary`
- `title` : Titre de la section
- `explanation` : Explication structurée
- `examples` : Tableau d'exemples (min. 3)
  - `english` : Exemple en anglais
  - `french` : Traduction française
  - `context` : Contexte d'utilisation
- `common_mistakes` : Erreurs courantes des francophones
  - `mistake` : L'erreur
  - `correction` : La correction
  - `explanation` : Pourquoi c'est une erreur

#### `Practical_Application`
- `title` : Titre de l'activité
- `activity_name` : Nom de l'activité
- `duration` : Durée estimée
- `instructions` : Instructions étape par étape
- `example_dialogue` : Dialogue exemple

### 4. `Quiz_Data` (array)
5 questions de quiz avec :
- `question` : Texte de la question
- `options` : 4 options ["Option A", "Option B", "Option C", "Option D"]
- `correct_answer` : "A", "B", "C" ou "D" (lettre majuscule)
- `explanation` : Explication pédagogique

### 5. `Elite_Tip` (object)
Conseil stratégique premium :
- `title` : Titre du conseil
- `tip` : Conseil principal
- `mnemonic` : Astuce mnémotechnique (optionnel)
- `pro_advice` : Conseil professionnel

### 6. `metadata` (object)
- `level` : Niveau CECRL (A1|A2|B1|B2|C1|C2)
- `theme` : Catégorie du module
- `duration_minutes` : Durée totale
- `keywords` : 5 mots-clés

---

## 🚀 UTILISATION

### Appel API

```javascript
const response = await fetch(
  'https://[PROJECT_REF].supabase.co/functions/v1/generate-module-content',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify({
      module_id: 'gram_b1_m1',
      topic: 'Present Perfect vs Simple Past',
      level: 'B1',
      theme: 'grammaire',
      language: 'fr'
    })
  }
);

const data = await response.json();
// data.content contient le module parsé
// data.content.Focus_Title, data.content.Quiz_Data, etc.
```

### Paramètres requis

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `module_id` | string | ✅ | Identifiant unique du module (ex: `gram_b1_m1`) |
| `topic` | string | ✅ | Thème principal du module |
| `level` | string | ❌ | Niveau CECRL (défaut: B1) |
| `theme` | string | ❌ | Catégorie (défaut: grammaire) |
| `language` | string | ❌ | Langue d'instruction (défaut: fr) |

### Conventions de nommage des `module_id`

```
[categorie]_[niveau]_m[numero]

Exemples :
- gram_a1_m1  → Grammaire A1 Module 1
- voc_b1_m3   → Vocabulaire B1 Module 3
- biz_b2_m1   → Business English B2 Module 1
- exam_b1_m2  → Préparation examen B1 Module 2
```

---

## 🔗 INTÉGRATION ENGLISH CORNER

Le `Quiz_Data` est directement compatible avec le composant English Corner :

```javascript
// Dans le dashboard, après génération :
const module = data.content;

// Afficher le titre
document.getElementById('cornerTitle').textContent = module.Focus_Title;

// Charger le quiz
const quizData = module.Quiz_Data.map((q, i) => ({
  id: i + 1,
  question: q.question,
  options: q.options,
  correct: q.correct_answer,  // "A", "B", "C" ou "D"
  explanation: q.explanation
}));

// Afficher les objectifs
module.Learning_Objectives.forEach(obj => {
  // Ajouter à la liste des objectifs
});

// Afficher le conseil Elite
const tip = module.Elite_Tip;
document.getElementById('eliteTip').textContent = tip.tip;
```

---

## 📊 STRUCTURE DE RÉPONSE COMPLÈTE

```json
{
  "success": true,
  "module_id": "gram_b1_m1",
  "topic": "Present Perfect vs Simple Past",
  "level": "B1",
  "generated_at": "2026-04-22T02:50:00.000Z",
  "content": {
    "Focus_Title": "...",
    "Learning_Objectives": [...],
    "Core_Content": {
      "Introduction": {...},
      "Key_Grammar_Vocabulary": {...},
      "Practical_Application": {...}
    },
    "Quiz_Data": [...],
    "Elite_Tip": {...},
    "metadata": {...}
  },
  "metadata": {
    "level": "B1",
    "theme": "grammaire",
    "language": "fr",
    "word_count": 1250,
    "model": "claude-3-5-sonnet-20241022",
    "prompt_version": "2.0.0-golden-esl"
  }
}
```

---

## ⚙️ DÉPLOIEMENT

```bash
# Déployer l'Edge Function sur Supabase
supabase functions deploy generate-module-content

# Configurer la clé API Anthropic
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

# Tester localement
supabase functions serve generate-module-content --env-file .env.local
```

---

## 🔒 SÉCURITÉ

- La clé `ANTHROPIC_API_KEY` est stockée dans les secrets Supabase
- CORS configuré pour accepter les requêtes du domaine AGTM
- Validation des paramètres d'entrée avant appel API
- Gestion des erreurs avec messages appropriés

---

## 📈 MÉTRIQUES DE QUALITÉ

Le Golden Prompt v2.0 garantit :
- ✅ JSON valide et parseable directement
- ✅ Minimum 3 objectifs mesurables
- ✅ Minimum 3 exemples bilingues
- ✅ Minimum 1 erreur courante documentée
- ✅ 5 questions de quiz avec explications
- ✅ Conseil Elite stratégique
- ✅ Contenu adapté aux francophones (Côte d'Ivoire)
- ✅ Ton professionnel et encourageant

---

*Documentation générée le 22/04/2026 - AGTM Digital Academy*
