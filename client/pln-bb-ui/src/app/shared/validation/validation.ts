declare var $: any;

export function loginValidation() {
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



export function refKontrakValidation() {
  $('.ui.form')
    .form({
      fields: {
        no_kontrak: {
          identifier: 'no_kontrak',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your contract number'
            }
          ]
        },
        name: {
          identifier: 'name',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your contract name'
            }
          ]
        },
        tgl_pekerjaan: {
          identifier: 'tgl_pekerjaan',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your date'

            }
          ]
        },
        pltu: {
          identifier: 'pltu',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a PLTU'
            }
          ]
        },
        mitra: {
          identifier: 'mitra',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a Mitra'
            }
          ]
        },
        jenis: {
          identifier: 'jenis',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select CIF or DOB'
            }
          ]
        }
      }
    })
    ;
  if ($('.ui.form').form('is valid')) {
    return true;
  } else {
    return 0;
  }
}
