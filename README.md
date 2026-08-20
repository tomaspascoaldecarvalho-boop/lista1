# Lista Madagascar — Colégio Rainha Santa Isabel

Site da Lista Madagascar para o Colégio Rainha Santa Isabel.

## Como testar
1. Instala Node.js.
2. Abre esta pasta no terminal.
3. Executa:
   `npm install`
4. Depois:
   `npm run dev`

## Como criar a versão para Netlify
`npm run build`

A pasta gerada será `dist/`.

## GitHub + Netlify
- Cria um repositório no GitHub.
- Faz upload de todos os ficheiros deste projeto.
- No Netlify, liga o repositório.
- Build command: `npm run build`
- Publish directory: `dist`

Não é necessário Supabase ou qualquer base de dados.

## Onde editar o conteúdo
Quase todo o conteúdo editável está em:
`src/data.js`

Aí podes alterar nomes, cargos, eventos e projetos sem mexer no design.
