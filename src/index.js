//home
const home = () => {
    const section = document.createElement('section');
    section.id = "section-container";
    const sectionContent = (section.innerHTML = `
    <div id="header">
    <span id="header-name">Alan Morais</span>
    <div id="header-itens">
    <a href="#section-container"><span>Home</span></a>
    <a href="#about-section"><span>Sobre</span></a>
    <a href="#github-section"><span>Desafio</span></a>
    </div>
    </div>
    <div id="main-content">
    <p>Desenvolvedor Front End</p>
    <span>Desafio Qconcursos</span>
    </div>
    <div id="container-icons">
    <a href="https://www.facebook.com/mifumy" target="_blank"><img src="./icons/facebook.svg"></a>   
    <a href="https://www.linkedin.com/in/alanfranc" target="_blank"><img src="./icons/linkedin.svg"></a>
    <a href="https://github.com/alan-morais" target="_blank"><img src="./icons/github.svg"></a>
    </div>
    `);
    return section;
}

//sobre
const about = () => {
    const aboutSection = document.createElement("aboutSection");
    aboutSection.id = "aboutSection";
    const aboutContent = (aboutSection.innerHTML = `
<span>Sobre</span>
  <br>
 <paragraph>
 <p>
 Olá sou Alan, muito prazer em participar deste processo seletivo!
 </p>
 <p>
 Sempre gostei bastante da área de tecnologia e por isso depois que fiz meu curso técnico em eletrônica, senti vontade de tentar buscas algo a mais. Foi então que eu decidi fazer faculdade. Inicialmente tive bastante dificuldade (quem não tem né?), um dos motivos era que na minha família nunca tivemos ninguém que tenha terminado o ensino médio.
 </p>
 <br>
 <p>
 Mesmo sem incentivo ou referenciais eu fui com a cara e a coragem, mesmo depois de ano sem estudar, eu me formei no ensino médio em 2007 e fiz meu curso técnico em 2012, foi em 2014 que eu entrei de fato na faculdade, hoje eu espero servir de inspiração para as minhas sobrinhas(tenho 2, Bia e Júlia) ambas são bastante inteligente e sei que se depender de mim terão bastante incentivo para seguir estudando.
 </p>
 <br>
 <p>
 Por que eu me candidatei a essa vaga? Bom primeiro porque eu conheço a plataforma e sempre estou por lá para tirar minhas dúvidas e treinar um pouco meus conhecimentos. Como minha última experiência de estágio foi em frontend eu tenho me dedicado bastante a essa parte e como é uma área bem vasta tenho muito que aprender. Mas também adoro ciência de dados, eu recentemente participei de uma maratona da IBM e foi incrível! aprendi bastante.
  </p>
 <p>
 Bom quero deixar registrado aqui o meu agradecimento por participar desse processo super humanizado! Desde o início a equipe de recrutamento foi super atenta e atenciosa coisa rara nos dias de hoje. agradeço a oportunidade e sucesso para todos!
 </p>
 </paragraph>
`);
    return aboutSection
}

//desafio
async function githubProfileRequest() {
    const userUrl = await fetch("https://api.github.com/users/alan-morais");
    const userData = await userUrl.json();
    return userData
}

const challenge = () => {
    const perfil = githubProfileRequest()
        .then(userData =>
            console.log(userData.login))
    const githubSection = document.createElement("githubSection");
    githubSection.id = githubSection;
    const challengeContet = (githubSection.innerHTML = `
        <h1>${perfil}</h1>
        `);
    return githubSection
}

const footer = () => {
    const footerSection = document.createElement("footerSection");
    footerSection.id = footerSection;
    const footerContent = (footerSection.innerHTML = `
      <footer>
      <h4>Desafio Desenvolvedor Front Qconcursos.com</h4>
      </footer>
      `);
    return footerSection
}

document.body.appendChild(home())
document.body.appendChild(about())
document.body.appendChild(footer())



