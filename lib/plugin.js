const createAuth0Client = require('@auth0/auth0-spa-js')

export default async function (ctx, inject) {
    const $auth = await createAuth0Client({
        domain: '<%= options.domain %>',
        client_id: '<%= options.clientId %>',
        audience: '<%= options.audience %>'
      });

    inject('auth0', $auth)
    ctx.$auth0 = $auth
}
