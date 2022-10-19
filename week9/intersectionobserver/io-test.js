let options = {
    root: null,
    rootMargin: '0px',
    threshold: .25
};

let callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.intersectionRatio > .25) {
            entry.target.classList.add('active');
            //observer.unobserve(target);
        } else {
            entry.target.classList.remove('active');
        }
    });
};

let observer = new IntersectionObserver(callback, options);

let target = document.getElementById('obs');
observer.observe(target);