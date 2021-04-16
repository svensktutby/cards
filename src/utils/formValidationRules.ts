// Please enter a valid email address
export const isValidEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Password must contain only numbers and letters, and at least 8 or more characters
export const isValidPassword = (pass: string): boolean => {
  const re = /[a-z]\d|\d[a-z]/i;
  return re.test(pass) && pass.length > 8;
};

// Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
export const isValidPasswordStrong = (pass: string): boolean => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(pass);
};

export const validate = (values: FieldsType): FieldsType => {
  const errors: FieldsType = {};

  const email = values.email?.trim();
  const password = values.password?.trim();

  if (typeof email !== 'undefined' && email === '') {
    errors.email = 'Email address is required';
  } else if (email && !isValidEmail(email)) {
    errors.email = 'Email address is invalid';
  }
  if (typeof password !== 'undefined' && password === '') {
    errors.password = 'Password is required';
  } else if (password && password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }

  return errors;
};

export type FieldsType = Record<string, string>;

export type ValidateType = typeof validate;
