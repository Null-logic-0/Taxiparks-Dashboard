const burgermenu = document.getElementById('burgermenu')
const sidebar = document.getElementById('sidebar')
const close_btn = document.querySelector('.side-menu__close')

if (document.body.clientWidth <= 1030 && document.body.clientWidth > 600) {
    sidebar.classList.add('closed')
    console.log('hi')
} 

if (document.body.clientWidth > 600) {
    burgermenu.addEventListener('click', () => {
        sidebar.classList.toggle('closed')
        console.log('click')
    })
} else if (document.body.clientWidth <= 600) {
    burgermenu.addEventListener('click', () => {
        sidebar.classList.toggle('active')
        console.log('click')
    })

    close_btn.addEventListener('click', () => {
        sidebar.classList.remove('active')
    })
}