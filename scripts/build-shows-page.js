

let api_key = localStorage.getItem('api_key')
let Arr = []
const shows_conter_list = document.querySelector('.shows_conter_list')
const shows_mobile_list = document.querySelector('.shows_mobile_list')
let Band_api = new BandSiteApi(api_key)

const setArr = async () => {
    // comments
    let res = await Band_api.getShows(api_key)
    //res
    console.log(res, 111);
    Arr = res.map(item => {
        const numericDate = item.date // timestamp in milliseconds
        const date = new Date(numericDate); // create a Date object from the timestamp

        return { ...item, date: date.toDateString() }
    })
    console.log(Arr);
    setCommentsList()

}
setArr()

const setCommentsList = () => {
    let html = ''
    let html_mobile = ''
    for (let i = 0; i < Arr.length; i++) {
        html = `
          <li>

                            <h3>${Arr[i].date}</h3>
                            <p>${Arr[i].place}</p>
                            <p>${Arr[i].location}</p>
                            <div class="button_buy">
                                <button class='button_click'>BUY TICKETS</button>
                            </div>
                        </li>
        `
        html_mobile = ` <li>
                            <span>DATE </span>
                            <h3>${Arr[i].date}</h3>
                            <span>VENUE</span>
                            <p>${Arr[i].place}</p>
                            <span>LOCATION</span>
                            <p>${Arr[i].location}</p>
                            <div class="button_buy">
                                <button class='button_click'>BUY TICKETS</button>
                            </div>
                        </li>`
        const parser = new DOMParser();

        const doc = parser.parseFromString(html, 'text/html');
        shows_conter_list.appendChild(doc.body.firstChild)
        const parser_mobile = new DOMParser();

        const doc_mobile = parser_mobile.parseFromString(html_mobile, 'text/html');
        shows_mobile_list.appendChild(doc_mobile.body.firstChild)
    }

}
