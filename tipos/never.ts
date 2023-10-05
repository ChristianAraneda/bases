(() => {
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error("Auziolio!");

  //   Se rompe el codigo

  console.log("Hola mundo");
})();
