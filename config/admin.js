module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6278125d365ee2f27a4bca5213635a9e'),
  },
});
