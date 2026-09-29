import {
mostrarToast
} from "./script.js";

/* ==============================
FORMULÁRIO DE DOAÇÃO
============================== */

const formulario =
document.getElementById(
"form-doacao"
);

if (formulario) {

```
formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nome =
            document.getElementById(
                "nome-doador"
            );


        const email =
            document.getElementById(
                "email-doador"
            );


        const valor =
            document.getElementById(
                "valor"
            );


        const valorOutro =
            document.getElementById(
                "valor-outro"
            );


        const pagamento =
            document.getElementById(
                "pagamento"
            );


        /* ==============================
           NOME
           ============================== */

        if (!nome.value.trim()) {

            nome.focus();

            mostrarToast(
                "Digite seu nome."
            );

            return;

        }


        /* ==============================
           E-MAIL
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
           VALOR
           ============================== */

        if (
            !valor.value &&
            !valorOutro.value
        ) {

            valor.focus();

            mostrarToast(
                "Selecione ou informe um valor."
            );

            return;

        }


        /* ==============================
           OUTRO VALOR
           ============================== */

        if (
            valorOutro.value &&
            Number(valorOutro.value) <= 0
        ) {

            valorOutro.focus();

            mostrarToast(
                "Informe um valor válido."
            );

            return;

        }


        /* ==============================
           PAGAMENTO
           ============================== */

        if (!pagamento.value) {

            pagamento.focus();

            mostrarToast(
                "Selecione a forma de pagamento."
            );

            return;

        }


        /* ==============================
           VALOR FINAL
           ============================== */

        const valorDoacao =
            valorOutro.value
                ? Number(valorOutro.value)
                : Number(valor.value);


        /* ==============================
           OBJETO DA DOAÇÃO
           ============================== */

        const doacao = {

            nome:
                nome.value.trim(),

            email:
                email.value.trim(),

            valor:
                valorDoacao,

            pagamento:
                pagamento.value,

            data:
                new Date()
                    .toLocaleString("pt-BR")

        };


        /* ==============================
           RECUPERAR DOAÇÕES
           ============================== */

        const doacoesSalvas =
            JSON.parse(
                localStorage.getItem(
                    "ongVidaDoacoes"
                )
            ) || [];


        /* ==============================
           ADICIONAR DOAÇÃO
           ============================== */

        doacoesSalvas.push(
            doacao
        );


        /* ==============================
           SALVAR
           ============================== */

        localStorage.setItem(
            "ongVidaDoacoes",
            JSON.stringify(
                doacoesSalvas
            )
        );


        /* ==============================
           MENSAGEM DE SUCESSO
           ============================== */

        mostrarToast(
            "Doação de R$ " +
            valorDoacao
                .toFixed(2)
                .replace(".", ",") +
            " registrada com sucesso!"
        );


        /* ==============================
           LIMPAR FORMULÁRIO
           ============================== */

        formulario.reset();

    }
);
```

}
