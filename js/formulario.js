import { mostrarToast } from "./script.js";

import {
salvarMensagem
} from "./storage.js";

const formulario =
document.querySelector("form");

if (formulario) {

```
formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome");


        const email =
            document.getElementById("email");


        const mensagem =
            document.getElementById("mensagem");


        /* ==============================
           VALIDAÇÃO DO NOME
           ============================== */

        if (!nome.value.trim()) {

            nome.focus();

            mostrarToast(
                "Digite seu nome."
            );

            return;

        }


        /* ==============================
           VALIDAÇÃO DO E-MAIL
           ============================== */

        if (
            !email.value.trim() ||
            !email.validity.valid
        ) {

            email.focus();

            mostrarToast(
                "Digite um e-mail válido."
            );

            return;

        }


        /* ==============================
           VALIDAÇÃO DA MENSAGEM
           ============================== */

        if (!mensagem.value.trim()) {

            mensagem.focus();

            mostrarToast(
                "Digite uma mensagem."
            );

            return;

        }


        /* ==============================
           DADOS
           ============================== */

        const dadosFormulario = {

            nome:
                nome.value.trim(),

            email:
                email.value.trim(),

            mensagem:
                mensagem.value.trim(),

            data:
                new Date()
                    .toLocaleString("pt-BR")

        };


        /* ==============================
           SALVAR
           ============================== */

        salvarMensagem(
            dadosFormulario
        );


        /* ==============================
           SUCESSO
           ============================== */

        mostrarToast(
            "Mensagem enviada com sucesso!"
        );


        formulario.reset();

    }
);
```

}
