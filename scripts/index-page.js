
const url = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/'
let api_key = ''
let Arr = []
const commentsList = document.querySelector('.commentsList')
const name_text = document.querySelector('.name_text')
const textarea_text = document.querySelector('.textarea_text')
const comments_button = document.querySelector('.comments_button')
let Band_api = new BandSiteApi(api_key)
// register
const setRegister = async () => {
    let res = await axios.get(url + 'register', {
        params: {

        }
    })
    //res

    api_key = res.data.api_key
    console.log(api_key);
    localStorage.setItem('api_key', api_key)
    setArr()

}
setRegister()
const setArr = async () => {

    let res = await Band_api.getComments()

    //res
    console.log(res);
    Arr = res.map(item => {
        const numericDate = item.timestamp // timestamp in milliseconds
        const date = new Date(numericDate); // create a Date object from the timestamp

        return { ...item, timestamp: date.toDateString() }
    })
    console.log(Arr);
    setCommentsList()

}


const setCommentsList = () => {
    let html = ''
    commentsList.innerHTML = ''
    for (let i = 0; i < Arr.length; i++) {
        html = `
          <li>
                    <img src="assets/Icons/SVG//icon-delete.svg" alt="Facebook" data-id=${Arr[i].id} data-type='delete' class="delete_icon">
                    <div class="like_box"><img src="assets/Icons/SVG//icon-like.svg" data-id=${Arr[i].id}  data-type='like' alt="Facebook" class="like_icon">
                        <span class="like_number">${Arr[i].likes}</span>
                    </div>
                    <div class="comment_avatar">
                        <div class="round"></div>
                    </div>
                    <div class="comment_content">
                        <div class="comment_content_title">
                            <h5>${Arr[i].name}</h5>
                            <span>${Arr[i].timestamp}</span>
                        </div>
                        <div class="comment_content_text">
                            ${Arr[i].comment}
                        </div>
                    </div>
                </li>
        `

        const parser = new DOMParser();

        const doc = parser.parseFromString(html, 'text/html');
        commentsList.appendChild(doc.body.firstChild)
    }

}

commentsList.addEventListener('click', async (e) => {
    const { id, type } = e.target.dataset
    if (type == 'like') {

        let res = await Band_api.putComments(id)
        //res
        console.log(res);
        setArr()


    }
    if (type == 'delete') {
        let res = await Band_api.deleteComments(id)
        //res
        console.log(res);
        setArr()


    }



})
comments_button.addEventListener('click', async (e) => {

    e.preventDefault();

    let params = {
        "name": name_text.value,
        "comment": textarea_text.value,

    }
    let res = await Band_api.postComment(params)
    let obj = res
    const numericDate = obj.timestamp // timestamp in milliseconds
    const date = new Date(numericDate); // create a Date object from the timestamp



    obj.timestamp = date.toDateString()
    console.log(obj);
    Arr.unshift(obj)
    setCommentsList()
    name_text.value = ''
    textarea_text.value = ''



})