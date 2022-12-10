import Pag from "./BuildEmbed/Pag";

export default class Pagination {
  actualPage: number;
  maxPages: number;
  pages: Array<Pag>

  constructor(pages: Array<Pag>) {
    this.pages = pages;
    this.actualPage = 0;
    this.maxPages = pages.length;
  }
  set(pages: Array<Pag>) {
    this.pages = pages;
    this.actualPage = 0;
    this.maxPages = pages.length;
  }
  nextPage() {
    const newPage = clamp(0, this.maxPages - 1, this.actualPage + 1);

    this.actualPage = newPage
  }

  previousPage() {
    const newPage = clamp(0, this.maxPages - 1, this.actualPage - 1);

    this.actualPage = newPage
  }

  getPag(): any {
    return this.pages[this.actualPage].getEmbed(this.actualPage, this.maxPages);
  }

}

function clamp(min: number, max: number, value: number) {
  if (value < min) return min;

  if (value > max) return max;

  return value;
}
