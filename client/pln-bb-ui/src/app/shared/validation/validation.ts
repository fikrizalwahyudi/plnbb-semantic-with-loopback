declare var $: any;

export function pltuValidation() {
  $('.ui.form')
    .form({
      fields: {
        pltu_name: {
          identifier: 'pltu_name',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your pltu name'
            }
          ]
        },
        pltu_code: {
          identifier: 'pltu_code',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your pltu code'
            }
          ]
        },
        pltu_address: {
          identifier: 'pltu_address',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your pltu address'

            }
          ]
        },
        pltu_npwp: {
          identifier: 'pltu_npwp',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your pltu npwp'
            }
          ]
        },
        pltu_status: {
          identifier: 'pltu_status',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your pltu status'
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

  export function roleValidation() {
    $('.ui.form')
      .form({
        fields: {
          role_name: {
            identifier: 'role_name',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your role name'
              }
            ]
          },
          role_desc: {
            identifier: 'role_desc',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your role description'
              }
            ]
          },
          role_status: {
            identifier: 'role_status',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your role status'

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
