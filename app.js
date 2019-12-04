class Cliente {
	constructor(name, lastName, fnac) {
		this.name = name;
		this.lastName = lastName;
		this.fnac = fnac;
	}
}


class UI {
	addCliente(cliente) {
		const listaClientes = document.getElementById('product-list');
		const element = document.createElement('div');
		element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    ${cliente.name}
           					${cliente.lastName} -
                    <strong>Email:</strong> ${cliente.fnac}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        listaClientes.appendChild(element);
	}
	resetForm() {
		document.getElementById('product-form').reset();
	}
	deleteCliente(element) {
		if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Contact removed successfully!', 'success');
        }
	}
	showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


document.getElementById("product-form").addEventListener("submit", function (e) {
	 const nombre = document.getElementById("name").value;
	 const lastName = document.getElementById("lastName").value;
	 const fNacimiento = document.getElementById("fnac").value;

	 const cliente = new Cliente(nombre, lastName, fNacimiento);

	 const ui = new UI();

	  if (nombre === '' || lastName === '' || fNacimiento === '') {
           return ui.showMessage('Completa los campos del formulario', 'danger');
        }

	 ui.addCliente(cliente);
	 ui.resetForm();
	 ui.showMessage(nombre + ' added successfully', 'success');

	 e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
	const ui = new UI();
	ui.deleteCliente(e.target)
});
