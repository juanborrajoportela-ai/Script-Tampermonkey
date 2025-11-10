// ESTO ES UNA PRUEBA DEFINITIVA
(function() {
    'use strict';

    // 1. Aquí están tus datos en formato de texto JSON.
    const datosJSON = '{ "usuarios": [ { "index": 0, "name": "Juan", "mobile": "698186870", "email": "juan.borrajo+firma@docuten.com", "typeCode": "BIOMETRIC" }, { "index": 1, "name": "Brais", "mobile": "698186870", "email": "brais.blanco+firma@docuten.com", "typeCode": "OTP" } ] }';


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

    /**
     * Toma un objeto de usuario del JSON y lo convierte al formato
     * que la función fillAllFields() espera.
     */
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


    // 3. EJECUCIÓN PRINCIPAL DEL SCRIPT

    // Convertimos el texto JSON en un objeto JavaScript
    const datosObjeto = JSON.parse(datosJSON);

    // Rellenamos el título del documento
    const documentTitle = document.getElementById('document.title');
    if (documentTitle) {
        documentTitle.value = "Prueba BIOMETRIC";
    }

    // Recorremos la lista de usuarios del objeto JSON
    console.log("Rellenando campos desde el JSON...");
    for (const usuario of datosObjeto.usuarios) {
        
        const datosParaFormulario = transformarUsuarioParaFormulario(usuario);
        
        fillAllFields(datosParaFormulario);
    }
    console.log("Campos rellenados.");

    // Hacemos clic en los botones necesarios
    clickButton('btn-finalize-add-template');
    clickButton('btn-add-signer');
    clickButton('btn-pre-continue-sign');
    clickButton('modalTemplate');
    clickButton('documentTemplateId');
    clickButton('btn btn-info edit-upload-button');
    clickButton('btn-continue-sign');

})();
