//variables
const $ = (a) => document.querySelector(a);
const btn = $("#boton");
const containerProcesos = $(".container-procesos-resultado")
const ingresoValue = $("#ingresos")
const gastoValue = $("#gastos")
const p = $(".paragraph")


const btn2 = $(".boton2")
const containerTexto = $(".texto-opcional")

//Funcion que calcula la capacidad de ahorro

const savingsCapacity = (ingresos, gastos) => {

	const promedio = ((ingresos - gastos) / ingresos) * 100
	const savings = (promedio * ingresos) /100
	const finalPromedio = promedio.toFixed(2)
	const finalSavings = savings.toFixed(2)
	console.log(ingresos, gastos)
//Esta condicional valida si alguno de los inputs esta vacio o si los ingresos son menores que el gasto, en ese caso no proceder

	if (finalPromedio < 0 || ingresos == '' || gastos == '') {
		p.innerText = `No se puede proceder`
	containerProcesos.appendChild(p) 
	console.log(ingresos, gastos)
	}
	else{
		//La formula para calcular la capacidad de ahorro es ((ingreso - gasto) / ingreso) * 100 y ahi tendras
		//El porcentaje de la capacidad de gastos luego para saber el valor neto
	p.classList.remove("none")
	p.innerText = `Tu capacidad de ahorro en porcentaje es ${finalPromedio}% y tu capacidad de ahorro es ${finalSavings}`
	containerProcesos.appendChild(p) 
	}
return

}
//event listener de los dos botones

btn.addEventListener("click", () => savingsCapacity(ingresoValue.value,gastoValue.value))
btn2.addEventListener("click", () => containerTexto.classList.toggle("none"))