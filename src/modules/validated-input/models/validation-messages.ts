export const VALIDATION_MESSAGES = {
  required: '{0} alanı boş bırakılamaz',
  minlength: '{0} alanı en az {1} karakter uzunluğunda olmalıdır',
  maxlength: '{0} alanı en fazla {2} karakter uzunluğunda olmalıdır',
  min: '{0} alanı en az {1} olmalıdır',
  max: '{0} alanı en fazla {2} olmalıdır',
  email: '{0} alanı doğru bir e-posta formatında değil',
  pattern: '{0} alanı doğru formatta girilmelidir',
};

export interface ValidationMessages {
  required: string;
  minlength: string;
  maxlength: string;
  min: string;
  max: string;
  email: string;
  pattern: string;
}
