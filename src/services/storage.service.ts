type Constructor = {
  storage: any;
};

class Storage {
  #storage: any;

  constructor({storage}: Constructor) {
    this.#storage = storage;
  }

  getItem(key: string): string | null {
    return this.#storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.#storage.setItem(key, value);
  }

  removeItem(key: string): void {
    this.#storage.removeItem(key);
  }
}

export {Storage};
