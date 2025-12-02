'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, LoaderCircleIcon, PauseCircleIcon } from 'lucide-react';

const BilanTravail = () => {
  const [expandedCards, setExpandedCards] = useState([true, true]);

  interface Problem {
    text: string;
    solution?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }

  interface Card {
    title: string;
    badge: string;
    consequence: string;
    problems: Problem[];
    action?: string;
  }

  type ToggleCard = (index: number) => void;

  const toggleCard: ToggleCard = (index) => {
    const newExpanded: boolean[] = [...expandedCards];
    newExpanded[index] = !newExpanded[index];
    setExpandedCards(newExpanded);
  };

  const cards: Card[] = [
    {
      title: "Prototypage & Tests",
      badge: "En cours",
      consequence: "Risques techniques non identifiés, solutions non validées",
      problems: [
        {
          text: "Processus de test : La mise en place (OSB + EPDM + joints)",
          solution: `Processus de test réalisable – Étanchéité OSB + EPDM + joints
🎯 Objectif du test

Vérifier la performance d’étanchéité et la compatibilité des matériaux (panneaux OSB, membrane EPDM et joints d’assemblage) dans les conditions réelles d’assemblage du dôme géodésique.

🧱 1. Préparation du prototype

➡️ Surface testée : maquette composée de 3 triangles OSB assemblés selon l’angle réel du dôme.

➡️ Dimensions suggérées : triangles de 60 cm de côté (pour manipulation aisée).

➡️ Structure :

  🔸 OSB 18 mm (avec bords rainurés ou droits)

  🔸Joints d’étanchéité en silicone neutre ou bande butyle

  🔸Membrane EPDM (épaisseur 1,2 mm) collée sur l’extérieur

⚙️ 2. Étapes de mise en œuvre

➡️ Assemblage des triangles OSB à l’aide de vis + joint d’étanchéité entre les bords.

➡️ Pose de l’EPDM :

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
      badge: "En Cours",
      consequence: "Incertitude sur performance réelle du dôme",
      problems: [
        {
          text: "Test d'étanchéité EPDM inter-triangle :",
          solution: `1) Préparation & Montage du Dispositif

Objectif
Déterminer l’angle minimal d’inclinaison garantissant un écoulement sans stagnation sur une bâche EPDM.

Matériel

- Triangle en bois sur base ajustable (charnière)
- Bâche EPDM tendue + pinces de maintien
- Seau en hauteur + tuyau flexible (alimentation en eau)
- Récipient de récupération de l’eau
- Inclinomètre / rapporteur d’angle
- Règle / mètre (pour mesures hauteur/base)

Montage (étapes)

1. Fixer le triangle en bois sur une table via charnière (plan incliné).
2. Tendre la bâche EPDM sur le triangle et bloquer avec des pinces.
3. Positionner le seau en charge et raccorder le tuyau pour l’apport d’eau.
4. Placer le récipient sous l’extrémité basse (collecte).
5. Mettre en place l’inclinomètre.

Mesure de l’angle (méthode)

- Base (adjacent) = 36,3 cm (fixe).
- Hauteur (opposé) = distance verticale relevée.

Calcul :
tan(α) = hauteur / base
⇒ α = arctan(hauteur / 36,3)

(Vérif. exemples : h = 9,3 → 14,4° ; h = 7,3 → 11,4° ; h = 5,3 → 8,3°.)

2) Procédure d’Essai d’Étanchéité (Exécution)

Principe
Tester plusieurs angles décroissants et observer écoulement vs stagnation, avec 3 répétitions par angle.

Étapes opératoires

1. Régler un angle initial élevé (≈ 15°).
2. Alimenter la bâche : ouvrir le débit (seau → tuyau) et laisser ruisseler.
3. Observer & noter :
   - Écoulement complet vers le récipient (Oui/Non)
   - Présence de stagnations visibles (Oui/Non)
4. Répéter 3× au même angle (fiabilité).
5. Diminuer l’angle (ex. 15° → 12° → 11° → 9° → 8°) et rejouer les étapes 2–4 à chaque palier.
6. Consigner les mesures de hauteur et recalculer α si nécessaire.
7. Valider le plus petit angle pour lequel aucune stagnation n’apparaît sur 3/3 essais.

Critères d’acceptation

- Succès : Écoulement complet sans stagnation (3 répétitions conformes).
- Échec : Toute poche d’eau résiduelle visible.

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
- Une protection contre l’humidité (prévention de condensation).

2) ⚙️ Méthodologie de mise en œuvre

A. Préparation du support

- Nettoyer la surface intérieure du panneau OSB.
- Installer des tasseaux en bois (section 40×30 mm ou selon besoin) fixés sur l’OSB pour créer un vide technique.
  ➡️ Ce vide servira à loger la laine de chanvre et à maintenir une lame d’air ventilée.
- Vérifier la planéité et l’espacement entre les tasseaux (espacement ≈ 40–60 cm selon format des panneaux isolants).

B. Pose de la laine de chanvre

- Découper les panneaux ou rouleaux de laine de chanvre aux dimensions exactes de l’espace entre tasseaux.
- Insérer la laine de chanvre en compression légère entre les montants (elle doit tenir par friction naturelle).

C. Fixation complémentaire (options)

- Agrafes inox à large tête.
- Tiges de maintien ou rondelles isolantes vissées.
- Filet de maintien agrafé sur les tasseaux.
- Une légère tension horizontale pour éviter les affaissements.`
        },
        {
          text: "Récupération chanvre restée théorique",
          solution:
            "Pas encore réalisée"
        },
        {
          text: "Pas de test thermique réel",
          solution:
            "Pas encore réalisé"
        }
      ],
      action: "Tests EPDM en conditions réelles + définir méthode fixation isolation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bilan de Travail - Abderrahim Mounouar
          </h1>
          <p className="text-lg text-gray-600">Travaux en Cours</p>
        </div>

        {/* Orientations Semestre 2025A - nouvelle section */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2l2 5 5 .5-4 3 1.2 5L12 14l-4.2 1.5L9 10 5 7.5 10 7 12 2z" strokeWidth="1.2"/>
            </svg>
            <h2 className="text-xl font-semibold text-gray-900">Travaux Abder</h2>
          </div>

          <p className="text-sm text-gray-600 mb-4">Plan d'action priorisé </p>

          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-green-300 bg-green-50 p-4">
              <h3 className="font-semibold text-green-800 mb-2">Done - Semaines 1-4</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5" size={18} />
                  <span>Prendre connaissance du sujet du projet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5" size={18} />
                  <span>Etudes sur Isolation thermique</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-amber-300 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800 mb-2">En cours - Semaines 3-7</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <LoaderCircleIcon className="text-yellow-600 mt-0.5" size={18} />
                  <span>Tester EPDM en conditions réelles (étanchéité inter-triangle)</span>
                </li>
                <li className="flex items-start gap-2">
                  <LoaderCircleIcon className="text-yellow-500 mt-0.5" size={18} />
                  <span>Définir méthode fixation laine de chanvre</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-300 bg-yellow-50 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">/ - Semaines 5-10</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <PauseCircleIcon className="text-sky-500 mt-0.5" size={18} />
                  <span>Assembler module test complet (structure + OSB + EPDM + isolation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <PauseCircleIcon className="text-sky-500 mt-0.5" size={18} />
                  <span>Réaliser 1 prototype low‑tech fonctionnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <PauseCircleIcon className="text-sky-500 mt-0.5" size={18} />
                  <span>Tests mécaniques et thermiques</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-amber-300 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800 mb-2">/ - Continu</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <PauseCircleIcon className="text-sky-500 mt-0.5" size={18} />
                  <span>Analyse cycle de vie comparative des matériaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <PauseCircleIcon className="text-sky-500 mt-0.5" size={18} />
                  <span>Étude fondations réversibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <LoaderCircleIcon className="text-green-600 mt-0.5" size={18} />
                  <span>Documentation photo et technique au fur et à mesure</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-blue-200 bg-blue-50 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Objectif</h3>
              <p className="text-sm text-gray-700">
                Priorité absolue: valider techniquement les solutions avant toute production en série.
               Tester et valider les solutions pour éviter les blocages en phase finale.
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-l-4 border-red-500 shadow-sm"
            >
              {/* Card Header */}
              <div
                className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h2>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                    {card.badge}
                  </span>
                </div>
                {expandedCards[index] ? (
                  <ChevronUp className="text-gray-400" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </div>

              {/* Consequence - Always visible when collapsed */}
              {!expandedCards[index] && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Conséquence:</span> {card.consequence}
                  </p>
                </div>
              )}

              {/* Card Content - Expanded */}
              {expandedCards[index] && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <div className="pt-4">
                    {/* Consequence */}
                    <p className="text-sm text-gray-700 mb-4">
                      <span className="font-semibold">Conséquence:</span> {card.consequence}
                    </p>

                    {/* Problems */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Points problématiques:
                    </h3>
                    <div className="space-y-3 mb-4">
                      {card.problems.map((problem, pIndex) => (
                        <div key={pIndex} className="pl-2">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 text-base">🔄</span>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {problem.text}
                            </p>
                          </div>
                          {problem.solution && (
                            <div className="ml-7 mt-1 bg-blue-50 border-l-4 border-blue-200 p-3 rounded">
                              <p className="text-xs font-semibold text-blue-800 mb-1">
                                Comment je travaille dessus:
                              </p>
                              <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line">
                                {problem.solution}
                              </p>

                              {problem.table && (
                                <div className="mt-3 overflow-x-auto">
                                  <table className="min-w-full text-xs divide-y divide-gray-200">
                                    <thead>
                                      <tr className="bg-gray-100">
                                        {problem.table.headers.map((h, i) => (
                                          <th
                                            key={i}
                                            className="px-3 py-2 text-left font-semibold text-gray-700"
                                          >
                                            {h}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                      {problem.table.rows.map((row, rIdx) => (
                                        <tr key={rIdx} className={rIdx % 2 === 0 ? "" : "bg-gray-50"}>
                                          {row.map((cell, cIdx) => (
                                            <td key={cIdx} className="px-3 py-2 text-gray-800">
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

                    {/* Action Box */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Action:
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {card.action}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BilanTravail;