function toCheckmembership() {

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

  //the dummyLogin

  const dummylogin = {
    email: 'viivion@stark.com',
    password: 'iamvivion'
  }

  //using the dummylogindata to test the Logic

  const isMember = users.find(user => (user.email === dummylogin.email) && (user.password === dummylogin.password))
  if (isMember) {
    console.log('Welcome!')
  } else {
    console.log('Username/Password錯誤')
  }

}

toCheckmembership()