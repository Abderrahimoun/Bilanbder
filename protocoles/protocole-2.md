# Protocole 2 : Test d'angle minimal d'écoulement EPDM

## 🎯 Objectif

Déterminer l'angle minimal d'inclinaison garantissant un écoulement sans stagnation sur une bâche EPDM.

## 📦 Matériel nécessaire

- Triangle en bois sur base ajustable (charnière)
- Bâche EPDM tendue + pinces de maintien
- Seau en hauteur + tuyau flexible (alimentation en eau)
- Récipient de récupération de l'eau
- Inclinomètre / rapporteur d'angle
- Règle / mètre (pour mesures hauteur/base)

## 🔧 Montage (étapes)

1. Fixer le triangle en bois sur une table via charnière (plan incliné)
2. Tendre la bâche EPDM sur le triangle et bloquer avec des pinces
3. Positionner le seau en charge et raccorder le tuyau pour l'apport d'eau
4. Placer le récipient sous l'extrémité basse (collecte)
5. Mettre en place l'inclinomètre

## 📐 Mesure de l'angle (méthode)

### Paramètres
- Base (adjacent) = 36,3 cm (fixe)
- Hauteur (opposé) = distance verticale relevée

### Calcul
```
tan(α) = hauteur / base
⇒ α = arctan(hauteur / 36,3)
```

**Exemples de vérification :**
- h = 9,3 cm → 14,4°
- h = 7,3 cm → 11,4°
- h = 5,3 cm → 8,3°

## ⚙️ Procédure d'essai d'étanchéité

### Principe
Tester plusieurs angles décroissants et observer écoulement vs stagnation, avec 3 répétitions par angle.

### Étapes opératoires

1. Régler un angle initial élevé (≈ 15°)
2. Alimenter la bâche : ouvrir le débit (seau → tuyau) et laisser ruisseler
3. Observer & noter :
   - Écoulement complet vers le récipient (Oui/Non)
   - Présence de stagnations visibles (Oui/Non)
4. Répéter 3× au même angle (fiabilité)
5. Diminuer l'angle (ex. 15° → 12° → 11° → 9° → 8°) et rejouer les étapes 2–4 à chaque palier
6. Consigner les mesures de hauteur et recalculer α si nécessaire
7. Valider le plus petit angle pour lequel aucune stagnation n'apparaît sur 3/3 essais

## ✅ Critères d'acceptation

- **Succès** : Écoulement complet sans stagnation (3 répétitions conformes)
- **Échec** : Toute poche d'eau résiduelle visible

## 📊 Résultats attendus

### Tableau récapitulatif (extrait des mesures)

| Hauteur (cm) | Angle (°) | Écoulement complet | Stagnation |
|--------------|-----------|-------------------|------------|
| 9,3          | 14,4      | Oui               | Non        |
| 7,3          | 11,4      | Oui               | Non        |
| 5,3          | 8,3       | Non               | Oui        |

## 📝 Analyse & Conclusion

Ce protocole permettra de déterminer l'angle minimal nécessaire pour garantir un bon écoulement de l'eau sur la membrane EPDM du dôme géodésique, évitant ainsi les stagnations et les risques d'infiltration.

