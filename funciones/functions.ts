(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batisignal activada";
  };

  const heroName = returnName();

  console.log(typeof activateBatisignal);
})();
