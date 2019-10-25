document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        const data = new FormData(form),
            url = data.get('url'),
            times = data.get('times');

        for (let i = 0; i <= times; i++) {
            chrome.tabs.create({ url: url });
        }
    });
});