function showNextQuestion(currentQuestion) {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    document.getElementById(`question${currentQuestion + 1}`).style.display = 'block';
}

function submitReviews() {
    const responseMath = document.getElementById('responseMath').value;
    const responseEnglish = document.getElementById('responseEnglish').value;
    const responseBiology = document.getElementById('responseBiology').value;
    const responseScience = document.getElementById('responseScience').value;
    const responseComputer = document.getElementById('responseComputer').value;

    const responsesOutput = document.getElementById('responsesOutput');
    responsesOutput.innerHTML = `
        <div class="response-item">
            <h4>Math Teacher</h4>
            <p>${responseMath}</p>
        </div>
        <div class="response-item">
            <h4>English Teacher</h4>
            <p>${responseEnglish}</p>
        </div>
        <div class="response-item">
            <h4>Biology Teacher</h4>
            <p>${responseBiology}</p>
        </div>
        <div class="response-item">
            <h4>Science Teacher</h4>
            <p>${responseScience}</p>
        </div>
        <div class="response-item">
            <h4>Computer Science Teacher</h4>
            <p>${responseComputer}</p>
        </div>
    `;
}

function submitQualities() {
    const qualitiesForm = document.getElementById('qualitiesForm');
    const checkboxes = qualitiesForm.querySelectorAll('input[name="qualities"]:checked');
    const selectedQualities = Array.from(checkboxes).map(checkbox => checkbox.value);

    alert(`Selected qualities: ${selectedQualities.join(', ')}`);
}