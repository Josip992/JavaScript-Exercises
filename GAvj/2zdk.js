function increase(){
    let cnt = 0
    //arrow funkcija, u ovom slučaju i anonimna funkcija
    return () => {
         cnt++
         console.log(cnt)
    }
}

let uvecaj = increase()
uvecaj() 
uvecaj()
uvecaj()
