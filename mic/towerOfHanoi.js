/*   
1 => shift 'n-1' disks from A to B, using C(when required)
2 => shift last disk from A to C.
3 => shift 'n-1' disks from B to C, using A (when required)
*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`move 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`move ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B');