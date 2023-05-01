let userNameJson = localStorage.getItem('myKey');
let userName = '';
let date = '';

function createVisit() {
  let dateVisit = new Date();
    date = dateVisit.toLocaleString();
    localStorage.setItem('lastVisit', JSON.stringify(date));
};

if (userNameJson) {
    userName = JSON.parse(userNameJson);  
    let visitTimeJson = localStorage.getItem('lastVisit');
    date = JSON.parse(visitTimeJson);
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${date}`);
    createVisit();
} else {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('lastVisit', JSON.stringify(userName));
    createVisit();
};
