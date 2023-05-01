function usePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.round(Math.random()*100);
      randomNumber % 2 ? reject(randomNumber) : resolve(randomNumber);
      resolve("Успешное выполнение promise");
    }, 1000);
  });

  myPromise
    .then((result) => {
      console.log(`Завершено успешно. Сгенерированное число — ${randomNumber}`, result);
    })
    .catch((error) => {
      console.log(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}`, error);
    });
};

usePromise();

