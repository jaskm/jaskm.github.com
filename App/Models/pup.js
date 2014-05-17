var Pup = (function () {
    function Pup() {
        this.name = arguments[0] || "";
        this.age = arguments[1] || "";
        this.breed = arguments[2] || "";
        this.gender = arguments[3] || "";
        this.size = arguments[4] || "";
        this.image = arguments[5] || "";
		this.summary = arguments[6] || "";
    }

    return Pup;
})();
