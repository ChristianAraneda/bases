(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      // las clases tienen nombre
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  //   const antman: Avenger = new Avenger("Antman", "Capitan");
  //   console.log(Avenger.getAvgAge());
  //   console.log(Avenger.avgAge);
})();
