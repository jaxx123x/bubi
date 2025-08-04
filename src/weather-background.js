const weatherImages = {
    'clear-day': 'imgs/Sunny-day.jpeg',
    'clear-night': 'imgs/Clear-night.jpeg',
    'sunny': 'imgs/Sunny-day.jpeg',
    'cloudy': 'imgs/Mostly-cloudy.jpeg',
    'partly-cloudy-day': 'imgs/Partly-cloudy.jpeg',
    'partly-cloudy-night': 'imgs/Partly-cloudy.jpeg',
    'overcast': 'imgs/Mostly-cloudy.jpeg',
    'rain': 'imgs/Heavy-rain.jpeg',
    'showers-day': 'imgs/Rain and Snow.jpeg',
    'showers-night': 'imgs/Rain and Snow.jpeg',
    'thunderstorm': 'imgs/Thunderstorm.jpeg',
    'heavy-rain': 'imgs/Heavy-rain.jpeg',
    'snow': 'imgs/Snow.jpeg',
    'snow-showers-day': 'imgs/Snow.jpeg',
    'snow-showers-night': 'imgs/Snow.jpeg',
    'sleet': 'imgs/Sleet.jpeg',
    'drizzle': 'imgs/Drizzle.jpeg',
    'light-rain': 'imgs/Drizzle.jpeg',
    'wind': 'imgs/Squalls.jpeg',
    'squalls': 'imgs/Squalls.jpeg',
    'default': 'imgs/Snow.jpeg'
};

const weatherMessages = {
    'clear-day': 'E o zi senina, la fel ca tine bubi ❤️ Dar nici macar seninatatea cerului nu se compara cu tine 🥰(1)',
    'clear-night': 'Nu stiu de ce te uiti la vreme noaptea, dar somnic usor bubilet ❤️❤️(2)',
    'sunny': 'Cum soarele lumineaza totul azi, asa imi luminezi tu fiecare zi 🥰🥰(3)',
    'cloudy': 'E innorat, bub 😕 Dar oricum tu esti cel mai frumos coltisor senin ❤️(4)',
    'partly-cloudy-day': 'Sunt cativa norisori pe-afara... nu stiu ce sa zic pentru asta... dar ai castigat un pupic. 😅(5)',
    'partly-cloudy-night': 'Buuuuub, de ce cauti iar vremea noaptea? Sunt cativa norisori si iar nu stiu ce sa zic... ai castigat un pupic! 😘(6)',
    'overcast': 'Chiar daca e gri afara, tu esti pata mea de culoare azi. ❤️(7)',
    'rain': 'E posibil sa ploua acum... Daca ploua, uita-te pe geam. Fiecare picatura de ploaie e un „te iubesc" de la mine. 🥰(8)',
    'showers-day': 'Ploaia vine si pleaca azi… dar gandul la tine ramane constant, ca o raza in toata umezeala asta. ❤️(9)',
    'showers-night': 'Noapte cu ploaie... linistita. Si in toata linistea asta, singurul gand care se repeta e numele tau. Ai castigat 10 pupici! (10)',
    'thunderstorm': 'Uita-te pe geam... toate fulgerele combinate nu-s la fel de luminoase ca intensitatea cu care te iubesc eu 🥰❤️(11)',
    'heavy-rain': 'Ploua tare, dar dragostea mea e si mai puternica. 🥰 Te iubesc, bubi! Ai castigat 15 pupici! 🌧️💕(12)',
    'snow': 'Mama, bub, daca inca verifici aici... verifici de ceva timp... ninge afara, ai castigat un pupicel. ❄️😅(13)',
    'snow-showers-day': 'Pentru fiecare fulgulet de zapada pe care il vezi azi, e un „te iubesc" de la mine ❤️ Daca nu vezi niciunul, ai castigat 5 pupicei extra! (14)',
    'snow-showers-night': 'Mamaa bubi te uiti asa tarziu la vreme 😅 E frigut, vrei sa vin sa te incalzesc putin ? (15)',
    'sleet': 'Vrei sa te incalzesc oleaca? Fac pariu ca ti-e frigut 😅 te iubiiii(16)',
    'drizzle': 'Bub vreme din asta ii rara.. daca ai nimerit-o, ai 5 pupici de aia dulci dulci dulci(17)',
    'light-rain': 'Ploita din asta usoara... ii vreme de tinut in brate sau de film ? 😅❤️(18)',
    'wind': 'Vezi sa nu te ia vantu pe sus bub.. Siiiii ai castigat 10 pupicieeei! 🥰(19)',
    'squalls': 'Orice ar fi afara, tu esti linistea mea! ❤️(20)',
};

const BASE_PATH = '/weather-app/';

function showLovePopup(message) {
    // Creează overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    // Creează popup
    const popup = document.createElement('div');
    popup.style.background = 'white';
    popup.style.padding = '30px 20px';
    popup.style.borderRadius = '16px';
    popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)';
    popup.style.textAlign = 'center';
    popup.style.fontSize = '1.2rem';
    popup.style.maxWidth = '90vw';

    popup.textContent = message;

    // Buton OK
    const btn = document.createElement('button');
    btn.textContent = 'OK';
    btn.style.marginTop = '20px';
    btn.style.padding = '8px 24px';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.background = '#ff69b4';
    btn.style.color = 'white';
    btn.style.fontWeight = 'bold';
    btn.style.fontSize = '1rem';
    btn.style.cursor = 'pointer';

    btn.onclick = () => document.body.removeChild(overlay);

    popup.appendChild(document.createElement('br'));
    popup.appendChild(btn);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

export function setWeatherBackground(icon) {
    const img = weatherImages[icon] || weatherImages['default'];
    document.body.style.backgroundImage = `url('${BASE_PATH}${img}')`;

    // Afișează popup cu mesajul personalizat
    const message = weatherMessages[icon] || weatherMessages['default'];
    showLovePopup(message);
}