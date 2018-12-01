declare var $: any;

export function mitraValidation() {
    $('.ui.form')
        .form({
            fields: {
                mitra_name: {
                    identifier: 'mitra_name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your mitra name'
                        }
                    ]
                },
                mitra_code: {
                    identifier: 'mitra_code',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your mitra code'
                        }
                    ]
                },
                mitra_address: {
                    identifier: 'mitra_address',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your mitra address'

                        }
                    ]
                },
                mitra_npwp: {
                    identifier: 'mitra_npwp',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your mitra npwp'
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