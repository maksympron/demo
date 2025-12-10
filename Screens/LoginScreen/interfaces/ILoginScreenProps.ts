import type { Control } from 'react-hook-form';
import type { LoginSchema } from '@/lib/validations/auth';

export interface ILoginScreenProps {
  control: Control<LoginSchema>;
  onSubmit: () => void;
  isValid: boolean;
  isSubmitting: boolean;
}
