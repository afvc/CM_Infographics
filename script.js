$("#Education").on("click", showHiddenEdu);

function showHiddenEdu() {
    if ($("#HiddenEdu").css("display") == "none") {
        $("#HiddenEdu").css("display", "block");
    } else {
        $("#HiddenEdu").css("display", "none");

    }

}

$("#Rights").on("click", showHiddenHR);

function showHiddenHR() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
    } else {
        $("#HiddenHR").css("display", "none");

    }

}