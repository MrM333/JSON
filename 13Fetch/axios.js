
async function getPokemos(){
    const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) =>{
        console.log(response.data.results);
    })
    .catch((err) =>{
        consple.log(err);
        
    });
    return resp;
}
const data = await getPokemos(); 
console.log("Esto es despues de la petición");