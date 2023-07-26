const codReplicaSelect = document.querySelector('#codReplica');
const dataSpan = document.querySelector('#data');
const spettacoloNomeSpan = document.querySelector('#spettacoloNome');
const teatroNomeSpan = document.querySelector('#teatroNome');
const inputData = document.querySelector("#inputData")

function updateData() {
    const codReplica = codReplicaSelect.value;
    fetch(`/api/repliche/${codReplica}`)
        .then(response => response.json())
        .then(data => {
            dataSpan.textContent = data.data;
            spettacoloNomeSpan.textContent = data.spettacolo.titolo;
            teatroNomeSpan.textContent = data.spettacolo.teatro.nome;
        });
}

fetch('/api/repliche')
    .then(response => response.json())
    .then(repliche => {
        for (const replica of repliche) {
            const option = document.createElement('option');
            option.value = replica.codReplica;
            option.textContent = `Replica ${replica.codReplica}`;
            codReplicaSelect.appendChild(option);
        }
        updateData();
    });

codReplicaSelect.addEventListener('change', updateData);