function make_shirt(size: string = "large" , text: string = "I love TypeScript"){
    console.log(`A ${size} size t-shirt with the text: ${text}.`);
}

make_shirt()
make_shirt("medium")
make_shirt("xl", "love laugh live")