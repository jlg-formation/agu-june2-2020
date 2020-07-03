export const fakeLocalStorage = {
  articles: JSON.stringify([{ name: 'Tournevis', price: 2.34, qty: 120 }]),
};

export const windowMock = {
  provide: 'Window',
  useValue: {
    localStorage: {
      getItem(key: string) {
        return fakeLocalStorage[key];
      },
      setItem(key: string, val: string) {
        fakeLocalStorage[key] = val;
      },
    },
  },
};
