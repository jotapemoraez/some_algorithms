

function reconcile(a, b) {

    return a.every( (el) => {

        let count = 0;
        for (let item of b) {
            if (el.id === item.id && el.val === item.val) {
                
                count++;

            }
            if ( count > 1)
                return false;

        }
        if (count === 1)
            return true;
        if (count === 0)
            return false;

    })

}

a = [{ id: 1, val:1}, { id: 2, val:2}, { id: 3, val:3}]
b = [{ id: 1, val:1}, { id: 2, val:2}, { id: 3, val:3},{ id: 3, val:3}]

console.log( reconcile(a,b))

