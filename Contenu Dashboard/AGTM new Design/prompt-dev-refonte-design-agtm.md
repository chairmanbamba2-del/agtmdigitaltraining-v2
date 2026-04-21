# PROMPT DÉVELOPPEUR — Refonte Design AGTM Digital Academy
## À transmettre tel quel à ton développeur

---

## CONTEXTE

Je te confie la refonte visuelle complète de la plateforme **AGTM Digital Academy** (africaglobaltraining.com). L'objectif est d'aligner son design avec celui de **LINGUA SPACE** que nous venons de produire — un design dark navy/or professionnel, raffiné et mémorable.

Le fichier `agtm-design-system.html` est ta **référence visuelle principale**. Ouvre-le dans un navigateur avant de commencer.

---

## CE QUI NE CHANGE PAS

- La structure HTML/Supabase existante
- La logique métier et les routes
- Le contenu (textes, données)

## CE QUI CHANGE ENTIÈREMENT

Tout le CSS et le design visuel.

---

## ÉTAPE 1 — Charger les nouvelles polices

Dans le `<head>` de **chaque page HTML**, remplacer les imports de polices existants par :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## ÉTAPE 2 — Remplacer le CSS global

Dans le fichier `styles.css` (ou `main.css`), **supprimer tout le contenu existant** et **coller le CSS intégral** du fichier `agtm-design-system.html` (tout ce qui se trouve entre les balises `<style>` et `</style>`).

Ce CSS contient :
- Les variables CSS (tokens) : couleurs, polices, espacements, ombres
- Reset et body
- Tous les composants : boutons, cartes, badges, formulaires, navbar, sidebar, tableau, alertes, modals, toasts, barres de progression, stats bar
- Animations et utilitaires

---

## ÉTAPE 3 — Appliquer les classes sur les éléments HTML

### 3.1 Body & fond
```html
<!-- Le body prend automatiquement le fond sombre via CSS -->
<!-- Ajouter à chaque page une structure de base : -->
<body>
  <nav class="navbar">...</nav>
  <div style="padding-top: 5rem;">
    <!-- contenu -->
  </div>
</body>
```

### 3.2 Navbar principale
```html
<nav class="navbar">
  <a href="/" class="navbar-brand">
    <span class="brand-sub">AGTM Digital Academy</span>
    <span class="brand-name">Plateforme</span>
  </a>
  <ul class="navbar-nav">
    <li><a href="/formations" class="active">Formations</a></li>
    <li><a href="/apprenants">Apprenants</a></li>
    <li><a href="/certifications">Certifications</a></li>
    <li><a href="/dashboard">Mon espace</a></li>
    <li><button class="btn btn-primary btn-sm">Se connecter</button></li>
  </ul>
</nav>
```

### 3.3 Sidebar (pages dashboard)
```html
<aside class="sidebar">
  <div class="sidebar-section">Menu principal</div>
  <a href="/dashboard" class="sidebar-link active">🏠 Tableau de bord</a>
  <a href="/formations" class="sidebar-link">📚 Mes formations</a>
  <a href="/certifications" class="sidebar-link">🎓 Certifications</a>
  
  <div class="sidebar-section">Compte</div>
  <a href="/profil" class="sidebar-link">👤 Mon profil</a>
  <a href="/paiements" class="sidebar-link">💳 Paiements</a>
  <a href="/parametres" class="sidebar-link">⚙️ Paramètres</a>
</aside>

<!-- Contenu principal décalé de 220px à gauche -->
<main style="margin-left: 220px; padding: 2rem 2.5rem;">
  ...
</main>
```

### 3.4 Titres et labels
```html
<!-- Eyebrow label (petit label au-dessus du titre) -->
<div class="section-label">Nos formations</div>

<!-- Titre principal -->
<h1 class="text-h1">Apprenez avec les <em>meilleurs</em></h1>

<!-- Sous-titre -->
<h2 class="text-h2">Programmes <em>certifiants</em></h2>

<!-- Corps de texte -->
<p class="text-body text-muted">Description de la formation...</p>
```

### 3.5 Cartes de formation
```html
<div class="grid-3">
  <div class="card course-card">
    <div class="course-card-thumb">📚</div> <!-- ou <img> -->
    <div class="course-card-body">
      <div class="course-card-category">Business English</div>
      <div class="course-card-title">Communication professionnelle en anglais</div>
      <div class="course-card-meta">
        <span>⏱ 24h</span>
        <span>📊 Niveau B1</span>
        <span class="badge badge-green">Disponible</span>
      </div>
    </div>
  </div>
  <!-- répéter pour chaque formation -->
</div>
```

### 3.6 Statistiques dashboard
```html
<!-- Stats bar en haut d'une page -->
<div class="stats-bar">
  <div class="stats-bar-item">
    <div class="val">1 240</div>
    <div class="lbl">Apprenants actifs</div>
  </div>
  <div class="stats-bar-item">
    <div class="val">48</div>
    <div class="lbl">Formations disponibles</div>
  </div>
  <div class="stats-bar-item">
    <div class="val">96%</div>
    <div class="lbl">Taux de satisfaction</div>
  </div>
  <div class="stats-bar-item">
    <div class="val">24/7</div>
    <div class="lbl">Accès à la plateforme</div>
  </div>
</div>

<!-- Cartes de stats individuelles -->
<div class="grid-4">
  <div class="card stat-card card-accent-gold">
    <div class="stat-icon">🎓</div>
    <div class="stat-value">42</div>
    <div class="stat-label">Formations suivies</div>
    <div class="stat-delta stat-delta-up">↑ +3 ce mois</div>
  </div>
  <!-- ... -->
</div>
```

### 3.7 Formulaires d'inscription / connexion
```html
<form>
  <div class="form-group">
    <label class="form-label">Nom complet <span style="color:#E8941A">*</span></label>
    <input type="text" class="form-input" placeholder="Votre nom">
  </div>
  
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" placeholder="vous@exemple.com">
    <!-- Si erreur : ajouter class="form-input error" -->
    <div class="form-error">⚠ Adresse email invalide</div>
  </div>
  
  <div class="form-group">
    <label class="form-label">Niveau actuel</label>
    <select class="form-select">
      <option>Débutant (A1)</option>
      <option>Élémentaire (A2)</option>
      <option>Intermédiaire (B1)</option>
    </select>
  </div>
  
  <button type="submit" class="btn btn-primary btn-full">
    S'inscrire →
  </button>
</form>
```

### 3.8 Tableaux (listes apprenants, paiements, etc.)
```html
<div class="card table-wrap">
  <table class="table">
    <thead>
      <tr>
        <th>Apprenant</th>
        <th>Formation</th>
        <th>Niveau</th>
        <th>Statut</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="color:#FAFAF8;font-weight:500">Konan Yao</td>
        <td style="color:#8A9AB5">Business English</td>
        <td><span class="badge badge-gold">B1</span></td>
        <td><span class="badge badge-green">Actif</span></td>
        <td><button class="btn btn-secondary btn-sm">Voir</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

### 3.9 Alertes
```html
<!-- Info -->
<div class="alert alert-info">ℹ️ Votre inscription a été reçue. Confirmation par email sous 24h.</div>

<!-- Succès -->
<div class="alert alert-success">✓ Paiement confirmé. Votre formation est maintenant accessible.</div>

<!-- Avertissement -->
<div class="alert alert-warning">⚠ Votre abonnement expire dans 7 jours.</div>

<!-- Erreur -->
<div class="alert alert-danger">✕ Échec du paiement. Vérifiez votre solde.</div>
```

### 3.10 Modals
```html
<div class="modal-overlay" id="modal-inscription">
  <div class="modal">
    <div class="modal-header">
      <h3>Confirmer l'inscription</h3>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <p class="text-body text-muted">Vous êtes sur le point de vous inscrire à la formation...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn btn-primary">Confirmer →</button>
    </div>
  </div>
</div>
```

### 3.11 Toasts (notifications)
```html
<!-- Conteneur (à placer juste avant </body>) -->
<div class="toast-container" id="toast-container"></div>

<script>
// Fonction réutilisable
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container')
  const toast = document.createElement('div')
  toast.className = `toast toast-${type}`
  toast.innerHTML = message
  toast.onclick = () => toast.remove()
  container.appendChild(toast)
  setTimeout(() => toast.remove(), 4000)
}

// Usage :
showToast('✓ Inscription confirmée !', 'success')
showToast('✕ Paiement échoué', 'error')
showToast('ℹ️ Votre session expire bientôt', 'info')
</script>
```

### 3.12 Animations au scroll
```html
<!-- Ajouter la classe sur tout élément à animer -->
<div class="fade-in-scroll">
  <div class="card course-card">...</div>
</div>

<script>
// Coller ce JS dans votre main.js ou en bas de chaque page
const observer = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible')
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el))
</script>
```

---

## ÉTAPE 4 — Page d'accueil (Landing)

```html
<!-- Structure recommandée de la homepage -->

<!-- 1. Navbar -->
<nav class="navbar">...</nav>

<!-- 2. Hero section -->
<section class="hero">
  <div style="position:relative;z-index:10;max-width:900px;margin:0 auto;text-align:center">
    <div class="section-label" style="justify-content:center">
      Plateforme certifiante
    </div>
    <h1 class="text-display" style="margin-bottom:.5rem">
      Formez-vous.<br><em>Certifiez-vous.</em>
    </h1>
    <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#8A9AB5;margin-bottom:2.5rem">
      AGTM Digital Academy — Excellence en formation professionnelle
    </h2>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="/inscription" class="btn btn-primary btn-lg">Commencer gratuitement →</a>
      <a href="/formations" class="btn btn-secondary btn-lg">Voir nos formations</a>
    </div>
  </div>
</section>

<!-- 3. Stats bar -->
<div class="stats-bar">...</div>

<!-- 4. Formations (grille) -->
<section style="max-width:1100px;margin:0 auto;padding:5rem 2rem">
  <div class="section-label">Nos programmes</div>
  <h2 class="text-h2" style="margin-bottom:3rem">Formations <em>certifiantes</em></h2>
  <div class="grid-3">
    <!-- cards -->
  </div>
</section>
```

---

## ÉTAPE 5 — Page Dashboard Apprenant

```html
<!-- Layout dashboard avec sidebar -->
<nav class="navbar">...</nav>
<aside class="sidebar">...</aside>

<main style="margin-left:220px;padding:2rem 2.5rem;margin-top:4rem">
  
  <!-- Header page -->
  <div class="section-label">Mon espace</div>
  <h1 class="text-h1" style="margin-bottom:2rem">
    Bonjour, <em>Konan</em> 👋
  </h1>
  
  <!-- KPIs -->
  <div class="grid-4" style="margin-bottom:2rem">
    <div class="card stat-card card-accent-gold">
      <div class="stat-icon">📚</div>
      <div class="stat-value">3</div>
      <div class="stat-label">Formations en cours</div>
    </div>
    <!-- ... -->
  </div>
  
  <!-- Progression -->
  <div class="card" style="padding:1.5rem;margin-bottom:2rem">
    <h3 class="text-h4" style="margin-bottom:1rem">Ma progression</h3>
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div class="progress-wrap">
        <div class="progress-header">
          <span class="text-sm text-muted">Business English</span>
          <span style="font-family:'Space Mono',monospace;font-size:.78rem;color:#E8941A">68%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill progress-gold" style="width:68%"></div>
        </div>
      </div>
    </div>
  </div>
  
</main>
```

---

## ÉTAPE 6 — Vérifications finales

Après avoir appliqué tous les changements, vérifier :

- [ ] Le fond de toutes les pages est `#080F1A` (sombre)
- [ ] La navbar est fixe en haut avec l'effet glassmorphism
- [ ] Les titres principaux utilisent `Cormorant Garamond` (serif)
- [ ] Les textes de corps utilisent `DM Sans`
- [ ] Les codes/stats/badges utilisent `Space Mono`
- [ ] L'or `#E8941A` apparaît sur les accents, valeurs importantes, labels
- [ ] Les cartes ont le fond `#132540` avec bordure `#1E3A5F`
- [ ] Les boutons primaires sont or sur fond sombre
- [ ] Les animations de scroll fonctionnent (`fade-in-scroll`)
- [ ] Le grain texture est visible (subtil, via le `::after` sur `body`)
- [ ] La scrollbar personnalisée est appliquée

---

## NOTES IMPORTANTES

1. **Vanilla JS uniquement** — Pas de React, pas de framework. Tout en HTML/CSS/JS natif.

2. **Le grain texture** sur le body est généré en CSS pur (SVG data URL). Il est subtle mais donne une texture premium. Ne pas le supprimer.

3. **Les polices** sont chargées depuis Google Fonts. Si le site est hors ligne, elles ne chargeront pas — c'est normal pour le développement local.

4. **Responsive** — Le CSS inclut des breakpoints à 768px. Tester sur mobile après chaque modification.

5. **Compatibilité** — `backdrop-filter` (effet glassmorphism navbar) ne fonctionne pas sur Firefox < 103. Acceptable pour notre cible (Chrome mobile).

6. **Fichier CSS final** — Une fois les modifications appliquées, le dev peut minifier le CSS avec un outil comme [cssnano](https://cssnano.co/) pour optimiser les performances.

---

## RÉSUMÉ EN 5 COMMANDES

```
1. Copier les imports de polices → dans chaque <head>
2. Vider styles.css → coller le CSS du design system
3. Remplacer les classes HTML → suivre le guide par composant
4. Coller le JS IntersectionObserver → en bas de chaque page
5. Tester sur Chrome + mobile → vérifier la checklist
```

---

*Design System AGTM Digital Academy v2.0*
*Aligné avec LINGUA SPACE · langue.africaglobaltraining.com*
*Chairman Bamba — Avril 2025*
