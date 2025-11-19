// ==UserScript==
// @name         Tu Script de Firma (Refactorizado)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Rellena formularios automáticamente
// @author       Tú
// @match        *://URL-DE-LA-PAGINA-DONDE-FUNCIONA/*
// @grant        GM_getResourceText
// @resource     misDatosJSON https://raw.githubusercontent.com/juanborrajoportela-ai/Script-Tampermonkey/main/datos.json
// @require      https://raw.githubusercontent.com/juanborrajoportela-ai/Script-Tampermonkey/refactor-funciones/funciones.js
// ==/UserScript==

(function() {
    'use strict';

    // Fíjate que he añadido la línea @require arriba. 
    // Apunta a tu repositorio, pero a la rama "refactor-funciones" y al archivo "funciones.js".

    // 1. Leemos los datos
    const datosJSON = GM_getResourceText("misDatosJSON");
    const datosObjeto = JSON.parse(datosJSON);

    // 2. Ejecución Principal (Las funciones ya no están aquí, las carga el @require)

    // Rellenamos el título
    const documentTitle = document.getElementById('document.title');
    if (documentTitle) {
        documentTitle.value = "Prueba BIOMETRIC";
    }

    console.log("Rellenando campos desde el JSON externo...");
    for (const usuario of datosObjeto.usuarios) {
        // Estas funciones ahora viven en funciones.js, pero Tampermonkey las inyectará aquí
        const datosParaFormulario = transformarUsuarioParaFormulario(usuario); 
        fillAllFields(datosParaFormulario);
    }
    console.log("Campos rellenados.");

    // Clics en botones
    clickButton('btn-finalize-add-template');
    clickButton('btn-add-signer');
    clickButton('btn-pre-continue-sign');
    clickButton('modalTemplate');
    clickButton('documentTemplateId');
    clickButton('btn btn-info edit-upload-button');
    clickButton('btn-continue-sign');

})();