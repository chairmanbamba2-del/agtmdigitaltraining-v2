-- ╔════════════════════════════════════════════════════════════════════════════╗
-- ║  AFRICA GLOBAL TRAINING (AGTM) — SCRIPT D'INSTALLATION COMPLET          ║
-- ║  Base de données pédagogique enrichie                                     ║
-- ║  Version 2.0 — 15 avril 2026                                             ║
-- ║                                                                           ║
-- ║  USAGE : psql -d agtm_db -f MASTER_INSTALL.sql                          ║
-- ║  OU copier-coller dans pgAdmin / DBeaver / Supabase SQL Editor           ║
-- ║                                                                           ║
-- ║  CONTENU :                                                                ║
-- ║    • 15 tables + index                                                    ║
-- ║    • 6 niveaux CECRL (A1→C2)                                             ║
-- ║    • 7 programmes, 25 catégories                                          ║
-- ║    • 98 modules (26 existants + 72 nouveaux)                              ║
-- ║    • 102 objectifs pédagogiques                                           ║
-- ║    • 3 tests de placement + 40 questions calibrées                        ║
-- ║    • 6 tests par niveau (A1→C2)                                           ║
-- ║    • 34 quiz complets (170 questions + 680 options)                       ║
-- ║    • 3 évaluations complètes (60 questions + 240 options)                 ║
-- ║    • Grille de scoring + fonctions PostgreSQL                             ║
-- ║                                                                           ║
-- ║  TOTAL : ~295 questions, ~985 options de réponse                          ║
-- ╚════════════════════════════════════════════════════════════════════════════╝

BEGIN;
-- Transaction : tout ou rien — si une erreur, rien n'est inséré


-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 1/9 : SCHÉMA DE LA BASE (15 tables + index)
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AFRICA GLOBAL TRAINING (AGTM) — SCHÉMA BASE DE DONNÉES PÉDAGOGIQUE
-- Version 2.0 — Enrichissement complet
-- Date : 15 avril 2026
-- ============================================================================
-- Ce script crée ou met à jour les tables pour le contenu pédagogique.
-- Compatible PostgreSQL. Adapter les types si MySQL/SQLite.
-- ============================================================================

-- ============================================================================
-- TABLE 1 : PROGRAMMES (catégories principales)
-- ============================================================================
CREATE TABLE IF NOT EXISTS programmes (
    id              SERIAL PRIMARY KEY,
    code            VARCHAR(30) UNIQUE NOT NULL,    -- ex: 'general_english'
    name            VARCHAR(100) NOT NULL,           -- ex: 'Anglais Général'
    name_en         VARCHAR(100),                    -- ex: 'General English'
    description     TEXT,
    icon            VARCHAR(50),                     -- ex: 'book', 'briefcase'
    color           VARCHAR(7),                      -- ex: '#4CAF50'
    sort_order      INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 2 : CATÉGORIES (sous-domaines d'un programme)
-- ============================================================================
CREATE TABLE IF NOT EXISTS categories (
    id              SERIAL PRIMARY KEY,
    programme_id    INT REFERENCES programmes(id) ON DELETE CASCADE,
    code            VARCHAR(30) UNIQUE NOT NULL,
    name            VARCHAR(100) NOT NULL,
    name_en         VARCHAR(100),
    description     TEXT,
    icon            VARCHAR(50),
    sort_order      INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 3 : NIVEAUX CECRL
-- ============================================================================
CREATE TABLE IF NOT EXISTS levels (
    id              SERIAL PRIMARY KEY,
    code            VARCHAR(2) UNIQUE NOT NULL,      -- A1, A2, B1, B2, C1, C2
    name            VARCHAR(50) NOT NULL,             -- Débutant, Élémentaire...
    name_en         VARCHAR(50),
    description     TEXT,
    color           VARCHAR(7),
    sort_order      INT NOT NULL,
    min_score       INT,                              -- score min pour ce niveau (placement)
    max_score       INT                               -- score max pour ce niveau
);

-- ============================================================================
-- TABLE 4 : MODULES (unités pédagogiques / cours)
-- ============================================================================
CREATE TABLE IF NOT EXISTS modules (
    id              SERIAL PRIMARY KEY,
    category_id     INT REFERENCES categories(id) ON DELETE CASCADE,
    level_id        INT REFERENCES levels(id),
    code            VARCHAR(50) UNIQUE NOT NULL,      -- ex: 'GRAM-A1-001'
    title           VARCHAR(200) NOT NULL,
    title_en        VARCHAR(200),
    description     TEXT,
    duration_minutes INT DEFAULT 30,
    sort_order      INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    is_free         BOOLEAN DEFAULT FALSE,            -- module gratuit/payant
    pdf_url         VARCHAR(500),                     -- lien vers le PDF du cours
    video_url       VARCHAR(500),                     -- lien vers vidéo optionnelle
    audio_url       VARCHAR(500),                     -- lien vers audio optionnel
    image_url       VARCHAR(500),                     -- image de couverture
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 5 : OBJECTIFS PÉDAGOGIQUES (par module)
-- ============================================================================
CREATE TABLE IF NOT EXISTS objectives (
    id              SERIAL PRIMARY KEY,
    module_id       INT REFERENCES modules(id) ON DELETE CASCADE,
    description     TEXT NOT NULL,                    -- ex: "Conjuguer TO BE au présent"
    description_en  TEXT,
    sort_order      INT DEFAULT 0
);

-- ============================================================================
-- TABLE 6 : QUIZ (quiz de fin de leçon — court, 5-10 questions)
-- ============================================================================
CREATE TABLE IF NOT EXISTS quizzes (
    id              SERIAL PRIMARY KEY,
    module_id       INT REFERENCES modules(id) ON DELETE CASCADE,
    title           VARCHAR(200) NOT NULL,
    description     TEXT,
    time_limit_sec  INT,                              -- durée max en secondes (NULL = illimité)
    pass_score      INT DEFAULT 60,                   -- % minimum pour réussir
    max_attempts    INT DEFAULT 3,                    -- tentatives max (NULL = illimité)
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 7 : ÉVALUATIONS (évaluation complète — 15-25 questions)
-- ============================================================================
CREATE TABLE IF NOT EXISTS evaluations (
    id              SERIAL PRIMARY KEY,
    module_id       INT REFERENCES modules(id) ON DELETE CASCADE,
    title           VARCHAR(200) NOT NULL,
    description     TEXT,
    question_count  INT DEFAULT 20,
    time_limit_sec  INT,
    pass_score      INT DEFAULT 50,
    public_slug     VARCHAR(100) UNIQUE,              -- pour lien public d'évaluation
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 8 : TESTS DE PLACEMENT
-- ============================================================================
CREATE TABLE IF NOT EXISTS placement_tests (
    id              SERIAL PRIMARY KEY,
    code            VARCHAR(30) UNIQUE NOT NULL,       -- 'placement_general', 'placement_business'
    title           VARCHAR(200) NOT NULL,
    description     TEXT,
    question_count  INT DEFAULT 40,
    time_limit_sec  INT DEFAULT 2400,                  -- 40 min par défaut
    public_slug     VARCHAR(100) UNIQUE,               -- ex: 'placement'
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 9 : TESTS PAR NIVEAU (entraînement)
-- ============================================================================
CREATE TABLE IF NOT EXISTS level_tests (
    id              SERIAL PRIMARY KEY,
    level_id        INT REFERENCES levels(id),
    programme_id    INT REFERENCES programmes(id),     -- optionnel : test spécifique à un programme
    title           VARCHAR(200) NOT NULL,
    description     TEXT,
    question_count  INT DEFAULT 20,
    time_limit_sec  INT DEFAULT 1200,
    public_slug     VARCHAR(100) UNIQUE,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 10 : QUESTIONS (table unifiée pour quiz, évaluations, tests)
-- ============================================================================
CREATE TABLE IF NOT EXISTS questions (
    id              SERIAL PRIMARY KEY,
    -- Polymorphisme : la question peut appartenir à un quiz, une évaluation,
    -- un test de placement ou un test par niveau
    quiz_id             INT REFERENCES quizzes(id) ON DELETE CASCADE,
    evaluation_id       INT REFERENCES evaluations(id) ON DELETE CASCADE,
    placement_test_id   INT REFERENCES placement_tests(id) ON DELETE CASCADE,
    level_test_id       INT REFERENCES level_tests(id) ON DELETE CASCADE,

    level_id        INT REFERENCES levels(id),         -- niveau CECRL de la question
    question_type   VARCHAR(20) NOT NULL DEFAULT 'mcq',
        -- 'mcq'           = Choix multiple (1 bonne réponse)
        -- 'mcq_multi'     = Choix multiple (plusieurs bonnes réponses)
        -- 'fill_blank'    = Compléter le trou
        -- 'true_false'    = Vrai/Faux
        -- 'matching'      = Associer (paires)
        -- 'ordering'      = Remettre dans l'ordre
        -- 'open_short'    = Réponse courte ouverte
        -- 'reading_comp'  = Compréhension de lecture (lié à un passage)

    question_text   TEXT NOT NULL,                      -- texte de la question
    question_text_en TEXT,                              -- version anglaise
    context_text    TEXT,                                -- texte de contexte (lecture, dialogue...)
    explanation     TEXT,                                -- explication de la bonne réponse
    explanation_en  TEXT,
    difficulty      INT DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 5),
    points          INT DEFAULT 1,
    sort_order      INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    -- Contrainte : au moins un FK renseigné
    CONSTRAINT chk_parent CHECK (
        quiz_id IS NOT NULL OR
        evaluation_id IS NOT NULL OR
        placement_test_id IS NOT NULL OR
        level_test_id IS NOT NULL
    )
);

-- ============================================================================
-- TABLE 11 : OPTIONS DE RÉPONSE
-- ============================================================================
CREATE TABLE IF NOT EXISTS answer_options (
    id              SERIAL PRIMARY KEY,
    question_id     INT REFERENCES questions(id) ON DELETE CASCADE,
    option_text     TEXT NOT NULL,
    option_text_en  TEXT,
    is_correct      BOOLEAN DEFAULT FALSE,
    sort_order      INT DEFAULT 0,
    match_pair      VARCHAR(100)                        -- pour type 'matching': la paire associée
);

-- ============================================================================
-- TABLE 12 : RÉSULTATS DE QUIZ (apprenant)
-- ============================================================================
CREATE TABLE IF NOT EXISTS quiz_results (
    id              SERIAL PRIMARY KEY,
    quiz_id         INT REFERENCES quizzes(id),
    learner_name    VARCHAR(100),
    learner_email   VARCHAR(200),
    score           INT,
    total           INT,
    percentage      DECIMAL(5,2),
    passed          BOOLEAN,
    attempt_number  INT DEFAULT 1,
    started_at      TIMESTAMP,
    completed_at    TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 13 : RÉSULTATS D'ÉVALUATION
-- ============================================================================
CREATE TABLE IF NOT EXISTS evaluation_results (
    id              SERIAL PRIMARY KEY,
    evaluation_id   INT REFERENCES evaluations(id),
    learner_name    VARCHAR(100),
    learner_email   VARCHAR(200),
    etablissement   VARCHAR(200),
    score           INT,
    total           INT,
    percentage      DECIMAL(5,2),
    appreciation    VARCHAR(50),                        -- Excellent, Bien, Passable, Insuffisant
    level_achieved  VARCHAR(2),
    completed_at    TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 14 : RÉSULTATS DE PLACEMENT
-- ============================================================================
CREATE TABLE IF NOT EXISTS placement_results (
    id              SERIAL PRIMARY KEY,
    placement_test_id INT REFERENCES placement_tests(id),
    candidat_name   VARCHAR(100),
    candidat_email  VARCHAR(200),
    etablissement   VARCHAR(200),
    score           INT,
    total           INT,
    percentage      DECIMAL(5,2),
    level_achieved  VARCHAR(2),                         -- niveau CECRL résultant
    certificate_url VARCHAR(500),
    completed_at    TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- TABLE 15 : RÉSULTATS DE TESTS PAR NIVEAU
-- ============================================================================
CREATE TABLE IF NOT EXISTS level_test_results (
    id              SERIAL PRIMARY KEY,
    level_test_id   INT REFERENCES level_tests(id),
    learner_name    VARCHAR(100),
    learner_email   VARCHAR(200),
    score           INT,
    total           INT,
    percentage      DECIMAL(5,2),
    passed          BOOLEAN,
    completed_at    TIMESTAMP DEFAULT NOW()
);

-- ============================================================================
-- INDEX POUR PERFORMANCE
-- ============================================================================
CREATE INDEX idx_modules_category ON modules(category_id);
CREATE INDEX idx_modules_level ON modules(level_id);
CREATE INDEX idx_questions_quiz ON questions(quiz_id);
CREATE INDEX idx_questions_evaluation ON questions(evaluation_id);
CREATE INDEX idx_questions_placement ON questions(placement_test_id);
CREATE INDEX idx_questions_level_test ON questions(level_test_id);
CREATE INDEX idx_questions_level ON questions(level_id);
CREATE INDEX idx_answer_options_question ON answer_options(question_id);
CREATE INDEX idx_evaluation_results_eval ON evaluation_results(evaluation_id);
CREATE INDEX idx_placement_results_test ON placement_results(placement_test_id);

-- ============================================================================
-- FIN DU SCHÉMA
-- ============================================================================

-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 2/9 : NIVEAUX CECRL + PROGRAMMES + CATÉGORIES
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — SEED DATA : Niveaux, Programmes, Catégories
-- ============================================================================

-- ============================================================================
-- NIVEAUX CECRL
-- ============================================================================
INSERT INTO levels (code, name, name_en, description, color, sort_order, min_score, max_score) VALUES
('A1', 'Débutant',             'Beginner',           'Peut comprendre et utiliser des expressions familières et quotidiennes.', '#4CAF50', 1, 0, 5),
('A2', 'Élémentaire',          'Elementary',          'Peut comprendre des phrases isolées et des expressions fréquemment utilisées.', '#8BC34A', 2, 6, 10),
('B1', 'Intermédiaire',        'Intermediate',        'Peut comprendre les points essentiels sur des sujets familiers.', '#FF9800', 3, 11, 15),
('B2', 'Intermédiaire avancé', 'Upper-Intermediate',  'Peut comprendre le contenu essentiel de sujets concrets ou abstraits.', '#FF5722', 4, 16, 20),
('C1', 'Avancé',               'Advanced',            'Peut comprendre une grande gamme de textes longs et exigeants.', '#9C27B0', 5, 21, 25),
('C2', 'Maîtrise',             'Mastery',             'Peut comprendre sans effort pratiquement tout ce qui est lu ou entendu.', '#E91E63', 6, 26, 30);

-- ============================================================================
-- PROGRAMMES
-- ============================================================================
INSERT INTO programmes (code, name, name_en, description, icon, color, sort_order) VALUES
('general_english',     'Anglais Général',                'General English',          'Cours de grammaire et vocabulaire pour tous niveaux.', 'book-open', '#3B82F6', 1),
('professional_english','Anglais Professionnel',           'Professional English',     'Anglais des affaires, correspondance, réunions, négociations.', 'briefcase', '#10B981', 2),
('reading_writing',     'Reading & Writing',              'Reading & Writing',        'Compréhension écrite et expression écrite structurée.', 'pencil', '#8B5CF6', 3),
('prep_toeic',          'Préparation TOEIC',              'TOEIC Preparation',        'Préparation complète au Test of English for International Communication.', 'award', '#F59E0B', 4),
('prep_toefl',          'Préparation TOEFL',              'TOEFL Preparation',        'Préparation au Test of English as a Foreign Language.', 'globe', '#EF4444', 5),
('prep_bepc',           'Préparation BEPC',               'BEPC Preparation',         'Préparation au Brevet d''Études du Premier Cycle – Côte d''Ivoire.', 'graduation-cap', '#06B6D4', 6),
('prep_bac',            'Préparation BAC',                'BAC Preparation',          'Préparation au Baccalauréat Anglais – Côte d''Ivoire.', 'graduation-cap', '#D946EF', 7);

-- ============================================================================
-- CATÉGORIES
-- ============================================================================

-- Anglais Général
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='general_english'), 'grammar',         'Grammaire',                  'Grammar',               'Règles grammaticales de base à avancé.', 'spell-check', 1),
((SELECT id FROM programmes WHERE code='general_english'), 'vocabulary',       'Vocabulaire',                'Vocabulary',            'Vocabulaire thématique par niveau.', 'book', 2),
((SELECT id FROM programmes WHERE code='general_english'), 'listening',        'Compréhension Orale',        'Listening',             'Exercices d''écoute et compréhension.', 'headphones', 3),
((SELECT id FROM programmes WHERE code='general_english'), 'pronunciation',    'Prononciation',              'Pronunciation',         'Phonétique, accent, intonation.', 'mic', 4);

-- Anglais Professionnel
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='professional_english'), 'business_comm',    'Communication Business',     'Business Communication', 'Emails, lettres, présentations.', 'mail', 1),
((SELECT id FROM programmes WHERE code='professional_english'), 'meetings_negoc',   'Réunions & Négociations',    'Meetings & Negotiations','Vocabulaire et stratégies de réunion.', 'users', 2),
((SELECT id FROM programmes WHERE code='professional_english'), 'industry_vocab',   'Vocabulaire Sectoriel',      'Industry Vocabulary',   'Finance, IT, Commerce, Logistique.', 'layers', 3);

-- Reading & Writing
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='reading_writing'), 'reading_comp',     'Compréhension Écrite',       'Reading Comprehension', 'Textes avec questions de compréhension.', 'file-text', 1),
((SELECT id FROM programmes WHERE code='reading_writing'), 'writing_skills',   'Expression Écrite',          'Writing Skills',        'Rédaction structurée : emails, essais, rapports.', 'edit', 2),
((SELECT id FROM programmes WHERE code='reading_writing'), 'essay_structure',  'Structure d''Essai',         'Essay Structure',       'Introduction, développement, conclusion.', 'align-left', 3);

-- Prépa TOEIC
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='prep_toeic'), 'toeic_listening',  'TOEIC Listening',            'TOEIC Listening',       'Parts 1-4 : Photos, Questions-Réponses, Conversations, Talks.', 'headphones', 1),
((SELECT id FROM programmes WHERE code='prep_toeic'), 'toeic_reading',    'TOEIC Reading',              'TOEIC Reading',         'Parts 5-7 : Incomplete Sentences, Text Completion, Reading Comprehension.', 'book-open', 2),
((SELECT id FROM programmes WHERE code='prep_toeic'), 'toeic_grammar',    'TOEIC Grammaire',            'TOEIC Grammar',         'Points grammaticaux clés testés au TOEIC.', 'check-circle', 3),
((SELECT id FROM programmes WHERE code='prep_toeic'), 'toeic_vocab',      'TOEIC Vocabulaire',          'TOEIC Vocabulary',      'Vocabulaire business fréquent au TOEIC.', 'bookmark', 4);

-- Prépa TOEFL
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='prep_toefl'), 'toefl_reading',    'TOEFL Reading',              'TOEFL Reading',         'Compréhension de textes académiques.', 'book-open', 1),
((SELECT id FROM programmes WHERE code='prep_toefl'), 'toefl_listening',  'TOEFL Listening',            'TOEFL Listening',       'Compréhension orale académique.', 'headphones', 2),
((SELECT id FROM programmes WHERE code='prep_toefl'), 'toefl_writing',    'TOEFL Writing',              'TOEFL Writing',         'Integrated Writing et Independent Writing.', 'edit', 3),
((SELECT id FROM programmes WHERE code='prep_toefl'), 'toefl_speaking',   'TOEFL Speaking',             'TOEFL Speaking',        'Tâches orales structurées.', 'mic', 4);

-- Prépa BEPC
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='prep_bepc'), 'bepc_reading',     'BEPC Compréhension',         'BEPC Reading',          'Compréhension de texte – épreuve BEPC.', 'file-text', 1),
((SELECT id FROM programmes WHERE code='prep_bepc'), 'bepc_grammar',     'BEPC Grammaire',             'BEPC Grammar',          'Grammaire ciblée BEPC Côte d''Ivoire.', 'check-circle', 2),
((SELECT id FROM programmes WHERE code='prep_bepc'), 'bepc_writing',     'BEPC Expression Écrite',     'BEPC Writing',          'Rédaction et expression écrite BEPC.', 'edit', 3);

-- Prépa BAC
INSERT INTO categories (programme_id, code, name, name_en, description, icon, sort_order) VALUES
((SELECT id FROM programmes WHERE code='prep_bac'), 'bac_reading',      'BAC Compréhension',          'BAC Reading',           'Compréhension de texte – épreuve BAC.', 'file-text', 1),
((SELECT id FROM programmes WHERE code='prep_bac'), 'bac_grammar',      'BAC Grammaire',              'BAC Grammar',           'Points grammaticaux clés du BAC.', 'check-circle', 2),
((SELECT id FROM programmes WHERE code='prep_bac'), 'bac_essay',        'BAC Dissertation',           'BAC Essay',             'Méthodologie de dissertation en anglais.', 'edit', 3),
((SELECT id FROM programmes WHERE code='prep_bac'), 'bac_translation',  'BAC Traduction (Thème/Version)', 'BAC Translation',   'Exercices de thème et version.', 'repeat', 4);

-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 3/9 : 98 MODULES (26 existants + 72 nouveaux)
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — SEED DATA : MODULES (existants + nouveaux)
-- ============================================================================
-- ★ = module existant (déjà dans l'app)
-- ☆ = nouveau module (enrichissement)
-- ============================================================================

-- ============================================================================
-- ANGLAIS GÉNÉRAL — GRAMMAIRE
-- ============================================================================

-- ★ Existants
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-001', 'Le Verbe TO BE – Présent', 'The Verb TO BE – Present', 'Conjugaison et utilisation du verbe TO BE au présent simple.', 20, 1),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-002', 'Le Présent Simple – Actions et habitudes', 'Present Simple – Actions & Habits', 'Formation et utilisation du présent simple pour les routines.', 25, 2),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-003', 'Les Articles – A, AN, THE', 'Articles – A, AN, THE', 'Utilisation correcte des articles définis et indéfinis.', 20, 3),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-001', 'Le Présent Continu – Actions en cours', 'Present Continuous – Ongoing Actions', 'Formation et utilisation du présent continu.', 25, 4),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-002', 'Le Passé Simple – Faits accomplis', 'Past Simple – Completed Actions', 'Verbes réguliers, irréguliers et utilisation du passé simple.', 30, 5),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-003', 'Les Modaux – Can, Must, Should', 'Modal Verbs – Can, Must, Should', 'Utilisation des verbes modaux de base.', 25, 6),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B1'), 'GRAM-B1-001', 'Present Perfect vs Passé Simple', 'Present Perfect vs Past Simple', 'Distinction et utilisation contextuelle des deux temps.', 35, 7),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B1'), 'GRAM-B1-002', 'La Voix Passive', 'The Passive Voice', 'Formation et utilisation de la voix passive à tous les temps.', 30, 8),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B2'), 'GRAM-B2-001', 'Les Conditionnels – Types 0 à 3 et Mixed', 'Conditionals – Types 0 to 3 & Mixed', 'Tous les types de conditionnels avec exemples contextuels.', 40, 9),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B2'), 'GRAM-B2-002', 'Le Discours Rapporté – Reported Speech', 'Reported Speech', 'Transformation du discours direct en indirect.', 35, 10),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='C1'), 'GRAM-C1-001', 'Structures Avancées – Inversions et Emphases', 'Advanced Structures – Inversions & Emphasis', 'Inversions, clivées, emphases stylistiques.', 40, 11);

-- ☆ NOUVEAUX modules grammaire
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
-- A1 compléments
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-004', 'Les Pronoms Personnels et Possessifs', 'Personal & Possessive Pronouns', 'I/me/my/mine – Tous les pronoms de base.', 20, 12),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-005', 'Les Prépositions de Lieu et de Temps', 'Prepositions of Place & Time', 'In, on, at, under, between – contextes de lieu et temps.', 20, 13),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A1'), 'GRAM-A1-006', 'There is / There are', 'There is / There are', 'Exprimer l''existence et la quantité.', 15, 14),
-- A2 compléments (très faible actuellement)
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-004', 'Le Futur – Will et Going to', 'Future – Will & Going to', 'Différence entre will et going to pour le futur.', 25, 15),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-005', 'Les Comparatifs et Superlatifs', 'Comparatives & Superlatives', 'Formation et utilisation des comparaisons.', 25, 16),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-006', 'Les Questions – Formation et Types', 'Questions – Formation & Types', 'Questions fermées, ouvertes, tags questions.', 25, 17),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='A2'), 'GRAM-A2-007', 'Les Adverbes de Fréquence et de Manière', 'Adverbs of Frequency & Manner', 'Always, usually, quickly, carefully – position et usage.', 20, 18),
-- B1 compléments
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B1'), 'GRAM-B1-003', 'Les Relatives – Who, Which, That, Where', 'Relative Clauses', 'Propositions relatives définies et non-définies.', 30, 19),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B1'), 'GRAM-B1-004', 'Le Gérondif et l''Infinitif', 'Gerunds & Infinitives', 'Verbes suivis du gérondif ou de l''infinitif.', 30, 20),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B1'), 'GRAM-B1-005', 'Used to / Would / Be used to', 'Used to / Would / Be used to', 'Exprimer les habitudes passées et l''adaptation.', 25, 21),
-- B2 compléments
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B2'), 'GRAM-B2-003', 'Les Phrasal Verbs Essentiels', 'Essential Phrasal Verbs', 'Les 50 phrasal verbs les plus fréquents, classés par thème.', 35, 22),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='B2'), 'GRAM-B2-004', 'Le Subjonctif et les Souhaits', 'Subjunctive & Wishes', 'I wish, If only, It''s time, Would rather.', 30, 23),
-- C1 compléments
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='C1'), 'GRAM-C1-002', 'Les Connecteurs Logiques Avancés', 'Advanced Linking Words', 'Nevertheless, notwithstanding, thereby – cohésion textuelle.', 35, 24),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='C1'), 'GRAM-C1-003', 'Le Style et le Registre', 'Style & Register', 'Adapter son anglais au contexte formel, informel, académique.', 30, 25),
-- C2
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='C2'), 'GRAM-C2-001', 'Nuances Idiomatiques et Registres Littéraires', 'Idiomatic Nuances & Literary Registers', 'Expressions idiomatiques, nuances de sens, registre littéraire.', 40, 26),
((SELECT id FROM categories WHERE code='grammar'), (SELECT id FROM levels WHERE code='C2'), 'GRAM-C2-002', 'Analyse Grammaticale de Textes Authentiques', 'Grammar Analysis of Authentic Texts', 'Décortiquer la grammaire dans des textes réels : presse, littérature.', 45, 27);

-- ============================================================================
-- ANGLAIS GÉNÉRAL — VOCABULAIRE
-- ============================================================================

-- ★ Existants
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-001', 'La Famille et les Relations', 'Family & Relationships', 'Vocabulaire de la famille et des liens familiaux.', 20, 1),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-002', 'Les Couleurs, Formes et Descriptions', 'Colors, Shapes & Descriptions', 'Vocabulaire descriptif de base.', 20, 2),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-003', 'Les Pronoms en Anglais – Partie 1', 'Pronouns in English – Part 1', 'Pronoms personnels, possessifs, démonstratifs.', 25, 3),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B1'), 'VOCAB-B1-001', 'Les Pronoms en Anglais – Partie 2', 'Pronouns in English – Part 2', 'Pronoms relatifs, réfléchis, indéfinis.', 25, 4),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B1'), 'VOCAB-B1-002', 'L''Environnement et l''Écologie', 'Environment & Ecology', 'Vocabulaire de l''environnement, du changement climatique.', 30, 5),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B1'), 'VOCAB-B1-003', 'La Technologie et le Monde Numérique', 'Technology & the Digital World', 'Vocabulaire tech, internet, réseaux sociaux.', 30, 6),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B2'), 'VOCAB-B2-001', 'Vocabulaire Académique et Thématique', 'Academic & Thematic Vocabulary', 'Vocabulaire académique : analyse, argumentation, recherche.', 35, 7);

-- ☆ NOUVEAUX modules vocabulaire
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-004', 'La Nourriture et les Boissons', 'Food & Drinks', 'Vocabulaire courant de l''alimentation.', 20, 8),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-005', 'Le Corps Humain et la Santé', 'The Human Body & Health', 'Parties du corps, symptômes, chez le médecin.', 20, 9),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A1'), 'VOCAB-A1-006', 'Les Nombres, Dates et Heures', 'Numbers, Dates & Time', 'Compter, lire l''heure, donner une date.', 15, 10),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A2'), 'VOCAB-A2-001', 'Les Vêtements et la Mode', 'Clothes & Fashion', 'Vocabulaire vestimentaire et achats.', 20, 11),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A2'), 'VOCAB-A2-002', 'Les Transports et les Voyages', 'Transport & Travel', 'Se déplacer, voyager, réserver.', 25, 12),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A2'), 'VOCAB-A2-003', 'La Maison et le Quotidien', 'Home & Daily Life', 'Pièces, meubles, tâches ménagères.', 20, 13),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='A2'), 'VOCAB-A2-004', 'Les Métiers et le Travail', 'Jobs & Work', 'Professions courantes, lieu de travail.', 20, 14),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B1'), 'VOCAB-B1-004', 'Les Émotions et les Sentiments', 'Emotions & Feelings', 'Exprimer des émotions complexes.', 25, 15),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B1'), 'VOCAB-B1-005', 'La Santé et le Bien-être', 'Health & Wellbeing', 'Médecine, mode de vie sain, santé mentale.', 25, 16),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B2'), 'VOCAB-B2-002', 'Les Médias et l''Information', 'Media & Information', 'Presse, fake news, journalisme.', 30, 17),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='B2'), 'VOCAB-B2-003', 'La Justice et les Droits', 'Justice & Rights', 'Vocabulaire juridique courant.', 30, 18),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='C1'), 'VOCAB-C1-001', 'Expressions Idiomatiques Avancées', 'Advanced Idioms & Expressions', 'Idiomes, proverbes, expressions figurées.', 35, 19),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='C1'), 'VOCAB-C1-002', 'Vocabulaire de la Recherche et de l''Argumentation', 'Research & Argumentation Vocabulary', 'Termes académiques, connecteurs, rhétorique.', 35, 20),
((SELECT id FROM categories WHERE code='vocabulary'), (SELECT id FROM levels WHERE code='C2'), 'VOCAB-C2-001', 'Nuances Lexicales et Synonymie Avancée', 'Lexical Nuances & Advanced Synonymy', 'Différences fines entre synonymes, collocations rares.', 40, 21);

-- ============================================================================
-- ANGLAIS PROFESSIONNEL — BUSINESS COMMUNICATION
-- ============================================================================

-- ★ Existants
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='business_comm'), (SELECT id FROM levels WHERE code='B1'), 'BUS-B1-001', 'La Correspondance Professionnelle', 'Professional Correspondence', 'Emails, lettres formelles, notes de service.', 35, 1),
((SELECT id FROM categories WHERE code='meetings_negoc'), (SELECT id FROM levels WHERE code='B2'), 'BUS-B2-001', 'Les Réunions et Négociations', 'Meetings & Negotiations', 'Vocabulaire et stratégies de réunion et négociation.', 40, 1),
((SELECT id FROM categories WHERE code='industry_vocab'), (SELECT id FROM levels WHERE code='B1'), 'BUS-B1-002', 'Les Incoterms – Commerce International', 'Incoterms – International Trade', 'Termes commerciaux internationaux (EXW, FOB, CIF...).', 35, 1);

-- ☆ NOUVEAUX modules business
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='business_comm'), (SELECT id FROM levels WHERE code='A2'), 'BUS-A2-001', 'Se Présenter en Contexte Professionnel', 'Introducing Yourself at Work', 'Salutations, titre, fonction, small talk.', 20, 2),
((SELECT id FROM categories WHERE code='business_comm'), (SELECT id FROM levels WHERE code='B1'), 'BUS-B1-003', 'Les Présentations Orales en Anglais', 'Oral Presentations in English', 'Structurer et délivrer une présentation.', 30, 3),
((SELECT id FROM categories WHERE code='business_comm'), (SELECT id FROM levels WHERE code='B2'), 'BUS-B2-002', 'L''Anglais du Téléphone et de la Vidéoconférence', 'Phone & Video Conference English', 'Expressions clés pour appels et visio.', 30, 2),
((SELECT id FROM categories WHERE code='meetings_negoc'), (SELECT id FROM levels WHERE code='B2'), 'BUS-B2-003', 'La Négociation Commerciale', 'Business Negotiation', 'Techniques, vocabulaire, jeux de rôle.', 40, 2),
((SELECT id FROM categories WHERE code='meetings_negoc'), (SELECT id FROM levels WHERE code='C1'), 'BUS-C1-001', 'Leadership et Communication Interculturelle', 'Leadership & Cross-Cultural Communication', 'Adapter son discours aux contextes multiculturels.', 40, 3),
((SELECT id FROM categories WHERE code='industry_vocab'), (SELECT id FROM levels WHERE code='B1'), 'BUS-B1-004', 'Vocabulaire Financier et Bancaire', 'Finance & Banking Vocabulary', 'Termes financiers, bancaires, comptables.', 30, 2),
((SELECT id FROM categories WHERE code='industry_vocab'), (SELECT id FROM levels WHERE code='B2'), 'BUS-B2-004', 'Vocabulaire IT et Tech', 'IT & Tech Vocabulary', 'Termes techniques, projets IT, méthodologies.', 30, 3),
((SELECT id FROM categories WHERE code='industry_vocab'), (SELECT id FROM levels WHERE code='B1'), 'BUS-B1-005', 'Vocabulaire des Ressources Humaines', 'HR Vocabulary', 'Recrutement, contrat, formation, évaluation.', 25, 4);

-- ============================================================================
-- READING & WRITING (ENTIÈREMENT NOUVEAU)
-- ============================================================================
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
-- Reading Comprehension
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='A1'), 'READ-A1-001', 'Lire un Texte Court – Panneaux et Messages', 'Reading Short Texts – Signs & Messages', 'Comprendre des messages simples, panneaux, étiquettes.', 20, 1),
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='A2'), 'READ-A2-001', 'Lire un Email ou une Annonce', 'Reading an Email or Notice', 'Comprendre des emails simples et des annonces.', 25, 2),
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='B1'), 'READ-B1-001', 'Comprendre un Article de Presse', 'Understanding a News Article', 'Identifier l''idée principale, les détails clés.', 30, 3),
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='B1'), 'READ-B1-002', 'Lire un Récit ou une Nouvelle', 'Reading a Short Story', 'Comprendre la trame narrative, les personnages.', 30, 4),
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='B2'), 'READ-B2-001', 'Analyse d''un Texte Argumentatif', 'Analyzing an Argumentative Text', 'Identifier thèse, arguments, contre-arguments.', 35, 5),
((SELECT id FROM categories WHERE code='reading_comp'), (SELECT id FROM levels WHERE code='C1'), 'READ-C1-001', 'Lecture Critique de Textes Académiques', 'Critical Reading of Academic Texts', 'Analyse critique, inférences, évaluation des sources.', 40, 6),

-- Writing Skills
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='A1'), 'WRITE-A1-001', 'Écrire des Phrases Simples', 'Writing Simple Sentences', 'Construire des phrases basiques et correctes.', 20, 1),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='A2'), 'WRITE-A2-001', 'Écrire un Message ou un Email Court', 'Writing a Short Message or Email', 'Rédiger un email informel ou un SMS.', 20, 2),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='B1'), 'WRITE-B1-001', 'Rédiger un Email Formel', 'Writing a Formal Email', 'Structure, formules de politesse, registre.', 30, 3),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='B1'), 'WRITE-B1-002', 'Rédiger un Paragraphe Structuré', 'Writing a Structured Paragraph', 'Topic sentence, supporting details, conclusion.', 25, 4),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='B2'), 'WRITE-B2-001', 'Rédiger un Essai Argumentatif', 'Writing an Argumentative Essay', 'Introduction, thèse, arguments, conclusion.', 40, 5),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='B2'), 'WRITE-B2-002', 'Rédiger un Rapport Professionnel', 'Writing a Professional Report', 'Structure, ton, recommandations.', 40, 6),
((SELECT id FROM categories WHERE code='writing_skills'), (SELECT id FROM levels WHERE code='C1'), 'WRITE-C1-001', 'Rédaction Académique – Articles et Mémoires', 'Academic Writing – Papers & Theses', 'Rédaction scientifique, citations, bibliographie.', 45, 7),

-- Essay Structure
((SELECT id FROM categories WHERE code='essay_structure'), (SELECT id FROM levels WHERE code='B1'), 'ESSAY-B1-001', 'Les Types d''Essais en Anglais', 'Types of Essays in English', 'Descriptif, narratif, argumentatif, comparatif.', 30, 1),
((SELECT id FROM categories WHERE code='essay_structure'), (SELECT id FROM levels WHERE code='B2'), 'ESSAY-B2-001', 'Construire une Introduction Percutante', 'Building a Strong Introduction', 'Hook, contexte, problématique, plan.', 25, 2),
((SELECT id FROM categories WHERE code='essay_structure'), (SELECT id FROM levels WHERE code='B2'), 'ESSAY-B2-002', 'Développer des Arguments Convaincants', 'Developing Convincing Arguments', 'PEEL method : Point, Evidence, Explain, Link.', 30, 3);

-- ============================================================================
-- PRÉPA TOEIC (compléments)
-- ============================================================================

-- ★ Existants
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='toeic_grammar'), (SELECT id FROM levels WHERE code='B1'), 'TOEIC-B1-001', 'TOEIC – Grammaire Essentielle (Nouns & Articles)', 'TOEIC – Essential Grammar (Nouns & Articles)', 'Noms, articles, déterminants testés au TOEIC.', 35, 1),
((SELECT id FROM categories WHERE code='toeic_grammar'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-B2-001', 'TOEIC – Temps Verbaux et Structure de Phrase', 'TOEIC – Verb Tenses & Sentence Structure', 'Tous les temps verbaux et structures TOEIC.', 40, 2);

-- ☆ NOUVEAUX modules TOEIC
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='toeic_listening'), (SELECT id FROM levels WHERE code='B1'), 'TOEIC-L-B1-001', 'TOEIC Listening Part 1 – Photographs', 'TOEIC Listening Part 1 – Photographs', 'Décrire des photos : stratégies et pièges.', 30, 1),
((SELECT id FROM categories WHERE code='toeic_listening'), (SELECT id FROM levels WHERE code='B1'), 'TOEIC-L-B1-002', 'TOEIC Listening Part 2 – Question-Response', 'TOEIC Listening Part 2 – Question-Response', 'Questions directes et indirectes.', 30, 2),
((SELECT id FROM categories WHERE code='toeic_listening'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-L-B2-001', 'TOEIC Listening Part 3 – Conversations', 'TOEIC Listening Part 3 – Conversations', 'Dialogues professionnels : comprendre le contexte.', 35, 3),
((SELECT id FROM categories WHERE code='toeic_listening'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-L-B2-002', 'TOEIC Listening Part 4 – Short Talks', 'TOEIC Listening Part 4 – Short Talks', 'Annonces, messages vocaux, discours courts.', 35, 4),
((SELECT id FROM categories WHERE code='toeic_reading'), (SELECT id FROM levels WHERE code='B1'), 'TOEIC-R-B1-001', 'TOEIC Reading Part 5 – Incomplete Sentences', 'TOEIC Reading Part 5 – Incomplete Sentences', 'Grammaire et vocabulaire en contexte.', 30, 1),
((SELECT id FROM categories WHERE code='toeic_reading'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-R-B2-001', 'TOEIC Reading Part 6 – Text Completion', 'TOEIC Reading Part 6 – Text Completion', 'Compléter des textes avec cohérence.', 30, 2),
((SELECT id FROM categories WHERE code='toeic_reading'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-R-B2-002', 'TOEIC Reading Part 7 – Reading Comprehension', 'TOEIC Reading Part 7 – Reading Comprehension', 'Textes simples et multiples, questions de détail.', 40, 3),
((SELECT id FROM categories WHERE code='toeic_vocab'), (SELECT id FROM levels WHERE code='B1'), 'TOEIC-V-B1-001', 'TOEIC Vocabulaire – Bureau et Administration', 'TOEIC Vocabulary – Office & Administration', 'Termes courants du monde du bureau.', 25, 1),
((SELECT id FROM categories WHERE code='toeic_vocab'), (SELECT id FROM levels WHERE code='B2'), 'TOEIC-V-B2-001', 'TOEIC Vocabulaire – Finance et Contrats', 'TOEIC Vocabulary – Finance & Contracts', 'Vocabulaire financier et contractuel.', 30, 2);

-- ============================================================================
-- PRÉPA TOEFL (ENTIÈREMENT NOUVEAU)
-- ============================================================================
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='toefl_reading'), (SELECT id FROM levels WHERE code='B2'), 'TOEFL-R-B2-001', 'TOEFL Reading – Stratégies de Lecture Rapide', 'TOEFL Reading – Skimming & Scanning Strategies', 'Techniques de lecture rapide pour textes académiques.', 35, 1),
((SELECT id FROM categories WHERE code='toefl_reading'), (SELECT id FROM levels WHERE code='C1'), 'TOEFL-R-C1-001', 'TOEFL Reading – Inférences et Vocabulaire en Contexte', 'TOEFL Reading – Inferences & Vocabulary in Context', 'Déduire le sens, comprendre les nuances.', 40, 2),
((SELECT id FROM categories WHERE code='toefl_listening'), (SELECT id FROM levels WHERE code='B2'), 'TOEFL-L-B2-001', 'TOEFL Listening – Conversations Académiques', 'TOEFL Listening – Academic Conversations', 'Comprendre des échanges entre étudiants et professeurs.', 35, 1),
((SELECT id FROM categories WHERE code='toefl_listening'), (SELECT id FROM levels WHERE code='C1'), 'TOEFL-L-C1-001', 'TOEFL Listening – Lectures Universitaires', 'TOEFL Listening – University Lectures', 'Comprendre des cours magistraux complexes.', 40, 2),
((SELECT id FROM categories WHERE code='toefl_writing'), (SELECT id FROM levels WHERE code='B2'), 'TOEFL-W-B2-001', 'TOEFL Writing – Integrated Task', 'TOEFL Writing – Integrated Task', 'Synthétiser lecture et écoute dans un essai.', 40, 1),
((SELECT id FROM categories WHERE code='toefl_writing'), (SELECT id FROM levels WHERE code='C1'), 'TOEFL-W-C1-001', 'TOEFL Writing – Independent Essay', 'TOEFL Writing – Independent Essay', 'Rédiger un essai structuré sur un sujet donné.', 40, 2),
((SELECT id FROM categories WHERE code='toefl_speaking'), (SELECT id FROM levels WHERE code='B2'), 'TOEFL-S-B2-001', 'TOEFL Speaking – Tâches Intégrées', 'TOEFL Speaking – Integrated Tasks', 'Résumer et commenter lecture + audio.', 30, 1),
((SELECT id FROM categories WHERE code='toefl_speaking'), (SELECT id FROM levels WHERE code='C1'), 'TOEFL-S-C1-001', 'TOEFL Speaking – Tâche Indépendante', 'TOEFL Speaking – Independent Task', 'Exprimer et défendre son opinion en 45 secondes.', 30, 2);

-- ============================================================================
-- PRÉPA BEPC (compléments)
-- ============================================================================

-- ★ Existants
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='bepc_reading'), (SELECT id FROM levels WHERE code='B1'), 'BEPC-B1-001', 'Structure du BEPC Anglais – Côte d''Ivoire', 'BEPC English Structure – Ivory Coast', 'Présentation détaillée de l''épreuve BEPC.', 30, 1),
((SELECT id FROM categories WHERE code='bepc_reading'), (SELECT id FROM levels WHERE code='B1'), 'BEPC-B1-002', 'BEPC Part One – Comprendre un Texte', 'BEPC Part One – Reading Comprehension', 'Méthode pour la compréhension de texte BEPC.', 35, 2);

-- ☆ NOUVEAUX modules BEPC
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='bepc_grammar'), (SELECT id FROM levels WHERE code='A2'), 'BEPC-A2-001', 'BEPC Grammaire – Temps de Base', 'BEPC Grammar – Basic Tenses', 'Présent simple, continu, passé simple pour le BEPC.', 30, 1),
((SELECT id FROM categories WHERE code='bepc_grammar'), (SELECT id FROM levels WHERE code='B1'), 'BEPC-B1-003', 'BEPC Grammaire – Structures Complexes', 'BEPC Grammar – Complex Structures', 'Passif, conditionnel, relatives pour le BEPC.', 30, 2),
((SELECT id FROM categories WHERE code='bepc_writing'), (SELECT id FROM levels WHERE code='A2'), 'BEPC-A2-002', 'BEPC Expression Écrite – La Lettre', 'BEPC Writing – The Letter', 'Rédiger une lettre simple selon le format BEPC.', 30, 1),
((SELECT id FROM categories WHERE code='bepc_writing'), (SELECT id FROM levels WHERE code='B1'), 'BEPC-B1-004', 'BEPC Expression Écrite – Le Dialogue', 'BEPC Writing – The Dialogue', 'Rédiger un dialogue structuré.', 25, 2);

-- ============================================================================
-- PRÉPA BAC (compléments)
-- ============================================================================

-- ★ Existant
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='bac_reading'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-001', 'Le BAC Anglais Côte d''Ivoire – Guide Expert', 'Ivory Coast BAC English – Expert Guide', 'Présentation complète de l''épreuve BAC.', 40, 1);

-- ☆ NOUVEAUX modules BAC
INSERT INTO modules (category_id, level_id, code, title, title_en, description, duration_minutes, sort_order) VALUES
((SELECT id FROM categories WHERE code='bac_reading'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-002', 'BAC Compréhension de Texte – Méthode', 'BAC Reading Comprehension – Method', 'Stratégies pour répondre aux questions de compréhension.', 35, 2),
((SELECT id FROM categories WHERE code='bac_grammar'), (SELECT id FROM levels WHERE code='B1'), 'BAC-B1-001', 'BAC Grammaire – Les Essentiels', 'BAC Grammar – Essentials', 'Tous les points grammaticaux récurrents au BAC.', 35, 1),
((SELECT id FROM categories WHERE code='bac_grammar'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-003', 'BAC Grammaire – Structures Avancées', 'BAC Grammar – Advanced Structures', 'Conditionnels, relatifs, discours rapporté au BAC.', 35, 2),
((SELECT id FROM categories WHERE code='bac_essay'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-004', 'BAC Dissertation – Méthodologie Complète', 'BAC Essay – Complete Methodology', 'Plan, introduction, développement, conclusion.', 40, 1),
((SELECT id FROM categories WHERE code='bac_essay'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-005', 'BAC Dissertation – Sujets Types et Corrigés', 'BAC Essay – Sample Topics & Corrections', 'Entraînement sur des sujets d''examen réels.', 45, 2),
((SELECT id FROM categories WHERE code='bac_translation'), (SELECT id FROM levels WHERE code='B1'), 'BAC-B1-002', 'BAC Thème – Français vers Anglais', 'BAC Translation – French to English', 'Techniques de traduction du français à l''anglais.', 30, 1),
((SELECT id FROM categories WHERE code='bac_translation'), (SELECT id FROM levels WHERE code='B2'), 'BAC-B2-006', 'BAC Version – Anglais vers Français', 'BAC Translation – English to French', 'Techniques de traduction de l''anglais au français.', 30, 2);

-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 4/9 : OBJECTIFS PÉDAGOGIQUES (102 objectifs)
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — OBJECTIFS PÉDAGOGIQUES (auto-généré)
-- ============================================================================

INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-001'), 'Conjuguer le verbe TO BE au présent (am, is, are)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-001'), 'Construire des phrases affirmatives, négatives et interrogatives avec TO BE', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-001'), 'Utiliser TO BE pour décrire des personnes et des situations', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-002'), 'Conjuguer les verbes au présent simple (forme affirmative, négative, interrogative)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-002'), 'Ajouter le -s/-es à la 3e personne du singulier', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-002'), 'Utiliser le présent simple pour exprimer des habitudes et des faits', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-003'), 'Distinguer les articles indéfinis (a, an) et l''article défini (the)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-003'), 'Utiliser ''a'' devant une consonne et ''an'' devant une voyelle', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-003'), 'Savoir quand omettre l''article (noms abstraits, généralisations)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-004'), 'Identifier les pronoms personnels sujets et compléments', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-004'), 'Utiliser les adjectifs possessifs (my, your, his, her...)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-004'), 'Distinguer possessif et pronom personnel', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-005'), 'Utiliser in, on, at pour le lieu', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-005'), 'Utiliser in, on, at pour le temps', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-005'), 'Maîtriser under, between, next to, behind', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-006'), 'Utiliser ''there is'' avec le singulier', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-006'), 'Utiliser ''there are'' avec le pluriel', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-006'), 'Former des questions et négations avec there is/are', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-004'), 'Utiliser ''will'' pour les décisions spontanées et les prédictions', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-004'), 'Utiliser ''going to'' pour les plans et intentions', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-004'), 'Distinguer will et going to en contexte', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-005'), 'Former le comparatif de supériorité (more / -er)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-005'), 'Former le superlatif (most / -est)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-005'), 'Utiliser les formes irrégulières (good→better→best)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-006'), 'Former des questions fermées (yes/no)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-006'), 'Former des questions ouvertes avec Wh-', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-006'), 'Utiliser les tag questions', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-007'), 'Placer les adverbes de fréquence dans la phrase', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-007'), 'Distinguer always, usually, often, sometimes, rarely, never', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-007'), 'Utiliser les adverbes de manière (-ly)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-003'), 'Utiliser who pour les personnes', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-003'), 'Utiliser which/that pour les choses', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-003'), 'Distinguer relatives définies et non-définies', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-004'), 'Identifier les verbes suivis du gérondif (enjoy, avoid, mind...)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-004'), 'Identifier les verbes suivis de l''infinitif (want, decide, hope...)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-004'), 'Connaître les verbes acceptant les deux formes (like, begin, start)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-005'), 'Utiliser ''used to'' pour les habitudes passées', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-005'), 'Utiliser ''would'' pour les actions répétées au passé', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-005'), 'Utiliser ''be used to + -ing'' pour l''accoutumance présente', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-003'), 'Comprendre le concept de phrasal verb (verbe + particule)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-003'), 'Maîtriser les 30 phrasal verbs les plus fréquents', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-003'), 'Utiliser les phrasal verbs en contexte professionnel', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-004'), 'Utiliser ''wish + past simple'' pour les souhaits présents', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-004'), 'Utiliser ''wish + past perfect'' pour les regrets passés', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-004'), 'Maîtriser ''If only'', ''It''s time'', ''Would rather''', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-002'), 'Utiliser les connecteurs de concession (nevertheless, notwithstanding)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-002'), 'Utiliser les connecteurs de cause/conséquence (thereby, hence)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-002'), 'Structurer un discours académique avec des connecteurs sophistiqués', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-003'), 'Distinguer registre formel, informel et neutre', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-003'), 'Adapter son vocabulaire au contexte (académique, business, casual)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-003'), 'Réécrire des phrases dans un registre différent', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-001'), 'Comprendre et utiliser des expressions idiomatiques rares', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-001'), 'Identifier les nuances stylistiques dans la littérature anglaise', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-001'), 'Adapter son discours aux registres littéraire et journalistique', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-002'), 'Analyser la structure grammaticale de textes de presse', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-002'), 'Identifier les procédés stylistiques (anaphore, chiasme, litote)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-002'), 'Évaluer l''effet des choix grammaticaux sur le sens', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-004'), 'Nommer les aliments courants en anglais', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-004'), 'Commander au restaurant ou au marché', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-004'), 'Exprimer ses goûts alimentaires', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-005'), 'Nommer les parties du corps', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-005'), 'Décrire des symptômes simples', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-005'), 'S''exprimer chez le médecin', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-006'), 'Compter de 1 à 1000', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-006'), 'Lire et dire l''heure en anglais', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-006'), 'Donner et comprendre une date', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-001'), 'Nommer les vêtements courants', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-001'), 'Décrire ce que quelqu''un porte', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-001'), 'Faire des achats dans un magasin de vêtements', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-002'), 'Nommer les moyens de transport', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-002'), 'Acheter un billet et demander des informations', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-002'), 'Décrire un itinéraire simple', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-A2-001'), 'Se présenter en anglais professionnel', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-A2-001'), 'Donner son titre et sa fonction', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-A2-001'), 'Faire du small talk professionnel', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-B1-003'), 'Structurer une présentation (introduction, corps, conclusion)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-B1-003'), 'Utiliser des expressions de transition', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BUS-B1-003'), 'Interagir avec l''audience (questions, clarifications)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='READ-A1-001'), 'Comprendre des panneaux courants (No smoking, Exit, etc.)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='READ-A1-001'), 'Lire des messages simples (SMS, notes)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='READ-A1-001'), 'Extraire l''information essentielle d''un texte très court', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='WRITE-A1-001'), 'Construire des phrases Sujet-Verbe-Complément', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='WRITE-A1-001'), 'Utiliser la ponctuation de base', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='WRITE-A1-001'), 'Écrire 5-10 phrases simples sur soi-même', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-L-B1-001'), 'Décrire des photos avec précision', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-L-B1-001'), 'Identifier les pièges courants (temps, sujet, action)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-L-B1-001'), 'Éliminer les réponses incorrectes par déduction', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-R-B1-001'), 'Identifier le type de mot manquant (nom, verbe, adjectif...)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-R-B1-001'), 'Appliquer les règles de grammaire en contexte TOEIC', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEIC-R-B1-001'), 'Gérer le temps (30 sec par question)', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-R-B2-001'), 'Maîtriser le skimming (lecture globale)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-R-B2-001'), 'Maîtriser le scanning (recherche d''information spécifique)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-R-B2-001'), 'Identifier la structure d''un texte académique', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-W-B2-001'), 'Synthétiser un texte et un audio', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-W-B2-001'), 'Structurer un essai intégré (intro, body, conclusion)', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='TOEFL-W-B2-001'), 'Utiliser des expressions de comparaison et de contraste', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BEPC-A2-001'), 'Maîtriser le présent simple et continu pour le BEPC', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BEPC-A2-001'), 'Maîtriser le passé simple pour le BEPC', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BEPC-A2-001'), 'Appliquer les règles dans des exercices type BEPC', 3);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BAC-B2-004'), 'Structurer une dissertation en anglais (intro, corps, conclusion)', 1);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BAC-B2-004'), 'Formuler une problématique claire', 2);
INSERT INTO objectives (module_id, description, sort_order) VALUES ((SELECT id FROM modules WHERE code='BAC-B2-004'), 'Développer des arguments avec des exemples pertinents', 3);
-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 5/9 : TESTS DE PLACEMENT + 40 QUESTIONS CALIBRÉES
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — SEED DATA : TESTS DE PLACEMENT + TESTS PAR NIVEAU
-- ============================================================================

-- ============================================================================
-- TESTS DE PLACEMENT
-- ============================================================================
INSERT INTO placement_tests (code, title, description, question_count, time_limit_sec, public_slug) VALUES
('placement_general', 'Test de Placement en Langue Anglaise', 'Test de 40 questions couvrant les niveaux A1 à C1. Détermine votre niveau CECRL en anglais général.', 40, 2400, 'placement'),
('placement_business', 'Test de Placement – Anglais Professionnel', 'Test de 30 questions évaluant votre niveau en anglais des affaires.', 30, 1800, 'placement-business'),
('placement_toeic_diag', 'Diagnostic TOEIC', 'Mini-test de 25 questions pour estimer votre score TOEIC.', 25, 1500, 'diagnostic-toeic');

-- ============================================================================
-- TESTS PAR NIVEAU (entraînement)
-- ============================================================================
INSERT INTO level_tests (level_id, programme_id, title, description, question_count, time_limit_sec, public_slug) VALUES
((SELECT id FROM levels WHERE code='A1'), NULL, 'Test Niveau A1 – Débutant', 'Vérifiez vos connaissances de base en anglais.', 20, 900, 'test-a1'),
((SELECT id FROM levels WHERE code='A2'), NULL, 'Test Niveau A2 – Élémentaire', 'Testez vos compétences élémentaires en anglais.', 20, 900, 'test-a2'),
((SELECT id FROM levels WHERE code='B1'), NULL, 'Test Niveau B1 – Intermédiaire', 'Évaluez vos compétences intermédiaires.', 20, 1200, 'test-b1'),
((SELECT id FROM levels WHERE code='B2'), NULL, 'Test Niveau B2 – Intermédiaire avancé', 'Testez votre maîtrise à un niveau avancé.', 20, 1200, 'test-b2'),
((SELECT id FROM levels WHERE code='C1'), NULL, 'Test Niveau C1 – Avancé', 'Évaluez votre maîtrise avancée de l''anglais.', 20, 1200, 'test-c1'),
((SELECT id FROM levels WHERE code='C2'), NULL, 'Test Niveau C2 – Maîtrise', 'Le test ultime pour les niveaux experts.', 20, 1200, 'test-c2');

-- ============================================================================
-- QUESTIONS DU TEST DE PLACEMENT GÉNÉRAL (40 questions calibrées A1→C1)
-- ============================================================================
-- Structure : 8 questions A1 + 8 A2 + 8 B1 + 8 B2 + 8 C1

-- ─────────────────────────── A1 (questions 1-8) ───────────────────────────

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'She _____ a teacher.',
'Le verbe TO BE à la 3e personne du singulier est "is".', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'am', FALSE, 1),
(currval('questions_id_seq'), 'is', TRUE, 2),
(currval('questions_id_seq'), 'are', FALSE, 3),
(currval('questions_id_seq'), 'be', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'I _____ from Abidjan.',
'Avec "I", on utilise "am".', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'is', FALSE, 1),
(currval('questions_id_seq'), 'am', TRUE, 2),
(currval('questions_id_seq'), 'are', FALSE, 3),
(currval('questions_id_seq'), 'was', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'What is _____ name?',
'Le pronom possessif pour "you" est "your".', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'you', FALSE, 1),
(currval('questions_id_seq'), 'your', TRUE, 2),
(currval('questions_id_seq'), 'yours', FALSE, 3),
(currval('questions_id_seq'), 'you''re', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'There _____ two books on the table.',
'"Two books" est pluriel, donc "are".', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'is', FALSE, 1),
(currval('questions_id_seq'), 'are', TRUE, 2),
(currval('questions_id_seq'), 'has', FALSE, 3),
(currval('questions_id_seq'), 'have', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'He _____ coffee every morning.',
'Habitude au présent simple : he drinks.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'drink', FALSE, 1),
(currval('questions_id_seq'), 'drinks', TRUE, 2),
(currval('questions_id_seq'), 'drinking', FALSE, 3),
(currval('questions_id_seq'), 'is drink', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'_____ you like football?',
'Questions au présent simple avec "do" pour "you".', 1, 1, 6);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'Do', TRUE, 1),
(currval('questions_id_seq'), 'Does', FALSE, 2),
(currval('questions_id_seq'), 'Are', FALSE, 3),
(currval('questions_id_seq'), 'Is', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'We live _____ Cocody.',
'"In" pour les quartiers et les villes.', 1, 1, 7);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'at', FALSE, 1),
(currval('questions_id_seq'), 'in', TRUE, 2),
(currval('questions_id_seq'), 'on', FALSE, 3),
(currval('questions_id_seq'), 'to', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A1'), 'mcq',
'This is _____ orange.',
'"An" devant un mot commençant par une voyelle.', 1, 1, 8);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'a', FALSE, 1),
(currval('questions_id_seq'), 'an', TRUE, 2),
(currval('questions_id_seq'), 'the', FALSE, 3),
(currval('questions_id_seq'), '--', FALSE, 4);

-- ─────────────────────────── A2 (questions 9-16) ───────────────────────────

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'She _____ TV when I called.',
'Action en cours dans le passé = past continuous.', 2, 1, 9);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'watched', FALSE, 1),
(currval('questions_id_seq'), 'was watching', TRUE, 2),
(currval('questions_id_seq'), 'watches', FALSE, 3),
(currval('questions_id_seq'), 'is watching', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'He is _____ than his brother.',
'Comparatif de "tall" = "taller".', 2, 1, 10);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'more tall', FALSE, 1),
(currval('questions_id_seq'), 'taller', TRUE, 2),
(currval('questions_id_seq'), 'tallest', FALSE, 3),
(currval('questions_id_seq'), 'most tall', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'They _____ to the cinema last night.',
'Action terminée dans le passé = past simple de "go" = "went".', 2, 1, 11);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'go', FALSE, 1),
(currval('questions_id_seq'), 'went', TRUE, 2),
(currval('questions_id_seq'), 'gone', FALSE, 3),
(currval('questions_id_seq'), 'going', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'You _____ smoke in the hospital.',
'"Mustn''t" exprime l''interdiction.', 2, 1, 12);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'don''t have to', FALSE, 1),
(currval('questions_id_seq'), 'mustn''t', TRUE, 2),
(currval('questions_id_seq'), 'shouldn''t to', FALSE, 3),
(currval('questions_id_seq'), 'can', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'I''m going _____ buy a new phone.',
'"Going to" pour exprimer un plan futur.', 2, 1, 13);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'for', FALSE, 1),
(currval('questions_id_seq'), 'to', TRUE, 2),
(currval('questions_id_seq'), '--', FALSE, 3),
(currval('questions_id_seq'), 'at', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'How _____ water do you drink per day?',
'"Much" avec les noms indénombrables.', 2, 1, 14);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'many', FALSE, 1),
(currval('questions_id_seq'), 'much', TRUE, 2),
(currval('questions_id_seq'), 'lot', FALSE, 3),
(currval('questions_id_seq'), 'few', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'She has _____ been to London.',
'"Never" pour exprimer l''absence d''expérience.', 2, 1, 15);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'ever', FALSE, 1),
(currval('questions_id_seq'), 'never', TRUE, 2),
(currval('questions_id_seq'), 'already', FALSE, 3),
(currval('questions_id_seq'), 'yet', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='A2'), 'mcq',
'The restaurant is _____ the bank and the pharmacy.',
'"Between" pour exprimer une position entre deux éléments.', 2, 1, 16);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'among', FALSE, 1),
(currval('questions_id_seq'), 'between', TRUE, 2),
(currval('questions_id_seq'), 'next', FALSE, 3),
(currval('questions_id_seq'), 'behind', FALSE, 4);

-- ─────────────────────────── B1 (questions 17-24) ───────────────────────────

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'I''ve lived here _____ 2018.',
'"Since" avec un point précis dans le temps.', 3, 1, 17);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'for', FALSE, 1),
(currval('questions_id_seq'), 'since', TRUE, 2),
(currval('questions_id_seq'), 'during', FALSE, 3),
(currval('questions_id_seq'), 'from', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'The report _____ by the manager yesterday.',
'Voix passive au passé simple.', 3, 1, 18);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'wrote', FALSE, 1),
(currval('questions_id_seq'), 'was written', TRUE, 2),
(currval('questions_id_seq'), 'was wrote', FALSE, 3),
(currval('questions_id_seq'), 'has written', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'If it rains, I _____ at home.',
'Conditionnel type 1 : If + present, will + base verb.', 3, 1, 19);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'stay', FALSE, 1),
(currval('questions_id_seq'), 'will stay', TRUE, 2),
(currval('questions_id_seq'), 'would stay', FALSE, 3),
(currval('questions_id_seq'), 'stayed', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'She asked me _____ I wanted to join the meeting.',
'Discours indirect avec "if/whether" pour les questions fermées.', 3, 1, 20);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'that', FALSE, 1),
(currval('questions_id_seq'), 'if', TRUE, 2),
(currval('questions_id_seq'), 'what', FALSE, 3),
(currval('questions_id_seq'), 'do', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'I''m not used to _____ early.',
'"Be used to" est suivi du gérondif (-ing).', 3, 1, 21);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'wake', FALSE, 1),
(currval('questions_id_seq'), 'waking', TRUE, 2),
(currval('questions_id_seq'), 'woke', FALSE, 3),
(currval('questions_id_seq'), 'to wake', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'The woman _____ car was stolen called the police.',
'Pronom relatif possessif = "whose".', 3, 1, 22);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'who', FALSE, 1),
(currval('questions_id_seq'), 'whose', TRUE, 2),
(currval('questions_id_seq'), 'which', FALSE, 3),
(currval('questions_id_seq'), 'that', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'You''d better _____ a jacket. It''s cold outside.',
'"You''d better" est suivi de la base verbale.', 3, 1, 23);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'to take', FALSE, 1),
(currval('questions_id_seq'), 'take', TRUE, 2),
(currval('questions_id_seq'), 'taking', FALSE, 3),
(currval('questions_id_seq'), 'took', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B1'), 'mcq',
'By the time we arrived, the film _____.',
'"Had already started" = past perfect pour une action antérieure.', 3, 1, 24);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'already started', FALSE, 1),
(currval('questions_id_seq'), 'had already started', TRUE, 2),
(currval('questions_id_seq'), 'has already started', FALSE, 3),
(currval('questions_id_seq'), 'was already starting', FALSE, 4);

-- ─────────────────────────── B2 (questions 25-32) ───────────────────────────

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'If I _____ you, I would accept the offer.',
'Conditionnel type 2 : If + past simple, would + base verb.', 4, 1, 25);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'am', FALSE, 1),
(currval('questions_id_seq'), 'were', TRUE, 2),
(currval('questions_id_seq'), 'would be', FALSE, 3),
(currval('questions_id_seq'), 'had been', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'Not only _____ the project on time, but she also exceeded expectations.',
'Inversion après "Not only" : did + sujet + verbe.', 4, 1, 26);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'she completed', FALSE, 1),
(currval('questions_id_seq'), 'did she complete', TRUE, 2),
(currval('questions_id_seq'), 'she did complete', FALSE, 3),
(currval('questions_id_seq'), 'has she completed', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'He denied _____ the confidential documents.',
'"Deny" est suivi du gérondif.', 4, 1, 27);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'to leak', FALSE, 1),
(currval('questions_id_seq'), 'having leaked', TRUE, 2),
(currval('questions_id_seq'), 'leak', FALSE, 3),
(currval('questions_id_seq'), 'to have leaked', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'The deadline needs to be _____ to next Friday.',
'"Pushed back" = repousser une échéance.', 4, 1, 28);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'put off', FALSE, 1),
(currval('questions_id_seq'), 'pushed back', TRUE, 2),
(currval('questions_id_seq'), 'taken away', FALSE, 3),
(currval('questions_id_seq'), 'called off', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'_____ the weather had been terrible, the event was a success.',
'"Although" introduit une concession.', 4, 1, 29);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'Despite', FALSE, 1),
(currval('questions_id_seq'), 'Although', TRUE, 2),
(currval('questions_id_seq'), 'However', FALSE, 3),
(currval('questions_id_seq'), 'In spite', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'She said she _____ the report if she had had more time.',
'Conditionnel type 3 : would have + past participle.', 4, 1, 30);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'will finish', FALSE, 1),
(currval('questions_id_seq'), 'would have finished', TRUE, 2),
(currval('questions_id_seq'), 'would finish', FALSE, 3),
(currval('questions_id_seq'), 'had finished', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'The manager insisted that every employee _____ the training.',
'Subjonctif après "insist that" = base verbale.', 4, 1, 31);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'attends', FALSE, 1),
(currval('questions_id_seq'), 'attend', TRUE, 2),
(currval('questions_id_seq'), 'attended', FALSE, 3),
(currval('questions_id_seq'), 'would attend', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='B2'), 'mcq',
'I wish I _____ harder when I was at university.',
'"Wish + past perfect" pour les regrets passés.', 4, 1, 32);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'studied', FALSE, 1),
(currval('questions_id_seq'), 'had studied', TRUE, 2),
(currval('questions_id_seq'), 'would study', FALSE, 3),
(currval('questions_id_seq'), 'have studied', FALSE, 4);

-- ─────────────────────────── C1 (questions 33-40) ───────────────────────────

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'Rarely _____ such a compelling argument in a board meeting.',
'Inversion avec adverbe négatif en début de phrase.', 5, 1, 33);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'I have heard', FALSE, 1),
(currval('questions_id_seq'), 'have I heard', TRUE, 2),
(currval('questions_id_seq'), 'I heard', FALSE, 3),
(currval('questions_id_seq'), 'did I hear', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'The proposal, _____ merits are undeniable, was nonetheless rejected.',
'"Whose" pour indiquer la possession dans une relative.', 5, 1, 34);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'which', FALSE, 1),
(currval('questions_id_seq'), 'whose', TRUE, 2),
(currval('questions_id_seq'), 'that', FALSE, 3),
(currval('questions_id_seq'), 'of which', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'Had the government acted sooner, the crisis _____ averted.',
'Conditionnel type 3 inversé (sans "if").', 5, 1, 35);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'would be', FALSE, 1),
(currval('questions_id_seq'), 'could have been', TRUE, 2),
(currval('questions_id_seq'), 'had been', FALSE, 3),
(currval('questions_id_seq'), 'will have been', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'The findings are _____ with previous research in the field.',
'"Consistent with" = conforme à.', 5, 1, 36);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'coherent to', FALSE, 1),
(currval('questions_id_seq'), 'consistent with', TRUE, 2),
(currval('questions_id_seq'), 'relevant for', FALSE, 3),
(currval('questions_id_seq'), 'compliant to', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'It is imperative that the board _____ a decision by Friday.',
'Subjonctif après "it is imperative that".', 5, 1, 37);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'makes', FALSE, 1),
(currval('questions_id_seq'), 'make', TRUE, 2),
(currval('questions_id_seq'), 'will make', FALSE, 3),
(currval('questions_id_seq'), 'made', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'The CEO, _____ to have been aware of the fraud, resigned immediately.',
'"Alleged to have been" = structure passive du parfait.', 5, 1, 38);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'who alleged', FALSE, 1),
(currval('questions_id_seq'), 'alleged', TRUE, 2),
(currval('questions_id_seq'), 'alleging', FALSE, 3),
(currval('questions_id_seq'), 'was alleged', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'_____ notwithstanding, the project proceeded as planned.',
'"Objections notwithstanding" = malgré les objections.', 5, 1, 39);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'The objections', TRUE, 1),
(currval('questions_id_seq'), 'Despite objections', FALSE, 2),
(currval('questions_id_seq'), 'Although objections', FALSE, 3),
(currval('questions_id_seq'), 'However objections', FALSE, 4);

INSERT INTO questions (placement_test_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order)
VALUES ((SELECT id FROM placement_tests WHERE code='placement_general'), (SELECT id FROM levels WHERE code='C1'), 'mcq',
'So thorough was the investigation that no stone _____.',
'"Was left unturned" — expression idiomatique avec inversion.', 5, 1, 40);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES
(currval('questions_id_seq'), 'left unturned', FALSE, 1),
(currval('questions_id_seq'), 'was left unturned', TRUE, 2),
(currval('questions_id_seq'), 'had left unturned', FALSE, 3),
(currval('questions_id_seq'), 'has been unturned', FALSE, 4);

-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 6/9 : QUIZ COMPLETS (34 quiz × 5 questions)
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — QUIZ COMPLETS (auto-généré)
-- 34 modules × 5 questions = 170 questions
-- ============================================================================


-- Quiz : Le Verbe TO BE – Présent
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-001'), 'Quiz – Le Verbe TO BE – Présent', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ a doctor.', 'She → 3e personne singulier → is.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'We _____ from Côte d''Ivoire.', 'We → pluriel → are.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'was', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ he your brother?', 'He → Is he...?', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I _____ not tired today.', 'I → am not.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'They _____ happy about the results.', 'They → are.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);

-- Quiz : Le Présent Simple – Actions et habitudes
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-002'), 'Quiz – Le Présent Simple – Actions et habitudes', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He _____ to work every day.', 'He → 3e pers. sing. → goes.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'go', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'goes', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'going', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'gone', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'They _____ football on Sundays.', 'They → pas de -s.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'plays', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'play', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'playing', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'played', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ not like spicy food.', 'She does not / doesn''t like.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ you speak French?', 'You → Do you...?', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'My father _____ coffee in the morning.', 'My father = he → drinks.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'drink', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'drinks', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'drinking', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'drank', FALSE, 4);

-- Quiz : Les Articles – A, AN, THE
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-003'), 'Quiz – Les Articles – A, AN, THE', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She is _____ engineer.', 'Engineer commence par une voyelle → an.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I need _____ book from the library.', 'Un livre quelconque → a.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ sun is very hot today.', 'Le soleil = unique → the.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She has _____ umbrella.', 'Umbrella commence par /ʌ/ → an.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ love is important.', 'Concept abstrait général → pas d''article.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', TRUE, 4);

-- Quiz : Les Pronoms Personnels et Possessifs
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-004'), 'Quiz – Les Pronoms Personnels et Possessifs', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ is my friend.', 'Sujet → He.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'He', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Him', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'His', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Her', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'This is _____ book.', 'Avant un nom → adjectif possessif → my.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'me', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'my', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'mine', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I gave _____ the keys.', 'Complément d''objet → her.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'she', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'her', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hers', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'his', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ car is new.', 'Avant un nom → Their.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'They', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Them', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Their', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Theirs', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The book is _____.', 'Sans nom après → pronom possessif → mine.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'my', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'me', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'mine', TRUE, 4);

-- Quiz : Les Prépositions de Lieu et de Temps
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-005'), 'Quiz – Les Prépositions de Lieu et de Temps', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The meeting is _____ Monday.', 'Jour → on Monday.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She lives _____ Abidjan.', 'Ville → in Abidjan.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The class starts _____ 9 a.m.', 'Heure précise → at 9 a.m.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'by', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The cat is _____ the table.', 'Sous → under the table.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'under', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'We go on holiday _____ August.', 'Mois → in August.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to', FALSE, 4);

-- Quiz : There is / There are
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-006'), 'Quiz – There is / There are', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'There _____ a book on the desk.', 'Singulier → there is.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'There _____ many students in the class.', 'Pluriel → there are.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ there a pharmacy near here?', 'Singulier → Is there...?', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'There _____ no milk in the fridge.', 'Indénombrable → there is no.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'There _____ three banks in my street.', 'Trois = pluriel → there are.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);

-- Quiz : Le Futur – Will et Going to
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-004'), 'Quiz – Le Futur – Will et Going to', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'Look at those clouds! It _____ rain.', 'Prédiction basée sur une preuve → going to.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is going to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shall', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'I _____ help you with your bags.', 'Décision spontanée → will.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am going to', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shall', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'We _____ visit our grandmother next Sunday.', 'Plan prévu → going to.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are going to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shall', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'I think she _____ pass the exam.', 'Prédiction/opinion → will.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is going to', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shall', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'They _____ buy a new house. They''ve saved enough.', 'Intention décidée → going to.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are going to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shall', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 4);

-- Quiz : Les Comparatifs et Superlatifs
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-005'), 'Quiz – Les Comparatifs et Superlatifs', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'Paris is _____ than Lyon.', '1 syllabe → bigger.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'big', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bigger', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'biggest', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'more big', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'This is the _____ restaurant in town.', 'Superlatif de good → best.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'good', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'better', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'best', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'most good', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'English is _____ than Chinese for French speakers.', 'Easy → easier (y→ier).', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'easy', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'easier', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'easiest', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'more easy', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'He is the _____ student in the class.', '3+ syllabes → the most intelligent.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'intelligent', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'more intelligent', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'most intelligent', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'intelligenter', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'My results are _____ than last year.', 'Irrégulier : bad → worse.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bad', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'worse', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'worst', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'more bad', FALSE, 4);

-- Quiz : Les Questions – Formation et Types
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-006'), 'Quiz – Les Questions – Formation et Types', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', '_____ do you live?', 'Lieu → Where.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'What', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Where', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Who', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'When', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'She likes coffee, _____ she?', 'Phrase affirmative → tag négatif → doesn''t she?', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'doesn''t', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'isn''t', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', '_____ did you arrive?', 'Moment → When.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'What', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Where', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'When', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Who', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', '_____ is your teacher?', 'Personne → Who.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'What', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Where', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Who', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'When', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'You are a student, _____ you?', 'You are → aren''t you?', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'aren''t', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'don''t', FALSE, 4);

-- Quiz : Les Adverbes de Fréquence et de Manière
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-A2-007'), 'Quiz – Les Adverbes de Fréquence et de Manière', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'She _____ goes to the gym. (tous les jours)', 'Tous les jours = always.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'never', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rarely', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'always', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'sometimes', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'He drives _____.', 'Adverbe de manière → carefully.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'careful', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'carefully', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'careless', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'care', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'I am _____ late for work.', 'Toujours en retard → always.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ever', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'never', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'always', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'yet', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'She speaks English _____.', 'Adverbe → fluently.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fluent', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fluently', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fluence', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fluid', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'We _____ eat at restaurants. Maybe once a month.', 'Une fois par mois = rarement → rarely.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'always', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'usually', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rarely', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'never', FALSE, 4);

-- Quiz : Les Relatives – Who, Which, That, Where
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-003'), 'Quiz – Les Relatives – Who, Which, That, Where', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'The woman _____ works here is my aunt.', 'Personne → who.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'which', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'who', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'where', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'whose', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'The book _____ I bought is interesting.', 'Chose → which/that.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'who', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'which', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'where', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'whose', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'That''s the restaurant _____ we had dinner.', 'Lieu → where.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'who', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'which', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'where', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'whose', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'The man _____ car was stolen called the police.', 'Possession → whose.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'who', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'which', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'whose', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'that', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Paris, _____ is the capital of France, is beautiful.', 'Non-définie (virgule) → which (pas that).', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'that', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'which', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'who', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'where', FALSE, 4);

-- Quiz : Le Gérondif et l'Infinitif
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-004'), 'Quiz – Le Gérondif et l''Infinitif', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'She enjoys _____ English.', 'Enjoy + gérondif → learning.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'learn', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to learn', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'learning', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'learned', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'He decided _____ a new job.', 'Decide + infinitif → to find.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'find', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to find', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'finding', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'found', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'I avoid _____ fast food.', 'Avoid + gérondif → eating.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'eat', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to eat', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'eating', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ate', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'We want _____ English fluently.', 'Want + infinitif → to speak.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'speak', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to speak', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'speaking', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'spoke', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'She likes _____ in the morning.', 'Like + les deux formes.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'run', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'to run / running', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ran', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'runs', FALSE, 4);

-- Quiz : Used to / Would / Be used to
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-B1-005'), 'Quiz – Used to / Would / Be used to', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'I _____ play football when I was young.', 'Habitude passée → used to.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'use to', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am used to', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would to', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'She is _____ working late.', 'Accoutumance → is used to + -ing.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'use to', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'using to', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'He _____ visit his grandmother every Sunday. (passé, répétition)', 'Action répétée au passé → would.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'was used to', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'I''m not _____ eating spicy food.', 'Pas habitué → not used to eating.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'use to', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used to', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'using', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'They _____ live in Daloa before moving to Abidjan.', 'État passé → used to (pas would pour les états).', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'used to', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'use to', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are used to', FALSE, 4);

-- Quiz : Les Phrasal Verbs Essentiels
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-003'), 'Quiz – Les Phrasal Verbs Essentiels', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Please _____ your shoes before entering.', 'Enlever → take off.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'take off', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'take on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'take up', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'take in', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'The meeting was _____ until next week.', 'Reporter → put off.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'put off', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'put on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'put up', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'put out', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Can you _____ the volume? I can''t hear.', 'Augmenter → turn up.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'turn on', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'turn off', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'turn up', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'turn down', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'She _____ with a brilliant idea.', 'Trouver une idée → come up with.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'came up', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'came on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'came off', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'came in', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'I need to _____ this problem before the deadline.', 'Résoudre → figure out.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'figure out', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'figure in', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'figure on', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'figure up', FALSE, 4);

-- Quiz : Le Subjonctif et les Souhaits
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-B2-004'), 'Quiz – Le Subjonctif et les Souhaits', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'I wish I _____ more time.', 'Souhait présent → wish + past simple.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'had', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would have', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'having', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'If only she _____ earlier yesterday.', 'Regret passé → if only + past perfect.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arrives', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arrived', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'had arrived', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would arrive', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'It''s time we _____ home.', 'It''s time + past simple.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'go', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'went', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'going', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'gone', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'I''d rather you _____ smoke here.', 'Would rather + sujet + past simple.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'don''t', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'didn''t', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'won''t', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'wouldn''t', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'I wish it _____ stop raining!', 'Souhait de changement → wish + would.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'will', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'would', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'could', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'can', FALSE, 4);

-- Quiz : Les Connecteurs Logiques Avancés
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-002'), 'Quiz – Les Connecteurs Logiques Avancés', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'The results were disappointing; _____, the team remained motivated.', 'Concession → nevertheless (néanmoins).', 5, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'therefore', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'nevertheless', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'moreover', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'consequently', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'She completed the training, _____ qualifying for the promotion.', 'Conséquence → thereby (permettant ainsi).', 5, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'however', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'thereby', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'although', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'despite', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'The data is inconclusive; _____, we should proceed with caution.', 'Conclusion logique → hence (par conséquent).', 5, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hence', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'moreover', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'likewise', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'instead', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', '_____ the challenges, the project was delivered on time.', 'Despite + nom = malgré.', 5, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Although', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Despite', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'However', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Nevertheless', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'The proposal was well-written; _____, it addressed all concerns.', 'Addition → furthermore (de plus).', 5, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'however', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'therefore', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'furthermore', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'instead', FALSE, 4);

-- Quiz : Le Style et le Registre
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-C1-003'), 'Quiz – Le Style et le Registre', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'Quel registre ? ''We need to look into this matter.''', 'Neutre — ni trop formel ni familier.', 5, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Formel', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Neutre', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Informel', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Littéraire', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'Reformulation formelle de ''I got the job'' :', 'Secured the position = formel.', 5, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I secured the position', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I got hired', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'They gave me the job', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I have the job', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', '''Furthermore'' est typique du registre :', 'Furthermore = connecteur formel.', 5, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Informel', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Neutre', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Formel/académique', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Argot', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', 'Reformulation informelle de ''I wish to inquire about'' :', 'Want to ask = informel.', 5, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I want to ask about', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I desire to know', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I seek information', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I require details', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C1'), 'mcq', '''Gonna'' est acceptable dans :', 'Gonna = oral informel uniquement.', 5, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un email professionnel', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un rapport', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une conversation entre amis', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un CV', FALSE, 4);

-- Quiz : Nuances Idiomatiques et Registres Littéraires
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-001'), 'Quiz – Nuances Idiomatiques et Registres Littéraires', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''To have a bee in one''s bonnet'' signifie :', 'Idiome = être obsédé/préoccupé par une idée.', 5, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Être riche', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Être obsédé par quelque chose', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Être heureux', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Être malade', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''The elephant in the room'' fait référence à :', 'Problème évident que personne n''aborde.', 5, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un gros animal', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un sujet tabou que tout le monde ignore', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un problème mineur', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une décoration', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', 'Le registre de ''Hitherto, the evidence has been inconclusive'' est :', 'Hitherto = jusqu''ici (registre très formel).', 5, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Informel', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Neutre', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Formel académique', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Argot', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''To throw the baby out with the bathwater'' signifie :', 'Jeter le bébé avec l''eau du bain.', 5, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Se débarrasser du bon en éliminant le mauvais', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Faire du mal à un enfant', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Gaspiller de l''eau', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Prendre un bain', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''Erstwhile'' est synonyme de :', 'Erstwhile = ancien/autrefois (registre littéraire).', 5, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Current', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Former', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Future', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Occasional', FALSE, 4);

-- Quiz : Analyse Grammaticale de Textes Authentiques
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='GRAM-C2-002'), 'Quiz – Analyse Grammaticale de Textes Authentiques', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', 'Dans ''Not unlike his predecessor, he favoured diplomacy'', ''not unlike'' est :', 'Litote = atténuation par double négation.', 5, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une double négation', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une litote', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une métaphore', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une hyperbole', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''Ask not what your country can do for you'' utilise :', 'Inversion emphatique : ask not (au lieu de do not ask).', 5, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''anaphore', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Le chiasme', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''inversion', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''ellipse', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', 'Le passif impersonnel ''It is believed that...'' sert à :', 'Passif impersonnel = distance journalistique.', 5, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Exprimer une opinion personnelle', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Distancier l''auteur de l''affirmation', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Poser une question', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Donner un ordre', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', '''Had I known, I would have acted differently'' est un exemple de :', 'Inversion du conditionnel type 3 (sans if).', 5, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Subjonctif', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Conditionnel inversé', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Impératif', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Gérondif', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='C2'), 'mcq', 'L''effet de ''We shall fight on the beaches, we shall fight on the landing grounds'' (Churchill) repose sur :', 'Anaphore = répétition de ''we shall fight''.', 5, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'La litote', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''anaphore', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''euphémisme', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''ironie', FALSE, 4);

-- Quiz : La Nourriture et les Boissons
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-004'), 'Quiz – La Nourriture et les Boissons', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I''d like a glass of _____, please.', 'Water = eau.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bread', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'water', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'chicken', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rice', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'For breakfast, I usually have _____ and eggs.', 'Toast and eggs = petit-déjeuner classique.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'toast', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'dinner', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'lunch', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'steak', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ is a tropical fruit.', 'Mango = mangue (fruit tropical).', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Carrot', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Mango', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Onion', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Potato', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Would you like some _____? It''s very fresh.', 'Fish = poisson.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fish', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'desk', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shoe', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'pen', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She doesn''t eat _____. She''s vegetarian.', 'Vegetarian → no meat.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'vegetables', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fruit', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'meat', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rice', FALSE, 4);

-- Quiz : Le Corps Humain et la Santé
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-005'), 'Quiz – Le Corps Humain et la Santé', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I have a headache. My _____ hurts.', 'Headache = mal de tête → head.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hand', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'head', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'heart', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hair', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'You use your _____ to see.', 'Eyes = yeux → voir.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ears', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'nose', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'eyes', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'mouth', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She broke her _____. She can''t walk.', 'Can''t walk → leg (jambe).', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arm', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'leg', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'finger', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ear', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I need to see a _____. I''m not feeling well.', 'Pas bien → doctor.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'teacher', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'doctor', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'driver', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'cook', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Your _____ pumps blood through your body.', 'Heart = cœur → pompe le sang.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'brain', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'heart', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'lung', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'liver', FALSE, 4);

-- Quiz : Les Nombres, Dates et Heures
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A1-006'), 'Quiz – Les Nombres, Dates et Heures', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'What time is it? 3:30 →', '3:30 = three thirty / half past three.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Three thirty', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Three thirteen', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Thirty three', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Three three', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The 1st of January: January _____.', '1st = first (nombre ordinal).', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'one', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'first', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'oneth', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'firth', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '25 + 17 = _____', '25 + 17 = 42 = forty-two.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'thirty-two', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'forty-two', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fifty-two', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'forty-three', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'It''s 12:00 p.m. It''s _____.', '12:00 p.m. = noon (midi).', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'midnight', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'noon', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'evening', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'morning', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'What is the 7th month?', '7th month = July.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'June', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'July', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'August', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'September', FALSE, 4);

-- Quiz : Les Vêtements et la Mode
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-001'), 'Quiz – Les Vêtements et la Mode', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'She''s wearing a beautiful _____.', 'Dress = robe.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'dress', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'desk', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'door', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'dish', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'It''s cold. I need my _____.', 'Froid → coat (manteau).', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shorts', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 't-shirt', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'coat', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'sandals', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'These _____ are too small. Do you have a bigger size?', 'Size (taille) pour les chaussures.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shoes', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hats', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'glasses', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rings', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'He always wears a _____ and tie to work.', 'Shirt and tie = tenue professionnelle.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shirt', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'shorts', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'sweater', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'pyjama', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'In summer, I prefer wearing _____.', 'Été → sandals.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'boots', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'scarf', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'sandals', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'gloves', FALSE, 4);

-- Quiz : Les Transports et les Voyages
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='VOCAB-A2-002'), 'Quiz – Les Transports et les Voyages', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'I take the _____ to work every morning.', 'Bus = transport en commun.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bus', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bed', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bath', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bag', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'The _____ to Yamoussoukro takes 3 hours.', 'Journey = trajet (d''un point A à B).', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'travel', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'journey', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'voyage', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'trip', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'A single or _____ ticket?', 'Return ticket = aller-retour.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'double', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'return', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'back', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'again', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'The plane _____ at 6 p.m.', 'Departs = part/décolle.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'departs', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'drives', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rides', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'walks', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'Excuse me, where is the nearest _____ station?', 'Bus station = gare routière.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'fire', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'bus', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'TV', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'radio', FALSE, 4);

-- Quiz : Se Présenter en Contexte Professionnel
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='BUS-A2-001'), 'Quiz – Se Présenter en Contexte Professionnel', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', '''I''m in charge of marketing.'' → ''In charge of'' means:', 'In charge of = responsable de.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Interested in', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Responsible for', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Against', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Studying', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'Nice to _____ you.', 'Première rencontre → meet.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'see', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'meet', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'know', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'watch', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'What do you _____? (profession)', 'What do you do? = profession.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'make', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'work', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'job', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'I _____ for MTN as a project manager.', 'I work for + entreprise.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'job', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'work', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'employ', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'career', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'How do you _____ your name?', 'Spell = épeler.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'write', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'spell', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'say', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'tell', FALSE, 4);

-- Quiz : Les Présentations Orales en Anglais
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='BUS-B1-003'), 'Quiz – Les Présentations Orales en Anglais', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Pour commencer une présentation : ''Good morning. _____ I''d like to talk about...''', 'Today = aujourd''hui (ouverture classique).', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Finally', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Today', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'However', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Although', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '''Let me now _____ to the second point.''', 'Move on to = passer à.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'move on', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'go back', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'give up', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'take off', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Pour conclure : ''To _____, let me highlight three key points.''', 'To summarize = pour résumer.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'begin', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'summarize', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'forget', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'ignore', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '''Are there any _____?''', 'Questions de l''audience.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'answers', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'problems', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'questions', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'solutions', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '''As you can _____ on this slide...''', 'See = voir (sur un slide).', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'hear', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'see', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'feel', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'taste', FALSE, 4);

-- Quiz : Lire un Texte Court – Panneaux et Messages
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='READ-A1-001'), 'Quiz – Lire un Texte Court – Panneaux et Messages', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''NO ENTRY'' on a sign means:', 'No entry = entrée interdite.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Welcome', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'You cannot go in', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Free parking', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Open', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''PUSH'' on a door means:', 'Push = pousser.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Pull the door', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Push the door forward', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Lock the door', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Close the door', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''OUT OF ORDER'' means the machine is:', 'Out of order = en panne.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Working', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'New', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Broken', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Free', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'A text says: ''Meeting at 3pm in room 5.'' What time?', '3pm = 15h.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '3 a.m.', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '3 p.m.', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '5 p.m.', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Room 5', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''CAUTION: WET FLOOR'' means:', 'Caution = attention, sol mouillé.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The floor is dry', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Be careful, the floor is wet', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The floor is clean', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Don''t walk here ever', FALSE, 4);

-- Quiz : Écrire des Phrases Simples
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='WRITE-A1-001'), 'Quiz – Écrire des Phrases Simples', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Quel ordre correct ? ''English / I / study''', 'Ordre SVO : I study English.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'English I study', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I study English', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Study I English', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'I English study', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'La phrase commence par:', 'Majuscule en début de phrase.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'une minuscule', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'une majuscule', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'un chiffre', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'un point', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''she is a teacher'' → Correction:', 'Majuscule + point final.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'She is a teacher.', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'she is a Teacher.', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'She is a teacher', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'she Is A teacher.', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Complétez : ''My name _____ Kofi.''', 'My name = it → is.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '''I live in Abidjan'' est une phrase:', 'Pas de question ni négation → affirmative.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Interrogative', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Négative', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Affirmative', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Exclamative', FALSE, 4);

-- Quiz : TOEIC Listening Part 1 – Photographs
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='TOEIC-L-B1-001'), 'Quiz – TOEIC Listening Part 1 – Photographs', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '[Photo : personne au bureau] Best description:', 'Décrire l''action visible.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The man is sleeping.', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The woman is typing on a computer.', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'They are eating lunch.', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The office is empty.', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'TOEIC Part 1 : combien de descriptions entend-on par photo ?', '4 descriptions, une seule correcte.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '2', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '3', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '4', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '5', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Piège fréquent en Part 1 :', 'Le mauvais sujet est le piège classique.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Description exacte', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Mauvais sujet (he au lieu de she)', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Trop de détails', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Réponse trop courte', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '''The documents are being reviewed'' = quel temps ?', 'Are being + PP = passif continu.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Present simple', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Present continuous passive', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Past simple', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Future', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Stratégie clé Part 1 :', 'Éliminer les descriptions non visibles.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Écouter la 1re option uniquement', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Éliminer ce qu''on ne voit PAS', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Deviner avant d''écouter', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Toujours choisir C', FALSE, 4);

-- Quiz : TOEIC Reading Part 5 – Incomplete Sentences
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='TOEIC-R-B1-001'), 'Quiz – TOEIC Reading Part 5 – Incomplete Sentences', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'The annual report will be _____ next Monday.', 'Passif → will be published.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'publish', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'published', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'publishing', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'publisher', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', '_____ the weather, the event was successful.', 'Despite + nom.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Although', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Despite', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'However', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Because', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'She is the most _____ candidate for the position.', 'Adjectif → qualified.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'qualify', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'qualified', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'qualifying', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'qualification', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'Employees should submit requests _____ advance.', 'In advance = à l''avance.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'at', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'on', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'in', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'by', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B1'), 'mcq', 'The _____ of the new policy pleased the employees.', 'Après ''the'' → nom → announcement.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'announce', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'announced', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'announcement', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'announcing', FALSE, 4);

-- Quiz : TOEFL Reading – Stratégies de Lecture Rapide
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='TOEFL-R-B2-001'), 'Quiz – TOEFL Reading – Stratégies de Lecture Rapide', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Le ''skimming'' consiste à :', 'Skimming = lecture rapide pour l''essentiel.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Lire chaque mot', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Lire rapidement pour l''idée générale', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Traduire le texte', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Mémoriser le vocabulaire', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Le ''scanning'' est utile pour :', 'Scanning = chercher un détail spécifique.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Comprendre le ton', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Trouver une information précise', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Résumer le texte', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Critiquer l''auteur', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Dans un texte académique, la thèse se trouve généralement :', 'Thesis statement = fin de l''introduction.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'À la fin', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Au milieu', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Dans l''introduction', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Dans les notes', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Les ''topic sentences'' sont :', 'Topic sentence = phrase d''ouverture du paragraphe.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Les titres', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Les premières phrases de chaque paragraphe', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Les conclusions', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Les citations', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Face à un mot inconnu au TOEFL, la meilleure stratégie est :', 'Inférer le sens par le contexte.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Utiliser un dictionnaire', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Sauter le mot', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Deviner le sens par le contexte', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Demander à l''examinateur', FALSE, 4);

-- Quiz : TOEFL Writing – Integrated Task
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='TOEFL-W-B2-001'), 'Quiz – TOEFL Writing – Integrated Task', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'L''Integrated Writing Task demande de :', 'Integrated = combiner lecture et écoute.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Donner son opinion', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Synthétiser lecture + audio', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Rédiger une lettre', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Corriger des erreurs', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Durée recommandée pour l''Integrated Task :', '20 minutes pour l''integrated task.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '10 min', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '20 min', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '30 min', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '45 min', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', '''The lecturer challenges the reading by stating that...'' → Ce connecteur exprime :', 'Challenges = contredit → contraste.', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''accord', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Le contraste', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'L''addition', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'La cause', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Nombre de mots recommandé pour l''Integrated Task :', '150-225 mots recommandés par ETS.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '100-150', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '150-225', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '250-300', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '400+', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Faut-il donner son opinion dans l''Integrated Task ?', 'Non — synthèse objective uniquement.', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Oui, toujours', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Non, jamais', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Seulement en conclusion', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Seulement si on est sûr', FALSE, 4);

-- Quiz : BEPC Grammaire – Temps de Base
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='BEPC-A2-001'), 'Quiz – BEPC Grammaire – Temps de Base', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'She _____ to school every day. (BEPC)', 'Habitude → présent simple → goes.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'go', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'goes', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'going', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'gone', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'They _____ football now.', 'Now = en ce moment → présent continu.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'play', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'plays', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are playing', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'played', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'He _____ his homework yesterday.', 'Yesterday → passé simple → did.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'did', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'doing', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'We _____ English at school.', 'We → présent simple → study.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'study', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studies', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studying', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studied', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='A2'), 'mcq', 'Look! The baby _____.', 'Look! → action en cours → is crying.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'cry', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'cries', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is crying', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'cried', FALSE, 4);

-- Quiz : BAC Dissertation – Méthodologie Complète
INSERT INTO quizzes (module_id, title, description, time_limit_sec, pass_score, max_attempts) VALUES ((SELECT id FROM modules WHERE code='BAC-B2-004'), 'Quiz – BAC Dissertation – Méthodologie Complète', 'Vérifiez vos connaissances sur ce module.', 300, 60, 3);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'L''introduction d''une dissertation doit contenir :', 'Introduction complète = hook, contexte, problématique, plan.', 3, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Uniquement la thèse', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Hook + contexte + problématique + plan', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Des exemples', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'La conclusion', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Un ''hook'' en dissertation, c''est :', 'Hook = accroche pour capter l''attention.', 3, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'La conclusion', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une phrase d''accroche', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un argument', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un contre-argument', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Combien de parties minimum dans le développement ?', 'Minimum 2 parties (pour/contre ou thèse/antithèse).', 3, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '1', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '2', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '3', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '5', FALSE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', '''In conclusion'' sert à :', 'In conclusion = pour conclure.', 3, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Commencer', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Développer', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Illustrer', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Conclure', TRUE, 4);
INSERT INTO questions (quiz_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('quizzes_id_seq'), (SELECT id FROM levels WHERE code='B2'), 'mcq', 'Un bon argument contient :', 'Argument = idée + preuve + explication (méthode PEE/PEEL).', 3, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Juste une opinion', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une idée + un exemple + une explication', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Un seul mot', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Une question', FALSE, 4);
-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 7/9 : ÉVALUATIONS COMPLÈTES (3 × 20 questions)
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — ÉVALUATIONS COMPLÈTES (auto-généré)
-- ============================================================================


-- Évaluation : Le Verbe TO BE – Présent
INSERT INTO evaluations (module_id, title, description, question_count, time_limit_sec, pass_score, public_slug) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-001'), 'Évaluation – Le Verbe TO BE – Présent', 'Évaluation complète du module.', 20, 1200, 50, 'gram_a1_001');
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'My mother _____ a nurse at the hospital.', 'My mother = she → is.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The children _____ in the garden.', 'Children = pluriel → are.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'was', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I _____ 25 years old.', 'I am + âge en anglais.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ you a student at AGTM?', 'You → Are you...?', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'It _____ cold today.', 'It → is.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ not from Bouaké.', 'She is not / isn''t.', 1, 1, 6);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'My name _____ Awa.', 'My name = it → is.', 1, 1, 7);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Where _____ the books?', 'Books = pluriel → are.', 1, 1, 8);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Mr. and Mrs. Konan _____ teachers.', 'Deux personnes = pluriel → are.', 1, 1, 9);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'was', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The cat _____ under the table.', 'The cat = singulier → is.', 1, 1, 10);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ it your bag?', 'It → Is it...?', 1, 1, 11);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'We _____ not ready yet.', 'We → are not / aren''t.', 1, 1, 12);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'How old _____ your sister?', 'Your sister = she → is.', 1, 1, 13);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'You _____ very kind.', 'You → are.', 1, 1, 14);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The weather _____ beautiful today.', 'Weather = singulier → is.', 1, 1, 15);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ they your friends?', 'They → Are they...?', 1, 1, 16);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'This _____ my favourite restaurant.', 'This → is.', 1, 1, 17);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I _____ a professional trainer.', 'I → am.', 1, 1, 18);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'be', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The doors _____ open.', 'Doors = pluriel → are.', 1, 1, 19);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ she at home right now?', 'She → Is she...?', 1, 1, 20);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Am', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', FALSE, 4);

-- Évaluation : Le Présent Simple – Actions et habitudes
INSERT INTO evaluations (module_id, title, description, question_count, time_limit_sec, pass_score, public_slug) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-002'), 'Évaluation – Le Présent Simple – Actions et habitudes', 'Évaluation complète du module.', 20, 1200, 50, 'gram_a1_002');
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ English at AGTM.', 'She → studies (y→ies).', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'study', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studies', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studying', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'studied', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'We _____ to school by bus.', 'We → go (pas de -s).', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'goes', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'go', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'going', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'gone', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ he work at MTN?', 'He → Does he...?', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I _____ not eat meat.', 'I do not / don''t eat.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'am', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The shop _____ at 8 a.m.', 'The shop = it → opens.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'open', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'opens', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'opening', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'opened', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'My parents _____ in Yamoussoukro.', 'Parents = pluriel → live.', 1, 1, 6);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'lives', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'live', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'living', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'lived', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ TV every evening.', 'She → watches (ch→ches).', 1, 1, 7);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'watch', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'watches', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'watching', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'watched', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ they speak English well?', 'They → Do they...?', 1, 1, 8);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He never _____ late.', 'He → arrives.', 1, 1, 9);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arrive', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arrives', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arriving', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'arrived', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Water _____ at 100°C.', 'Vérité générale → présent simple.', 1, 1, 10);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'boil', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'boils', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'boiling', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'boiled', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I always _____ breakfast before work.', 'I → have.', 1, 1, 11);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'having', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'had', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The sun _____ in the east.', 'Fait permanent → rises.', 1, 1, 12);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rise', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rises', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rising', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'rose', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She _____ not understand the question.', 'She does not understand.', 1, 1, 13);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ your mother cook well?', 'Your mother = she → Does.', 1, 1, 14);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'We usually _____ lunch at noon.', 'We → have.', 1, 1, 15);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'has', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'have', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'having', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'had', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He _____ three languages.', 'He → speaks.', 1, 1, 16);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'speak', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'speaks', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'speaking', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'spoke', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'The train _____ at 7:30.', 'Horaire fixe → présent simple.', 1, 1, 17);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'leave', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'leaves', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'leaving', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'left', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I _____ to music every night.', 'I → listen (pas de -s).', 1, 1, 18);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'listen', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'listens', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'listening', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'listened', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ it rain a lot in Abidjan?', 'It → Does it...?', 1, 1, 19);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Do', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Does', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'Are', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'They _____ not work on Saturdays.', 'They do not / don''t work.', 1, 1, 20);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'does', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'do', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'is', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'are', FALSE, 4);

-- Évaluation : Les Articles – A, AN, THE
INSERT INTO evaluations (module_id, title, description, question_count, time_limit_sec, pass_score, public_slug) VALUES ((SELECT id FROM modules WHERE code='GRAM-A1-003'), 'Évaluation – Les Articles – A, AN, THE', 'Évaluation complète du module.', 20, 1200, 50, 'gram_a1_003');
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He is _____ honest man.', 'Honest → h muet → an.', 1, 1, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I live in _____ small house.', 'Small commence par consonne → a.', 1, 1, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ moon is beautiful tonight.', 'La lune = unique → the.', 1, 1, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She bought _____ apple.', 'Apple → voyelle → an.', 1, 1, 4);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ children love chocolate.', 'Généralisation → pas d''article.', 1, 1, 5);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', TRUE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Can you open _____ window, please?', 'Fenêtre spécifique (connue) → the.', 1, 1, 6);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He is _____ university student.', 'University commence par /juː/ (consonne) → a.', 1, 1, 7);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I saw _____ interesting film yesterday.', 'Interesting → voyelle → an.', 1, 1, 8);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ water is essential for life.', 'L''eau en général → pas d''article.', 1, 1, 9);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', TRUE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Where is _____ nearest pharmacy?', 'Superlatif → the nearest.', 1, 1, 10);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She plays _____ piano very well.', 'Instrument de musique → the piano.', 1, 1, 11);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He wants to be _____ doctor.', 'Profession → a doctor.', 1, 1, 12);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I had _____ egg for breakfast.', 'Egg → voyelle → an.', 1, 1, 13);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ Eiffel Tower is in Paris.', 'Monument unique → the.', 1, 1, 14);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'She is reading _____ book I gave her.', 'Livre spécifique (précisé) → the.', 1, 1, 15);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'Can I have _____ glass of water?', 'Un verre quelconque → a.', 1, 1, 16);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', TRUE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ English is spoken worldwide.', 'Langue en général → pas d''article.', 1, 1, 17);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', TRUE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'He lives on _____ second floor.', 'Nombre ordinal → the second.', 1, 1, 18);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', TRUE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', 'I need _____ hour to finish.', 'Hour → h muet → /aʊ/ → an.', 1, 1, 19);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'a', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'an', TRUE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'the', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', FALSE, 4);
INSERT INTO questions (evaluation_id, level_id, question_type, question_text, explanation, difficulty, points, sort_order) VALUES (currval('evaluations_id_seq'), (SELECT id FROM levels WHERE code='A1'), 'mcq', '_____ Africa is a beautiful continent.', 'Continent → pas d''article devant Africa.', 1, 1, 20);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'A', FALSE, 1);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'An', FALSE, 2);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), 'The', FALSE, 3);
INSERT INTO answer_options (question_id, option_text, is_correct, sort_order) VALUES (currval('questions_id_seq'), '--', TRUE, 4);
-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 8/9 : GRILLE DE SCORING + FONCTIONS
-- ══════════════════════════════════════════════════════════════════
-- ============================================================================
-- AGTM — LOGIQUE DE SCORING ET APPRÉCIATION
-- ============================================================================

-- ============================================================================
-- TABLE : GRILLE D'APPRÉCIATION
-- ============================================================================
CREATE TABLE IF NOT EXISTS appreciation_grid (
    id              SERIAL PRIMARY KEY,
    min_percentage  DECIMAL(5,2) NOT NULL,
    max_percentage  DECIMAL(5,2) NOT NULL,
    appreciation_fr VARCHAR(50) NOT NULL,
    appreciation_en VARCHAR(50) NOT NULL,
    color           VARCHAR(7),
    icon            VARCHAR(30)
);

INSERT INTO appreciation_grid (min_percentage, max_percentage, appreciation_fr, appreciation_en, color, icon) VALUES
(90, 100, 'Excellent',     'Excellent',      '#22C55E', 'star'),
(75, 89.99, 'Très Bien',  'Very Good',      '#3B82F6', 'thumbs-up'),
(60, 74.99, 'Bien',       'Good',           '#F59E0B', 'check-circle'),
(50, 59.99, 'Passable',   'Satisfactory',   '#F97316', 'minus-circle'),
(0,  49.99, 'Insuffisant', 'Insufficient',  '#EF4444', 'x-circle');

-- ============================================================================
-- FONCTION : Déterminer le niveau CECRL à partir du score de placement
-- ============================================================================
-- Logique de scoring pour le test de placement (40 questions) :
--   Questions 1-8   (A1) : 1 point chacune = 8 pts max
--   Questions 9-16  (A2) : 1 point chacune = 8 pts max
--   Questions 17-24 (B1) : 1 point chacune = 8 pts max
--   Questions 25-32 (B2) : 1 point chacune = 8 pts max
--   Questions 33-40 (C1) : 1 point chacune = 8 pts max
--   Total max = 40 points
--
-- Grille de détermination du niveau :
--   0-8    → A1 (seules les questions A1 réussies ou partiellement)
--   9-14   → A2
--   15-22  → B1
--   23-30  → B2
--   31-40  → C1
--
-- Note : le test ne va que jusqu'à C1.
-- Pour un diagnostic C2, un test séparé est nécessaire.

-- ============================================================================
-- FONCTION PostgreSQL : get_placement_level
-- ============================================================================
CREATE OR REPLACE FUNCTION get_placement_level(score INT)
RETURNS VARCHAR(2) AS $$
BEGIN
    IF score >= 31 THEN RETURN 'C1';
    ELSIF score >= 23 THEN RETURN 'B2';
    ELSIF score >= 15 THEN RETURN 'B1';
    ELSIF score >= 9  THEN RETURN 'A2';
    ELSE RETURN 'A1';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FONCTION : get_appreciation
-- ============================================================================
CREATE OR REPLACE FUNCTION get_appreciation(percentage DECIMAL)
RETURNS VARCHAR(50) AS $$
BEGIN
    IF percentage >= 90 THEN RETURN 'Excellent';
    ELSIF percentage >= 75 THEN RETURN 'Très Bien';
    ELSIF percentage >= 60 THEN RETURN 'Bien';
    ELSIF percentage >= 50 THEN RETURN 'Passable';
    ELSE RETURN 'Insuffisant';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FONCTION : Correspondance Score TOEIC estimé
-- ============================================================================
-- Pour le diagnostic TOEIC (25 questions), estimation approximative :
--   0-5    → 10-250 (A1)
--   6-10   → 255-400 (A2)
--   11-15  → 405-600 (B1)
--   16-20  → 605-780 (B2)
--   21-25  → 785-990 (C1)

CREATE OR REPLACE FUNCTION estimate_toeic_score(score INT, total INT)
RETURNS INT AS $$
DECLARE
    ratio DECIMAL;
BEGIN
    ratio := score::DECIMAL / total;
    IF ratio >= 0.84 THEN RETURN 850;
    ELSIF ratio >= 0.64 THEN RETURN 700;
    ELSIF ratio >= 0.44 THEN RETURN 500;
    ELSIF ratio >= 0.24 THEN RETURN 300;
    ELSE RETURN 150;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- ══════════════════════════════════════════════════════════════════
-- ÉTAPE 9/9 : VÉRIFICATION POST-INSTALLATION
-- ══════════════════════════════════════════════════════════════════

-- Si tout est OK, commiter la transaction
COMMIT;

-- Vérifications (à exécuter séparément si besoin)
-- SELECT 'Niveaux' AS table_name, COUNT(*) AS count FROM levels
-- UNION ALL SELECT 'Programmes', COUNT(*) FROM programmes
-- UNION ALL SELECT 'Catégories', COUNT(*) FROM categories
-- UNION ALL SELECT 'Modules', COUNT(*) FROM modules
-- UNION ALL SELECT 'Objectifs', COUNT(*) FROM objectives
-- UNION ALL SELECT 'Quiz', COUNT(*) FROM quizzes
-- UNION ALL SELECT 'Évaluations', COUNT(*) FROM evaluations
-- UNION ALL SELECT 'Questions', COUNT(*) FROM questions
-- UNION ALL SELECT 'Options', COUNT(*) FROM answer_options
-- UNION ALL SELECT 'Tests placement', COUNT(*) FROM placement_tests
-- UNION ALL SELECT 'Tests niveau', COUNT(*) FROM level_tests;

-- ╔════════════════════════════════════════════════════════════════════════════╗
-- ║  FIN DE L'INSTALLATION                                                    ║
-- ║  Résultat attendu :                                                       ║
-- ║    Niveaux      : 6                                                       ║
-- ║    Programmes   : 7                                                       ║
-- ║    Catégories   : 25                                                      ║
-- ║    Modules      : 98                                                      ║
-- ║    Objectifs    : 102                                                     ║
-- ║    Quiz         : 34                                                      ║
-- ║    Évaluations  : 3                                                       ║
-- ║    Questions    : ~295                                                    ║
-- ║    Options      : ~985                                                    ║
-- ║    Tests placement : 3                                                    ║
-- ║    Tests niveau    : 6                                                    ║
-- ╚════════════════════════════════════════════════════════════════════════════╝
