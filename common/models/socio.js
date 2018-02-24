'use strict';

module.exports = function (Socio) {
    Socio.observe("before save", (context, next) => {
        if (context.instance) {
            context.instance.nrosocio = 1;
        }
        next();
    })
};
