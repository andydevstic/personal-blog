module.exports = {
  auth: {
    '01': 'Unauthorized user!',
    '02': 'Invalid token!',
    '03': 'Username not found!',
    '04': 'Password is incorrect!',
    '05': 'Username or password is incorrect',
  },
  register: {
    '01': 'Passwords are mismatch!',
    '02': 'Internal error!',
  },
  values: {
    '01': (name) => `${name} must not be null!`
  }
}