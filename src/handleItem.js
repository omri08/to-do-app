
function toDoItem(itemName) {
    this.name = itemName;
    this.id = itemName.replace(" ", "").toLowerCase();
    this.markDone = false;
    this.delete = false;
}

const createObjItem = (name) => {
    const Item = new toDoItem(name);
    return Item;
}

export default createObjItem;