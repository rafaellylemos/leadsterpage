This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 

Trabalhei com Next.Js, Typescript, React e Styled components.
Optei por só criar o repositório no Github após ter uma estrutura visual básica. Após isso, fui comitando por etapas, de acordo com a finalização das partes do site (formulário de contato, corpo da section dos videos, botões, videos em si...)
Comecei organizando a semântica do HTML... observei o layout da página, fui dividindo e fazendo comentários sobre o que era cada parte. Ai fui codando em ordem de leitura de acordo com o layout (de cima pra baixo, da esquerda pra direita).
Para estilizar, utilizei a biblioteca styled components e criei dois arquivos gerais: Um que importava o GlobalStyle (para "zerar" o css da página e eu trabalhar com minha própria configuração inicial) e outro que trabalhava os estilos das demais partes do site. Optei, sempre que possível, trabalhar com a herança, fazendo, dessa forma, com que o código ficasse o mais enxuto possível e só exportar novas consts quando fosse muito necessário.
Utilizei também a componetização pois acredito que, dessa forma, além de termos uma page mais enxuta, conseguimos organizar melhor o código e facilitar sua leitura. Isso é extremamente importante quando se é preciso fazer alterações, debugs ou quando se trabalha em equipe e precisa se compartilhar o código com outros devs.
Para estruturação do meu work flow, utilizei o método kanban.
Para tirar dúvidas, utilizei o chatGPT e sites como o stack overflow.
Optei por trabalhar com CSS Vanilla, mas se der uma olhada no meu repositório do Github, também trabalho com o TailwindCSS.
Para esse projeto, optei por adaptar o design responsivo ao final, fazendo uso de Media Query, mas também trabalho com Mobile First.
Para finalizar, fiz o build do projeto no VSCode e o deploy no Vercel.

OBS.: Faltaram alguns ajustes para que o layout ficasse 100% igual ao sugerido, mas como o prazo que pedi foi até até 07.07, optei por entregar do jeito que está.

Link do Vercel:
https://leadsterpage-ebcv.vercel.app/

Link do Github:
https://github.com/rafaellylemos/leadsterpage
