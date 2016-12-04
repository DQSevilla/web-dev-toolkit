function test() {
    var query = document.getElementById("searchbox").value.toLowerCase();
    if(query.includes("about")) {
        window.location = "../public/about.html";
    }
    else if(query.includes("calculator")) {
        window.location = "../public/calculators.html";
    }
    else if(query.includes("networking")) {
        window.location = "../public/networking.html";
    }
    else if(query.includes("project") || query.includes("management")) {
        window.location = "../public/project-management.html";
    }
    else if(query.includes("resource")) {
        window.location = "../public/resources.html";
    }
    else if(query.includes("home")) {
        window.location = "../public/index.html";
    }
    else {
        window.location = "../public/search.html";
    }
}