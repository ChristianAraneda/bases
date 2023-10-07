(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("soy el unico");
      }

      return Apocalipsis.intance;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  //   const apocalipsis1 = new Apocalipsis("Soy apocalipsis1.. el unico");
  //   const apocalipsi2 = new Apocalipsis("Soy apocalipsis2.. el unico");
  //   const apocalipsis3 = new Apocalipsis("Soy apocalipsis3.. el unico");

  //   console.log(apocalipsis1,apocalipsi2,apocalipsis3);
})();
