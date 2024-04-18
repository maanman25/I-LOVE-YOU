const messages = [
    "You are amazing!",
    "Never forget how awesome you are!",
    "Today is a beautiful day because of you!",
    "You light up the room!",
    "I'm so lucky to have you!",
    "Keep smiling, it makes everyone wonder what you're up to.",
    "You bring out the best in the people around you.",
    "With your spirit, there's nothing you can't achieve.",
    "You are stronger than you know, and your strength inspires others.",
    "Remember, every day is a new opportunity to shine.",
    "You have the power to turn challenges into opportunities.",
    "Stay positive, the best is yet to come.",
    "You make kindness look so easy.",
    "The world is a better place with you in it.",
    "Every moment with you is a treasure.",
    "You're a bright light in a big world. Keep shining!",
    "Embrace the day with joy. You never know what wonderful things it will bring!",
    "Your creativity is a beautiful gift to the world.",
    "Believe in yourself as much as I believe in you.",
    "Your smile is contagious, keep spreading that joy around!",
    "Life is an adventure, and I love how you embrace every part of it.",
    "You're doing a great job, keep going!",
    "Challenges are just opportunities to show how capable you are.",
    "I'm proud of the way you handle challenges with grace and intelligence.",
    "Your positivity is infectious, and it makes everything seem possible."
    

];

function showMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}
