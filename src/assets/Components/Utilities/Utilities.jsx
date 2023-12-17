const setItem = name => {
    let storage = {};
    let previous = JSON.parse(localStorage.getItem('items'));
    if(previous){
        storage = previous;
    }
    const previousValue = storage[name];
    if(previousValue){
        const newValue = +previousValue + 1;
        storage[name] = newValue;
    }
    else{
        storage[name] = 1;
    }
        localStorage.setItem('items', JSON.stringify(storage));

    
}
const removeItem = (name) =>{
    const previous = JSON.parse(localStorage.getItem('items'));
    if(previous){
        if(name in previous){
            delete previous[name];
        }
    }
    localStorage.setItem('items', JSON.stringify(previous))
}

export {setItem, removeItem}