
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl = document.querySelector("main")

mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = "<h1>SEI Rocks!</h>"

mainEl.classList = ("flex-ctr")

const topMenuEl = document.querySelector("#top-menu")
console.log(topMenuEl)

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList = ("flex-around")

// for (let link = 0; link < menuLinks.length; link++){
//     const newLink = document.createElement("a")
//     newLink.href = menuLinks[link].href
//     newLink.innerText = menuLinks[link].text
//     topMenuEl.append(newLink)
// }

for (link in menuLinks){
  const newLink = document.createElement("a")
  newLink.href = menuLinks[link].href
  newLink.innerText = menuLinks[link].text
  topMenuEl.append(newLink)
}