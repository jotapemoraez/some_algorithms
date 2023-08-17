class BinaryTree {


    constructor() {
        this.root = null
    }

    push(value) {

        if (this.root === null) {
            this.root = new Node(value)
            return
        }
        
        var nodeTmp = this.root
        while (nodeTmp !== null) {
            
            if (value >= nodeTmp.value) {

                if (nodeTmp.right === null) {
                    nodeTmp.right = new Node(value)
                    return
                } else 
                    nodeTmp = nodeTmp.right
            } else {

                if (nodeTmp.left === null) {
                    nodeTmp.left = new Node(value)
                    return
                } else {
                    nodeTmp = nodeTmp.left
                }
            }

        }

    }

    bfsTraversal() {
        var queue = []
        var list = []
        queue.push(this.root)
 
        while ( queue.length > 0) {
            
            let level = [];
            let len = queue.length;

            for (let i = 0; i < len; i++) {

                var element = queue.shift()

                level.push(element);

                list.push(element.value)

                if (element.left !== null) {

                    queue.push(element.left)
                }

                if (element.right !== null) {
                    queue.push(element.right)
                }
            }
            console.log(level.reduce( (acc, current) => 
                (acc.value > current.value) ? acc:current).value)
            console.log("\n")


        }

        return list
    }

    rootToLeaf() {

        var allPaths = []
        function dfs(node, path) {
            
            if (node) {
                path += node.value
            }

            if (!node.left && !node.right ) {
               allPaths.push(path)
            }

            if ( node.left) {

                 dfs(node.left, path+"->")
            }

            if (node.right) {
                dfs(node.right, path+"->")
            }
        }

        dfs(this.root, "")

        return allPaths

    }

    validate(node, min, max) {
        if (node === null) {
          return true;
        }
      
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
          return false;
        }
      
        return (
          this.validate(node.left, min, node.val) && this.validate(node.right, node.val, max)
        );
      }

     isValidBST() {
        return this.validate(this.root, null, null);
      }
      
       


}

class Node {

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null
    }

}

tree = new BinaryTree()
tree.push(9)
tree.push(6)
tree.push(4)
tree.push(7)
tree.push(13)
tree.push(10)
tree.push(14)
tree.bfsTraversal()