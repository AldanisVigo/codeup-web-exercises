const token = `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`

const fetchLastCommitDate = async () => {
    try {
        const response = await fetch('https://api.github.com/users', {headers: {'Authorization': `${token}`}})
        const responsejson = await response.json()
        console.log(responsejson)
        let reposUrl = responsejson[0].repos_url
        console.log(reposUrl)
        // // let eventsUrl = responsejson[0].received_events_url
        // let reposList = await fetch(reposUrl, {headers: {'Authorization': token}})
        // let reposListJson = await reposList.json()
        // let username = reposListJson[0].owner.login
        //
        //
        // let repoName = reposListJson[0].name
        // let url = `https://api.github.com/repos/${username}/${repoName}/commits`
        // // console.log(url)
        // const repoCommits = await fetch(url,{
        //     headers : {
        //         'Authorization' : token
        //     }
        // })
        //
        // const repoCommitsJson = await repoCommits.json()
        // console.log(await repoCommits.json())

        // let lastEvent = eventsListJson[eventsListJson.length - 1]
        // console.log(lastEvent.created_at.split('T')[0]);
    }catch(err){
        console.error(err)
    }
}

fetchLastCommitDate()