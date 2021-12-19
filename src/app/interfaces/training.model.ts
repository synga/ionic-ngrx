import { Exercise } from './exercise.model';

/**
 * Interface para um exercicio realizado
 */
export interface Training {
  /**
   * Id do documento no Firebase
   */
  id: string;
  /**
   * Dados do exercicio realizado
   */
  exercise: Exercise;
  /**
   * Se o exercicio foi realizado ou cancelado
   */
  status: 'completed' | 'cancelled' | null;
  /**
   * Data do serviço realizado
   */
  date: number;
}
