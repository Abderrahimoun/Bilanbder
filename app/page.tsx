'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, Loader, PauseCircle, Target, AlertCircle, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const BilanTravail = () => {
  const [expandedCards, setExpandedCards] = useState([true, true, true, true]);

  interface Problem {
    text: string;
    solution?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }

  interface Protocol {
    id: number;
    title: string;
    description: string;
    image?: string;
    file?: string;
  }

  interface Card {
    title: string;
    badge: string;
    consequence: string;
    problems: Problem[];
    action?: string;
    protocols?: Protocol[];
  }

  const toggleCard = (index: number) => {
    const newExpanded = [...expandedCards];
    newExpanded[index] = !newExpanded[index];
    setExpandedCards(newExpanded);
  };

  const cards: Card[] = [
    {
      title: "Prototypage & Tests",
      badge: "Done",
      consequence: "Risques techniques non identifiés, solutions non validées",
      problems: [
        {
          text: "Processus de test : La mise en place (OSB + EPDM + joints)",
          solution: `Processus de test réalisable – Étanchéité OSB + EPDM + joints
🎯 Objectif du test

Vérifier la performance d'étanchéité et la compatibilité des matériaux (panneaux OSB, membrane EPDM et joints d'assemblage) dans les conditions réelles d'assemblage du dôme géodésique.

🧱 1. Préparation du prototype

➡️ Surface testée : maquette composée de 3 triangles OSB assemblés selon l'angle réel du dôme.

➡️ Dimensions suggérées : triangles de 60 cm de côté (pour manipulation aisée).

➡️ Structure :

  🔸 OSB 18 mm (avec bords rainurés ou droits)

  🔸Joints d'étanchéité en silicone neutre ou bande butyle

  🔸Membrane EPDM (épaisseur 1,2 mm) collée sur l'extérieur

⚙️ 2. Étapes de mise en œuvre

➡️ Assemblage des triangles OSB à l'aide de vis + joint d'étanchéité entre les bords.

➡️ Pose de l'EPDM :

  🔸Découper une bande couvrant les trois triangles.

  🔸 Coller avec une colle contact adaptée (colle EPDM pour bois).

  🔸 Prévoir recouvrement de 10 cm aux jonctions.

  🔸 Application des joints sur les arêtes externes (type mastic polyuréthane ou bande EPDM auto-adhésive).`
        }
      ],
      action: "Réaliser protocole de test et exécuter tests d'étanchéité sur maquette."
    },
    {
      title: "Étanchéité & Isolation",
      badge: "Done",
      consequence: "Incertitude sur performance réelle du dôme",
      problems: [
        {
          text: "Test d'étanchéité EPDM inter-triangle :",
          solution: `1) Préparation & Montage du Dispositif

Objectif
Déterminer l'angle minimal d'inclinaison garantissant un écoulement sans stagnation sur une bâche EPDM.

Matériel

- Triangle en bois sur base ajustable (charnière)
- Bâche EPDM tendue + pinces de maintien
- Seau en hauteur + tuyau flexible (alimentation en eau)
- Récipient de récupération de l'eau
- Inclinomètre / rapporteur d'angle
- Règle / mètre (pour mesures hauteur/base)

Montage (étapes)

1. Fixer le triangle en bois sur une table via charnière (plan incliné).
2. Tendre la bâche EPDM sur le triangle et bloquer avec des pinces.
3. Positionner le seau en charge et raccorder le tuyau pour l'apport d'eau.
4. Placer le récipient sous l'extrémité basse (collecte).
5. Mettre en place l'inclinomètre.

Mesure de l'angle (méthode)

- Base (adjacent) = 36,3 cm (fixe).
- Hauteur (opposé) = distance verticale relevée.

Calcul :
tan(α) = hauteur / base
⇒ α = arctan(hauteur / 36,3)

(Vérif. exemples : h = 9,3 → 14,4° ; h = 7,3 → 11,4° ; h = 5,3 → 8,3°.)

2) Procédure d'Essai d'Étanchéité (Exécution)

Principe
Tester plusieurs angles décroissants et observer écoulement vs stagnation, avec 3 répétitions par angle.

Étapes opératoires

1. Régler un angle initial élevé (≈ 15°).
2. Alimenter la bâche : ouvrir le débit (seau → tuyau) et laisser ruisseler.
3. Observer & noter :
   - Écoulement complet vers le récipient (Oui/Non)
   - Présence de stagnations visibles (Oui/Non)
4. Répéter 3× au même angle (fiabilité).
5. Diminuer l'angle (ex. 15° → 12° → 11° → 9° → 8°) et rejouer les étapes 2–4 à chaque palier.
6. Consigner les mesures de hauteur et recalculer α si nécessaire.
7. Valider le plus petit angle pour lequel aucune stagnation n'apparaît sur 3/3 essais.

Critères d'acceptation

- Succès : Écoulement complet sans stagnation (3 répétitions conformes).
- Échec : Toute poche d'eau résiduelle visible.

3) Résultats, Analyse & Conclusion

Tableau récapitulatif (extrait des mesures)
`,
          table: {
            headers: ["Hauteur (cm)", "Angle (°)", "Écoulement complet", "Stagnation"],
            rows: [
              ["9,3", "14,4", "Oui", "Non"],
              ["7,3", "11,4", "Oui", "Non"],
              ["5,3", "8,3", "Non", "Oui"]
            ]
          }
        },
        {
          text: "Fixation laine de chanvre :",
          solution: `1) 🎯 Objectif

Déterminer et mettre en œuvre une méthode fiable de fixation de la laine de chanvre sur la structure en bois du dôme géodésique, garantissant :

- Une bonne tenue mécanique dans le temps.
- Une isolation thermique et acoustique homogène.
- Une protection contre l'humidité (prévention de condensation).

2) ⚙️ Méthodologie de mise en œuvre

A. Préparation du support

- Nettoyer la surface intérieure du panneau OSB.
- Installer des tasseaux en bois (section 40×30 mm ou selon besoin) fixés sur l'OSB pour créer un vide technique.
  ➡️ Ce vide servira à loger la laine de chanvre et à maintenir une lame d'air ventilée.
- Vérifier la planéité et l'espacement entre les tasseaux (espacement ≈ 40–60 cm selon format des panneaux isolants).

B. Pose de la laine de chanvre

- Découper les panneaux ou rouleaux de laine de chanvre aux dimensions exactes de l'espace entre tasseaux.
- Insérer la laine de chanvre en compression légère entre les montants (elle doit tenir par friction naturelle).

C. Fixation complémentaire (options)

- Agrafes inox à large tête.
- Tiges de maintien ou rondelles isolantes vissées.
- Filet de maintien agrafé sur les tasseaux.
- Une légère tension horizontale pour éviter les affaissements.`
        },
        {
          text: "Récupération chanvre restée théorique",
          solution: "Pas encore réalisée"
        },
        {
          text: "Pas de test thermique réel",
          solution: "Pas encore réalisé"
        }
      ],
      action: "Tests EPDM en conditions réelles + définir méthode fixation isolation"
    },
    {
      title: "Analyse cycle de vie comparative des matériaux",
      badge: "Done",
      consequence: "Informations incomplètes sur l'impact environnemental et la recyclabilité des choix matériaux",
      problems: [
        {
          text: "Collecte et comparaison de données matériaux",
          solution: `Objectif:
Constituer une matrice comparative des matériaux (impact CO2e, recyclabilité, durabilité, coût).

Méthode:
- Rassembler fiches FDES / EPD et données fournisseurs.
- Normaliser les unités (kg CO2e/kg ou kg CO2e/m²).
- Comparer durabilité et fin de vie (recyclabilité / réemploi).
- Noter les points forts/faibles pour chaque matériau.

Livrable:
Tableau comparatif synthétique + recommandation priorisée (matériau préféré et alternatives).`
        }
      ],
      action: "Compiler FDES/EPD, construire tableau comparatif et formuler recommandations."
    },
    {
      title: "Protocole",
      badge: "En cours",
      consequence: "Protocoles de test et validation à définir",
      problems: [],
      protocols: [
        {
          id: 1,
          title: "Protocole 1",
          description: "Protocole de calcul de la surface d'un triangle du dôme",
          image: "/images/protocoles/protocole-1.png",
          file: "/protocoles/protocole-1.pdf"
        },
        {
          id: 2,
          title: "Protocole 2",
          description: "Test Technique pour definir le jeu pour les connecteurs base du dôme",
          image: "/images/protocoles/protocole-2.png",
          file: "/protocoles/protocole-2.pdf"
        }
      ],
      action: "Définir et documenter les protocoles de test avec images."
    },
    {
      title: "Rapport éthico-technique",
      badge: "En cours",
      consequence: "Documentation incomplète de l'approche éthique et technique du projet",
      problems: [
        {
          text: "Méthodologie de travail sur le rapport éthico-technique",
          solution: `🎯 Objectif du rapport éthico-technique

Documenter l'approche éthique et technique adoptée pour le développement du dôme géodésique low-tech, en mettant en évidence les choix de conception, les impacts environnementaux et sociaux, ainsi que les considérations éthiques.

📋 Structure du rapport

1. Introduction et contexte
   - Présentation du projet et de ses objectifs
   - Contexte du développement low-tech
   - Enjeux éthiques et techniques identifiés

2. Analyse technique
   - Choix des matériaux et justification
   - Processus de conception et de validation
   - Tests et protocoles mis en place
   - Performance technique attendue

3. Analyse éthique
   - Impact environnemental (ACV, recyclabilité)
   - Accessibilité et durabilité
   - Considérations sociales et économiques
   - Responsabilité dans la conception

4. Synthèse et perspectives
   - Bilan des choix effectués
   - Limites et améliorations possibles
   - Recommandations pour la suite

⚙️ Méthodologie de travail

➡️ Phase 1 : Collecte et organisation des données
  - Rassembler toutes les informations techniques du projet
  - Documenter les tests réalisés et leurs résultats
  - Compiler les analyses de cycle de vie des matériaux
  - Identifier les points éthiques à traiter

➡️ Phase 2 : Rédaction structurée
  - Rédiger chaque section de manière progressive
  - S'appuyer sur les données collectées et les tests effectués
  - Faire des liens entre aspects techniques et éthiques
  - Documenter avec photos et schémas

➡️ Phase 3 : Révision et amélioration
  - Vérifier la cohérence du document
  - Compléter les sections manquantes
  - Améliorer la clarté et la précision
  - Valider avec les encadrants`
        },
        {
          text: "Documentation des choix techniques et éthiques",
          solution: `Pour chaque choix technique majeur, documenter :
- La justification technique (performance, faisabilité)
- L'impact environnemental (ACV, recyclabilité)
- L'aspect éthique (accessibilité, durabilité, responsabilité)
- Les alternatives considérées et pourquoi elles ont été écartées`
        }
      ],
      action: "Rédiger et finaliser le rapport éthico-technique en documentant méthodiquement l'approche adoptée."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-8 h-8" />
            <h1 className="text-2xl md:text-4xl font-bold">
              Bilan de Travail
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-100">Abderrahim Mounouar - Travaux en Cours</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
            <AlertCircle size={16} />
            <span>Dernière mise à jour : Décembre 2025</span>
          </div>
        </div>

        {/* Work Plan Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Travaux Abder</h2>
          </div>

          <p className="text-sm text-gray-600 mb-6 pl-7">Plan d'action priorisé pour le semestre</p>

          <div className="space-y-4">
            {/* Done Section */}
            <div className="rounded-xl border-l-4 border-green-500 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-600" size={24} />
                <h3 className="font-bold text-green-800 text-lg">Done - Semaines 1-4</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-3 ml-9">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Prendre connaissance du sujet du projet</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Études sur Isolation thermique</span>
                </li>
              </ul>
            </div>

            {/* In Progress Section */}
            <div className="rounded-xl border-l-4 border-amber-500 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-amber-600 " size={24} />
                <h3 className="font-bold text-amber-800 text-lg">Done - Semaines 3-7</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-3 ml-9">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Tester EPDM en conditions réelles (étanchéité inter-triangle)</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Définir méthode fixation laine de chanvre</span>
                </li>
              </ul>
            </div>

            {/* Upcoming Section */}
            <div className="rounded-xl border-l-4 border-blue-500 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-blue-600 " size={24} />
                <h3 className="font-bold text-blue-800 text-lg">Done - Semaines 5-10</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-3 ml-9">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Definition de protocole de calcule de surface et fixation de triangles</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Test Technique pour definir le jeu pour les connecteurs base du dôme</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Définition d'une documentation pour explication du jeu choisi</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Préparation du rapport éthico-technique du dôme</span>
                </li>
              </ul>
            </div>

            {/* Continuous Section */}
            <div className="rounded-xl border-l-4 border-purple-500 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
                <h3 className="font-bold text-purple-800 text-lg">En cours - Semaines 5-10</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-3 ml-9">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Brainstorming/Définition de la forme de la porte () </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>-</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span>Documentation photo et technique au fur et à mesure</span>
                </li>
              </ul>
            </div>

            {/* Objective Section */}
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg p-6">
              <div className="flex items-start gap-3">
                <Target className="text-white flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">Objectif Principal</h3>
                  <p className="text-sm text-blue-50 leading-relaxed">
                    Priorité absolue: valider techniquement les solutions avant toute production en série.
                    Tester et valider les solutions pour éviter les blocages en phase finale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Cards */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <button
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleCard(index)}
                aria-expanded={expandedCards[index]}
                aria-label={`${expandedCards[index] ? 'Réduire' : 'Développer'} ${card.title}`}
              >
                <div className="flex items-center gap-4">
                  <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                    {card.title}
                  </h2>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-sm">
                    {card.badge}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedCards[index] ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              {/* Consequence - Always visible when collapsed */}
              {!expandedCards[index] && (
                <div className="px-6 pb-6">
                  <div className="bg-red-50 border-l-2 border-red-300 p-4 rounded">
                    <p className="text-sm text-gray-800">
                      <span className="font-semibold text-red-800">Conséquence:</span> {card.consequence}
                    </p>
                  </div>
                </div>
              )}

              {/* Card Content - Expanded with animation */}
              {expandedCards[index] && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-fadeIn">
                  <div className="pt-6">
                    {/* Consequence */}
                    <div className="bg-red-50 border-l-2 border-red-300 p-4 rounded mb-6">
                      <p className="text-sm text-gray-800">
                        <span className="font-semibold text-red-800">Conséquence:</span> {card.consequence}
                      </p>
                    </div>

                    {/* Protocols Section */}
                    {card.protocols && card.protocols.length > 0 && (
                      <>
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
                          Protocoles définis
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {card.protocols.map((protocol) => (
                            <a
                              key={protocol.id}
                              href={protocol.file || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-600 transition-all cursor-pointer block"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                {protocol.image ? (
                                  <div className="relative w-10 h-10 flex-shrink-0">
                                    <Image
                                      src={protocol.image}
                                      alt={protocol.title}
                                      fill
                                      className="object-contain rounded"
                                    />
                                  </div>
                                ) : (
                                  <ImageIcon className="text-blue-600 flex-shrink-0" size={20} />
                                )}
                                <h4 className="text-sm font-bold text-gray-900">{protocol.title}</h4>
                              </div>
                              {protocol.image && (
                                <div className="mb-3 rounded-lg overflow-hidden bg-white p-2 shadow-sm">
                                  <div className="relative w-full h-48 bg-gray-100 rounded">
                                    <Image
                                      src={protocol.image}
                                      alt={protocol.title}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                </div>
                              )}
                              <p className="text-xs text-gray-700 leading-relaxed">
                                {protocol.description}
                              </p>
                              {protocol.file && (
                                <div className="mt-3 flex items-center gap-2 text-xs text-blue-600 font-semibold">
                                  <span>📄 Ouvrir le PDF du protocole</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Problems */}
                    {card.problems && card.problems.length > 0 && (
                      <>
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
                          Points problématiques
                        </h3>
                        <div className="space-y-4 mb-6">
                          {card.problems.map((problem, pIndex) => (
                            <div key={pIndex} className="pl-2">
                              <div className="flex items-start gap-3 mb-3">
                                <span className="text-blue-600 text-xl flex-shrink-0 mt-0.5">🔄</span>
                                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                                  {problem.text}
                                </p>
                              </div>
                              {problem.solution && (
                                <div className="ml-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm">
                                  <p className="text-xs font-bold text-blue-900 mb-2 uppercase tracking-wide">
                                    💡 Comment je travaille dessus:
                                  </p>
                                  <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line">
                                    {problem.solution}
                                  </p>

                                  {problem.table && (
                                    <div className="mt-4 overflow-x-auto rounded-lg shadow-sm">
                                      <table className="min-w-full text-xs bg-white">
                                        <thead>
                                          <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                            {problem.table.headers.map((h, i) => (
                                              <th
                                                key={i}
                                                className="px-4 py-3 text-left font-bold text-gray-800 border-b-2 border-gray-300"
                                              >
                                                {h}
                                              </th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {problem.table.rows.map((row, rIdx) => (
                                            <tr 
                                              key={rIdx} 
                                              className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                                                rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                              }`}
                                            >
                                              {row.map((cell, cIdx) => (
                                                <td key={cIdx} className="px-4 py-3 text-gray-800">
                                                  {cell}
                                                </td>
                                              ))}
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Action Box */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-xl shadow-md">
                      <p className="text-sm font-bold text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                        <Target size={16} />
                        Action requise:
                      </p>
                      <p className="text-sm text-blue-50 leading-relaxed">
                        {card.action}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 pb-8">
          <p>Document de suivi MOUNOUAR - Dôme Géodésique </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BilanTravail;