// use to fetch html or web pages and render asynchronous 
// cannot function without a live server / host server
// best alternative for Jquery load() function - depreciated
// 2 arguement url & append element

function fetchHtml(url, element) {
        fetch(url)
          .then((response) => {
            return response.text();
          })
          .then((html) => {
            const container = document.querySelector(element);
            container.innerHTML = html;
          });
      } // end of function
