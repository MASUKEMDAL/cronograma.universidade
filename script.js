        const cells = document.querySelectorAll('td');
        const scheduleModal = document.getElementById('scheduleModal');
        const selectedDate = document.getElementById('selectedDate');
        const modalContent = document.getElementById('modalContent');
        const modalOverlay = document.getElementById('modalOverlay');

        // Estrutura de dados para armazenar as aulas com suas descrições
        const aulas = [
            {
                id: 'Oficinas_0800',
                titulo: 'Oficinas',
                horario: '08:00 - 08:50',
                modulo: 'Oficinas',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Convidamos você para a nossa aula Oficinasdutória, onde exploraremos conceitos de negócio que são cruciais e e se aplicam diretamente para o sucesso do atendimento em nossas ilhas.'
            },
            {
                id: 'Oficinas_0900',
                titulo: 'Cultura e Valores da Empresa',
                horario: '09:00 - 09:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_2',
                descricao: 'Descrição detalhada da Cultura e Valores da Empresa.'
            },
            {
                id: 'Oficinas_1000',
                titulo: 'Estrutura Organizacional e Ilhas de Atendimento',
                horario: '10:00 - 10:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_3',
                descricao: 'Descrição detalhada da Estrutura Organizacional e Ilhas de Atendimento.'
            },
            {
                id: 'Oficinas_1100',
                titulo: 'A Importância do Atendimento ao Cliente',
                horario: '11:00 - 11:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_4',
                descricao: 'Descrição detalhada sobre a importância do atendimento ao cliente.'
            },
            {
                id: 'Oficinas_1300',
                titulo: 'Ferramentas e Sistemas Essenciais',
                horario: '13:00 - 13:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_5',
                descricao: 'Descrição detalhada das Ferramentas e Sistemas Essenciais.'
            },
            {
                id: 'Oficinas_1400',
                titulo: 'Roteiros de Atendimento Básico',
                horario: '14:00 - 14:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_6',
                descricao: 'Descrição detalhada dos Roteiros de Atendimento Básico.'
            },
            {
                id: 'Oficinas_1500',
                titulo: 'Práticas de Comunicação Eficaz',
                horario: '15:00 - 15:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_7',
                descricao: 'Descrição detalhada das Práticas de Comunicação Eficaz.'
            },
            {
                id: 'Oficinas_1600',
                titulo: 'Sessão de Perguntas e Respostas',
                horario: '16:00 - 16:50',
                modulo: 'Oficinas',
                linkInscricao: 'LINK_FORM_Oficinas_8',
                descricao: 'Descrição detalhada da Sessão de Perguntas e Respostas.'
            },

            // Aulas do Módulo Projetos
            {
                id: 'Projetos_0800',
                titulo: 'Identificando Clientes Insatisfeitos',
                horario: '08:00 - 08:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_1',
                descricao: 'Descrição detalhada sobre como identificar clientes insatisfeitos.'
            },
             {
                id: 'Projetos_0900',
                titulo: 'Técnicas de Escuta Ativa e Empatia',
                horario: '09:00 - 09:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_2',
                descricao: 'Descrição detalhada sobre Técnicas de Escuta Ativa e Empatia.'
            },
             {
                id: 'Projetos_1000',
                titulo: 'Lidando com Reclamações Complexas',
                horario: '10:00 - 10:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_3',
                descricao: 'Descrição detalhada sobre como lidar com Reclamações Complexas.'
            },
             {
                id: 'Projetos_1100',
                titulo: 'Apresentando Soluções Eficazes',
                horario: '11:00 - 11:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_4',
                descricao: 'Descrição detalhada sobre como apresentar Soluções Eficazes.'
            },
            {
                id: 'Projetos_1300',
                titulo: 'Follow-up e Monitoramento',
                horario: '13:00 - 13:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_5',
                descricao: 'Descrição detalhada sobre Follow-up e Monitoramento.'
            },
             {
                id: 'Projetos_1400',
                titulo: 'Transformando Críticas em Oportunidades',
                horario: '14:00 - 14:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_6',
                descricao: 'Descrição detalhada sobre como transformar Críticas em Oportunidades.'
            },
             {
                id: 'Projetos_1500',
                titulo: 'Estudos de Caso e Simulações',
                horario: '15:00 - 15:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_7',
                descricao: 'Descrição detalhada sobre Estudos de Caso e Simulações.'
            },
             {
                id: 'Projetos_1600',
                titulo: 'Sessão de Feedback e Melhoria Contínua',
                horario: '16:00 - 16:50',
                modulo: 'Projetos',
                linkInscricao: 'LINK_FORM_Projetos_8',
                descricao: 'Descrição detalhada sobre Sessão de Feedback e Melhoria Contínua.'
            },

            // Aulas do Módulo Teoricas (Sala Zanqueta)
            {
                id: 'Teoricas_zanqueta_0800',
                titulo: 'Módulo 3 - Produtos Adquirência',
                horario: '08:00 - 08:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Produtos Adquirência: MAQUINAS, CARTOES ETC.'
            },
            {
                id: 'Teoricas_zanqueta_0900',
                titulo: 'Módulo 3 - Credenciamento de Estabelecimento',
                horario: '09:00 - 09:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Credenciamento de Estabelecimento: ESTABELECIMENTO E ETC.'
            },
             {
                id: 'Teoricas_zanqueta_1000',
                titulo: 'Módulo 3 - Meios de Captura',
                horario: '10:00 - 10:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Meios de Captura.'
            },
             {
                id: 'Teoricas_zanqueta_1100',
                titulo: 'Módulo 3 - Tudo sobre Contratos',
                horario: '11:00 - 11:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Tudo sobre Contratos.'
            },
             {
                id: 'Teoricas_zanqueta_1300',
                titulo: 'Módulo 3 - Taxas e Tarifas',
                horario: '13:00 - 13:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Taxas e Tarifas.'
            },
             {
                id: 'Teoricas_zanqueta_1400',
                titulo: 'Módulo 3 - Vendas',
                horario: '14:00 - 14:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Vendas.'
            },
             {
                id: 'Teoricas_zanqueta_1500',
                titulo: 'Módulo 3 - Pagamentos',
                horario: '15:00 - 15:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Pagamentos.'
            },
             {
                id: 'Teoricas_zanqueta_1600',
                titulo: 'Módulo 3 - Grandes Redes',
                horario: '16:00 - 16:50',
                modulo: 'Teoricas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Grandes Redes.'
            },

            // Aulas do Módulo Teoricas (Sala Milena)
             {
                id: 'Teoricas_Milena_0800',
                titulo: 'Módulo 3 - Grandes Redes',
                horario: '08:00 - 08:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Grandes Redes (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_0900',
                titulo: 'Módulo 3 - Pagamentos',
                horario: '09:00 - 09:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Pagamentos (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1000',
                titulo: 'Módulo 3 - Vendas',
                horario: '10:00 - 10:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Vendas (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1100',
                titulo: 'Módulo 3 - Taxas e Tarifas',
                horario: '11:00 - 11:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Taxas e Tarifas (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1300',
                titulo: 'Módulo 3 - Tudo sobre Contratos',
                horario: '13:00 - 13:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Tudo sobre Contratos (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1400',
                titulo: 'Módulo 3 - Meios de Captura',
                horario: '14:00 - 14:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Meios de Captura (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1500',
                titulo: 'Módulo 3 - Credenciamento de Estabelecimento',
                horario: '15:00 - 15:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Credenciamento de Estabelecimento (Sala Milena).'
            },
             {
                id: 'Teoricas_Milena_1600',
                titulo: 'Módulo 3 - Produtos Adquirência',
                horario: '16:00 - 16:50',
                modulo: 'Teoricas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Produtos Adquirência (Sala Milena).'
            },

            // Aulas do Módulo Praticas (Sala Zanqueta)
             {
                id: 'Praticas_zanqueta_0800',
                titulo: 'Aguardando informações',
                horario: '08:00 - 08:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Abastecimento.'
            },
             {
                id: 'Praticas_zanqueta_0900',
                titulo: 'Aguardando informações',
                horario: '09:00 - 09:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Recolha de Notas.'
            },
             {
                id: 'Praticas_zanqueta_1000',
                titulo: 'Aguardando informações',
                horario: '10:00 - 10:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Frota Crédito.'
            },
             {
                id: 'Praticas_zanqueta_1100',
                titulo: 'Aguardando informações',
                horario: '11:00 - 11:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Bomba Interna.'
            },
             {
                id: 'Praticas_zanqueta_1300',
                titulo: 'Aguardando informações',
                horario: '13:00 - 13:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Aquisição de Combustível.'
            },
             {
                id: 'Praticas_zanqueta_1400',
                titulo: 'Aguardando informações',
                horario: '14:00 - 14:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Manutenção.'
            },
             {
                id: 'Praticas_zanqueta_1500',
                titulo: 'Aguardando informações',
                horario: '15:00 - 15:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Telemetria.'
            },
             {
                id: 'Praticas_zanqueta_1600',
                titulo: 'Aguardando informações',
                horario: '16:00 - 16:50',
                modulo: 'Praticas',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - Pedágio Eletrônico.'
            },

            // Aulas do Módulo Praticas (Sala Milena)
             {
                id: 'Praticas_Milena_0800',
                titulo: 'Aguardando informações',
                horario: '08:00 - 08:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 2 - SIAG Legado e SIAG 3.'
            },
             {
                id: 'Praticas_Milena_0900',
                titulo: 'Aguardando informações',
                horario: '09:00 - 09:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Estabelecimento Praticas.'
            },
             {
                id: 'Praticas_Milena_1000',
                titulo: 'Aguardando informações',
                horario: '10:00 - 10:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 3 - Agência Nacional do Petróleo (ANP).'
            },
             {
                id: 'Praticas_Milena_1100',
                titulo: 'Aguardando informações',
                horario: '11:00 - 11:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 4 - Usuário Benefício (Aplicativo e Portal).'
            },
             {
                id: 'Praticas_Milena_1300',
                titulo: 'Aguardando informações',
                horario: '13:00 - 13:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 4 - Usuário Motorista (Aplicativo).'
            },
             {
                id: 'Praticas_Milena_1400',
                titulo: 'Aguardando informações',
                horario: '14:00 - 14:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 0 - Institucional e Ilhas de Atendimento.'
            },
             {
                id: 'Praticas_Milena_1500',
                titulo: 'Aguardando informações',
                horario: '15:00 - 15:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 0 - Condução de Atendimento (Roteiro e Confirmação de Segurança).'
            },
            {
                id: 'Praticas_Milena_1600',
                titulo: 'Aguardando informações',
                horario: '16:00 - 16:50',
                modulo: 'Praticas',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 0 - Condução de Atendimento (Roteiro e Confirmação de Segurança).'
            },
            // Aula das 16:00 - 16:50 na Sala Milena do Módulo Praticas não tem descrição no seu exemplo, então deixamos sem botão de descrição.

             // Aulas do Módulo Laboratoriais (Sala Zanqueta)
             {
                id: 'Laboratoriais_zanqueta_0800',
                titulo: 'Sem Informções',
                horario: '08:00 - 08:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pré-Pago).'
            },
            {
                id: 'Laboratoriais_zanqueta_0900',
                titulo: 'Sem Informções',
                horario: '09:00 - 09:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pós-Pago).'
            },
            {
                id: 'Laboratoriais_zanqueta_1000',
                titulo: 'Sem Informções',
                horario: '10:00 - 10:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Plataforma de Pagamentos e Gestão de Despesas).'
            },
            {
                id: 'Laboratoriais_zanqueta_1100',
                titulo: 'Sem Informções',
                horario: '11:00 - 11:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Vale Estar Bem e Empresarial).'
            },
            {
                id: 'Laboratoriais_zanqueta_1300',
                titulo: 'Sem Informções',
                horario: '13:00 - 13:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Bandeirado e Flexível).'
            },
            {
                id: 'Laboratoriais_zanqueta_1400',
                titulo: 'Sem Informções',
                horario: '14:00 - 14:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Bandeirado e Flexível).'
            },
            {
                id: 'Laboratoriais_zanqueta_1500',
                titulo: 'Sem Informções',
                horario: '15:00 - 15:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Bandeirado e Flexível).'
            },
            {
                id: 'Laboratoriais_zanqueta_1600',
                titulo: 'Sem Informções',
                horario: '16:00 - 16:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Zanqueta',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Bandeirado e Flexível).'
            },
            // Aulas das 14:00, 15:00, 16:00 na Sala Zanqueta do Módulo Laboratoriais não têm descrição no seu exemplo.

             // Aulas do Módulo Laboratoriais (Sala Milena)
            {
                id: 'Laboratoriais_Milena_0800',
                titulo: 'Aguardando Informações',
                horario: '08:00 - 08:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Bandeirado e Flexível) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_0900',
                titulo: 'Aguardando Informações',
                horario: '09:00 - 09:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Vale Estar Bem e Empresarial) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1000',
                titulo: 'Aguardando Informações',
                horario: '10:00 - 10:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta Corporativa (Plataforma de Pagamentos e Gestão de Despesas) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1100',
                titulo: 'Aguardando Informações',
                horario: '11:00 - 11:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pós-Pago) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1300',
                titulo: 'Aguardando Informações',
                horario: '13:00 - 13:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pré-Pago) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1400',
                titulo: 'Aguardando Informações',
                horario: '14:00 - 14:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pré-Pago) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1500',
                titulo: 'Aguardando Informações',
                horario: '15:00 - 15:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pré-Pago) (Sala Milena).'
            },
            {
                id: 'Laboratoriais_Milena_1600',
                titulo: 'Aguardando Informações',
                horario: '16:00 - 16:50',
                modulo: 'Laboratoriais',
                sala: 'Sala Milena',
                linkInscricao: 'https://forms.office.com/r/bemkHb57Ps',
                descricao: 'Descrição detalhada do Módulo 1 - Cesta de Benefícios (Pré-Pago) (Sala Milena).'
            },
             // Aulas das 14:00, 15:00, 16:00 na Sala Milena do Módulo Laboratoriais não têm descrição no seu exemplo.


            // Adicione as aulas dos módulos Oficinas aqui, se houver
            // Exemplo:
            // {
            //     id: 'Oficinas_0800',
            //     titulo: 'Horário Oficinas',
            //     horario: '08:00 - 08:50',
            //     modulo: 'Oficinas',
            //     linkInscricao: '', // Ou null se não houver inscrição
            //     descricao: 'Este horário está disponível.'
            // },

        ];

        // Função para exibir a descrição da aula em uma nova aba
        function showDescription(aulaId) {
            const aula = aulas.find(a => a.id === aulaId);

            if (aula && aula.descricao) {
                const title = `Descrição da Aula: ${aula.titulo}`;
                const description = aula.descricao;

                const newWindow = window.open('', '_blank');
                newWindow.document.write(`
                    <!DOCTYPE html>
                    <html lang="pt-BR">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${title}</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                            h2 { color: #1D3CF0; }
                        </style>
                    </head>
                    <body>
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body>
                    </html>
                `);
                newWindow.document.close();
            } else {
                const title = "Descrição Não Disponível";
                const description = "Descrição para esta aula não disponível.";
                 const newWindow = window.open('', '_blank');
                newWindow.document.write(`
                    <!DOCTYPE html>
                    <html lang="pt-BR">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${title}</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                            h2 { color: #1D3CF0; }
                        </style>
                    </head>
                    <body>
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body>
                    </html>
                `);
                newWindow.document.close();
            }
        }

         // Função para gerar o HTML do cronograma para um determinado módulo
        function gerarCronogramaHTML(moduleTitle) {
            if (moduleTitle === 'Vago' || moduleTitle === 'FOLGA' || moduleTitle === 'DSR') {
                 // Para dias especiais ou Vago, não mostra cronograma de aulas
                 return `<strong>${moduleTitle}</strong>: Sem atividades programadas.`;
            }

            let htmlContent = '';
            const aulasDoModulo = aulas.filter(aula => aula.modulo === moduleTitle);

            // Agrupar aulas por sala (se houver)
            const aulasPorSala = aulasDoModulo.reduce((acc, aula) => {
                const sala = aula.sala || 'Sem Sala Específica';
                if (!acc[sala]) {
                    acc[sala] = [];
                }
                acc[sala].push(aula);
                return acc;
            }, {});

            for (const sala in aulasPorSala) {
                if (sala !== 'Sem Sala Específica') {
                    htmlContent += `<br/><strong>${sala}</strong><br/>`;
                }

                // Ordenar aulas por horário
                const sortedAulas = aulasPorSala[sala].sort((a, b) => a.horario.localeCompare(b.horario));

                let addedLunch = false; // Flag para garantir que o almoço seja adicionado apenas uma vez por sala

                sortedAulas.forEach(aula => {
                    const [hora, minuto] = aula.horario.split(':').map(Number);

                    // Adiciona o almoço antes da primeira aula da tarde (a partir das 13:00)
                    if (!addedLunch && (hora >= 13 || (hora === 12 && minuto > 0)) ) {
                        // Verifica se há aulas antes E depois do almoço para adicionar o intervalo
                        const temAulaAntesAlmoco = sortedAulas.some(a => {
                            const [h, m] = a.horario.split(':').map(Number);
                            return h < 12 || (h === 12 && m === 0);
                        });
                        const temAulaDepoisAlmoco = sortedAulas.some(a => {
                            const [h, m] = a.horario.split(':').map(Number);
                            return h >= 13;
                        });

                        if (temAulaAntesAlmoco && temAulaDepoisAlmoco) {
                             htmlContent += '<div class="aula-item modal-lunch"><strong>12:00 - 13:00</strong> - ALMOÇO</div>';
                             addedLunch = true;
                        }
                    }

                     htmlContent += `
                        <div class="aula-item">
                            <strong>${aula.horario}</strong> - ${aula.titulo}
                            <div class="button-container">
                                ${aula.linkInscricao ? `<button class="button-enroll" onclick="enroll('${aula.linkInscricao}')">Se inscrever na aula</button>` : ''}
                                ${aula.descricao ? `<button class="button-description" onclick="showDescription('${aula.id}')">Descrição do Módulo</button>` : ''}
                            </div>
                        </div>
                    `;
                });

                 // Caso haja aulas apenas antes do almoço, adiciona o almoço no final
                 const temAulaAntesAlmocoOnly = sortedAulas.some(a => {
                     const [h, m] = a.horario.split(':').map(Number);
                     return h < 12 || (h === 12 && m === 0);
                 });
                 const temAulaDepoisAlmocoOnly = sortedAulas.some(a => {
                     const [h, m] = a.horario.split(':').map(Number);
                     return h >= 13;
                 });

                 if (temAulaAntesAlmocoOnly && !temAulaDepoisAlmocoOnly && !addedLunch) {
                     htmlContent += '<div class="aula-item modal-lunch"><strong>12:00 - 13:00</strong> - ALMOÇO</div>';
                 }
            }

            return htmlContent || '<strong>Não há detalhes disponíveis para este módulo.</strong>';
        }


        modalOverlay.addEventListener('click', () => {
            if (!scheduleModal.classList.contains('hidden')) {
                closeSchedule();
            }
        });

        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                // Impede que o clique nos botões dentro da célula abra o modal novamente
                if (event.target.tagName === 'BUTTON') {
                     return;
                }

                const dayNumberElement = cell.querySelector('.day-number');
                const dayNumber = dayNumberElement ? dayNumberElement.textContent.trim() : ''; // Pega o número do dia

                // Determina o texto do dia especial (DSR ou FOLGA)
                const specialDayTextElement = cell.querySelector('.special-day-text');
                const specialDayText = specialDayTextElement ? specialDayTextElement.textContent.trim() : '';

                // Determina o título do módulo
                const moduleTitleElement = cell.querySelector('.module-title');
                const moduleTitle = moduleTitleElement ? moduleTitleElement.textContent.trim() : '';


                if (cell.classList.contains('special-day')) {
                     // Se for um dia especial, usa o texto do dia especial para o título do modal
                     selectedDate.textContent = `(${dayNumber} de Maio de 2025 - ${specialDayText})`;

                     if (specialDayText.includes("FOLGA")) {
                         modalContent.innerHTML = `<strong>${specialDayText}</strong>: Dia de folga. Aproveite para descansar!`;
                     } else if (specialDayText.includes("DSR")) {
                         modalContent.innerHTML = `<strong>${specialDayText}</strong>: Descanso Semanal Remunerado. Dia de descanso.`;
                     } else {
                         // Caso haja outro texto especial no futuro
                         modalContent.innerHTML = `<strong>${specialDayText}</strong>: Informação especial.`;
                     }
                } else {
                    // Se não for um dia especial, usa o título do módulo (se existir)
                    const displayTitle = moduleTitle ? moduleTitle : 'Dia sem treinamento'; // Texto padrão se não tiver módulo
                    selectedDate.textContent = `(${dayNumber} de Maio de 2025 - ${displayTitle})`;

                    // Gera o HTML do cronograma dinamicamente com base no módulo
                    modalContent.innerHTML = gerarCronogramaHTML(moduleTitle);

                }
                scheduleModal.classList.remove('hidden');
                modalOverlay.classList.add('visible');
            });
        });

        function closeSchedule() {
            scheduleModal.classList.add('hidden');
            modalOverlay.classList.remove('visible');
        }

        function enroll(formLink) {
            window.open(formLink, '_blank');
        }

        // Adicionar event listener para os botões de descrição dentro do modal
        // Usamos delegação de eventos para capturar cliques nos botões que são adicionados dinamicamente
        modalContent.addEventListener('click', function(event) {
            if (event.target.classList.contains('button-description')) {
                // Extrai o ID da aula do atributo onclick
                const aulaId = event.target.getAttribute('onclick').match(/showDescription\('([^']+)'\)/)[1];
                showDescription(aulaId);
            }
        });
