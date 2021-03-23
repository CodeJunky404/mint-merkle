'use strict';

const
    precon = require('@makipool/mint-precon'),
    buffers = require('@makipool/mint-utils').buffers;


module.exports = {

    /**
     * A class to assist in pre-calculating merkle branches without a Bitcoin coinbase hash so that the merkle root can
     * be calculated faster when a coinbase is ready to be added.
     */
    TxMerkleTree: require('./libs/class.TxMerkleTree'),

    /**
     * Calculate the merkle root from an array of hash leaves.
     *
     * @param hashArr {Buffer[]}
     * @returns Buffer
     */
    rootFromHashArr: rootFromHashArr
};


function rootFromHashArr(hashArr) {
    precon.arrayOfInstance(hashArr, Buffer, 'hashArr');

    if (hashArr.length === 0)
        return Buffer.alloc(32, 0);

    let arr = hashArr;
    let len = hashArr.length;

    while (len > 1) {

        const nextArr = [];

        // hash serial pairs and push result into array for next iteration
        for (let i = 0; i < len; i += 2) {
            const pairArr = [arr[i], arr[i + 1] || arr[len - 1]/*duplicate last item if len is uneven*/];
            const hashed = buffers.sha256d(Buffer.concat(pairArr));
            nextArr.push(hashed);
        }

        arr = nextArr;
        len = nextArr.length;
    }

    return arr[0];
}