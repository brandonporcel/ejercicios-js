const d = document;
export function feedback() {
	const $formulario = document.getElementById('formulario');
	const $inputs = document.querySelectorAll('#formulario input');
	const $inputsRequeridos = document.querySelectorAll('.formulario [required]');
	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{8,12}$/, // 8 a 12 numeros.
	};
	const campos = {
		usuario: false,
		password: false,
		correo: false,
		telefono: false,
		nombre: false,
		comments: false,
	};
	const validarCampo = (expresion, input, campo) => {
		// si la expresion valida lo que pone el user
		if (expresion.test(input.value)) {
			// al input que valida le va a eliminar la x incorrecta
			document
				.getElementById(`grupo__${campo}`)
				.classList.remove('formulario__grupo-incorrecto');
			// al input que valida le va a agregar la x correcta(Verde). al grupo le da el ok
			document
				.getElementById(`grupo__${campo}`)
				.classList.add('formulario__grupo-correcto');
			// le borra el mensaje de error(el input solo puede tener...)
			document
				.querySelector(`#grupo__${campo} .formulario__input-error`)
				.classList.remove('activo');
			// al campo(input) al que corresponde esta funcion,se le asigna true,important par el submit
			campos[campo] = true;
			// lo que pone el user viola las reglas de la expreg
		} else {
			// al input que valida le va a agregar la x incorrecta(roja). al grupo no le da el ok
			document
				.getElementById(`grupo__${campo}`)
				.classList.add('formulario__grupo-incorrecto');
			// al grupo le saca el ok
			document
				.getElementById(`grupo__${campo}`)
				.classList.remove('formulario__grupo-correcto');
			// le agrega el mensaje de error(el input solo puede tener...)
			document
				.querySelector(`#grupo__${campo} .formulario__input-error`)
				.classList.add('activo');
			// al campo(input) al que corresponde esta funcion,se le asigna false,important par el submit
			campos[campo] = false;
		}
	};
	const validarPassword2 = () => {
		const inputPassword1 = document.getElementById('passwordd');
		const inputPassword2 = document.getElementById('passwordd2');
		// si las contras que no son iguales
		if (inputPassword1.value !== inputPassword2.value) {
			// al grupo le la clase error
			document
				.getElementById('grupo__password2')
				.classList.add('formulario__grupo-incorrecto');
			// al grupo le elimina la clase correcta
			document
				.getElementById('grupo__password2')
				.classList.remove('formulario__grupo-correcto');
			// msj de error
			document
				.querySelector('#grupo__password2 .formulario__input-error')
				.classList.add('activo');
			campos.password = false;
		} else {
			document
				.getElementById('grupo__password2')
				.classList.remove('formulario__grupo-incorrecto');
			document
				.getElementById('grupo__password2')
				.classList.add('formulario__grupo-correcto');
			document
				.querySelector('#grupo__password2 .formulario__input-error')
				.classList.remove('activo');
			campos.password = true;
		}
	};
	const validarFormulario = (e) => {
		switch (e.target.name) {
			case 'usuario':
				validarCampo(expresiones.usuario, e.target, 'usuario');
				break;
			case 'password':
				validarCampo(expresiones.password, e.target, 'password');
				validarPassword2();
				break;
			case 'password2':
				validarPassword2();
				break;
			case 'correo':
				validarCampo(expresiones.correo, e.target, 'correo');
				break;
			case 'telefono':
				validarCampo(expresiones.telefono, e.target, 'telefono');
				break;
			default:
				break;
		}
	};
	$inputs.forEach((input) => {
		input.addEventListener('keyup', validarFormulario);
		// cuando el foco no este en el input,callback
		input.addEventListener('blur', validarFormulario);
	});
	$inputsRequeridos.forEach((input) => {
		const $span = document.createElement('span');
		$span.id = input.name;
		// le doy la clase y lo oculto
		$span.classList.add('formulario__mensaje-error', 'none');
		$span.textContent = input.title;
		input.insertAdjacentElement('afterend', $span);
	});
	$formulario.addEventListener('submit', (e) => {
		e.preventDefault();
		const terminos = document.getElementById('terminos');
		if (
			campos.usuario &&
			campos.password &&
			campos.correo &&
			campos.telefono &&
			terminos.checked &&
			campos.comments &&
			campos.nombre
		) {
			const $loader = d.querySelector('.formulario__loader');
			const $response = d.getElementById('formulario__mensaje-exito');
			$loader.classList.remove('none');
			document.getElementById('formulario__mensaje').classList.remove('activo');
			setTimeout(() => {
				$loader.classList.add('none');
				$response.classList.add('activo');
				formulario.reset();
				setTimeout(() => $response.classList.remove('activo'), 3000);
			}, 3000);
			document
				.querySelectorAll('.formulario__grupo-correcto')
				.forEach((icono) => {
					icono.classList.remove('formulario__grupo-correcto');
				});
		} else {
			document.getElementById('formulario__mensaje').classList.add('activo');
		}
	});

	d.addEventListener('keyup', (e) => {
		if (e.target.matches('.formulario [required]')) {
			const $input = e.target;
			const pattern = $input.pattern || $input.dataset.pattern;
			if (pattern && $input.value !== '') {
				const regEx = new RegExp(pattern);
				campos.nombre = true;
				campos.comments = true;
				if (!regEx.exec($input.value)) {
					d.getElementById($input.name).classList.add('active');
				} else {
					d.getElementById($input.name).classList.remove('active');
				}
			}
			if (!pattern) {
				campos.nombre = false;
				campos.comments = false;
				if ($input.value === '') {
					d.getElementById($input.name).classList.add('active');
				} else {
					d.getElementById($input.name).classList.remove('active');
				}
			}
		}
	});
}
