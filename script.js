const reasons = [
    "Gravity isn't the only thing attracting me to you.",
    "Our chemistry is more explosive than sodium in water.",
    "You must be made of dark matter because you're indescribably attractive.",
    "Even if there's zero gravity, I'd still fall for you.",
    "You're hotter than the exothermic reactions in my heart.",
    "I'd travel across the space-time continuum for you.",
    "Our bond is stronger than a covalent bond.",
    "You make my dopamine levels all wonky.",
    "You're the black hole at the center of my galaxy.",
    "You must be a supernova, because you add brightness to my universe."
];

document.getElementById("noBtn").addEventListener("click", () => {
    let randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    alert(randomReason);

    let yesBtn = document.getElementById('yesBtn');
    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn, null).getPropertyValue('font-size'));
    let currentPadding = parseFloat(window.getComputedStyle(yesBtn, null).getPropertyValue('padding'));

    yesBtn.style.fontSize = (currentFontSize + 10) + 'px';
    yesBtn.style.padding = (currentPadding + 10) + 'px ' + (currentPadding + 2) + 'px'; // Increase padding
});

document.getElementById("yesBtn").addEventListener("click", () => {
    // You can change this to any action you like
    alert("Yay! You've made my day stellar! 🌟");
});


