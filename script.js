const voteAPI = {
    votes: JSON.parse(localStorage.getItem('votes')) || { apple: 0, banana: 0, cherry: 0 },

    voteFor: function(fruit) {
        if (this.votes[fruit] !== undefined) {
            this.votes[fruit]++;
            localStorage.setItem('votes', JSON.stringify(this.votes));
            return true;
        } else {
            return false;
        }
    },

    getResults: function() {
        return this.votes;
    }
};

function submitVote() {
    const fruit = document.querySelector('input[name="fruit"]:checked');
    if (fruit) {
        if (voteAPI.voteFor(fruit.value)) {
            alert('Thanks for your vote!');
        } else {
            alert('Invalid vote.');
        }
    } else {
        alert('Please select a fruit.');
    }
}

function viewResults() {
    const results = voteAPI.getResults();
    let output = '<h3>Results:</h3>';
    for (const fruit in results) {
        output += `<p>${fruit.charAt(0).toUpperCase() + fruit.slice(1)}: ${results[fruit]} votes</p>`;
    }
    document.getElementById('results').innerHTML = output;
}
