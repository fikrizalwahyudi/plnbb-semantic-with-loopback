declare var $: any;

export function userValidation() {
  $('.ui.form').form({
    fields: {
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your e-mail'
          },
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      name: {
        identifier  : 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
        ]
      },
      username: {
        identifier  : 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your username'
          }
        ]
      },
      role_id: {
        identifier  : 'role_id',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your role'
          }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your password'
          },
          {
            type   : 'length[6]',
            prompt : 'Your password must be at least 6 characters'
          }
        ]
      }
    }
  });
  if ($('.ui.form').form('is valid')) {
    return true;
  } else {
    return 0;
  }
}


export function userMitraValidation() {
    $('.ui.form').form({
      fields: {
        mitra_id: {
          identifier  : 'mitra_id',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your mitra'
            }
          ]
        }
      }
    });
    if ($('.ui.form').form('is valid')) {
      return true;
    } else {
      return 0;
    }
  }