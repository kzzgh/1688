
$(function () {

    $('.header .right ul li:nth-child(1) span:nth-child(1)').on('click', function () {
        window.location.href = '../html/login.html';
    })
    $('.header .right ul li:nth-child(2) span:nth-child(1)').on('click', function () {
        window.location.href = '../html/login.html';
    })
    $('.header .right ul li:nth-child(3) span:nth-child(1)').on('click', function () {
        window.location.href = '../html/login.html';
    })
    $('.search .center .search-title').on('click', 'span', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    })


    // 首页登录
    
    $('.user_login').on('click',function(){
        window.location.href = '../html/login.html'
    })
   


})


// 搜索引擎
const ul = document.querySelector('#search-ul')
const inp = document.querySelector('#search-inp')
// console.log(ul);
inp.addEventListener('input', function (){
    const value = this.value.trim()
    if (!value) return
    const script = document.createElement('script')
    const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
    script.src = url
    document.body.appendChild(script)
    script.remove()
})
function bindHtml(res){
    if (!res.g) {
        ul.classList.remove('active')
        return
    }
    let str = ''
    for (let i = 0; i < res.g.length; i++) {
      str += `
        <li>${ res.g[i].q }</li>
      `
    }
    ul.innerHTML = str
    ul.classList.add('active')
}






