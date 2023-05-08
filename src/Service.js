export const getItemsFromStorage = (storageKey) => {
    const storageValue = localStorage.getItem(storageKey);

    let itemsTodo = null;

    try {
        const storageValueJSON = JSON.parse(storageValue);

        if(Array.isArray(storageValueJSON)) {
            itemsTodo = storageValueJSON;
        }
    } catch(e) {
        itemsTodo = []
    }

    return itemsTodo;
}



export const saveItemsToLocalStorage = (storageKey, storageValue) =>{
    localStorage.setItem(storageKey, JSON.stringify(storageValue))
}