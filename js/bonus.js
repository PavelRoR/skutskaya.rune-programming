
    var isIE = false || !!document.documentMode;

    if (isIE) {
        var head  = document.getElementsByTagName("head")[0];
        var link  = document.createElement("link");
        link.rel  = "stylesheet";
        link.href = "../css/bonus_ie.css";
        head.appendChild(link);
    }
