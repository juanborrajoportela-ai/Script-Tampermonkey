# Script-Tampermonkey

## PISTAS PARA EL EJERCICIO DEL JSON:

Código:

```javascript
const jsonUsers = '{ "usuarios": [ { "index": 0, "name": "Juan", "mobile": "698186870", "email": "juan.borrajo+firma@docuten.com", "typeCode": "BIOMETRIC" }, { "index": 1, "name": "Brais", "mobile": "698186870", "email": "brais.blanco+firma@docuten.com", "typeCode": "OTP" } ] }';
const users = JSON.parse(jsonUsers);

// Información de los usuarios contenida en el JSON
console.log(users.usuarios);

// El \n es un salto de línea. Puede ayudar a hacer más visual cierta información en algunos contextos
console.log("\n");

// Móvil del usuario 0
console.log(users.usuarios[0].mobile);
console.log("\n");

// Número de usuarios del JSON
console.log(users.usuarios.length);
```

Url para probar el código: https://runjs.app/play
