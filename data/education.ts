// src/data/education.ts

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  type: "academic" | "certification" | "experience" | "language";
  description: string;
  highlights?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "internship-alphax",
    title: "React Developer Intern",
    institution: "Alpha X Co., Ltd.",
    type: "experience",
    description:
      "Gained hands-on professional industry experience developing, debugging, and styling clean components using modern React architectures.",
    highlights: [
      "Api integration ",
      "Real-time data fetching & state management",
      "State management & UI optimization",
    ],
  },
  {
    id: "itpec-certification",
    title: "ITPEC FE (Fundamental IT Engineer) & IP (IT Passport)",
    institution: "Pearl Yadana Vocational Training Center",
    type: "certification",
    description:
      "Mastered fundamental computer science engineering tracks, covering algorithmic complexities, network protocols, systems management, and data strategy verified by the regional ITPEC council.",
    highlights: ["Fundamental IT Engineer Certified", "IT Passport Certified"],
  },
  {
    id: "jlpt-language",
    title: "JLPT N3 & N4 Japanese Proficiency",
    institution: "Self-Guided Study",
    type: "language",
    description:
      "Independently structures intermediate language studies to unlock advanced listening metrics, architectural reading comprehension, and business kanji proficiency.",
    highlights: ["Passed JLPT N3", "Passed JLPT N4"],
  },
  {
    id: "ged-academic",
    title: "GED Graduate",
    institution: "Genesis Education & Language Center",
    type: "academic",
    description:
      "Earned US-accredited high school equivalency credential focusing on advanced analytics, scientific application, and mathematical reasoning foundations.",
    highlights: ["GED Certified"],
  },
];
