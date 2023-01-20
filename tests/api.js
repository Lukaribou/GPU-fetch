const assert = require("assert");

const api = require("../build/api").GpuApi;

describe('API', function () {
    describe('#login()', function () {
        it('should refuse connection if bad password', async function () {
            const log = await api.login({username: '213622', password: '456'});
            assert.match(log.data, /incorrect/gm);
        });

        it('should not refuse the connection if good password', async function () {
            const log = await api.login({username: '213622', password: '123'});
            assert.doesNotMatch(log.data, /incorrect/gm);
        });
    });
});