"use strict";
(() => {
    // Mi funcion no retornada nada = void
    function callBatman() { }
    const a = callBatman();
    const callSuperman = () => {
        return;
    };
    console.log(a);
})();
