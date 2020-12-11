$(function(){
    $('#login').validate({
        rules: {
            username: {
              required: true,
              minlength: 2,
              maxlength: 10
            },
            password: {
              required: true,
              minlength: 2,
              maxlength: 12
            }
          },
          messages: {
            username: {
              required: '请填写用户名信息',
              minlength: '最少 2 个字符',
              maxlength: '最多 10 个字符'
            }
          },
          submitHandler (form) {
            const info = $(form).serialize() 
            $.post('../server/login.php',info,null,'json').then(res =>{
                console.log(res)
                if (res.code === 0) {
                    $('.login-error').removeClass('hide')
                } else if (res.code === 1) {
                    setCookie('nickname', res.nickname)
                    window.location.href = '../html/index.html'
                }
            })
          }
    })
})