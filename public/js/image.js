window.oncontextmenu = function (e) {   e.preventDefault() }

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
lightbox.classList.add('hidden')
lightbox.classList.add('bg-gray-600')
lightbox.classList.add('absolute')
lightbox.classList.add('top-0')
lightbox.classList.add('left-0')
lightbox.classList.add('min-h-screen')
lightbox.classList.add('w-screen')
lightbox.classList.add('bg-opacity-50')
lightbox.classList.add('flex')
lightbox.classList.add('items-center')
lightbox.classList.add('justify-center')
const div = document.createElement('div')
div.classList.add('max-h-screen')
div.classList.add('lg:w-2/3')
div.classList.add('sm:w-full')
div.classList.add('justify-self-center')
div.innerHTML = 'hello'
lightbox.appendChild(div)

document.getElementById('lightbox-container').appendChild(lightbox)

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
    //   console.log(e.button)
      lightbox.classList.remove('hidden')
      const img = document.createElement('img')
      img.src = image.src
      img.classList.add('max-h-full')
      img.classList.add('border')
      img.classList.add('sm:max-w-full')
      img.classList.add('lg:max-w-full')
      img.classList.add('rounded-lg')
      while (div.firstChild) {
          div.removeChild(div.firstChild)
      }
      div.appendChild(img)
    })
    
  })
  
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.add('hidden')
  })