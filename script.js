const homepage = document.getElementById('homepage');
const questions = document.getElementById('questions');
const results = document.getElementById('results');

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

const title = document.getElementById('question');
const statement = document.getElementById('statement');

const isWeightedCheckbox = document.getElementById('is-weighted');

const answers = [];

function start() {
    // voegt class toe aan homepage
    homepage.classList.add("hidden");
    questions.classList.remove("hidden");

    setFirstQuestion();
}

// Laat eerste vraag en statement zien
function setFirstQuestion() {
    const subject = subjects[answers.length];
    title.innerHTML = answers.length + 1 + '. ' + subjects[answers.length].title;
    statement.innerHTML = subject.statement;
}

//  Functie die de antwoorden op slaan in een array (Answers[])
function saveAnswer(event) {
    const position = event.target.id;
    answers.push({
        'position': position,
        'weighted': isWeightedCheckbox.checked
    });
}

// Als er op de knop Eens / Geen van beide of Oneens geklikt word komt er een nieuwe stelling
function setNextQuestion() {
    if (answers.length < subjects.length) {
        saveAnswer(event);
        if (isWeightedCheckbox.checked) {
            isWeightedCheckbox.checked = false;
        }
    }

    if (answers.length === subjects.length) {
        results.classList.remove("hidden");
        questions.classList.add("hidden");

        checkAnswers();
        showResult();
        return;
    }

    const subject = subjects[answers.length];
    title.innerHTML = answers.length + 1 + '. ' + subject.title;
    statement.innerHTML = subject.statement;
}

function setPreviousQuestion() {
    if (answers.length === 0) {
        homepage.classList.remove("hidden");
        questions.classList.add("hidden");
        return;
    }

    isWeightedCheckbox.checked = answers[answers.length - 1].weighted;

    answers.pop();

    const subject = subjects[answers.length];
    title.innerHTML = answers.length + 1 + '. ' + subject.title;
    statement.innerHTML = subject.statement;
}

function checkAnswers() {
    for (let i = 0; i < parties.length; i++) {
        parties[i]['preference'] = 0;
    }

    // Loop through all of the answers.
    for (let i = 0; i < answers.length; i++) {
        // Grab the answer.
        const answer = answers[i];
        const answerIsWeighted = answer.weighted;
        // Grab the subject that belongs to this answer.
        const subject = subjects[i];
        // Loop trough all of the parties for this subject.
        for (let j = 0; j < subject.parties.length; j++) {
            // Grab the party.
            const party = subject.parties[j];
            // Check if your position is equal to the position of the party.
            if (answer.position === party.position) {
                const partyName = party.name;

                let foundParty = null;
                // Find the party in the parties array by matching the name of the party.
                // The parties array contains ALL parties.
                for (let k = 0; k < parties.length; k++) {
                    const party = parties[k];
                    // If the name of the party matches the party, set foundParty to that party, and break out of the loop.
                    if (party.name === partyName) {
                        foundParty = party;
                        break;
                    }
                }
                // Check if a party was found or if foundParty is still null.
                if (foundParty === null) {
                    continue;
                }

                // If the answer is weighted, add 2 points to the preference.
                if (answerIsWeighted) {
                    foundParty.preference += 2;
                } else {
                    foundParty.preference += 1;
                }
            }
        }
    }
}

function showResult() {
    // Sort the results from high preference to low preference.
    parties.sort(function (a, b) {
       return b.preference - a.preference;
    });

    // Show the 3 results in the browser.
    result1.innerHTML = parties[0].name;
    result2.innerHTML = parties[1].name;
    result3.innerHTML = parties[3].name;
}







