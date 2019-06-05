type treeObj = {
    id: number,
    data: any
};

interface BinaryNode {
    root: treeObj,
    left?: BinaryNode,
    right?: BinaryNode,
    insert(value: treeObj|null): BinaryNode,
    remove(): BinaryNode,
    find(key: number): treeObj|false
}


class BinaryTree implements BinaryNode {
    root: treeObj;
    left?: BinaryTree;
    right?: BinaryTree;

    constructor(value: treeObj) {
        this.root = value;
        this.left = null;
        this.right = null;
    }

    insert(value: treeObj|null): BinaryTree {
        if (value === null) {
            return this;
        }

        if (value.id < this.root.id) {
            if (this.left === null) {
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else if (value.id > this.root.id) {
            if (this.right === null) {
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        } else {
            throw new Error('Incorrect Id prop at the object!');
        }

        return this;
    }

    remove(): BinaryTree {
        return this;
    }

    find(key: number): treeObj|false {
        if (this.root.id === key) {
            return this.root;
        }

        if (key > this.root.id && this.right !== null) {
            return this.right.find(key);
        }

        if (key < this.root.id && this.left !== null) {
            return this.left.find(key);
        }

        return false;
    }
}


export { BinaryTree };
