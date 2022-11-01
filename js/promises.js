const token = `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`

const fetchLastCommitDate = async () => {
    try {
        const response = await fetch('https://api.github.com/users', {headers: {'Authorization': `${token}`}})
        const responsejson = await response.json()
        let reposUrl = responsejson[0].repos_url
        let reposList = await fetch(reposUrl, {headers: {'Authorization': token}})
        let reposListJson = await reposList.json()
        let username = reposListJson.at(0).owner.login
        let repoName = reposListJson.at(0).name
        let url = `https://api.github.com/repos/${username}/${repoName}/commits`
        const repoCommits = await fetch(url,{
            headers : {
                'Authorization' : token
            }
        })
        let commits = await repoCommits.json()
        console.log(commits.at(0).commit.author.date.split('T')[0])
    }catch(err){
        console.error(err)
    }
}

fetchLastCommitDate()