
class Folder {

    constructor(id, subFolders, name) {

        this.id = id;
        this.subFolders = subFolders;
        this.name = name
    }
}

class Tree {

    constructor(list) {

        this.rootNodes = list.filter( folder => folder.id === 0);

        this.map = new Map()

        list.forEach( folder => {

            if (folder.id !== 0) {
                this.map.set(folder.id, folder)
            }

        })

    }

    searchFolder(id) {

        var result = ""

        const  traversal = (node, path) => {
            if (node) {

                path += node.name


                if (node.id == id)
                    result = path

                for (let folderId of node.subFolders) {
                
                    const folder = this.map.get(folderId)

                    traversal(folder, path+"->")

                }

            }
        }
        

        for (const rootNode of this.rootNodes) {
            traversal(rootNode, "")
            if (result !== "")
                break
        }
           

        return result
           

    }

}

var list = [ new Folder(0, [7, 3], "abc"), 
new Folder(0, [8], "xyz"), 
new Folder(3, [], "pqr"), new Folder(8, [], "def"), 
new Folder(7, [9], "ijk"), new Folder(9, [], "lmn")]

console.log( new Tree(list).searchFolder(8))

