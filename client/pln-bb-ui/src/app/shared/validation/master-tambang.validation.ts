declare var $: any;

export function tambangValidation() {
    $('.ui.form')
        .form({
            fields: {
                nama_tambang: {
                    identifier: 'nama_tambang',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Masukkan nama tambang'
                        }
                    ]
                },
                sertifikat_tambang: {
                    identifier: 'sertifikat_tambang',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Masukkan nomer sertifikat'
                        }
                    ]
                },
                jenis_tambang: {
                    identifier: 'jenis_tambang',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Pilih jenis tambang'

                        }
                    ]
                },
                lokasi_tambang: {
                    identifier: 'lokasi_tambang',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Pilih lokasi tambang'
                        }
                    ]
                },
                tanggal_berlaku: {
                    identifier: 'tanggal_berlaku',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Tentukan tanggal berlaku'
                        }
                    ]
                },
                tanggal_habis: {
                    identifier: 'tanggal_habis',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Tentukan tanggal habis'
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