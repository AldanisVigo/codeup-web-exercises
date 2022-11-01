import { GITHUB_TOKEN} from "./keys.mjs";

const fetchLastCommitDate = async () => {
    try {
        const response = await fetch('https://api.github.com/users', {headers: {'Authorization': `${GITHUB_TOKEN}`}})
        const responsejson = await response.json()
        let reposUrl = responsejson[0]['repos_url']
        let reposList = await fetch(reposUrl, {headers: {'Authorization': GITHUB_TOKEN}})
        let reposListJson = await reposList.json()
        let username = reposListJson.at(0)['owner']['login']
        let repoName = reposListJson.at(0).name
        let url = `https://api.github.com/repos/${username}/${repoName}/commits`
        const repoCommits = await fetch(url,{
            headers : {
                'Authorization' : GITHUB_TOKEN
            }
        })
        let commits = await repoCommits.json()
        console.log(commits.at(0).commit.author['date'].split('T')[0])
    }catch(err){
        console.error(err)
    }
}

fetchLastCommitDate()