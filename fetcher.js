const MAX_RESULTS = 103;

/**
 * Return the next page of results.  If page === undefined, starts from the
 * beginning.  Otherwise, fetches the next 10 records after the last page.
 * @param page
 * @return {object}
 *  {
 *      "results": [...],
 *      "page": 3,
 *  }
 */
function fetchPage(page = 0) {
  const results = [];

  if (page * 10 > MAX_RESULTS) {
    return {
      page: null,
      results,
    };
  }

  for (let i = page * 10; i < Math.min(MAX_RESULTS, (page + 1) * 10); i += 1) {
    results.push(i);
  }

  return {
    page: page + 1,
    results,
  };
}

class ResultFetcher {
  // TO IMPLEMENT
  // Return numResults amount of results from fetchPage.
  constructor() {
    this.fetched = 0;
    this.page = 0;
  }

  fetch(numResults) {
    let results = [];

    if(this.fetched < MAX_RESULTS) {
      let start = this.fetched % 10;
      let pages = Math.floor(numResults / 10);
      let count = numResults;

      for (let i = this.page; i <= pages; i++) {
        let result = fetchPage(i);
        let add = result.results.splice(start, count);
        count -= add.length;
        start = 0;
        results.push(...add);
      }

      this.fetched += numResults;
      this.page += pages;
    }

    return results;
  }
}

function testCase(actual, expected) {
  if (actual !== expected) {
    console.log(`FAILED: expected ${expected}, got ${actual}`);
  } else {
    console.log('SUCCESS');
  }
}

let fetcher = new ResultFetcher();

testCase(fetcher.fetch(5).length, 5);
testCase(fetcher.fetch(11).length, 11);
testCase(fetcher.fetch(103).length, 87);
testCase(fetcher.fetch(103).length, 0);
testCase(fetcher.fetch(200).length, 0);

fetcher = new ResultFetcher();
testCase(fetcher.fetch(200).length, 103);
