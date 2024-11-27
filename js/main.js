let topFunction = () => {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let scrollToIdElement = (id_name) => {
    let element = document.getElementById(id_name);
    element.scrollIntoView({behavior: 'smooth'});
};