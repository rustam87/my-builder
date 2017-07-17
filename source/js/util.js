export default function removeClass(elements, name) {
    [].forEach.call(elements, function(el){
        el.classList.remove(name);
    });
}
