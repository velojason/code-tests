// Compare whether the Left or Right branch of a binary tree has a larger sum.

const treeComp = (arr) => {
    if(arr.length === 0) {
        return '';
    }

    const sum = (arr, idx) => {
        if (idx < arr.length) {
            if (arr[idx] === -1) {
                return 0;
            }
           return arr[idx] + sum(arr, ((idx * 2) + 1)) + sum(arr, ((idx * 2) + 2));
        }
        return 0;
    }
    
    const left = sum(arr, 1);
    const right = sum(arr, 2);
    
    if (left === right) {
        return '';
    }
    
    return left > right ? "Left" : "Right";
};

treeComp([3,6,2,9,-1,10]) // Left
