require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mb'
  },
  production: {
    client: 'pg',
    connection: "postgres://gnzmxcukwaoanf:3addd753cc1060f079f5524c800d9c8248af121c3c3304b09a6c656e6573755a@ec2-50-17-217-166.compute-1.amazonaws.com:5432/d7irddktv1t3fm"
  },
};
