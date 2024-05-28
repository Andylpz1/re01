document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('currentDate');
    const today = new Date();
    const options = {month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    currentDateElement.textContent = `${formattedDate}`;
});