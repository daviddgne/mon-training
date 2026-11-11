# Mon Training — PWA de musculation

Application personnelle en français, prête à héberger sur **GitHub Pages**. Aucun outil de compilation ni Codex obligatoire.

## Ce qu'elle fait

- 3 séances full body (A/B/C) et séance D facultative ; supersets prévus.
- Poids enregistrés **en lb**, avec détail barre / haltère / machine.
- Chronomètre total, pause, compte à rebours de repos après chaque série, avec possibilité de passer le repos.
- **Un seul pourcentage d'avancement pour l'ensemble de la séance** : (séries validées + sautées) / séries prévues. Séries réellement réalisées indiquées séparément.
- Charges et répétitions saisies série par série, annulation, historique et courbe de charge.
- Fiches techniques en français avec **deux photos** par mouvement, muscles principaux et erreurs fréquentes.
- Vidéos de Nassim Sahili vérifiées pour le squat et le tirage vertical ; pour les autres exercices, le bouton mène explicitement à une **recherche YouTube** (aucune fausse recommandation vidéo).
- Réglages : modifier séries, répétitions et temps de repos ; export/import JSON.
- Premier cycle de 8 semaines : option d'adaptation de volume (2 séries pour exercices initialement à 3 séries durant les deux premières semaines).
- Pas d'extension directe des triceps, compte tenu de la douleur signalée.

## Publier sur GitHub Pages (méthode sans ligne de commande)

1. Crée un nouveau dépôt public sur [github.com/new](https://github.com/new), par exemple `mon-training`.
2. Envoie **le contenu de ce dossier** (pas le ZIP lui-même) à la racine du dépôt. Sur GitHub : **Add file → Upload files → Commit changes**. Vérifie que `index.html` se trouve à la racine.
3. Ouvre **Settings → Pages → Build and deployment** ; choisis **Deploy from a branch**, branche **main**, répertoire **/(root)**, puis sauvegarde.
4. Lorsque GitHub Pages indique l'URL publique, ouvre `https://TON-PSEUDO.github.io/mon-training/` sur ton Samsung, depuis Chrome.
5. Dans le menu Chrome (⋮), touche **Ajouter à l'écran d'accueil** puis **Installer** si proposé.

GitHub Pages nécessite HTTPS pour que le service worker fonctionne, ce qui est le cas de l'URL `github.io`.

## Tester sur ordinateur avant publication

Depuis ce dossier :

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000/` dans un navigateur. La PWA s'installe normalement seulement sur HTTPS ou `localhost`.

## Données et confidentialité

Tout le suivi est stocké localement dans `localStorage` sur **un seul navigateur/appareil**. Aucune synchronisation automatique avec GitHub, et aucun compte. Les photos s'affichent depuis `raw.githubusercontent.com` lorsqu'il y a du réseau et sont mises en cache au fil des ouvertures si le navigateur l'autorise. **Toutes les photos ne sont pas garanties hors connexion avant d'avoir été consultées.** Les liens vidéo nécessitent Internet.

Sauvegarde ton historique avec **Réglages → Exporter JSON**. Si tu changes de téléphone ou effaces les données du navigateur, restaure via **Importer JSON**.

## Visuels et sources

Bibliothèque des démonstrations : [yuhonas/free-exercise-db](https://github.com/yuhonas/free-exercise-db), distribuée sous [Unlicense](https://github.com/yuhonas/free-exercise-db/blob/main/LICENSE.md). Certaines images sont issues de compilations antérieures attribuées à Everkinetic. Les images servent de guides de position ; certaines variantes (bulgares, oiseau) sont signalées comme **indicatives** lorsque le matériel ou la position diffèrent.

Vidéos de Nassim Sahili : squat https://www.youtube.com/watch?v=J_Zm4XvE__s ; tirage vertical https://www.youtube.com/watch?v=172pibkUe1Y

## Limites connues

- Alerte sonore/vibration fiable uniquement lorsque l'application est au premier plan. Les timers recalculent le temps réel au retour de l'application, même après verrouillage.
- Pas de sauvegarde cloud ni de synchronisation entre appareils.
- Les illustrations sont hébergées à l'extérieur : elles peuvent disparaître ou nécessiter du réseau.
- Une douleur persistante au triceps, à l'omoplate ou au genou nécessite de ne pas forcer un mouvement douloureux et, si elle persiste, un avis professionnel.
- L'application est une première version personnelle, pas un outil médical.