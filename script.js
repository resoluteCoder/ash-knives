const navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(){
        // get attribute from navLinks
        const id = navLinks[i].getAttribute('data-link');
        console.log(id);
        const ele = document.querySelector('#' + id);
        console.log(ele);

        ele.scrollIntoView({
            behavior:"smooth",
            block: "start",
            inline: "nearest"
        });
        

    });
}
