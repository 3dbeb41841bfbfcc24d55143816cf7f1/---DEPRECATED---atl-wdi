$('form').on('submit'), function (event) {
    event.preventDefault();
    const val = $("#inputMagic").val();
    $("body").append(val)
}
