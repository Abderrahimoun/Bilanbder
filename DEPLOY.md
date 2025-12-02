# Guide de Déploiement - Bilan de Travail

Ce guide vous explique comment rendre votre application accessible à tous via un lien public.

## Option 1 : Déploiement sur Vercel (Recommandé - Gratuit)

Vercel est la plateforme créée par les développeurs de Next.js. C'est la solution la plus simple et rapide.

### Méthode A : Via l'interface web Vercel (Plus simple)

1. **Créer un compte Vercel**
   - Allez sur [https://vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" et connectez-vous avec GitHub, GitLab ou Bitbucket

2. **Préparer votre code**
   - Assurez-vous que votre code est sur GitHub, GitLab ou Bitbucket
   - Si ce n'est pas le cas, poussez votre code :
     ```bash
     git add .
     git commit -m "Préparation pour déploiement"
     git push origin master
     ```

3. **Déployer sur Vercel**
   - Une fois connecté, cliquez sur "Add New Project"
   - Importez votre dépôt Git
   - Vercel détectera automatiquement que c'est un projet Next.js
   - Cliquez sur "Deploy"
   - Attendez quelques minutes...

4. **Votre site est en ligne !**
   - Vercel vous donnera une URL du type : `https://bilanabder.vercel.app`
   - Vous pouvez la partager avec tout le monde
   - Chaque nouveau commit sera automatiquement déployé

### Méthode B : Via Vercel CLI

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   vercel
   ```
   Suivez les instructions à l'écran.

4. **Déployer en production**
   ```bash
   vercel --prod
   ```

## Option 2 : Déploiement sur Netlify (Alternative gratuite)

1. **Créer un compte Netlify**
   - Allez sur [https://www.netlify.com](https://www.netlify.com)
   - Créez un compte gratuit

2. **Déployer**
   - Connectez votre dépôt Git
   - Configurez le build :
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Cliquez sur "Deploy"

## Option 3 : Déploiement sur GitHub Pages (Gratuit mais plus complexe)

Pour Next.js, vous devrez utiliser `next export` ou configurer GitHub Actions.

## Configuration recommandée pour Vercel

Votre projet est déjà configuré correctement. Vercel détectera automatiquement :
- ✅ Next.js 16
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Scripts de build

## Personnaliser l'URL

Sur Vercel, vous pouvez :
- Changer le nom du projet pour obtenir une URL personnalisée
- Ajouter un domaine personnalisé (gratuit avec sous-domaine Vercel)

## Mise à jour automatique

Une fois déployé, chaque fois que vous poussez du code sur votre dépôt Git, Vercel redéploiera automatiquement votre site.

---

**Recommandation** : Utilisez Vercel (Option 1, Méthode A) - C'est le plus simple et le plus rapide pour Next.js !

