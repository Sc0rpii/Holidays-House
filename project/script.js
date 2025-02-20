//funzione che apre la foto cliccata dentro il carosello
function openModal(imgElement) {
    document.getElementById("modalImage").src = imgElement.src;
    var myModal = new bootstrap.Modal(document.getElementById("imageModal"));
    myModal.show();
}