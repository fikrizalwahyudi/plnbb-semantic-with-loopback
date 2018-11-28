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