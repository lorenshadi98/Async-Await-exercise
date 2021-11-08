// Part 1: Number Facts
/* 1.Make a request to the Numbers API (http://numbersapi.com/)
to get a fact about your favorite number.
 (Make sure you get back JSON by including the json query key, specific to this API.
*/
async function single_request() {
  try {
    let res = await axios.get('http://numbersapi.com/23?json');
    $('#first-result').text('single request result: ' + res.data.text);
  } catch {
    console.log('error occured inside single_request');
  }
}
single_request();
/* 2. Figure out how to get data on multiple numbers in a single request. 
Make that request and when you get the data back, put all of the number facts on the page. */

async function multi_val_request() {
  try {
    let res = await axios.get('http://numbersapi.com/1,3,8');
    for (let num in res.data) {
      let $fact = $('<li></li>').text(res.data[num]);
      $('#second-part').append($fact);
    }
  } catch {
    console.log('Error occured in the multi-val-request func');
  }
}
multi_val_request();

/*3.Use the API to get 4 facts on your favorite number. 
Once you have them all, put them on the page.
It’s okay if some of the facts are repeats.
 (Note: You’ll need to make multiple requests for this.) */

async function four_requests() {
  let factsArr = await Promise.all([
    axios.get('http://numbersapi.com/6'),
    axios.get('http://numbersapi.com/7'),
    axios.get('http://numbersapi.com/22'),
    axios.get('http://numbersapi.com/23')
  ]);
  console.log(factsArr);
  factsArr.forEach((element) => {
    let $newfact = $('<li></li>').text(element.data);
    $('#third-part').append($newfact);
  });
}

four_requests();
