function generatePassword() {
    const length = document.getElementById('length').value;
    const useLowercase = document.getElementById('lowercase').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (useLowercase) characters += lowercaseChars;
    if (useUppercase) characters += uppercaseChars;
    if (useNumbers) characters += numberChars;
    if (useSymbols) characters += symbolChars;

    // Se nenhuma opção estiver selecionada, usa letras minúsculas por padrão
    if (characters === '') characters = lowercaseChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;
    checkStrength();
}

function checkStrength() {
    const useLowercase = document.getElementById('lowercase').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    let strengthBar = document.getElementById('strength-bar');
    let strengthText = document.getElementById('strength-text');
    let strength = 0;

    if (useLowercase) strength++;
    if (useUppercase) strength++;
    if (useNumbers) strength++;
    if (useSymbols) strength++;

    // Define a largura da barra e a cor com base na força
    switch (strength) {
        case 1:
            strengthBar.style.width = '33%';
            strengthBar.style.backgroundColor = '#E71B32';
            strengthText.textContent = 'Fraca';
            break;
        case 2:
            strengthBar.style.width = '66%';
            strengthBar.style.backgroundColor = '#FAF408';
            strengthText.textContent = 'Média';
            break;
        case 3:
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = '#00FF85';
            strengthText.textContent = 'Forte';
            break;
        default:
            strengthBar.style.width = '0';
            strengthBar.style.backgroundColor = 'red';
            strengthText.textContent = 'Fraca'; // Atualiza o texto para "Fraca" se nenhum critério for atendido
    }

}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}

function updateSliderBackground(slider) {
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;

    // Calcula a porcentagem do valor atual em relação ao intervalo total
    const percentage = ((value - min) / (max - min)) * 100;
    document.getElementById('length-value').textContent = value;
    slider.style.background = `linear-gradient(to right, #fff ${percentage}%, #2C1746 ${percentage}%)`;
}