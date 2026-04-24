// Edge Function pour générer du contenu pédagogique via Anthropic Claude
// AGTM Digital Academy - Premium Elite Academy
// Version: 2.0.0 - Golden Prompt ESL Expert

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ============================================================
// GOLDEN PROMPT v2.0 - Ingénieur Pédagogique ESL Expert
// Format JSON strict pour intégration AGTM Digital Academy
// ============================================================
const SYSTEM_PROMPT = `Tu es un Ingénieur Pédagogique expert en apprentissage de l'anglais langue étrangère (ESL). Ta mission est de générer un module de cours structuré, percutant et prêt à l'emploi.

Tu dois TOUJOURS répondre avec un JSON valide et complet, sans texte avant ou après le JSON.

Structure JSON attendue (STRICTEMENT OBLIGATOIRE) :

{
  "Focus_Title": "Un titre accrocheur et professionnel (ex: 'Mastering the Present Perfect in Business Meetings')",
  
  "Learning_Objectives": [
    "Objectif mesurable 1 (ex: 'Maîtriser le Present Perfect dans un contexte de réunion')",
    "Objectif mesurable 2",
    "Objectif mesurable 3"
  ],
  
  "Core_Content": {
    "Introduction": {
      "text": "Texte d'introduction engageant (150-200 mots) qui contextualise le sujet pour un apprenant francophone",
      "key_concept": "Le concept central en une phrase percutante"
    },
    "Key_Grammar_Vocabulary": {
      "title": "Titre de la section grammaire/vocabulaire",
      "explanation": "Explication claire et structurée avec règles et exemples",
      "examples": [
        {"english": "Exemple en anglais", "french": "Traduction en français", "context": "Contexte d'utilisation"},
        {"english": "Exemple 2", "french": "Traduction 2", "context": "Contexte 2"},
        {"english": "Exemple 3", "french": "Traduction 3", "context": "Contexte 3"}
      ],
      "common_mistakes": [
        {"mistake": "Erreur courante des francophones", "correction": "Correction", "explanation": "Pourquoi c'est une erreur"}
      ]
    },
    "Practical_Application": {
      "title": "Mise en pratique",
      "activity_name": "Nom de l'activité",
      "duration": "15-20 minutes",
      "instructions": "Instructions étape par étape pour l'activité pratique",
      "example_dialogue": [
        {"speaker": "A", "text": "Exemple de dialogue en anglais"},
        {"speaker": "B", "text": "Réponse en anglais"}
      ]
    }
  },
  
  "Quiz_Data": [
    {
      "question": "Question 1 en anglais ou français",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "A",
      "explanation": "Explication pédagogique claire et encourageante"
    },
    {
      "question": "Question 2",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "B",
      "explanation": "Explication 2"
    },
    {
      "question": "Question 3",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "C",
      "explanation": "Explication 3"
    },
    {
      "question": "Question 4",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "A",
      "explanation": "Explication 4"
    },
    {
      "question": "Question 5",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "D",
      "explanation": "Explication 5"
    }
  ],
  
  "Elite_Tip": {
    "title": "Conseil Elite AGTM",
    "tip": "Un conseil stratégique premium pour mémoriser ou éviter l'erreur la plus courante",
    "mnemonic": "Astuce mnémotechnique ou technique de mémorisation (optionnel)",
    "pro_advice": "Conseil de professionnel pour utiliser ce point en situation réelle"
  },
  
  "metadata": {
    "level": "A1|A2|B1|B2|C1|C2",
    "theme": "grammaire|vocabulaire|business|communication|preparation_examen",
    "duration_minutes": 45,
    "keywords": ["mot-clé 1", "mot-clé 2", "mot-clé 3", "mot-clé 4", "mot-clé 5"]
  }
}

RÈGLES ABSOLUES :
1. Répondre UNIQUEMENT avec le JSON valide, sans markdown, sans texte avant/après
2. Adapter le contenu aux francophones (Côte d'Ivoire, Afrique francophone)
3. Ton : Professionnel, encourageant et premium
4. Exemples concrets du monde réel (business, quotidien, examens BEPC/BAC/TOEIC)
5. Le JSON doit être parseable directement par JSON.parse()
6. correct_answer doit être "A", "B", "C" ou "D" (lettre majuscule)
7. Minimum 3 objectifs d'apprentissage mesurables
8. Minimum 3 exemples dans Key_Grammar_Vocabulary
9. Minimum 1 erreur courante documentée`;

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Vérifier la clé API
    if (!ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY n'est pas configurée");
      return new Response(
        JSON.stringify({
          error: "Configuration manquante",
          message: "ANTHROPIC_API_KEY n'est pas configurée dans les variables d'environnement",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Récupérer les paramètres de la requête
    const { module_id, topic, level, theme, language = "fr" } = await req.json();

    // Validation des paramètres requis
    if (!module_id || !topic) {
      return new Response(
        JSON.stringify({
          error: "Paramètres manquants",
          message: "Les paramètres 'module_id' et 'topic' sont obligatoires",
          example: {
            module_id: "gram_b1_m1",
            topic: "Present Perfect vs Simple Past",
            level: "B1",
            theme: "grammaire",
            language: "fr"
          }
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Construire le prompt utilisateur
    const userPrompt = `Génère un module pédagogique ESL complet avec les spécifications suivantes :

Module ID: ${module_id}
Thème principal: ${topic}
Niveau CECRL: ${level || "B1"}
Catégorie: ${theme || "grammaire"}
Langue cible: Anglais
Langue d'instruction: ${language === "fr" ? "Français" : "Anglais"}
Public cible: Apprenants francophones (Côte d'Ivoire, Afrique francophone)

Contexte AGTM Digital Academy:
- Plateforme premium d'apprentissage de l'anglais
- Étudiants préparant BEPC, BAC, TOEIC, ou anglais professionnel
- Niveau de qualité "Elite Academy"

Génère maintenant le JSON complet selon la structure imposée. Commence directement par { sans aucun texte avant.`;

    console.log(`[AGTM] Génération module: ${module_id} - ${topic} (${level || "B1"})`);

    // Appeler l'API Anthropic
    const anthropicResponse = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error("[AGTM] Erreur API Anthropic:", errorText);
      throw new Error(`API Anthropic a échoué: ${anthropicResponse.status}`);
    }

    const anthropicData = await anthropicResponse.json();
    const generatedContent = anthropicData.content[0].text;

    console.log(`[AGTM] Contenu généré: ${generatedContent.length} caractères`);

    // Parser le JSON généré
    let parsedModule = null;
    let parseError = null;

    try {
      // Nettoyer le contenu si nécessaire (enlever markdown si présent)
      let cleanContent = generatedContent.trim();
      if (cleanContent.startsWith("```json")) {
        cleanContent = cleanContent.replace(/^```json\s*/, "").replace(/\s*```$/, "");
      } else if (cleanContent.startsWith("```")) {
        cleanContent = cleanContent.replace(/^```\s*/, "").replace(/\s*```$/, "");
      }
      
      parsedModule = JSON.parse(cleanContent);
      console.log("[AGTM] JSON parsé avec succès");
    } catch (e: unknown) {
      parseError = e instanceof Error ? e.message : String(e);
      console.warn("[AGTM] Impossible de parser le JSON:", parseError);
    }

    // Retourner la réponse structurée
    return new Response(
      JSON.stringify({
        success: true,
        module_id,
        topic,
        level: level || "B1",
        generated_at: new Date().toISOString(),
        content: parsedModule || {
          raw: generatedContent,
          parse_error: parseError,
          note: "Le contenu brut est disponible dans 'raw'. Vérifier le format JSON."
        },
        metadata: {
          level: level || "B1",
          theme: theme || "grammaire",
          language,
          word_count: generatedContent.split(/\s+/).length,
          model: "claude-3-5-sonnet-20241022",
          prompt_version: "2.0.0-golden-esl"
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("[AGTM] Erreur dans l'Edge Function:", err.message);
    return new Response(
      JSON.stringify({
        error: "Erreur interne",
        message: err.message,
        stack: (globalThis as Record<string, unknown>)["Deno"] !== undefined
          ? err.stack
          : undefined,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
