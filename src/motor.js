
const montoMinimoMasculino = [
    {
        26: [{A: 100}, {B: 1000}, {C: 400}, {D: 400}]
    },
    {
        27: [{A: 400}, {B: 600}, {C: 200}, {D: 300}]
    },
    {
        28: [{A: 900}, {B: 1000}, {C: 200}, {D: 500}]
    },
    {
        29: [{A: 100}, {B: 1000}, {C: 1000}, {D: 900}]
    },
    {
        30: [{A: 600}, {B: 1000}, {C: 600}, {D: 1000}]
    }
]

const montoMinimoFemenino = [
    {
        24: [{A: 800}, {B: 800}, {C: 200}, {D: 500}]
    },
    {
        25: [{A: 800}, {B: 700}, {C: 900}, {D: 1000}]
    },
    {
        26: [{A: 800}, {B: 100}, {C: 700}, {D: 600}]
    },
    {
        27: [{A: 600}, {B: 600}, {C: 800}, {D: 400}]
    },
    {
        28: [{A: 200}, {B: 700}, {C: 100}, {D: 700}]
    }
]

const montoMaximoMasculino = [
    {
        26: [{A : 4900}, {B: 4700}, {C: 5000}, {D: 4400}]
    },
    {
        27: [{A : 4700}, {B: 4400}, {C: 4700}, {D: 4700}]
    },
    {
        28: [{A : 4600}, {B: 5000}, {C: 5000}, {D: 4300}]
    },
    {
        29: [{A : 4600}, {B: 4400}, {C: 4200}, {D: 4900}]
    },
    {
        30: [{A : 4500}, {B: 4900}, {C: 4600}, {D: 4300}]
    }
]

const montoMaximoFemenino = [
    {
        24: [{A: 4000}, {B: 4700}, {C: 4600}, {D: 5000}]
    },
    {
        25: [{A: 4200}, {B: 4200}, {C: 4900}, {D: 4900}]
    },
    {
        26: [{A: 4100}, {B: 4500}, {C: 4600}, {D: 4700}]
    },
    {
        27: [{A: 4200}, {B: 4300}, {C: 4700}, {D: 5000}]
    },
    {
        28: [{A: 4500}, {B: 4400}, {C: 4000}, {D: 4300}]
    }
]


function calculoMotor (tipoNomina, fechaPrimerEmpleo, genero) {

    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fechaPrimerEmpleo;
    const mesesPasados = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 30.4375));

    
    let montoMaximo = ""
    let montoMinimo = ""
    let recomendacionLinea = ""

    let nominaDelUsuario = 0
    const mes = fechaPrimerEmpleo.getMonth()
    const meses = []


    if (genero === "f") {

        montoMinimoFemenino.forEach(objeto => {
            for (var clave in objeto) {
                var numero = parseInt(clave);
                    meses.push(numero);
            }
             nominaDelUsuario = meses.find((mesDeTabla) => {
                return mesesPasados < mesDeTabla
            })

            const montoMinimoNominas = objeto[nominaDelUsuario]


            if (montoMinimoNominas !== undefined) {

                montoMinimoNominas.find((nominasF) => {

                    if (nominasF[tipoNomina] !== undefined) {

                        montoMinimo = nominasF[tipoNomina]
                    }
                })
            }

        });

        montoMaximoFemenino.forEach(objeto => {
            for (var clave in objeto) {
                var numero = parseInt(clave);
                    meses.push(numero);
            }
             nominaDelUsuario = meses.find((mesDeTabla) => {
                return mesesPasados < mesDeTabla
            })

            const montoMaximoNominas = objeto[nominaDelUsuario]


            if (montoMaximoNominas !== undefined) {

                montoMaximoNominas.find((nominasF) => {

                    if (nominasF[tipoNomina] !== undefined) {

                        montoMaximo = nominasF[tipoNomina]
                    }
                })
            }

        });

        

    } else {

        montoMinimoMasculino.forEach(objeto => {
            for (var clave in objeto) {
                var numero = parseInt(clave);
                    meses.push(numero);
            }
             nominaDelUsuario = meses.find((mesDeTabla) => {
                return mesesPasados < mesDeTabla
            })

             const montoMinimoNominas = objeto[nominaDelUsuario]


            if (montoMinimoNominas !== undefined) {

                montoMinimoNominas.find((nominasF) => {

                    if (nominasF[tipoNomina] !== undefined) {

                        montoMinimo = nominasF[tipoNomina]
                    }
                })
            }

        });

        montoMaximoMasculino.forEach(objeto => {
            for (var clave in objeto) {
                var numero = parseInt(clave);
                    meses.push(numero);
            }
             nominaDelUsuario = meses.find((mesDeTabla) => {
                return mesesPasados < mesDeTabla
            })

            const montoMaximoNominas = objeto[nominaDelUsuario]


            if (montoMaximoNominas !== undefined) {

                montoMaximoNominas.find((nominasF) => {

                    if (nominasF[tipoNomina] !== undefined) {

                        montoMaximo = nominasF[tipoNomina]
                    }
                })
            }

        });

    }

    const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo)
    const p2  = montoMinimo + 0.0175  * (montoMaximo - montoMinimo)
    recomendacionLinea = Math.max(p1, p2)

    return {
        montoMinimo,
        montoMaximo,
        recomendacionLinea
    }
}

var fechaEjemplo = new Date('1993-30-12');


console.log(calculoMotor("B", fechaEjemplo, "f"))