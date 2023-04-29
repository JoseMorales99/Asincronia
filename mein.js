console.log(Asincronia)
//promises
//pido el listado de 5mil usuarios
//muestro el menu principal
//muestro foto de perfil
//muestro todo
//muestro listado de 5mil usuarios
const tareaAsincrona = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("proceso asincrono terminado");
            resolve();
        }, 1300);
    });
};

tareaAsincrona().then(() => {
    console.log("todo ok");
});