export interface Iexercicios {
  nome: string;
  reps: string;
  sets: string;
}

// Agachamento drop 4x até a falha
// Leg 45 3x
// Agachamento sumô ou terra 3x até a falha
// Agachamento búlgaro 3x ate a falha
// Cadeira flexora 5x até a falha
// Stiff 3x
// Cadeira abdutora 3x até a falha
// Cadeira solear 5x
// Panturrilha em pé 5x até a falha

export const exercicios: Iexercicios[] = [
  {
    nome: "Agachamento",
    sets: "4x",
    reps: "Até a falha",
  },
  {
    nome: "Leg Press 45º",
    sets: "3x",
    reps: "15 repetições",
  },
  {
    nome: "Terra",
    sets: "3x",
    reps: "Até a falha",
  },
  {
    nome: "Cadeira Flexora",
    sets: "5x",
    reps: "Até a falha",
  },
  {
    nome: "Stiff",
    sets: "3x",
    reps: "12 repetições",
  },
  {
    nome: "Cadeira Abdutora",
    sets: "3x",
    reps: "Até a falha",
  },
  {
    nome: "Extensão Lateral",
    sets: "3x",
    reps: "Até a falha",
  },
  {
    nome: "Panturilha em pé",
    sets: "5x",
    reps: "Até a falha",
  },
];
