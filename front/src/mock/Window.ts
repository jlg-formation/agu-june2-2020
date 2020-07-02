export const windowMock = {
  provide: 'Window',
  useValue: {
    localStorage: {
      getItem(str) {
        return undefined;
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
