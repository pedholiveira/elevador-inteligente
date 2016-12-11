# Contributing

## Padrão de mensagem de commit

- Use o imperativo ("Adiciona funcionalidade" não "Adicionando funcionalidade" ou "Adicionou funcionalidade").
- Primeira linha do commit deve conter, no máximo, 72 caracteres.
- Considere descrever os detalhes no corpo do commit.
- Considere usar um emoji no inicio da mensagem de commit.

### Tabela de emojis para commit

Emoji | Code | Commit Type
------------ | ------------- | -------------
:tada: | `:tada:` | Commit inicial.
:art: | `:art:` | Melhora estrutura o formato do código.
:racehorse: | `:racehorse:` | Melhora performance.
:memo: | `:memo:` | Escreve documentação.
:bug: | `:bug:` | Corrige um bug.
:fire: | `:fire:` | Remove código ou arquivo.
:green_heart: | `:green_heart:` | Corrige construção no CI.
:white_check_mark: | `:white_check_mark:` | Adiciona testes.
:lock: | `:lock:` | Melhora segurança.
:arrow_up: | `:arrow_up:` | Upgrade de dependências.
:arrow_down: | `:arrow_down:` | Downgrade de dependências.
:poop: | `:poop:` | Descontinuado.
:construction: | `:construction:` | Trabalho em progresso.
:rocket: | `:rocket:` | Nova funcionalidade.
:see_no_evil: | `:see_no_evil:` | Gambiarra.
:package: | `:package:` | Nova versão.
:eyeglasses: | `:eyeglasses:` | Modifica GUI.
:wrench: | `:wrench:` | Modifica arquivos de configuração.
:bulb: | `:bulb:` | Remove warning do linter.

### Exemplo
```bash
git commit -m ":memo: Adiciona instruções de contribuição.
>
> Foi criado o arquivo (CONTRIBUTING.md) com instruções
> de como fazer um bom commit."
```

## Workflow de contribuição

Este repositório adota o workflow conhecido como [GitHub Flow](https://guides.github.com/introduction/flow/) criado pelo Github. Detalhes sobre o modelo de branchs podem ser obtidos [aqui](https://guides.github.com/introduction/flow/).

![gitflow-diagram](images/github-workflow.png)