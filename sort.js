class Merger {
    split(array) {
        const length = array.length; 
        console.log("# ", array);
        if (length === 1) {
            return array;
        }
        const mid = length/2;
        const left = array.slice(0, mid);
        const right = array.slice(mid, length);

        const leftArray = this.split(left);
        const rightArray = this.split(right);
        this.merge(leftArray, rightArray);
    }
    merge(a, b) {
        console.log(a, b)
    }
}

const dt = new Merger();

const arr = [1, 2, 5, 3, 6, 4];

console.log(dt.split(arr));