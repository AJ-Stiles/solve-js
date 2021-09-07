let article = document.querySelector('body > article');
let a = document.querySelectorAll('body > article a');

export const restoreStyle = () => {
    article.classList.remove('none');
    article.classList.add('flex');
    a.forEach(tag => {
        tag.classList.remove('none');
        tag.classList.add('block');
    });
}

export const fixGlitch = () => {
    article.classList.remove('flex');
    article.classList.add('none');
    a.forEach(tag => {
        tag.classList.remove('block');
        tag.classList.add('none');
    });
}

/* From filter.css other-ext */
export const filterStyles = () => {
    let spanParent = document.querySelectorAll('section > div:nth-child(2) div');
    spanParent.forEach(span => { span.classList.add('flex');});   
    let spanLeft = document.querySelectorAll('section > div:nth-child(2) span:nth-child(1)');
    spanLeft.forEach(span => { span.classList.add('flex');});
    let spanRight = document.querySelectorAll('section > div:nth-child(2) span:nth-child(2)');
    spanRight.forEach(span => { span.classList.add('block');});
}