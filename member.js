function toCheckmembership(inputMember) {

  // the usersDatabase
  const users = [
    {
      firstName: 'Vivion',
      email: 'vivion@stark.com',
      password: 'iamvivion'
    },
    {
      firstName: 'Alex',
      email: 'alex@hotmail.com',
      password: 'alexleader'
    },
    {
      firstName: 'Jerry',
      email: 'jerry@parker.com',
      password: 'iamjerry'
    },
    {
      firstName: 'Tim',
      email: 'tim@gamil.com',
      password: '*tim#@$!'
    },
    {
      firstName: 'Tom',
      email: 'tom@shield.com',
      password: 'tompassword'
    }
  ]


  //Check the inputMember

  const isMember = users.find(user => (user.email === inputMember.email) && (user.password === inputMember.password))
  if (isMember) {
    return isMember
  } else {
    return false
  }

}

// to export the toCheckmembership function to other files
module.exports = toCheckmembership