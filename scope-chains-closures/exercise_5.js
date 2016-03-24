function foo() {
    var bar;
    quux = 100;

    function zip() {
        var quux = 50;
        bar = true;
    }

    return zip;
}
