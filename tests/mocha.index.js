'use strict';

const
    assert = require('assert'),
    merkle = require('./../index');


describe('mint-merkle', () => {

    describe('rootFromHashArr function', () => {

        context('0 leaves', () => {
            it('should return correct value', () => {
                const merkleRootBuf = merkle.rootFromHashArr([]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '0000000000000000000000000000000000000000000000000000000000000000');
            });
        });

        context('1 leaf', () => {

            it('should return correct value (1)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('1be5800f8c245696342e4a67ceda519bc09fa2bdbb9a42462ee558e300edb5d6', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '1be5800f8c245696342e4a67ceda519bc09fa2bdbb9a42462ee558e300edb5d6');
            });

            it('should return correct value (2)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    'a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2');
            });

            it('should return correct value (3)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('13eccd04d31faed241d478b41c012f9794fe105893d0348b6c54338529f7402d', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '13eccd04d31faed241d478b41c012f9794fe105893d0348b6c54338529f7402d');
            });
        });

        context('2 leaves', () => {

            it('should return correct value (1)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('b1ce2da04bdef562b7fd3b3fcc1124bd4412a0549129beeb164b7136901c13d3', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '1834cd1d91cdf6df1b38bd81ee742e79a9b55f0a7153505f2d7778c85b4ce581');
            });

            it('should return correct value (2)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '49bcaf1fe9da8acb5ad947bdc1087d730c20067965509b097bbc7e1f4caaf2eb');
            });

            it('should return correct value (3)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('c10e17a29adc6a6713cdd5a4be68a665b28c4d4963bf1643894ed2bf25d0917e', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    'd7993b2d34af07d9bd89ede1c9b27e3ae5b01b04f13a08c78db5f11717913cfb');
            });
        });

        context('3 leaves', () => {

            it('should return correct value (1)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('9e814d8034de8382dc44ed63d0c82bc1dd97a583e585588f1b4585af3fca3008', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '5dcea099b993ee5e86f97459ccb3a43212c537f27b0542da9d8ec0e26b1fb872');
            });

            it('should return correct value (2)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    'a4c7a0936c39836302243cdb6e44a508b3d3e1d0e365d7b5872fd49ec8f7be90');
            });

            it('should return correct value (3)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('455e18f15e263e480dd38ab7ac16f6dc941c1d8981070e90c79264feb76271f1', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '49a3a7b2b308b4bb4f4248b85a5815c6ece57bdc26a495d1a7ebd4337bedc943');
            });
        });

        context('6 leaves', () => {

            it('should return correct value (1)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('7c5596bc77c4fb0516a64d4da3502ea192b4778fd582c23ab246d44c61e14f4c', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    '32ff8d9e0241597af551b32e2d2dcaac4df09429d82ab730d83e19a137d1877e');
            });

            it('should return correct value (2)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('a7716404c8b4acc087fdfc95844cf73b09469b6c403b29e75e61570e30b368d2', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    'd21a26a6cdc613b112b3c31f44795062344aa5c4ccbac580f5b576717619b58f');
            });

            it('should return correct value (3)', () => {
                const merkleRootBuf = merkle.rootFromHashArr([
                    Buffer.from('5ffc046f32436442199580edc8b3d2e1fcaeb957200e094fc44deea75fa645df', 'hex'),
                    Buffer.from('1837a1d6b0ec2f0e644162b2b8c03181afdaf15cce8b717a55603cdf150670e3', 'hex'),
                    Buffer.from('c5be304d3ac69f2431e457c70cd35a609c32835720876ab9385d94fbf227dd5a', 'hex'),
                    Buffer.from('25860feced44ed41e6436d9a8361933c78fd7f6b6eac7339ca4e5c7f43de7d7c', 'hex'),
                    Buffer.from('7901af93a8804984b3b0d8de98710463ae98ce106c10c75ca2964002e04084f3', 'hex'),
                    Buffer.from('b51b5faebb55755b4fd0215ccb13cc8e0764a50dceabbe212bb491903892571f', 'hex')
                ]);
                assert.strictEqual(merkleRootBuf.toString('hex'),
                    'e5c60278db36f7f90109bd4ea480ae255205b7153d2d2002695061614cd4830e');
            });
        });
    });
});