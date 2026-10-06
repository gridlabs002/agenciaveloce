# Site Veloce

Versão horizontal aprovada para publicação pelo usuário em 2026-10-06: seis cenas, carro avançando, pista em perspectiva e efeitos de velocidade. Copy orientada à velocidade, excelência e especialização automotiva.

Execute `npm start` e abra http://localhost:3000. O servidor usa a variável `PORT`; `/health` permite verificar disponibilidade. Ativos são servidos de `public/`.

Railway: projeto `9b077954-6960-45c1-8105-0d3dccf79b9c`, production, serviço `689c387c-6bbc-45e5-bb93-c64ad15fc07a`, `PORT=3000`.

Navegação por scroll, gestos, teclado e indicadores. Botão de redução de efeitos e preferência do sistema respeitados. Contato direto com o WhatsApp informado no HTML original, sem envio automático. Não há formulário, quiz, métricas ou depoimentos nesta versão. Artigos e materiais não fornecidos continuam indisponíveis.

A versão inicial pode ser recuperada pelo commit `3528184`. A prévia independente está em `preview-horizontal/` e roda com `node preview-horizontal/serve.mjs` na porta 4173.

## Blog vertical e publicação editorial

`/blog` reúne quatro guias iniciais, busca e filtros progressivos. `/blog/sobre` informa autoria institucional, apoio de IA e critérios editoriais. Artigos têm URL própria, conteúdo no HTML, respostas iniciais, sumário, referências quando pertinentes, perguntas frequentes e leituras relacionadas.

Edite `content/posts.json` e execute `npm run build`; o gerador mantém os artigos, RSS, sitemap e robots. `npm test` verifica o servidor e a estrutura SEO das páginas. Revise o conteúdo e as datas antes de publicar. As imagens editoriais estão em `public/assets/`.

A origem canônica padrão é `https://veloce-site-production.up.railway.app`. Quando o domínio próprio estiver validado, definir `SITE_URL` e reconstruir o blog; atualizar também os metadados da homepage antes de publicar. Não canonicizar para um domínio indisponível.

Fontes técnicas: Google Search Central, [busca generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Article](https://developers.google.com/search/docs/appearance/structured-data/article) e [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

A estrutura favorece descoberta e leitura; indexação, posições e citações em IA não foram medidas nem garantidas. Search Console, submissão de sitemap e configuração dos controles de busca generativa dependem de acesso à propriedade verificada. Não foi configurado rastreamento de analytics nesta tarefa.
