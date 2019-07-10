const createAuth0Client = require('@auth0/auth0-spa-js')

export default async function (ctx, inject) {
    const $auth = await createAuth0Client({
        domain: '<%= options.domain %>',
        client_id: '<%= options.clientId %>',
        audience: 'http://localhost:3000/'
      });
    inject('auth0', $auth)
    ctx.$auth0 = $auth
}
