export default function removeClass(elements, name) {
    [].forEach.call(elements, function(el){
        el.classList.remove(name);
    });
}

export function bindEvent(elements, name, callback) {
    [].forEach.call(elements, function(el){
        el.addEventListener(name, callback)
    });
}
