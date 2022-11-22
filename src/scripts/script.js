const paragraph = document.getElementById('contact-text')
const text = paragraph.innerHTML

const paragraph_after = text.match(/([^ ]+ +){6}|.+/g).join('<br>')

paragraph.innerHTML = paragraph_after

const date = new Date()
const year = date.getFullYear()
document.getElementById('date').innerHTML = year