module.exports = {
  title: 'Express Status',
  theme: 'default.css',
  path: '/status',
  socketPath: '/socket.io',
  namespace: '/',
  port: null,
  websocket: null,
  spans: [
    {
      interval: 1,
      retention: 60,
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  iframe: false,
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    heap: true,
    eventLoop: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  ignoreStartsWith: '/admin',
  healthChecks: [],
};
