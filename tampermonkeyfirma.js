// ==UserScript==
// @name         Tu Script de Firma
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Rellena formularios automáticamente
// @author       Tú
// @match        *://URL-DE-LA-PAGINA-DONDE-FUNCIONA/*
// @grant        GM_getResourceText
// @resource     misDatosJSON https://raw.githubusercontent.com/juanborrajoportela-ai/Script-Tampermonkey/main/datos.json
// ==/UserScript==

(function() {
    'use strict';

    // 1. Aquí leemos los datos desde el archivo externo
    const datosJSON = GM_getResourceText("misDatosJSON");


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

    // Convertimos el texto JSON (leído del archivo) en un objeto JavaScript
    const datosObjeto = JSON.parse(datosJSON);

    // Rellenamos el título del documento
    const documentTitle = document.getElementById('document.title');
    if (documentTitle) {
        documentTitle.value = "Prueba BIOMETRIC";
    }

    // Recorremos la lista de usuarios del objeto JSON
    console.log("Rellenando campos desde el JSON externo...");
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