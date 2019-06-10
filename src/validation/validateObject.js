const validateObject = {
  username : {
    presence: {
      message: '^Please enter your user name.'
    },
    length: {
      minimum: 3,
      message: '^Your user name must be at least 3 characters.'
    }
  },
  lastname : {
    presence: {
      message: '^Please enter your last name.'
    },
    length: {
      minimum: 3,
      message: '^Your last name must be at least 3 characters.'
    }
  },
  'email': {
    presence: {
      message: '^Please enter your email.'
    },
    email: {
      message: '^Please enter a valid email.'
    }
  },
  password : {
    presence: {
      message: '^Please enter a password.'
    },
    length: {
      minimum: 4,
      message: '^Your password must be at least 4 characters.'
    }
  },
  number:{
    presence:{
      message:'^Please enter your Phone Number'
    },
    length:{
      minimum:11,
      message:'^Enter Valid Phone Number'
    }
  }
}

export default validateObject