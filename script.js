

document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentSection = document.getElementById('commentSection');

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        commentSection.appendChild(newComment);
        commentInput.value = ""; // Clear input
    } else {
        alert("Por favor, escribe un comentario.");
    }
});
