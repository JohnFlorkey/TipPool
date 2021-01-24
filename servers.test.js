describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add new servers to the server table on updateServerTable()', function() {
    allServers = {
      'server1': {'serverName': 'Alice'},
      'server2': {'serverName': 'Flo'}
    };
    updateServerTable();
    const server1 = document.getElementById('server1').cells[0].innerText;
    const server2 = document.getElementById('server2').cells[0].innerText;
    expect(serverTbody.childElementCount).toEqual(2);

    expect(server1).toEqual('Alice');
    expect(server2).toEqual('Flo');
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverNameInput.value = '';
    serverId = 0
    updateServerTable();
  });
});
