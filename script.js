console.log(`
#########################
#  Made by KaleChips22  #
#########################
`)

let local = {
    liked: JSON.parse(window.localStorage.getItem('liked')) || null,
    blocked: JSON.parse(window.localStorage.getItem('blocked')) || null
}

function checkRun() {
    if (!local.liked && !local.blocked) {
        document.querySelector('.name').innerHTML = `Ammonite`
    }

    if (local.liked) {
        document.querySelector('.name').innerHTML = `Ammonite <span style="color:#ff7070">&hearts;</span>`
        local.blocked = false
    } else {
        local.liked = false
    }
    
    if (local.blocked) {
        document.querySelector('.name').innerHTML = `Ammonite <span style="color:#ff7070">&times;</span>`
        local.liked = false
    } else {
        local.blocked = false
    }

    window.localStorage.setItem('liked', JSON.stringify(local.liked))
    window.localStorage.setItem('blocked', JSON.stringify(local.blocked))
}

checkRun()

function like() {
    if (local.liked) {
        local.liked = false
        checkRun()
        return
    }
    local.liked = true
    local.blocked = false
    checkRun()
}

function block() {
    if (local.blocked) {
        local.blocked = false
        checkRun()
        return
    }
    local.blocked = true
    local.liked = false
    checkRun()
}
