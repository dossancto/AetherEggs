import Pag from "./BuildEmbed/Pag";

/**
  * Makes the Embed pagination.
  *
*/
export default class Pagination {
  actualPage: number;
  maxPages: number;
  pages: Array<Pag>

  /**
  *
  * @param {Pag[]} pages - The new Pages to set.
  *
 */
  constructor(pages: Array<Pag>) {
    this.pages = pages;
    this.actualPage = 0;
    this.maxPages = pages.length;
  }
  /**
  * New conjunt of Pages.
  *
  * @param {Pag[]} pages - The new Pages to set.
  *
 */
  set(pages: Array<Pag>) {
    this.pages = pages;
    this.actualPage = 0;
    this.maxPages = pages.length;
  }

  /**
  * Move the cursor to the next page.
  *
* */
  nextPage() {
    const newPage = clamp(0, this.maxPages - 1, this.actualPage + 1);

    this.actualPage = newPage
  }

  /**
  * Move the cursor to the previous page.
  *
* */
  previousPage() {
    const newPage = clamp(0, this.maxPages - 1, this.actualPage - 1);

    this.actualPage = newPage
  }

  /**
  *
  * Get the actial embed page.
  *
* */

  getPag(): any {
    return this.pages[this.actualPage].getEmbed(this.actualPage, this.maxPages);
  }

}

/**
  * Limits the value
*
* @param {number} min - The minumum value.
* @param {number} max - The max value.
* @param {number} value - The value to verify.
*
* @returns {number} Limited value
*
*/
function clamp(min: number, max: number, value: number): number {
  if (value < min) return min;

  if (value > max) return max;

  return value;
}
