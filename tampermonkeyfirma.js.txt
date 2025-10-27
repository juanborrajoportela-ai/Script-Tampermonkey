(function() {
    'use strict';

    function fillFields(elements) {
        let sizeElements = elements.length;
        for (let counterElement = 0; counterElement < sizeElements; ++counterElement) {
            fillField(elements[counterElement]);
        }
    }

    function fillField(elementFilleable) {
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


    const usuarioJuan = [
        {
            elementId: getSignerFieldSelector(0, 'name'), 
            valueField: 'Juan'
        },
        {
            elementId: getSignerFieldSelector(0, 'mobile'),
            valueField: '698186870'
        },
        {
            elementId: getSignerFieldSelector(0, 'email'),
            valueField: 'juan.borrajo+firma@docuten.com'
        },
        {
            elementId: getSignerFieldSelector(0, 'typeCode', 'select'),
            valueField: 'BIOMETRIC'
        }
    ];

    const usuarioBrais = [
        {
            elementId: getSignerFieldSelector(1, 'name'),
            valueField: 'Brais'
        },
        {
            elementId: getSignerFieldSelector(1, 'mobile'),
            valueField: '698186870'
        },
        {
            elementId: getSignerFieldSelector(1, 'email'),
            valueField: 'brais.blanco+firma@docuten.com'
        },
        {
            elementId: getSignerFieldSelector(1, 'typeCode', 'select'),
            valueField: 'OTP'
        }
    ];

    const documentTitle = document.getElementById('document.title');
    documentTitle.value = "Prueba BIOMETRIC";

    fillFields(usuarioBrais);
    fillFields(usuarioJuan);
    clickButton('btn-finalize-add-template');
    clickButton('btn-add-signer');
    clickButton('btn-pre-continue-sign');
    clickButton('modalTemplate');
    clickButton('documentTemplateId');
    clickButton('btn btn-info edit-upload-button');
    clickButton('btn-continue-sign');
})();