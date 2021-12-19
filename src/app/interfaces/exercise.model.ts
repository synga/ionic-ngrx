/**
 * Dados de um exercicio
 */
export interface Exercise {
  /**
   * Id do exercicio no Firebase
   */
  id?: string;
  /**
   * Nome do exercicio
   */
  name: string;
  /**
   * Qual o tipo do exercicio, se ele é realizado por repetição ou por duração
   */
  exerciseType: 'duration' | 'repetition' | null;
  /**
   * Quantidade de vezes para ser realizado, pode ser o tempo em segundos ou quantas repetições
   */
  setQuantity: number;
  /**
   * Calorias gastas ao completar o exercicio.
   */
  calories: number;
}
