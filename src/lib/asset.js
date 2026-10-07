/** Prefixa o caminho base do deploy (ex.: /portifolio-fatec/ no GitHub Pages) em arquivos de /public. */
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
