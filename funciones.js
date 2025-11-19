// funciones.js - Librería de utilidades para Docuten

function fillAllFields(elements) {
    let sizeElements = elements.length;
    for (let counterElement = 0; counterElement < sizeElements; ++counterElement) {
        fillSingleField(elements[counterElement]);
    }
}

function fillSingleField(elementFilleable) {
    const genericInput = document.querySelector(elementFilleable.elementId);
    if (genericInput) {
        genericInput.value = elementFilleable.valueField;
    } else {
        console.warn('Elemento no encontrado:', elementFilleable.elementId);
    }
}

function clickButton(elementId) {
    const button = document.getElementById(elementId);
    if (button) {
        button.click();
    } else {
        console.warn('Botón no encontrado:', elementId);
    }
}

function getSignerFieldSelector(index, fieldName, tag = '') {
    return `${tag}[name="signerInEdition[${index}].${fieldName}"]`;
}

function transformarUsuarioParaFormulario(usuario) {
    const datosFormateados = [
        {
            elementId: getSignerFieldSelector(usuario.index, 'name'),
            valueField: usuario.name
        },
        {
            elementId: getSignerFieldSelector(usuario.index, 'mobile'),
            valueField: usuario.mobile
        },
        {
            elementId: getSignerFieldSelector(usuario.index, 'email'),
            valueField: usuario.email
        },
        {
            elementId: getSignerFieldSelector(usuario.index, 'typeCode', 'select'),
            valueField: usuario.typeCode
        }
    ];
    return datosFormateados;
}