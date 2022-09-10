const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const form = document.querySelector('#form');

const btn = document.querySelector('#btnCalcular');
const result = document.querySelector("#result");

// form.addEventListener('submit', onSumar);


// function onSumar(event)
// {
//     event.preventDefault();
//     const suma = Number(input1.value) + Number(input2.value);
//     result.innerText = "Resultado es: "+suma;
// }

btn.addEventListener('click', onAdicttion);

function onAdicttion()
{

    const suma = Number(input1.value) + Number(input2.value);
    result.innerText = "Resultado es: "+suma;
}

