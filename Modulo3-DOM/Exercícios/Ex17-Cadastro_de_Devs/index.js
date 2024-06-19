const form = document.getElementById('devForm');
const addTechBtn = document.getElementById('addTechBtn');
const stackInputs = document.getElementById('stackInputs');

addTechBtn.addEventListener("click", function () {
    const listTech = document.createElement('li');

    const nomeTech = document.createElement('input');
    nomeTech.type = 'text';
    nomeTech.name = 'nomeTecnologia';
    nomeTech.placeholder = 'Tecnologia';
    
    listTech.appendChild(nomeTech);

    const radioOptions = [
        { id: 'iniciante', label: '0-2 anos' },
        { id: 'intermediario', label: '3-4 anos' },
        { id: 'avancado', label: '5+ anos' }
    ];

    radioOptions.forEach(option => {
        const timeRadio = document.createElement('input');
        timeRadio.type = 'radio';
        timeRadio.name = `timeTech_${stackInputs.children.length}`;
        timeRadio.value = option.id;

        const radioLabel = document.createElement('label');
        radioLabel.textContent = option.label;

        listTech.appendChild(timeRadio);
        listTech.appendChild(radioLabel);
        listTech.appendChild(document.createElement('br'));
    });

    const buttonRemove = document.createElement('button');
    buttonRemove.type = 'button';
    buttonRemove.textContent = 'Remover';

    buttonRemove.addEventListener("click", function () {
        stackInputs.removeChild(listTech);
    });

    listTech.appendChild(buttonRemove);
    stackInputs.appendChild(listTech);
});

form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const nomedev = document.getElementById('fullname').value
    const tecnologias = [];

    const listItems = stackInputs.querySelectorAll('li');
    listItems.forEach(item => {
        const nomeTecnologia = item.querySelector('input[name="nomeTecnologia"]').value;
        const timeTechRadios = item.querySelectorAll('input[type="radio"]');
        let timeTechValue = '';
        timeTechRadios.forEach(radio => {
            if (radio.checked) {
                timeTechValue = radio.value;
            }
        });

        tecnologias.push({ nomeTecnologia, timeTechValue });

    });

    console.log('Nome do desenvolvedor:', nomedev);
    console.log('Tecnologias:', tecnologias);
});