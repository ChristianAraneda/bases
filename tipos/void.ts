(() => {
  // Mi funcion no retornada nada = void
  function callBatman(): void {}

  const a = callBatman();

  const callSuperman = (): void => {
    return;
  };

  console.log(a);
})();
