/* ==============================
MENU
============================== */

const menuToggle =
document.getElementById("menu-toggle");

if (menuToggle) {

```
menuToggle.addEventListener(
    "change",
    function () {

        const menuLinks =
            document.querySelector(".menu-links");

        if (menuLinks) {

            menuLinks.setAttribute(
                "aria-hidden",
                menuToggle.checked
                    ? "false"
                    : "true"
            );

        }

    }
);
```

}

/* ==============================
NOTIFICAÇÃO
============================== */

function mostrarToast(
mensagem = "Ação realizada com sucesso!"
) {

```
const toast =
    document.getElementById("toast");

if (!toast) {
    return;
}

toast.textContent = mensagem;

toast.classList.add("mostrar");

setTimeout(function () {

    toast.classList.remove("mostrar");

}, 3000);
```

}

/* ==============================
BOTÃO DE NOTIFICAÇÃO
============================== */

const botaoNotificacao =
document.getElementById(
"btn-notificacao"
);

if (botaoNotificacao) {

```
botaoNotificacao.addEventListener(
    "click",
    function () {

        mostrarToast(
            "Ação realizada com sucesso!"
        );

    }
);
```

}

/* ==============================
MODAL - SAIBA MAIS
============================== */

const botaoSaibaMais =
document.getElementById(
"btn-saiba-mais"
);

const modal =
document.getElementById("modal");

const botaoFechar =
document.getElementById(
"btn-fechar-modal"
);

const botaoFechar2 =
document.getElementById(
"btn-fechar-modal-2"
);

/* ABRIR MODAL */

if (botaoSaibaMais && modal) {

```
botaoSaibaMais.addEventListener(
    "click",
    function () {

        modal.style.display = "flex";

        if (botaoFechar) {
            botaoFechar.focus();
        }

    }
);
```

}

/* FECHAR PELO X */

if (botaoFechar && modal) {

```
botaoFechar.addEventListener(
    "click",
    function () {

        modal.style.display = "none";

        if (botaoSaibaMais) {
            botaoSaibaMais.focus();
        }

    }
);
```

}

/* FECHAR PELO BOTÃO */

if (botaoFechar2 && modal) {

```
botaoFechar2.addEventListener(
    "click",
    function () {

        modal.style.display = "none";

        if (botaoSaibaMais) {
            botaoSaibaMais.focus();
        }

    }
);
```

}

/* ==============================
FECHAR CLICANDO FORA
============================== */

if (modal) {

```
modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.style.display = "none";

            if (botaoSaibaMais) {
                botaoSaibaMais.focus();
            }

        }

    }
);
```

}

/* ==============================
FECHAR COM ESC
============================== */

document.addEventListener(
"keydown",
function (event) {


    if (event.key === "Escape") {

        if (
            modal &&
            modal.style.display === "flex"
        ) {

            modal.style.display = "none";

            if (botaoSaibaMais) {
                botaoSaibaMais.focus();
            }

        }

    }

}


);

/* ==============================
EXPORTAÇÃO
============================== */

export {
mostrarToast
};
