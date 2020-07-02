export const fakeLocalStorage = {
  articles: undefined,
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

export const windowMock2 = {
  provide: 'Window',
  useValue: {
    localStorage: {
      getItem(str) {
        return JSON.stringify([{ name: 'Tournevis', price: 2.34, qty: 120 }]);
      },
    },
  },
};
