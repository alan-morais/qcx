import '../css/main.scss';
import '../assets/Mac-internet.jpg'

//Closure
(function () {
    const search = document.getElementById("search");
    const profile = document.getElementById("profile")
    const url = "https://api.github.com/users";

    const count = 4;
    const sort = "created: asc"

    async function getUser(user) {
        const profileResponse = await fetch(
            `${url}/${user}`
        );

        const reposResponse = await fetch(
            `${url}/${user}/repos?per_page=${count}&sort=${sort}`
        );

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return { profile, repos };
    }

    function showProfile(user) {
        profile.innerHTML = `
        <div id="profile">
            <img src="${user.avatar_url}" alt="perfil do git" >
           <section class= "repo-list">
           <div class="list-group">
           <div class="list-group-item">Repositórios: <span class="badge">
           ${user.public_repos}
               </span></div>
           <div class="list-group-item">Seguidores: <span class="badge">
           ${user.followers}
               </span></div>
           <div class="list-group-item">Seguindo: <span class="badge">
           ${user.following}
               </span></div>
       </div>
       <div class="card-repos">
       <div id="repos"></div>
       </div>
           </section>
        <div class="button">
            <a href="${user.html_url}" class="btn">Ver perfil</a>
        </div>
        </div>
        `
    }
    function showRepos(repos) {
        let output = "";

        repos.forEach(repo => {
            output += `
            <div id="repos">
                <div class="card-repos">
                <div class="link"><a href="${repo.html_url}" target="blank">${repo.name}</a></div>
                </div>
                <div class="link">
                     <span class="badge">Stars: ${repo.stargazers_count}</span>
                     <span class="badge">Watch: ${repo.watchers_count}</span>
                     <span class="badge">Forks: ${repo.forks_count}</span>
                </div>
            </div>`
        });

        document.getElementById("repos").innerHTML = output;
    }

    search.addEventListener("keyup", (e) => {
        const user = e.target.value;

        if (user.length > 0) {
            getUser(user).then(res => {
                showProfile(res.profile);
                showRepos(res.repos);
            });
        }
    })
})();