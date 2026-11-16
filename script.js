function mostrarAno(ano, botaoClicado) {
    const textoDisplay = document.getElementById('textoCronologia');
    
    if (ano === '1943') {
        textoDisplay.textContent = "Valerie L. Thomas é uma mulher negra americana nascida em 8 de fevereiro de 1943, em Baltimore, no estado de Maryland nos EUA. Ela nasceu em plena Segunda Guerra Mundial e cresceu na histórica comunidade negra de Cherry Hill, em Baltimore, em um período marcado pelas leis de segregação racial e por profundas barreiras de gênero que praticamente excluíam mulheres negras das carreiras científicas. Apesar das limitações impostas pela sociedade na época, seus pais valorizavam profundamente a educação dentro de casa, incentivando um ambiente de aprendizado prático. Ainda muito pequena, Valerie ficava fascinada observando os componentes internos dos aparelhos de rádio e das primeiras televisões da família, tentando compreender por conta própria como circuitos, válvulas e fios trabalhavam juntos para transmitir sons e imagens à distância.";
    } else if (ano === '1960') {
        textoDisplay.textContent = "Desde pequena ela nutria interesse pela área de eletrônica, matemática e fisica, o que a fez emprestar um livro chamado 'o primeiro livro de eletrônica para meninos', com a fé de que seu pai a ajudasse a entender mais sobre o assunto, o que ele não fez. Ela frequentava um colégio apenas para meninas, e apesar do incentivo da escola sobre moral, não havia disciplinas científicas que supriam o desejo de Valerie por conhecimento ainda mais pela escola ter acabado de ter sido integrada. Por causa disso Valerie começou a frequentar aulas de matemática avançada mais como algo por si mesma.";
    } else if (ano === '1964') {
        textoDisplay.innerHTML = `
        <p>Já pela vida adulta, ela ingressou na Universidade Estadual de Morgan aos seus 20 anos, cursando física, sendo uma das únicas duas alunas do curso. Como ela era uma excelente aluna conseguiu com maestria adquirir o conhecimento de matemática, o que lhe conseguiu um bom emprego na NASA. A Morgan State University era uma instituição historicamente negra que ofereceu o ambiente necessário para que ela pudesse crescer academicamente, graduando-se com honras máximas em física em 1964. Imediatamente após a formatura, ela foi contratada pela agência espacial americana (NASA) no Goddard Space Flight Center, em Greenbelt, Maryland, começando sua carreira como analista de dados e matemática, onde passou a desenvolver sistemas de computação em tempo real para dar suporte aos centros de controle de operações de satélites em órbita.</p>
        <div class="imagens-jornada">
            <figure class="card-cronologia">
            <img src="VT_jovem.jpg" alt="Juventude" class="foto-cronologia">
                <figcaption>Valerie Thomas juventude</figcaption>
            </figure>
        </div>
            `;

    } else if (ano== '1970 - 1981') {
        textoDisplay.innerHTML = `
         <p>Ela participou de alguns projetos e fez uma tecnologia, na qual a NASA busca continuar utilizando e amplificando para que possa ser usado em mais áreas. Durante a década de 1970, Valerie assumiu um papel fundamental na supervisão do desenvolvimento dos sistemas de processamento de imagens para o programa Landsat, o primeiro satélite projetado para capturar imagens multiespectrais da superfície da Terra a partir do espaço, além de liderar o projeto LACIE (Large Area Crop Inventory Experiment), que utilizava dados de satélite para prever a produção mundial de trigo. No entanto, seu maior marco ocorreu a partir de 1976 e 1977, quando assistiu a uma exposição científica que utilizava espelhos côncavos para criar a ilusão óptica de uma lâmpada acesa mesmo após ser removida do soquete. Fascinada pelo fenômeno, ela iniciou experimentos próprios que resultaram na invenção do Transmissor de Ilusão (Illusion Transmitter), cuja patente oficial foi registrada e concedida em 21 de outubro de 1980 (sob o número US 4,229,761). Esse dispositivo utiliza dois espelhos côncavos para transmitir imagens tridimensionais em tempo real sem a necessidade de óculos especiais, uma tecnologia revolucionária que passou a ser estudada e aplicada pela NASA em simulações espaciais e que também abriu portas para avanços em áreas como a medicina cirúrgica, a televisão e as telas de vídeo modernas.</p>
        <div class="imagens-jornada">
            <figure class="card-cronologia">
            <img src="transmissor_ilusao.jpg" alt="Transmissor de Ilusão" class="foto-cronologia">
                <figcaption>Transmissor de Ilusão</figcaption>
            </figure>

            <figure class="card-cronologia">
                <img src="landsat_lacie.webp" alt="Projeto LACIE / Satélite Landsat." class="foto-cronologia">
                <figcaption>Projeto LACIE / Satélite Landsat</figcaption>
            </figure>
        </div>
        `;
    }else if (ano== '1995 - 2026') {
        textoDisplay.innerHTML = `
        <p>Após ela se aposentar ela ingressou na vida de educadora e palestrante, onde ela focava em encorajar jovens estudantes a ingressarem nas áreas de STEM. Antes de encerrar sua trajetória oficial na agência espacial em agosto de 1995, após mais de três décadas de serviços prestados, ela ainda ocupou cargos de alta liderança, como gerente associada do National Space Science Data Center (NSSDC) e gerente de projetos da Space Physics Analysis Network (SPAN), ajudando a conectar cientistas ao redor do mundo antes mesmo da popularização da internet comercial. Desde sua aposentadoria até os dias atuais, em 2026, Valerie mantém um legado ativo e inspirador como mentora, autora e defensora da diversidade na ciência, trabalhando com organizações como a National Technical Association (NTA) e o programa Women in Science and Engineering (WISE), além de receber inúmeros prêmios — incluindo o Goddard Space Flight Center Award of Merit e a NASA Equal Opportunity Medal — por abrir caminhos para que novas gerações de mulheres e pessoas negras ocupem espaços de destaque na ciência, tecnologia, engenharia e matemática.</p>
        <div class="imagens-jornada">
            <figure class="card-cronologia">
            <img src="VT_premio.jpg" alt="Valerie Thomas" class="foto-cronologia">
                <figcaption>Valerie Thomas</figcaption>
            </figure>
        </div>
        `;
    }

    const botoes = document.querySelectorAll('.time-btn');
    botoes.forEach(btn => btn.classList.remove('active'));

    botaoClicado.classList.add('active');
}
