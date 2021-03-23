'use strict';

const
    assert = require('assert'),
    MintTxMerkleTree = require('./../libs/class.TxMerkleTree');


describe('CoinbaseMerkleTree', () => {

    let tree;

    describe('withFirst function', () => {

        context('1 coinbase data + 0 transaction hash', () => {
            beforeEach(() => {
                tree = new MintTxMerkleTree([])
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('08aa', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '1be5800f8c245696342e4a67ceda519bc09fa2bdbb9a42462ee558e300edb5d6');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirst(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'c23f4cd3d8c1d9cc256602598816171c2e8913206b492ed74d183cd5c0f4b81a');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('00000000ff', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '13eccd04d31faed241d478b41c012f9794fe105893d0348b6c54338529f7402d');
            });
        });

        context('1 coinbase + 1 transaction hash', () => {
            beforeEach(() => {
                const txDataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ];
                tree = new MintTxMerkleTree(txDataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('08aa', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '4ed4e1fdd0b78075073cb7a441e910b0dcf84b5b467f8495a76b1a0afa0119a2');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirst(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '601029368714b9d9f86e085c294bb2b926938d69a56ddd4a18f3e8c9f210f53a');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('00000000ff', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'ae4ead19f06e56edd10277a11e732e9dac3f19a553dd8a7f64f853ec7af672dc');
            });
        });

        context('1 coinbase + 2 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('08aa', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'e351930c80f6bab944e287294405c1ea205b8440cb57c0de7d3b47c7034dfa50');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirst(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'eef41ac27831108b06c6c081af647670cdc7a435fb91ead83400892eff4f70c6');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('00000000ff', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'd278a58d613c4c391b63126c157d48662b01909d5a650ff6c699514a8e37e4b5');
            });
        });


        context('1 coinbase + 5 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('08AA', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '64c27b24ad526582ec76ecb400833c4bc3e424841abc533a110b5ebe35ec3853');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirst(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'a9043309e752a87f6c7458b22bd22a431b11efdf8de43f89f7bd5de03ec7d3c9');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirst(Buffer.from('00000000FF', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '99b44cf2d6ce434680ef337fa075289ca33954ed1f2bcf83596bc86caa280a65');
            });
        });
    });

    describe('withFirstHash function', () => {

        context('1 coinbase hash + 0 transaction hash', () => {
            beforeEach(() => {
                tree = new MintTxMerkleTree([])
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('1be5800f8c245696342e4a67ceda519bc09fa2bdbb9a42462ee558e300edb5d6', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '1be5800f8c245696342e4a67ceda519bc09fa2bdbb9a42462ee558e300edb5d6');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirstHash(Buffer.from(
                    'a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirstHash(Buffer.from(
                    '13eccd04d31faed241d478b41c012f9794fe105893d0348b6c54338529f7402d', 'hex'));
                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '13eccd04d31faed241d478b41c012f9794fe105893d0348b6c54338529f7402d');
            });
        });

        context('1 coinbase hash + 1 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('b1ce2da04bdef562b7fd3b3fcc1124bd4412a0549129beeb164b7136901c13d3', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '1834cd1d91cdf6df1b38bd81ee742e79a9b55f0a7153505f2d7778c85b4ce581');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '49bcaf1fe9da8acb5ad947bdc1087d730c20067965509b097bbc7e1f4caaf2eb');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('c10e17a29adc6a6713cdd5a4be68a665b28c4d4963bf1643894ed2bf25d0917e', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'd7993b2d34af07d9bd89ede1c9b27e3ae5b01b04f13a08c78db5f11717913cfb');
            });
        });

        context('1 coinbase hash + 2 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('9e814d8034de8382dc44ed63d0c82bc1dd97a583e585588f1b4585af3fca3008', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '5dcea099b993ee5e86f97459ccb3a43212c537f27b0542da9d8ec0e26b1fb872');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'a4c7a0936c39836302243cdb6e44a508b3d3e1d0e365d7b5872fd49ec8f7be90');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('455e18f15e263e480dd38ab7ac16f6dc941c1d8981070e90c79264feb76271f1', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '49a3a7b2b308b4bb4f4248b85a5815c6ece57bdc26a495d1a7ebd4337bedc943');
            });
        });

        context('1 coinbase hash + 5 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return correct value (1)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('7c5596bc77c4fb0516a64d4da3502ea192b4778fd582c23ab246d44c61e14f4c', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    '32ff8d9e0241597af551b32e2d2dcaac4df09429d82ab730d83e19a137d1877e');
            });

            it('should return correct value (2)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'd21a26a6cdc613b112b3c31f44795062344aa5c4ccbac580f5b576717619b58f');
            });

            it('should return correct value (3)', () => {
                const merkleHashBuf = tree.withFirstHash(
                    Buffer.from('5ffc046f32436442199580edc8b3d2e1fcaeb957200e094fc44deea75fa645df', 'hex'));

                assert.strictEqual(merkleHashBuf.toString('hex'),
                    'e5c60278db36f7f90109bd4ea480ae255205b7153d2d2002695061614cd4830e');
            });
        });
    });


    describe('branchBufArr property', () => {

        context('0 transaction hash', () => {
            beforeEach(() => {
                tree = new MintTxMerkleTree([])
            });

            it('should return an empty array', () => {
                assert.strictEqual(tree.branchBufArr.length, 0);
            });
        });

        context('1 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return an array with 1 element', () => {
                assert.strictEqual(tree.branchBufArr.length, 1);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[0]), true);
                assert.strictEqual(tree.branchBufArr[0].toString('hex'),
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });
        });

        context('2 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return array with 2 elements', () => {
                assert.strictEqual(tree.branchBufArr.length, 2);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[0]), true);
                assert.strictEqual(tree.branchBufArr[0].toString('hex'),
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });

            it('should have correct value in element 1', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[1]), true);
                assert.strictEqual(tree.branchBufArr[1].toString('hex'),
                    'd3c83aff2dd280e165339b7a1898907fde3437b40ffee92f2833994d640eb30a');
            });
        });

        context('5 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return an array with 3 elements', () => {
                assert.strictEqual(tree.branchBufArr.length, 3);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[0]), true);
                assert.strictEqual(tree.branchBufArr[0].toString('hex'),
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });

            it('should have correct value in element 1', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[1]), true);
                assert.strictEqual(tree.branchBufArr[1].toString('hex'),
                    '23eee960b4cb72c3c62a4ba9fcb60411f0983dd47b68a2661bd17b66ef29ef42');
            });

            it('should have correct value in element 2', () => {
                assert.strictEqual(Buffer.isBuffer(tree.branchBufArr[2]), true);
                assert.strictEqual(tree.branchBufArr[2].toString('hex'),
                    'e797daf37fb52ce7d505dde82c843260222443808b53ed02cb164c9e50ea6381');
            });
        });
    });


    describe('branchHexArr property', () => {

        context('0 transaction hash', () => {
            beforeEach(() => {
                tree = new MintTxMerkleTree([])
            });

            it('should return an empty array', () => {
                assert.strictEqual(tree.branchHexArr.length, 0);
            });
        });

        context('1 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return an array with 1 elements', () => {
                assert.strictEqual(tree.branchHexArr.length, 1);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(typeof tree.branchHexArr[0] === 'string', true);
                assert.strictEqual(tree.branchHexArr[0],
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });
        });

        context('2 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return an array with 2 elements', () => {
                assert.strictEqual(tree.branchHexArr.length, 2);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(typeof tree.branchHexArr[0] === 'string', true);
                assert.strictEqual(tree.branchHexArr[0],
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });

            it('should have correct value in element 1', () => {
                assert.strictEqual(typeof tree.branchHexArr[1] === 'string', true);
                assert.strictEqual(tree.branchHexArr[1],
                    'd3c83aff2dd280e165339b7a1898907fde3437b40ffee92f2833994d640eb30a');
            });
        });

        context('5 transaction hash', () => {
            beforeEach(() => {
                const dataArr = [
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ];
                tree = new MintTxMerkleTree(dataArr);
            });

            it('should return an array with 3 elements', () => {
                assert.strictEqual(tree.branchHexArr.length, 3);
            });

            it('should have correct value in element 0', () => {
                assert.strictEqual(typeof tree.branchHexArr[0] === 'string', true);
                assert.strictEqual(tree.branchHexArr[0],
                    '1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3');
            });

            it('should have correct value in element 1', () => {
                assert.strictEqual(typeof tree.branchHexArr[1] === 'string', true);
                assert.strictEqual(tree.branchHexArr[1],
                    '23eee960b4cb72c3c62a4ba9fcb60411f0983dd47b68a2661bd17b66ef29ef42');
            });

            it('should have correct value in element 2', () => {
                assert.strictEqual(typeof tree.branchHexArr[2] === 'string', true);
                assert.strictEqual(tree.branchHexArr[2],
                    'e797daf37fb52ce7d505dde82c843260222443808b53ed02cb164c9e50ea6381');
            });
        });
    });
});