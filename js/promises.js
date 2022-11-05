
const fetchLastCommitDate = (username) => {
    setTimeout(async _=>{ //Mask the async call to remove the squigglies
        try {
            const url = `https://api.github.com/users/${username}/repos`
            const reposData = await fetch(url,{
                headers : {
                    Authorization : GITHUB_TOKEN
                }
            })
            const repos = await reposData.json()
            repos.sort((a,b)=>new Date(a.created_at) > new Date(b.created_at) ? -1 : 1)
            const fullRepoName = repos[0].full_name
            const repoCommitsUrl = `https://api.github.com/repos/${fullRepoName}/commits`
            const repoCommitsData = await fetch(repoCommitsUrl, {
                headers : {
                    Authorization : GITHUB_TOKEN
                }
            })
            const repoCommits = await repoCommitsData.json()
            let display = document.createElement('h1')
            display.innerText = `Last Commit Date for ${repoCommits[0].commit.author.name} - ${repoCommits[0].commit.author.date.split('T')[0]}`
            document.body.append(display)


        }catch(err){
            console.error(err)
        }
    },10)
}

fetchLastCommitDate('aldanisvigo')


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
const wait = (millis) => {
    return new Promise((resolve, reject) => setTimeout(()=>{resolve(millis)},millis))
}
const waitForWait = (x) => {
    // let mils = 0;
    // setInterval(()=>{
    //     console.log(`Waiting for response from wait : ${mils}`)
    //     mils++;
    // },1)
    setTimeout(async ()=> {
        console.log("Calling wait...")
        console.log("Waited for : " + await wait(x) + "")
    })
}

waitForWait(2000)


