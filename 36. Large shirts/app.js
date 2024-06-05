function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("A ".concat(size, " size t-shirt with the text: ").concat(text, "."));
}
make_shirt();
make_shirt("medium");
make_shirt("xl", "love laugh live");
