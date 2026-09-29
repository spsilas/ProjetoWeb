const CHAVE_MENSAGENS = "ongVidaMensagens";

export function salvarMensagem(mensagem) {

```
const mensagens =
    obterMensagens();

mensagens.push(mensagem);

localStorage.setItem(
    CHAVE_MENSAGENS,
    JSON.stringify(mensagens)
);
```

}

export function obterMensagens() {

```
const dados =
    localStorage.getItem(
        CHAVE_MENSAGENS
    );


if (!dados) {

    return [];

}


try {

    return JSON.parse(dados);

} catch (erro) {

    console.error(
        "Erro ao ler mensagens do localStorage:",
        erro
    );

    return [];

}
```

}

export function limparMensagens() {

```
localStorage.removeItem(
    CHAVE_MENSAGENS
);
```

}
